import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    role: "Frontend Engineer",
    company: "Company Name",
    description:
      "Building production web applications with React, Next.js and TypeScript across complex product workflows.",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Company Name",
    description:
      "Developed responsive interfaces and reusable frontend systems for business applications.",
  },
];

const ExperiencePreview = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-sm text-primary-light">
            06 — Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Building software in the real world.
          </h2>
        </div>

        <Link
          href="/experience"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
        >
          View experience
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="mt-14 divide-y divide-border border-y border-border">
        {experiences.map((experience) => (
          <div
            key={`${experience.period}-${experience.role}`}
            className="grid gap-5 py-8 md:grid-cols-[180px_1fr]"
          >
            <span className="font-mono text-xs text-foreground-muted">
              {experience.period}
            </span>

            <div>
              <h3 className="text-lg font-medium text-foreground">
                {experience.role}
              </h3>

              <p className="mt-1 text-sm text-primary-light">
                {experience.company}
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground-secondary">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePreview;
