# Agent-hooks instellen

Als je AI-programmeerassistent lifecycle-hooks ondersteunt, stel die dan in voor deze repository.

## Aanbevolen hooks

| Hook            | Commando                                      | Doel                                                                                                                                                                                                          |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Bestanden automatisch formatteren na bewerkingen door de AI                                                                                                                                                   |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `corepack yarn install` draaien wanneer `package.json` verandert                                                                                                                                              |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Wanneer een diff `useEffect`/memo-primitieven toevoegt in `about/src/`, de agent eraan herinneren de keuze te heroverwegen met de React-reviewskills                                                          |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Verouderde refs opschonen en geïntegreerde tijdelijke taakbranches verwijderen                                                                                                                                |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | De huidige diff opnieuw scannen op nieuwe React-effects/memo's in `about/src/` vóór de laatste verificatiepoort                                                                                               |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Gerichte buildverificatie, lint, typecheck en formatcontroles als harde poort; `yarn npm audit` informatief houden en `yarn knip` apart draaien als adviserende audit wanneer dependencies/imports veranderen |

## Waarom

- Consistente opmaak
- De lockfile blijft synchroon
- Nieuwe toevoegingen van `useEffect`/memo in de about-site krijgen expliciet een tweede blik voordat de agent afrondt
- Build-, lint- en typeproblemen die relevant zijn voor de workspace worden vroeg opgemerkt, zonder bij elke taak de volledige multilocale docs-build af te dwingen
- Zicht op beveiliging via `yarn npm audit`
- Drift in dependencies/imports kan met `yarn knip` gecontroleerd worden zonder er een luidruchtige globale stop-hook van te maken
- Eén gedeelde hook-implementatie voor zowel Codex als Cursor
- Tijdelijke taakbranches blijven in lijn met de worktree-workflow van de repository

## Voorbeelden van hookscripts

### Format-hook

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

### Verificatie-hook

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

Standaard eindigt `scripts/agent-hooks/verify.sh` met een niet-nul-status wanneer een vereiste controle mislukt. Zet `AGENT_VERIFY_MODE=advisory` alleen wanneer je bewust signaal uit een kapotte boom wilt halen zonder de hook te blokkeren. Houd `yarn knip` buiten de harde poort, tenzij de repository expliciet besluit te falen op adviserende import- of dependencyproblemen.

Lifecycle-hooks vervangen geen handmatige browserverificatie. Draai bij UI- of visuele wijzigingen nog steeds `playwright-cli`-controles in `chrome`, `firefox` en `webkit`, plus een flow op een mobiel viewport in elke engine wanneer responsiviteit of aanraakgedrag is veranderd.

### Yarn-install-hook

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

Richt de hook-bedrading in volgens de documentatie van je agenttool (`hooks.json` of een equivalent daarvan).

In deze repository moeten `.codex/hooks/*.sh` en `.cursor/hooks/*.sh` dunne wrappers blijven die delegeren aan de gedeelde implementaties onder `scripts/agent-hooks/`.
