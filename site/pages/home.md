---
title: Tempered judgment your agent can install.
description: Most agents answer immediately and confidently. TemperPass makes them say what they're assuming first.
order: 0
---

Most agents answer immediately and confidently. TemperPass makes them say what they're assuming first.

These are the checks a careful person already runs, written as a numbered protocol an agent can follow. `pnpm add temperpass`, copy one folder into the skills directory, and it runs over the agent's thinking on the way to the answer.

## The right question

Answering the wrong question well costs more than answering the right question slowly — but only when the work is hard to undo.

Agents skip that second half. They pick a reading of your request and commit to it. [clarify-first](/clarify-first) names the load-bearing assumptions, says what missing fact would change the answer, then answers anyway, and closes with one question rather than a list of them.

Waiting is reserved for work you cannot undo: send, delete, spend, write to production. Ambiguity alone is not a reason to halt. Ambiguity plus irreversibility is.

## Four passes. Three you call. One that calls itself.

Everything is a **pass**. The only distinction is who calls it.

A user who types `red-team` has consented to being disagreed with. Nobody consents to that by asking a question. The auto pass fires without being asked, so the bar is high: only behavior that is safe to apply unrequested qualifies. Exactly one pass currently clears it.

| Pass | Type | Status | Does |
| --- | --- | --- | --- |
| [clarify-first](/clarify-first) | Auto | **Validated** (same-session) | Names load-bearing assumptions, then answers under them |
| [red-team](/red-team) | Called | **Locked** | Attacks the direction on its strongest form |
| [scope-lock](/scope-lock) | Called | **Locked** | Freezes boundaries, success criteria, and explicit non-goals |
| [tradeoff-matrix](/tradeoff-matrix) | Called | **Locked** | Forces explicit criteria, weights, and scoring across genuinely different options |

[red-team](/red-team) rates objections on a temper scale: <span class="temper-straw">Fatal</span>, <span class="temper-purple">Costly</span>, <span class="temper-blue">Survivable</span>. The failed runs that earned those statuses are in the repo.

Four is the whole set. An earlier draft had nine, and five of them were behavior a competent model already produces when you ask for it. The protocol is the part you install.

[All four passes](/passes) · [Install](/install) · [GitHub](https://github.com/Catalyst-Forge-LLC/temper-pass)

## How they're written

Skill descriptions here are narrow on purpose. A skill that fires on its own costs you an interruption on every match, including the false ones, so each description carries a tight target and explicit negative cases. Broadening them later would look like a fix and would not be one.

**Guidelines don't bind. Steps do.** If a run comes out wrong without a rule, the rule belongs in the numbered protocol with a test the model can apply, not in a paragraph of advice above it.

[`red-team`](/red-team) is allowed to come back clean, because a critique that can never say "this holds up" just manufactures concerns until you learn to discount it.

A pass that has never been run against a real prompt is a guess. The runs that failed are in the repo, next to the protocol changes they forced.

## Why the name

A temper pass is a real steel-mill operation. A temper mill runs finished strip through a very light cold-rolling pass — typically only 1.5–2% thickness reduction, far less than ordinary cold rolling. It isn't there to reshape the steel. It's there to set the mechanical properties, control surface roughness, and improve flatness. The shape goes in and the shape comes out; what changes is that the material stops being brittle.

The passes don't withhold your answer or reroute your work. They take out the brittleness — the unstated assumption, the undefended scope, the objection nobody voiced — and hand back the same shape, harder to snap. A light pass before the answer.

## Where it started

TemperPass is one hour of a Saturday morning, after [an X post by Vox](https://x.com/Voxyz_ai/status/2088327172725592142) about making a model list its assumptions and ask a single question before it answers. `clarify-first` still names the assumptions, then answers, and waits only when the next action is hard to undo. The write-up is [A prompt with coffee](/posts/a-prompt-with-coffee).

## On the Catalyst Forge shelf

Lives next to ForgeTrail and Smell Check. Closest cousin is Smell Check: a rule set you point an agent at.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
