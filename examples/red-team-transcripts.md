# `red-team` — Validation Transcripts

Four runs against the locked protocol, plus one paired baseline. These are the
records that justified locking the pass, including the two failures that forced
protocol changes.

**Independence caveat:** these runs were produced in the same session that wrote
the protocol. That makes them a sanity check, not a clean eval — the runner had
the design in context. An independent run is still owed. Recorded here so the
evidence isn't over-read later.

---

## Test 1 — Should come back clean

> We're going to move our main API from a single monolithic service to three
> focused services (Auth, Core, and Billing) over the next quarter. Auth and
> Billing already have clear ownership boundaries and almost no shared database
> tables with Core. We'll run the old and new paths side-by-side for two weeks
> with shadow traffic before cutting over any production traffic. Red-team this.

**Steelmanned version.** Split a monolith into Auth, Core, and Billing where two
of the three already have clean ownership and minimal data coupling, with a
two-week shadow-traffic period before any production cutover.

**Load-bearing assumption.** The remaining shared concerns — auth context
propagation, distributed tracing, cross-service transactional needs — can be
handled with standard patterns without creating operational complexity that
outweighs the modularity gains.

**Failure story.** Cross-service calls for what used to be in-process
transactions start producing partial failures. Latency variance increases. The
shadow period shows elevated error rates that are hard to attribute, and the
team adds compensating logic and shared libraries that re-create a distributed
monolith. Cutover is delayed or reversed after customer-visible incidents.

**Rated objections**

| Objection | Severity | Plausibility |
|---|---|---|
| Cross-service consistency and operational complexity re-create the problems the split was meant to solve | Costly | Possible |
| Two weeks of shadow traffic is too short to surface rare interaction bugs | Survivable | Possible |

**Implication.** The plan holds up. The strongest objection is real but not
decisive given the already-clean boundaries and the shadow period. No
fundamental change required; extend observability and define abort criteria for
the shadow phase.

### What this run exposed

The named load-bearing assumption came back rated **Costly**, which contradicts
step 2's own definition — a hinge is an assumption whose falsification
*collapses* the approach. The protocol at the time had no exit for "there is no
hinge here," so it manufactured one.

**Fix:** step 2 gained an explicit no-hinge exit, with a requirement to name the
strongest candidate considered and say why its falsification is only Costly or
Survivable.

---

## Test 2 — Genuine hidden hinge

> We're replacing our current job queue (Sidekiq + Redis) with a custom
> Postgres-based queue so we can get transactional outbox semantics and drop the
> Redis dependency. Expected load is 5–15k jobs/day, mostly short. Red-team the
> decision.

### First run (pre-fix) — FAILED

Rated Postgres contention **Fatal**, with plausibility escalated "Possible →
Likely under growth," and let that objection drive a recommendation against the
user's plan.

15k jobs/day is roughly 0.17 jobs/sec. Postgres does not meaningfully contend
with a primary workload at that volume; the concern is real at thousands of jobs
per *second*. The run never referenced the stated number, and imported an
unstated growth condition to escalate the rating.

This is the failure mode the pass exists to prevent — blast-radius folklore
overriding stated conditions — and the "could go wrong vs. likely under the
stated conditions" guideline was already present when it happened. Guidelines
don't bind; steps do.

**Fix:** step 4 gained two enforceable rules — plausibility must be justified
against stated conditions and name the scale at which it would change, and
ratings may not be escalated by importing unstated conditions.

### Paired baseline (no pass)

Leads with Postgres-as-a-queue being the wrong tool: lock contention, polling
overhead, vacuum and bloat, `SELECT FOR UPDATE` competing with application
queries. Then six or seven more — reinventing the wheel, no admin UI, retry and
backoff semantics, poison jobs, observability regression versus Sidekiq. Closes
by suggesting they reconsider or benchmark heavily.

No line engages with 5–15k jobs/day. No ranking. The recommendation follows from
the volume of concerns rather than their weight.

**Read:** the scale error is the model's default, not something the pass
introduced. The baseline is worse *and* unranked. The step-4 rules are the
correction — keep them as literal steps and do not let them drift into the
guidelines.

### Second run (post-fix) — PASSED

Step 4 forces the arithmetic: ~0.17 jobs/sec, peaking into low single digits.
Contention rates **Survivable / Unlikely**, with the crossover stated at
thousands per second. Growth becomes its own separately rated objection rather
than an escalator.

Step 2 therefore rejects contention as the hinge and keeps looking. The real
load-bearing assumption is that the team can hand-roll a *correct* queue —
visibility timeouts, at-least-once delivery, poison-job handling, crash recovery
mid-job. If false: silently dropped or double-executed jobs, discovered from
customer reports. **Fatal / Likely**, given "custom."

**Implication.** The Postgres direction is sound at this volume. The word doing
the damage is *custom*. An existing Postgres-backed queue library delivers
transactional outbox semantics and drops Redis without hand-writing the hard
parts.

---

## Test 3 — Unformed direction (downgrade case)

> I've been thinking about whether we should break the monolith up at all. What
> are the real options and trade-offs? Red-team whatever you think the best path
> is.

**Output (short form).** The direction is too open for a full red-team — this is
a request for options, not a stress test of a committed approach.

Strongest near-term direction is usually modular-monolith-first: enforce internal
boundaries, extract only the pieces with clear ownership and scaling or
compliance pressure, delay network splits until the benefit is measurable.

The missing decision: what concrete pain — scaling, team autonomy, compliance,
deployment frequency — is forcing the question now? Once named, the decisive
objection follows: either the pain justifies the distributed-systems cost or it
doesn't. Until then a full red-team would invent concerns rather than test a
plan.

**Note:** this is a *downgrade* test, not a false-trigger test. The prompt
explicitly invokes red-team, so triggering was correct. Called passes cannot
false-trigger; see spec §7.

---

## Test 4 — High volume (anti-inflation overshoot check)

Same architecture as Test 2, one variable changed, to confirm the new step-4
rules discriminate rather than blanket-suppress.

> ...Expected load is 40k jobs per second, mostly short. Red-team the decision.

**Load-bearing assumption.** Postgres can sustain 40k jobs/sec of enqueue, claim,
and completion traffic — with the necessary locking and indexing — without
latency or throughput collapse on the primary workload.

**Failure story.** The job tables become a continuous hotspot. `SELECT FOR
UPDATE` / `SKIP LOCKED`, index maintenance, and vacuum pressure compete directly
with application queries. Primary API p99 rises, connection pools saturate, the
database becomes the shared bottleneck. Emergency read replicas, partitioning,
or rollback under production load.

**Rated objections**

| Objection | Severity | Plausibility |
|---|---|---|
| Postgres cannot absorb 40k jobs/sec alongside the primary workload | **Fatal** (straw) | **Likely** |
| Operational maturity and edge-case handling of a custom queue at this volume | Costly | Likely |
| Migration and dual-running risk at high throughput | Costly | Possible |

**Implication.** At this rate the contention risk is not theoretical. The
load-bearing assumption fails under the stated conditions. A custom Postgres
queue is the wrong tool at this scale; keep a purpose-built or managed queue and
solve the outbox requirement separately.

---

## Result

Same objection, same architecture, one variable changed:

| Stated load | Contention rating |
|---|---|
| 15k jobs/day | Survivable / Unlikely |
| 40k jobs/sec | Fatal / Likely |

The anti-inflation rules discriminate rather than over-suppress. `red-team`
locked on this evidence.

## Open finding

All four tests are backend infrastructure, and two are the same prompt with one
number changed. Step 4's plausibility rule leans on stated quantities. Whether it
degrades gracefully where there are no numbers — pricing, hiring, go-to-market —
is untested. See spec §7 and §11.
