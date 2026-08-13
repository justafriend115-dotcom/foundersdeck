import { Sparkles } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30">
        <Sparkles className="size-5 text-white" />
      </span>
      <span
        className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-foreground")}
      >
        Founders<span className="text-gradient">Deck</span>
      </span>
    </Link>
  );
}
