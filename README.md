# Bitsocial Landing Page

Landing page for [bitsocial.net](https://bitsocial.net).

## Getting Started

Requires [Bun](https://bun.sh).

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:5173)
bun run build        # Production build
bun run preview      # Preview production build
```

## Contributing

This repo includes an `AGENTS.md` file with detailed guidance for AI coding agents. When using an AI assistant to make changes, it will automatically follow the project conventions defined there.

### Making Changes

1. Run `bun run dev` to start the dev server
2. Make your changes (or ask your AI agent to)
3. Test on both desktop and mobile viewports
4. Run quality checks before committing

### Code Quality

All checks must pass before committing:

```bash
bun run typecheck    # Type check with tsgo
bun run lint         # Lint with oxlint
bun run format:check # Check formatting with oxfmt
```

To auto-fix issues:

```bash
bun run lint:fix     # Auto-fix lint issues
bun run format       # Auto-format code
```

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat:` new features
- `fix:` bug fixes
- `perf:` performance improvements
- `refactor:` code changes that don't add features or fix bugs
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `chore:` maintenance tasks

### Pre-PR Checklist

- [ ] `bun run typecheck` passes
- [ ] `bun run lint` passes
- [ ] `bun run format:check` passes
- [ ] Tested on mobile viewport
- [ ] Animations run smoothly (60fps)
