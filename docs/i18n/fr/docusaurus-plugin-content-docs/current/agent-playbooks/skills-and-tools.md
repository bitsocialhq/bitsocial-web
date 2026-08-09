# Skills et outils

Utilisez ce playbook lorsque vous mettez en place ou ajustez des skills et de l'outillage externe.

## Skills recommandés

### Context7 (documentation des bibliothèques)

Pour une documentation à jour sur les bibliothèques.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Utilisez `playwright-cli` pour l'automatisation du navigateur (navigation, interaction, captures d'écran, tests, extraction).

Quand vous utilisez `playwright-cli` pour vérifier l'interface du dépôt, ne vous arrêtez pas au premier moteur. Rejouez le parcours concerné dans les trois principaux moteurs de navigateur :

- `chrome` pour Blink
- `firefox` pour Gecko
- `webkit` pour la couverture Safari/WebKit

Utilisez une session nommée distincte par moteur afin que les preuves restent isolées, mais exécutez ces sessions les unes après les autres. Une seule session de navigateur Playwright peut être active à la fois sur toute la machine, car la ressource en contention est la RAM et le CPU de la machine, pas le dépôt. Ouvrez et fermez les sessions via `./scripts/pw-session.sh` : c'est lui qui détient ce verrou partagé, de sorte que les agents concurrents diffèrent et réessaient leur travail navigateur au lieu de saturer la machine. Si un moteur est volontairement ignoré, notez pourquoi.

Pendant les itérations, restez sur Chrome/Blink uniquement. Déroulez la séquence complète Chrome, Firefox et WebKit une fois le changement prêt pour la vérification finale. Réutilisez la session de chaque moteur pour le bureau et le mobile en la redimensionnant, fermez-la dans un nettoyage de type finally, et seulement ensuite ouvrez le moteur suivant.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Quand le créneau est occupé, `open` sort avec le code 75 ; bloquez sur `./scripts/pw-session.sh open --wait[=SECONDS] ...` (300 s par défaut) plutôt que de réessayer à la main. Un verrou laissé par un workflow interrompu est récupéré automatiquement, car `open` libère tout créneau dont le navigateur enregistré ne tourne plus. Inspectez le détenteur avec `./scripts/pw-session.sh status` ; `release <session>` est un dernier recours, pour le cas rare où `status` ne parvient pas à vérifier l'état du navigateur.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Emplacements d'installation des skills :

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Pour des conseils plus poussés sur les performances React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Découvrir et installer des skills issus de l'écosystème ouvert.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Justification de la politique MCP

Évitez le MCP GitHub et les serveurs MCP de navigateur sur ce projet : ils ajoutent une surcharge importante en schémas d'outils et en contexte.

- Opérations GitHub : utilisez la CLI `gh`.
- Opérations navigateur : utilisez `playwright-cli`.

## Disponibilité des modèles

- `composer-2` n'est disponible que dans Cursor. Ne le configurez pas sous `.claude/` ni `.codex/`.
- Codex ne documente pas d'alias de modèle `latest`. Les fichiers TOML d'agents personnalisés versionnés sous `.codex/**/agents/*.toml` omettent à la fois `model` et `model_reasoning_effort`, afin d'hériter des réglages de la session parente en cours.
