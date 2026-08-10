# Ügynöki hookok beállítása

Ha az AI-kódolóasszisztense támogatja az életciklus-hookokat, állítsa be az alábbiakat ehhez a repóhoz.

## Ajánlott hookok

| Hook            | Parancs                                       | Cél                                                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Fájlok automatikus formázása az AI-szerkesztések után                                                                                                                                                                                                   |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `corepack yarn install` futtatása, amikor a `package.json` változik                                                                                                                                                                                     |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Ha egy diff `useEffect`/memo primitíveket ad hozzá az `about/src/` alatt, emlékezteti az ügynököt, hogy gondolja újra a React-review skillekkel                                                                                                         |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Elavult refek metszése és a beolvasztott ideiglenes feladatágak törlése                                                                                                                                                                                 |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Az aktuális diff újbóli átvizsgálása új React-effektek és -memók után az `about/src/` alatt, a záró ellenőrzési kapu előtt                                                                                                                              |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Kemény kapu a célzott build-ellenőrzéshez, linthez, típusellenőrzéshez és formátumellenőrzéshez; a `yarn npm audit` maradjon tájékoztató jellegű, a `yarn knip` pedig külön, tanácsadó auditként fusson, amikor a függőségek vagy az importok változnak |

## Miért

- Egységes formázás
- A lockfile szinkronban marad
- Az about-oldalon megjelenő új `useEffect`/memo kiegészítések kifejezett második átnézést kapnak, mielőtt az ügynök befejezi a munkát
- A workspace szempontjából releváns build-, lint- és típusproblémák korán kiderülnek anélkül, hogy minden feladatnál ki kellene kényszeríteni a teljes többnyelvű dokumentációs buildet
- Biztonsági rálátás a `yarn npm audit` révén
- A függőségek és importok elsodródása a `yarn knip` paranccsal ellenőrizhető anélkül, hogy zajos, globális stop hookká válna
- Egyetlen közös hookimplementáció a Codex és a Cursor számára
- Az ideiglenes feladatágak összhangban maradnak a repó munkafa-munkafolyamatával

## Példa hookszkriptek

### Formázó hook

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

### Ellenőrző hook

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

Alapértelmezés szerint a `scripts/agent-hooks/verify.sh` nem nulla kóddal lép ki, ha egy kötelező ellenőrzés elbukik. Az `AGENT_VERIFY_MODE=advisory` beállítást csak akkor használja, ha szándékosan szeretne jelzést kapni egy hibás fáról anélkül, hogy a hook blokkolna. A `yarn knip` maradjon a kemény kapun kívül, hacsak a repó kifejezetten úgy nem dönt, hogy tanácsadó import- és függőségi problémákon is elbukik.

Az életciklus-hookok nem helyettesítik a kézi böngészős ellenőrzést. UI- vagy vizuális változásoknál továbbra is futtasson `playwright-cli` ellenőrzéseket `chrome`, `firefox` és `webkit` motorokon, valamint mindegyik motorban egy mobil nézetablakos folyamatot, ha a reszponzivitás vagy az érintéses viselkedés változott.

### Yarn install hook

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

A hookok bekötését az ügynökeszköz dokumentációja szerint állítsa be (`hooks.json` vagy ennek megfelelője stb.).

Ebben a repóban a `.codex/hooks/*.sh` és a `.cursor/hooks/*.sh` fájlok maradjanak vékony burkolók, amelyek a `scripts/agent-hooks/` alatti közös implementációkra delegálnak.
