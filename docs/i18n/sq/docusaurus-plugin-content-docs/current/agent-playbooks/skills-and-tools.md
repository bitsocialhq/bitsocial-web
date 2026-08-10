# Aftësitë dhe veglat

Përdoreni këtë udhërrëfyes kur konfiguroni ose rregulloni aftësitë dhe veglat e jashtme.

## Aftësitë e rekomanduara

### Context7 (dokumentacion bibliotekash)

Për dokumentacion të përditësuar mbi bibliotekat.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Përdorni `playwright-cli` për automatizimin e shfletuesit (navigim, ndërveprim, pamje ekrani, teste, nxjerrje të dhënash).

Kur përdorni `playwright-cli` për të verifikuar ndërfaqen e depos, mos u ndalni pas një motori të vetëm. Ekzekutojeni rrjedhën përkatëse në të tre motorët kryesorë të shfletuesve:

- `chrome` për Blink
- `firefox` për Gecko
- `webkit` për mbulimin e Safari/WebKit

Përdorni sesione të veçanta me emër për secilin motor, që provat të mbeten të izoluara, por ekzekutojini ato sesione njërin pas tjetrit. Vetëm një sesion shfletuesi Playwright mund të jetë aktiv njëherësh në të gjithë makinën, sepse burimi i kontestuar është RAM-i dhe CPU-ja e makinës, jo depoja. Hapini dhe mbyllini sesionet përmes `./scripts/pw-session.sh`; ai e mban atë kyç të përbashkët, kështu që agjentët e njëkohshëm e shtyjnë dhe e riprovojnë punën me shfletuesin në vend që ta ngopin makinën. Nëse një motor anashkalohet qëllimisht, shënoni arsyen.

Gjatë përsëritjeve të punës, përdorni vetëm Chrome/Blink. Ekzekutojeni sekuencën e plotë Chrome, Firefox dhe WebKit sapo ndryshimi të jetë gati për verifikimin përfundimtar. Ripërdoreni sesionin e secilit motor për desktop dhe për celular duke e ripërmasuar, mbylleni në një pastrim të tipit finally dhe vetëm pastaj hapni motorin tjetër.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Kur vendi është i zënë, `open` del me kodin 75; bllokohuni te `./scripts/pw-session.sh open --wait[=SECONDS] ...` (parazgjedhja 300s) në vend që të riprovoni me dorë. Një kyç i lënë pas nga një rrjedhë pune e ndërprerë rimerret automatikisht, sepse `open` e lëshon çdo vend shfletuesi i regjistruar i të cilit nuk është më në punë. Inspektojeni mbajtësin me `./scripts/pw-session.sh status`; `release <session>` është zgjidhja e fundit për rastin e rrallë kur `status` nuk arrin ta verifikojë gjendjen e shfletuesit.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Vendndodhjet e instalimit të aftësive:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Praktikat më të mira për React nga Vercel

Për udhëzime më të thelluara mbi performancën e React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Gjetja e aftësive

Zbuloni dhe instaloni aftësi nga ekosistemi i hapur.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Arsyetimi i politikës për MCP

Shmangini serverët MCP të GitHub dhe ata MCP të shfletuesit në këtë projekt, sepse shtojnë ngarkesë të ndjeshme në skemën e veglave dhe në kontekst.

- Veprimet me GitHub: përdorni `gh` CLI.
- Veprimet me shfletuesin: përdorni `playwright-cli`.

## Disponueshmëria e modeleve

- `composer-2` ofrohet vetëm në Cursor. Mos e konfiguroni nën `.claude/` ose `.codex/`.
- Codex nuk dokumenton një alias modeli `latest`. Skedarët TOML të agjentëve të personalizuar nën `.codex/**/agents/*.toml` që janë futur në depo i lënë jashtë si `model` ashtu edhe `model_reasoning_effort`, që të trashëgojnë cilësimet aktuale të sesionit prind.
