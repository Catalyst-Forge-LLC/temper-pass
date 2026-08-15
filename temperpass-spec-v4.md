# TemperPass — Spec v4

**Status:** Name locked. All four passes written to protocol depth. `red-team` locked. `scope-lock` and `tradeoff-matrix` locked. `clarify-first` validated (same-session). Origin recorded in §13. Supersedes v3. Changes in §10.

---

## 1. Positioning

**Name:** TemperPass
**Domain:** temperpass.dev
**Repo:** `Catalyst-Forge-LLC/temper-pass`
**npm:** `temperpass` *(verify with `npm view temperpass` before announcing)*
**CLI:** `temper`

**Tagline:** Tempered judgment your agent can install. (Supersedes "A light pass before the answer.", which now closes the "Why the name" section — the line is kept verbatim, it just stopped being the headline. Masthead subtitle: "Tempered judgment for AI agents.")

**Shelf one-liner:** Most agents answer immediately and confidently. TemperPass makes them say what they're assuming first.

### Why the name works

A temper pass is a real steel-mill operation. A temper mill runs finished strip through a very light cold-rolling pass — typically only 1.5–2% thickness reduction, far less than ordinary cold rolling. It isn't there to reshape the steel. It's there to set the mechanical properties, control surface roughness, and improve flatness. The shape goes in and the shape comes out; what changes is that the material stops being brittle.

The passes don't withhold your answer or reroute your work. They take out the brittleness — the unstated assumption, the undefended scope, the objection nobody voiced — and hand back the same shape, harder to snap.

*Sources for the origin copy: Redex Group on skin-pass/temper mills; the general skin-pass literature on low-reduction rolling. Verify before publishing marketing claims.*

### Fit with the shelf

Sits under **Practice & standards**, alongside ForgeKit and aiBreze. Its closest structural cousin is aiBreze: a composable rule set you point an agent at. ForgeKit governs how agents *build*; aiBreze governs how they *write*; TemperPass governs how they *decide*.

The name deliberately does not repeat "Forge." Only ForgeKit carries the parent name; the rest of the shelf earns attention by describing itself (FilePress presses files, IngotVault vaults ingots, AppFacts states facts). TemperPass follows the shelf's actual pattern rather than its branding.

**Open risk to test:** does "temper" read as *restraint* to someone who has never touched steel? Lead the shelf entry and home page with the mill and you control the first contact — but the name has to survive being heard without the copy. Say it out loud to three people who don't know the project before commissioning design.

---

## 2. Core Architecture: One Vocabulary

Everything is a **pass**. The only distinction is who calls it.

> **Four passes. Three you call. One that calls itself.**

### Called passes (user-invoked)

`temper red-team`, `temper scope-lock`, `temper tradeoff-matrix`. A user who types `red-team` has consented to being disagreed with. Nobody consents to that by asking a question. Anything confrontational, slow, or artifact-producing belongs here.

### Auto pass (model-invoked)

Fires on description match, without being asked. Because the model decides, and because it interrupts the user's actual request, the bar is high: only behavior that is safe to apply unrequested qualifies. Exactly one pass currently clears it.

### Why the descriptions get written backwards

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger — they skip skills that would have helped. TemperPass is a genuine exception. Its cost lands on the user as interruption and delay, and it lands on **every** match, including the false ones. So descriptions here get the opposite treatment: narrow target, explicit negative cases, and a standing preference for a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.

### Rules go in steps, not guidelines

Learned from `red-team` validation, and it generalizes to every pass. The "could go wrong vs. likely to go wrong" instruction sat in the guidelines section and was ignored in a live run; the same instruction rewritten as an enforceable step in the protocol corrected the behavior immediately.

**Guidelines don't bind. Steps do.** If a rule matters enough that a run is wrong without it, it belongs in the numbered protocol with a concrete test the model can apply — not in a prose list at the bottom. Guidelines are for taste and emphasis, never for load-bearing constraints.

---

## 3. The Collection

Four passes, written to real depth. Nine shallow ones is a listicle — and half the original set (premortem, steelman, first-principles) is behavior a competent model already produces when simply asked. The defensible value is in the specific protocol, not the label on it.

| Pass | Type | Status | Does |
|---|---|---|---|
| `clarify-first` | Auto | **Validated** (same-session; independent run still owed) | Names load-bearing assumptions and decision-changing gaps, then answers under them |
| `red-team` | Called | **Locked** (§5, examples/) | Attacks the direction on its strongest form; absorbs premortem and steelman |
| `scope-lock` | Called | **Locked** (examples/) | Freezes boundaries, success criteria, and explicit non-goals |
| `tradeoff-matrix` | Called | **Locked** (examples/) | Forces explicit criteria, weights, and scoring across genuinely different options |

**Parked, not cancelled:** `first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`. Each returns only when it has a protocol that beats "just ask the model to do this." Keep them in the README as a roadmap, not as empty skill directories.

---

## 4. `clarify-first` — Auto Pass (validated, same-session)

The load-bearing change: **the default does not block.** An agent that halts mid-task to ask three questions is the most-complained-about behavior in agentic tooling — right maybe 15% of the time, infuriating the rest. This protocol keeps the forcing function while still delivering an answer. Blocking becomes the narrow exception, reserved for work that's actually irreversible.

```markdown
---
name: clarify-first
description: Surface the load-bearing assumptions and missing information that would change an answer, then answer under stated assumptions. Use when a request is underspecified AND the cost of solving the wrong problem is high — architecture or migration decisions, irreversible or expensive commitments, debugging where symptoms are partial, strategy where the goal itself is unclear. Do NOT use for well-specified requests, factual questions, routine code changes, or any task where a wrong first attempt is cheap to correct.
---

# Clarify First

Answering the wrong question well costs more than answering the right question
slowly — but only when the work is hard to undo. This pass applies when both
conditions hold: the request is underspecified, and a wrong direction would cost
real time, money, or trust to reverse.

If either condition fails, skip this entirely and just answer.

## Protocol

**1. Name the load-bearing assumptions.** At most three. A load-bearing
assumption is one where the opposite changes your recommendation, not just its
details. If flipping it doesn't change the answer, it isn't load-bearing and
doesn't belong in the list.

**2. Name what's missing — and what it would change.** For each gap, say which
way the answer moves depending on the missing fact. "I don't know your scale" is
useless. "Under 10k rows this is a non-problem; above ~1M the whole approach
changes" is the actual information.

**3. Answer anyway.** Give your best substantive answer under the stated
assumptions. Do not withhold it pending clarification.

**4. Close with one question.** The single question whose answer would most
change your recommendation. A second only if it is independent of the first and
would change the recommendation on its own; two is the ceiling, and a compound
question joined with "and" counts as two. (Revised from a hard cap of one after
the P2 billing-migration run. The hard cap bought compliance by smuggling two
questions into one sentence.)

## When to block instead

Stop and wait *only* when proceeding means taking an action that is hard to
reverse — writing to production, sending something, deleting, spending, or
committing the user publicly. Then say plainly what you'd do and what you need
confirmed, and wait.

Ambiguity alone is not a reason to block. Ambiguity plus irreversibility is.

## Guidelines

- Keep the pre-answer section short — a few lines, not an essay. If it's longer
  than the answer, the pass has failed.
- Assumptions stated inline beat a preamble section. Prefer "assuming this is a
  single-region deployment — if not, see the note at the end" over a formal
  header block.
- If the user already gave you the context, don't perform uncertainty about it.
  Restating known constraints as "assumptions" reads as padding.
- Once the user replies, integrate and answer directly. Don't rerun the pass
  unless a genuinely new gap opened up.
```

**Validation debt:** this pass has never been run. It is the only auto pass, which makes its false-trigger rate the single most important number in the project (§7). Do not ship it on the strength of reading well.

---

## 5. `red-team` — Called Pass (locked)

Full text lives at `passes/red-team/SKILL.md`. Validation transcripts, including the two runs that failed and forced protocol changes, are at `examples/red-team-transcripts.md`.

**Shape:** steelman → name the hinge (with an explicit no-hinge exit) → tell the story of the hinge being false → rate objections on severity × plausibility → close, including a clean close if the plan holds.

**Three design decisions worth preserving:**

1. **Self-attribution.** If the direction under attack is one the model just proposed, it must say so and treat its own prior confidence as a suspect assumption. This is the highest-value case and the one models handle worst.

2. **Two axes, not one.** Severity alone lets a far-fetched catastrophe outrank a probable expense. Plausibility must be justified against the conditions the user actually stated, and ratings may not be escalated by importing unstated ones. This rule was written in response to a live failure — see §7.

3. **It can come back clean.** A critique tool that can never return "this holds up" will manufacture concerns to satisfy its own format, and users learn to discount it. The no-hinge exit requires naming the strongest candidate considered and why it isn't decisive, so the clean close costs work rather than saving it.

**Open finding:** every validation case so far is backend infrastructure with explicit numbers. The plausibility rule leans on stated quantities. Whether it degrades gracefully on decisions with no numbers — pricing, hiring, go-to-market — is untested, and `scope-lock` is likely to inherit the same assumption. Test before it propagates.

---

## 6. The Two Called Passes (locked)

Both got the `red-team` treatment: a protocol with concrete decision rules, then validation runs that were allowed to fail. Independent runs are still owed.

### `scope-lock`
Produces an artifact — a short written contract. Protocol: (1) restate the problem in one sentence, using only nouns already on the table; (2) list what is explicitly *not* being solved; (3) define done as an observable condition, not a feeling; (4) name what would justify reopening scope; (5) hand back the artifact and stop. The value concentrates in the non-goals list — the part people skip and the part that prevents drift.

The first run invented HR process nouns for "hire a senior engineer." Step 1 now forbids new nouns.

*Watch for:* the numbers-dependency inherited from `red-team` step 4. Scope decisions are frequently qualitative.

### `tradeoff-matrix`
Protocol: (1) require at least three *meaningfully* different options — reject variants of the same option and say so; (2) derive criteria from the stated success condition, not from the options; (3) weight before scoring, to prevent back-fitting; (4) surface the decisive criterion explicitly; (5) stop. Output is a table plus a one-line "this decision turns on X."

The first run scored Railway vs Fly vs Render Postgres as if they were three architectures. Variants now collapse before scoring.

---

## 7. Visual Identity

Tempering steel produces a color sequence as temperature rises — straw, bronze, purple, blue — and a smith reads the color to judge the state of the metal. TemperPass uses that scale for **severity only**:

| Rating | Color | Metal |
|---|---|---|
| **Fatal** | temper straw | The hard, brittle temper — what snaps |
| **Costly** | temper purple | Middle of the range |
| **Survivable** | temper blue | The tough spring temper — what bends and holds |

Plausibility (Likely / Possible / Unlikely) stays textual. A nine-cell color matrix would dilute the metaphor and communicate less.

**Note the direction.** An earlier draft ran this the other way, on the intuition that hotter is worse. The metal disagrees: straw is the brittle temper and blue is the tough one, so brittle-equals-fatal is both metallurgically correct and semantically better. The whole brand leans on being real about the process — get this one right.

---

## 8. Validation Before Publication

Passes that have never been run against real prompts are guesses. `red-team` needed two protocol changes that only surfaced under test, and both were invisible on the page.

### Every pass

1. Write 3–4 realistic test prompts — what a user would actually type.
2. Run each **with and without** the pass. The baseline is what tells you whether a failure came from the pass or from the model's default behavior. In `red-team` testing the baseline made the same error worse and unranked, which is how the correction got aimed at the right target.
3. Where a rule depends on a variable, test the same prompt at both ends of it. One number changed is a cleaner signal than four unrelated prompts.
4. Vary the **domain**, not just the parameters. Rules written against technical examples tend to encode technical assumptions.
5. Record failures in `examples/`, not just successes. The failed runs are the argument for why the protocol says what it says.

### Called passes

Cannot false-trigger — the user typed the command. Test the **downgrade** path instead: what happens when the pass is invoked on input it isn't suited for. The correct behavior is a short, honest version, never a refusal and never a full-dress treatment of nothing.

### Auto passes

The false-trigger rate is the number that matters, and it needs its own negative cases — well-specified requests where the pass must stay silent. This applies to `clarify-first` and to nothing else currently.

### On independence

A pass written, run, and graded in one session is a sanity check, not an eval. The runner has the design in context and will tend to confirm it. Note that caveat wherever results are recorded, and get an independent run before treating a pass as proven.

---

## 9. Delivery

**Ship order:** repo and FilePress site are in the same tree. Four passes are written; three locked, one validated same-session. Independent evals still owed before treating any as proven.

```
temper-pass/
├── README.md              manifesto + the four passes + install
├── passes/
│   ├── clarify-first/     auto — validated (same-session)
│   │   └── SKILL.md
│   ├── red-team/          called — locked
│   │   └── SKILL.md
│   ├── scope-lock/        called — locked
│   └── tradeoff-matrix/   called — locked
├── evals/                 test prompts per pass
└── examples/
    ├── clarify-first-transcripts.md
    ├── red-team-transcripts.md
    ├── scope-lock-transcripts.md
    └── tradeoff-matrix-transcripts.md
```

**CLI shape:** verb-first, so "pass" never reads as a status.
`temper clarify` · `temper red-team` · `temper scope-lock` · `temper tradeoff-matrix`

**Minimal site (two pages, when it's time):**
- `/` — the mill origin paragraph, the four passes with one line each, install snippet
- `/passes/[name]` — rendered SKILL.md, when-to-use / when-not-to-use, one real transcript, copy button

Drop `/philosophy`, `/using`, and the filtered index. The philosophy is three paragraphs and belongs on the home page; an index is unnecessary at four items.

**License:** MIT. Closest structural cousin is aiBreze (MIT): a rule set you point an agent at. ForgeKit and IngotVault stay Apache 2.0; that patent grant matters more for engines and git tooling than for Markdown skills.

---

## 10. Naming Decisions Log

Kept so the reasoning isn't re-litigated later.

| Candidate | Outcome |
|---|---|
| ThoughtForge | Dropped. Third "Forge"; inherits brand equity instead of describing itself; off-pattern for the shelf |
| Temper (alone) | Dropped. Reads as mood — "bad temper," "lost his temper" |
| goodtemper.dev | Rejected. "Good/even temper" are mood idioms; commits to the wrong sense |
| Whetstone | Dropped. Whetstone is a well-known CPU benchmark, and Sandia ships a Keras spiking-neural-net library by that name — collides in exactly our audience. npm name also taken |
| TemperWhet | Rejected. Fuses two different operations (heat treatment vs. abrasion); awkward to say; "whet" gets typed as "wet" |
| ThoughtHone | Rejected. Same abstract-noun problem as ThoughtForge; consonant collision at the seam |
| Hone / HoneKit | Runner-up. Clean, but says "sharpen" when the thesis is "don't answer yet" |
| **TemperPass** | **Chosen.** Real mill operation whose literal meaning matches the product thesis; forge lineage without repeating "Forge"; domain available |

---

## 11. What Changed From v3

| v3 | v4 | Why |
|---|---|---|
| `red-team` spine only | Locked, full text, four validation transcripts | Survived two failed runs and a paired baseline |
| Fatal → blue, Survivable → straw | Fatal → straw, Survivable → blue | Straw is the brittle temper; brittle is what breaks |
| §7 one validation procedure | Split: called (downgrade tests) vs auto (false-trigger tests) | Called passes can't false-trigger — the user typed the command |
| Baseline runs implied | Baseline runs required, with rationale | The Test 2 baseline is what proved the error was the model's default, not the pass's |
| — | New §2 rule: load-bearing constraints go in steps, not guidelines | A guideline was ignored in a live run; the same rule as a step corrected it |
| — | Independence caveat on self-run evals | Same session wrote, ran, and graded — worth flagging before results get over-read |
| — | Open finding: plausibility rule may not survive non-numeric domains | All four tests were backend infra with explicit numbers |
| `clarify-first` drafted; `scope-lock` / `tradeoff-matrix` spines | All four written; three locked, one validated same-session | Work landed after v4 freeze; table in §3 and the §9 tree now match the repo |

---

## 12. Next Steps

1. Confirm domain purchase and Cloudflare Pages project `temperpass`. `npm view temperpass` is free (404) — do not announce install-from-npm until published.
2. Say "TemperPass" to three people cold. If nobody hears restraint or metal, reconsider before design spend.
3. Independent runs of all four passes (current transcripts are same-session sanity checks).
4. Run `red-team` on a non-numeric decision — pricing, hiring, go-to-market — still owed.
5. Publish repo. Add the shelf entry to catalystforge.com/open-source/.
6. `pnpm ship` and attach temperpass.dev.

---

## 13. Origin

Saturday 15 Aug 2026, morning coffee, scrolling X. The spark is [Vox, 14 Aug 2026](https://x.com/Voxyz_ai/status/2088327172725592142): a prompt that lists unstated assumptions, names the missing fact that would change the answer, and asks one question before continuing.

The hour after the post produced the name, the four-pass split, and the load-bearing fork from the tweet: **the default does not block.** Vox waits. `clarify-first` answers under stated assumptions and waits only when the next action is hard to undo. The tweet's "most common mistake" step was dropped (cheap model default, not a protocol). The one-question rule was kept.

Public write-up: site post `a-prompt-with-coffee`, README "Where it started." Credit the tweet. Do not claim the tweet *is* TemperPass.
