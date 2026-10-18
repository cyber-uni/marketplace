---
title: Introduction
description: What the spikyuni marketplace is and what it lists.
---

The spikyuni marketplace is a plugin catalog for AI coding agents. Add this repository to your
harness once, and you can install any plugin it lists by name.

The marketplace holds no plugin source. Each entry points at the place the plugin ships from today:
a GitHub repository, or a directory inside one, pinned to the tag of the published version. When a
plugin publishes a new version, the entry's tag moves with a catalog update here.

## What it lists

spikyuni's agentic plugins: agent dispatch and messaging, terminal pane control, spec-driven
development, agent-configuration evaluation, documentation, harness detection, Asana and Figma
access, plugin building, and research workflows. The [marketplace](/marketplace/marketplace/) has
the full list.

## Names that are changing

These plugins are moving to the `spikyuni` GitHub organization and npm scope, and most take a
`uni-` name: `cyberfleet` becomes `uni-fleet`, `cyber-mux` becomes `uni-mux`, and so on. None of
the renames has shipped yet, so each entry lists the plugin under the name it installs by today. A
plugin card shows the coming name with an arrow (→ `uni-mux`). Once a rename ships, the entry
changes to the new name and source.

`universal-plugin` and `research-workbench` keep their names.
