export type Demo = {
  slug: string;
  title: string;
  summary: string;
  contribution: string;
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
      "Edit the sample cases and move the pass threshold to see how a release decision changes. Everything runs in your browser.",
    contribution:
      "I built the parser, output checks, weighted scoring, and downloadable report using synthetic examples.",
    stack: ["TypeScript", "React", "deterministic scoring", "JSONL", "CI gate pattern"],
    href: "/demos/eval-gate/",
    relatedCaseStudy: {
      label: "How I built the release gate",
      href: "/work/mlops-readiness-scaffold/"
    },
    status: "live"
  },
  {
    slug: "registration-checks",
    title: "Registration checks",
    summary:
      "Start a fictional signup, wait for an email or SMS code in the synthetic inbox, and see whether delivery meets the ten-second deadline.",
    contribution:
      "The browser check uses supplied verification responses. A separate delivery check measures elapsed time; a late code can still complete signup. No real messages are sent.",
    stack: ["TypeScript", "React", "browser-flow checks", "delivery deadlines"],
    href: "/demos/registration-checks/",
    relatedCaseStudy: {
      label: "Why I separated registration and delivery checks",
      href: "/work/connected-device-test-infrastructure/"
    },
    status: "live"
  }
];

export const liveDemos = demos.filter((demo) => demo.status === "live");
