# Configuration des hooks d'agent

Si votre assistant de codage IA prend en charge les hooks de cycle de vie, configurez ceux qui suivent pour ce dépôt.

## Hooks recommandés

| Hook            | Commande                                      | Objectif                                                                                                                                                                                                                                            |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Formater automatiquement les fichiers après les modifications de l'IA                                                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Exécuter `corepack yarn install` quand `package.json` change                                                                                                                                                                                        |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Quand un diff ajoute des primitives `useEffect`/memo dans `about/src/`, rappeler à l'agent de reconsidérer son choix avec les skills de revue React                                                                                                 |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Élaguer les références obsolètes et supprimer les branches de tâche temporaires déjà intégrées                                                                                                                                                      |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Réanalyser le diff courant à la recherche de nouveaux effets ou memos React dans `about/src/` avant la barrière de vérification finale                                                                                                              |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Imposer strictement la vérification de build ciblée, le lint, le typecheck et le contrôle de format ; garder `yarn npm audit` informatif et exécuter `yarn knip` séparément, comme audit consultatif, quand les dépendances ou les imports changent |

## Pourquoi

- Un formatage cohérent
- Le lockfile reste synchronisé
- Les nouveaux ajouts de `useEffect`/memo dans le site about reçoivent un second examen explicite avant que l'agent ne termine
- Les problèmes de build, de lint et de types propres à l'espace de travail concerné sont détectés tôt, sans imposer à chaque tâche le build multi-locale complet de la documentation
- Une visibilité sur la sécurité via `yarn npm audit`
- La dérive des dépendances et des imports peut être contrôlée avec `yarn knip` sans en faire un hook d'arrêt global et bruyant
- Une seule implémentation de hook partagée entre Codex et Cursor
- Les branches de tâche temporaires restent alignées sur le workflow de worktrees du dépôt

## Exemples de scripts de hook

### Hook de formatage

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

### Hook de vérification

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

Par défaut, `scripts/agent-hooks/verify.sh` renvoie un code de sortie non nul dès qu'une vérification requise échoue. Ne définissez `AGENT_VERIFY_MODE=advisory` que si vous avez délibérément besoin d'un signal sur un arbre cassé sans bloquer le hook. Gardez `yarn knip` en dehors de la barrière stricte, sauf si le dépôt décide explicitement de faire échouer la vérification sur des problèmes consultatifs d'imports ou de dépendances.

Les hooks de cycle de vie ne remplacent pas la vérification manuelle en navigateur. Pour les changements d'interface ou visuels, exécutez toujours les vérifications `playwright-cli` sur `chrome`, `firefox` et `webkit`, ainsi qu'un parcours en viewport mobile dans chaque moteur lorsque la réactivité ou le comportement tactile a changé.

### Hook d'installation Yarn

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

Câblez les hooks conformément à la documentation de votre outil d'agent (`hooks.json` ou équivalent, etc.).

Dans ce dépôt, `.codex/hooks/*.sh` et `.cursor/hooks/*.sh` doivent rester de fins wrappers qui délèguent aux implémentations partagées situées sous `scripts/agent-hooks/`.
