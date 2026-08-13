import { Star } from "lucide-react";

import { Logo } from "@/components/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 lg:flex">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="relative">
          <Logo dark />
        </div>
        <div className="relative max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white">
            Raise your first round with confidence.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-indigo-100">
            Pitch decks, business plans, financials and investor CRM — everything founders need
            before they walk into the room.
          </p>
        </div>
        <div className="relative flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-indigo-100">Joined by 2,400+ founders</p>
        </div>
      </aside>
      <main className="flex items-center justify-center px-4 py-12 sm:px-8">{children}</main>
    </div>
  );
}
