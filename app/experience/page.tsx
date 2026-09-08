import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Users,
} from "lucide-react";
import Layout from "../components/layout/Layout";

const experiences = [
  {
    period: "Jan 2026 — Jun 2026",
    role: "Engineering Manager",
    company: "SmartComply Seequre",
    location: "Lagos, Nigeria",
    type: "Leadership",
    description:
      "Led a team of five engineers while remaining hands-on with frontend development, balancing delivery priorities, technical quality, and long-term maintainability.",
    responsibilities: [
      "Led sprint planning, technical discussions, code reviews, and feature delivery across the engineering team.",
      "Mentored frontend engineers through one-on-ones, technical guidance, and structured code reviews.",
      "Established engineering and code review practices that improved consistency and maintainability.",
      "Partnered closely with Product, Design, and Backend teams to plan and deliver product releases.",
      "Continued contributing hands-on to critical frontend features and improvements to the engineering delivery process.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "REST APIs",
    ],
  },
  {
    period: "Jan 2023 — Dec 2025",
    role: "Senior Frontend Engineer",
    company: "SmartComply Seequre",
    location: "Lagos, Nigeria",
    type: "Engineering",
    description:
      "Led frontend development for enterprise cybersecurity products covering vendor risk management, compliance, questionnaires, and security assessment workflows.",
    responsibilities: [
      "Architected reusable frontend modules and component systems that reduced duplication and accelerated feature delivery.",
      "Built complex dynamic forms, dashboards, questionnaires, and workflow-driven interfaces using React and TypeScript.",
      "Designed frontend solutions for complex enterprise workflows where usability, consistency, and data accuracy were critical.",
      "Integrated REST APIs and managed server state with React Query to improve responsiveness and data consistency.",
      "Improved application performance through lazy loading, code splitting, and component-level optimization.",
      "Mentored frontend engineers through technical guidance, one-on-ones, and code reviews.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "REST APIs",
    ],
  },
  {
    period: "Aug 2021 — Nov 2022",
    role: "Frontend Engineer",
    company: "Simple Finance",
    location: "Lagos, Nigeria",
    type: "Engineering",
    description:
      "Developed internal fintech applications supporting employee onboarding, payroll, utility payments, and business operations.",
    responsibilities: [
      "Built intuitive interfaces for business-critical financial and operational workflows.",
      "Developed onboarding, payroll, and utility-payment modules used across internal business processes.",
      "Worked closely with backend engineers to integrate secure APIs and translate business requirements into reliable interfaces.",
      "Improved workflow efficiency and usability, contributing to a 60% reduction in loan processing time.",
      "Built responsive experiences across business applications and improved day-to-day usability for internal users.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
    ],
  },
];

const achievements = [
  {
    value: "60%",
    label: "Reduction in loan processing time",
    description:
      "Improved financial workflows through better frontend experiences and process optimization.",
  },
  {
    value: "5",
    label: "Engineers led",
    description:
      "Provided technical leadership, mentorship, planning, and delivery support as Engineering Manager.",
  },
  {
    value: "5+",
    label: "Years of experience",
    description:
      "Building production applications across enterprise SaaS, cybersecurity, fintech, and digital products.",
  },
];

const technicalFocus = [
  "Frontend Architecture",
  "React & Next.js",
  "TypeScript",
  "Reusable Component Systems",
  "State Management",
  "API Integration",
  "Form & Workflow Systems",
  "Performance Optimization",
  "Responsive Design",
  "Design Systems",
  "Technical Leadership",
  "Mentoring",
];

const ExperiencePage = () => {
  return (
    <Layout>
    <main>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-sm text-primary-light">
              04 — Experience
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Building products,{" "}
              <span className="text-primary-light">
                growing into leadership.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-foreground-secondary sm:text-xl">
              Over the past 5+ years, I&apos;ve worked across enterprise SaaS,
              cybersecurity, fintech, and digital products—progressing from
              frontend engineering into technical leadership while staying
              deeply hands-on with the work.
            </p>
          </div>
        </div>
      </section>

      {/* Career */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
            {/* Section intro */}
            <div>
              <div className="sticky top-32">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                  Career
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  Experience
                </h2>

                <p className="mt-4 text-sm leading-6 text-foreground-secondary">
                  A progression from building interfaces to owning systems,
                  mentoring engineers, and helping teams ship better products.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative"
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[7px] top-10 hidden h-[calc(100%+4rem)] w-px bg-border sm:block" />
                  )}

                  <div className="grid gap-6 sm:grid-cols-[16px_1fr]">
                    {/* Timeline marker */}
                    <div className="relative z-10 mt-2 hidden sm:block">
                      <div className="h-4 w-4 rounded-full border-4 border-background bg-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-mono text-xs text-primary-light">
                            {experience.period}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-base text-foreground-secondary">
                            {experience.company} · {experience.location}
                          </p>
                        </div>

                        <span className="w-fit rounded-full border border-border bg-background-secondary px-3 py-1 text-xs text-foreground-muted">
                          {experience.type}
                        </span>
                      </div>

                      <p className="mt-6 max-w-3xl text-base leading-7 text-foreground-secondary">
                        {experience.description}
                      </p>

                      <div className="mt-8">
                        <p className="mb-4 text-sm font-medium text-foreground">
                          What I worked on
                        </p>

                        <ul className="space-y-3">
                          {experience.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-foreground-secondary"
                            >
                              <CheckCircle2
                                size={16}
                                className="mt-1 shrink-0 text-primary-light"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border bg-background-secondary px-3 py-1.5 text-xs text-foreground-secondary"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-y border-border bg-background-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-primary-light">
              Impact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The work behind the numbers.
            </h2>

            <p className="mt-5 text-base leading-7 text-foreground-secondary">
              I care about more than shipping features. The goal is to build
              systems that make products easier to use, teams easier to scale,
              and engineering work easier to maintain.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="bg-background-secondary p-8 lg:p-10"
              >
                <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {achievement.value}
                </p>

                <p className="mt-4 text-sm font-medium text-foreground">
                  {achievement.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary-light">
                Leadership
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Technical leadership without losing touch with the code.
              </h2>

              <p className="mt-6 text-base leading-7 text-foreground-secondary">
                Moving into engineering management expanded my perspective
                beyond individual features. I became responsible not only for
                what we built, but also for how the team worked, how decisions
                were made, and how engineering quality was maintained.
              </p>

              <p className="mt-5 text-base leading-7 text-foreground-secondary">
                I bring that same mindset to frontend engineering: understand
                the product, question assumptions, make thoughtful technical
                decisions, and create systems that allow other engineers to
                move faster.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <Users
                  size={22}
                  className="text-primary-light"
                />

                <h3 className="mt-5 font-semibold text-foreground">
                  Mentorship
                </h3>

                <p className="mt-2 text-sm leading-6 text-foreground-secondary">
                  Helping engineers grow through technical guidance, code
                  reviews, one-on-ones, and collaborative problem solving.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <Code2
                  size={22}
                  className="text-primary-light"
                />

                <h3 className="mt-5 font-semibold text-foreground">
                  Engineering standards
                </h3>

                <p className="mt-2 text-sm leading-6 text-foreground-secondary">
                  Establishing practices around code quality, consistency,
                  maintainability, and technical decision-making.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background-secondary p-6">
                <BriefcaseBusiness
                  size={22}
                  className="text-primary-light"
                />

                <h3 className="mt-5 font-semibold text-foreground">
                  Cross-functional delivery
                </h3>

                <p className="mt-2 text-sm leading-6 text-foreground-secondary">
                  Working closely with Product, Design, and Backend teams to
                  turn product requirements into reliable experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical focus */}
      <section className="border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary-light">
                Technical focus
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                What I bring to a team.
              </h2>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {technicalFocus.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground-secondary transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background-elevated px-8 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <p className="font-mono text-sm text-primary-light">
                Let&apos;s build
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Looking for an engineer who thinks beyond the interface?
              </h2>

              <p className="mt-5 text-base leading-7 text-foreground-secondary">
                I&apos;m interested in working on products where engineering
                quality, thoughtful UX, and strong collaboration matter.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default ExperiencePage;
