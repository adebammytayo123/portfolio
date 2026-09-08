const principles = [
  {
    number: "01",
    title: "Understand before implementing",
    description:
      "Good implementation starts with understanding the problem, the users and the constraints.",
  },
  {
    number: "02",
    title: "Keep complexity where it belongs",
    description:
      "The best abstraction is often the one that makes the rest of the system easier to understand.",
  },
  {
    number: "03",
    title: "Build systems, not isolated screens",
    description:
      "Reusable components, predictable patterns and clear architecture make products easier to evolve.",
  },
  {
    number: "04",
    title: "Optimize for people and performance",
    description:
      "A technically impressive product still needs to feel fast, intuitive and effortless to use.",
  },
];

const EngineeringPrinciples = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm text-primary-light">
            04 — Principles
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How I think about engineering.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="grid gap-4 py-7 md:grid-cols-[60px_1fr]"
            >
              <span className="font-mono text-xs text-primary-light">
                {principle.number}
              </span>

              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-foreground-secondary">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
