---
title: "Surface assumptions before they become expensive."
description: "Four skills help your agent clarify consequential assumptions, challenge a plan, hold scope, or compare alternatives. Choose the pass that fits the decision so the next step follows an explicit constraint or tradeoff."
order: 0
---

<section class="value-hero" aria-label="TemperPass overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Four decision-review skills for your AI agent</p><h1 class="hero-phrased"><span class="hero-phrase">Surface assumptions</span> <span class="hero-phrase">before they become expensive.</span></h1></div><div class="value-pitch"><p class="value-lede">Four skills help your agent clarify consequential assumptions, challenge a plan, hold scope, or compare alternatives. Choose the pass that fits the decision so the next step follows an explicit constraint or tradeoff.</p><div class="cta-row"><a class="cta cta-primary" href="/install">Install TemperPass</a><a class="cta cta-secondary" href="#what-changes-for-you">See the question that changes the plan</a></div><p class="value-limit">These are instructions for your agent, not a permission check. Host permissions still govern execution.</p></div></div>
<figure class="value-proof worked-example" id="what-changes-for-you" tabindex="-1">
<figcaption>Ask the question that changes the migration plan</figcaption>
<p class="example-context">Fictional planning exercise for desk-stamp. No production action is requested. This illustrates clarify-first; it is not an operational migration plan.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>1 · Your request</span> The deadline hides a consequential constraint</h2>
<blockquote><p>Advise on moving production Postgres next week.</p></blockquote><p>The request does not say whether writes can pause during the move. That answer changes the approach, not just the wording.</p>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>2 · Illustrative agent reply</span> State the assumption and still give advice</h2>
<blockquote><p>Assuming a single-region database and an agreed write pause: rehearse the move on a copy, measure the cutover, and prove rollback before choosing a date. If the rehearsal cannot fit the allowed pause, change the approach or the date.<br><br><strong>Can the app pause writes during cutover?</strong></p></blockquote><p>The agent gives a conditional recommendation before asking the question.</p>
</section>
<section class="example-step" aria-labelledby="example-step-3">
<h2 id="example-step-3"><span>3 · Your answer changes the next step</span> Two answers lead to different work</h2>
<p><strong>Yes, an agreed pause is acceptable.</strong><br>Rehearse a paused-write cutover and check it fits that window.</p><p><strong>No, writes must continue.</strong><br>Investigate a continuous replication and cutover approach; revisit next week’s date.</p><p class="example-payoff">Settle that constraint before investing in the wrong plan.</p>
</section>
<p class="value-note">A cheap request such as “Add a blank line in the README” should receive a normal answer, without an assumptions preamble. Host permissions still govern any later execution.</p>
<p class="example-links"><a href="/clarify-first">Read the clarify-first protocol</a></p>
</figure></section>

## Four passes. Three you call. One the host may match.

Everything is a **pass**. The only distinction is who is supposed to call it.

<div class="comparison-scroll" role="region" aria-label="TemperPass protocol comparison" tabindex="0">

| Pass | Type | Status | Does |
| --- | --- | --- | --- |
| [clarify-first](/clarify-first) | Auto, if the host matches the skill | **Same-session check** | Names load-bearing assumptions, then answers under them |
| [red-team](/red-team) | Called | **Protocol locked** | Attacks the direction on its strongest form |
| [scope-lock](/scope-lock) | Called | **Protocol locked** | Freezes boundaries, success criteria, and explicit non-goals |
| [tradeoff-matrix](/tradeoff-matrix) | Called | **Protocol locked** | Forces explicit criteria, weights, and scoring across meaningfully different options |

</div>

**Same-session check** means the protocol was tightened against prompts in the same session that wrote it. That is a sanity check, not an independent eval. **Protocol locked** means the numbered steps are stable after those runs. Neither label is a performance proof.

Auto means the host loaded the skill folder and matched its description. Dropping a folder where the host does not scan skills does nothing. Cursor and Claude Code match installed `SKILL.md` descriptions. They do not guarantee a fire on every underspecified request.

[Install in your agent](/install) · [All four passes](/passes) · [Posts](/posts) · [GitHub](https://github.com/Catalyst-Forge-LLC/temper-pass)

## How they're written

Skill descriptions here are narrow on purpose. A skill that fires on its own costs you an interruption on every match, including the false ones, so each description carries a tight target and explicit negative cases.

Numbered steps are easier for an agent to follow than loose guidelines. A live `red-team` run ignored a rule that sat in guidelines and held when the same rule became a numbered step. That is an observed example, not enforcement.

[`red-team`](/red-team) is allowed to come back clean, because a critique that can never say "this holds up" just manufactures concerns until you learn to discount it.

## Existing runs

The prompts and transcripts are in the repo. Recorded conditions, where they exist:

<div class="comparison-scroll" role="region" aria-label="Existing evaluation runs and limits" tabindex="0">

| Pass | What was checked | Conditions | Limit |
| --- | --- | --- | --- |
| [clarify-first evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/clarify-first.md) | False-trigger rate, then one expensive fire | Same-session sanity check. Transcripts in `examples/clarify-first-transcripts.md`. | Independent run still owed. Host and model not named on every prompt. |
| [red-team evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/red-team.md) | Clean return, a hinge, baseline with and without the pass | Same session that wrote the protocol. Two failures forced step changes. | Not a clean eval. |
| [scope-lock evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/scope-lock.md) | Tight lock, soft lock, hire case, qualitative lock | Transcripts in `examples/`. | Same-session iteration. |
| [tradeoff-matrix evals](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/evals/tradeoff-matrix.md) | Distinct options, not variants of one | Transcripts in `examples/`. | Same-session iteration. |

</div>

An illustrative transcript, a same-session revision, and a reproducible check are different things. These files are the first two.

## Why the name

A temper pass is a real steel-mill operation. A temper mill runs finished strip through a very light cold-rolling pass, typically only 1.5–2% thickness reduction, far less than ordinary cold rolling. It is not there to reshape the steel. It is there to set the mechanical properties, control surface roughness, and improve flatness. The shape goes in and the shape comes out. What changes is that the material stops being brittle.

The passes do not withhold your answer or reroute your work. They take out the brittleness, the unstated assumption, the undefended scope, the objection nobody voiced, and hand back the same shape, harder to snap. A light pass before the answer.

## Design notes

An earlier draft had nine passes. Five of them were behavior a competent model already produces when you ask for it. The protocol is the part you install.

**Parked, not cancelled:** `first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`. Each returns only when it has a protocol that beats asking the model to do the same thing.

TemperPass started as one Saturday morning after [an X post by Vox](https://x.com/Voxyz_ai/status/2088327172725592142) about making a model list its assumptions and ask a single question before it answers. `clarify-first` still tells the agent to name the assumptions, then answer, and to ask first only when the next action is hard to undo. The write-up is [A prompt with coffee](/posts/a-prompt-with-coffee).

## On the Catalyst Forge shelf

Lives next to ForgeTrail and Smell Check. Closest cousin is Smell Check: a rule set you point an agent at.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
