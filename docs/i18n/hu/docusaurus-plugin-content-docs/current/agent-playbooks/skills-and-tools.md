# Skillek és eszközök

Használja ezt a playbookot, amikor skilleket és külső eszközöket állít be vagy módosít.

## Ajánlott skillek

### Context7 (könyvtárdokumentáció)

Naprakész dokumentációhoz a különféle könyvtárakról.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Böngészőautomatizáláshoz (navigáció, interakció, képernyőképek, tesztek, adatkinyerés) a `playwright-cli` eszközt használja.

Amikor a `playwright-cli` eszközzel ellenőrzi a repó felületét, ne álljon meg egyetlen motornál. Futtassa le a releváns folyamatot mind a három fő böngészőmotorban:

- `chrome` a Blinkhez
- `firefox` a Geckóhoz
- `webkit` a Safari/WebKit lefedettséghez

Motoronként külön elnevezett munkamenetet használjon, hogy a bizonyítékok elkülönüljenek, de ezeket a munkameneteket sorosan futtassa. Gépszinten egyszerre csak egy Playwright böngésző-munkamenet lehet aktív, mert a szűkös erőforrás a gép memóriája és processzora, nem pedig maga a repository. A munkameneteket a `./scripts/pw-session.sh` szkripttel nyissa meg és zárja be; ez tartja a közös zárat, így a párhuzamosan dolgozó ügynökök elhalasztják és később újrapróbálják a böngészős munkát ahelyett, hogy telítenék a gépet. Ha szándékosan kihagy egy motort, rögzítse ennek okát.

Iteráció közben csak a Chrome/Blink motort használja. A teljes Chrome-, Firefox- és WebKit-sorozatot akkor futtassa le, amikor a változás készen áll a záró ellenőrzésre. Az egyes motorok munkamenetét átméretezéssel használja újra asztali és mobil nézethez, zárja be finally jellegű takarításban, és csak ezután nyissa meg a következő motort.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Ha a slot foglalt, az `open` 75-ös kóddal lép ki; kézi újrapróbálkozás helyett várakozzon a `./scripts/pw-session.sh open --wait[=SECONDS] ...` paranccsal (alapértelmezés szerint 300 mp). A megszakadt munkafolyamat által hátrahagyott zárat a rendszer automatikusan visszaveszi, mert az `open` elenged minden olyan slotot, amelynek nyilvántartott böngészője már nem fut. A zár birtokosát a `./scripts/pw-session.sh status` paranccsal vizsgálhatja meg; a `release <session>` végső megoldás arra a ritka esetre, amikor a `status` nem tudja ellenőrizni a böngésző állapotát.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

A skillek telepítési helyei:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Mélyebb React- és Next-teljesítményútmutatáshoz.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Skillek felfedezése és telepítése a nyílt ökoszisztémából.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Az MCP-házirend indoklása

Kerülje a GitHub MCP-t és a böngésző MCP-kiszolgálókat ebben a projektben, mert jelentős eszközséma- és kontextusterhelést jelentenek.

- GitHub-műveletek: használja a `gh` CLI-t.
- Böngészőműveletek: használja a `playwright-cli` eszközt.

## Modellek elérhetősége

- A `composer-2` kizárólag a Cursorban érhető el. Ne állítsa be a `.claude/` vagy a `.codex/` könyvtárban.
- A Codex nem dokumentál `latest` modellaliast. A `.codex/**/agents/*.toml` alatt commitolt egyéni ügynök-TOML-fájlok kihagyják a `model` és a `model_reasoning_effort` beállítást is, így az aktuális szülő munkamenet beállításait öröklik.
