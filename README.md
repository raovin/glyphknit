# GlyphKnit

Engineering contracting site for GlyphKnit Solutions LLC, with selected projects, a working release-gate demo, and Vin Rao’s public résumé.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Spec Kit Workflow

Use Spec Kit for medium or large product changes. Trivial copy or styling fixes
may be made directly when they do not change behavior, data, routes, export or
deployment behavior, or architecture.

Codex skill sequence: `$speckit-constitution`, `$speckit-specify`,
`$speckit-clarify` when requirements are ambiguous, `$speckit-plan`,
`$speckit-tasks`, then `$speckit-implement`.

Project rules live in `.specify/memory/constitution.md`.

Local dev server:

```bash
http://localhost:3000
```

## Content Sources

Use the [logo exploration brief](prompts/logo-exploration.md) for identity studies. Run the [case extraction prompt](prompts/extract-project-cases.md) inside the private source workspace and bring back only the public-safe block. See the [positioning guide](docs/positioning.md) for editorial decisions.

- Résumé facts and project claims come from personal résumés, attributable project records and Vin’s own account. Keep the source documents outside this repository.
- Describe a team contribution at the level Vin can confirm. Use public company materials for business context and never infer his duties from a product feature.
- Private infrastructure, raw data, logs, secrets, and local generated output are excluded.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`.

The workflow runs `npm ci`, `npm run lint`, `npm run build`, uploads `out/`
to the deployment host, backs up the current live tree, and syncs to the configured site directory.

Required GitHub Actions secrets:

- `GLYPHKNIT_DEPLOY_HOST`
- `GLYPHKNIT_DEPLOY_USER`
- `GLYPHKNIT_DEPLOY_PATH`
- `GLYPHKNIT_DEPLOY_SSH_KEY`
- `GLYPHKNIT_DEPLOY_KNOWN_HOSTS`

Optional build-time SEO and analytics GitHub repository variables:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SRC`
