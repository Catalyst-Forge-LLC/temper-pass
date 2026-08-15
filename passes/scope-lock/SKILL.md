---
name: scope-lock
description: Freeze boundaries, success criteria, and explicit non-goals into a short written contract. Use when the user asks to lock scope, freeze requirements, write a contract for what is in and out, or stop a drifting conversation. Do NOT use unprompted. Do NOT use for brainstorming or when the problem is still being found.
---

# Scope Lock

A scope lock is a short written contract. The value concentrates in the
non-goals list — the part people skip and the part that prevents drift.

This is a called pass. Only run it when the user has asked for it.

## Protocol

**1. Restate the problem in one sentence.**
Use only nouns the user (or an already-locked brief) already used. If the
restatement introduces a new system, audience, or deliverable, you are
expanding scope — cut it or name it as a decision, not as fact.

If you cannot write that sentence, the scope is not ready to lock. Name the
missing decision and stop. Do not invent a contract to fill the format.

**2. List what is explicitly not being solved.**
Non-goals, not "nice to haves we might get to." The test: if a reader who
was not in the room could reasonably assume it is in, and it is not, it
belongs here. Three to seven items. A list of twenty is a dodge.

**3. Define done as an observable condition, not a feeling.**
Someone who was not in the room should be able to pass/fail it. "Feels
solid" fails this test. "pnpm site:build writes the mill paragraph into
index.html" passes.

Scope is often qualitative. Do not demand numbers the user did not state,
and do not treat the absence of numbers as a reason to refuse the lock.
If a number would change the boundary, put it in step 4 as a reopen
trigger, not as a fake precision in the done line.

**4. Name what would justify reopening scope.**
A trigger, not a vibe — an event someone could point at later. If nothing
would justify reopening, say that.

**5. Hand back the artifact and stop.**
Use this shape:

- **Problem** — the one sentence
- **In** — only what the done line requires
- **Not in** — the non-goals
- **Done** — the observable condition
- **Reopen if** — the trigger

Do not start building unless asked.

## When the input is too soft

If the user invoked this on a problem that is still being found, do not
refuse and do not produce a full-dress contract of nothing. Run a short
version: one-sentence problem (or why you cannot write one), the single
boundary that is already clear, and the decision that must be made before
a lock would mean anything. Then stop.

## When you just proposed the scope

If the direction being locked is one you yourself just proposed, say so.
Treat your own restatement as a suspect expansion. This is the same
self-attribution rule as `red-team`.

## Guidelines

- Prefer a short artifact over a long memo. If the lock is longer than a
  screen, it will not be used.
- After delivering the lock, stop.
