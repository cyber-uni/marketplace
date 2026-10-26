# cyber-uni marketplace

[![ci](https://github.com/cyber-uni/marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/cyber-uni/marketplace/actions/workflows/ci.yml)

The plugin marketplace for cyber-uni's agentic plugins, for AI coding agents.

**Website:** <https://cyber-uni.github.io/marketplace/> lists every plugin with its install command
for each harness.

## Install

**Claude Code**

```
/plugin marketplace add cyber-uni/marketplace
/plugin install <plugin>@cyber-uni
```

**Codex**

```
codex plugin marketplace add cyber-uni/marketplace
codex plugin add <plugin>@cyber-uni
```

**GitHub Copilot CLI**

```
copilot plugin marketplace add cyber-uni/marketplace
copilot plugin install <plugin>@cyber-uni
```

**Cursor** has no command that adds a repository catalog. An admin imports this repository as a team
marketplace; its catalog is `.cursor-plugin/marketplace.json`.

Start a new session before using the plugin.

## Plugins

Each plugin is listed under the name and source it ships from.

| Plugin                | Source                                                                         | Claude Code | Codex | Copilot CLI |
| --------------------- | ------------------------------------------------------------------------------ | ----------- | ----- | ----------- |
| `aced` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/aced` | yes | yes | yes |
| `buddy-agent-harness` | [repobuddy/buddy-agent-harness](https://github.com/repobuddy/buddy-agent-harness) `packages/buddy-agent-harness` | yes | yes | yes |
| `cyber-agentkit` | [cyber-uni/cyber-agentkit](https://github.com/cyber-uni/cyber-agentkit) `packages/cyber-agentkit` | yes | yes | yes |
| `cyber-asana` | [cyberuni/cyber-asana](https://github.com/cyberuni/cyber-asana) `packages/cyber-asana` | yes | yes | yes |
| `cyber-figma` | [cyberuni/cyber-figma](https://github.com/cyberuni/cyber-figma) `packages/cyber-figma` | yes | yes | yes |
| `cyber-mux` | [cyberuni/cyber-mux](https://github.com/cyberuni/cyber-mux) `packages/cyber-mux` | yes | yes | yes |
| `cyberfleet` | [cyberuni/cyberfleet](https://github.com/cyberuni/cyberfleet) `packages/cyberfleet` | yes | yes | yes |
| `cyberlegion` | [cyberuni/cyberlegion](https://github.com/cyberuni/cyberlegion) `packages/cyberlegion` | yes | yes | yes |
| `quill` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/quill` | yes | yes | yes |
| `repobuddy` | [repobuddy/repobuddy](https://github.com/repobuddy/repobuddy) `packages/buddy` | yes | yes | yes |
| `research-workbench` | [cyberuni/research-workbench](https://github.com/cyberuni/research-workbench) | yes | yes | yes |
| `sdd` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `plugins/sdd` | yes | yes | yes |
| `sdd2` | [cyberuni/cyber-sdd](https://github.com/cyberuni/cyber-sdd) `packages/cyber-sdd` | yes | no | yes |
| `universal-plugin` | [cyberuni/universal-plugin](https://github.com/cyberuni/universal-plugin) `packages/universal-plugin` | yes | yes | yes |

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
