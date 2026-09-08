"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, type Variants } from "motion/react";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background-secondary">
      {/* CTA */}
      <section className="relative overflow-hidden">
        {/* Ambient purple glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={reveal}
              className="mb-5 font-mono text-sm text-primary-light"
            >
              Have something worth building?
            </motion.p>

            <motion.h2
              variants={reveal}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Let&apos;s turn the idea into something people{" "}
              <span className="text-primary-light">love to use.</span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-2xl text-lg leading-8 text-foreground-secondary"
            >
              Whether you&apos;re building a new product, scaling an existing
              application, or solving a complex frontend problem, I&apos;d love
              to hear about it.
            </motion.p>

            <motion.div variants={reveal} className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
              >
                Let&apos;s talk

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main footer */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]"
          >
            {/* Brand */}
            <motion.div variants={reveal}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground"
              >
                Adetayo
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-foreground-secondary">
                Frontend engineer building scalable, thoughtful digital
                products with React, Next.js and TypeScript.
              </p>

              {/* Availability */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>

                <span className="text-xs text-foreground-secondary">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={reveal}>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="/about"
                  className="w-fit text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  About
                </Link>

                <Link
                  href="/work"
                  className="w-fit text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  Work
                </Link>

                <Link
                  href="/experience"
                  className="w-fit text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  Experience
                </Link>
              </nav>
            </motion.div>

            {/* Connect */}
            <motion.div variants={reveal}>
              <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://github.com/adebammytayo123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  <FaGithub size={16} />
                  GitHub

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/adetayo-adetokun-9357801bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  <FaLinkedinIn size={16} />
                  LinkedIn

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>

                <a
                  href="mailto:adetayoadetokun@gmail.com"
                  className="group flex w-fit items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                >
                  <Mail size={16} />
                  Email

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© {new Date().getFullYear()} Adetayo Adetokun</p>

            <p className="font-mono">
              Built with Next.js · TypeScript · curiosity
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
