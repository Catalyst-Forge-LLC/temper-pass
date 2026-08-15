# `tradeoff-matrix` — Validation Transcripts

Called pass: test the downgrade path. Includes a variants-collapse and a
missing success condition.

**Independence caveat:** same session that wrote the protocol. Sanity
check, not a clean eval.

---

## T1 — Three real options, success stated

> Tradeoff-matrix this. Internal tool, two of us, about 5k rows. I need
> to restore from backup in an hour and query with SQL I already know.
> Options: SQLite file, Postgres we run, DynamoDB.

**Success condition.** A two-person internal tool on ~5k rows that we can
restore in an hour and query with SQL we already know.

**Criteria (from that sentence, not from the logos).**

| Criterion | Weight |
| --- | --- |
| Query with SQL we already know | 40 |
| Ops burden for two people | 35 |
| Restore from backup in an hour | 25 |

Weights written before any scores.

**Scores** (1–5, higher is better)

| | SQL we know | Ops for two | Restore in an hour |
| --- | --- | --- | --- |
| SQLite file | 5 | 5 | 4 |
| Postgres we run | 5 | 2 | 5 |
| DynamoDB | 1 | 3 | 3 |

**This decision turns on "SQL we already know."** Dynamo is out on the
stated success condition. SQLite vs Postgres is then an ops question, and
at 5k rows and two people the weights already pick SQLite.

Stop. Do not scaffold.

---

## T2 — Variants of one option

> Tradeoff-matrix Postgres on Railway vs Postgres on Fly vs Postgres on
> Render.

### First run — FAILED

Scored three rows. The criteria that appeared (price, DX, regions) were
derived from the *vendors*, not from a success condition the user never
stated. The matrix made a hosting footnote look like an architecture
choice.

**Fix:** step 1's "meaningfully different" test — vendor/host/color for
the same architecture is one option. Collapse and stop unless three real
options remain. Do not invent a third architecture to fill the format.

### After the fix

These collapse to **one option**: hosted Postgres. The real fork, if any,
is hosted Postgres vs something that is not Postgres. There is no success
condition yet.

Short version. No matrix. Not a refusal.

---

## T3 — No success condition

> Which frontend — React, Svelte, or Vue? Tradeoff-matrix it.

Three names, no success condition. They *can* be different options
(ecosystem, compiler model, team fluency) but the criteria cannot be
derived yet.

**Assumptions I would need confirmed before scoring.** What "done" is
(marketing site vs app), what the team already ships, whether SEO is
in-scope.

No winner. No table. This is the correct downgrade.

---

## T4 — Two options (downgrade)

> Tradeoff-matrix SQLite vs Postgres.

Fewer than three. A coin flip with extra chrome. Name the fork (embedded
file vs a server we run). Stop. Do not invent Dynamo to fill the format.

---

## Score

| Case | Required | Result |
| --- | --- | --- |
| T1 three + success | table + "turns on X" | table + "turns on X" |
| T2 vendor variants | collapse, no matrix | **failed** by scoring vendors; collapse after the fix |
| T3 no success | no winner | no winner |
| T4 two options | short downgrade | short downgrade |
