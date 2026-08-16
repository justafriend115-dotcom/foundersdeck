import { Logo } from "@/components/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-navy-950 p-12 lg:flex">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-steel-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 size-96 rounded-full bg-slate-600/20 blur-3xl" />
        <div className="relative">
          <Logo dark />
        </div>
        <div className="relative max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white">
            Raise your first round with confidence.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100/80">
            Pitch decks, business plans, financials and investor CRM  everything founders need
            before they walk into the room.
          </p>
        </div>
      </aside>
      <main className="flex items-center justify-center px-4 py-12 sm:px-8">{children}</main>
    </div>
  );
}
