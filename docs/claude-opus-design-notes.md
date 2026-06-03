# GlyphKnit Solutions — Design Notes (Claude / Opus lane)

Design direction, system tokens, and the copy Codex should steal for the production site.
Prototype lives at `prototypes/claude-opus-aesthetic/index.html`.

---

## 1. Recommended visual direction

**Engineering atelier, not SaaS template.**

The cheap, generic version of this site is a centered hero, a purple gradient, three
icon-cards, and the word "transformation." We deliberately avoid all of it.

The direction is **warm-ink technical**: near-black background, a single restrained
copper/amber accent, and a monospace "voice" used for labels, section indices, the hero
terminal card, and metrics. The mono motif does double duty — it nods to the GlyphKnit name
(glyphs, knitting, grids, type) and it signals to a technical buyer that this person actually
writes code, not just decks.

Core principles:

- **One accent, used with discipline.** Copper/amber (`#e0a35e`) earns attention because it
  appears rarely — accents, hovers, key numbers. A cool cyan (`#7fb6c4`) shows up once or twice
  for contrast (cloud names).
- **Hairline grids over boxes-with-shadows.** Sections use thin dividers and numbered indices
  (`01 / SERVICES`). It reads like a well-kept engineering doc.
- **Hover rewards, never hides.** All content is visible on load (screenshot-safe). Hover adds
  an underline-grow, a lift, a background shift — polish, not gating.
- **Numbers carry the credibility.** Every claim that can be a metric is a metric.

This is intentionally distinct from whatever Codex builds in the root — think of it as the
"premium" reference Codex can converge toward, or a drop-in if Vin prefers it.

---

## 2. Typography / color / spacing tokens

All tokens are CSS custom properties at the top of `index.html` (`:root`). Lift them wholesale.

### Type
- **Sans (body / headings):** system stack — `-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif`. Zero font downloads, looks native and crisp.
- **Mono (labels, indices, metrics, terminal card):** `ui-monospace, "SF Mono", Menlo,
  Consolas, monospace`.
- Headings: weight 600, tight tracking (`letter-spacing: -0.02em` to `-0.035em` on the hero).
- Eyebrows / labels: mono, uppercase, `letter-spacing: 0.16–0.22em`, amber.
- If Vin wants a self-hosted display face later: a tight grotesk (e.g. self-hosted
  *Söhne*, *Geist*, or *Inter Tight*) for headings only. **Self-host the `.woff2`** — the
  brief forbids CDN fonts. System stack is the safe default and already looks good.

### Color
| Token | Hex | Use |
|-------|-----|-----|
| `--ink-900` | `#0a0b0d` | page background |
| `--ink-850 / 800 / 700` | `#0f1115` → `#1b1f26` | card / panel layers |
| `--line` | `#2a2f39` | borders |
| `--line-soft` | `rgba(255,255,255,.06)` | hairline dividers |
| `--paper` | `#f4f1ea` | headings (warm white, not pure `#fff`) |
| `--text` | `#d9d6ce` | body |
| `--muted` / `--faint` | `#9a9690` / `#6c6862` | secondary / tertiary |
| `--amber` | `#e0a35e` | the accent |
| `--cyan` | `#7fb6c4` | rare secondary (cloud) |

Warm white (`#f4f1ea`) over pure white is deliberate — it pairs with the copper and keeps the
whole thing from feeling clinical.

### Spacing
- Container: `max-width: 1180px`, fluid gutter `clamp(20px, 5vw, 64px)`.
- Section rhythm: `padding-block: clamp(64px, 9vw, 120px)`.
- Fluid type via `clamp()` everywhere — scales cleanly 360px → wide desktop.

---

## 3. Copy blocks Codex should steal

These are written to the brief's voice (blunt, specific, credible). Reuse verbatim or trim.

**Hero headline**
> I ship the thing. The tools, pipelines, and glue your roadmap is waiting on.

**Hero subhead**
> I'm Vin Rao — a freelance software developer and forward-deployed engineer. I embed with
> your team, find what's actually slowing delivery, and build the internal tools, automation,
> cloud integrations, and test infrastructure that move it. Nine years in the trenches,
> AI-assisted where it earns its keep.

**Section eyebrow pattern:** `01 / SERVICES`, `02 / SELECTED ENGAGEMENTS`, `03 / OPERATING
MODEL`, `04 / TECHNICAL STACK`, `05 / TRACK RECORD`.

**Services (one-liners)**
- Internal tools & automation — "The dashboards, scripts, and glue your team keeps doing by hand. Built once, documented, handed over."
- QA-to-engineering bridge — "I speak both. Turn flaky manual testing into real test infrastructure with CI/CD quality gates that fail fast."
- Cloud & API integrations — "REST and microservice integrations validated across AWS and Azure — auth flows, access controls, data paths."
- AI-assisted delivery — "LLMs wired into real workflows. Used where it cuts time, not for show."
- Test infrastructure — "E2E and API suites from scratch on Linux/AWS — parallelized, containerized, wired into the pipeline."
- Data validation & backend support — "Ingestion checks, integrity validation, and backend glue before bad data ships."

**Engagement model names:** Embedded sprint (forward-deployed build) · Build & hand-off
(scoped delivery) · Fractional (ongoing engineering) · Audit & roadmap (diagnose, then plan).
Tagline: *"You get working software, docs, and a clean hand-off — not a dependency on me."*

**Receipts / metrics** (all sourced from resume material):
- `80%` manual testing effort eliminated — multi-tenant financial data platform
- `3h → 25m` CI feedback compression
- `200+` Postman API collections (payment-data endpoints, Newman-automated)
- `15h/wk` manual ops removed via Azure provisioning scripts
- `~60%` test-authoring time cut via Claude/GPT-4

**CTA**
> Tell me the bottleneck. If I can build it, you'll get a straight answer on scope and timing —
> usually within a day. If I'm not the right fit, I'll tell you that too.

---

## 4. What needs Vin's approval (do not ship without sign-off)

1. **Naming clients.** The prototype softens to "connected-device platform (engagement via
   emagine Consulting)" and "global beverage brand" rather than printing *Philip Morris
   International* and *Carlsberg* on a marketing site. Naming PMI especially may be a
   reputational call. **Decision needed:** name them, soften them (current), or drop names entirely.
2. **The consulting framing of 2024–2025 emagine roles.** The resume lists these as
   employment via emagine Consulting. The brief says treat post-Nov-2022 as consulting/project
   work. The prototype frames them as "Consulting · embedded" engagements under the GlyphKnit
   umbrella. Vin must be comfortable representing it this way to clients.
3. **Contact details.** Email `3vineeth@gmail.com` and `github.com/raovin` are from the resume.
   `linkedin.rao.vin` is the resume's vanity string and currently links to `#` — confirm the
   real LinkedIn URL. Resume also lists phone `+1 438-738-0933`; intentionally **omitted** from
   the prototype (public site) — add back only if Vin wants it.
4. **"Open for work" status badge.** Fine while job-hunting; may want to drop once booked.
5. **Metric attribution.** Numbers are real but tied to specific past employers — confirm
   they're comfortable presented under the freelance banner.
6. **Entity suffix.** "GlyphKnit Solutions LLC" vs "Solutions" — match the actual registration.

---

## 5. How to merge with Codex's plumbing

This lane produced **static HTML/CSS only** — no JS framework, no build step — so merging is
low-friction whatever Codex chose.

**If Codex went plain HTML/CSS/JS:**
- Port the `:root` token block (§2) into Codex's stylesheet first. Everything else keys off it.
- Lift sections as needed; markup is semantic (`<section>`, `<article>`, `<header>`, `<footer>`)
  and class names are namespaced enough to drop in without collisions.
- The hero "terminal" card and the numbered section-index pattern are the two highest-signal
  visual moves — port those even if nothing else.

**If Codex used a framework / component model:**
- Treat this file as the **design reference**, not source. Map sections to components:
  `Hero`, `ServicesGrid` (6 cards), `EngagementTimeline` (3 cards), `OperatingModel` (4 cards),
  `StackGrid` (6 columns), `ProofMetrics`, `CTA`, `Footer`.
- Keep the token names — they translate cleanly to a theme object / CSS vars / Tailwind config.

**Conflict avoidance (per the brief):**
- This lane does **not** edit root `index.html`, `package.json`, or Codex's implementation
  files. All output is under `prototypes/claude-opus-aesthetic/` and this doc.
- If Vin picks this design, the clean path is: Codex keeps the plumbing (routing, forms,
  meta/SEO, analytics, deploy) and adopts these tokens + copy + section structure into the
  production templates. Don't hand-merge two full HTML files — port tokens, then sections.

**Shared sources of truth** both lanes drew from:
`canvas/variants/default/ats_resume.txt` (primary) and `overleaf/folio/resumes/*.tex`
(richer metric wording: the `3h→25m`, `70%`, and `15h/wk` figures).
