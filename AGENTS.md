# Agent guardrails — TemperPass

This repo uses **ForgeTrail** lifecycle tracking. Source of truth: `.forgetrail/workflow_tracking.json` (`currentPhase`, `phases`, `decisions`).

## Session start

1. Read `.forgetrail/workflow_tracking.json` and `CONTEXT_PROMPT.md` (once it exists) before making changes.
2. Check `currentPhase` and work within that phase's scope; don't jump ahead without user confirmation.

## Git commits

- Plain `git commit -m "..."` or `git commit -F <file>`.
- Commit after substantive work per `.cursor/rules/git-user-commits.mdc`. Do not push unless the user explicitly asks.

## Phase transitions

Do not advance `currentPhase` or mark a phase complete without explicit user confirmation. If exit criteria look satisfied, say so and wait.
