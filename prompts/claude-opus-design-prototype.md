You are Claude Code working as the design/aesthetics lane for Vin's GlyphKnit Solutions website.

Important division of labor:
- Codex is handling the main site plumbing in /Users/vin/projects/glyphknit.
- Your job is visual direction, layout, copy rhythm, aesthetic prototype, and design system.
- Avoid conflicting with Codex: do NOT edit root index.html, package.json, or existing main implementation files unless they are already inside your prototype folder.

Workspace:
- Main project: /Users/vin/projects/glyphknit
- Resume source to read: /Users/vin/projects/canvas/variants/default/ats_resume.txt
- You may compare other resume variants under /Users/vin/projects/canvas/variants/ if useful.

Output only under:
- /Users/vin/projects/glyphknit/prototypes/claude-opus-aesthetic/
- /Users/vin/projects/glyphknit/docs/claude-opus-design-notes.md

Goal:
Create a polished static visual prototype for GlyphKnit Solutions, positioning Vin as a freelance software developer / forward-deployed engineer. The site should feel premium, practical, technical, and founder-friendly. Not generic SaaS boilerplate. Not a QA-only resume page.

Narrative constraints:
- Treat all work after November 2022 as consulting/project work.
- Sell practical engineering outcomes: internal tools, automation, QA-to-engineering bridge, cloud/API integrations, Azure/AWS workflows, AI-assisted delivery, test infrastructure, data validation, backend support.
- Keep earlier QA/SDET background as credibility, not the entire identity.
- Tone: blunt, specific, credible. No hype, no “digital transformation”, no fake enterprise fluff.

Prototype requirements:
1. Create prototypes/claude-opus-aesthetic/index.html with complete standalone HTML/CSS.
2. Create prototypes/claude-opus-aesthetic/README.md with preview instructions and design intent.
3. Create docs/claude-opus-design-notes.md with:
   - recommended visual direction,
   - typography/color/spacing notes,
   - key copy blocks Codex should steal,
   - what needs Vin approval,
   - how to merge with Codex's plumbing implementation.
4. Make the prototype responsive and screenshot-worthy.
5. Include sections:
   - hero with strong positioning,
   - “what I ship” services grid,
   - project-work timeline/cards post-Nov 2022,
   - operating model / engagement types,
   - technical stack,
   - proof / credibility,
   - CTA.
6. Use no external network assets. No CDN fonts. No package installs.
7. Do not read secrets, .env files, tokens, browser sessions, or password stores.
8. Do not deploy, commit, push, or contact external services.

At the end, summarize files created and the top 5 design decisions.
