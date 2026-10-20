# AGENTS.md

- **scripts:** repository scripts are in `package.json`, such as `check`, `verify`, and `web`

## Commit Discipline

- **Unit of work:** one complete, reviewed, coherent, independently revertable change
- **Auto-commit rule:** commit a unit of work automatically
- **Messages:** Conventional Commits; `commitlint` checks them in the `commit-msg` hook

## Architecture

This repo is the cyber-uni plugin marketplace. It lists plugins by reference and holds no plugin
source.

- `.claude-plugin/marketplace.json`: the Claude Code catalog. Codex and Copilot CLI also read it.
- `.agents/plugins/marketplace.json`: the Codex catalog.
- `apps/website`: the Astro + Starlight site, deployed to GitHub Pages on push to `main`.

## Catalogs

- **Generate, never hand-edit.** Use the `universal-plugin:marketplace` skill, or
  `npx universal-plugin@0.16.0 marketplace add <spec> --claude --codex --copilot --cursor`. The generator
  skips each harness that cannot install the source; report the skips.
- **List only what installs today.** Check the npm tarball or the repo's plugin manifest before
  adding an entry. A plugin whose package carries a manifest but no skills, hooks, or MCP server
  installs nothing.
- **Never write a Cursor install command.** Cursor has no command that adds a repository catalog.
- `pnpm marketplace:validate` checks every catalog against the schema its harness loads.
  `pnpm verify` runs it.

## Website

- `pnpm web dev`, `pnpm web build`, and `pnpm web typecheck` run the site.
- The site is served under the `/marketplace/` base path. Starlight does not rewrite links inside
  content, so every internal Markdown link carries the prefix: `/marketplace/getting-started/installation/`.
  Sidebar entries take bare slugs.
- The sidebar is declared in `apps/website/astro.config.mjs`. A page without an entry there is
  unreachable.
- The plugin grid reads the catalogs at build time (`apps/website/src/lib/catalog.ts`). Do not copy
  plugin data into the site.
- The logo is the cyber-uni org mark from `cyber-uni/.github` `brand/`. Change it there first.

## Validation After Changes

Run before committing or pushing:

```bash
pnpm verify   # biome, knip, catalog validation, build, typecheck
```

CI runs the same `verify` script on every pull request through
`cyber-uni/.github/.github/workflows/pnpm-verify.yml@v1`.

## Language

Write all content in en-US (American English spelling: "color", "organize", "behavior", etc.).
