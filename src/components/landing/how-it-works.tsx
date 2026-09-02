import { FilePlus2, Rocket, Wand2, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up",
    description: "Create your free account in under a minute. No credit card needed.",
  },
  {
    icon: FilePlus2,
    title: "Choose a tool",
    description: "Pick the workflow you need — pitch, plan, projections, legal or CRM.",
  },
  {
    icon: Wand2,
    title: "Generate & refine",
    description: "AI drafts the first version. You refine it with inline guidance.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Export to PDF, share with investors and close your round.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2
            className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From signup to{" "}
            <span className="text-primary">funded</span> in four steps
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground">
                <step.icon className="size-6" />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
