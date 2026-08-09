# Configurarea hook-urilor pentru agenți

Dacă asistentul dumneavoastră AI de programare suportă hook-uri de ciclu de viață, configurați-le pe acestea pentru depozitul de față.

## Hook-uri recomandate

| Hook            | Comandă                                       | Scop                                                                                                                                                                                                                                      |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatează automat fișierele după modificările făcute de AI                                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Rulează `corepack yarn install` când se modifică `package.json`                                                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Când un diff adaugă primitive `useEffect`/memo în `about/src/`, îi amintește agentului să reanalizeze decizia cu skill-urile de revizuire React                                                                                           |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Curăță referințele învechite și șterge ramurile temporare de lucru deja integrate                                                                                                                                                         |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Rescanează diff-ul curent după efecte/memo React noi în `about/src/` înainte de bariera finală de verificare                                                                                                                              |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Impune ca barieră fermă verificarea țintită a build-ului, lint, typecheck și verificarea formatării; păstrează `yarn npm audit` informativ și rulează `yarn knip` separat, ca audit consultativ, când se schimbă dependențe sau importuri |

## De ce

- Formatare consecventă
- Lockfile-ul rămâne sincronizat
- Fiecare `useEffect`/memo nou adăugat în site-ul about primește o a doua privire explicită înainte ca agentul să încheie
- Problemele de build, lint și tipuri relevante pentru workspace sunt prinse devreme, fără a impune build-ul complet multilingv al documentației la fiecare sarcină
- Vizibilitate asupra securității prin `yarn npm audit`
- Devierea dependențelor și a importurilor poate fi verificată cu `yarn knip` fără a-l transforma într-un hook global de oprire, zgomotos
- O singură implementare de hook-uri, comună pentru Codex și Cursor
- Ramurile temporare de lucru rămân aliniate cu fluxul de worktree-uri al depozitului

## Exemple de scripturi de hook

### Hook de formatare

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

### Hook de verificare

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

În mod implicit, `scripts/agent-hooks/verify.sh` iese cu cod diferit de zero atunci când o verificare obligatorie eșuează. Setați `AGENT_VERIFY_MODE=advisory` doar când aveți nevoie în mod intenționat de semnal dintr-un arbore stricat, fără a bloca hook-ul. Țineți `yarn knip` în afara barierei ferme, cu excepția cazului în care depozitul decide explicit să eșueze la probleme consultative de importuri sau dependențe.

Hook-urile de ciclu de viață nu înlocuiesc verificarea manuală în browser. Pentru modificări de interfață sau vizuale, rulați în continuare verificări `playwright-cli` în `chrome`, `firefox` și `webkit`, plus un flux pe viewport mobil în fiecare motor atunci când s-a schimbat comportamentul responsiv sau cel tactil.

### Hook pentru instalarea Yarn

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

Configurați legarea hook-urilor conform documentației instrumentului dumneavoastră de agent (`hooks.json`, echivalent etc.).

În acest depozit, `.codex/hooks/*.sh` și `.cursor/hooks/*.sh` ar trebui să rămână simple învelișuri care deleagă către implementările comune din `scripts/agent-hooks/`.
