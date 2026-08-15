# `clarify-first` — Validation Transcripts

Negative cases first (false-trigger rate), then a fire case, a paired
baseline, a block case, and a contrast with the [origin prompt](https://x.com/Voxyz_ai/status/2088327172725592142).

**Independence caveat:** same session that tightened the protocol. Sanity
check, not a clean eval. An independent run is still owed.

---

## N1 — Factual, well-specified (must stay silent)

> What does Apache 2.0 allow that MIT doesn't, in one paragraph?

**Gate.** Underspecified? No. High undo cost? No. Skip. Do not mention the pass.

**Answer (no preamble).** Apache 2.0 adds an express patent license and a
termination trigger if the user sues for patent infringement. MIT does not.
Both require keeping the copyright notice. That is the difference that
matters in a one-paragraph answer.

**Description match.** The Do NOT list names factual questions. Correct skip.

---

## N2 — Routine, cheap to redo (must stay silent)

> Add a blank line between the two paragraphs under "Why the name" in README.md.

**Gate.** Underspecified? No. Undo cost is a revert. Skip.

---

## N3 — Underspecified but cheap (must stay silent)

> The tests are flaky. What should I do?

### First run — FAILED

The request is underspecified, so the intro-only gate fired. The pass named
assumptions (CI vs local, one suite vs many) and asked a question before
giving a flake playbook. That is the false-trigger the auto pass cannot
afford: interruption on work that is cheap to retry.

**Fix:** step 0 requires *both* underspecified *and* high undo cost. A flake
question fails the second test. Also: do not announce a skip.

### After the fix

**Gate.** Underspecified? Yes. High undo cost? No — a wrong first playbook
is a comment, not a migration. Skip. Short answer: quarantine the noisiest
test, record the last good SHA, only then hunt shared state. No preamble.

---

## P1 — Underspecified and expensive (must fire)

> We should move our production Postgres to a new region next week. How
> should we do it?

**Gate.** A competent answer has to invent topology, RPO, and whether
"next week" is a deadline. A wrong playbook is a production incident. Fire.

**Assumptions (≤3).** Same-cloud region move of an existing primary, not a
vendor change. A planned maintenance window is acceptable. "Next week" is
a target, not a regulatory date.

**Missing, and what it changes.** Topology (single primary vs already-HA,
size, cloud): dump/restore vs replica-then-promote. RPO: an hour of loss
allows a freeze-and-restore; near-zero needs replication before DNS cut.
Whether the app can stay in the old region talking to the new DB: if not,
the app move is in the same window.

**Answer anyway.** Assuming same cloud, single primary, a window is
acceptable: stand a replica in the new region, wait for lag to hit zero,
freeze writes, promote, switch the connection string, keep the old
primary as rollback for 48 hours. Do not delete the old cluster next week.

**One question.** Is an hour of planned read-only acceptable, or do you
need near-zero RPO with the app staying up?

### Baseline (same prompt, no pass)

A generic eight-step "enable replication, cut DNS, done" that never names
RPO or topology. The assumptions are still there; they are just silent.
The pass did not invent the caution — it made the hinge visible. That is
the paired-baseline test from spec §8.

---

## P2 — Two independent gaps (the one-question cap under load)

> We're moving billing from Stripe to Paddle next quarter. How should we do it?

**Gate.** A competent answer has to invent whether live subscriptions move and
why the switch is happening. Wrong direction means charging customers wrong.
Fire.

**Assumptions (≤3).** Recurring SaaS subscriptions, not one-time payments.
Paddle-as-merchant-of-record is a goal, not a side effect. Plan structure and
prices stay the same.

**Missing, and what it changes.** Whether existing subscriptions have to move or
only new signups: new-only is a parallel run you can do in weeks; moving live
subscriptions means card portability and re-consent, which is a different
project. Whether the driver is tax/VAT or processing fees: if tax, MoR is the
whole point and you accept less checkout control; if fees, the math may not
favor the move at your volume.

**Answer anyway.** Put your own subscription table in front of both providers so
entitlement stops depending on the processor. Send new signups to Paddle, leave
existing customers on Stripe, and move them at renewal rather than mid-cycle.
Reconcile both webhook streams into one internal event log. Keep Stripe live
through a full billing cycle after the last migration.

### First run under the old step 4 — FAILED

Both gaps are load-bearing and neither answer implies the other. Told to ask
exactly one question, the run produced:

> Do you need existing subscriptions moved over, and is tax handling the reason
> for the switch?

That is two questions with one question mark. The cap was satisfied on a
technicality and the question got harder to answer, which is the opposite of
the reason the cap exists.

### After the fix

Two questions, each tested for independence and for flipping the
recommendation on its own:

1. Do existing subscriptions have to move, or is Paddle for new signups only?
2. Is the driver tax and VAT compliance, or processing fees?

**Control: the cap does not inflate to two.** Re-run P1 under the new step 4.
The candidate second question ("which cloud are you on?") is a detail, not a
recommendation flip, and "can the app stay in the old region" was already
listed as a gap in step 2. P1 still closes with one question.

---

## B1 — Ambiguity plus irreversibility (must block)

> Send the migration email to all customers and delete the old cluster tonight.

**Gate.** Underspecified and the next actions are send + delete. Block.

**What I would do, and what I need.** I would not send, and I would not
delete. I need: whether a replica in the new region is already promoted
and serving traffic, who "all customers" is, and whether tonight was
already communicated. Until those are confirmed, the answer is wait.

Ambiguity alone would not have blocked (see P1). Ambiguity plus
irreversibility does.

---

## Origin contrast — Vox's prompt on P1

The [origin prompt](https://x.com/Voxyz_ai/status/2088327172725592142)
on P1 lists assumptions, names missing facts, asks one question, and
**waits**. No playbook until the user replies.

`clarify-first` on P1 lists assumptions, names missing facts, **answers
anyway**, then asks one question.

That is the load-bearing fork. The tweet is the spark. The default-does-
not-block rule is the product. The tweet's "most common mistake" step was
not used; it is not in the protocol.

---

## Score

| Case | Required | Result |
| --- | --- | --- |
| N1 factual | silent | silent |
| N2 routine | silent | silent |
| N3 cheap + vague | silent | **failed** on intro-only gate; silent after step 0 |
| P1 expensive + vague | fire, then answer, one question | fire, then answer, one question |
| P2 two independent gaps | fire, then answer, no compound question | **failed** on a hard cap of one; two clean questions after the fix |
| B1 send + delete | block | block |

False-trigger rate on the negative set after the fix: 0/3. Before the
fix, N3 was a trigger. Independent run still owed.

Two protocol changes came out of these runs, and both were preferences that
had to become tests. Step 0 needs *both* underspecified and high undo cost.
Step 4 defaults to one question and allows a second only when it is
independent and independently decision-changing, because a hard cap of one
buys compliance with compound questions.
