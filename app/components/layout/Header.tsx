"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle";
import { House } from "lucide-react";

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Experience",
    href: "/experience",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-foreground transition-colors hover:bg-primary/10">
            <House size={18} strokeWidth={2} />
          </span>

          <span className="text-foreground">Adetayo</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground-secondary hover:text-foreground"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary-light transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                  }`}
                />

                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-primary/20 blur-md" />
                )}
              </Link>
            );
          })}

          {/* Availability */}
          <div className="hidden items-center gap-2 rounded-full border border-border bg-background-secondary px-3 py-1.5 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>

            <span className="text-xs font-medium text-foreground-secondary">
              Available
            </span>
          </div>

          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
