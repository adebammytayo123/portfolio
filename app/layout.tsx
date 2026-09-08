import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adetayo Adetokun — Frontend Engineer",
    template: "%s — Adetayo Adetokun",
  },
  description:
    "Portfolio of Adetayo Adetokun, a frontend engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",
  keywords: [
    "Adetayo Adetokun",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [
    {
      name: "Adetayo Adetokun",
    },
  ],
  creator: "Adetayo Adetokun",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Adetayo Adetokun — Frontend Engineer",
    description:
      "Frontend engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Adetayo Adetokun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adetayo Adetokun — Frontend Engineer",
    description:
      "Frontend engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
