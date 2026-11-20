export type Repo = {
  slug: string;
  name: string;
  description: string;
  repoUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  kind: "Public source" | "Private project";
};

export const repos: Repo[] = [
  {
    slug: "mlops-artifact",
    name: "Model-output release gate",
    description: "An offline Python test suite for model outputs. Run the weak baseline to see which cases block the release.",
    repoUrl: "https://github.com/raovin/mlops-artifact",
    demoUrl: "/demos/eval-gate/",
    reportUrl: "/work/mlops-readiness-scaffold/",
    kind: "Public source"
  },
  {
    slug: "glyphknit",
    name: "This website",
    description: "The source for this site, including the in-browser demo and the workflow that builds and deploys the static pages.",
    repoUrl: "https://github.com/raovin/glyphknit",
    demoUrl: "/demos/",
    kind: "Public source"
  },
  {
    slug: "health-dashboard",
    name: "Personal health dashboard",
    description: "I built a dashboard for lab and wearable data, with tests for how it scores incomplete or stale inputs.",
    reportUrl: "/work/health-dashboard/",
    kind: "Private project"
  },
  {
    slug: "paperwake",
    name: "Document archive",
    description: "I designed a searchable document archive and wrote the migration plan and operating runbooks.",
    reportUrl: "/work/paperwake/",
    kind: "Private project"
  }
];
