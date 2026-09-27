import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Sparkles, Target } from "lucide-react";
import Layout from "../components/layout/Layout";
import RevealGroup from "../components/animations/RevealGroup";
import RevealItem from "../components/animations/RevealItem";
import Reveal from "../components/animations/Reveal";

const principles = [
  {
    icon: Target,
    title: "Product thinking",
    description:
      "I think beyond individual screens and consider the user, the business problem, and the system behind the experience.",
  },
  {
    icon: Layers3,
    title: "Systems over shortcuts",
    description:
      "I care about reusable components, predictable data flows, and architecture that can evolve as products become more complex.",
  },
  {
    icon: Code2,
    title: "Engineering quality",
    description:
      "Clean TypeScript, thoughtful component design, responsive interfaces, and reliable API integration are part of how I work.",
  },
  {
    icon: Sparkles,
    title: "Details matter",
    description:
      "Small details shape how a product feels. I pay attention to interaction, spacing, hierarchy, states, and the moments between the obvious ones.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            {/* Content */}
            <RevealGroup className="max-w-3xl">
              <RevealItem>
                <p className="font-mono text-sm text-primary-light">
                  03 — About
                </p>
              </RevealItem>

              <RevealItem>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  I build digital products with{" "}
                  <span className="text-foreground-muted">intention.</span>
                </h1>
              </RevealItem>

              <RevealItem>
                <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-foreground-secondary">
                  <p>
                    I&apos;m a frontend engineer focused on turning complex
                    product requirements into clear, reliable, and intuitive
                    digital experiences.
                  </p>

                  <p>
                    My work sits at the intersection of engineering, product
                    thinking, and design. I enjoy taking an idea from a Figma
                    screen or product requirement and turning it into a
                    production-ready experience.
                  </p>

                  <p>
                    I care about how things work beneath the surface just as
                    much as how they look on it—from component architecture and
                    data flows to responsive behaviour, performance, and the
                    small details users notice without necessarily knowing why.
                  </p>
                </div>
              </RevealItem>

              <RevealItem>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Let&apos;s work together
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </RevealItem>
            </RevealGroup>

            {/* Developer Visual */}
            <Reveal
              delay={0.2}
              y={30}
              className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-background-secondary">
                {/* Grid */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Atmosphere */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(124,58,237,0.16),transparent_55%)]" />

                <div className="relative flex h-full flex-col justify-between p-8">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wider text-foreground-muted">
                      SOFTWARE ENGINEER
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                  </div>

                  {/* Center */}
                  <div>
                    <div className="font-mono text-sm text-foreground-muted">
                      {"<developer>"}
                    </div>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                      Adetayo
                      <br />
                      <span className="text-foreground-muted">
                        Adetokun
                      </span>
                    </h2>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-foreground-secondary">
                      Building scalable digital products with modern frontend
                      technologies and thoughtful engineering.
                    </p>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {["TypeScript", "React", "Next.js"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground-muted backdrop-blur"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-end justify-between">
                    <span className="font-mono text-sm text-foreground-muted">
                      {"</developer>"}
                    </span>

                    <span className="font-mono text-xs text-foreground-muted">
                      2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Small label */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-background-elevated px-4 py-3 shadow-xl">
                <p className="font-mono text-xs text-foreground-muted">
                  Frontend Engineer
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Principles */}
        <section className="border-y border-border bg-background-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* Section heading */}
              <Reveal>
                <div>
                  <p className="font-mono text-sm text-primary-light">
                    How I work
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Engineering is more than writing code.
                  </h2>
                </div>
              </Reveal>

              {/* Principles */}
              <RevealGroup className="grid gap-10 sm:grid-cols-2">
                {principles.map((principle) => {
                  const Icon = principle.icon;

                  return (
                    <RevealItem key={principle.title}>
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background-elevated">
                          <Icon
                            size={18}
                            className="text-primary-light"
                          />
                        </div>

                        <h3 className="mt-5 text-lg font-medium text-foreground">
                          {principle.title}
                        </h3>

                        <p className="mt-2 leading-7 text-foreground-secondary">
                          {principle.description}
                        </p>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* Beyond Code */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <RevealGroup className="max-w-3xl">
            <RevealItem>
              <p className="font-mono text-sm text-primary-light">
                Beyond the code
              </p>
            </RevealItem>

            <RevealItem>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Curious by default.
              </h2>
            </RevealItem>

            <RevealItem>
              <div className="mt-6 space-y-5 text-lg leading-8 text-foreground-secondary">
                <p>
                  I&apos;m naturally curious about how things work and why
                  they work the way they do. That curiosity extends beyond
                  frontend development into product design, backend systems,
                  APIs, and the broader technology landscape.
                </p>

                <p>
                  I&apos;m constantly learning, experimenting, and looking for
                  better ways to solve problems—not because every problem needs
                  a new technology, but because there is almost always a better
                  way to understand the problem first.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background-secondary px-6 py-16 sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative max-w-2xl">
                <p className="font-mono text-sm text-primary-light">
                  Let&apos;s connect
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Have something worth building?
                </h2>

                <p className="mt-4 leading-7 text-foreground-secondary">
                  I&apos;m always interested in working on thoughtful
                  products, solving interesting problems, and collaborating
                  with people who care about what they build.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;