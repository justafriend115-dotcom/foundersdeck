import { Sparkles } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-950 via-zinc-800 to-brand-600 shadow-lg shadow-zinc-950/30">
        <Sparkles className="size-5 text-brand-300" />
      </span>
      <span
        className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-foreground")}
      >
        Founders<span className="text-gradient">Deck</span>
      </span>
    </Link>
  );
}
