export type Project = {
  slug: string;
  title: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  constraints: string[];
  approach: string;
  tooling: string[];
  challenges: string;
  impact: string[];
  proves: string;
  recruiterTakeaway: string;
  emTakeaway: string;
  repoUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  images: string[];
  featured: boolean;
  nda: boolean;
};

export const projects: Project[] = [
  {
    slug: "connected-device-test-infrastructure",
    title: "Connected-device Test Infrastructure",
    summary:
      "Playwright and Selenium suites for React/TypeScript device registration, authentication, and multi-locale flows, backed by Jenkins quality gates.",
    context:
      "Resume-backed consultant engagement through emagine Consulting for a connected-device platform. Client naming stays anonymized for public portfolio use.",
    problem:
      "Registration, authentication, and localization flows needed repeatable coverage across modern React/TypeScript surfaces without growing manual test-authoring work.",
    role:
      "Built UI/UX automation suites, expanded coverage with LLM-assisted test generation, and integrated automated checks into Jenkins quality gates.",
    constraints: [
      "Multi-locale behavior had to stay legible to product and engineering teams.",
      "Coverage needed to scale without adding headcount.",
      "Tests had to move defect detection earlier than staging."
    ],
    approach:
      "Combined Playwright and Selenium coverage for critical UI journeys, used AI-assisted case expansion where it saved time, and tied the suites to Jenkins so failures became part of sprint feedback.",
    tooling: ["Playwright", "Selenium", "TypeScript", "Python", "Jenkins", "GitHub Actions"],
    challenges:
      "The useful line was not simply generating more tests. The work was making generated coverage maintainable enough to trust inside delivery pipelines.",
    impact: [
      "Reduced manual test-authoring time by 60%.",
      "Scaled coverage for device registration, authentication, and multi-locale flows without adding headcount.",
      "Moved defect feedback into Jenkins quality gates before stories reached staging."
    ],
    proves:
      "Can turn complex product journeys into maintainable release checks while using AI as a practical accelerator.",
    recruiterTakeaway:
      "Direct match for senior QA automation and SDET roles using Playwright, Selenium, TypeScript, and CI/CD gates.",
    emTakeaway:
      "Shows judgment around where LLM-assisted testing helps and where pipeline reliability still has to be engineered.",
    images: ["/images/glyphknit-system.svg"],
    featured: true,
    nda: true
  },
  {
    slug: "financial-data-quality-platform",
    title: "Financial Data Platform Quality Automation",
    summary:
      "Python, Java, Postman/Newman, MySQL, and Pandas checks for ingestion, data integrity, access control, and payment-data APIs.",
    context:
      "Resume-backed QA Analyst and Support Engineer work on a multi-tenant financial data storage platform.",
    problem:
      "Manual regression and data checks were too slow for a platform handling ingestion, payment-data rules, transformations, and access-control behavior.",
    role:
      "Built test suites, API collections, data validation scripts, and Jenkins automation for regression evidence.",
    constraints: [
      "Financial data checks had to verify accuracy, consistency, and business rules.",
      "API coverage needed to replace a manual regression cycle.",
      "Failures had to point to ingestion, transformation, or access-control causes."
    ],
    approach:
      "Built Python and Java suites for data and access-control validation, created Postman collections for REST endpoints, automated runs with Newman in Jenkins, and used MySQL/Pandas scripts for deeper data verification.",
    tooling: ["Python", "Java", "Postman", "Newman", "Jenkins", "MySQL", "Pandas", "AWS"],
    challenges:
      "The system required API and data checks to work together. A passing endpoint was not enough if transformations or business rules corrupted the output.",
    impact: [
      "Reduced manual testing effort by 80%.",
      "Developed 200+ Postman API collections for payment-data endpoints and business rules.",
      "Compressed Jenkins feedback from 3 hours to 25 minutes through pipeline streamlining and parallel execution."
    ],
    proves:
      "Can validate APIs, data paths, business rules, and CI evidence in one coherent quality system.",
    recruiterTakeaway:
      "Strong evidence for API testing, data validation, Python automation, and CI/CD testing roles.",
    emTakeaway:
      "This is the clearest proof of quality engineering beyond browser automation: data correctness, regression design, and build feedback.",
    images: ["/images/glyphknit-system.svg"],
    featured: true,
    nda: false
  },
  {
    slug: "cloud-backed-sdet-frameworks",
    title: "Cloud-backed SDET Frameworks",
    summary:
      "Playwright, Cypress, Python, Postman, and Requests frameworks across AWS and Azure services, with test execution and coverage improvements.",
    context:
      "Resume-backed independent SDET consulting through GlyphKnit Solutions LLC.",
    problem:
      "Cloud-backed systems needed E2E, API, integration, and access-control checks that could survive real deployment environments.",
    role:
      "Built frameworks from scratch, validated distributed services, investigated server-side defects, and contributed to CI/CD quality gates.",
    constraints: [
      "Automation had to run against Linux-based cloud infrastructure.",
      "UI, API, and integration checks needed to support each other.",
      "Defect investigation crossed browser, API, CLI, SSH, and environment boundaries."
    ],
    approach:
      "Built hybrid UI/API frameworks with Playwright, Cypress, Python, Postman, and Requests, then validated microservice integrations, data flows, access-control policies, and cloud configuration across AWS and Azure.",
    tooling: ["Playwright", "Cypress", "Python", "Postman", "Requests", "AWS", "Azure", "Docker", "Linux"],
    challenges:
      "The work sat between automation, infrastructure, and support. The framework had to help identify environment and service issues, not only UI failures.",
    impact: [
      "Reduced test execution time by 70%.",
      "Reached 70% automated test coverage in 6 months.",
      "Caught 40% more pre-production defects through improved testing methodology."
    ],
    proves:
      "Can build SDET infrastructure from scratch and connect it to cloud-backed delivery workflows.",
    recruiterTakeaway:
      "Shows application-code fluency, cloud testing, API testing, and practical defect investigation.",
    emTakeaway:
      "Useful for teams that need a quality engineer who can debug across the UI, API, pipeline, and host environment.",
    images: ["/images/glyphknit-system.svg"],
    featured: true,
    nda: false
  },
  {
    slug: "global-beverage-qa-automation",
    title: "Global Beverage Platform Automation",
    summary:
      "Reusable Playwright and pytest automation for UI regression, access control, REST integrations, authentication, and multi-market localization.",
    context:
      "Resume-backed consultant engagement through emagine Consulting for a global beverage platform. Client naming stays anonymized for public portfolio use.",
    problem:
      "A predominantly manual test suite needed reusable automation and clearer quality reporting across global delivery teams.",
    role:
      "Led the shift toward Playwright and pytest modules, validated API and access-control paths, and maintained test libraries as requirements changed.",
    constraints: [
      "Different markets needed localized coverage without duplicating the entire suite.",
      "Authentication and role-based access controls had to be validated across product flows.",
      "Stakeholders needed readable quality reports, not raw automation noise."
    ],
    approach:
      "Built reusable modules for UI regression, access control, and localization, paired them with REST/API validation, and used review of stories and technical docs to provide earlier testability feedback.",
    tooling: ["Playwright", "pytest", "REST APIs", "Postman", "Swagger", "Python", "Jira", "Confluence"],
    challenges:
      "The automation needed to support evolving product requirements across markets while staying maintainable for global delivery teams.",
    impact: [
      "Moved a predominantly manual suite toward reusable Playwright and pytest automation.",
      "Improved quality visibility across global teams with test strategy and stakeholder reports.",
      "Validated REST integrations, authentication flows, role-based access, and localization."
    ],
    proves:
      "Can build automation strategy and reusable implementation for multi-team, multi-market delivery.",
    recruiterTakeaway:
      "Strong evidence for QA automation roles that need UI, API, access-control, and stakeholder reporting experience.",
    emTakeaway:
      "Shows how automation can become a shared quality system instead of a brittle local test pile.",
    images: ["/images/glyphknit-system.svg"],
    featured: false,
    nda: true
  },
  {
    slug: "dotnet-bdd-it-automation",
    title: ".NET BDD and IT Automation",
    summary:
      "Cucumber and SpecFlow BDD frameworks plus PowerShell/Bash automation for Azure provisioning, permissions, and onboarding.",
    context:
      "Resume-backed IT Specialist and Support/QA work for a travel-sector software environment.",
    problem:
      "Business requirements, .NET application behavior, and IT provisioning work needed more repeatable validation and less manual support load.",
    role:
      "Built BDD frameworks, collaborated with developers before code was complete, and automated recurring Azure administration workflows.",
    constraints: [
      "Tests had to bridge business-readable requirements and developer implementation.",
      "Provisioning and permissions work had to be dependable enough for support operations.",
      "The work mixed QA, support, IT automation, and application understanding."
    ],
    approach:
      "Created Cucumber and SpecFlow feature coverage for .NET applications and wrote PowerShell/Bash scripts for Azure provisioning, permissions management, and onboarding.",
    tooling: ["Cucumber", "SpecFlow", "C#", ".NET", "Selenium", "PowerShell", "Bash", "Azure"],
    challenges:
      "The BDD layer needed to stay useful to both business and engineering stakeholders while support scripts reduced recurring operational drag.",
    impact: [
      "Built 150+ BDD feature files for .NET applications.",
      "Developed 20+ PowerShell scripts.",
      "Eliminated 15+ hours of manual work per week and reduced issue resolution time by 3x."
    ],
    proves:
      "Can connect test automation, support engineering, and practical scripting to remove operational friction.",
    recruiterTakeaway:
      "Good early-career evidence for C#/.NET, BDD, Selenium, Azure, and support-aware QA work.",
    emTakeaway:
      "Shows a durable pattern: turn repeated support pain into executable checks and scripts.",
    images: ["/images/glyphknit-system.svg"],
    featured: false,
    nda: false
  },
  {
    slug: "mlops-readiness-scaffold",
    title: "MLOps Readiness Scaffold",
    summary:
      "A deterministic release gate for model or API behavior, built as an offline QA-to-MLOps portfolio artifact.",
    context:
      "Personal showcase project that maps QA automation patterns onto ML and data-system release checks.",
    problem:
      "Model behavior can drift into subjective review. The useful engineering shape is a repeatable gate: versioned cases, provider boundaries, deterministic assertions, thresholds, and report evidence.",
    role:
      "Designed and implemented the harness, sample cases, provider boundary, readiness thresholding, JSON report shape, tests, and CI workflow.",
    constraints: [
      "No paid APIs, secrets, network calls, or model downloads.",
      "Small enough for reviewers to run locally.",
      "Clear extension points for real model providers and stricter production gates."
    ],
    approach:
      "Converted expected behavior into JSONL eval cases, routed outputs through a swappable provider, evaluated text and structured JSON expectations, and surfaced a CI-friendly pass/fail readiness result.",
    tooling: ["Python", "unittest", "JSONL", "GitHub Actions", "Make", "CI quality gate"],
    challenges:
      "The artifact had to prove the release-gate shape without pretending five sample cases are a production model benchmark.",
    impact: [
      "Offline reviewer path runs without secrets, paid APIs, network calls, or model downloads.",
      "Repo evidence: local-only eval path, JSON report artifact, failing baseline command, and unit coverage for loader, metrics, JSON contracts, and report metadata."
    ],
    proves:
      "Quality engineering can become ML quality work when acceptance criteria, release evidence, and CI gates are designed around model behavior.",
    recruiterTakeaway:
      "Shows a credible bridge from SDET work into ML testing, data validation, and MLOps quality without overclaiming model expertise.",
    emTakeaway:
      "Useful pattern for teams that need lightweight eval gates before they invest in a full ML platform stack.",
    images: ["/images/glyphknit-system.svg"],
    featured: false,
    nda: false
  },
  {
    slug: "health-dashboard",
    title: "Personal Health Dashboard",
    summary:
      "A full-stack health dashboard for lab results, wearable data, custom ranges, score snapshots, and authenticated exports.",
    context:
      "Personal showcase app built as a private data product with serious auth, database, and validation boundaries.",
    problem:
      "Lab and wearable data becomes hard to inspect when values, units, freshness, ranges, and partial coverage all live in separate systems.",
    role:
      "Built the Next.js app, database schema, auth routes, upload/export paths, scoring logic, seed harnesses, and focused route/unit tests.",
    constraints: [
      "Health data needs authenticated access and export paths.",
      "Scores must avoid false precision when inputs are stale or partial.",
      "Local smoke testing needs a repeatable database fixture."
    ],
    approach:
      "Modeled metrics, categories, lab reports, wearable days, custom ranges, providers, and export endpoints in Postgres through Drizzle, then wrapped the product flows with unit, route, DB, and Playwright smoke coverage.",
    tooling: ["Next.js", "TypeScript", "Postgres", "Drizzle ORM", "Vitest", "Playwright", "Railway"],
    challenges:
      "The scoring model had to communicate partial-data states instead of inventing certainty from incomplete coverage.",
    impact: [
      "Private demo evidence: authenticated product surface for lab data, wearable summaries, custom ranges, score states, and export paths.",
      "Repo evidence: auth/API route tests, migration tests, local Postgres smoke scripts, seeded browser smoke path, and export endpoints."
    ],
    proves:
      "Can ship application code while bringing SDET judgment into schema design, auth, data validation, and release checks.",
    recruiterTakeaway:
      "Demonstrates that the SDET positioning is not limited to test code. This is a working full-stack product surface.",
    emTakeaway:
      "Shows careful handling of data freshness, scoring confidence, and repeatable local verification.",
    images: ["/images/glyphknit-system.svg"],
    featured: false,
    nda: false
  },
  {
    slug: "paperwake",
    title: "Paperwake Document Archive",
    summary:
      "A portable document migration and archive stack using Paperless-ngx, Docker services, encrypted backup, and migration runbooks.",
    context:
      "Personal infrastructure project for moving document scanning and archiving away from Microsoft services.",
    problem:
      "Personal documents need searchable PDFs, exportable metadata, portable storage, and backup/restore confidence without depending on a single consumer cloud product.",
    role:
      "Designed the local and production Docker shape, migration documentation, backup/restore notes, and operational runbooks.",
    constraints: [
      "Private documents and imports stay out of version control.",
      "The archive must remain boring, portable, and recoverable.",
      "ML additions must not make source-of-truth document records untrustworthy."
    ],
    approach:
      "Used Paperless-ngx as the archive and metadata layer, Postgres and Redis for backing services, Caddy for production routing, and BorgBackup/Storage Box planning for encrypted offsite backup.",
    tooling: ["Docker Compose", "Paperless-ngx", "Postgres", "Redis", "Caddy", "BorgBackup"],
    challenges:
      "The project balances migration automation with strict separation between safe repo documentation and private source files.",
    impact: [
      "Operational evidence: documented local stack, production shape, migration runbook, backup planning, and private-source separation.",
      "Repo evidence: architecture docs, backup/restore docs, migration runbook, local disposable stack, and production deployment notes."
    ],
    proves:
      "Can turn a messy real-world migration into a documented, testable, recoverable system.",
    recruiterTakeaway:
      "Shows systems thinking beyond UI automation: infrastructure, data portability, privacy, and runbooks.",
    emTakeaway:
      "The clean separation between source data and repo docs is exactly the kind of judgment production teams need.",
    images: ["/images/glyphknit-system.svg"],
    featured: false,
    nda: false
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
