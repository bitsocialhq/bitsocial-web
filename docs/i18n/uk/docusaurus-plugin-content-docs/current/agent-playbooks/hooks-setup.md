# Налаштування хуків для агентів

Якщо ваш AI-асистент для програмування підтримує хуки життєвого циклу, налаштуйте для цього репозиторію наведені нижче.

## Рекомендовані хуки

| Хук             | Команда                                       | Призначення                                                                                                                                                                                                 |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Автоматично форматувати файли після правок AI                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Запускати `corepack yarn install`, коли змінюється `package.json`                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Коли діф додає примітиви `useEffect`/memo в `about/src/`, нагадати агентові переглянути рішення за допомогою навичок рев’ю React                                                                            |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Прибирати застарілі рефи та видаляти вже інтегровані тимчасові гілки задач                                                                                                                                  |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Повторно просканувати поточний діф на нові ефекти й мемо React у `about/src/` перед фінальним гейтом перевірки                                                                                              |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Жорстко гейтити цільову перевірку збірки, лінт, перевірку типів і форматування; тримати `yarn npm audit` інформаційним, а `yarn knip` запускати окремо як дорадчий аудит при змінах залежностей чи імпортів |

## Навіщо

- Послідовне форматування
- Lock-файл лишається синхронізованим
- Нові додавання `useEffect`/memo на сайті about отримують явний повторний огляд перед завершенням роботи агента
- Проблеми збірки, лінту й типів, релевантні для робочої області, виявляються рано, без примусової повної багатомовної збірки документації на кожній задачі
- Видимість проблем безпеки через `yarn npm audit`
- Дрейф залежностей та імпортів можна перевіряти через `yarn knip`, не перетворюючи це на шумний глобальний stop-хук
- Одна спільна реалізація хуків і для Codex, і для Cursor
- Тимчасові гілки задач лишаються узгодженими з процесом робочих дерев у репозиторії

## Приклади скриптів для хуків

### Хук форматування

```bash
#!/bin/bash
# Auto-format JS/TS files after AI edits
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

case "$file_path" in
  *.js|*.jsx|*.ts|*.tsx|*.mjs|*.cjs|*.json|*.css) corepack yarn exec oxfmt "$file_path" 2>/dev/null ;;
esac
exit 0
```

### Хук перевірки

```bash
#!/bin/bash
# Run targeted build verification, lint, typecheck, format check, and security audit when agent finishes

cat > /dev/null  # consume stdin
status=0
corepack yarn build:verify || status=1
corepack yarn lint || status=1
corepack yarn typecheck || status=1
corepack yarn format:check || status=1
echo "=== yarn npm audit ===" && (corepack yarn npm audit || true)  # informational
exit $status
```

За замовчуванням `scripts/agent-hooks/verify.sh` завершується з ненульовим кодом, коли обов’язкова перевірка падає. Встановлюйте `AGENT_VERIFY_MODE=advisory` лише тоді, коли ви свідомо хочете отримати сигнал зі зламаного дерева, не блокуючи хук. Тримайте `yarn knip` поза жорстким гейтом, доки репозиторій явно не вирішить падати на дорадчих проблемах з імпортами чи залежностями.

Хуки життєвого циклу не замінюють ручної перевірки в браузері. Для змін в UI чи візуальної поведінки все одно запускайте перевірки `playwright-cli` у `chrome`, `firefox` і `webkit`, а також сценарій із мобільним вьюпортом у кожному рушії, коли змінилася адаптивність або поведінка дотиків.

### Хук встановлення залежностей Yarn

```bash
#!/bin/bash
# Run corepack yarn install when package.json is changed
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

if [ -z "$file_path" ]; then
  exit 0
fi

if [ "$file_path" = "package.json" ]; then
  cd "$(dirname "$0")/../.." || exit 0
  echo "package.json changed - running corepack yarn install to update yarn.lock..."
  corepack yarn install
fi

exit 0
```

Налаштовуйте підключення хуків згідно з документацією вашого агентського інструмента (`hooks.json`, аналог тощо).

У цьому репозиторії `.codex/hooks/*.sh` і `.cursor/hooks/*.sh` мають лишатися тонкими обгортками, які делегують роботу спільним реалізаціям у `scripts/agent-hooks/`.
