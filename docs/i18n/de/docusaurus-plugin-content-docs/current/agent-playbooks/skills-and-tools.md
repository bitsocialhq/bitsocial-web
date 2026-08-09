# Skills und Werkzeuge

Verwenden Sie dieses Playbook, wenn Sie Skills und externe Werkzeuge einrichten oder anpassen.

## Empfohlene Skills

### Context7 (Bibliotheksdokumentation)

Für aktuelle Dokumentation zu Bibliotheken.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Verwenden Sie `playwright-cli` für Browser-Automatisierung (Navigation, Interaktion, Screenshots, Tests, Extraktion).

Wenn Sie `playwright-cli` zur UI-Verifikation im Repo einsetzen, hören Sie nicht nach einer Engine auf. Führen Sie den betreffenden Ablauf in allen drei wichtigsten Browser-Engines aus:

- `chrome` für Blink
- `firefox` für Gecko
- `webkit` für die Abdeckung von Safari/WebKit

Verwenden Sie pro Engine eine eigene benannte Sitzung, damit die Belege getrennt bleiben, führen Sie diese Sitzungen aber nacheinander aus. Maschinenweit darf immer nur eine Playwright-Browsersitzung aktiv sein, denn die knappe Ressource ist der Arbeitsspeicher und die CPU der Maschine, nicht das Repository. Öffnen und schließen Sie Sitzungen über `./scripts/pw-session.sh`; das Skript hält die gemeinsame Sperre, sodass parallele Agenten Browserarbeit zurückstellen und später wiederholen, statt die Maschine zu überlasten. Wird eine Engine bewusst übersprungen, halten Sie den Grund fest.

Arbeiten Sie während der Iteration nur mit Chrome/Blink. Die vollständige Abfolge aus Chrome, Firefox und WebKit läuft einmal, sobald die Änderung bereit für die abschließende Verifikation ist. Nutzen Sie jede Engine-Sitzung für Desktop und Mobile weiter, indem Sie sie in der Größe anpassen, schließen Sie sie in einem finally-artigen Aufräumschritt und öffnen Sie erst danach die nächste Engine.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Ist der Platz belegt, endet `open` mit Code 75; warten Sie dann blockierend mit `./scripts/pw-session.sh open --wait[=SECONDS] ...` (Vorgabe 300 s), statt von Hand neu zu versuchen. Eine Sperre, die ein abgebrochener Ablauf hinterlassen hat, wird automatisch zurückgeholt, denn `open` gibt jeden Platz frei, dessen vermerkter Browser nicht mehr läuft. Wer den Platz hält, zeigt `./scripts/pw-session.sh status`; `release <session>` ist nur die letzte Möglichkeit für den seltenen Fall, dass `status` den Browserzustand nicht überprüfen kann.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Installationsorte der Skills:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Für tiefergehende Hinweise zur Performance von React und Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Skills aus dem offenen Ökosystem finden und installieren.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Begründung der MCP-Richtlinie

Verzichten Sie in diesem Projekt auf GitHub-MCP- und Browser-MCP-Server, weil sie erheblichen Overhead an Tool-Schemata und Kontext verursachen.

- GitHub-Operationen: die `gh`-CLI verwenden.
- Browser-Operationen: `playwright-cli` verwenden.

## Verfügbarkeit von Modellen

- `composer-2` gibt es nur in Cursor. Konfigurieren Sie es nicht unter `.claude/` oder `.codex/`.
- Codex dokumentiert keinen Modell-Alias `latest`. Die eingecheckten TOML-Dateien für eigene Agenten unter `.codex/**/agents/*.toml` lassen sowohl `model` als auch `model_reasoning_effort` weg, damit sie die Einstellungen der übergeordneten Sitzung übernehmen.
