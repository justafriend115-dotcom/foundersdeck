import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-navy-950 shadow-lg shadow-brand-500/20 ring-1 ring-brand-500/30">
        <svg
          width="20"
          height="20"
          viewBox="0 0 210 210"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EAD9AC" />
              <stop offset="100%" stopColor="#B8914D" />
            </linearGradient>
          </defs>
          <polygon
            points="105,32 168,105 105,178 42,105"
            fill="none"
            stroke="url(#logo-gold)"
            strokeWidth="3"
          />
          <polygon points="105,32 168,105 105,105" fill="url(#logo-gold)" opacity="0.85" />
          <polygon points="105,105 168,105 105,178" fill="url(#logo-gold)" opacity="0.55" />
          <polygon points="105,32 105,105 42,105" fill="url(#logo-gold)" opacity="0.7" />
          <polygon points="42,105 105,105 105,178" fill="url(#logo-gold)" opacity="0.35" />
        </svg>
      </span>
      <span
        className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-foreground")}
      >
        Founders<span className="text-gradient">Deck</span>
      </span>
    </Link>
  );
}
