# spikyuni marketplace

[![ci](https://github.com/spikyuni/marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/spikyuni/marketplace/actions/workflows/ci.yml)

The plugin marketplace for spikyuni's agentic plugins, for AI coding agents.

**Website:** <https://spikyuni.github.io/marketplace/> lists every plugin with its install command
for each harness.

## Install

**Claude Code**

```
/plugin marketplace add spikyuni/marketplace
/plugin install <plugin>@spikyuni
```

**Codex**

```
codex plugin marketplace add spikyuni/marketplace
codex plugin add <plugin>@spikyuni
```

Start a new session before using the plugin.

GitHub Copilot CLI and Cursor are not supported yet. Every plugin here ships as an npm package or
from GitHub, and the catalog generator writes Copilot CLI and Cursor entries only for plugins kept
inside this repository.

## Plugins

Each plugin is listed under the name and source it ships from today. Most are moving to the
`spikyuni` org under a `uni-` name; [`data/moves.json`](data/moves.json) records where each one is
going.

| Plugin                | Source                                                                         | Moving to       | Claude Code | Codex |
| --------------------- | ------------------------------------------------------------------------------ | --------------- | ----------- | ----- |
| `aced`                | npm `cyber-aced`                                                               | `uni-aced`      | yes         | yes   |
| `cyber-agent-harness` | npm `@cyberuni/agent-harness`                                                  | `uni-agent-kit` | yes         | yes   |
| `cyber-asana`         | npm `cyber-asana`                                                              | `uni-asana`     | yes         | yes   |
| `cyber-figma`         | npm `cyber-figma`                                                              | `uni-figma`     | yes         | yes   |
| `cyber-mux`           | npm `cyber-mux`                                                                | `uni-mux`       | yes         | yes   |
| `cyberfleet`          | npm `cyberfleet`                                                               | `uni-fleet`     | yes         | yes   |
| `cyberlegion`         | npm `cyberlegion`                                                              | `uni-legion`    | yes         | yes   |
| `quill`               | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/quill`    | `uni-quill`     | yes         | no    |
| `research-workbench`  | [cyberuni/research-workbench](https://github.com/cyberuni/research-workbench)   | (kept)          | yes         | no    |
| `sdd`                 | npm `cyber-sdd`                                                                | `uni-sdd`       | yes         | yes   |
| `universal-plugin`    | npm `universal-plugin`                                                         | (kept)          | yes         | yes   |

## Development

This is a pnpm + turbo monorepo. The site lives in [`apps/website`](apps/website).

| Command        | What it does                                         |
| -------------- | ---------------------------------------------------- |
| `pnpm install` | install dependencies                                 |
| `pnpm verify`  | biome, knip, catalog validation, build, typecheck    |
| `pnpm web dev` | run the website locally                              |

See [`AGENTS.md`](AGENTS.md) for contributor guidance.

## License

[MIT](LICENSE)
