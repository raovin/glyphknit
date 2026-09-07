# Tasks: Interactive evidence demos

**Spec**: [spec.md](./spec.md) | **Plan**: [plan.md](./plan.md) | **Date**: 2026-09-05

Tasks are grouped by user story so each story can be delivered and verified
independently. `[P]` marks tasks that may run in parallel with their siblings.

## Phase A - Evaluator foundation (blocks US1)

- [x] **T001** Define `lib/eval/types.ts`: `EvalCase`, `AssertionKind`,
  `CaseOutcome`, `GateDecision`, `GateReport`. Plain data only, no imports.
- [x] **T002** Implement `lib/eval/assertions.ts`: `contains`, `regex`,
  `jsonShape`, `refusal`. Each returns a score in `[0,1]` plus a reason string.
  Pure, total, no throw on malformed input. *(depends on T001)*
- [x] **T003** Implement `lib/eval/parse.ts`: `parseCases(jsonl)` returning
  `{ cases, problems }` where each problem carries a line number and a specific
  message. Never throws. *(depends on T001)*
- [x] **T004** Implement the deterministic stand-in provider in
  `lib/eval/evaluate.ts`: case id to fixed response, no clock, no randomness,
  documented as the swap point for a real provider. *(depends on T001)*
- [x] **T005** Implement `evaluate(cases)` and `buildReport(...)` in
  `lib/eval/evaluate.ts`: per-case outcomes, weighted aggregate, threshold
  comparison, decision with stated cause. Run metadata is caller-supplied.
  *(depends on T002, T004)*
- [x] **T006** Author the sample case set: four to six synthetic cases spanning
  all assertion kinds, at least one failing at the default threshold so the gate
  shows a real FAIL on first paint. No client, employer, or personal data.
  *(depends on T001)*

## Phase B - User Story 1: Verify capability by operating it (P1)

- [x] **T010** Create `app/(site)/demos/eval-gate/page.tsx` server shell with
  route metadata via `buildMetadata`, explanatory prose, and the no-script
  fallback content. *(depends on T005)*
- [x] **T011** Build `components/demos/case-result-row.tsx`: per-case score,
  pass/fail with icon and text label, failure reason. *(depends on T001)* `[P]`
- [x] **T012** Build `components/demos/gate-verdict.tsx`: aggregate score,
  threshold readout, PASS/FAIL with stated cause. *(depends on T001)* `[P]`
- [x] **T013** Build `components/demos/eval-gate.tsx` client component: mounts
  pre-evaluated (FR-001), JSONL textarea, threshold range input with live text
  value, recompute on change. *(depends on T005, T011, T012)*
- [x] **T014** Render parse and validation problems above results while keeping
  the last good result visible (FR-007). *(depends on T013)*
- [x] **T015** Add report retrieval: inline copyable JSON block plus a download
  attempt as enhancement (FR-004). *(depends on T013)*
- [x] **T016** Verify determinism: identical inputs yield byte-identical reports
  across re-render and reload (SC-003). *(depends on T015)*

## Phase C - User Story 2: Understand what the demo proves (P2)

- [x] **T020** Add `content/demos/demos.ts` registry: slug, title, what it
  proves, related case study, related repo card. *(depends on T001)* `[P]`
- [x] **T021** Create `app/(site)/demos/page.tsx` index listing shipped demos
  with route metadata. *(depends on T020)*
- [x] **T022** Add the "what this proves" and next-step block to the eval-gate
  route, linking to the `mlops-readiness-scaffold` case study and the contact
  path (FR-009). *(depends on T010, T020)*
- [x] **T023** Add Demos to primary navigation in `components/nav.tsx` and to
  the sitemap (FR-015). *(depends on T021)*
- [x] **T024** Cross-link from the home page code section and the `/code` page
  into the demo (FR-015). *(depends on T021)*

## Phase D - User Story 3: Trust the demo's honesty (P3)

- [x] **T030** Write the boundary statement on the eval-gate route: local
  deterministic scoring, stand-in provider, not a production benchmark, not
  client work (FR-008). *(depends on T010)*
- [x] **T031** Retire planned repo cards superseded by shipped demos and
  reconcile the remainder so no card presents nonexistent work as completed
  evidence (FR-014, SC-008). *(depends on T021)*
- [x] **T032** Confirm zero network egress during evaluation (SC-004).
  *(depends on T013)*

## Phase E - Quality and verification gates

- [x] **T040** Keyboard traversal: every control reachable and operable, visible
  focus, accessible names (FR-010, SC-005). *(depends on T015)*
- [x] **T041** Responsive verification at 360 and 1440 pixels, no page-level
  horizontal overflow (FR-011, SC-006). *(depends on T015)*
- [x] **T042** Reduced-motion verification (FR-016). *(depends on T015)* `[P]`
- [x] **T043** Edge-case pass: malformed, oversized, empty, all-pass, and
  all-fail inputs each report a specific problem and stay operable (SC-007).
  *(depends on T014)*
- [x] **T044** Run `npm run lint` and `npm run build`; confirm the static export
  is produced and the new routes appear in the route table (FR-017, SC-009).
  *(depends on all)*

## Dependency notes

- Phase A blocks everything. The evaluator's purity is what makes SC-003 and
  SC-004 verifiable rather than asserted.
- US1 (Phase B) is independently shippable: it satisfies the feature's core
  premise without the index route, navigation, or card reconciliation.
- US2 (Phase C) and US3 (Phase D) each add value on top of US1 and do not block
  one another.
- Phase E gates completion per Constitution Principle V.


## Completion notes (2026-09-05)

All tasks complete. Verification evidence:

- `npm run lint` clean; `npm run build` green with 24 static routes exported,
  including `/demos/` and `/demos/eval-gate/`.
- Determinism (SC-003) confirmed: identical inputs produce byte-identical
  reports across repeated runs. Run identity is an FNV-1a fingerprint of the
  cases plus threshold, never a clock.
- Zero network egress during evaluation (SC-004): every request in the session
  was localhost page assets or dev HMR. Fonts are self-hosted via `next/font`.
- Edge cases (SC-007) exercised in the browser: a broken line among good ones
  still evaluates the good ones, unknown assertion kind, duplicate id, invalid
  regular expression, and empty input each report a specific problem and leave
  the demo operable.
- 360px viewport (SC-006): zero page-level horizontal overflow. Wide report and
  response blocks scroll inside their own `pre` containers.

Two defects were found and fixed during verification rather than shipped:

1. **Float comparison in the gate decision.** A weighted aggregate of 5.6/7
   evaluates to 0.7999999999999999, so a displayed `0.800` failed a `0.80`
   threshold. Both the per-case score and the aggregate are now rounded to the
   precision the UI and report display before any comparison.
2. **Grid track overflow at 360px.** Grid items default to `min-width: auto`,
   so the report `pre` forced its column to 953px inside a 332px container.
   Both demo grids now use explicit `minmax(0, 1fr)` tracks.

One adjacent improvement outside the original task list: the global
`:focus-visible` rule in `app/globals.css` targeted only `a, button, [tabindex]`,
which excluded form controls. It now also covers `input`, `textarea`, `select`,
and `summary`, so the demo's editor, slider, and disclosures show the site's own
focus ring rather than falling back to the user-agent default. This affects
every form control on the site, not only the demo.

Deferred, as scoped in the spec: additional demos beyond the evaluation gate.
