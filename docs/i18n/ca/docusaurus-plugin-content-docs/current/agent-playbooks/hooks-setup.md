# Configuració dels hooks d'agent

Si el vostre assistent de programació amb IA admet hooks de cicle de vida, configureu-los per a aquest repositori.

## Hooks recomanats

| Hook            | Ordre                                         | Finalitat                                                                                                                                                                                                                        |
| --------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formata automàticament els fitxers després de les edicions de la IA                                                                                                                                                              |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Executa `corepack yarn install` quan canvia `package.json`                                                                                                                                                                       |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Quan un diff afegeix primitives `useEffect`/memo a `about/src/`, recorda a l'agent que ho reconsideri amb les skills de revisió de React                                                                                         |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Esporga les referències obsoletes i suprimeix les branques temporals de tasca ja integrades                                                                                                                                      |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Torna a analitzar el diff actual per buscar efectes/memos nous de React a `about/src/` abans de la barrera de verificació final                                                                                                  |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Barrera estricta de verificació de compilació dirigida, lint, comprovació de tipus i format; manté `yarn npm audit` com a informatiu i executa `yarn knip` a part com a auditoria consultiva quan canvien dependències o imports |

## Per què

- Format coherent
- El lockfile es manté sincronitzat
- Les noves incorporacions de `useEffect`/memo al lloc about reben una segona revisió explícita abans que l'agent acabi
- Els problemes de compilació, lint o tipus rellevants per a l'espai de treball es detecten aviat sense forçar la compilació completa multiidioma de la documentació a cada tasca
- Visibilitat de seguretat mitjançant `yarn npm audit`
- La desviació de dependències i imports es pot comprovar amb `yarn knip` sense convertir-lo en un hook de parada global i sorollós
- Una única implementació de hook compartida per a Codex i Cursor
- Les branques temporals de tasca es mantenen alineades amb el flux de treball de worktrees del repositori

## Exemples de scripts de hook

### Hook de format

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

### Hook de verificació

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

Per defecte, `scripts/agent-hooks/verify.sh` surt amb un codi diferent de zero quan falla una comprovació obligatòria. Establiu `AGENT_VERIFY_MODE=advisory` només quan necessiteu intencionadament obtenir senyal d'un arbre trencat sense bloquejar el hook. Mantingueu `yarn knip` fora de la barrera estricta tret que el repositori decideixi explícitament fallar davant de problemes consultius d'imports o de dependències.

Els hooks de cicle de vida no substitueixen la verificació manual al navegador. Per a canvis d'interfície o visuals, executeu igualment comprovacions amb `playwright-cli` a `chrome`, `firefox` i `webkit`, i afegiu-hi un flux amb finestra mòbil a cada motor quan hagi canviat la responsivitat o el comportament tàctil.

### Hook d'instal·lació de Yarn

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

Configureu la connexió dels hooks segons la documentació de la vostra eina d'agent (`hooks.json`, equivalent, etc.).

En aquest repositori, `.codex/hooks/*.sh` i `.cursor/hooks/*.sh` han de continuar sent embolcalls prims que deleguen a les implementacions compartides sota `scripts/agent-hooks/`.
