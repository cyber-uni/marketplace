---
title: Installation
description: Add the spikyuni marketplace to Claude Code, Codex, GitHub Copilot CLI, or Cursor, and install a plugin from it.
---

Adding a marketplace registers the catalog. It installs nothing until you install a plugin from it.
The marketplace is named `spikyuni`, and that is the name after the `@` in every install command.

## Claude Code

```
/plugin marketplace add spikyuni/marketplace
/plugin install <plugin>@spikyuni
```

Both commands also run outside a session as `claude plugin marketplace add` and
`claude plugin install`. Refresh the catalog with `/plugin marketplace update`. Claude Code does not
auto-update third-party marketplaces unless you turn that on under `/plugin` → Marketplaces.

## Codex

```
codex plugin marketplace add spikyuni/marketplace
codex plugin add <plugin>@spikyuni
```

Codex installs with `plugin add`, not `plugin install`.

## GitHub Copilot CLI

```
copilot plugin marketplace add spikyuni/marketplace
copilot plugin install <plugin>@spikyuni
```

## Cursor

Cursor has no command that adds a repository catalog. An admin imports this repository as a team
marketplace, and its catalog is `.cursor-plugin/marketplace.json`.

## Where plugins install from

Every plugin is listed by its GitHub repository, pinned to the tag of the version published today,
so one entry installs on every harness above. The generator,
[universal-plugin](https://github.com/cyberuni/universal-plugin), writes each harness the source
kind it accepts: a separate Copilot CLI catalog, because Copilot CLI refuses a catalog that holds a
`git-subdir` source, and a Codex entry with the GitHub URL.
