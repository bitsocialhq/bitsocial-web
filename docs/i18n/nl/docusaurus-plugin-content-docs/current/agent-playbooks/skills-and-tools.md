# Skills en tools

Gebruik dit draaiboek bij het opzetten of aanpassen van skills en externe tooling.

## Aanbevolen skills

### Context7 (bibliotheekdocumentatie)

Voor actuele documentatie over bibliotheken.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Gebruik `playwright-cli` voor browserautomatisering (navigatie, interactie, schermafbeeldingen, tests, extractie).

Stop niet na één engine wanneer je `playwright-cli` gebruikt om de UI van deze repository te verifiëren. Draai de relevante flow in alle drie de belangrijkste browserengines:

- `chrome` voor Blink
- `firefox` voor Gecko
- `webkit` voor dekking van Safari/WebKit

Gebruik per engine een aparte benoemde sessie zodat het bewijsmateriaal gescheiden blijft, maar draai die sessies na elkaar. Er mag op de hele machine slechts één Playwright-browsersessie tegelijk actief zijn, omdat het schaarse middel het RAM en de CPU van de machine is en niet de repository. Open en sluit sessies via `./scripts/pw-session.sh`; dat script houdt die gedeelde lock vast, zodat gelijktijdige agents browserwerk uitstellen en opnieuw proberen in plaats van de machine te overbelasten. Als een engine bewust wordt overgeslagen, leg dan vast waarom.

Gebruik tijdens het itereren alleen Chrome/Blink. Draai de volledige reeks Chrome, Firefox en WebKit zodra de wijziging klaar is voor de eindverificatie. Hergebruik elke enginesessie voor desktop en mobiel door hem van formaat te veranderen, sluit hem af in een finally-achtige opruimstap en open pas daarna de volgende engine.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Wanneer de plek bezet is, eindigt `open` met code 75; wacht dan met `./scripts/pw-session.sh open --wait[=SECONDS] ...` (standaard 300s) in plaats van handmatig opnieuw te proberen. Een lock die is achtergebleven door een afgebroken workflow wordt automatisch teruggenomen, omdat `open` elke plek vrijgeeft waarvan de geregistreerde browser niet meer draait. Bekijk wie de lock vasthoudt met `./scripts/pw-session.sh status`; `release <session>` is een laatste redmiddel voor het zeldzame geval dat `status` de browserstatus niet kan controleren.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Installatielocaties van skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Voor diepgaandere richtlijnen over React-/Next-prestaties.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Skills uit het open ecosysteem ontdekken en installeren.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Onderbouwing van het MCP-beleid

Vermijd GitHub-MCP- en browser-MCP-servers voor dit project, omdat ze aanzienlijke overhead in toolschema's en context toevoegen.

- GitHub-bewerkingen: gebruik de `gh` CLI.
- Browserbewerkingen: gebruik `playwright-cli`.

## Beschikbaarheid van modellen

- `composer-2` is alleen beschikbaar in Cursor. Configureer het niet onder `.claude/` of `.codex/`.
- Codex documenteert geen `latest`-modelalias. De vastgelegde TOML-bestanden voor custom agents onder `.codex/**/agents/*.toml` laten zowel `model` als `model_reasoning_effort` weg, zodat ze de instellingen van de huidige bovenliggende sessie overnemen.
