export type ExperienceItem = {
  publicLabel: string;
  kind: "ownership" | "employment";
  title: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  metrics: string[];
};

export const resumeProfile = {
  name: "Vin Rao",
  title: "QA & SDET Consultant",
  summary:
    "Builds test infrastructure for web applications, APIs, and data platforms. Experience spans browser automation, data integrity, CI quality gates, cloud integrations, and support engineering. Full-time owner of GlyphKnit Solutions LLC since December 2022."
};

export const resumeProjects = [
  {
    title: "Registration tests independent of message delivery",
    summary:
      "Built Playwright checks for registration, authentication, and locale-specific behavior. Used API response interception to run one-time-code scenarios without waiting for live email or SMS.",
    outcome: "Controlled browser checks ran in Jenkins test pipelines.",
    stack: ["Playwright", "TypeScript", "Jenkins"],
    href: "/work/connected-device-test-infrastructure/"
  },
  {
    title: "Ordering regression and requirement coverage",
    summary:
      "Maintained Robot Framework and Playwright tests for cart, checkout, authentication, promotions, and localization. Linked automation to product requirements and published quality reports for distributed teams.",
    outcome: "Reports exposed coverage gaps and unreliable checks alongside execution results.",
    stack: ["Robot Framework", "Playwright"],
    href: "/work/global-beverage-qa-automation/"
  },
  {
    title: "Cloud-backed SDET frameworks",
    summary:
      "Built Playwright and Cypress E2E frameworks on Linux-based AWS infrastructure. Designed Python and Postman API suites for microservice integrations, data flows, and access controls across AWS and Azure.",
    outcome: "Reduced test execution time by 70%; reached 70% automated test coverage in six months.",
    stack: ["Playwright", "Cypress", "Python", "AWS", "Azure", "Docker"],
    href: "/work/cloud-backed-sdet-frameworks/"
  }
];

export const experience: ExperienceItem[] = [
  {
    publicLabel: "GlyphKnit Solutions LLC",
    kind: "ownership",
    title: "Full-time owner | QA & SDET Consultant",
    period: "December 2022 - Present",
    location: "Remote",
    bullets: [
      "Builds test frameworks, API validation, and cloud integration checks for software teams.",
      "Developed browser and API automation from scratch, investigated server-side defects with CLI tools and SSH, and connected regression checks to CI workflows."
    ],
    stack: ["Playwright", "Cypress", "Python", "Postman", "AWS", "Azure", "Linux"],
    metrics: []
  },
  {
    publicLabel: "Financial data platform",
    kind: "employment",
    title: "QA Analyst | Support Engineer",
    period: "March 2019 - November 2022",
    location: "Montreal, QC",
    bullets: [
      "Built Python and Java suites for multi-tenant ingestion, data integrity, and access-control validation, reducing manual testing effort by 80%.",
      "Developed 200+ Postman API collections for payment-data endpoints and business rules; automated regression with Newman in Jenkins.",
      "Used MySQL and Pandas to identify data corruption and transformation errors before production. Streamlined and parallelized Jenkins execution, reducing CI feedback from 3 hours to 25 minutes."
    ],
    stack: ["Python", "Java", "Postman", "Newman", "Jenkins", "MySQL", "Pandas", "AWS"],
    metrics: ["80% less manual testing effort", "200+ API collections", "3h to 25m CI feedback"]
  },
  {
    publicLabel: "Travel-sector software",
    kind: "employment",
    title: "IT Specialist | Support & Quality Assurance",
    period: "November 2016 - February 2019",
    location: "Boston, MA",
    bullets: [
      "Built Cucumber and SpecFlow BDD frameworks with 150+ feature files for .NET applications, collaborating with developers before implementation was complete.",
      "Automated Azure provisioning, permissions, and onboarding with PowerShell and Bash, eliminating 15+ hours of manual work per week."
    ],
    stack: ["Cucumber", "SpecFlow", "C#", ".NET", "PowerShell", "Bash", "Azure"],
    metrics: ["150+ BDD feature files", "15+ hours/week automated"]
  },
  {
    publicLabel: "Enterprise application hosting",
    kind: "employment",
    title: "Application Support Engineer",
    period: "April 2016 - August 2016",
    location: "Cambridge, MA",
    bullets: [
      "Supported cloud-hosted LAMP environments, enterprise application installations, and client training; adapted deployments to architectural requirements."
    ],
    stack: ["AWS", "Linux", "Apache", "MySQL", "PHP"],
    metrics: []
  }
];

export const resumeSkills = [
  { title: "Test automation", items: ["Playwright", "Selenium", "Cypress", "pytest", "Cucumber", "SpecFlow"] },
  { title: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "C#/.NET", "SQL", "Bash", "PowerShell"] },
  { title: "APIs and data", items: ["REST APIs", "Postman/Newman", "MySQL", "Pandas", "data validation", "access-control testing"] },
  { title: "Delivery and cloud", items: ["Jenkins", "GitHub Actions", "Docker", "Linux", "AWS", "Azure"] }
];

export const education = {
  institution: "Hamilton College",
  degree: "Bachelor of Arts in Physics",
  period: "August 2011 - December 2015",
  location: "Clinton, NY"
};
