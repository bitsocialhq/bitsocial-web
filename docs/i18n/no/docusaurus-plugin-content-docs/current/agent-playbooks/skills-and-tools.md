# Ferdigheter og verktøy

Bruk denne håndboken når du setter opp eller justerer ferdigheter og eksternt verktøy.

## Anbefalte ferdigheter

### Context7 (biblioteksdokumentasjon)

For oppdatert dokumentasjon om biblioteker.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Bruk `playwright-cli` til nettleserautomatisering (navigasjon, interaksjon, skjermbilder, tester, uthenting).

Når du bruker `playwright-cli` til UI-verifisering av repoet, ikke stopp etter én motor. Kjør den aktuelle flyten i alle de tre viktigste nettlesermotorene:

- `chrome` for Blink
- `firefox` for Gecko
- `webkit` for dekning av Safari/WebKit

Bruk egne navngitte økter per motor slik at bevisene holdes adskilt, men kjør øktene sekvensielt. Bare én Playwright-nettleserøkt kan være aktiv om gangen, på hele maskinen, fordi ressursen det er kamp om er maskinens RAM og CPU og ikke selve repositoriet. Åpne og lukk økter via `./scripts/pw-session.sh`; skriptet holder den delte låsen, slik at samtidige agenter utsetter nettleserarbeidet og prøver igjen i stedet for å overbelaste maskinen. Hvis en motor med vilje hoppes over, noter hvorfor.

Bruk bare Chrome/Blink underveis mens du itererer. Kjør hele sekvensen med Chrome, Firefox og WebKit når endringen er klar for endelig verifisering. Gjenbruk hver motorøkt til både desktop og mobil ved å endre størrelsen på vinduet, lukk økten i en finally-aktig opprydding, og åpne først da neste motor.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Når plassen er opptatt, avslutter `open` med kode 75; blokker da på `./scripts/pw-session.sh open --wait[=SECONDS] ...` (standard 300 s) i stedet for å prøve på nytt for hånd. En lås som er etterlatt av en avbrutt arbeidsflyt blir tatt tilbake automatisk, fordi `open` frigjør enhver plass der den registrerte nettleseren ikke lenger kjører. Undersøk hvem som holder plassen med `./scripts/pw-session.sh status`; `release <session>` er en siste utvei for det sjeldne tilfellet der `status` ikke klarer å slå fast nettlesertilstanden.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Installasjonssteder for ferdigheter:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

For dypere ytelsesveiledning for React og Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Finn ferdigheter

Oppdag og installer ferdigheter fra det åpne økosystemet.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Begrunnelse for MCP-policyen

Unngå GitHub MCP og MCP-servere for nettleser i dette prosjektet, fordi de gir betydelig ekstrabelastning på verktøyskjema og kontekst.

- GitHub-operasjoner: bruk `gh` CLI.
- Nettleseroperasjoner: bruk `playwright-cli`.

## Modelltilgjengelighet

- `composer-2` er bare tilgjengelig i Cursor. Ikke konfigurer den under `.claude/` eller `.codex/`.
- Codex dokumenterer ikke noe `latest`-modellalias. Innsjekkede TOML-filer for egendefinerte agenter under `.codex/**/agents/*.toml` utelater både `model` og `model_reasoning_effort`, slik at de arver gjeldende innstillinger fra foreldreøkten.
