import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "We went from zero to a polished deck in one evening. The first angel meeting we booked came straight from a PDF exported out of FoundersDeck.",
    name: "Maya Chen",
    title: "Founder, Loopify",
    initials: "MC",
    gradient: "from-zinc-300 to-zinc-500",
  },
  {
    quote:
      "The contingency planner made us look like veterans. Investors loved that we had already thought through the worst case — and had a pivot ready.",
    name: "Daniel Okafor",
    title: "CEO, Karbon",
    initials: "DO",
    gradient: "from-zinc-700 to-zinc-950",
  },
  {
    quote:
      "I used to freeze at the financials. The projections tool walked me through a model that our accelerator actually approved on the first pass.",
    name: "Sofia Reyes",
    title: "Co-founder, Northbeam",
    initials: "SR",
    gradient: "from-brand-500 to-brand-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Wall of love
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Founders who <span className="text-gradient">raised faster</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col justify-between hover:shadow-soft">
              <CardContent className="pt-6">
                <Quote className="size-8 text-brand-200" />
                <p className="text-foreground/90 mt-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </CardContent>
              <div className="flex items-center gap-3 border-t border-border p-6">
                <span
                  className={`flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
