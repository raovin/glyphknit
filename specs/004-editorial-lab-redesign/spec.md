# Editorial and lab redesign

Rebuild the site's visual system, page layouts, navigation and motion around two committed surfaces. Editorial pages read like a well-set technical journal: a serif display face over a grotesk body, hairline rules, numbered sections and figures. Lab pages (demos and source code) read like an instrument panel: off-black surfaces, monospace labels, tabular readouts. The switch happens per route, never mid-page. Teal remains the single accent. The amber palette in the archived design notes stays retired.

## Surfaces

Editorial covers home, work, case studies, services, about, resume, contact, writing and the 404 page. Lab covers `/demos/`, both demo pages and `/code/`. A framed lab panel may appear inside an editorial page as a figure or doorway, but no full-bleed band changes surface mid-page.

## Theme

A saved theme choice always wins on every route. With no saved choice, editorial pages follow the system preference and lab pages render dark. Visitors can choose Auto, Light or Dark, and the choice persists when storage is available. The page is usable when storage is unavailable. The chosen theme is applied before first paint, without a flash of the other theme. This refines 001 FR-007 for lab routes only.

## Navigation and IA

Primary navigation is Work, Services, Lab and About, plus one "Start a project" action. Services labels `/work-with-me/`; Lab labels `/demos/`. Every existing public URL keeps working with its content, including `/code/`, `/resume/` and `/writing/`. The current section is marked visually and with `aria-current`. Small screens get a single disclosure menu instead of a second link row. Internal links use trailing slashes.

The homepage leads with selected work. Its first screen states the specialty, that GlyphKnit takes on scoped projects, a path to the evidence and a contact path. It then explains how checks are staged, a quality principle, the lab, and closes with contact. The case index stays organized by project and can be filtered by origin; every case stays visible without JavaScript. Each case study keeps its one-click inquiry and its provenance label.

## Content rules

No new claims. Copy may be tightened or rearranged, but every metric, client description and outcome must come from `content/` or existing page copy. Origin labels, synthetic-data labels and evidence notes stay attached to their figures and cases.

## Motion

Motion supports reading and is never required to see content. All content is visible without JavaScript and in a screenshot taken after load. Reveals apply only to content that starts below the fold. Nonessential motion stops under `prefers-reduced-motion`, and no state is signalled by motion alone.

## Quality bar

Fonts are self-hosted from npm packages; no live third-party font or asset requests. Pages stay readable and free of horizontal overflow from 360 to 1440 CSS pixels in both themes and on both surfaces. Body text meets WCAG AA contrast. Focus is always visible. The static export, trailing slashes, sitemap, metadata and deployment checks continue to work unchanged.
