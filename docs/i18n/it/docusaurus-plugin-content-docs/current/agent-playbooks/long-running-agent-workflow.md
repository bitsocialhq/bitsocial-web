# Flusso di lavoro degli agenti per attività di lunga durata

Usa questo playbook quando è probabile che un'attività si estenda su più sessioni, passaggi di consegne o agenti avviati.

## Obiettivi

- Offrire a ogni nuova sessione un modo rapido per recuperare il contesto
- Procedere in modo incrementale anziché tentare di completare una modifica di grandi dimensioni in un unico passaggio
- Individuare una baseline locale non funzionante prima di aggiungere altro codice
- Lasciare artefatti durevoli e affidabili per la sessione successiva

## Dove conservare lo stato

- Usa `docs/agent-runs/<slug>/` quando persone, bot di revisione o più toolchain devono accedere allo stesso stato dell'attività.
- Usa una directory locale allo strumento, come `.codex/runs/<slug>/`, solo quando lo stato dell'attività deve restare intenzionalmente locale a una singola workstation o toolchain.
- Non nascondere lo stato condiviso tra più sessioni in un file temporaneo privato se servirà in seguito a un altro collaboratore o agente.

## File obbligatori

Crea questi file all'inizio dell'attività di lunga durata:

- `feature-list.json`
- `progress.md`

Usa i modelli disponibili in `docs/agent-playbooks/templates/feature-list.template.json` e `docs/agent-playbooks/templates/progress.template.md`.

Preferisci JSON per l'elenco delle funzionalità, in modo che gli agenti possano aggiornare pochi campi senza riscrivere l'intero documento.

## Lista di controllo per l'inizio della sessione

1. Esegui `pwd`.
2. Leggi `progress.md`.
3. Leggi `feature-list.json`.
4. Esegui `git log --oneline -20`.
5. Esegui `./scripts/agent-init.sh --smoke`.
6. Scegli esattamente un elemento con la priorità più alta tra quelli ancora `pending`, `in_progress` o `blocked`.

Se il controllo smoke non riesce, correggi la baseline non funzionante prima di implementare una nuova parte della funzionalità.

## Regole della sessione

- Lavora su una sola funzionalità o parte dell'attività alla volta.
- Mantieni l'elenco delle funzionalità stabile e leggibile automaticamente. Aggiorna i campi relativi a stato, note, file e verifica anziché riscrivere elementi non pertinenti.
- Contrassegna un elemento come verificato solo dopo aver eseguito il comando o il flusso utente indicato nell'elemento stesso.
- Usa gli agenti avviati per parti circoscritte, non per affidare loro la responsabilità dello stato complessivo dell'attività.
- Quando un agente secondario è responsabile di un elemento, forniscigli l'ID esatto dell'elemento, i criteri di accettazione e i file che può modificare.

## Lista di controllo per la fine della sessione

1. Aggiungi una breve voce di avanzamento a `progress.md`.
2. Aggiorna l'elemento interessato in `feature-list.json`.
3. Registra i comandi esatti eseguiti per la verifica.
4. Annota impedimenti, attività successive e il prossimo elemento più indicato da riprendere.

## Struttura consigliata per le voci di avanzamento

Usa una struttura breve come questa:

```markdown
## 2026-03-17 14:30

- Item: F003
- Summary: Updated the browser-check flow to use the shared init/bootstrap path.
- Files: `.cursor/agents/browser-check.md`, `.codex/agents/browser-check.toml`
- Verification: `corepack yarn build:verify`, `corepack yarn lint`, `corepack yarn typecheck`
- Next: Run the smoke flow and update the task-board status.
```
