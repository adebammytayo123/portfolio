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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adetokun Adetayo Nimota",
  url: "https://yourdomain.com",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",
  knowsAbout: [
    "Frontend Development",
    "Software Engineering",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Redux",
    "React Query",
    "Web Development",
    "Frontend Architecture",
    "Engineering Management",
  ],
  sameAs: [
    "https://www.linkedin.com/in/yourprofile",
    "https://github.com/yourusername",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Adetokun Adetayo Nimota — Frontend Engineer",
    template: "%s — Adetokun Adetayo Nimota",
  },

  description:
    "Portfolio of Adetokun Adetayo Nimota, a frontend engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",

  keywords: [
    "Adetokun Adetayo Nimota",
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
      name: "Adetokun Adetayo Nimota",
    },
  ],

  creator: "Adetokun Adetayo Nimota",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Adetokun Adetayo Nimota — Frontend Engineer",
    description:
      "Frontend engineer building scalable, high-quality digital products with React, Next.js, TypeScript, and modern frontend architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Adetokun Adetayo Nimota",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adetokun Adetayo Nimota — Frontend Engineer",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}