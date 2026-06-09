# GlyphKnit Portfolio

Portfolio site for Vin Rao, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Local dev server:

```bash
http://localhost:3000
```

## Content Sources

- Resume facts and metrics come from `canvas` and `folio`.
- Public project content comes from approved personal repos under `/Users/vin/projects`.
- Private infrastructure, raw data, logs, secrets, and local generated output are excluded.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`.

The workflow runs `npm ci`, `npm run lint`, `npm run build`, uploads `out/`
to Mnemosyne, backs up the current live tree, and syncs into `/opt/glyphknit`.

Required GitHub Actions secrets:

- `GLYPHKNIT_DEPLOY_HOST`
- `GLYPHKNIT_DEPLOY_USER`
- `GLYPHKNIT_DEPLOY_PATH`
- `GLYPHKNIT_DEPLOY_SSH_KEY`
- `GLYPHKNIT_DEPLOY_KNOWN_HOSTS`

Optional build-time SEO and analytics variables:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SRC`
