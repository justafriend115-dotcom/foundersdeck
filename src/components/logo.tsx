import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-background ring-1 ring-border">
        <svg
          width="22"
          height="20"
          viewBox="0 0 80 72"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* back card */}
          <rect x="20" y="4"  width="52" height="40" rx="5" fill="rgba(201,164,65,0.12)" stroke="#C9A441" strokeWidth="1.6" opacity="0.38" />
          {/* middle card */}
          <rect x="12" y="14" width="52" height="40" rx="5" fill="rgba(201,164,65,0.14)" stroke="#C9A441" strokeWidth="1.6" opacity="0.62" />
          {/* front card */}
          <rect x="4"  y="24" width="52" height="40" rx="5" fill="rgba(201,164,65,0.18)" stroke="#C9A441" strokeWidth="1.8" />
          {/* slide content lines */}
          <line x1="12" y1="37" x2="47" y2="37" stroke="#C9A441" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
          <line x1="12" y1="44" x2="38" y2="44" stroke="#C9A441" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
        </svg>
      </span>

      <span
        className={cn("text-lg tracking-tight", dark ? "text-white" : "text-foreground")}
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Founders
        <span className="italic" style={{ color: "var(--primary)" }}>
          Deck
        </span>
      </span>
    </Link>
  );
}
