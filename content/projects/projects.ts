export type ProjectOrigin = "GlyphKnit project" | "Project engagement" | "Earlier employment" | "Independent project";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  origin: ProjectOrigin;
  sector: string;
  context: string;
  problem?: string;
  role: string;
  decision?: string;
  impact: string[];
  evidence?: string;
  relatedSlugs: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "cloud-backed-sdet-frameworks",
    title: "Browser and API tests for a cloud application",
    summary: "I built test frameworks that helped locate failures across user journeys, services, and cloud environments.",
    origin: "GlyphKnit project",
    sector: "Cloud software",
    context: "Independent consulting delivered through GlyphKnit for cloud-backed applications and their service integrations.",
    problem: "A failed browser journey could originate in the application, a service, permissions, or the cloud environment. The tests needed to help locate the cause.",
    role: "I built Playwright and Cypress frameworks and Python API checks, then investigated failures across browsers, services, Linux hosts, and cloud configuration.",
    decision: "I separated focused API and integration checks from full browser journeys. This let the team check a service directly when a broken UI flow would otherwise obscure the cause.",
    impact: [
      "Test execution time fell by 70% during the engagement.",
      "Automated coverage reached 70% in six months."
    ],
    evidence: "Engagement outcomes are summarized here. Client code and reports remain private.",
    relatedSlugs: ["financial-data-quality-platform", "mlops-readiness-scaffold"],
    featured: true
  },
  {
    slug: "financial-data-quality-platform",
    title: "Cutting CI feedback from three hours to 25 minutes",
    summary: "I combined API regression tests with database checks so successful requests also had to produce correct data.",
    origin: "Earlier employment",
    sector: "Financial data",
    context: "QA and support engineering for a multi-tenant financial data platform, before my independent GlyphKnit work.",
    problem: "Manual regression took too long, and an endpoint returning successfully did not establish that ingestion, transformation, or access rules were correct.",
    role: "I built Python and Java regression suites, Postman collections, and MySQL/Pandas data checks. I automated them with Newman and streamlined their Jenkins execution.",
    decision: "I paired API assertions with checks on the resulting data, then ran independent checks in parallel. This kept ingestion, transformation, and tenant access rules in scope while shortening the feedback cycle.",
    impact: [
      "Jenkins feedback fell from three hours to 25 minutes after streamlining and parallel execution.",
      "Manual testing effort fell by 80% in this role."
    ],
    evidence: "The timing and effort figures describe this role's regression workflow. Source and internal reports are private.",
    relatedSlugs: ["cloud-backed-sdet-frameworks", "health-dashboard"],
    featured: true
  },
  {
    slug: "mlops-readiness-scaffold",
    title: "A repeatable model-output release gate",
    summary: "I built a small evaluation harness that checks expected outputs and gives a release pipeline a clear pass or fail.",
    origin: "Independent project",
    sector: "Model evaluation",
    context: "A self-directed Python project exploring how QA release checks apply to model and API outputs. The browser demo is a separate implementation of the same idea.",
    problem: "Reviewing output by eye makes it hard to repeat a release decision. I wanted expected behavior, the threshold, and the result to be inspectable in one small system.",
    role: "I built the Python case loader, provider interface, text and JSON checks, release threshold, reports, tests, and CI workflow.",
    decision: "I included a deliberately weak provider alongside the passing example. Running both verifies that the gate can block a release, with a report and exit code explaining the result. The harness runs offline without API keys or model downloads.",
    impact: [
      "The repository can run a passing gate and an intentionally blocked baseline offline.",
      "The browser demo lets visitors edit cases and thresholds without installing the Python project."
    ],
    evidence: "The public repository contains the Python harness, five sample cases, tests, and CI configuration. The browser demo uses six synthetic cases and deterministic responses. Neither is a production model benchmark.",
    relatedSlugs: ["cloud-backed-sdet-frameworks", "financial-data-quality-platform"],
    repoUrl: "https://github.com/raovin/mlops-artifact",
    demoUrl: "/demos/eval-gate/",
    featured: true
  },
  {
    slug: "connected-device-test-infrastructure",
    title: "Testing registration without waiting for email or SMS",
    summary: "I separated the part of sign-in that the browser handles from the service that sends a one-time code.",
    origin: "Project engagement",
    sector: "Consumer software",
    context: "Registration and sign-in for a consumer product used in several markets.",
    problem: "When a one-time code arrived late, a browser test could fail even when the registration screen worked.",
    role: "I built Playwright tests for registration and sign-in across locales and added them to Jenkins.",
    decision: "For checks of the browser flow, I supplied the verification service’s response in the test. That let me check how the screen handled a code without depending on a live inbox or phone.",
    impact: [
      "The team could rerun the same registration scenario in the pipeline regardless of message delivery time."
    ],
    relatedSlugs: ["global-beverage-qa-automation", "mlops-readiness-scaffold"],
    demoUrl: "/demos/registration-checks/",
    featured: false
  },
  {
    slug: "global-beverage-qa-automation",
    title: "Finding gaps in checkout test coverage",
    summary: "I mapped ordering tests to product requirements so the team could see which checkout rules a passing run had exercised.",
    origin: "Project engagement",
    sector: "Ordering software",
    context: "A platform where businesses place orders across several markets.",
    problem: "A checkout test could pass while a promotion or a local ordering rule went untested.",
    role: "I maintained the cart, checkout and account tests in Robot Framework and Playwright.",
    decision: "I linked the checks to individual requirements. In release reports I called out requirements without a test and tests that gave inconsistent results across runs.",
    impact: [
      "Engineering teams in different markets could see what had been checked and where they still needed to investigate."
    ],
    relatedSlugs: ["connected-device-test-infrastructure", "cloud-backed-sdet-frameworks"],
    featured: false
  },
  {
    slug: "hiring-platform-release-testing",
    title: "Browser testing for a hiring platform",
    summary: "I built a Playwright framework to automate browser checks the team had been running by hand.",
    origin: "Project engagement",
    sector: "Recruitment software",
    context: "A web application for employers recruiting frontline staff.",
    role: "I built the team's browser test framework in TypeScript and Playwright. I also tested changes manually and wrote release notes describing what had changed.",
    impact: [
      "The team could rerun the same browser checks for successive releases, reducing the amount of testing it had to repeat by hand."
    ],
    relatedSlugs: ["connected-device-test-infrastructure", "cloud-backed-sdet-frameworks"],
    featured: false
  },
  {
    slug: "insurance-brokerage-app",
    title: "Building an insurance app for a brokerage",
    summary: "I worked on the team that built an insurance app for a broker serving individuals and businesses.",
    origin: "Project engagement",
    sector: "Insurance software",
    context: "The brokerage helps people and businesses choose coverage from insurers.",
    role: "I was part of the team that built its insurance application.",
    impact: [],
    relatedSlugs: ["hiring-platform-release-testing", "connected-device-test-infrastructure"],
    featured: false
  },
  {
    slug: "health-dashboard",
    title: "Making personal health data inspectable",
    summary: "I built a private application for lab and wearable data, with authenticated exports and explicit handling of incomplete inputs.",
    origin: "Independent project",
    sector: "Personal data",
    context: "A self-directed full-stack application. It is a private personal tool, separate from client work.",
    problem: "Results from different sources are hard to compare when units, dates, reference ranges, and missing values are scattered across systems.",
    role: "I built the Next.js application and Postgres data model, including authenticated uploads and exports, scoring, and route and browser tests.",
    decision: "I made freshness and partial coverage part of each score state. A score needs to show when its inputs are stale or incomplete, so missing data does not quietly appear complete. Seeded fixtures let me check these paths without using personal records.",
    impact: [
      "Lab results, wearable summaries, ranges, and exports sit behind one authenticated application.",
      "Seeded checks exercise product flows and score states for stale and incomplete inputs."
    ],
    evidence: "This write-up describes a private implementation. Personal records are excluded from the portfolio.",
    relatedSlugs: ["financial-data-quality-platform", "paperwake"],
    featured: false
  },
  {
    slug: "paperwake",
    title: "A portable document archive",
    summary: "I designed a document migration and archive setup around searchable files, portable metadata, and recovery planning.",
    origin: "Independent project",
    sector: "Document infrastructure",
    context: "A personal infrastructure project for moving a document archive away from a consumer cloud service.",
    problem: "An archive needs to remain useful when its storage or hosting changes. Searchable documents, metadata export, and a recovery plan matter as much as initial import.",
    role: "I designed a Docker layout around Paperless-ngx, Postgres, and Redis, and wrote migration, deployment, and backup/restore runbooks.",
    decision: "I separated portable configuration and operating instructions from private document imports. This keeps the service design reusable when hosting changes, while the recovery plan covers both document files and metadata.",
    impact: [
      "The project has a documented service layout and migration path.",
      "An encrypted offsite backup and restore plan is recorded alongside operating instructions."
    ],
    evidence: "The documented result is a service design and runbooks. Backup planning is complete; a verified recovery exercise is not claimed.",
    relatedSlugs: ["health-dashboard", "dotnet-bdd-it-automation"],
    featured: false
  },
  {
    slug: "dotnet-bdd-it-automation",
    title: "Turning repeat work into tests and scripts",
    summary: "I wrote business-readable .NET tests and automated recurring provisioning, permissions, and onboarding tasks.",
    origin: "Earlier employment",
    sector: "Travel software",
    context: "An earlier role spanning IT support and quality assurance in a travel-sector software environment.",
    problem: "Application requirements needed repeatable checks, while recurring administration work consumed support time.",
    role: "I built Cucumber and SpecFlow coverage for .NET applications and wrote PowerShell and Bash scripts for Azure provisioning, permissions, and onboarding.",
    decision: "I worked with developers on business-readable feature scenarios before implementation was complete. Agreeing on observable behavior early gave the tests a clear purpose; recurring administration work became repeatable scripts.",
    impact: [
      "Built more than 150 BDD feature files and 20 PowerShell scripts.",
      "Automation removed more than 15 hours of manual work per week in this role."
    ],
    evidence: "The feature-file, script, and time-saving figures describe this earlier role. Application code and operational scripts remain private.",
    relatedSlugs: ["paperwake", "cloud-backed-sdet-frameworks"],
    featured: false
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
