# TemperPass

Tempered judgment your agent can install.

Most agents answer immediately and confidently. TemperPass makes them say what they're assuming first.

Expert skills for Cursor, Claude Code, and anything else that reads a `SKILL.md` file. These are the checks a careful person already runs, written as a numbered protocol an agent can follow. `pnpm add temperpass`, copy one folder into the skills directory, and it runs over the agent's thinking on the way to the answer.

Written **TemperPass**. A temper mill, not a mood.

## The right question

Answering the wrong question well costs more than answering the right question slowly — but only when the work is hard to undo.

Agents skip that second half. They pick a reading of the request and commit to it. [`clarify-first`](passes/clarify-first/SKILL.md) names the load-bearing assumptions (at most three), says what missing fact would change the answer, then answers anyway, and closes with one question. A second is allowed only when it is independent of the first and would change the recommendation on its own. Never three.

The default does not block, because halt-and-ask is one of the loudest complaints about agents and it is infuriating when it fires on something cheap. Waiting is reserved for work you cannot undo: send, delete, spend, write to production, commit the user publicly. Ambiguity alone is not a reason to block. Ambiguity plus irreversibility is.

That is the only auto pass. It fires when a request is underspecified *and* a wrong first attempt is expensive. A flake test, a typo, a factual question: it stays silent, and it does not announce the skip.

## Four passes. Three you call. One that calls itself.

Everything is a **pass**. The only distinction is who calls it.

A user who types `red-team` has consented to being disagreed with. Nobody consents to that by asking a question. Anything confrontational, slow, or artifact-producing is a called pass.

The auto pass fires on description match, without being asked. Because the model decides, and because it interrupts the actual request, the bar is high: only behavior that is safe to apply unrequested qualifies. Exactly one pass currently clears it.

| Pass | Type | Status | Does |
| --- | --- | --- | --- |
| [`clarify-first`](passes/clarify-first/SKILL.md) | Auto | **Validated** (same-session) | Names load-bearing assumptions and decision-changing gaps, then answers under them |
| [`red-team`](passes/red-team/SKILL.md) | Called | **Locked** | Attacks the direction on its strongest form; absorbs premortem and steelman |
| [`scope-lock`](passes/scope-lock/SKILL.md) | Called | **Locked** | Freezes boundaries, success criteria, and explicit non-goals |
| [`tradeoff-matrix`](passes/tradeoff-matrix/SKILL.md) | Called | **Locked** | Forces explicit criteria, weights, and scoring across genuinely different options |

Four is the whole set. The first draft had nine, and half of them (premortem, steelman, first-principles) were behavior a competent model already produces when you ask for it. The protocol is the part you install.

**Parked, not cancelled:** `first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`. Each returns only when it has a protocol that beats "just ask the model to do this."

## Install

Get one pass folder from a ZIP, a clone, or npm, then put it in a skills directory. Dest dirs and downloads: [temperpass.dev/install](https://temperpass.dev/install).

```bash
pnpm add temperpass
```

Copy one folder from `node_modules/temperpass/passes/` into your agent's skill directory.

```bash
git clone https://github.com/Catalyst-Forge-LLC/temper-pass.git
```

Then copy `passes/clarify-first/` or `passes/red-team/` (or another pass) into a skills directory.

For a called pass, say the name: **red-team this**, **scope-lock this**. It will not fire on its own.

Site: [temperpass.dev](https://temperpass.dev)

## How they're written

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.

**Guidelines don't bind. Steps do.** A load-bearing rule that sat in `red-team`'s guidelines was ignored in a live run. The same rule as a numbered step, with a test the model can apply, held. Guidelines are for taste. Constraints go in the protocol.

Passes that have never been run against real prompts are guesses. `red-team` needed two protocol changes that only showed up under test. Run each prompt with and without the pass. The baseline tells you whether the failure was the pass or the model's default. Record the failures in `examples/`. A same-session run is a sanity check, not an eval.

Three `red-team` decisions that stay:

1. **Self-attribution.** If the direction under attack is one the model just proposed, it says so and treats its own confidence as a suspect assumption.
2. **Two axes.** Severity without plausibility lets a far-fetched catastrophe outrank a probable expense. Plausibility has to match the conditions you actually stated.
3. **It can come back clean.** A critique tool that can never return "this holds up" manufactures concerns, and people learn to discount it.

## Severity colors

Tempering steel produces a color sequence as temperature rises — straw, bronze, purple, blue. TemperPass uses that scale for **severity only**:

| Rating | Color | Metal |
| --- | --- | --- |
| **Fatal** | temper straw | The hard, brittle temper — what snaps |
| **Costly** | temper purple | Middle of the range |
| **Survivable** | temper blue | The tough spring temper — what bends and holds |

Plausibility (Likely / Possible / Unlikely) stays textual. Straw is the brittle temper and blue is the tough one, so brittle-equals-fatal is the direction that matches the metal. An earlier draft ran it the other way, on the intuition that hotter is worse. The metal disagrees.

## Why the name

A temper pass is a real steel-mill operation. A temper mill runs finished strip through a very light cold-rolling pass — typically only 1.5–2% thickness reduction, far less than ordinary cold rolling. It isn't there to reshape the steel. It's there to set the mechanical properties, control surface roughness, and improve flatness. The shape goes in and the shape comes out; what changes is that the material stops being brittle.

The passes don't withhold your answer or reroute your work. They take out the brittleness — the unstated assumption, the undefended scope, the objection nobody voiced — and hand back the same shape, harder to snap. A light pass before the answer.

## Where it started

Saturday morning coffee, scrolling X. [Vox, 14 Aug 2026](https://x.com/Voxyz_ai/status/2088327172725592142) posted a reasoning prompt: list the assumptions, name the missing fact, ask one question, wait. The next hour is this repo. In the tweet the model always waits; `clarify-first` answers under the assumptions and waits only when the next action is hard to undo. The write-up is on the site: [A prompt with coffee](https://temperpass.dev/posts/a-prompt-with-coffee).

## On the Catalyst Forge shelf

Lives next to ForgeTrail and aiBreze. Closest cousin is aiBreze: a rule set you point an agent at.

<!-- xfacts-nutrition-label -->

## Nutrition label

- **AppFacts:** [viewer](https://appfacts.dev/v#af1.eNpVkM1qwzAQhF_FzFmJ6VXXQKEl7cW5hVI28lZRI0uLtHYxwe9e7PTS2_58zOzOHRPsk0GigWGhPAgXoVphoLOssyrsmrbRnGNIHgZVSccKC3IaJoZBDI5TXeG3l9ODcDfYOyIlP5JfN6dZuHMliJrmlSZ61DAoY9Kwub_nnvffdROYNzOLQ9fB4Jqr_vUxj_1XpMJYDHqWCnu-I8Hip1DykQsM5B_Z9CwxzwMn3d7A8mFwGUPs1xuF3I08fw6UyHOBhSQZVvXCkmvQXGZYXFWl2rb1Qa_jZe_y0B5IKc5Vd8-5eN4dj4f2EeBuS3D5BTp8dpc) · [raw](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/APP_FACTS.md)
- **SkillFacts:** [viewer](https://skillfacts.dev/v#sf1.eNq1U01v20gM_SuEemkMy3ZzWCzU27bNothsESBBL1FgjCXaGkSaMWZGNoy2v6v3_WUlOfqwEwfYFigM29Ijh-Q8vvcl2SXZm2liVINJlhS1cnp9SNfa-ZBMkxJ3WNstOoq9U0HVBx_gyroNUnCHzmtrKLSYvZktCPFBhdYToIqgd5xT6wKN59L_fryj90dtSu7TOm9d6h91XRO6bd3WStZt69aqQKitKtMV0jRmA8r7ttkG6uVBmRIa7T3j2qytaxQHphAqNBT1e3TQmpJ-eRosj09zK2d3aJQpqNuXxNvW8VNShbD12Xy-0aFqV7PCNvP-vqncN72-fjcP2BAX6ZZKytSrWvvqHDnfpok2Pri2kL5Lh6qopGGFdOMsMdYwPQbD3rrHEVjrGj3VwabHqFSwtuYaa3RIgxOB9w_TZEW3rLFcKhc0cRZ8hHHjkMajXgFrbDC4w1i-RB-0UZEMSqfilW1wqzbHJMRr8i1nJAA65pDWo4OVUr9ClVN7OpmmaW5k50sZeNkpKIM8SihPcsNKzOBEiLkZdJjBKdO5OVcj6jCDKMPcdCrMgESYG9YgdTiSYG46BXKV3ytBHq-nPIPzjOdmJHzM-d98020GkWe5AYgq_6VKAIPKn1P_XOKxHWs8A5Ycv3YaH4FR4z32VOBS5v4hN880PkSizOV10PnY4ljnmeRv0KDjZciRkp4yuFxc_pEu_kwvF4x1GZYuWtGKU9WGyjosc1PQr-56D3WWe2Jx5FR0JCPGDQKsWl2H5erAmjplDtLh2H6_nxVdcM0x2QqLRMySm1dwy5XhikvTwSfGyM1XoA_9Ub58GZlM3veGmUwo_qR9l_M5OkcyxDp94FbsI3h0UB-4jj6SCFmph_8hQwl27CkO5mbycdRIak19gDuR1w1LHT5Z6DYMvnB6G_xbWmEU0LzTzXztQbTFV9cNlrOJ8PIKbqJn-e03e7brN7jqJd5vxWgU-GmnRSpveq-d3ZkMccRnx8uLwzCLhLMnYvlPkdET7Gow4xEsne7YlDCakuHXnHHRJfzVrW4w57OMD2LSlwa86317MtD7I-tSINaLQ4klJn_3DgR2INyLP8QeD6_Pu_EC_vtO05IdYXWA-1Nmx0PnvXhBcku-_QCqIkbL) · [raw](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/passes/clarify-first/SKILL_FACTS.md)

## License

MIT. Built by [Catalyst Forge LLC](https://www.catalystforge.com).
