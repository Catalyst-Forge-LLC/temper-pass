---
title: A prompt with coffee
date: 2026-08-15
description: I was drinking Saturday coffee and scrolling X. An hour later the prompt had a name and four skill files.
tags: [origin]
---

I was drinking Saturday morning coffee and scrolling X, not looking for a product.

[A post by Vox](https://x.com/Voxyz_ai/status/2088327172725592142) stopped me. He had tried a few reasoning prompts with Codex and kept the one that made the model pause: list the assumptions it was about to make, say what missing fact would change the answer, name the common mistake, ask **one** question, and wait.

The one-question rule is why I kept it too. Ten questions is a meeting. One, and I usually answer. Replies under the tweet said the same thing two ways: assumptions have to come before there is an answer to defend, and the interrupt has to be cheap enough that you don't put the tab down.

I spent the next hour turning that prompt into TemperPass. The tweet has the model wait every time, and I didn't want that. Halt-and-ask is one of the loudest complaints about agents, and it is infuriating when it fires on something cheap. [`clarify-first`](/clarify-first) still names the assumptions, then answers. It waits only when the next action is hard to undo.

I dropped two things on purpose:

- "Name the most common mistake people make." A competent model already does that when asked. It is not a protocol.
- Broad, pushy skill descriptions. The tweet is a prompt you paste when you want it. A skill that fires on its own has to be narrow, or it interrupts every message.

I added called versus auto, since you do not consent to a red-team by asking a question; rules written as numbered steps rather than guidelines; and [`red-team`](/red-team) locked against prompts it was allowed to fail.

The first time I ran `clarify-first` for real, I gave it "the tests are flaky." Underspecified, so it fired: assumptions, missing facts, a question. Wrong answer. A flaky test is cheap to guess at and cheap to correct, and the pass had just charged me an interruption for nothing. The fix is now step 0 of the protocol, and it takes both conditions: the request has to be underspecified **and** a wrong first attempt has to be expensive. Ambiguity alone is not a reason to stop.

The one-question rule broke the same way. On a billing migration with two gaps that both flipped the recommendation, a hard cap of one joined them with "and" into one sentence, harder to answer than either would have been alone. One is still the default. A second is allowed when it is independent and changes the recommendation by itself, and a compound question counts as two. The interrupt budget was always the point; the number was a proxy for it.

The repo and this site are that hour. [Copy a pass](/install) into your agent's skills directory and point it at the file.
