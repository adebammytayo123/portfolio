import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-sm text-foreground-muted">
            <span className="h-px w-8 bg-primary" />
            Frontend Engineer
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
            I build
            <br />
            <span className="text-primary-light">
              scalable digital products.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground-secondary sm:text-xl">
            I turn complex product requirements into fast, intuitive and
            maintainable web applications using React, Next.js and TypeScript.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
            >
              View my work
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary-subtle"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-border pt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
            <span className="text-primary-light">01</span>
            <span>/</span>
            <span>Frontend engineering</span>
          </div>

          <ArrowDown
            size={16}
            className="animate-bounce text-foreground-muted"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
