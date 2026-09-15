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
| [clarify-first](/clarify-first) | Auto, if the host matches | The fictional Postgres planning request below |
| [red-team](/red-team) | You type **red-team this** | A short plan with assumptions |
| [scope-lock](/scope-lock) | You ask to lock scope | An explicitly bounded docs change |
| [tradeoff-matrix](/tradeoff-matrix) | You ask for a scored comparison | Three genuinely different options plus a decision criterion |

Called passes do not fire on their own. Say the name. Start with one pass. These are named protocols invoked through the host’s supported skill mechanism. “Does not fire on its own” describes intended pass behavior, not a guarantee about every host’s discovery.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project or user skills folder | Readable skill folder | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Readable skill folder | Same |
| Claude.ai | Uploaded skill zip | Chat | Same |
| Other agents that read `SKILL.md` | Manual copy | Readable skill folder | Unverified |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A generic planning answer alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

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

If Cursor lists installed skills, confirm the pass name. Otherwise ask it to open that pass’s `SKILL.md` and quote the first heading.

### Try it

**clarify-first.** Ask:

> Follow the installed clarify-first pass. This is a fictional planning exercise. Make no changes. Advise on moving production Postgres next week for desk-stamp, an invented product.

**red-team.** Ask:

> Red-team this. Follow the installed red-team pass. This is a fictional planning exercise. Make no changes.
>
> Direction: ship a public beta of desk-stamp next Friday with no rollback plan, assuming weekend traffic will be low.

**scope-lock.** Ask:

> Scope-lock this. Follow the installed scope-lock pass. This is a fictional planning exercise. Make no changes.
>
> Job: update the README install section for desk-stamp. Do not redesign the product site.

**tradeoff-matrix.** Ask:

> Tradeoff-matrix this. Follow the installed tradeoff-matrix pass. This is a fictional planning exercise. Make no changes.
>
> Decision criterion: operators can recover a failed deploy without opening a terminal.
> Options: (1) a Retry button on the failed-deploy screen, (2) a CLI-only rerun command documented in the README, (3) automatic reruns with no operator action.

If fewer than three meaningfully different options remain, the pass should stop and say so. Do not invent a third option to satisfy the page.

### Find the result

The pass output appears in chat. Success looks like this shape, not identical wording from every model:

- **clarify-first:** the assumption named, an answer under it, one question whose answer would change the recommendation. Silent on a cheap README typo.
- **red-team:** the strongest form of the direction, then objections. It is allowed to come back clean.
- **scope-lock:** frozen boundaries, success criteria, and explicit non-goals.
- **tradeoff-matrix:** criteria and weights before scores, a table across three distinct options, and a one-line “this decision turns on X.”
- The request itself is not rewritten unless you asked for that edit.

That the example behaved is not the same check as discovery.

## Claude Code

### Get it

Download the zip for the pass you chose:

- [clarify-first.zip](/skills/clarify-first.zip)
- [red-team.zip](/skills/red-team.zip)
- [scope-lock.zip](/skills/scope-lock.zip)
- [tradeoff-matrix.zip](/skills/tradeoff-matrix.zip)

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/clarify-first/`

or the matching pass name.

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/<pass>/` instead.

### Confirm it

If Claude Code lists skills, confirm the pass name. Otherwise ask it to open that pass’s `SKILL.md` and quote the first heading.

### Try it

**clarify-first.** Ask:

> Follow the installed clarify-first pass. This is a fictional planning exercise. Make no changes. Advise on moving production Postgres next week for desk-stamp, an invented product.

**red-team.** Ask:

> Red-team this. Follow the installed red-team pass. This is a fictional planning exercise. Make no changes.
>
> Direction: ship a public beta of desk-stamp next Friday with no rollback plan, assuming weekend traffic will be low.

**scope-lock.** Ask:

> Scope-lock this. Follow the installed scope-lock pass. This is a fictional planning exercise. Make no changes.
>
> Job: update the README install section for desk-stamp. Do not redesign the product site.

**tradeoff-matrix.** Ask:

> Tradeoff-matrix this. Follow the installed tradeoff-matrix pass. This is a fictional planning exercise. Make no changes.
>
> Decision criterion: operators can recover a failed deploy without opening a terminal.
> Options: (1) a Retry button on the failed-deploy screen, (2) a CLI-only rerun command documented in the README, (3) automatic reruns with no operator action.

### Find the result

The pass output appears in chat. Match the expected shape for the pass you installed. Missing input handling is part of success where the protocol says to stop.

## Claude.ai

### Get it

Download the zip for the pass you chose.

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

If the product shows installed skills, confirm the pass name. Otherwise ask the chat to summarize the numbered steps of that pass.

### Try it

Use the same request text as in [Cursor](#try-it) for the pass you uploaded, including the fictional-exercise line.

### Find the result

The pass output appears in the chat.

## After the pass

There is no apply skill. Read what it named. Called passes wait until you say the name again.

### Update or remove

Replace the installed pass folder (or re-upload the zip) to update. Delete that folder or remove the uploaded skill to uninstall. Copied skills do not refresh when you bump the npm package.

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

Same folder shape. Discovery and first-use checks are the same.

## Why the descriptions are narrow

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.

Detailed evaluation history and design notes live in the [repo](https://github.com/Catalyst-Forge-LLC/temper-pass) under `evals/` and `examples/`. They support credibility. They are not required for first use.
