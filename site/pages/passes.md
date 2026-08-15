---
title: Passes
description: Four passes. Three you call. One that calls itself. What each one does and what state it is in.
order: 2
---

Everything in TemperPass is a **pass**: a short protocol that runs over the agent's thinking before it commits. The only distinction is who calls it.

A user who types `red-team` has consented to being disagreed with. Nobody consents to that by asking a question. So anything confrontational, slow, or artifact-producing waits to be called, and exactly one pass is allowed to fire on its own.

## [clarify-first](/clarify-first) (auto)

Names the load-bearing assumptions, says what missing fact would change the answer, then answers anyway. Closes with one question, two at most. It fires only when a request is underspecified **and** a wrong first attempt is expensive; a factual question or a cheap fix stays uninterrupted.

**Status:** validated in-session, negative cases first. Independent run still owed.

## [red-team](/red-team) (called)

Builds the strongest reasonable form of the current direction, then attacks that version. Rates objections on severity — <span class="temper-straw">Fatal</span>, <span class="temper-purple">Costly</span>, <span class="temper-blue">Survivable</span> — and plausibility, and is allowed to come back clean.

**Status:** locked against prompts it was allowed to fail.

## [scope-lock](/scope-lock) (called)

Freezes boundaries, success criteria, and explicit non-goals before work starts, in your own nouns. It does not invent deliverables on the way.

**Status:** locked. The first run invented HR process nouns for "hire a senior engineer"; the protocol now forbids new nouns.

## [tradeoff-matrix](/tradeoff-matrix) (called)

Forces explicit criteria, weights, and scores across genuinely different options. Variants of one option collapse into it before anything gets scored.

**Status:** locked. The first run scored three hosting providers as if they were three architectures.

## Parked, not cancelled

`first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`. Each stays parked until it has a protocol that beats asking the model to do the same thing in a sentence.

[Install](/install)
