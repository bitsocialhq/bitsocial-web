# Pag-setup ng Agent Hooks

Kung sinusuportahan ng iyong AI coding assistant ang mga lifecycle hook, i-configure ang mga ito para sa repong ito.

## Mga Inirerekomendang Hook

| Hook            | Utos                                          | Layunin                                                                                                                                                                                                                                            |
| --------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Awtomatikong i-format ang mga file pagkatapos ng mga pag-edit ng AI                                                                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Patakbuhin ang `corepack yarn install` kapag nagbago ang `package.json`                                                                                                                                                                            |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Kapag nagdagdag ang isang diff ng mga primitive na `useEffect`/memo sa `about/src/`, paalalahanan ang ahente na muling pag-isipan ito gamit ang mga React review skill                                                                             |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Alisin ang mga lipas na ref at burahin ang mga naisamang pansamantalang task branch                                                                                                                                                                |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Muling i-scan ang kasalukuyang diff para sa mga bagong React effect/memo sa `about/src/` bago ang panghuling verify gate                                                                                                                           |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Hard-gate na targeted build verification, lint, typecheck, at mga format check; panatilihing pang-impormasyon lamang ang `yarn npm audit` at patakbuhin nang hiwalay ang `yarn knip` bilang advisory audit kapag nagbago ang mga dependency/import |

## Bakit

- Pare-parehong pag-format
- Nananatiling naka-sync ang lockfile
- Tahasang nasusuri muli ang mga bagong dagdag na `useEffect`/memo sa about site bago matapos ang ahente
- Maagang nahuhuli ang mga isyu sa build/lint/type na nauugnay sa workspace nang hindi pinipilit ang buong multi-locale docs build sa bawat gawain
- Nakikita ang mga isyu sa seguridad sa pamamagitan ng `yarn npm audit`
- Masusuri ang dependency/import drift gamit ang `yarn knip` nang hindi ito ginagawang maingay na global stop hook
- Iisang nakabahaging implementasyon ng hook para sa Codex at Cursor
- Nananatiling nakahanay ang mga pansamantalang task branch sa worktree workflow ng repo

## Mga Halimbawang Hook Script

### Hook ng Pag-format

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

### Hook ng Pag-verify

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

Bilang default, lumalabas ang `scripts/agent-hooks/verify.sh` nang hindi zero kapag nabigo ang isang kinakailangang pagsusuri. Itakda ang `AGENT_VERIFY_MODE=advisory` lamang kapag sinadya mong kailangan ng signal mula sa sirang puno nang hindi hinaharangan ang hook. Panatilihin ang `yarn knip` sa labas ng hard gate maliban kung tahasang magpasya ang repo na mabigo dahil sa mga advisory na isyu sa import/dependency.

Hindi pinapalitan ng mga lifecycle hook ang manwal na pag-verify sa browser. Para sa mga pagbabago sa UI o sa hitsura, patakbuhin pa rin ang mga pagsusuri ng `playwright-cli` sa `chrome`, `firefox`, at `webkit`, kasama ang isang daloy sa mobile viewport sa bawat engine kapag nagbago ang responsiveness o ang gawi sa touch.

### Hook ng Yarn Install

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

I-configure ang wiring ng hook ayon sa dokumentasyon ng iyong agent tool (`hooks.json`, katumbas nito, atbp.).

Sa repong ito, dapat manatiling manipis na wrapper ang `.codex/hooks/*.sh` at `.cursor/hooks/*.sh` na nagde-delegate sa mga nakabahaging implementasyon sa ilalim ng `scripts/agent-hooks/`.
