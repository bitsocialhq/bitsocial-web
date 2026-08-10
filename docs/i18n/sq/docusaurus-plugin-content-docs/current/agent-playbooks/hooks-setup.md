# Konfigurimi i hook-eve të agjentit

Nëse asistenti juaj i kodimit me AI mbështet hook-e të ciklit jetësor, konfiguroni këto për këtë depo.

## Hook-et e rekomanduara

| Hook            | Komanda                                       | Qëllimi                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formaton automatikisht skedarët pas redaktimeve nga AI                                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Ekzekuton `corepack yarn install` kur ndryshon `package.json`                                                                                                                                                             |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Kur një diff shton primitiva `useEffect`/memo në `about/src/`, i kujton agjentit t'i rishqyrtojë me aftësitë e rishikimit të React                                                                                        |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Pastron referencat e vjetruara dhe fshin degët e përkohshme të detyrave që tashmë janë integruar                                                                                                                          |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Riskanon diff-in aktual për efekte/memo të reja React në `about/src/` përpara portës përfundimtare të verifikimit                                                                                                         |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Portë e fortë për verifikimin e synuar të ndërtimit, lint, kontroll tipash dhe kontroll formati; mban `yarn npm audit` informativ dhe ekzekuton `yarn knip` veçmas si auditim këshillues kur ndryshojnë varësitë/importet |

## Pse

- Formatim i njëtrajtshëm
- Lockfile-i qëndron i sinkronizuar
- Shtimet e reja të `useEffect`/memo në sajtin about marrin një rishikim të dytë të qartë përpara se agjenti të përfundojë
- Problemet e ndërtimit, të lint-it dhe të tipave që prekin hapësirën e punës kapen herët, pa e detyruar ndërtimin e plotë shumëgjuhësh të dokumentacionit në çdo detyrë
- Dukshmëri e sigurisë përmes `yarn npm audit`
- Zhvendosja e varësive dhe e importeve mund të kontrollohet me `yarn knip` pa e kthyer atë në një hook global e të zhurmshëm në fazën stop
- Një zbatim i vetëm i përbashkët i hook-eve si për Codex ashtu edhe për Cursor
- Degët e përkohshme të detyrave qëndrojnë në linjë me rrjedhën e punës me worktree të depos

## Shembuj skriptesh hook

### Hook-u i formatimit

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

### Hook-u i verifikimit

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

Si parazgjedhje, `scripts/agent-hooks/verify.sh` del me kod jo zero kur dështon një kontroll i detyrueshëm. Vendoseni `AGENT_VERIFY_MODE=advisory` vetëm kur ju duhet qëllimisht sinjal nga një pemë e prishur pa e bllokuar hook-un. Mbajeni `yarn knip` jashtë portës së fortë, përveçse kur depoja vendos shprehimisht të dështojë për probleme këshilluese importesh apo varësish.

Hook-et e ciklit jetësor nuk e zëvendësojnë verifikimin manual në shfletues. Për ndryshime në ndërfaqe ose në pamje, ekzekutoni gjithsesi kontrollet me `playwright-cli` në `chrome`, `firefox` dhe `webkit`, plus një rrjedhë me pamje celulare në secilin motor kur ka ndryshuar reagueshmëria ose sjellja me prekje.

### Hook-u i instalimit me Yarn

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

Konfiguroni lidhjen e hook-eve sipas dokumentacionit të veglës suaj të agjentëve (`hooks.json`, ekuivalent, etj.).

Në këtë depo, `.codex/hooks/*.sh` dhe `.cursor/hooks/*.sh` duhet të mbeten mbështjellës të hollë që delegojnë te zbatimet e përbashkëta nën `scripts/agent-hooks/`.
