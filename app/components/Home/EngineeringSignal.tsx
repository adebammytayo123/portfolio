const signals = [
  "Product thinking",
  "System design",
  "UI engineering",
  "Performance",
];

const EngineeringSignal = () => {
  return (
    <section className="border-y border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {signals.map((signal, index) => (
            <div
              key={signal}
              className="flex items-center gap-3 px-4 py-6 first:pl-0 last:pr-0 md:px-8"
            >
              <span className="font-mono text-xs text-primary-light">
                0{index + 1}
              </span>

              <span className="text-sm text-foreground-secondary">
                {signal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSignal;
