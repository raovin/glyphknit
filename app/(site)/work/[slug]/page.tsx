import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { CodeBlock } from "@/components/code-block";
import { projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sampleGate = `{
  "cases": "data/sample_cases.jsonl",
  "model": "rule-based",
  "min_pass_rate": 0.95,
  "output": "reports/readiness-report.json"
}`;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return buildMetadata({
      title: "Work",
      description: "Project case study from Vin Rao.",
      path: "/work"
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`
  });
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="reading-shell py-12 md:py-20">
      <Link className="focus-link inline-flex items-center gap-2 text-sm font-semibold" href="/work">
        <ArrowLeft aria-hidden="true" size={16} />
        Work
      </Link>

      <header className="mt-8">
        <p className="mono-label">{project.nda ? "NDA case study" : "Public project"}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg text-[var(--muted)]">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tooling.map((tool) => (
            <span className="chip" key={tool}>
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.repoUrl ? (
            <ButtonLink
              href={project.repoUrl}
              icon={<Github aria-hidden="true" size={17} />}
              rel="noreferrer"
              target="_blank"
            >
              Repository
            </ButtonLink>
          ) : null}
          {project.demoUrl ? (
            <ButtonLink
              href={project.demoUrl}
              icon={<ExternalLink aria-hidden="true" size={17} />}
              rel="noreferrer"
              target="_blank"
            >
              Live
            </ButtonLink>
          ) : null}
        </div>
      </header>

      <div className="mt-12 grid gap-5">
        <CaseBlock label="Context" text={project.context} />
        <CaseBlock label="Problem" text={project.problem} />
        <CaseBlock label="Role" text={project.role} />
        <section className="hairline-card p-5">
          <h2 className="text-xl">Constraints</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {project.constraints.map((constraint) => (
              <li className="border-l border-[var(--accent)] pl-3" key={constraint}>
                {constraint}
              </li>
            ))}
          </ul>
        </section>
        <CaseBlock label="Approach" text={project.approach} />
        <CaseBlock label="Challenges" text={project.challenges} />
        <section className="hairline-card p-5">
          <h2 className="text-xl">Impact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
            {project.impact.map((item) => (
              <li className="border-l border-[var(--accent)] pl-3" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <div className="grid gap-5 md:grid-cols-2">
          <CaseBlock label="Recruiter takeaway" text={project.recruiterTakeaway} />
          <CaseBlock label="Engineering manager takeaway" text={project.emTakeaway} />
        </div>
        {project.slug === "mlops-readiness-scaffold" ? (
          <CodeBlock code={sampleGate} filename="config/readiness.example.json" language="json" />
        ) : null}
      </div>
    </article>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <section className="hairline-card p-5">
      <h2 className="text-xl">{label}</h2>
      <p className="mt-4 text-sm text-[var(--muted)]">{text}</p>
    </section>
  );
}
