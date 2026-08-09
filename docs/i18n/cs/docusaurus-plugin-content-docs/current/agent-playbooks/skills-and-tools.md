# Dovednosti a nástroje

Tuto příručku použijte při nastavování nebo úpravách dovedností a externího nástrojového vybavení.

## Doporučené dovednosti

### Context7 (dokumentace knihoven)

Pro aktuální dokumentaci ke knihovnám.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Pro automatizaci prohlížeče (navigace, interakce, snímky obrazovky, testy, extrakce dat) používejte `playwright-cli`.

Když pomocí `playwright-cli` ověřujete uživatelské rozhraní v tomto repozitáři, nekončete u jednoho enginu. Spusťte příslušný postup ve všech třech hlavních enginech prohlížečů:

- `chrome` pro Blink
- `firefox` pro Gecko
- `webkit` pro pokrytí Safari/WebKit

Pro každý engine používejte samostatně pojmenované relace, aby zůstaly důkazy oddělené, ale tyto relace spouštějte sériově. V rámci celého stroje smí být aktivní vždy jen jedna relace prohlížeče Playwright, protože sdíleným zdrojem je paměť a procesor stroje, nikoli repozitář. Relace otevírejte a zavírejte přes `./scripts/pw-session.sh`; ten drží onen sdílený zámek, takže souběžní agenti práci s prohlížečem odloží a zopakují později, místo aby stroj zahltili. Pokud některý engine záměrně vynecháte, zaznamenejte proč.

Během iterace používejte pouze Chrome/Blink. Jakmile je změna připravená k závěrečnému ověření, projděte celou sekvenci Chrome, Firefox a WebKit. Relaci každého enginu využijte pro desktop i mobil tím, že jí změníte velikost okna, zavřete ji v úklidu ve stylu finally a teprve poté otevřete další engine.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Když je slot obsazený, `open` skončí s kódem 75; místo ručního opakování se zablokujte příkazem `./scripts/pw-session.sh open --wait[=SECONDS] ...` (výchozí 300 s). Zámek, který po sobě zanechal přerušený postup, se uvolní automaticky, protože `open` zahodí každý slot, jehož zaznamenaný prohlížeč už neběží. Aktuálního držitele si prohlédněte pomocí `./scripts/pw-session.sh status`; `release <session>` je poslední možnost pro vzácný případ, kdy `status` nedokáže stav prohlížeče ověřit.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Umístění nainstalovaných dovedností:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Pro hlubší návod k výkonu Reactu a Nextu.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Objevování a instalace dovedností z otevřeného ekosystému.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Odůvodnění pravidel pro MCP

V tomto projektu se vyhýbejte GitHub MCP a MCP serverům pro prohlížeč, protože přidávají výraznou režii ve schématech nástrojů a v kontextu.

- Operace na GitHubu: použijte `gh` CLI.
- Operace v prohlížeči: použijte `playwright-cli`.

## Dostupnost modelů

- `composer-2` je dostupný pouze v Cursoru. Nekonfigurujte jej pod `.claude/` ani `.codex/`.
- Codex nedokumentuje alias modelu `latest`. Commitnuté TOML soubory vlastních agentů pod `.codex/**/agents/*.toml` vynechávají jak `model`, tak `model_reasoning_effort`, takže dědí aktuální nastavení rodičovské relace.
