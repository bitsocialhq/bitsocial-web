# Nastavení hooků pro agenty

Pokud váš AI asistent pro psaní kódu podporuje hooky životního cyklu, nastavte si pro tento repozitář ty následující.

## Doporučené hooky

| Hook            | Příkaz                                        | Účel                                                                                                                                                                                                         |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Automatické formátování souborů po úpravách AI                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Spustí `corepack yarn install`, když se změní `package.json`                                                                                                                                                 |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Když diff přidá primitiva `useEffect` nebo memo v `about/src/`, připomene agentovi, aby změnu znovu zvážil pomocí dovedností pro kontrolu Reactu                                                             |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Ořeže zastaralé reference a smaže začleněné dočasné větve úloh                                                                                                                                               |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Před závěrečnou ověřovací branou znovu prohledá aktuální diff na nové React efekty a memo v `about/src/`                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Tvrdá brána pro cílené ověření buildu, lint, typovou kontrolu a kontrolu formátu; `yarn npm audit` zůstává informativní a `yarn knip` se při změně závislostí nebo importů spouští zvlášť jako poradní audit |

## Proč

- Konzistentní formátování
- Lockfile zůstává synchronizovaný
- Každé nové přidání `useEffect` nebo memo na webu about projde před dokončením agenta výslovnou druhou kontrolou
- Problémy s buildem, lintem a typy relevantní pro daný workspace se odhalí včas, aniž by se u každé úlohy vynucoval plný vícejazyčný build dokumentace
- Přehled o bezpečnosti díky `yarn npm audit`
- Odchylky v závislostech a importech lze kontrolovat pomocí `yarn knip`, aniž by se z toho stal hlučný globální stop hook
- Jedna sdílená implementace hooků pro Codex i Cursor
- Dočasné větve úloh zůstávají v souladu s pracovním postupem worktree v tomto repozitáři

## Ukázkové skripty hooků

### Formátovací hook

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

### Ověřovací hook

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

Ve výchozím stavu `scripts/agent-hooks/verify.sh` skončí nenulovým kódem, když některá povinná kontrola selže. `AGENT_VERIFY_MODE=advisory` nastavte jen tehdy, když záměrně potřebujete signál z rozbitého stromu, aniž by hook blokoval. `yarn knip` držte mimo tvrdou bránu, dokud se v repozitáři výslovně nerozhodne, že poradní problémy s importy a závislostmi mají být důvodem k selhání.

Hooky životního cyklu nenahrazují ruční ověření v prohlížeči. U změn v uživatelském rozhraní nebo ve vzhledu i nadále spouštějte kontroly přes `playwright-cli` v enginech `chrome`, `firefox` a `webkit` a v každém z nich projděte také mobilní viewport, pokud se změnila responzivita nebo chování dotyku.

### Hook pro instalaci Yarn

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

Zapojení hooků nastavte podle dokumentace svého agentního nástroje (`hooks.json` a podobně).

V tomto repozitáři mají `.codex/hooks/*.sh` a `.cursor/hooks/*.sh` zůstat tenkými obaly, které delegují na sdílené implementace pod `scripts/agent-hooks/`.
