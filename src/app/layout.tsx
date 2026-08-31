import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NextSolves — The Operating System for the Future Campus",
    template: "%s | NextSolves",
  },
  description:
    "PWS (Practical Workflow System) by NextSolves digitizes the examination lifecycle — from question-paper generation through practical examination, evaluation, and result generation. A paperless, secure, and efficient examination platform for modern colleges.",
  keywords: [
    "practical exam software",
    "digital examination system",
    "college examination management",
    "paperless examination system",
    "online practical exam",
    "digital campus",
    "examination automation",
    "PWS",
    "NextSolves",
  ],
  authors: [{ name: "NextSolves" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "NextSolves",
    title: "NextSolves — The Operating System for the Future Campus",
    description:
      "From Question Papers to Practical Exams — We Automate Everything. PWS is an end-to-end digital examination platform for modern colleges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextSolves — The Operating System for the Future Campus",
    description:
      "From Question Papers to Practical Exams — We Automate Everything.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
