---
name: red-team
description: Attack the current direction on its strongest form. Use when the user explicitly asks to red-team, stress-test, find holes, poke holes in, or challenge a plan, decision, architecture, or recommendation. Do NOT use unprompted. Do NOT use on pure brainstorming or when the user is still mapping the problem space with no direction on the table.
---

# Red Team

Most critiques attack a weakened version of the idea. This pass refuses to do that.
It first builds the strongest reasonable form of the current direction, then tries
to break *that* version. The goal is not to generate objections — it is to surface
the ones that would actually matter if they were true.

This is a called pass. Only run it when the user has asked for it.

## Protocol

**1. Steelman the current direction.**
Restate the plan, decision, or recommendation in its strongest defensible form.
Include the best available justifications and the most favorable reasonable
assumptions. If the direction under attack is one you yourself just proposed,
say so explicitly and treat your prior confidence as a suspect assumption rather
than a justification.

If a coherent strong version is hard to construct, that difficulty is diagnostic.
Say so, then continue with the strongest version you *can* form and note where
it is still soft.

**2. Name the assumption the plan cannot survive losing.**
Identify the single assumption that, if false, causes the whole approach to
collapse or become clearly inferior.

If the best candidate only produces a Costly or Survivable outcome when falsified,
say so explicitly: "No load-bearing assumption found. The plan is more robust
than it first appears." You must name the strongest candidate you considered and
state why its falsification is only Costly or Survivable. Then skip the full
failure story and move to any remaining secondary objections (or close clean).

**3. Tell the story of that assumption being false.**
(Only if a true load-bearing assumption was identified in step 2.)

Describe the concrete failure that follows:
- What breaks first
- In what order the damage spreads
- Who notices, and how late they notice

Keep it specific. "It might not scale" is not a failure story. "At 40k events/day
the queue backs up, the retry storm starts within 12 minutes, and the on-call
engineer discovers it from customer tickets rather than monitors" is.

**4. Rate the serious objections.**
Begin with the load-bearing assumption from step 2 (when one exists). Then list
any *other* objections that still stand against the steeled version.

Rate each objection on two axes:

- **Severity**
  - **Fatal** (temper straw) — if true, the approach should be abandoned or
    fundamentally changed
  - **Costly** (temper purple) — if true, the approach still works but becomes
    significantly more expensive, slower, or fragile
  - **Survivable** (temper blue) — real issue, but can be monitored, mitigated,
    or accepted

- **Plausibility**
  - Likely — reasonable chance under the stated conditions
  - Possible — plausible but requires an unfavorable turn
  - Unlikely — requires a stretch or multiple things going wrong

Plausibility must be justified against the conditions the user stated. If they
gave numbers — volume, scale, timeline, team size — the rating has to reference
them. An objection that only becomes plausible at a different scale than the one
stated is Unlikely, and you should say at what scale it would change.

Do not escalate a rating by importing conditions the user did not state.
"Possible → Likely under growth" is not a rating; it is a different question.
If growth (or any other unstated condition) is the real concern, name it as its
own objection with its own plausibility.

A Fatal + Unlikely objection is usually less actionable than a Costly + Likely
one. Do not let blast radius alone dominate the ranking.

Discard weak or speculative concerns. Three well-rated objections are information;
twelve unranked ones are noise.

**5. Close with the actual implication.**
- If the steeled version holds up: say so plainly. Name the strongest objection
  you considered and why it is not decisive. Then stop.
- If it does not hold up: state what should change before proceeding. Do not
  demand a full rewrite unless a Fatal + Likely (or Fatal + Possible) objection
  is both real and unaddressed.

## When the direction is still unformed

If the user has asked for a red-team but the direction is still too soft for a
full treatment, do not refuse. Run a short version: steelman what exists, name
the single most important missing decision or assumption, and state which
objection would become decisive once that is filled in. Then stop.

## Guidelines

- Difficulty building the strong version is data — surface it instead of
  inventing solidity that isn't there.
- Prefer depth over coverage.
- Distinguish "this could go wrong" from "this is likely to go wrong under the
  stated conditions." The first is cheap; the second is useful.
- After delivering the red-team, stop. Do not automatically rewrite the plan
  unless asked.
