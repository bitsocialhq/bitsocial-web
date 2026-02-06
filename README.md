[![License](https://img.shields.io/badge/license-AGPL--3.0--only-red.svg)](https://github.com/bitsocialhq/5chan/blob/master/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Bitsocial Official Website

This repository contains the official Bitsocial web frontend.

It currently powers:
- the public landing page
- protocol documentation
- the Bitsocial apps & services explorer

Over time, this repository will evolve into the **flagship Bitsocial web client**, while the marketing and documentation content moves to subdomains (e.g. `about.bitsocial.net`).

**Live:** https://bitsocial.net

---

## Scope

**In scope**
- Public landing pages and protocol overview
- Apps & services catalog (`/apps`)
- Documentation frontend (`/docs`)
- Network status pages (`/status`)
- Shared UI, routing, and internationalization
- Performance-sensitive visualizations and animations

**Out of scope**
- Wallet integration
- Authentication / login flows
- Governance or voting UIs
- Token economics dashboards
- Backend services or indexers

This separation is intentional to keep the web frontend lightweight, durable, and relocatable as the ecosystem evolves.

---

## Getting Started

Requires [Bun](https://bun.sh).

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:5173)
bun run build        # Production build
bun run preview      # Preview production build
```

---

## Contributing
This repo includes an `AGENTS.md` file with detailed guidance for AI coding agents.

When using an AI assistant to make changes, it is expected to follow the conventions defined there.

### Making Changes
1.	Run `bun run dev`
2.	Make your changes (manually or via an AI agent)
3.	Test on desktop and mobile viewports
4.	Verify performance and animations
5.	Run all quality checks before committing

### Code Quality
All checks must pass before committing:

```bash
bun run typecheck    # Type check with tsgo
bun run lint         # Lint with oxlint
bun run format:check # Check formatting with oxfmt
```

To auto-fix issues:

```bash
bun run lint:fix
bun run format
```

### Translations
We welcome translation improvements via PRs.

If you are improving an existing translation in your native language:
1.	Open `public/translations/{lang}/default.json` for your language.
2.	Edit only the string values for the keys you want to improve.
3.	Do not add, remove, or rename keys.
4.	Open a PR with just that language file updated.

If you need to add or remove keys across languages, use `scripts/update-translations.js`:

```bash
node scripts/update-translations.js --key my_new_key --map translations-temp.json --include-en --dry
node scripts/update-translations.js --key my_new_key --map translations-temp.json --include-en --write
node scripts/update-translations.js --key obsolete_key --delete --write
node scripts/update-translations.js --audit --dry
```

### Commits
This repo supports Commitizen for guided Conventional Commits.
Use `bun run commit` (or `bunx cz`) for the interactive prompt. `git commit` will also trigger Commitizen via Husky.

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

-	`feat`: new features
-	`fix`: bug fixes
-	`perf`: performance improvements
-	`refactor`: refactors without behavior changes
-	`docs`: documentation changes
-	`style`: formatting only
-	`chore`: maintenance tasks

### Pre-PR Checklist

-	`bun run typecheck` passes
-	`bun run lint` passes
-	`bun run format:check` passes
-	Tested on mobile viewport
-	Animations are smooth and respect `prefers-reduced-motion`

---

## Roadmap for this repository

### Frontpage

- [x] **Init and front page hero**: Initial site design and repo init, hero with performant three.js animations giving life to the token + animated p2p mesh, both degrading gracefully on low-end devices and respect prefers-reduced-motion. Tagline translated in all languages.
- [ ] **Core features section**: Explaining the tagline word for word, with hash links, expanded "learn more" sections for each with details (maybe load a docs page in each) - all translated
- [ ] **Master plan section**: Possibly with "learn more" expandable sections, should explain the full vision from the current short term goals, to the pipe dream features (flagship everything-app, L2, federated RPCs, etc) - all translated, probably should also have hash links for each, or maybe just one hash link for the masterplan as a whole
- [ ] **Footer and topbar finished**: With other links, also with light/dark mode, language selection

### Apps Page (`/apps`)

- [ ] **Initial design**: Similar to nostrapps.com for each client, with categories. Categories should probably exist even if empty, with a short description for each, for example we're sure challenges will be listed here so we should explain the category and have it anyway even if empty (visitors could also be inspired by it, and work on an app/service for the category), or indexers, rpc services, as well as subcategories for clients (profile-based, community-based, imageboard, blog, crowdfunding, etc.) - everything translated especially category and subcategory descriptions
- [ ] **List integration**: Each list should be in bitsocialhq/lists, there should be a button per category/subcategory to open a pr to the list, telling the user "submit your own!" or something
- [ ] **Listing requirements**: Probably some info on listing requirements, e.g. must be compatible with future BSO pubsub voting maybe? not sure

### Docs Page (`/docs`)

- [ ] **Choose best docs client**: Needs to be fully optimized for scraping by LLMs. mintlify might be worth it, e.g. https://www.mintlify.com/blog/agent-analytics but need to research more, alternatively gitbook maybe. or of course docusaurus
- [ ] **Write documentation**: Doesn't need to be perfect (low priority) but at least should cover the essentials, we can expand later
- [ ] **Translate documentation**: Translate docs to all supported languages

### Status Page (`/status`)

- [ ] **Init status page**: Init as plebbit.online but rebranded fully
- [ ] **Categories and filters**: Dividing by client default list, all lists in one, all communities found by x indexer
- [ ] **ENS query list**: Could add a list of all communities found by ENS query with alert saying it could show any address

### Other

- [ ] **LLM scraping support**: Add `/llms.txt`, `/llms-full.txt`, `/llms-small.txt` - guide: https://www.mintlify.com/blog/real-llms-txt-examples - example: https://effect.website/docs#docs-for-llms - also submit to https://directory.llmstxt.cloud/

---

## License

This project is licensed under the **GNU Affero General Public License v3 (AGPLv3)**.

The AGPLv3 is used to ensure that all deployed modifications to the Bitsocial web frontend remain free and open source, even when used as a hosted service.