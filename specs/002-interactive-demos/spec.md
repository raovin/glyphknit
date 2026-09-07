# Feature Specification: Interactive evidence demos

**Feature Branch**: `main`

**Created**: 2026-09-05

**Status**: Draft

**Input**: User description: "Start building the portfolio so employers get to see what I'm capable of building. Maybe some demos too would be helpful."

## Context

The current public site presents evidence entirely as prose. Every capability
claim resolves to a written case study, a private repository, or a card marked
as planned work. A visitor cannot operate, inspect, or verify anything the site
claims. Five of eleven code cards describe work that does not exist yet, which
weakens the credibility of the cards that describe work that does.

This feature introduces runnable, in-browser demonstrations hosted on the site
itself, beginning with a model-output evaluation gate. The demo is both the
evidence and the artifact: the visitor exercises a working release gate, and the
application code behind it is itself a work sample.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Verify capability by operating it (Priority: P1)

A hiring manager or engineering lead can run a working evaluation gate in the
browser, change its inputs, observe how the pass/fail decision responds, and
retrieve the resulting report without installing anything or cloning a
repository.

**Why this priority**: This is the entire premise of the feature. A demo that a
visitor cannot operate within seconds provides no more evidence than the prose
it replaces.

**Independent Test**: Give a first-time visitor the demo route and ask them to
make the gate fail, then make it pass, then obtain the report, using only the
page.

**Acceptance Scenarios**:

1. **Given** a visitor opens the demo route, **When** the page finishes loading,
   **Then** a populated set of evaluation cases and a computed gate result are
   already visible without the visitor supplying any input.
2. **Given** a visitor edits an evaluation case, **When** the change is applied,
   **Then** the per-case result, the aggregate score, and the gate decision
   update to reflect it.
3. **Given** a visitor adjusts the pass threshold, **When** the threshold crosses
   the current aggregate score, **Then** the gate decision changes and the
   reason for the change is visible.
4. **Given** a visitor has produced a gate result, **When** they request the
   report, **Then** they receive a structured report containing the cases,
   per-case outcomes, threshold, aggregate score, and decision.
5. **Given** a visitor supplies malformed case input, **When** the demo
   evaluates it, **Then** the page reports the specific problem and remains
   operable rather than failing silently or breaking the view.

---

### User Story 2 - Understand what the demo proves (Priority: P2)

A visitor who has run the demo can explain what engineering capability it
evidences and how it relates to the work described elsewhere on the site.

**Why this priority**: An interactive toy that a visitor cannot connect to a
hiring decision converts curiosity into nothing.

**Independent Test**: After a visitor runs the demo, ask them to state which
role the demo supports and which case study it corresponds to.

**Acceptance Scenarios**:

1. **Given** a visitor completes a demo run, **When** they read the surrounding
   page, **Then** they can identify the engineering pattern being demonstrated
   and why it matters for a release decision.
2. **Given** a visitor wants deeper evidence, **When** they look for a next
   step, **Then** the demo links to the related case study and to a contact
   path.
3. **Given** a visitor arrives at the demo from a code or work card, **When**
   they finish, **Then** they can return to the originating context without
   using browser history.

---

### User Story 3 - Trust the demo's honesty (Priority: P3)

A technically skilled visitor can determine what the demo actually does, what it
simulates, and what it does not claim, without being misled about the scope of
the underlying capability.

**Why this priority**: An evaluation demo that implies a production model
benchmark, a live provider, or validated research would breach the project's
truthfulness principle and would be transparently thin to the exact audience it
targets.

**Independent Test**: Ask a senior engineer to identify what is real
computation, what is simulated, and whether any claim overstates the artifact.

**Acceptance Scenarios**:

1. **Given** a visitor inspects the demo, **When** they look for its boundaries,
   **Then** the page states plainly that scoring runs locally against a
   deterministic stand-in rather than a live model provider.
2. **Given** a visitor evaluates the demo's claims, **When** they compare them to
   the site's other evidence, **Then** no claim presents the demo as production
   scale, a research result, or client work.
3. **Given** a demo run produces a result, **When** the visitor repeats the same
   inputs, **Then** the result is identical.

### Edge Cases

- A visitor arrives directly at the demo route rather than through the site.
- A visitor operates the demo entirely by keyboard, or with a screen reader.
- A visitor has scripting disabled or the demo bundle fails to load.
- A visitor pastes a very large, deeply nested, or non-text case payload.
- A visitor supplies input containing markup or control characters.
- A visitor requests a report before any successful evaluation exists.
- A visitor uses the demo at 360 CSS pixels wide.
- A visitor prefers reduced motion while results animate between states.
- A visitor's storage is unavailable when the demo attempts to retain state.
- A demo run produces an empty case set, an all-pass set, or an all-fail set.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The demo MUST render a working, pre-populated evaluation run on
  first paint, with no visitor input required to see a complete result.
- **FR-002**: The demo MUST allow the visitor to modify evaluation cases and MUST
  recompute per-case outcomes, the aggregate score, and the gate decision from
  the modified input.
- **FR-003**: The demo MUST allow the visitor to adjust the pass threshold and
  MUST make the resulting change in the gate decision observable.
- **FR-004**: The demo MUST produce a structured, retrievable report containing
  the evaluated cases, per-case outcomes, the threshold, the aggregate score,
  and the gate decision.
- **FR-005**: Evaluation MUST be deterministic: identical inputs MUST produce
  identical outputs across runs, reloads, and visitors.
- **FR-006**: All computation MUST occur in the visitor's browser, with no
  network request to a model provider, analytics-independent execution, and no
  transmission of visitor-supplied input off the page.
- **FR-007**: The demo MUST validate visitor-supplied input and MUST report
  specific, actionable problems without entering an unrecoverable state.
- **FR-008**: The demo MUST state its own boundaries, identifying deterministic
  local scoring as a stand-in for a live provider, and MUST NOT present itself as
  a production benchmark, research result, or client deliverable.
- **FR-009**: The demo MUST explain the engineering pattern it evidences and MUST
  link to the related case study and a contact path.
- **FR-010**: Every demo control MUST be operable by keyboard, MUST expose an
  accessible name, and MUST communicate state changes through means other than
  color or motion alone.
- **FR-011**: The demo MUST remain readable and usable from 360 through 1440 CSS
  pixels without page-level horizontal overflow.
- **FR-012**: The demo route MUST preserve the existing static export, trailing
  slash behavior, unoptimized-image constraint, sitemap, and deployment
  assumptions.
- **FR-013**: The demo MUST degrade to meaningful explanatory content when
  scripting is unavailable, rather than presenting an empty or broken region.
- **FR-014**: Code and repository cards representing work that does not exist
  MUST NOT be presented alongside completed evidence in a manner that implies
  equivalent status; shipped demos MUST replace the corresponding planned
  entries.
- **FR-015**: The demo MUST be discoverable from the site's primary navigation
  and from the code and work surfaces that reference the same capability.
- **FR-016**: Nonessential animation in the demo MUST respect the visitor's
  reduced-motion preference.
- **FR-017**: Changes MUST pass the project's required quality and
  production-export checks before completion.

### Key Entities

- **Evaluation case**: A named, versioned input with an expected behavior, an
  assertion type, and a weight, supplied as editable structured text.
- **Case outcome**: The per-case score, pass or fail state, and the reason the
  assertion produced that state.
- **Gate decision**: The aggregate score compared against the pass threshold,
  yielding a release pass or fail with a stated cause.
- **Gate report**: The retrievable structured record of a single run, containing
  its cases, outcomes, threshold, aggregate, decision, and run metadata.
- **Demo boundary statement**: The plain declaration of what the artifact
  computes, what it stands in for, and what it does not claim.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can make the gate fail, make it pass, and
  retrieve a report within 60 seconds using only the demo page.
- **SC-002**: A complete evaluation result is visible on first paint with zero
  visitor input.
- **SC-003**: Identical inputs produce byte-identical reports across repeated
  runs and reloads.
- **SC-004**: Zero network requests leave the page during evaluation.
- **SC-005**: Every demo control is reachable and operable by keyboard, with a
  visible focus indicator and an accessible name.
- **SC-006**: Representative 360-pixel and 1440-pixel captures show zero
  page-level horizontal overflow, clipped controls, or overlapping content.
- **SC-007**: Malformed, oversized, and empty inputs each produce a specific
  reported problem with the demo remaining operable.
- **SC-008**: Zero public cards present nonexistent work as completed evidence.
- **SC-009**: Required quality checks and production-export verification complete
  with zero errors.

## Assumptions

- The primary audiences remain hiring managers, recruiters, engineering leaders,
  and potential consulting clients.
- The existing routes, static hosting model, and visual system remain in scope;
  a framework, backend, or deployment migration does not.
- The evaluation demo stands in for a model provider deterministically. Adding a
  live provider, paid API, secret, or network dependency is out of scope.
- Sample evaluation cases are illustrative and contain no client, employer,
  private, or personal data.
- Additional demos beyond the evaluation gate are anticipated but are not part of
  this feature's committed scope.
- Retiring planned cards is limited to entries superseded by shipped demos or
  entries whose promised work is not scheduled; unrelated content stays intact.
