# Implementation Plan: Interactive evidence demos

**Branch**: `main` | **Date**: 2026-09-05 | **Spec**: [spec.md](./spec.md)

## Summary

Add a runnable, in-browser evaluation gate demo to the public site so a visitor
can operate real release-gate logic instead of reading claims about it. Scoring
runs client-side against a deterministic stand-in provider, keeping the static
export intact and adding no network, secret, or paid dependency. The demo's own
application code is the work sample. Planned repository cards superseded by
shipped demos are retired so no card presents nonexistent work as evidence.

## Technical Context

**Language/Version**: TypeScript 5.9, React 19.2, Node 24 types

**Primary Dependencies**: Next.js 16.2 App Router, Tailwind CSS 4.2,
lucide-react. No new runtime dependency is introduced.

**Storage**: None. Demo state is component-local and ephemeral. No cookie, no
server persistence. Storage access is optional and its absence is non-fatal.

**Testing**: Deterministic evaluator exercised through a pure, dependency-free
module boundary; `npm run lint` and `npm run build` as the mandated gates;
manual keyboard, reduced-motion, and 360/1440 viewport verification.

**Target Platform**: Static export served from Nginx, modern evergreen browsers,
360 to 1440 CSS pixels.

**Project Type**: Static marketing/portfolio site, Next.js App Router,
single project.

**Performance Goals**: First paint shows a complete evaluated result. Re-scoring
on input change stays imperceptible for the sample case set. No layout shift
between the server-rendered shell and the hydrated demo.

**Constraints**: `output: "export"` with `trailingSlash: true` and unoptimized
images must survive unchanged. Zero network egress during evaluation. No
third-party font or asset download at build time. Nonessential motion gated on
`prefers-reduced-motion`.

**Scale/Scope**: One new route group, one evaluator module, one demo client
component and its subcomponents, plus content and navigation updates. Sample
case set stays small enough to read in full on screen.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Assessment |
|-----------|------------|
| I. Truthful, Source-Backed Public Claims | PASS. The demo is real, working code, and FR-008 requires it to state its own boundaries. It claims a release-gate pattern, not a production benchmark or research result. |
| II. Confidentiality and Approval Gates | PASS. Sample cases are synthetic and contain no client, employer, private, or personal data. No new approval-gated claim is introduced. |
| III. Static-Export Compatibility | PASS. Client-side-only computation inside the existing App Router export. FR-012 makes export, trailing slash, image, sitemap, and deployment behavior a hard constraint. |
| IV. User-Facing Quality | PASS. FR-010, FR-011, FR-013, and FR-016 carry keyboard operation, accessible naming, non-color state signalling, 360-1440 responsiveness, no-script degradation, and reduced motion. Visual verification is required on desktop and mobile. |
| V. Verification and Scope Discipline | PASS. FR-017 requires lint and build with a produced static export. Deployment behavior is unchanged, so no additional deployment smoke check is triggered. |

No violations. Complexity Tracking stays empty.

## Project Structure

### Documentation (this feature)

```text
specs/002-interactive-demos/
├── plan.md              # This file
├── spec.md              # Feature specification
├── tasks.md             # Task breakdown
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code (repository root)

```text
app/(site)/
└── demos/
    ├── page.tsx              # Demo index; metadata, listing, intent
    └── eval-gate/
        └── page.tsx          # Route shell: metadata, prose, no-script content

components/demos/
├── eval-gate.tsx             # Client component: state, editing, report retrieval
├── gate-verdict.tsx          # Aggregate score, threshold, pass/fail cause
└── case-result-row.tsx       # Per-case outcome, score, failure reason

lib/eval/
├── types.ts                  # Case, outcome, decision, report shapes
├── evaluate.ts               # Pure deterministic evaluator; no React, no I/O
├── assertions.ts             # Assertion kinds: contains, regex, json-shape, refusal
└── parse.ts                  # JSONL parsing with specific, recoverable errors

content/
├── demos/demos.ts            # Demo registry: title, proves, related case study
└── repos/repos.ts            # Retire planned entries superseded by shipped demos
```

**Structure Decision**: Single project, extending the existing App Router
`(site)` group. The evaluator lives in `lib/eval/` as pure functions with no
React or I/O dependency so its determinism is verifiable in isolation and the
rendering layer stays replaceable. The `components/demos/` directory mirrors the
existing flat `components/` convention one level deeper, since demo components
are not reused by marketing routes.

## Phase 0 - Research

Open questions resolved before design:

1. **Deterministic stand-in shape.** The provider boundary must be swappable
   without implying a live model call. Resolution: a pure function mapping a
   case input to a fixed response, selected by case id, so the swap point is
   visible in the code and the output never varies.
2. **Assertion coverage.** Enough kinds to be credible, few enough to read.
   Resolution: substring containment, regular expression, JSON shape
   conformance, and expected-refusal. These cover the four failure modes a
   reviewer expects and each maps to a real production check.
3. **Editing surface.** A full code editor is disproportionate and would add a
   dependency. Resolution: a plain textarea over JSONL with parse errors
   reported by line, which also demonstrates input validation under FR-007.
4. **Report retrieval.** Anchor-based download is unreliable in some embedded
   contexts. Resolution: render the report inline in a copyable block and
   attempt a download as an enhancement, so FR-004 holds either way.

## Phase 1 - Design

- `lib/eval/` exposes `parseCases`, `evaluate`, and `buildReport` as pure
  functions over plain data. No React import, no `window` access, no clock or
  randomness. Run metadata uses a caller-supplied value rather than `Date.now()`
  so SC-003 byte-identical reports hold.
- The route shell is a server component carrying metadata and the explanatory
  and boundary prose, satisfying FR-013 without scripting. The interactive
  region is a single client component beneath it.
- The demo mounts with the sample case set already evaluated, satisfying FR-001
  and avoiding an empty first paint.
- Threshold is a labelled range input with a live text value, so the state is
  readable without relying on the slider position.
- Pass and fail states carry a text label and an icon in addition to color,
  satisfying the non-color requirement in FR-010.
- Parse and validation failures render as a list of specific problems above the
  results, leaving the last good result visible so the demo stays operable per
  FR-007.

## Phase 2 - Verification

- `npm run lint` clean.
- `npm run build` green with the static export produced and the new routes
  present in the route table.
- Keyboard-only traversal of every demo control with visible focus.
- 360 and 1440 pixel captures with no page-level horizontal overflow.
- Reduced-motion check.
- Determinism check: identical inputs produce identical reports across reload.
- Network panel shows zero requests during evaluation.

## Complexity Tracking

> No Constitution Check violations. Section intentionally empty.
