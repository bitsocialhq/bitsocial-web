# Skills y herramientas

Use este manual cuando configure o ajuste skills y herramientas externas.

## Skills recomendadas

### Context7 (documentación de librerías)

Para consultar documentación actualizada de librerías.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Use `playwright-cli` para automatizar el navegador (navegación, interacción, capturas de pantalla, pruebas y extracción de datos).

Cuando use `playwright-cli` para verificar la interfaz del repositorio, no se detenga en un solo motor. Ejecute el flujo correspondiente en los tres motores de navegador principales:

- `chrome` para Blink
- `firefox` para Gecko
- `webkit` para la cobertura de Safari/WebKit

Use sesiones con nombre distinto para cada motor, de modo que la evidencia quede separada, pero ejecute esas sesiones de forma secuencial. Solo puede haber una sesión de navegador de Playwright activa a la vez en toda la máquina, porque el recurso en disputa es la RAM y la CPU del equipo, no el repositorio. Abra y cierre las sesiones con `./scripts/pw-session.sh`; ese script mantiene el bloqueo compartido para que los agentes concurrentes aplacen y reintenten el trabajo de navegador en lugar de saturar la máquina. Si decide omitir un motor a propósito, deje constancia del motivo.

Durante la iteración, use únicamente Chrome/Blink. Ejecute la secuencia completa de Chrome, Firefox y WebKit una vez que el cambio esté listo para la verificación final. Reutilice la sesión de cada motor para escritorio y móvil redimensionándola, ciérrela en una limpieza de tipo finally y solo entonces abra el siguiente motor.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Cuando la ranura está ocupada, `open` termina con el código 75; en lugar de reintentar a mano, espere con `./scripts/pw-session.sh open --wait[=SECONDS] ...` (300 s por omisión). Un bloqueo que haya quedado tras un flujo interrumpido se recupera automáticamente, porque `open` libera cualquier ranura cuyo navegador registrado ya no esté en ejecución. Inspeccione quién la ocupa con `./scripts/pw-session.sh status`; `release <session>` es el último recurso para el caso poco frecuente en que `status` no logra confirmar el estado del navegador.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Ubicaciones de instalación de la skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Para una guía más profunda de rendimiento en React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Descubra e instale skills del ecosistema abierto.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Motivo de la política sobre MCP

Evite los servidores MCP de GitHub y de navegador en este proyecto, porque añaden una sobrecarga importante de esquemas de herramientas y de contexto.

- Operaciones de GitHub: use la CLI `gh`.
- Operaciones de navegador: use `playwright-cli`.

## Disponibilidad de modelos

- `composer-2` solo está disponible en Cursor. No lo configure en `.claude/` ni en `.codex/`.
- Codex no documenta un alias de modelo `latest`. Los TOML de agentes personalizados versionados en `.codex/**/agents/*.toml` omiten tanto `model` como `model_reasoning_effort`, de modo que heredan la configuración de la sesión padre en curso.
