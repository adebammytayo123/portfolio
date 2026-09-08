"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Layout from "../components/layout/Layout";
import Reveal from "../components/animations/Reveal";
import RevealGroup from "../components/animations/RevealGroup";
import RevealItem from "../components/animations/RevealItem";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (formData: FormData): FormErrors => {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const newErrors: FormErrors = {};

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Please enter a subject.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!message) {
      newErrors.message = "Please enter a message.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <Reveal>
              <div className="max-w-4xl">
                <p className="mb-6 font-mono text-sm text-primary-light">
                  05 — Contact
                </p>

                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                  Have something{" "}
                  <span className="text-primary-light">worth building?</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground-secondary sm:text-xl">
                  Whether you&apos;re building a new product, improving an
                  existing application, or looking for someone to help solve a
                  difficult frontend problem, I&apos;d be glad to hear about it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              {/* Contact information */}
              <RevealGroup>
                <RevealItem>
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                    Get in touch
                  </p>
                </RevealItem>
                <RevealItem>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                    Let&apos;s start a conversation.
                  </h2>
                </RevealItem>
                <RevealItem>
                  <p className="mt-5 max-w-md text-sm leading-6 text-foreground-secondary">
                    Tell me a little about what you&apos;re working on, what you
                    need help with, or simply say hello. I&apos;ll get back to
                    you as soon as I can.
                  </p>
                </RevealItem>
                {/* Email */}
                <RevealItem>
                  <a
                    href="mailto:adetayoadetokun@gmail.com"
                    className="group mt-10 flex w-fit items-center gap-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-secondary text-primary-light transition-colors group-hover:border-primary/40">
                      <Mail size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-foreground-muted">Email</p>

                      <p className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary-light">
                        adetayoadetokun@gmail.com
                      </p>
                    </div>
                  </a>
                </RevealItem>
                {/* Location */}
                <RevealItem>
                  <div className="mt-6 flex w-fit items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-secondary text-primary-light">
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-foreground-muted">Based in</p>

                      <p className="mt-1 text-sm font-medium text-foreground">
                        Ibadan, Nigeria
                      </p>
                    </div>
                  </div>
                </RevealItem>
                {/* Socials */}
                <RevealItem>
                  <div className="mt-10 border-t border-border pt-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                      Connect
                    </p>

                    <div className="mt-5 flex gap-3">
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
                    </div>
                  </div>
                </RevealItem>
              </RevealGroup>

              {/* Form */}
              <Reveal delay={0.15} y={32}>
                <div className="rounded-2xl border border-border bg-background-secondary p-6 sm:p-8 lg:p-10">
                  <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary-light">
                      Send a message
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                      Tell me what you&apos;re working on.
                    </h2>
                  </div>

                  <form
                    className="space-y-6"
                    onSubmit={(event: FormEvent<HTMLFormElement>) => {
                      event.preventDefault();

                      const form = event.currentTarget;
                      const formData = new FormData(form);

                      const validationErrors = validateForm(formData);

                      setErrors(validationErrors);
                      setStatus("idle");

                      if (Object.keys(validationErrors).length > 0) {
                        return;
                      }

                      const name = String(formData.get("name") || "").trim();
                      const email = String(formData.get("email") || "").trim();
                      const subject = String(
                        formData.get("subject") || "",
                      ).trim();
                      const message = String(
                        formData.get("message") || "",
                      ).trim();

                      const body = `Hello Adetayo,

                      ${message}

                      Warm Regards,
                      ${name}
                      ${email}
                      `;

                      const mailtoUrl = `mailto:adetayoadetokun@gmail.com?subject=${encodeURIComponent(
                        subject,
                      )}&body=${encodeURIComponent(body)}`;

                      window.location.href = mailtoUrl;
                    }}
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                          className={`h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground-muted focus:ring-2 focus:ring-primary/10 ${
                            errors.name
                              ? "border-danger focus:border-danger"
                              : "border-border focus:border-primary/60"
                          }`}
                        />

                        {errors.name && (
                          <p
                            id="name-error"
                            className="mt-2 text-xs text-danger"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-foreground"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={`h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground-muted focus:ring-2 focus:ring-primary/10 ${
                            errors.email
                              ? "border-danger focus:border-danger"
                              : "border-border focus:border-primary/60"
                          }`}
                        />

                        {errors.email && (
                          <p
                            id="email-error"
                            className="mt-2 text-xs text-danger"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What would you like to discuss?"
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        className={`h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground-muted focus:ring-2 focus:ring-primary/10 ${
                          errors.subject
                            ? "border-danger focus:border-danger"
                            : "border-border focus:border-primary/60"
                        }`}
                      />

                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="mt-2 text-xs text-danger"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me a little about your project, opportunity, or idea..."
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-foreground-muted focus:ring-2 focus:ring-primary/10 ${
                          errors.message
                            ? "border-danger focus:border-danger"
                            : "border-border focus:border-primary/60"
                        }`}
                      />

                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-2 text-xs text-danger"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send message
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                    {status === "success" && (
                      <p className="text-center text-sm text-success">
                        Thanks — your message has been sent successfully.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="text-center text-sm text-danger">
                        Something went wrong. Please try again or email me
                        directly.
                      </p>
                    )}

                    {status === "idle" && (
                      <p className="text-center text-xs text-foreground-muted">
                        I&apos;ll usually respond within 1–2 business days.
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="border-t border-border bg-background-secondary">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    Available for opportunities
                  </span>
                </div>

                <p className="mt-2 text-sm text-foreground-secondary">
                  Open to interesting products, engineering challenges, and
                  meaningful collaborations.
                </p>
              </div>

              <Link
                href="mailto:adetayoadetokun@gmail.com"
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary-light"
              >
                Email me
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
