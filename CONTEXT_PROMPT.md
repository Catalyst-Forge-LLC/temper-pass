# TemperPass - Project Context Prompt

_Copy and paste this into a new chat to pick up where you left off._

---

## Handoff from Phase 1

`docs/PHASE_1_BRIEF.md` is **locked** (2026-08-15). Architecture below is merged from that brief. Do not re-derive it from chat. Do not delete `.forgetrail/workflow_tracking.json` → `decisions[]`.

## Tech Stack

- **Framework:** FilePress (`getfilepress` ^0.1.3) — static Markdown site. Not SvelteKit-as-app.
- **Language:** TypeScript ESM for `site/filepress.config.ts`. Skills are Markdown.
- **Package Manager:** pnpm
- **Styling:** FilePress Essay theme + `site/theme.css` tokens (temper straw / purple / blue)
- **Database/Storage:** none
- **Auth:** none
- **AI/LLM:** none in the product. Passes are protocols an *external* agent runs.
- **Deployment:** Cloudflare Pages via `pnpm ship` (Wrangler project `temperpass`). Custom domain temperpass.dev.
- **License:** MIT
- **Key Dependencies:** `getfilepress`, `wrangler` (site only)

## Project Structure

```
temper-pass/
  README.md                 manifesto (spec copy)
  passes/<name>/SKILL.md    the product
  examples/                 validation transcripts
  evals/                    test prompts
  site/                     FilePress content-only site
    pages/home.md
    pages/install.md
    pages/<pass>.md
  docs/PHASE_1_BRIEF.md
  temperpass-spec-v4.md     dated product spec
```

## Data Model

| Entity | Purpose | Key fields |
| --- | --- | --- |
| Pass | Agent protocol | name, type (called/auto), status (locked/drafted/spine), SKILL.md |
| Example | Validation record | transcripts, including failures |
| Page | Public site | FilePress `pages/<slug>.md` |

One pass → one skill file → one site page at `/<slug>` (flat; not `/passes/<slug>`).

## Key Architectural Decisions

- **DECIDED: Phase 1 — FilePress, no PocketBase/auth.** No state outlives the browser.
- **DECIDED: Phase 1 — one repo, `passes/` + `site/`.** Repo + site now.
- **DECIDED: Phase 1 — Apache 2.0.** ForgeTrail sibling. **Superseded:** MIT (Smell Check cousin; Markdown skills, not an engine).
- **DECIDED: Phase 1 — flat slugs.** FilePress cannot nest `/passes/red-team`.
- **DECIDED: Phase 1 — spec v4 is the copy source.** Tagline, shelf one-liner, mill paragraph: do not paraphrase.
- **DECIDED: Phase 1 — no npm announce until published.** `temperpass` is free on npm (404) but unpublished.
- **DECIDED: Phase 1 — four passes ship; three still to lock.** User will refine shortly.
- **DECIDED: Phase 1 — ship the site now.** Overrides spec §9 repo-first.
- **DECIDED: Phase 1 — no /philosophy, /using, or pass index.**

## Critical Patterns for This Stack

- Descriptions are written **narrow**, with explicit Do NOT cases. Do not broaden them.
- Load-bearing rules go in **numbered protocol steps**, not guidelines.
- Called vs auto is a consent line. Confrontational work is called-only.
- One source per string class: spec → README and site, same wording.
- Assertive product voice. Do not hedge shipped claims with "can."
- `filepress check` / `pnpm --dir site build` after content edits.
- Pin `getfilepress` to a published version in `site/package.json`. `link:` is local-only.

## Design Philosophy

- The shape goes in and the shape comes out; the pass takes out brittleness.
- Lead with the mill so "temper" does not read as mood.
- A critique tool that can never return "this holds up" trains users to discount it.
- Parked passes stay in the README as a roadmap, not empty directories.

## Writing/Voice Rules

- Use the spec's mill paragraph and table wording, not a rewrite.
- Fatal = temper straw (brittle). Survivable = temper blue (tough). Do not invert.
- Mark drafted/spine passes as such. Do not ship `clarify-first` as proven.

## My Preferences

- **Thinking style:** Direct, first principles, verifiable facts.
- **Code conventions:** TypeScript ESM, pnpm, no CommonJS.
- **Working mode:** Plan before multi-file changes. Commit after substantive work. Do not push unless asked.

## Current Feature State

### Complete

- Phase 1 brief locked
- `red-team` locked with transcripts
- Pass directories for all four
- FilePress site spine (home, install, four pass pages)
- Origin story (Vox X post → hour of spec) on README, home, spec §13, site post
- `scope-lock` and `tradeoff-matrix` locked with transcripts
- `clarify-first` validated (negatives first); step 0 gate added after N3 false-trigger

### In Progress

- Local `pnpm site:dev` not yet run in this session (build succeeded)

### Not Started

- Independent evals (all four passes)
- Non-numeric `red-team` eval
- npm publish / `temper` CLI
- Public GitHub + `pnpm ship` + domain

## Anti-Patterns to Avoid

- Broadening auto-pass descriptions
- Putting load-bearing rules in guidelines
- Advertising `pnpm add temperpass` before publish
- Inventing `/passes/` URLs the engine cannot serve
- Paraphrasing the mill copy
- Treating same-session evals as independent proof
- Shipping a FilePress site with zero posts (`/posts/[slug]` must prerender)
- Treating `filepress check` failures inside `getfilepress` as site-content bugs
- Blocking on every underspecified question (that is the origin tweet; this product answers anyway)
- Scoring vendor variants as if they were architectures
- Inventing nouns to fill a scope-lock contract
- De-smelling protected spec lines (mill paragraph, four-pass chant, "Guidelines don't bind")
- Corporate "we" on public pages (overlay: I on origin, you on the site)

## Recent Changes

### Session 2026-08-15

- ForgeTrail kickoff. User: repo + site now; spec copy into README and site; remaining skills locked shortly.
- Brief locked. Scaffolding `passes/`, `site/`, manifesto README.
- Origin from https://x.com/Voxyz_ai/status/2088327172725592142 recorded. scope-lock + tradeoff-matrix locked. clarify-first validated; gate is now step 0.
- Smell Check pass on public copy. Overlay at smellcheck.overlay.md. Softened unsourced 15%; origin post is first person.
