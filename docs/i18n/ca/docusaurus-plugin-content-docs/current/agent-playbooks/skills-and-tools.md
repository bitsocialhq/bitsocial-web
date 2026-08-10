# Skills i eines

Utilitzeu aquest playbook quan configureu o ajusteu skills i eines externes.

## Skills recomanades

### Context7 (documentació de biblioteques)

Per obtenir documentació actualitzada de biblioteques.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Utilitzeu `playwright-cli` per a l'automatització del navegador (navegació, interacció, captures de pantalla, proves, extracció).

Quan feu servir `playwright-cli` per verificar la interfície del repositori, no us atureu després d'un sol motor. Executeu el flux corresponent als tres motors de navegador principals:

- `chrome` per a Blink
- `firefox` per a Gecko
- `webkit` per a la cobertura de Safari/WebKit

Utilitzeu sessions amb nom separades per a cada motor perquè les evidències quedin aïllades, però executeu aquestes sessions de manera seqüencial. Només hi pot haver una sessió de navegador de Playwright activa alhora a tota la màquina, perquè el recurs en disputa és la RAM i la CPU de la màquina, no el repositori. Obriu i tanqueu les sessions amb `./scripts/pw-session.sh`; aquest script manté aquest bloqueig compartit perquè els agents concurrents ajornin i reintentin la feina de navegador en lloc de saturar la màquina. Si ometeu un motor de manera intencionada, deixeu constància del motiu.

Durant la iteració, feu servir només Chrome/Blink. Executeu la seqüència completa de Chrome, Firefox i WebKit quan el canvi ja estigui a punt per a la verificació final. Reutilitzeu la sessió de cada motor per a escriptori i mòbil redimensionant-la, tanqueu-la en una neteja d'estil finally i només llavors obriu el motor següent.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Quan la ranura està ocupada, `open` surt amb el codi 75; espereu amb `./scripts/pw-session.sh open --wait[=SECONDS] ...` (300 s per defecte) en lloc de reintentar-ho a mà. Un bloqueig deixat enrere per un flux de treball interromput es recupera automàticament, perquè `open` allibera qualsevol ranura el navegador registrat de la qual ja no s'estigui executant. Per veure qui el reté, feu servir `./scripts/pw-session.sh status`; `release <session>` és un últim recurs per al cas poc habitual en què `status` no pugui verificar l'estat del navegador.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Ubicacions d'instal·lació de les skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Per a orientació més detallada sobre rendiment amb React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Descobriu i instal·leu skills de l'ecosistema obert.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Justificació de la política sobre MCP

Eviteu els servidors MCP de GitHub i els MCP de navegador en aquest projecte perquè afegeixen una sobrecàrrega considerable d'esquema d'eines i de context.

- Operacions de GitHub: feu servir la CLI `gh`.
- Operacions de navegador: feu servir `playwright-cli`.

## Disponibilitat de models

- `composer-2` només està disponible a Cursor. No el configureu sota `.claude/` ni `.codex/`.
- Codex no documenta cap àlies de model `latest`. Els fitxers TOML d'agents personalitzats desats sota `.codex/**/agents/*.toml` ometen tant `model` com `model_reasoning_effort`, de manera que hereten la configuració actual de la sessió pare.
