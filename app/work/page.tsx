import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import RevealGroup from "../components/animations/RevealGroup";
import RevealItem from "../components/animations/RevealItem";
import Reveal from "../components/animations/Reveal";

const projects = [
  {
    title: "SmartComply Seequre",
    description:
      "An enterprise compliance platform that brings security and compliance management through SmartGuard together with end-to-end audit management workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Redux",
      "TanStack Query",
      "REST API",
      "Tailwind CSS",
    ],
    image: "/images/seequre/seequre-dashboard.png",
    href: "https://app.smartcomplyapp.com",
  },
  {
    title: "Adhere",
    description:
      "A compliance and fraud prevention platform that helps businesses monitor transactions in real time, detect risks, verify identities, screen against sanctions, and integrate compliance capabilities through APIs.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/adhere/adhere-hero.png",
    href: "https://adhere.smartcomply.com/",
  },
  {
    title: "SmartComply Group",
    description:
      "A unified group website for SmartComply and its divisions—Seequre, Adhere, Occulus, and SmartComply Academy—bringing their services, solutions, and digital experiences together under one cohesive platform.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "REST API",
      "Tailwind CSS",
    ],
    image: "/images/group/group-hero.png",
    href: "https://www.smartcomply.com/",
  },
  {
    title: "SouSou",
    description:
      "A digital platform for rotating savings circles, helping groups manage contributions, schedules, and payout turns while keeping everyone aligned through clear records and transparency.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/sousou/sousou-about.png",
    href: "https://web.sousoubox.com/",
  },
  {
    title: "Create Ensemble",
    description:
      "A digital ecosystem for creatives and organizations to connect, collaborate, and bring projects to life through creative communities, opportunities, mentorship, fundraising, events, and an integrated arts marketplace.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/ensemble/ensemble-hero.png",
    href: "https://www.createensemble.com/",
  },
  {
    title: "Oculus",
    description:
      "An AI-powered business solutions platform focused on automating lead generation, customer engagement, and business operations through intelligent tools and integrated workflows.",
    technologies: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    image: "/images/oculus/oculus-hero.png",
    href: "https://oculusintel.xyz/",
  },
];

const WorkPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <RevealGroup className="max-w-4xl">
            <RevealItem>
              <p className="font-mono text-sm text-primary-light">
                02 — Work
              </p>
            </RevealItem>

            <RevealItem>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Products I&apos;ve helped{" "}
                <span className="text-foreground-muted">
                  bring to life.
                </span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-secondary">
                A collection of products, platforms, and digital experiences
                I&apos;ve designed and engineered across compliance, fintech,
                creative technology, business automation, and enterprise
                software.
              </p>
            </RevealItem>

            <RevealItem>
              <p className="mt-5 max-w-2xl leading-7 text-foreground-muted">
                I&apos;m interested in the problems behind the interface—how
                products are structured, how data moves through them, how
                complex workflows become intuitive, and how frontend systems
                remain maintainable as they grow.
              </p>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* Work */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <Reveal className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="text-sm font-medium text-foreground">
                Selected projects
              </p>

              <p className="mt-1 text-sm text-foreground-muted">
                {projects.length} projects across different products and
                domains
              </p>
            </div>

            <span className="hidden font-mono text-xs text-foreground-muted sm:block">
              2026
            </span>
          </Reveal>

          <RevealGroup className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <RevealItem key={project.title}>
                <Link
                  href={project.href}
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-secondary">
                    <div className="relative h-full w-full overflow-hidden bg-background-elevated">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.12),transparent_55%)]" />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

                      {/* Project number */}
                      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-mono text-xs text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* View project */}
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 font-mono text-xs text-primary-light">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="text-2xl font-medium tracking-tight text-foreground">
                          {project.title}
                        </h2>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="mt-1 shrink-0 text-foreground-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-light"
                      />
                    </div>

                    <p className="mt-4 max-w-xl leading-7 text-foreground-secondary">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-foreground-muted transition-colors group-hover:border-primary/30"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Engineering Perspective */}
        <section className="border-y border-border bg-background-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Reveal>
                <div>
                  <p className="font-mono text-sm text-primary-light">
                    How I work
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    More than making interfaces look good.
                  </h2>
                </div>
              </Reveal>

              <RevealGroup className="space-y-8">
                <RevealItem>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Product thinking
                    </h3>

                    <p className="mt-2 leading-7 text-foreground-secondary">
                      I think beyond individual screens and consider the
                      complete user journey, business requirements, edge cases,
                      and the systems supporting the experience.
                    </p>
                  </div>
                </RevealItem>

                <RevealItem>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Scalable frontend architecture
                    </h3>

                    <p className="mt-2 leading-7 text-foreground-secondary">
                      I build reusable components, predictable state and data
                      flows, and frontend structures that can evolve as a
                      product becomes more complex.
                    </p>
                  </div>
                </RevealItem>

                <RevealItem>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Detail and usability
                    </h3>

                    <p className="mt-2 leading-7 text-foreground-secondary">
                      From responsive behaviour and visual hierarchy to
                      loading states and error handling, I care about the
                      details that make a product feel considered and
                      reliable.
                    </p>
                  </div>
                </RevealItem>
              </RevealGroup>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-background-secondary px-6 py-16 sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

              <div className="relative max-w-2xl">
                <p className="font-mono text-sm text-primary-light">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s build something meaningful.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-foreground-secondary">
                  If you&apos;re working on a product that needs thoughtful
                  frontend engineering, scalable architecture, and a strong
                  user experience, I&apos;d love to hear about it.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
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

export default WorkPage;