# Skill e strumenti

Usa questo playbook quando configuri o modifichi skill e strumenti esterni.

## Skill consigliate

### Context7 (documentazione delle librerie)

Per documentazione aggiornata sulle librerie.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Usa `playwright-cli` per l'automazione del browser (navigazione, interazione, screenshot, test, estrazione).

Quando usi `playwright-cli` per verificare la UI del repository, non fermarti a un solo motore. Esegui il flusso rilevante in tutti e tre i principali motori di rendering:

- `chrome` per Blink
- `firefox` per Gecko
- `webkit` per la copertura Safari/WebKit

Usa sessioni con nomi distinti per ciascun motore, così le prove restano separate, ma esegui quelle sessioni in sequenza. Può essere attiva una sola sessione del browser Playwright alla volta su tutta la macchina, perché la risorsa contesa è la RAM e la CPU della macchina, non il repository. Apri e chiudi le sessioni tramite `./scripts/pw-session.sh`: è lui a detenere quel lock condiviso, così gli agenti concorrenti rimandano e riprovano il lavoro sul browser invece di saturare la macchina. Se un motore viene saltato intenzionalmente, annota il motivo.

Durante l'iterazione usa solo Chrome/Blink. Esegui la sequenza completa Chrome, Firefox e WebKit una volta che la modifica è pronta per la verifica finale. Riusa la sessione di ogni motore per desktop e mobile ridimensionandola, chiudila con una pulizia in stile finally e solo allora apri il motore successivo.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Quando lo slot è occupato, `open` esce con codice 75: mettiti in attesa con `./scripts/pw-session.sh open --wait[=SECONDS] ...` (300 s di default) invece di riprovare a mano. Un lock lasciato da un flusso interrotto viene recuperato automaticamente, perché `open` libera qualsiasi slot il cui browser registrato non è più in esecuzione. Ispeziona chi detiene lo slot con `./scripts/pw-session.sh status`; `release <session>` è l'ultima risorsa, per il raro caso in cui `status` non riesca a verificare lo stato del browser.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Percorsi di installazione delle skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Per una guida più approfondita sulle prestazioni di React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Scopri e installa skill dall'ecosistema aperto.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Motivazione della policy sugli MCP

Evita i server MCP per GitHub e per il browser in questo progetto, perché aggiungono un notevole sovraccarico di schema degli strumenti e di contesto.

- Operazioni su GitHub: usa la CLI `gh`.
- Operazioni sul browser: usa `playwright-cli`.

## Disponibilità dei modelli

- `composer-2` è disponibile solo in Cursor. Non configurarlo sotto `.claude/` o `.codex/`.
- Codex non documenta un alias di modello `latest`. I file TOML degli agenti personalizzati versionati sotto `.codex/**/agents/*.toml` omettono sia `model` sia `model_reasoning_effort`, così ereditano le impostazioni correnti della sessione genitore.
