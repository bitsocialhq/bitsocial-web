# Skill-uri și instrumente

Folosiți acest manual atunci când configurați sau ajustați skill-uri și instrumente externe.

## Skill-uri recomandate

### Context7 (documentație pentru biblioteci)

Pentru documentație actualizată despre biblioteci.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Folosiți `playwright-cli` pentru automatizarea browserului (navigare, interacțiune, capturi de ecran, teste, extragere de date).

Când folosiți `playwright-cli` pentru verificarea interfeței din acest depozit, nu vă opriți după un singur motor. Rulați fluxul relevant în toate cele trei motoare principale de browser:

- `chrome` pentru Blink
- `firefox` pentru Gecko
- `webkit` pentru acoperirea Safari/WebKit

Folosiți sesiuni denumite separat pentru fiecare motor, astfel încât dovezile să rămână izolate, dar rulați acele sesiuni secvențial. O singură sesiune de browser Playwright poate fi activă la un moment dat, la nivelul întregii mașini, pentru că resursa disputată este memoria și procesorul mașinii, nu depozitul. Deschideți și închideți sesiunile prin `./scripts/pw-session.sh`; el ține acel blocaj comun, astfel încât agenții concurenți amână și reîncearcă lucrul în browser în loc să satureze mașina. Dacă un motor este omis intenționat, notați motivul.

În timpul iterațiilor, folosiți doar Chrome/Blink. Rulați secvența completă Chrome, Firefox și WebKit o singură dată, atunci când modificarea este gata pentru verificarea finală. Refolosiți sesiunea fiecărui motor pentru desktop și mobil, redimensionând-o, închideți-o într-o curățare de tip finally și abia apoi deschideți motorul următor.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Când slotul este ocupat, `open` iese cu codul 75; așteptați cu `./scripts/pw-session.sh open --wait[=SECONDS] ...` (implicit 300 de secunde) în loc să reîncercați manual. Un blocaj rămas în urma unui flux întrerupt este recuperat automat, pentru că `open` eliberează orice slot al cărui browser înregistrat nu mai rulează. Inspectați deținătorul cu `./scripts/pw-session.sh status`; `release <session>` este o soluție de ultimă instanță pentru cazul rar în care `status` nu poate verifica starea browserului.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Locațiile de instalare a skill-ului:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Bune practici React de la Vercel

Pentru îndrumări mai aprofundate privind performanța React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Găsirea skill-urilor

Descoperiți și instalați skill-uri din ecosistemul deschis.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Motivația politicii privind MCP

Evitați serverele MCP pentru GitHub și pentru browser în acest proiect, pentru că adaugă o supraîncărcare semnificativă de schemă a instrumentelor și de context.

- Operațiuni GitHub: folosiți `gh` CLI.
- Operațiuni în browser: folosiți `playwright-cli`.

## Disponibilitatea modelelor

- `composer-2` este disponibil doar în Cursor. Nu îl configurați sub `.claude/` sau `.codex/`.
- Codex nu documentează un alias de model `latest`. Fișierele TOML de agenți personalizați din `.codex/**/agents/*.toml` omit atât `model`, cât și `model_reasoning_effort`, ca să moștenească setările sesiunii părinte curente.
