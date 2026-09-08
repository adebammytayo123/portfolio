import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AboutPreview = () => {
    return (
        <section className="border-t border-border bg-background-secondary">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <p className="font-mono text-sm text-primary-light">
                            07 — About
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Beyond the code.
                        </h2>
                    </div>

                    <div>
                        <p className="text-2xl leading-relaxed tracking-tight text-foreground sm:text-3xl">
                            I&apos;m a frontend engineer who enjoys turning complex problems
                            into simple experiences.
                        </p>

                        <p className="mt-8 max-w-2xl leading-7 text-foreground-secondary">
                            I care about good architecture, thoughtful interfaces and
                            continuously improving the craft. I enjoy working on products
                            where engineering decisions have a meaningful impact on the
                            people using them.
                        </p>

                        <Link
                            href="/about"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                            More about me
                            <ArrowUpRight
                                size={16}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;