# Skills og værktøjer

Brug denne spillebog, når du opsætter eller justerer skills og eksternt værktøj.

## Anbefalede skills

### Context7 (biblioteksdokumentation)

Til opdateret dokumentation om biblioteker.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Brug `playwright-cli` til browserautomatisering (navigation, interaktion, skærmbilleder, tests, udtræk).

Når du bruger `playwright-cli` til UI-verifikation i repoet, må du ikke stoppe efter én motor. Kør det relevante flow i alle tre vigtigste browsermotorer:

- `chrome` til Blink
- `firefox` til Gecko
- `webkit` til dækning af Safari/WebKit

Brug separate navngivne sessioner pr. motor, så beviserne holdes adskilt, men kør sessionerne sekventielt. Kun én Playwright-browsersession må være aktiv ad gangen på hele maskinen, fordi den ressource, der kæmpes om, er maskinens RAM og CPU snarere end selve repoet. Åbn og luk sessioner via `./scripts/pw-session.sh`; det er den, der holder den fælles lås, så samtidige agenter udskyder browserarbejdet og prøver igen i stedet for at overbelaste maskinen. Hvis en motor bevidst springes over, så notér hvorfor.

Under iteration bruger du kun Chrome/Blink. Kør hele sekvensen med Chrome, Firefox og WebKit, når ændringen er klar til endelig verifikation. Genbrug hver motorsession til både desktop og mobil ved at ændre dens størrelse, luk den i en finally-agtig oprydning, og åbn først derefter den næste motor.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Når pladsen er optaget, afslutter `open` med kode 75; bloker på `./scripts/pw-session.sh open --wait[=SECONDS] ...` (standard 300s) i stedet for at prøve igen i hånden. En lås, som et afbrudt arbejdsforløb har efterladt, bliver automatisk taget tilbage, fordi `open` frigiver enhver plads, hvis registrerede browser ikke længere kører. Undersøg indehaveren med `./scripts/pw-session.sh status`; `release <session>` er en sidste udvej i det sjældne tilfælde, hvor `status` ikke kan verificere browserens tilstand.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Placeringer for installation af skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Til dybere vejledning om ydeevne i React og Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Find og installer skills fra det åbne økosystem.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Begrundelse for MCP-politikken

Undgå GitHub MCP og browser-MCP-servere i dette projekt, fordi de tilføjer betydelig overhead i værktøjsskema og kontekst.

- GitHub-operationer: brug `gh` CLI.
- Browseroperationer: brug `playwright-cli`.

## Modeltilgængelighed

- `composer-2` er kun tilgængelig i Cursor. Konfigurer den ikke under `.claude/` eller `.codex/`.
- Codex dokumenterer ikke et `latest`-modelalias. De committede TOML-filer til brugerdefinerede agenter under `.codex/**/agents/*.toml` udelader både `model` og `model_reasoning_effort`, så de arver den aktuelle forældresessions indstillinger.
