---
title: Get started
description: Choose a pass, install it in your agent, then run a named example.
order: 1
---

Install one pass in your agent, then use it. You do not need Node or npm for this path. TemperPass is Markdown an agent is told to follow. The host and the model decide whether the protocol is followed.

## Which pass?

Choose before you install. They are different folders.

| Pass | Install this first | First run |
| --- | --- | --- |
| [clarify-first](/clarify-first) | Auto, if the host matches | The Postgres request below |
| [red-team](/red-team) | You type **red-team this** | A direction you want attacked |
| [scope-lock](/scope-lock) | You ask to lock scope | A job that needs boundaries |
| [tradeoff-matrix](/tradeoff-matrix) | You ask for a scored comparison | Two genuinely different options |

Called passes do not fire on their own. Say the name. Start with one pass.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download the zip for the pass you chose:

- [clarify-first.zip](/skills/clarify-first.zip)
- [red-team.zip](/skills/red-team.zip)
- [scope-lock.zip](/skills/scope-lock.zip)
- [tradeoff-matrix.zip](/skills/tradeoff-matrix.zip)

### Add it

Unzip it. You should see `SKILL.md`.

Put that folder in the project:

`.cursor/skills/clarify-first/`

or the matching pass name.

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

For `clarify-first`, ask the Postgres request below. If the agent names a load-bearing assumption, answers under it, and closes with one question, it found the skill.

For a called pass, say the name. A folder the host does not scan does nothing.

### Try it

**clarify-first.** Ask:

> Follow the installed clarify-first pass. Move production Postgres next week.

**red-team.** Ask:

> Red-team this. Follow the installed red-team pass.

Then name the direction.

### Find the result

Success looks like this shape, not identical wording from every model:

- **clarify-first:** the assumption named, an answer under it, one question whose answer would change the recommendation. Silent on a cheap README typo.
- **red-team:** the strongest form of the direction, then objections. It is allowed to come back clean.
- The request itself is not rewritten unless you asked for that edit.

## Claude Code

### Get it

Same zips as Cursor.

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/clarify-first/`

or the matching pass name.

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/<pass>/` instead.

### Confirm it

Same check as Cursor.

### Try it

Same requests as [Cursor](#try-it).

### Find the result

Same shape as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download one zip.

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request for that pass. If the agent follows the numbered protocol, it loaded the skill.

### Try it

Same requests as [Cursor](#try-it).

### Find the result

The pass output appears in the chat.

## After the pass

There is no apply skill. Read what it named. Called passes wait until you say the name again.

## Other ways to ask

Once the first run works:

- Scope-lock this.
- Tradeoff-matrix this.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the pass folders. It does not register a pass with the agent.

```bash
pnpm add temperpass
```

Copy one folder from `node_modules/temperpass/passes/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/temper-pass) and copy one folder from `passes/`.

### Install for all projects

- Cursor: `~/.cursor/skills/<pass>/`
- Claude Code: `~/.claude/skills/<pass>/`

Same folder shape. The first-run check is the same.

## Why the descriptions are narrow

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.
