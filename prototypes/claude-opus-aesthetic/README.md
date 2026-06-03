# GlyphKnit Solutions — Aesthetic Prototype (Claude / Opus lane)

A polished, standalone visual prototype for the GlyphKnit Solutions site, positioning
Vin Rao as a freelance software developer / forward-deployed engineer.

This is the **design lane**. Codex owns the production site plumbing in the repo root.
Nothing here touches root `index.html`, `package.json`, or Codex's implementation files.

## Preview

It's a single self-contained HTML file. No build, no dependencies, no network.

```bash
# Option A — just open it
open prototypes/claude-opus-aesthetic/index.html

# Option B — serve it (nicer for screenshots / sharing on LAN)
cd prototypes/claude-opus-aesthetic
python3 -m http.server 4173
# then visit http://localhost:4173
```

Tested to render with no console errors and no external requests. Everything
(fonts, icons, layout, color) is inline.

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | Full standalone prototype — HTML + CSS in one file |
| `README.md`  | This file |

Design rationale and the copy blocks Codex should reuse live in
`../../docs/claude-opus-design-notes.md`.

## Design intent (short version)

- **Feel:** premium, technical, founder-friendly. An engineering atelier, not a SaaS template.
- **Identity:** warm copper/amber accent on near-black ink, system-font sans paired with a
  monospace voice for labels, indices, and the hero "terminal" card. The mono motif nods to
  the GlyphKnit name (type / weave / grid) and signals "this person actually writes code."
- **Layout:** hairline-grid sections with numbered indices (`01 / SERVICES`), generous
  whitespace, hover states that reward exploration but never hide content (screenshot-safe).
- **Voice:** blunt and specific. "I ship the thing." Outcomes with numbers, no transformation fluff.

## Sections

1. **Hero** — positioning headline + credibility "terminal" card + 4-stat strip
2. **What I ship** — 6-card services grid (tools, QA→eng bridge, cloud/API, AI, test infra, data)
3. **Project work since 2023** — three post-Nov-2022 consulting/independent engagement cards
4. **Operating model** — four engagement types (embedded sprint, build & hand-off, fractional, audit)
5. **Technical stack** — six grouped columns of production-shipped tools
6. **Receipts** — metric tiles + earlier QA/SDET background as credibility
7. **CTA / contact** — email + GitHub + LinkedIn, all from resume source

## Constraints honored

- No external network assets, no CDN fonts, no package installs.
- No secrets / `.env` / tokens read. No deploy, commit, or push.
- Contact details pulled only from the resume source; nothing invented
  (LinkedIn `linkedin.rao.vin` is the resume's vanity string — see design notes,
  flagged as needs-approval).

## Responsive

Breakpoints at ~880px (hero stacks), ~820px / ~720px / ~540px (grids collapse to 2-up then
1-up). Looks intentional from 360px phones to wide desktop. Respects
`prefers-reduced-motion`.
