---
title: clarify-first
description: Name the load-bearing assumptions, then answer anyway. The only auto pass.
order: 3
---

An auto pass. It may fire without being asked. That is why the description is narrow.

**Status:** Validated in-session (negative cases first). Independent run still owed.

This pass started as [the X post that started the project](https://x.com/Voxyz_ai/status/2088327172725592142). The tweet has the model wait every time. This pass answers under the assumptions and waits only when the next action is hard to undo. [A prompt with coffee](/posts/a-prompt-with-coffee).

Answering the wrong question well costs more than answering the right question slowly — but only when the work is hard to undo. Both must be true: the request is underspecified, **and** a wrong direction would cost real time, money, or trust to reverse.

If either condition fails, skip this entirely and just answer. Do not announce the skip.

**Use when** a request is underspecified **and** the cost of solving the wrong problem is high. **Do not use** for well-specified requests, factual questions, routine code changes, or any task where a wrong first attempt is cheap to correct.

Skill file: [`passes/clarify-first/SKILL.md`](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/passes/clarify-first/SKILL.md)

## Protocol

0. **Apply the gate.** Both underspecified and high undo cost. Otherwise answer normally.
1. **Name the load-bearing assumptions.** At most three. If flipping it doesn't change the answer, it isn't load-bearing.
2. **Name what's missing — and what it would change.**
3. **Answer anyway.** The pre-answer must stay shorter than the answer.
4. **Close with one question.** A second only if it is independent of the first and would change the recommendation on its own. Two is the ceiling, and a compound question joined with "and" counts as two.

Ambiguity alone is not a reason to block. Ambiguity plus irreversibility is.

Two steps here started as preferences and had to become tests. The first validation run fired on "the tests are flaky" — underspecified, but cheap to get wrong — which is why the gate is step 0. A later run on a billing migration had two gaps that were both load-bearing, and a hard cap of one question bought compliance in the worst way: the two got joined with "and" into a single sentence that was harder to answer than either. Transcripts: [`examples/clarify-first-transcripts.md`](https://github.com/Catalyst-Forge-LLC/temper-pass/blob/main/examples/clarify-first-transcripts.md).

[Install](/install)
