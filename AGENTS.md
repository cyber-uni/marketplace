# AGENTS.md

- **scripts:** repository scripts are in `package.json`, such as `check` and `verify`

## Commit Discipline

- **Unit of work:** one complete, reviewed, coherent, independently revertable change
- **Auto-commit rule:** commit a unit of work automatically
- **Messages:** Conventional Commits; `commitlint` checks them in the `commit-msg` hook

## Architecture

This repo is the spikyuni plugin marketplace. It lists plugins by reference and holds no plugin
source.

## Validation After Changes

Run before committing or pushing:

```bash
pnpm verify   # biome, knip, build, typecheck
```

CI runs the same `verify` script on every pull request through
`spikyuni/.github/.github/workflows/pnpm-verify.yml@v1`.

## Language

Write all content in en-US (American English spelling: "color", "organize", "behavior", etc.).
