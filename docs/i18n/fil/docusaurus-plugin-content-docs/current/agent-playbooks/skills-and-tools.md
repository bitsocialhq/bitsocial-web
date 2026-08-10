# Mga Skill at Kasangkapan

Gamitin ang playbook na ito kapag nagse-set up o nag-aayos ng mga skill at panlabas na tooling.

## Mga Inirerekomendang Skill

### Context7 (dokumentasyon ng library)

Para sa napapanahong dokumentasyon tungkol sa mga library.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Gamitin ang `playwright-cli` para sa awtomasyon ng browser (nabigasyon, pakikipag-ugnayan, mga screenshot, mga pagsubok, pagkuha ng datos).

Kapag ginagamit ang `playwright-cli` para sa pag-verify ng UI ng repo, huwag tumigil pagkatapos ng isang engine. Patakbuhin ang kaukulang daloy sa lahat ng tatlong pangunahing browser engine:

- `chrome` para sa Blink
- `firefox` para sa Gecko
- `webkit` para sa saklaw ng Safari/WebKit

Gumamit ng magkakahiwalay na pinangalanang session sa bawat engine upang manatiling bukod ang ebidensiya, ngunit patakbuhin ang mga session na iyon nang sunod-sunod. Iisang Playwright browser session lamang ang maaaring aktibo sa bawat sandali sa buong makina, dahil ang pinag-aagawang resource ay ang RAM at CPU ng makina at hindi ang repositoryo. Buksan at isara ang mga session sa pamamagitan ng `./scripts/pw-session.sh`; hawak nito ang nakabahaging lock upang ipagpaliban at ulitin ng mga sabayang ahente ang gawaing pang-browser sa halip na busugin ang makina. Kung sinadyang laktawan ang isang engine, itala kung bakit.

Habang nag-iiterate, gumamit lamang ng Chrome/Blink. Patakbuhin ang buong sunod-sunod na Chrome, Firefox, at WebKit kapag handa na ang pagbabago para sa panghuling pag-verify. Muling gamitin ang bawat session ng engine para sa desktop at mobile sa pamamagitan ng pag-resize nito, isara ito sa isang finally-style na paglilinis, at saka lamang buksan ang susunod na engine.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Kapag abala ang slot, lumalabas ang `open` nang 75; humarang gamit ang `./scripts/pw-session.sh open --wait[=SECONDS] ...` (default na 300s) sa halip na manwal na umulit. Awtomatikong nababawi ang lock na naiwan ng isang naantalang workflow, dahil ibinababa ng `open` ang anumang slot na hindi na tumatakbo ang naitalang browser nito. Suriin kung sino ang may hawak nito gamit ang `./scripts/pw-session.sh status`; huling pagpipilian ang `release <session>` para sa bihirang pagkakataong hindi mapatunayan ng `status` ang kalagayan ng browser.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Mga lokasyon ng pag-install ng skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Para sa mas malalim na gabay sa performance ng React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Tumuklas at mag-install ng mga skill mula sa bukas na ecosystem.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Katwiran sa Likod ng Patakaran sa MCP

Iwasan ang GitHub MCP at ang mga browser MCP server para sa proyektong ito dahil malaki ang idinaragdag nilang overhead sa tool-schema/context.

- Mga operasyon sa GitHub: gamitin ang `gh` CLI.
- Mga operasyon sa browser: gamitin ang `playwright-cli`.

## Pagkakaroon ng Modelo

- Available lamang ang `composer-2` sa Cursor. Huwag itong i-configure sa ilalim ng `.claude/` o `.codex/`.
- Walang dokumentadong `latest` na model alias ang Codex. Hindi inilalagay ng mga naka-commit na custom-agent TOML sa ilalim ng `.codex/**/agents/*.toml` ang `model` at `model_reasoning_effort` upang manahin nila ang kasalukuyang mga setting ng parent session.
