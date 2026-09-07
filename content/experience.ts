export type ExperienceItem = {
  company: string;
  publicLabel: string;
  /** Named end client, when approved for public use. */
  client?: string;
  /** Contracting vehicle the engagement ran through. */
  via?: string;
  /** Independent consulting delivery versus direct employment. */
  kind?: "consulting" | "employment";
  title: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  metrics: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "emagine Consulting",
    publicLabel: "Connected-device platform",
    client: "Philip Morris International",
    kind: "employment",
    title: "QA Automation Engineer",
    period: "Jan 2025 - Present",
    location: "Lisbon, Portugal | Remote",
    bullets: [
      "Built Playwright and Selenium suites for React/TypeScript device registration, authentication, and multi-locale flows.",
      "Integrated LLM-assisted test generation to expand test cases and reduce manual authoring.",
      "Embedded suites into Jenkins pipelines with quality gates and earlier sprint-level defect feedback."
    ],
    stack: ["Playwright", "Selenium", "TypeScript", "Python", "Jenkins", "GitHub Actions"],
    metrics: ["60% less manual test-authoring time"]
  },
  {
    company: "emagine Consulting",
    publicLabel: "Global beverage platform",
    client: "Carlsberg Group",
    kind: "employment",
    title: "QA Automation Engineer",
    period: "Mar 2024 - Dec 2024",
    location: "Lisbon, Portugal | Remote",
    bullets: [
      "Shifted a predominantly manual suite toward Playwright and pytest automation.",
      "Built reusable modules for UI regression, access control, and multi-market localization.",
      "Validated REST integrations, authentication flows, and role-based access controls."
    ],
    stack: ["Playwright", "pytest", "REST APIs", "Postman", "Swagger", "Jira"],
    metrics: ["Global-team quality reporting", "Reusable UI/API modules"]
  },
  {
    company: "GlyphKnit Solutions LLC",
    publicLabel: "GlyphKnit Solutions LLC",
    kind: "consulting",
    title: "Founder | QA & SDET Consultant",
    period: "Feb 2023 - Mar 2024",
    location: "Montreal, QC | Remote",
    bullets: [
      "Built Playwright and Cypress E2E frameworks from scratch on Linux-based AWS infrastructure.",
      "Designed REST API suites in Python with Postman and Requests.",
      "Validated microservice integrations, data flows, and access control policies across AWS and Azure services."
    ],
    stack: ["Playwright", "Cypress", "Python", "AWS", "Azure", "Docker", "Linux"],
    metrics: ["70% shorter test execution time", "70% automated test coverage in 6 months"]
  },
  {
    company: "Revelate Corp",
    publicLabel: "Revelate Corp",
    client: "Revelate Corp",
    kind: "employment",
    title: "QA Analyst | Support Engineer",
    period: "Mar 2019 - Dec 2022",
    location: "Montreal, QC | Remote",
    bullets: [
      "Built Python and Java suites for ingestion, data integrity, and access-control validation.",
      "Developed Postman API collections for payment-data endpoints and business rules.",
      "Used MySQL and Pandas checks to catch data corruption and transformation errors before production."
    ],
    stack: ["Python", "Java", "Postman", "Newman", "Jenkins", "MySQL", "Pandas", "AWS"],
    metrics: ["80% less manual testing effort", "200+ Postman API collections", "3h to 25m CI feedback"]
  },
  {
    company: "Audley Travel",
    publicLabel: "Audley Travel",
    client: "Audley Travel",
    kind: "employment",
    title: "IT Specialist - Support & Quality Assurance",
    period: "Nov 2016 - Feb 2019",
    location: "Boston, MA",
    bullets: [
      "Built Cucumber and SpecFlow BDD frameworks for .NET applications.",
      "Collaborated with developers to write tests before implementation was complete.",
      "Automated Azure provisioning, permissions management, and user onboarding with scripts."
    ],
    stack: ["Cucumber", "SpecFlow", "C#", ".NET", "Selenium", "PowerShell", "Azure"],
    metrics: ["150+ BDD feature files", "15+ hours/week automated", "20+ PowerShell scripts"]
  }
];

export const resumeReceipts = [
  {
    value: "60%",
    label: "less manual test-authoring time",
    detail: "LLM-assisted test generation for connected-device flows."
  },
  {
    value: "80%",
    label: "manual testing effort removed",
    detail: "Python/Java automation for financial data ingestion and access control."
  },
  {
    value: "200+",
    label: "Postman API collections",
    detail: "REST endpoints for payment data, business rules, and regression coverage."
  },
  {
    value: "3h to 25m",
    label: "CI feedback compression",
    detail: "Parallel Jenkins execution for financial data platform testing."
  },
  {
    value: "150+",
    label: "BDD feature files",
    detail: "Cucumber and SpecFlow coverage for .NET applications."
  },
  {
    value: "15+ h/wk",
    label: "manual IT work automated",
    detail: "Azure provisioning, permissions, and onboarding scripts."
  }
];
