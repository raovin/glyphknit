export type Demo = {
  slug: string;
  title: string;
  summary: string;
  proves: string;
  stack: string[];
  href: string;
  relatedCaseStudy?: { label: string; href: string };
  status: "live" | "planned";
};

export const demos: Demo[] = [
  {
    slug: "eval-gate",
    title: "Model output release gate",
    summary:
      "A working evaluation gate. Edit the case suite, move the threshold, and watch the release decision change. Scoring runs in your browser.",
    proves:
      "Turning subjective model behavior into a deterministic, versioned release check with structured evidence a pipeline can act on.",
    stack: ["TypeScript", "React", "deterministic scoring", "JSONL", "CI gate pattern"],
    href: "/demos/eval-gate/",
    relatedCaseStudy: {
      label: "MLOps Readiness Scaffold",
      href: "/work/mlops-readiness-scaffold/"
    },
    status: "live"
  }
];

export const liveDemos = demos.filter((demo) => demo.status === "live");
