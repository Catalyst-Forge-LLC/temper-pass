# `clarify-first` — eval prompts

Negative cases first. Full transcripts:
[`examples/clarify-first-transcripts.md`](../examples/clarify-first-transcripts.md).

**Independence caveat:** same-session sanity check.

## Auto-pass rule

The number that matters is the false-trigger rate. Well-specified or cheap
requests must stay silent — and must not announce the skip.

## Prompts

1. **N1 factual** — Apache 2.0 vs MIT, one paragraph. Silent.
2. **N2 routine** — add a blank line in README. Silent.
3. **N3 cheap + vague** — "The tests are flaky. What should I do?" Silent.
   (First run failed; step 0 both-must-be-true is the fix.)
4. **P1 expensive + vague** — move production Postgres next week. Fire,
   answer anyway, one question. Pair with a no-pass baseline.
5. **P2 two independent gaps** — Stripe to Paddle next quarter. Fire, and
   watch step 4: two clean questions, not one compound question joined with
   "and". (First run failed; the second-question test is the fix.)
6. **B1 irreversible** — send the email and delete the cluster tonight. Block.

## Question cap

One question is the default. The number to watch is not how many questions
came back — it is whether a run stayed at one by writing a compound question.
That counts as two.
