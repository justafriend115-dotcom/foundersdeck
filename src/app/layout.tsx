import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "FoundersDeck  AI-powered tools to launch your startup",
    template: "%s | FoundersDeck",
  },
  description:
    "Pitch decks, business plans, financial projections and investor CRM  everything founders need to go from idea to investment-ready, in one place.",
  applicationName: "FoundersDeck",
  keywords: [
    "startup",
    "pitch deck",
    "business plan",
    "founder tools",
    "AI pitch deck",
    "investor CRM",
    "financial projections",
    "contingency planning",
  ],
  authors: [{ name: "FoundersDeck" }],
  creator: "FoundersDeck",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    siteName: "FoundersDeck",
    title: "FoundersDeck  AI-powered tools to launch your startup",
    description:
      "Pitch decks, business plans, financial projections and investor CRM  everything founders need to go from idea to investment-ready.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundersDeck  AI-powered tools to launch your startup",
    description:
      "Pitch decks, business plans, financial projections and investor CRM  everything founders need to go from idea to investment-ready.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
