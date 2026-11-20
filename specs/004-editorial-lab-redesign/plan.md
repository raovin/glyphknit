# Plan

Keep the App Router static export, typed content, demo logic, contact draft logic and every route. Replace the two competing styling systems (Tailwind arbitrary values plus `home.module.css`) with one: CSS custom properties registered through a Tailwind v4 `@theme` block, a small `@layer components` vocabulary in `app/globals.css`, and Tailwind utilities for layout. Delete `home.module.css` once no page imports it.

Split `app/(site)` into `app/(editorial)` and `app/(lab)` route groups. Group names do not affect URLs. Each group layout wraps its pages in an element with `data-surface`. Tokens are defined for editorial light, editorial dark, lab dark and lab light; `:root:has([data-surface="lab"])` lets the page background and overscroll follow the surface. Existing token names (`--background`, `--surface`, `--line`, `--text`, `--muted`, `--faint`, `--paper`, `--accent`, `--accent-strong`, `--accent-ink`, `--danger`) stay as the contract, so the demos and contact form restyle with few class changes.

An inline script in the root layout reads the saved theme and sets `data-theme` before paint. A small client module owns reading, writing and broadcasting the choice; the nav's theme control uses it.

Type: Instrument Serif for editorial display text only, Geist for text, Geist Mono for labels and figures, loaded with `next/font/local` from the `geist` and `@fontsource/instrument-serif` packages. Lab headings use Geist.

Motion uses `motion` (pinned). Hero entrance is CSS so it runs without JavaScript. Below-the-fold reveals, figure bars, the case-study reading indicator, the shared nav indicator, the mobile menu and the case filter use `motion`. `MotionConfig reducedMotion="user"` and the global reduced-motion rule both apply.

Replace the generic card grids with editorial rows, numbered section heads and numbered figures. Retire components that become unused (`section`, `impact-list`, `stack-bar`, `code-block`, `theme-toggle`, `lib/content.ts`) and the inert `.mdx` files.

Update `themeColor` and the manifest colors to the new paper and ink values. The resume content does not change, so `public/resume.pdf` does not need regenerating.

Verify `npm run lint`, `npm run build`, the export's `index.html`, `contact/index.html`, `404.html` and `sitemap.xml`, internal links, keyboard traversal, no-JS rendering, reduced motion, and 360 and 1440 captures of each surface in both themes.
