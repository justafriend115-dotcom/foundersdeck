"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "DECKADEMY", href: "/deckademy", highlight: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="rounded-full border border-[#C9A441]/40 bg-[#C9A441]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#C9A441]">
            Beta
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                link.highlight
                  ? "font-semibold text-[#C9A441] hover:text-[#C9A441]/80"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Log in
          </Link>
          <Link href="/signup" className={buttonVariants({ variant: "gradient", size: "sm" })}>
            Join the Beta
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-border/60 border-t bg-background px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                  link.highlight ? "text-[#C9A441]" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: "outline" })}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "gradient" }), "w-full")}
            >
              Join the Beta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
