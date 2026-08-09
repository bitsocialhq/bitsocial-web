# Настройка хуков для агентов

Если ваш ИИ-ассистент для программирования поддерживает хуки жизненного цикла, настройте их для этого репозитория.

## Рекомендуемые хуки

| Хук             | Команда                                       | Назначение                                                                                                                                                                                                    |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Автоформатирование файлов после правок ИИ                                                                                                                                                                     |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Запуск `corepack yarn install` при изменении `package.json`                                                                                                                                                   |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Когда дифф добавляет `useEffect`/memo-примитивы в `about/src/`, напомнить агенту пересмотреть решение с помощью навыков ревью React                                                                           |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Удаление устаревших ссылок и уже влитых временных веток задач                                                                                                                                                 |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Повторное сканирование текущего диффа на новые эффекты и мемоизации React в `about/src/` перед финальной проверкой                                                                                            |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Жёсткая проверка целевой сборки, линта, типов и форматирования; `yarn npm audit` остаётся информационным, а `yarn knip` запускается отдельно как рекомендательный аудит при изменении зависимостей и импортов |

## Зачем

- Единообразное форматирование
- Lock-файл остаётся синхронизированным
- Новые добавления `useEffect` и мемоизаций на about-сайте получают явную повторную проверку до того, как агент закончит работу
- Проблемы сборки, линта и типов в затронутом workspace выявляются рано, без принудительной полной мультиязычной сборки документации на каждой задаче
- Прозрачность по безопасности через `yarn npm audit`
- Дрейф зависимостей и импортов можно проверять через `yarn knip`, не превращая его в шумный глобальный stop-хук
- Одна общая реализация хуков для Codex и Cursor
- Временные ветки задач остаются согласованными с worktree-процессом репозитория

## Примеры скриптов хуков

### Хук форматирования

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

### Хук проверки

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

По умолчанию `scripts/agent-hooks/verify.sh` завершается с ненулевым кодом, когда обязательная проверка не проходит. Устанавливайте `AGENT_VERIFY_MODE=advisory` только тогда, когда вам намеренно нужен сигнал от сломанного дерева без блокировки хука. Держите `yarn knip` вне жёсткой проверки, пока репозиторий явно не решит падать на рекомендательных замечаниях по импортам и зависимостям.

Хуки жизненного цикла не заменяют ручную проверку в браузере. Для изменений UI или визуального поведения по-прежнему прогоняйте проверки `playwright-cli` в `chrome`, `firefox` и `webkit`, а также сценарий на мобильном вьюпорте в каждом движке, если менялась адаптивность или поведение касаний.

### Хук установки Yarn

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

Настраивайте подключение хуков согласно документации вашего агентского инструмента (`hooks.json` или эквивалент).

В этом репозитории `.codex/hooks/*.sh` и `.cursor/hooks/*.sh` должны оставаться тонкими обёртками, которые делегируют работу общим реализациям в `scripts/agent-hooks/`.
