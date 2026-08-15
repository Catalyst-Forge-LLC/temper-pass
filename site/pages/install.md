---
title: Install
description: Point an agent at a TemperPass skill file. Copy the folder.
order: 1
---

TemperPass is Markdown you point an agent at. Copy a folder from `passes/`. There is no npm package.

## Copy a pass

```bash
git clone https://github.com/Catalyst-Forge-LLC/temper-pass.git
```

Copy one folder from `passes/` into your agent's skill directory. Cursor expects a named folder containing `SKILL.md`.

| Pass | Path | When |
| --- | --- | --- |
| [red-team](/red-team) | `passes/red-team/` | You type **red-team this**. Locked. |
| [clarify-first](/clarify-first) | `passes/clarify-first/` | Auto. Validated (same-session). |
| [scope-lock](/scope-lock) | `passes/scope-lock/` | You ask to lock scope. Locked. |
| [tradeoff-matrix](/tradeoff-matrix) | `passes/tradeoff-matrix/` | You ask for a scored comparison. Locked. |

Called passes do not fire on their own. Say the name.

## Why the descriptions are narrow

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.
