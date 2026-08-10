# Uppsättning av agent-hooks

Om din AI-kodassistent stöder livscykel-hooks bör du konfigurera följande för det här repot.

## Rekommenderade hooks

| Hook            | Kommando                                      | Syfte                                                                                                                                                                                                              |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatera filer automatiskt efter AI-redigeringar                                                                                                                                                                  |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Kör `corepack yarn install` när `package.json` ändras                                                                                                                                                              |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | När en diff lägger till `useEffect`- eller memo-primitiver i `about/src/`, påminn agenten om att ompröva ändringen med skills för React-granskning                                                                 |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Rensa bort inaktuella refs och ta bort integrerade tillfälliga uppgiftsgrenar                                                                                                                                      |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Skanna om den aktuella diffen efter nya React-effekter och memos i `about/src/` innan den avslutande verifieringsgrinden                                                                                           |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Blockerande grind för riktad byggverifiering, lint, typkontroll och formatkontroll; håll `yarn npm audit` informativt och kör `yarn knip` separat som en rådgivande granskning när beroenden eller importer ändras |

## Varför

- Konsekvent formatering
- Låsfilen hålls synkroniserad
- Nya `useEffect`- och memo-tillägg i about-sajten får en uttrycklig extra genomgång innan agenten avslutar
- Bygg-, lint- och typproblem som rör den berörda arbetsytan fångas tidigt, utan att varje uppgift tvingar fram hela det flerspråkiga dokumentationsbygget
- Säkerhetsinsyn via `yarn npm audit`
- Avvikelser i beroenden och importer kan kontrolleras med `yarn knip` utan att det blir en brusig global stop-hook
- En gemensam hook-implementation för både Codex och Cursor
- Tillfälliga uppgiftsgrenar hålls i linje med repots worktree-arbetsflöde

## Exempel på hook-skript

### Formateringshook

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

### Verifieringshook

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

Som standard avslutas `scripts/agent-hooks/verify.sh` med en nollskild kod när en obligatorisk kontroll misslyckas. Sätt `AGENT_VERIFY_MODE=advisory` bara när du medvetet behöver signal från ett trasigt träd utan att blockera hooken. Håll `yarn knip` utanför den blockerande grinden om inte repot uttryckligen bestämmer sig för att låta rådgivande import- och beroendeproblem ge fel.

Livscykel-hooks ersätter inte manuell verifiering i webbläsare. Vid UI-ändringar eller visuella ändringar ska du fortfarande köra `playwright-cli`-kontroller i `chrome`, `firefox` och `webkit`, plus ett flöde i mobilstorlek i varje motor när responsivitet eller pekbeteende har ändrats.

### Yarn install-hook

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

Koppla in hookarna enligt dokumentationen för ditt agentverktyg (`hooks.json` eller motsvarande).

I det här repot ska `.codex/hooks/*.sh` och `.cursor/hooks/*.sh` förbli tunna omslag som delegerar till de delade implementationerna under `scripts/agent-hooks/`.
