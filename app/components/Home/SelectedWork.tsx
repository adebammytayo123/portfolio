import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

const SelectedWork = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-sm text-primary-light">02 — Work</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>

          <p className="mt-4 max-w-xl text-foreground-secondary">
            A selection of products and interfaces I&apos;ve designed and
            engineered.
          </p>
        </div>

        <Link
          href="/work"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
        >
          View all work
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Projects */}
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.title} target="_blank" href={project.href} className="group block">
            {/* Project Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-secondary">
              <div className="relative h-full w-full overflow-hidden bg-background-elevated">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle purple glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.12),transparent_55%)]" />

                {/* Soft bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-medium text-foreground">
                  {project.title}
                </h3>

                <ArrowUpRight
                  size={18}
                  className="text-foreground-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-light"
                />
              </div>

              <p className="mt-3 max-w-2xl leading-7 text-foreground-secondary">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
