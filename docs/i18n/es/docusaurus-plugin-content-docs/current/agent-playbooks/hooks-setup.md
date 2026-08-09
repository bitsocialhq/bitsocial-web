# Configuración de hooks para agentes

Si su asistente de programación con IA admite hooks de ciclo de vida, configúrelos para este repositorio.

## Hooks recomendados

| Hook            | Comando                                       | Propósito                                                                                                                                                                                                                                                                      |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formatear los archivos automáticamente después de que la IA los edite                                                                                                                                                                                                          |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Ejecutar `corepack yarn install` cuando cambie `package.json`                                                                                                                                                                                                                  |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Cuando un diff añade primitivas `useEffect`/memo en `about/src/`, recordar al agente que las reconsidere con las skills de revisión de React                                                                                                                                   |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Podar las referencias obsoletas y borrar las ramas de tarea temporales ya integradas                                                                                                                                                                                           |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Volver a revisar el diff actual en busca de nuevos efectos o memos de React en `about/src/` antes de la verificación final                                                                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Exigir como control bloqueante la verificación de compilación dirigida, el lint, la comprobación de tipos y el formato; dejar `yarn npm audit` como información y ejecutar `yarn knip` aparte, como auditoría orientativa, cuando cambien las dependencias o las importaciones |

## Por qué

- Formato coherente
- El lockfile se mantiene sincronizado
- Cada nuevo `useEffect` o memo añadido en el sitio about recibe una segunda revisión explícita antes de que el agente termine
- Los problemas de compilación, lint o tipos del workspace afectado se detectan pronto, sin forzar la compilación completa multiidioma de la documentación en cada tarea
- Visibilidad de seguridad gracias a `yarn npm audit`
- La deriva de dependencias e importaciones se puede revisar con `yarn knip` sin convertirlo en un ruidoso hook de parada global
- Una única implementación de hooks compartida entre Codex y Cursor
- Las ramas de tarea temporales se mantienen alineadas con el flujo de worktrees del repositorio

## Ejemplos de scripts de hook

### Hook de formato

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

### Hook de verificación

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

De forma predeterminada, `scripts/agent-hooks/verify.sh` termina con un código distinto de cero cuando falla una comprobación obligatoria. Active `AGENT_VERIFY_MODE=advisory` solo cuando necesite deliberadamente obtener señal de un árbol roto sin bloquear el hook. Mantenga `yarn knip` fuera del control bloqueante salvo que el repositorio decida explícitamente fallar ante problemas orientativos de importaciones o dependencias.

Los hooks de ciclo de vida no sustituyen la verificación manual en el navegador. Ante cambios de interfaz o visuales, siga ejecutando las comprobaciones de `playwright-cli` en `chrome`, `firefox` y `webkit`, además de un recorrido con viewport móvil en cada motor cuando cambie la adaptabilidad o el comportamiento táctil.

### Hook de instalación de Yarn

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

Configure el cableado de los hooks según la documentación de su herramienta de agentes (`hooks.json` o su equivalente).

En este repositorio, `.codex/hooks/*.sh` y `.cursor/hooks/*.sh` deben seguir siendo envoltorios ligeros que delegan en las implementaciones compartidas de `scripts/agent-hooks/`.
