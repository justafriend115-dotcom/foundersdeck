import Link from "next/link";

import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Deckademy", href: "/deckademy" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Changelog", href: "/coming-soon" },
      { label: "Roadmap", href: "/coming-soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/coming-soon" },
      { label: "Blog", href: "/coming-soon" },
      { label: "Contact", href: "mailto:hello@foundersdeck.co" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "/coming-soon" },
      { label: "Templates", href: "/coming-soon" },
      { label: "Investor guides", href: "/coming-soon" },
      { label: "API docs", href: "/coming-soon" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "DPA", href: "/legal/dpa" },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-border bg-card text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              The toolkit for pre-seed founders — pitch decks, business plans, financials and
              investor outreach, all in one place.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-foreground"
                      {...(link.href.startsWith("mailto:") || link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FoundersDeck. All rights reserved.
          </p>
          <p className="text-sm">Made for founders, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
