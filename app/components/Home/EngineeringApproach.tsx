import { Boxes, Gauge, Layers3, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Boxes,
    number: "01",
    title: "Product engineering",
    description:
      "Turning product requirements into intuitive interfaces and reliable user experiences.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Frontend architecture",
    description:
      "Designing component systems and application structures that remain maintainable as products grow.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "UI engineering",
    description:
      "Translating designs into responsive, accessible and precise production interfaces.",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance",
    description:
      "Building fast experiences while keeping complexity, maintainability and developer experience in balance.",
  },
];

const EngineeringApproach = () => {
  return (
    <section className="border-y border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm text-primary-light">
              03 — Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              I don&apos;t just build interfaces.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-foreground-secondary">
              I think about the product, the system behind it and the people who
              will use it.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-background-secondary p-7 transition-colors duration-300 hover:bg-background-elevated"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-primary-light"
                    />

                    <span className="font-mono text-xs text-foreground-muted">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-medium text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
