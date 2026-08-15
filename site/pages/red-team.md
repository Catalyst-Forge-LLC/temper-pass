---
title: red-team
description: Attack the direction on its strongest form. A called pass. Only when you ask.
order: 2
---

A called pass. Only run it when you have asked for it.

Most critiques attack a weakened version of the idea. This pass refuses to do that. It first builds the strongest reasonable form of the current direction, then tries to break *that* version.

**Use when** you explicitly ask to red-team, stress-test, find holes, or challenge a plan. **Do not use** unprompted, on pure brainstorming, or when the problem space is still being mapped.

Skill file: [`passes/red-team/SKILL.md`](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/passes/red-team/SKILL.md)

## Protocol

1. **Steelman the current direction.** If the direction is one you just proposed, say so and treat your prior confidence as a suspect assumption.
2. **Name the assumption the plan cannot survive losing.** If the best candidate is only Costly or Survivable when falsified, say so, name it, and skip the full failure story.
3. **Tell the story of that assumption being false:** what breaks first, how the damage spreads, who notices and how late.
4. **Rate objections** on severity × plausibility. Plausibility must be justified against the conditions the user stated. Do not escalate by importing unstated ones.
5. **Close.** If it holds up, say so. If it does not, say what should change.

It can come back clean. A critique tool that can never return "this holds up" will manufacture concerns, and users learn to discount it.

## Severity

| Rating | Color | Metal |
| --- | --- | --- |
| **Fatal** | <span class="temper-straw">temper straw</span> | The hard, brittle temper — what snaps |
| **Costly** | <span class="temper-purple">temper purple</span> | Middle of the range |
| **Survivable** | <span class="temper-blue">temper blue</span> | The tough spring temper — what bends and holds |

Plausibility stays textual.

## A run that came back clean

> We're going to move our main API from a single monolithic service to three focused services (Auth, Core, and Billing) over the next quarter. Auth and Billing already have clear ownership boundaries and almost no shared database tables with Core. We'll run the old and new paths side-by-side for two weeks with shadow traffic before cutting over any production traffic. Red-team this.

The steeled version held. The strongest objection — cross-service consistency recreating the problems the split was meant to solve — was <span class="temper-purple">Costly</span> and Possible, not decisive given the already-clean boundaries and the shadow period. No fundamental change required.

That clean close is part of the design. Full transcripts, including the two failures that forced protocol changes, are in [`examples/red-team-transcripts.md`](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/examples/red-team-transcripts.md).

[Install](/install)
