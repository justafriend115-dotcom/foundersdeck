"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-lg bg-navy-800 px-4 py-2 text-sm font-semibold text-brand-200 shadow-lg shadow-black/25 print:hidden"
    >
      <Printer className="size-4" /> Print / Save PDF
    </button>
  );
}
