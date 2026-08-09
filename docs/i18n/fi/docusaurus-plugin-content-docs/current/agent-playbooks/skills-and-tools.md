# Taidot ja työkalut

Käytä tätä ohjekirjaa, kun otat käyttöön tai säädät taitoja ja ulkoisia työkaluja.

## Suositellut taidot

### Context7 (kirjastodokumentaatio)

Ajantasaista dokumentaatiota kirjastoista.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Käytä selainautomaatioon työkalua `playwright-cli` (navigointi, vuorovaikutus, kuvakaappaukset, testit, sisällön poiminta).

Kun tarkistat repon käyttöliittymää työkalulla `playwright-cli`, älä lopeta yhteen moottoriin. Aja olennainen kulku kaikissa kolmessa pääselainmoottorissa:

- `chrome` Blinkiä varten
- `firefox` Geckoa varten
- `webkit` Safari/WebKit-kattavuutta varten

Käytä moottorikohtaisia nimettyjä istuntoja, jotta todisteet pysyvät erillään, mutta aja istunnot peräkkäin. Vain yksi Playwright-selainistunto saa olla kerrallaan käynnissä koko koneella, koska kilpailtu resurssi on koneen muisti ja suoritin eikä repo. Avaa ja sulje istunnot skriptillä `./scripts/pw-session.sh`; se pitää hallussaan tuota jaettua lukkoa, jotta rinnakkaiset agentit lykkäävät selaintyötään ja yrittävät myöhemmin uudelleen sen sijaan, että kuormittaisivat koneen täyteen. Jos jokin moottori jätetään tarkoituksella väliin, kirjaa syy.

Käytä iterointivaiheessa vain Chromea/Blinkiä. Aja koko Chrome-, Firefox- ja WebKit-sarja, kun muutos on valmis lopulliseen varmistukseen. Käytä kutakin moottori-istuntoa uudelleen sekä työpöytä- että mobiilinäkymään muuttamalla ikkunan kokoa, sulje istunto finally-tyylisessä siivouksessa ja avaa vasta sitten seuraava moottori.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Kun paikka on varattu, `open` päättyy koodiin 75; odota tällöin komennolla `./scripts/pw-session.sh open --wait[=SECONDS] ...` (oletuksena 300 s) sen sijaan, että yrittäisit uudelleen käsin. Keskeytyneen työnkulun jättämä lukko vapautuu automaattisesti, koska `open` vapauttaa jokaisen paikan, jonka kirjattu selain ei ole enää käynnissä. Tarkastele paikan haltijaa komennolla `./scripts/pw-session.sh status`; `release <session>` on viimeinen keino niihin harvinaisiin tapauksiin, joissa `status` ei pysty varmistamaan selaimen tilaa.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Taitojen asennuspaikat:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Syvempää React- ja Next-suorituskykyohjeistusta.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Löydä ja asenna taitoja avoimesta ekosysteemistä.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP-linjauksen perustelut

Vältä tässä projektissa GitHub MCP:tä ja selain-MCP-palvelimia, koska ne kasvattavat työkaluskeemojen ja kontekstin kuormaa merkittävästi.

- GitHub-operaatiot: käytä työkalua `gh`.
- Selainoperaatiot: käytä työkalua `playwright-cli`.

## Mallien saatavuus

- `composer-2` on saatavilla vain Cursorissa. Älä määritä sitä hakemistoihin `.claude/` tai `.codex/`.
- Codex ei dokumentoi `latest`-mallialiasta. Versionhallintaan tallennetut mukautettujen agenttien TOML-tiedostot polussa `.codex/**/agents/*.toml` jättävät pois sekä avaimen `model` että avaimen `model_reasoning_effort`, jotta ne perivät nykyisen pääistunnon asetukset.
