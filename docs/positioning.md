# GlyphKnit positioning note

**Last updated**: 2026-09-05

Supersedes the May 2026 freelance-agency positioning. That earlier note, the
static `index.html`/`styles.css` build, the `prototypes/claude-opus-aesthetic/`
lane, and the `prompts/` briefs described a different offer and have been
removed. They remain recoverable from git history if the freelance framing is
ever revived.

## Current positioning

The site sells Vin as an **employment candidate first**: Senior SDET / ML
Quality Engineer, open to senior QA/SDET and ML-quality roles, EU-remote.
Contract engagements are secondary and stated as "select contract engagements
considered" rather than led with.

This is a deliberate reversal of the May 2026 direction, which led with a
forward-deployed freelance delivery offer under a services-and-engagement-models
structure. The audience is hiring managers, recruiters, and engineering leaders.
Consulting buyers are a secondary audience served by the same evidence.

## Settled decisions

- **Entity name.** GlyphKnit Solutions LLC is incorporated and registered.
  The suffix is approved for public use. The footer may use either form.
- **Independent work.** The Feb 2023 - Mar 2024 period is real independent
  consulting under the registered entity and is presented as such, not softened
  to "an independent software delivery project."
- **Geography.** Lisbon (WET) and EU-remote are published. Earlier roles carry
  their real locations.
- **Evidence over prose.** Capability claims should resolve to something a
  visitor can operate or inspect. See `specs/002-interactive-demos/`.
- **Cards for work that does not exist.** Not published alongside completed
  evidence. Planned entries are retired as real demos ship.
- **Named clients.** Philip Morris International and Carlsberg are published,
  each shown as an engagement delivered via emagine Consulting. Revelate Corp
  and Audley Travel are published as direct employment. Engagement internals,
  contract terms, and non-public roadmaps stay out regardless.

## Open decisions

- **Brunel.** Not currently represented on the site at all. Add it if there is
  an engagement worth showing.
- **LinkedIn URL.** `linkedin.rao.vin` is published in six places via
  `content/site.ts`. Confirm it resolves to the intended public profile.
- **Phone number.** Omitted from the public site. No change proposed.

## Client naming: applied

Clients are named, with the agency as the employer of record and the client as
context. The accurate and self-protecting framing is "via emagine Consulting,
client: connected-device platform (Philip Morris International)."

Rationale:

- The engineering surface is industry-neutral: device registration,
  authentication, multi-locale flows, CI quality gates.
- Anonymized labels are unverifiable. A recruiter cannot confirm a
  "connected-device platform," and vagueness in a portfolio reads as evasion
  more often than as discretion.
- Contractor-via-agency framing makes it clear this is not a career in tobacco.
- PMI runs a large, well-known technology organization in the Lisbon and Krakow
  markets Vin is targeting. Local recruiters recognize it as a scale signal.

The residual risk is a minority of hiring managers with a tobacco objection.
That risk is better managed per-application on the CV, which is the targeted
instrument, than by making the public portfolio permanently vaguer for every
reader.

## Confidentiality boundaries

Unchanged. Private infrastructure, raw data, logs, secrets, and local generated
output stay out of the public site and its tracked artifacts. Contract terms,
internal architecture, and non-public client roadmaps are not published
regardless of whether the client name is.
