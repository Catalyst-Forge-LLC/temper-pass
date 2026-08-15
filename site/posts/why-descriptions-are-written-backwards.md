---
title: Why the descriptions get written backwards
date: 2026-08-15
description: Standard skill advice says make descriptions pushy. TemperPass does the opposite, on purpose.
tags: [design]
---

Standard skill-authoring advice says to make descriptions *pushy*, because models under-trigger. They skip skills that would have helped. TemperPass does the opposite, on purpose. A match costs an interruption, including the false ones, so the descriptions here are narrow: a tight target, explicit negative cases, and a called pass over an auto pass whenever there's doubt.

Do not "fix" this later by broadening the descriptions. This is the design.

The same thing showed up in `red-team` validation. A load-bearing rule sat in the guidelines section and was ignored in a live run. Rewritten as an enforceable step in the protocol, it held.

**Guidelines don't bind. Steps do.** If a rule matters enough that a run is wrong without it, it belongs in the numbered protocol with a concrete test the model can apply — not in a prose list at the bottom.
