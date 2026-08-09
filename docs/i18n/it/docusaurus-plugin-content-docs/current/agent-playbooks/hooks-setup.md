# Configurazione degli hook per gli agenti

Se il tuo assistente di programmazione AI supporta gli hook del ciclo di vita, configurali per questo repository.

## Hook consigliati

| Hook            | Comando                                       | Scopo                                                                                                                                                                                                                     |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatta automaticamente i file dopo le modifiche dell'AI                                                                                                                                                                 |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Esegue `corepack yarn install` quando `package.json` cambia                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Quando un diff aggiunge primitive `useEffect`/memo in `about/src/`, ricorda all'agente di riconsiderare la scelta con le skill di revisione React                                                                         |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Ripulisce i riferimenti obsoleti ed elimina i branch temporanei di lavoro già integrati                                                                                                                                   |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Riesamina il diff corrente alla ricerca di nuovi effetti/memo React in `about/src/` prima del gate finale di verifica                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Blocca in modo rigido la verifica mirata di build, lint, typecheck e formattazione; mantiene `yarn npm audit` a scopo informativo ed esegue `yarn knip` a parte come audit consultivo quando cambiano dipendenze o import |

## Perché

- Formattazione coerente
- Il lockfile resta sincronizzato
- Le nuove aggiunte di `useEffect`/memo nel sito about ricevono un secondo esame esplicito prima che l'agente concluda
- Problemi di build, lint e tipi rilevanti per il workspace individuati presto, senza imporre a ogni task la build completa multilingua della documentazione
- Visibilità sulla sicurezza tramite `yarn npm audit`
- La deriva di dipendenze e import si può controllare con `yarn knip` senza trasformarlo in un rumoroso hook di stop globale
- Un'unica implementazione degli hook condivisa tra Codex e Cursor
- I branch temporanei di lavoro restano allineati al flusso con worktree del repository

## Esempi di script per gli hook

### Hook di formattazione

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

### Hook di verifica

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

Per impostazione predefinita, `scripts/agent-hooks/verify.sh` esce con un codice diverso da zero quando un controllo obbligatorio fallisce. Imposta `AGENT_VERIFY_MODE=advisory` solo quando ti serve intenzionalmente il segnale da un albero rotto senza bloccare l'hook. Tieni `yarn knip` fuori dal gate rigido, a meno che il repository non decida esplicitamente di far fallire la verifica sui problemi consultivi di import e dipendenze.

Gli hook del ciclo di vita non sostituiscono la verifica manuale nel browser. Per le modifiche di UI o visive, esegui comunque i controlli con `playwright-cli` su `chrome`, `firefox` e `webkit`, più un flusso su viewport mobile in ogni motore quando cambia il comportamento responsive o quello touch.

### Hook di installazione Yarn

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

Configura il collegamento degli hook secondo la documentazione del tuo strumento agente (`hooks.json`, equivalenti, ecc.).

In questo repository, `.codex/hooks/*.sh` e `.cursor/hooks/*.sh` devono restare thin wrapper che delegano alle implementazioni condivise sotto `scripts/agent-hooks/`.
