const capabilities = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Data & APIs",
    technologies: [
      "REST APIs",
      "GraphQL",
      "TanStack Query",
      "State Management",
      "API Integration",
    ],
  },
  {
    category: "Architecture",
    technologies: [
      "Component Systems",
      "Design Systems",
      "Responsive Architecture",
      "Reusable UI Architecture",
    ],
  },
  {
    category: "Tooling",
    technologies: [
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "Git",
      "ESLint",
      "Prettier",
      "Figma",
    ],
  },
];

const TechnicalCapabilities = () => {
  return (
    <section className="border-y border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm text-primary-light">05 — Toolkit</p>

            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Technologies I work with
            </h2>
          </div>

          <div className="grid w-full max-w-3xl gap-8 sm:grid-cols-3">
            {capabilities.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                  {group.category}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
