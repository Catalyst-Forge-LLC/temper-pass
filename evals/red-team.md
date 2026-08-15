# `red-team` — eval prompts

Prompts used in the locked-protocol runs. Full transcripts, including the two
failures that forced protocol changes, live in
[`examples/red-team-transcripts.md`](../examples/red-team-transcripts.md).

**Independence caveat:** those runs were produced in the same session that
wrote the protocol. They are a sanity check, not a clean eval.

## Called-pass downgrade

A called pass cannot false-trigger. Test the downgrade path: invoke on input
it is not suited for. Correct behavior is a short, honest version — never a
refusal and never a full-dress treatment of nothing.

## Prompts

1. **Should come back clean** — monolith split into Auth, Core, and Billing
   with already-clean boundaries and a two-week shadow period.
2. **Should find a hinge** — (see transcripts).
3. **Baseline pair** — same prompt with and without the pass. The baseline
   is what tells you whether a failure came from the pass or from the model's
   default behavior.
4. **Non-numeric (owed)** — pricing, hiring, or go-to-market. Check whether
   step 4 degrades gracefully or blanket-suppresses. Do this before
   `scope-lock` inherits the same assumption.
