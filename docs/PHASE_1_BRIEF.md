# TemperPass — Phase 1 architecture brief

_Structured capture of planning and architecture **before** code scaffolding. Goal: Phase 2 (or a new agent/session) can start from this file + `.forgetrail/workflow_tracking.json` without re-reading the whole Phase 1 chat._

**Status:** `locked`  
**Last updated:** 2026-08-15  
**Phase 1 exit:** Locked from spec v4 plus user confirmation (repo + site now; spec copy into README and site; remaining passes refined shortly).

---

## 1. Problem and outcome

**What we are building (2–4 sentences):**

TemperPass is a small collection of agent **passes** — protocols that take the brittleness out of a decision before the agent commits to an answer. Most agents answer immediately and confidently; TemperPass makes them say what they are assuming first. This repo is both the skill package (`passes/`) and the public FilePress site at **temperpass.dev**.

**Project archetype:** `product`

**What “done” looks like for v1 (measurable where possible):**

- README is a manifesto that uses the locked spec copy (mill origin, four-pass table, install).
- Four pass directories exist: `red-team` locked, `clarify-first` drafted, `scope-lock` and `tradeoff-matrix` as spines.
- FilePress site builds (`pnpm --dir site build`) and the hero flow works locally: home → a pass page → install.
- License is MIT. No npm publish required for v1 (`temperpass` is available on npm; do not announce install-from-npm until published).

---

## 2. Users and hero flow

**Primary user(s):** People already using coding agents, arriving from the Catalyst Forge shelf, GitHub, or later npm.

**The single most important workflow (hero flow) end to end:**

Land on temperpass.dev → get the mill in one paragraph → see the four passes → copy or point an agent at a skill file.

**Secondary workflows (if any) for v1:**

- Read the locked `red-team` protocol and one real transcript.
- Clone the repo and copy `passes/<name>/SKILL.md` into an agent skill directory.
- Local site preview via `pnpm site:dev`.

---

## 3. Constraints

- **Technical:** FilePress static site (no PocketBase, no auth, no accounts). pnpm. TypeScript ESM for config. Node 20+. Site lives in `site/`. Pass pages are FilePress flat slugs (`/red-team`), not nested `/passes/[name]` — the engine does not support nested page paths.
- **Business / timeline:** Repo + site now. Remaining passes refined and locked shortly after the spine. Spec v4 copy is the source of truth for public prose.
- **State persistence:** None. Static files only.
- **Content generation:** Hand-authored from spec v4. No LLM content-generation pattern.
- **Compliance:** None at this phase.
- **Exports:** Markdown skill files are the deliverable. No PDF/DOCX.
- **Tenancy:** Public open-source. No sign-up.
- **Live web search:** Not required.
- **Explicit non-goals for v1:** See §10.

---

## 4. Stack and tooling

| Area | Choice | Status | Notes / WHY |
| --- | --- | --- | --- |
| Framework | FilePress (`getfilepress` ^0.1.3) | confirmed | Shelf standard for product sites (aiBreze, IngotVault). |
| Language | TypeScript ESM | confirmed | Config only; skills are Markdown. |
| DB / backend | none | confirmed | Static site. No state that outlives the browser. |
| Auth / storage | none | confirmed | Public docs + skills. |
| Styling | FilePress Essay theme + light `theme.css` tokens | confirmed | Temper straw / purple / blue for severity only. No commissioned design. |
| Deploy / CI | Cloudflare Pages, Wrangler `pnpm ship` | confirmed | Same path as sibling sites. Domain temperpass.dev. |
| Package manager | pnpm | confirmed | Project rule. |
| License | MIT | confirmed | Structural cousin of aiBreze. Supersedes the ForgeTrail Apache default. |
| State persistence | none (A-local / static) | confirmed | Drop PocketBase and auth. |

---

## 5. Data model (sketch)

**Core entities:**

- **Pass** — a skill directory under `passes/<name>/SKILL.md` with Cursor-style frontmatter (`name`, `description`). Type is called or auto. Status is locked / drafted / spine.
- **Example** — validation transcript under `examples/`.
- **Eval** — test prompts under `evals/`.
- **Page** — FilePress `site/pages/<slug>.md` for home, install, and each pass.

**Relationships:**

- One pass → one skill file → one site page.
- Locked passes may have transcripts and evals.

**Existing data / migration:** Move root `SKILL.md` → `passes/red-team/SKILL.md` and `red-team-transcripts.md` → `examples/red-team-transcripts.md`. Keep `temperpass-spec-v4.md` as the dated product spec.

**Visual identity (severity only):**

| Rating | Color | Metal |
| --- | --- | --- |
| Fatal | temper straw | The hard, brittle temper — what snaps |
| Costly | temper purple | Middle of the range |
| Survivable | temper blue | The tough spring temper — what bends and holds |

Plausibility stays textual.

---

## 6. Integrations and external systems

| Integration | Purpose | Auth / secrets | Risk notes |
| --- | --- | --- | --- |
| FilePress / getfilepress | Static site engine | none | Pin a published version in `site/`; `link:` is local-only. |
| Cloudflare Pages / Wrangler | Deploy temperpass.dev | Cloudflare account (human) | Dual git-connected + Wrangler deploys overwrite each other — pick one. |
| GitHub | Source + raw skill URLs | public repo | Nav GitHub 404s until the repo is public. |
| npm `temperpass` | Future package name | none yet | Name is free (404). Do not advertise `pnpm add temperpass` until published. |

---

## 6a. Content-generation pattern (only if LLM-produced content)

Skipped. All v1 copy is hand-authored from spec v4.

---

## 7. Hardest problems and risks

1. **Name without the mill.** “Temper” can read as mood. Home and README must lead with the mill paragraph so first contact is the right sense.
2. **Copy drift.** Spec, README, and site must share the same strings for tagline, shelf one-liner, and mill origin — not paraphrases.
3. **Shipping unvalidated auto-pass.** `clarify-first` is drafted only. Show it, mark it unvalidated, do not treat a good read as proof.
4. **npm / CLI temptation.** Spec names `temper` and `temperpass`. v1 is files you point an agent at. Publishing and a verb-first CLI come later.

---

## 8. Architectural decisions (numbered)

**D1.** FilePress static site at temperpass.dev, no PocketBase or auth. WHY: no state needs to outlive the browser; matches shelf sites.

**D2.** One repo holds skills (`passes/`) and the site (`site/`). WHY: user asked for repo + site now; aibreze/IngotVault pattern.

**D3.** MIT. WHY: closest cousin is aiBreze (skills you point an agent at). Supersedes the first-pass Apache 2.0 choice (ForgeTrail sibling).

**D4.** Pass pages are flat FilePress slugs (`/red-team`), not `/passes/[name]`. WHY: FilePress pages are `pages/<slug>.md` only; nested slugs are not supported. Spec §9 nested path was written before the engine constraint was locked.

**D5.** Spec v4 copy is the source of truth for README and site. WHY: user asked that the mill and collection copy land as written.

**D6.** v1 install is copy-the-skill from this repo. npm name `temperpass` is reserved in the brief but not announced until published. WHY: package is not on npm yet.

**D7.** Include all four passes now; lock `scope-lock` and `tradeoff-matrix` (and validate `clarify-first`) shortly after the spine. WHY: user — “we will work on the other skills to refine and lock them shortly.”

**D8.** Ship the site now. WHY: user overrode spec §9 / §12 “repo first, site later.”

**D9.** Prune tracking exit criteria that assume CRUD, auth, payments, and PocketBase. WHY: static content product.

**D10.** Drop `/philosophy`, `/using`, and a filtered pass index. WHY: spec §9 — philosophy belongs on the home page; four items do not need an index.

---

## 9. Open questions (before or during Phase 2)

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| 1 | Confirm domain purchase and Cloudflare Pages project `temperpass` | User, before first `pnpm ship` |
| 2 | Publish GitHub `Catalyst-Forge-LLC/temper-pass` (nav 404s until public) | User |
| 3 | When to publish npm `temperpass` and add a `temper` CLI | Deferred — after pass lock |
| 4 | Cold-name test: say “TemperPass” to three people | Spec §12; not a site blocker |
| 5 | Independent `red-team` eval (current transcripts are same-session) | Next pass-refinement session |

---

## 10. Explicitly out of scope (v1)

- npm publish and `temper` CLI
- Locking `clarify-first`, `scope-lock`, `tradeoff-matrix` (spines/drafts ship; depth comes next)
- Parked passes as skill directories (`first-principles`, `option-generator`, `premortem`, `steelman`, `confidence-calibrate`) — README roadmap only
- `/philosophy`, `/using`, pass index, blog/writing feed
- Accounts, auth, payments, PocketBase
- Commissioned visual design
- Shelf entry on catalystforge.com (after publish)

---

## 11. First feature batch (post-scaffold)

1. Lock `scope-lock` to `red-team` depth, with failed runs recorded.
2. Lock `tradeoff-matrix` the same way.
3. Validate `clarify-first` — negative cases first (false-trigger rate).
4. Run `red-team` on a non-numeric decision; check whether plausibility degrades.
5. Publish the GitHub repo; add the shelf entry.
6. Publish npm `temperpass` only after the name and package shape are ready.
7. Attach temperpass.dev and `pnpm ship`.

---

## 12. Handoff checklist (before leaving Phase 1)

- [x] User has confirmed stack, folder shape, data sketch, hero flow, and v1 boundaries
- [x] This brief is **locked**
- [x] `.forgetrail/workflow_tracking.json` updated with D1–D10
- [x] Phase 2 opener will read **this file** + `.forgetrail/workflow_tracking.json` first
