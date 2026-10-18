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

**GitHub Copilot CLI**

```
copilot plugin marketplace add spikyuni/marketplace
copilot plugin install <plugin>@spikyuni
```

**Cursor** has no command that adds a repository catalog. An admin imports this repository as a team
marketplace; its catalog is `.cursor-plugin/marketplace.json`.

Start a new session before using the plugin.

## Plugins

Each plugin is listed under the name and source it ships from today. Most are moving to the
`spikyuni` org under a `uni-` name; [`data/moves.json`](data/moves.json) records where each one is
going.

| Plugin                | Source                                                                         | Moving to       | Claude Code | Codex | Copilot CLI |
| --------------------- | ------------------------------------------------------------------------------ | --------------- | ----------- | ----- | ----------- |
| `aced` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/aced` | `uni-aced` | yes | yes | yes |
| `cyber-agent-harness` | [spikyuni/uni-agent-kit](https://github.com/spikyuni/uni-agent-kit) `packages/agent-harness` | `uni-agent-kit` | yes | yes | yes |
| `cyber-asana` | [cyberuni/cyber-asana](https://github.com/cyberuni/cyber-asana) `packages/cyber-asana` | `uni-asana` | yes | yes | yes |
| `cyber-figma` | [cyberuni/cyber-figma](https://github.com/cyberuni/cyber-figma) `packages/cyber-figma` | `uni-figma` | yes | yes | yes |
| `cyber-mux` | [cyberuni/cyber-mux](https://github.com/cyberuni/cyber-mux) `packages/cyber-mux` | `uni-mux` | yes | yes | yes |
| `cyberfleet` | [cyberuni/cyberfleet](https://github.com/cyberuni/cyberfleet) `packages/cyberfleet` | `uni-fleet` | yes | yes | yes |
| `cyberlegion` | [cyberuni/cyberlegion](https://github.com/cyberuni/cyberlegion) `packages/cyberlegion` | `uni-legion` | yes | yes | yes |
| `quill` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/quill` | `uni-quill` | yes | yes | yes |
| `research-workbench` | [cyberuni/research-workbench](https://github.com/cyberuni/research-workbench) | (kept) | yes | yes | yes |
| `sdd` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/sdd` | `uni-sdd` | yes | yes | yes |
| `universal-plugin` | [cyberuni/universal-plugin](https://github.com/cyberuni/universal-plugin) `packages/universal-plugin` | (kept) | yes | yes | yes |

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
