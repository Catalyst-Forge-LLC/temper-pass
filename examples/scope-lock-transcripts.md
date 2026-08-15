# `scope-lock` — Validation Transcripts

Called pass: test the downgrade path, not false-triggers. Includes a
qualitative lock (no numbers) so the pass does not inherit `red-team`'s
numbers-dependency.

**Independence caveat:** same session that wrote the protocol. Sanity
check, not a clean eval.

---

## S1 — Tight enough to lock

> Scope-lock v1 of TemperPass: FilePress site at temperpass.dev plus the
> skill repo. Spec copy on the README and home. Remaining passes get
> depth in this same push. npm and the CLI wait.

**Self-attribution.** The folder shape and flat slugs were proposed in
the previous turn. Treat that restatement as a suspect expansion.

**Problem.** Ship a public TemperPass repo and FilePress site so a
visitor can get the mill claim and copy a skill.

**In.** Manifesto README from spec copy; four `passes/*/SKILL.md`; site
pages for home, install, and each pass; Apache 2.0; local `pnpm site:build`.

**Not in.** npm publish; `temper` CLI; commissioned design; parked-pass
directories; catalystforge.com shelf entry; accounts or a backend.

**Done.** `pnpm site:build` writes the mill paragraph into
`site/build/index.html`, and the four skill files exist at the statuses
the home table claims.

**Reopen if.** npm publish starts, or a pass protocol changes in a way
that contradicts the home table.

**Implication.** Lock holds. Stop — do not start a fifth page.

---

## S2 — Too soft (downgrade)

> Scope-lock our Q3 platform rewrite.

**Cannot write the one sentence** without inventing what "platform" is,
who it is for, and what "rewrite" replaces.

**Already clear.** It is a rewrite, not a greenfield name-change.

**Missing decision.** What system is being replaced, and what "done" would
look like for Q3 — a cutover, a spike, or a design.

Short version. No contract. This is the correct downgrade: not a refusal,
not a fake lock.

---

## S3 — Hire, no problem stated

> Scope-lock hiring a senior engineer for the platform team.

### First run — FAILED

Invented a contract: not a junior, not a contractor, not a manager; done
when the offer is accepted. Those nouns were not in the request. Step 1
said "one sentence" and the run treated that as permission to fill
gaps with plausible HR defaults.

**Fix:** step 1 now forbids new nouns. If the sentence cannot be written
from what the user said, stop.

### After the fix

**Cannot write the one sentence.** "Senior engineer" is a role, not a
problem. The missing decision is what this hire is *for* (backfill vs
new capability vs manager relief).

**Already clear.** It is a hire, not a vendor or an agency.

Short version. Stop.

---

## S4 — Qualitative, no numbers (must still lock)

> Scope-lock the homepage: the mill paragraph stays as written. We are
> not adding a product video.

**Problem.** Keep the homepage claim as the spec's mill paragraph.

**In.** The mill paragraph, as written, on `/` and in the README.

**Not in.** A product video; a rewrite of the mill paragraph; a
commissioned hero illustration.

**Done.** A reader of `/` sees the mill paragraph with the 1.5–2%
reduction sentence intact.

**Reopen if.** Someone other than the author says the name does not read
as metal or restraint without that paragraph.

No numbers were stated. The lock did not demand any. This is the
qualitative case spec §5 flagged as a risk if `scope-lock` inherited
`red-team` step 4's numbers habit.

---

## Score

| Case | Required | Result |
| --- | --- | --- |
| S1 tight | full artifact | full artifact |
| S2 rewrite | short downgrade | short downgrade |
| S3 hire | short downgrade | **failed** by inventing nouns; short after the fix |
| S4 copy | lock without numbers | lock without numbers |
