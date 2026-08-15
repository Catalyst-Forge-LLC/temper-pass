---
name: tradeoff-matrix
description: Force explicit criteria, weights, and scoring across genuinely different options. Use when the user asks for a tradeoff matrix, a scored comparison, or help choosing among real alternatives. Do NOT use unprompted. Do NOT use when there is only one serious option, or when the user wants a recommendation without showing the work.
---

# Tradeoff Matrix

A decision that cannot name its criteria will back-fit them after the favorite
wins. This pass makes the criteria and the weights visible first.

This is a called pass. Only run it when the user has asked for it.

## Protocol

**1. Require at least three meaningfully different options.**
Two options is a coin flip with extra chrome. One option is a recommendation
wearing a costume.

Meaningfully different: if the only delta is vendor, region, color, or
hosting brand for the same architecture, they are one option with a
footnote. "Postgres on Railway" and "Postgres on Fly" collapse. "SQLite
file," "Postgres we run," and "a document store with no SQL" do not.

If the user gave variants, collapse them, say so, and stop unless three
real options remain. Do not invent a third option to fill the format
unless you label it as yours and the user can reject it.

**2. Derive criteria from the stated success condition, not from the options.**
Write the success condition in one sentence first. Criteria come from that
sentence. If a criterion would not change the pick when it moves, drop it.

If the user did not state a success condition, say so. Propose criteria
only as assumptions. Do not pick a winner until they confirm the
condition or accept the assumptions.

Maximum five criteria. A twelve-row scorecard is how a favorite hides.

**3. Weight before scoring.**
Write the weights down. Then score. If you catch yourself scoring first,
discard the scores and start this step over.

Weights may be percentages that sum to 100, or High / Medium / Low, as
long as they exist before any number hits a cell. If a weight changes
after you see the scores, say so — that is back-fitting, and it must be
visible.

Do not import a criterion or a weight from a condition the user did not
state. "This would matter if you were at scale" is a different question.

**4. Score, then name the decisive criterion.**
Score each remaining option on each criterion. Output is a table plus one
line: "This decision turns on X."

If two options tie on the weighted total, do not break the tie with a
criterion you did not weight. Name the tie and the criterion that would
break it, and stop.

**5. Stop.**
Do not implement the winner unless asked.

## When the input is too soft

If the options are not actually different, or there are fewer than three,
or there is no success condition and the user did not accept assumptions:
say what is missing, name the real fork if there is one, and stop. Never
a refusal. Never a full-dress matrix of nothing.

## Guidelines

- Prefer fewer criteria that would change the pick over a long scorecard
  that does not.
- After delivering the matrix, stop.
