# Opsætning af agent-hooks

Hvis din AI-kodeassistent understøtter livscyklus-hooks, så konfigurer disse for dette repo.

## Anbefalede hooks

| Hook            | Kommando                                      | Formål                                                                                                                                                                                                    |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatér filer automatisk efter AI-redigeringer                                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Kør `corepack yarn install`, når `package.json` ændres                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Når en diff tilføjer `useEffect`/memo-primitiver i `about/src/`, så mind agenten om at genoverveje med React-review-skills                                                                                |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Beskær forældede refs og slet integrerede midlertidige opgavegrene                                                                                                                                        |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Skan den aktuelle diff igennem igen for nye React-effects/memos i `about/src/` før den afsluttende verifikationsport                                                                                      |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Hård port foran målrettet build-verifikation, lint, typecheck og formatkontrol; hold `yarn npm audit` informativ, og kør `yarn knip` separat som vejledende audit, når afhængigheder eller imports ændres |

## Hvorfor

- Ensartet formatering
- Lockfilen holdes synkroniseret
- Nye `useEffect`/memo-tilføjelser på about-sitet får et eksplicit ekstra eftersyn, før agenten afslutter
- Build-, lint- og typeproblemer i det relevante workspace fanges tidligt, uden at hver opgave tvinges gennem det fulde docs-build med alle sprog
- Sikkerhedsindblik via `yarn npm audit`
- Afvigelser i afhængigheder og imports kan tjekkes med `yarn knip`, uden at det bliver til et støjende globalt stop-hook
- Én fælles hook-implementering til både Codex og Cursor
- Midlertidige opgavegrene forbliver på linje med repoets worktree-arbejdsgang

## Eksempler på hook-scripts

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

### Verify-hook

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

Som standard afslutter `scripts/agent-hooks/verify.sh` med en fejlkode, når en påkrævet kontrol fejler. Sæt kun `AGENT_VERIFY_MODE=advisory`, når du bevidst har brug for signal fra et brudt træ uden at blokere hooket. Hold `yarn knip` uden for den hårde port, medmindre repoet eksplicit beslutter at fejle på vejledende problemer med imports og afhængigheder.

Livscyklus-hooks erstatter ikke manuel browserverifikation. Ved UI-ændringer eller visuelle ændringer skal du stadig køre `playwright-cli`-kontroller i `chrome`, `firefox` og `webkit` samt et flow i mobilviewport i hver motor, når responsivitet eller touch-adfærd er ændret.

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

Konfigurer opkoblingen af hooks efter dokumentationen for dit agentværktøj (`hooks.json`, tilsvarende osv.).

I dette repo skal `.codex/hooks/*.sh` og `.cursor/hooks/*.sh` forblive tynde wrappers, der uddelegerer til de fælles implementeringer under `scripts/agent-hooks/`.
