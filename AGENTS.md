# Agent guardrails — TemperPass

This repo uses **ForgeTrail**. The record is `appledger/`: the phase in `profiles/forgetrail.yaml`, and decisions and the session in `records/`.

## Session start

1. Read `appledger/profiles/forgetrail.yaml`, the latest session record, and `CONTEXT_PROMPT.md` (once it exists) before making changes.
2. Work within the current phase. Don't jump ahead without user confirmation.

## Git commits

- Plain `git commit -m "..."` or `git commit -F <file>`.
- Commit after substantive work per `.cursor/rules/git-user-commits.mdc`. Do not push unless the user explicitly asks.

## Phase transitions

Do not advance the phase or mark a phase complete without explicit user confirmation. If exit criteria look satisfied, say so and wait.
