# Konfiguracja haków agenta

Jeśli Twój asystent programistyczny AI obsługuje haki cyklu życia, skonfiguruj je dla tego repozytorium.

## Zalecane haki

| Hak             | Polecenie                                     | Cel                                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Automatyczne formatowanie plików po edycjach AI                                                                                                                                                                                         |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Uruchamia `corepack yarn install`, gdy zmienia się `package.json`                                                                                                                                                                       |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Gdy diff dodaje prymitywy `useEffect`/memo w `about/src/`, przypomina agentowi, aby przemyślał zmianę z pomocą umiejętności do przeglądu React                                                                                          |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Czyści nieaktualne referencje i usuwa zintegrowane tymczasowe gałęzie zadań                                                                                                                                                             |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Ponownie skanuje bieżący diff pod kątem nowych efektów i memo React w `about/src/` przed końcową bramką weryfikacji                                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Twarda bramka: ukierunkowana weryfikacja kompilacji, lint, typecheck i sprawdzenie formatowania; `yarn npm audit` pozostaje informacyjne, a `yarn knip` uruchamiaj osobno jako audyt doradczy, gdy zmieniają się zależności lub importy |

## Dlaczego

- Spójne formatowanie
- Plik blokady pozostaje zsynchronizowany
- Nowe wystąpienia `useEffect`/memo w witrynie about dostają jawne drugie spojrzenie, zanim agent zakończy pracę
- Problemy z kompilacją, lintem i typami istotne dla danego workspace'u wychwytywane wcześnie, bez wymuszania pełnej wielojęzycznej kompilacji dokumentacji przy każdym zadaniu
- Widoczność kwestii bezpieczeństwa dzięki `yarn npm audit`
- Dryf zależności i importów można sprawdzać przez `yarn knip`, bez zamieniania go w hałaśliwy globalny hak zatrzymujący
- Jedna wspólna implementacja haków dla Codex i Cursor
- Tymczasowe gałęzie zadań pozostają zgodne z opartym na worktree przepływem pracy repozytorium

## Przykładowe skrypty haków

### Hak formatujący

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

### Hak weryfikujący

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

Domyślnie `scripts/agent-hooks/verify.sh` kończy się kodem różnym od zera, gdy wymagane sprawdzenie zawiedzie. Ustawiaj `AGENT_VERIFY_MODE=advisory` tylko wtedy, gdy celowo potrzebujesz sygnału z zepsutego drzewa bez blokowania haka. Trzymaj `yarn knip` poza twardą bramką, chyba że repozytorium jawnie zdecyduje, że doradcze problemy z importami i zależnościami mają być traktowane jako błędy.

Haki cyklu życia nie zastępują ręcznej weryfikacji w przeglądarce. Przy zmianach UI lub wizualnych nadal uruchamiaj sprawdzenia `playwright-cli` w `chrome`, `firefox` i `webkit`, a gdy zmieniła się responsywność albo obsługa dotyku — dodatkowo przepływ w mobilnym viewporcie w każdym silniku.

### Hak instalacji Yarn

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

Podłączenie haków skonfiguruj zgodnie z dokumentacją swojego narzędzia agentowego (`hooks.json`, odpowiednik itp.).

W tym repozytorium `.codex/hooks/*.sh` i `.cursor/hooks/*.sh` powinny pozostać cienkimi nakładkami, które delegują do wspólnych implementacji w `scripts/agent-hooks/`.
