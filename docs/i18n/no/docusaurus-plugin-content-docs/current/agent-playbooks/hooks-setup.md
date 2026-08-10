# Oppsett av agent-hooks

Hvis AI-kodeassistenten din støtter livssyklus-hooks, konfigurer disse for dette repoet.

## Anbefalte hooks

| Hook            | Kommando                                      | Formål                                                                                                                                                                                                |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formater filer automatisk etter AI-redigeringer                                                                                                                                                       |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Kjør `corepack yarn install` når `package.json` endres                                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Når en diff legger til `useEffect`- eller memo-primitiver i `about/src/`, minn agenten på å revurdere med React-gjennomgangsferdighetene                                                              |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Rydd bort utdaterte refs og slett integrerte midlertidige oppgavebrancher                                                                                                                             |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Skann gjeldende diff på nytt for nye React-effekter/memoer i `about/src/` før den siste verifiseringsporten                                                                                           |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Hard port for målrettet build-verifisering, lint, typesjekk og formatsjekk; hold `yarn npm audit` informativ og kjør `yarn knip` separat som en rådgivende revisjon når avhengigheter/importer endres |

## Hvorfor

- Konsistent formatering
- Lockfilen holder seg synkronisert
- Nye tillegg av `useEffect`/memo på about-siden får en eksplisitt ekstra vurdering før agenten avslutter
- Build-, lint- og typeproblemer som er relevante for workspacet fanges tidlig, uten å tvinge fram den fulle flerspråklige docs-builden på hver eneste oppgave
- Sikkerhetsinnsyn via `yarn npm audit`
- Drift i avhengigheter og importer kan sjekkes med `yarn knip` uten å gjøre det til en støyende global stop-hook
- Én delt hook-implementasjon for både Codex og Cursor
- Midlertidige oppgavebrancher holder seg på linje med repoets worktree-arbeidsflyt

## Eksempler på hook-skript

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

### Verifiseringshook

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

Som standard avslutter `scripts/agent-hooks/verify.sh` med en verdi ulik null når en påkrevd sjekk feiler. Sett `AGENT_VERIFY_MODE=advisory` bare når du bevisst trenger signal fra et ødelagt tre uten å blokkere hooken. Hold `yarn knip` utenfor den harde porten med mindre repoet uttrykkelig bestemmer seg for å feile på rådgivende import- og avhengighetsproblemer.

Livssyklus-hooks erstatter ikke manuell nettleserverifisering. For UI-endringer eller visuelle endringer må du fortsatt kjøre `playwright-cli`-sjekker på tvers av `chrome`, `firefox` og `webkit`, pluss en flyt i mobilvisning i hver motor når responsivitet eller berøringsatferd er endret.

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

Sett opp koblingen av hooks i tråd med dokumentasjonen for agentverktøyet ditt (`hooks.json`, tilsvarende, og så videre).

I dette repoet bør `.codex/hooks/*.sh` og `.cursor/hooks/*.sh` forbli tynne innpakninger som delegerer til de delte implementasjonene under `scripts/agent-hooks/`.
