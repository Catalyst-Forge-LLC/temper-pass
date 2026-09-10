---
title: Tempered judgment your agent can install.
description: Give your agent a protocol for naming consequential assumptions, checking scope, challenging a direction, or comparing tradeoffs.
order: 0
---

Give your agent a protocol for naming consequential assumptions, checking scope, challenging a direction, or comparing tradeoffs. Use the pass that fits the task, with clarification reserved for uncertainty that materially affects the work.

These are numbered protocols an agent is instructed to follow. Observable outputs are stated assumptions, a pause before hard-to-undo work, a red-team that can come back clean, or a tradeoff table. The host and the model decide whether the protocol is followed. The text does not override host permissions, and it does not read private model reasoning.

## What changes for you

**Request.** Move production Postgres next week.

**Assumption the pass is instructed to name.** The current database is a single-region instance, and a wrong first cut would mean a production rewrite.

**What you should see.** The agent states that assumption, answers under it, and closes with one question whose answer would change the recommendation. It does not halt a cheap typo or a factual question.

**Request.** Add a blank line in the README.

**What you should see.** A normal answer. No preamble about assumptions. The pass is instructed to stay silent when a wrong first attempt is cheap.

## Four passes. Three you call. One the host may match.

Everything is a **pass**. The only distinction is who is supposed to call it.

| Pass | Type | Status | Does |
| --- | --- | --- | --- |
| [clarify-first](/clarify-first) | Auto, if the host matches the skill | **Same-session check** | Names load-bearing assumptions, then answers under them |
| [red-team](/red-team) | Called | **Protocol locked** | Attacks the direction on its strongest form |
| [scope-lock](/scope-lock) | Called | **Protocol locked** | Freezes boundaries, success criteria, and explicit non-goals |
| [tradeoff-matrix](/tradeoff-matrix) | Called | **Protocol locked** | Forces explicit criteria, weights, and scoring across genuinely different options |

**Same-session check** means the protocol was tightened against prompts in the same session that wrote it. That is a sanity check, not an independent eval. **Protocol locked** means the numbered steps are stable after those runs. Neither label is a performance proof.

Auto means the host loaded the skill folder and matched its description. Dropping a folder where the host does not scan skills does nothing. Cursor and Claude Code match installed `SKILL.md` descriptions. They do not guarantee a fire on every underspecified request.

[All four passes](/passes) · [Install](/install) · [GitHub](https://github.com/Catalyst-Forge-LLC/temper-pass)

## How they're written

Skill descriptions here are narrow on purpose. A skill that fires on its own costs you an interruption on every match, including the false ones, so each description carries a tight target and explicit negative cases.

Numbered steps are easier for an agent to follow than loose guidelines. A live `red-team` run ignored a rule that sat in guidelines and held when the same rule became a numbered step. That is an observed example, not enforcement.

[`red-team`](/red-team) is allowed to come back clean, because a critique that can never say "this holds up" just manufactures concerns until you learn to discount it.

## Existing runs

The prompts and transcripts are in the repo. Recorded conditions, where they exist:

| Pass | What was checked | Conditions | Limit |
| --- | --- | --- | --- |
| [clarify-first evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/clarify-first.md) | False-trigger rate, then one expensive fire | Same-session sanity check. Transcripts in `examples/clarify-first-transcripts.md`. | Independent run still owed. Host and model not named on every prompt. |
| [red-team evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/red-team.md) | Clean return, a hinge, baseline with and without the pass | Same session that wrote the protocol. Two failures forced step changes. | Not a clean eval. |
| [scope-lock evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/scope-lock.md) | Tight lock, soft lock, hire case, qualitative lock | Transcripts in `examples/`. | Same-session iteration. |
| [tradeoff-matrix evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/tradeoff-matrix.md) | Distinct options, not variants of one | Transcripts in `examples/`. | Same-session iteration. |

An illustrative transcript, a same-session revision, and a reproducible check are different things. These files are the first two.

## Why the name

A temper pass is a real steel-mill operation. A temper mill runs finished strip through a very light cold-rolling pass, typically only 1.5–2% thickness reduction, far less than ordinary cold rolling. It is not there to reshape the steel. It is there to set the mechanical properties, control surface roughness, and improve flatness. The shape goes in and the shape comes out. What changes is that the material stops being brittle.

The passes do not withhold your answer or reroute your work. They take out the brittleness, the unstated assumption, the undefended scope, the objection nobody voiced, and hand back the same shape, harder to snap. A light pass before the answer.

## Design notes

An earlier draft had nine passes. Five of them were behavior a competent model already produces when you ask for it. The protocol is the part you install.

**Parked, not cancelled:** `first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`. Each returns only when it has a protocol that beats asking the model to do the same thing.

TemperPass started as one Saturday morning after [an X post by Vox](https://x.com/Voxyz_ai/status/2088327172725592142) about making a model list its assumptions and ask a single question before it answers. `clarify-first` still names the assumptions, then answers, and waits only when the next action is hard to undo. The write-up is [A prompt with coffee](/posts/a-prompt-with-coffee).

## On the Catalyst Forge shelf

Lives next to ForgeTrail and Smell Check. Closest cousin is Smell Check: a rule set you point an agent at.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
