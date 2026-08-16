"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-lg bg-primary deckademy-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-muted/40 print:hidden"
    >
      <Printer className="size-4" /> Print / Save PDF
    </button>
  );
}
