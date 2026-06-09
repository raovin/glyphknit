export type RepoPriority = "high" | "medium" | "low";

export type Repo = {
  slug: string;
  name: string;
  description: string;
  proves: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  badges: string[];
  priority: RepoPriority;
  featured: boolean;
  status?: "public" | "private" | "planned" | "local";
};

export const repos: Repo[] = [
  {
    slug: "mlops-artifact",
    name: "mlops-artifact",
    description:
      "Offline model/API evaluation harness with versioned cases, provider boundary, deterministic checks, readiness thresholds, and JSON evidence.",
    proves:
      "MLOps quality gate design, testable model behavior, structured output validation, and CI-friendly reporting.",
    stack: ["Python", "unittest", "JSONL", "GitHub Actions", "Make"],
    reportUrl: "/work/mlops-readiness-scaffold",
    badges: ["flagship", "offline", "CI gate"],
    priority: "high",
    featured: true,
    status: "local"
  },
  {
    slug: "glyphknit",
    name: "glyphknit",
    description:
      "Static Next.js portfolio deployed behind Nginx Proxy Manager with HTTPS, route-level metadata, sitemap, and resume-backed case studies.",
    proves:
      "Public source for the portfolio itself: static export, responsive UI, SEO metadata, deployment automation, and production hosting hygiene.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "Nginx"],
    repoUrl: "https://github.com/raovin/glyphknit",
    demoUrl: "https://glyphknit.com",
    badges: ["public source", "static export", "HTTPS"],
    priority: "high",
    featured: true,
    status: "public"
  },
  {
    slug: "health-dashboard",
    name: "health-dashboard",
    description:
      "Authenticated Next.js app for lab results, wearable data, custom ranges, scoring states, and CSV/JSON exports.",
    proves:
      "Full-stack application code with database modeling, auth, data validation, tests, and Playwright smoke coverage.",
    stack: ["Next.js", "TypeScript", "Postgres", "Drizzle", "Vitest", "Playwright"],
    reportUrl: "/work/health-dashboard",
    badges: ["full-stack", "tested", "data"],
    priority: "high",
    featured: true,
    status: "private"
  },
  {
    slug: "paperwake",
    name: "paperwake",
    description:
      "Document archive migration project with Paperless-ngx, Docker services, encrypted-backup planning, and migration runbooks.",
    proves:
      "Infrastructure documentation, data portability, privacy boundaries, and recoverable system design.",
    stack: ["Docker", "Paperless-ngx", "Postgres", "Redis", "Caddy", "BorgBackup"],
    reportUrl: "/work/paperwake",
    badges: ["infra", "runbooks", "privacy"],
    priority: "medium",
    featured: false,
    status: "private"
  },
  {
    slug: "canvas",
    name: "canvas",
    description:
      "LaTeX resume source with variants, archive verification, generated PDFs, and targeted ATS text outputs.",
    proves:
      "Document build automation, variant management, verification scripts, and clean generated-artifact hygiene.",
    stack: ["LaTeX", "LuaLaTeX", "Python", "Make", "Shell"],
    reportUrl: "/resume",
    badges: ["automation", "docs"],
    priority: "medium",
    featured: false,
    status: "private"
  },
  {
    slug: "folio",
    name: "folio",
    description:
      "Resume and cover-letter source repo with a GitHub Actions workflow that builds market-specific PDFs.",
    proves:
      "CI-backed document generation and source-controlled professional artifacts.",
    stack: ["LaTeX", "GitHub Actions", "Shell"],
    reportUrl: "/resume",
    badges: ["CI", "LaTeX"],
    priority: "medium",
    featured: false,
    status: "private"
  },
  {
    slug: "web-e2e-framework",
    name: "web-e2e-framework",
    description:
      "Planned Playwright framework demo for page objects, fixtures, CI reports, retries, and stable selectors.",
    proves: "Planned public demo for senior web E2E automation patterns.",
    stack: ["Playwright", "TypeScript", "GitHub Actions"],
    badges: ["planned", "web E2E"],
    priority: "high",
    featured: false,
    status: "planned"
  },
  {
    slug: "api-test-framework",
    name: "api-test-framework",
    description:
      "Planned Python API testing framework demo for schema checks, auth flows, data setup, and contract assertions.",
    proves: "Planned public demo for API testing and service validation.",
    stack: ["Python", "pytest", "HTTPX", "JSON Schema"],
    badges: ["planned", "API"],
    priority: "high",
    featured: false,
    status: "planned"
  },
  {
    slug: "ml-quality-gate",
    name: "ml-quality-gate",
    description:
      "Planned flagship quality gate for model/API outputs with data validation, service checks, experiment evidence, and CI thresholds.",
    proves:
      "Planned expansion of the current MLOps readiness scaffold into a richer public ML-quality demo.",
    stack: ["Python", "pytest", "Pandera", "Great Expectations", "FastAPI", "MLflow"],
    badges: ["planned", "flagship", "ML quality"],
    priority: "high",
    featured: false,
    status: "planned"
  },
  {
    slug: "flaky-test-lab",
    name: "flaky-test-lab",
    description:
      "Planned lab for reproducing timing, isolation, and selector flake, then showing diagnosis and stabilization patterns.",
    proves: "Planned public demo for debugging unreliable automation.",
    stack: ["Playwright", "TypeScript", "CI reports"],
    badges: ["planned", "flake analysis"],
    priority: "medium",
    featured: false,
    status: "planned"
  },
  {
    slug: "ci-quality-pipeline",
    name: "ci-quality-pipeline",
    description:
      "Planned CI quality pipeline demo showing layered checks, artifacts, thresholds, and readable release evidence.",
    proves: "Planned public demo for CI/CD testing and release gates.",
    stack: ["GitHub Actions", "Docker", "pytest", "Playwright"],
    badges: ["planned", "CI/CD"],
    priority: "medium",
    featured: false,
    status: "planned"
  }
];

export const featuredRepos = repos.filter((repo) => repo.featured);
