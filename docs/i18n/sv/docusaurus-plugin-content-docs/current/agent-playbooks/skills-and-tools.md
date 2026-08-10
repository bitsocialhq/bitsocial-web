# Skills och verktyg

Använd den här spelboken när du sätter upp eller justerar skills och externa verktyg.

## Rekommenderade skills

### Context7 (biblioteksdokumentation)

För aktuell dokumentation om bibliotek.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Använd `playwright-cli` för webbläsarautomation (navigering, interaktion, skärmbilder, tester, extrahering).

När du använder `playwright-cli` för att verifiera repots gränssnitt ska du inte nöja dig med en enda motor. Kör det aktuella flödet i alla tre stora webbläsarmotorer:

- `chrome` för Blink
- `firefox` för Gecko
- `webkit` för täckning av Safari/WebKit

Använd separata namngivna sessioner per motor så att bevisen hålls åtskilda, men kör sessionerna sekventiellt. Bara en Playwright-webbläsarsession får vara aktiv åt gången på hela maskinen, eftersom resursen som konkurrensutsätts är maskinens minne och processorkraft snarare än repot. Öppna och stäng sessioner via `./scripts/pw-session.sh`; skriptet håller det delade låset så att samtidiga agenter skjuter upp och försöker igen i stället för att mätta maskinen. Om en motor medvetet hoppas över ska du notera varför.

Under iterationen använder du bara Chrome/Blink. Kör hela sekvensen Chrome, Firefox och WebKit när ändringen är redo för slutlig verifiering. Återanvänd varje motorsession för både dator och mobil genom att ändra storlek på den, stäng den i ett avslutande upprensningssteg och öppna först därefter nästa motor.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

När platsen är upptagen avslutas `open` med kod 75; blockera då på `./scripts/pw-session.sh open --wait[=SECONDS] ...` (standard 300 s) i stället för att försöka igen för hand. Ett lås som lämnats kvar av ett avbrutet arbetsflöde återtas automatiskt, eftersom `open` släpper varje plats vars registrerade webbläsare inte längre körs. Undersök vem som håller låset med `./scripts/pw-session.sh status`; `release <session>` är en sista utväg för de sällsynta fall då `status` inte kan bekräfta webbläsarens tillstånd.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Installationsplatser för skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

För djupare vägledning om prestanda i React och Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Hitta och installera skills från det öppna ekosystemet.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Motivering till MCP-policyn

Undvik GitHub-MCP och webbläsar-MCP-servrar i det här projektet, eftersom de lägger till betydande overhead i verktygsscheman och kontext.

- GitHub-operationer: använd `gh` CLI.
- Webbläsaroperationer: använd `playwright-cli`.

## Modelltillgänglighet

- `composer-2` finns bara i Cursor. Konfigurera den inte under `.claude/` eller `.codex/`.
- Codex dokumenterar inget modellalias vid namn `latest`. Incheckade TOML-filer för egna agenter under `.codex/**/agents/*.toml` utelämnar både `model` och `model_reasoning_effort`, så att de ärver den aktuella föräldrasessionens inställningar.
