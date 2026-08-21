---
title: Install
description: Get a pass folder from a ZIP, a git clone, or npm.
order: 1
---

TemperPass is Markdown you point an agent at. Each pass is a folder with `SKILL.md`. Get one folder, then put it in a skills directory.

## Download a ZIP

Pick the pass you want:

- [clarify-first.zip](/skills/clarify-first.zip)
- [red-team.zip](/skills/red-team.zip)
- [scope-lock.zip](/skills/scope-lock.zip)
- [tradeoff-matrix.zip](/skills/tradeoff-matrix.zip)

Unpack it. Move that folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload one ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/temper-pass.git
```

Copy one folder from `passes/` into a skills directory: `clarify-first/`, `red-team/`, `scope-lock/`, or `tradeoff-matrix/`.

## Install from npm

```bash
pnpm add temperpass
```

Copy one folder from `node_modules/temperpass/passes/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/<pass>/`
- Claude Code, one repo: `.claude/skills/<pass>/`
- Cursor: `.cursor/skills/<pass>/` or `~/.cursor/skills/<pass>/`

The folder you drop in keeps the pass name and must contain `SKILL.md`.

| Pass | Path | When |
| --- | --- | --- |
| [red-team](/red-team) | `passes/red-team/` | You type **red-team this**. Locked. |
| [clarify-first](/clarify-first) | `passes/clarify-first/` | Auto. Validated (same-session). |
| [scope-lock](/scope-lock) | `passes/scope-lock/` | You ask to lock scope. Locked. |
| [tradeoff-matrix](/tradeoff-matrix) | `passes/tradeoff-matrix/` | You ask for a scored comparison. Locked. |

Called passes do not fire on their own. Say the name.

## What you say

- Red-team this.
- Scope-lock this.
- Tradeoff-matrix this.

clarify-first runs on its own when a request is underspecified and a wrong first attempt is expensive. It does not fire on a cheap fix or a factual question.

## Why the descriptions are narrow

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.
