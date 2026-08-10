# Einrichtung der Agent-Hooks

Wenn Ihr KI-Coding-Assistent Lifecycle-Hooks unterstützt, richten Sie diese für dieses Repo ein.

## Empfohlene Hooks

| Hook            | Befehl                                        | Zweck                                                                                                                                                                                                                 |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Dateien nach KI-Bearbeitungen automatisch formatieren                                                                                                                                                                 |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `corepack yarn install` ausführen, sobald sich `package.json` ändert                                                                                                                                                  |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Sobald ein Diff in `about/src/` neue `useEffect`- oder Memo-Primitive einführt, den Agenten daran erinnern, die Änderung mit den React-Review-Skills noch einmal zu hinterfragen                                      |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Veraltete Refs bereinigen und bereits integrierte temporäre Task-Branches löschen                                                                                                                                     |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Das aktuelle Diff vor dem abschließenden Verify-Gate erneut auf neue React-Effects/Memos in `about/src/` durchsuchen                                                                                                  |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Gezielte Build-Verifikation, Lint, Typecheck und Formatprüfung als hartes Gate; `yarn npm audit` bleibt rein informativ, und `yarn knip` läuft separat als beratende Prüfung, wenn sich Abhängigkeiten/Importe ändern |

## Warum

- Einheitliche Formatierung
- Die Lockfile bleibt synchron
- Neue `useEffect`-/Memo-Ergänzungen in der About-Site erhalten einen ausdrücklichen zweiten Blick, bevor der Agent fertig ist
- Workspace-relevante Build-, Lint- und Typfehler fallen früh auf, ohne dass bei jeder Aufgabe der vollständige mehrsprachige Docs-Build erzwungen wird
- Sicherheitstransparenz über `yarn npm audit`
- Abhängigkeits- und Import-Drift lässt sich mit `yarn knip` prüfen, ohne daraus einen lärmenden globalen Stop-Hook zu machen
- Eine gemeinsame Hook-Implementierung für Codex und Cursor
- Temporäre Task-Branches bleiben im Einklang mit dem Worktree-Workflow des Repos

## Beispielskripte für Hooks

### Format-Hook

```bash
#!/bin/bash
# Auto-format JS/TS files after AI edits
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

case "$file_path" in
  *.js|*.jsx|*.ts|*.tsx|*.mjs|*.cjs|*.json|*.css) corepack yarn exec oxfmt "$file_path" 2>/dev/null ;;
esac
exit 0
```

### Verify-Hook

```bash
#!/bin/bash
# Run targeted build verification, lint, typecheck, format check, and security audit when agent finishes

cat > /dev/null  # consume stdin
status=0
corepack yarn build:verify || status=1
corepack yarn lint || status=1
corepack yarn typecheck || status=1
corepack yarn format:check || status=1
echo "=== yarn npm audit ===" && (corepack yarn npm audit || true)  # informational
exit $status
```

Standardmäßig endet `scripts/agent-hooks/verify.sh` mit einem Exit-Code ungleich null, sobald eine erforderliche Prüfung fehlschlägt. Setzen Sie `AGENT_VERIFY_MODE=advisory` nur dann, wenn Sie bewusst Signale aus einem defekten Stand brauchen, ohne den Hook zu blockieren. Halten Sie `yarn knip` aus dem harten Gate heraus, solange das Repo nicht ausdrücklich entscheidet, bei beratenden Import- oder Abhängigkeitsbefunden fehlzuschlagen.

Lifecycle-Hooks ersetzen keine manuelle Browser-Verifikation. Führen Sie bei UI- oder visuellen Änderungen weiterhin `playwright-cli`-Prüfungen in `chrome`, `firefox` und `webkit` durch, dazu in jeder Engine einen Durchlauf im mobilen Viewport, wenn sich Responsiveness oder Touch-Verhalten geändert haben.

### Yarn-Install-Hook

```bash
#!/bin/bash
# Run corepack yarn install when package.json is changed
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

if [ -z "$file_path" ]; then
  exit 0
fi

if [ "$file_path" = "package.json" ]; then
  cd "$(dirname "$0")/../.." || exit 0
  echo "package.json changed - running corepack yarn install to update yarn.lock..."
  corepack yarn install
fi

exit 0
```

Die Verdrahtung der Hooks richtet sich nach der Dokumentation Ihres Agent-Tools (`hooks.json` oder Entsprechendes).

In diesem Repo sollen `.codex/hooks/*.sh` und `.cursor/hooks/*.sh` dünne Wrapper bleiben, die an die gemeinsamen Implementierungen unter `scripts/agent-hooks/` delegieren.
