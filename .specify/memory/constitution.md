# GlyphKnit Constitution

## Core Principles

### I. Truthful, Source-Backed Public Claims

All public claims MUST be supported by an approved repository source or an
explicitly approved source record. The site MUST NOT invent metrics, clients,
credentials, capabilities, outcomes, or other evidence of experience.

### II. Confidentiality and Approval Gates

Client and employer details MUST be anonymized unless explicit approval permits
their public use. Private infrastructure, private data, logs, secrets, and
unapproved local or generated output MUST remain out of the public site and its
tracked workflow artifacts. The sanctioned `out/` static export remains a
deployment artifact under Principle III, not a source for public claims. When
approval is required, implementation MUST wait for that approval or use an
anonymized alternative.

### III. Static-Export Compatibility

Changes MUST retain the Next.js App Router static export, trailing slash
behavior, unoptimized-image constraint, sitemap and metadata behavior, and
current deployment assumptions unless a specification explicitly authorizes a
migration. The existing `out/` export and deployment workflow remain the
compatibility contract.

### IV. User-Facing Quality

User-facing changes MUST provide semantic, accessible UI with keyboard
usability and responsive layouts. Text and controls MUST remain readable and
free of incoherent overlap at supported viewport sizes. Meaningful UI changes
MUST include visual verification on representative desktop and mobile views.

### V. Verification and Scope Discipline

Changes MUST stay focused on the approved scope, and verification MUST be
proportional to risk. Before completion, `npm run lint` and `npm run build`
MUST pass and the build MUST produce the static export. Changes to deployment
behavior MUST also include the relevant deployment and smoke checks.

## Development Workflow

Medium and large product changes MUST use Spec Kit artifacts and the
spec-driven workflow. The normal Codex sequence is `$speckit-constitution`,
`$speckit-specify`, `$speckit-clarify` when requirements are ambiguous,
`$speckit-plan`, `$speckit-tasks`, and `$speckit-implement`. A change limited to
trivial copy or styling MAY be made directly when it does not alter behavior,
data, routes, export or deployment behavior, or architecture. Direct changes
remain subject to the verification and quality principles above.

## Governance

This constitution governs Spec Kit artifacts and implementation decisions for
GlyphKnit. Every medium or large change MUST be checked against it during
specification, planning, implementation, and review.

Amendments require a written rationale, a semantic version bump, and an updated
ratification or last-amended date. When an amendment changes workflows or
templates, the same change MUST include migration notes and update the affected
guidance or templates. The constitution takes precedence over conflicting
workflow guidance until an amendment is ratified.

**Version**: 1.0.0 | **Ratified**: 2026-08-23 | **Last Amended**: 2026-08-23
