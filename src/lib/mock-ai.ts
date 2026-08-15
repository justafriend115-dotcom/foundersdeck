import type { DeckSlide, PitchInput } from "@/lib/ai/types";

function splitPoints(text: string, max = 3): string[] {
  const sentences = text
    .split(/[.;\n]+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 8);
  return sentences.slice(0, max);
}

function headline(text: string): string {
  const sentence = text.split(/[.;\n]/)[0]?.trim();
  if (sentence && sentence.length > 10) return sentence.slice(0, 90);
  return text.slice(0, 90);
}

function modelForIndustry(industry: string): string {
  const lower = industry.toLowerCase();
  if (/(saas|software|platform|app)/.test(lower)) {
    return "a subscription model with a free tier to drive adoption and monthly/annual plans for scale";
  }
  if (/(product|hardware|e-?commerce|retail|consumer|goods)/.test(lower)) {
    return "a margin-based product model, selling direct-to-consumer and through a growing wholesale channel";
  }
  if (/(service|agency|consult|studio)/.test(lower)) {
    return "a recurring services model built on retainers and project-based engagements";
  }
  return "a diversified model combining recurring revenue with one-time services, designed to compound as the market matures";
}

export function generatePitchDeck(input: PitchInput): DeckSlide[] {
  const company = input.companyName.trim() || "Your Company";
  const industry = input.industry.trim() || "technology";
  const mission = input.mission.trim() || "build a category-defining company";
  const problem = input.problem.trim() || "existing solutions are slow, expensive and confusing";
  const solution = input.solution.trim() || "a fast, simple and affordable solution";

  const problemPoints = splitPoints(problem);
  while (problemPoints.length < 3) {
    problemPoints.push(
      "Teams are losing weeks of time and thousands of dollars to inefficient alternatives",
    );
  }

  const solutionPoints = splitPoints(solution);
  while (solutionPoints.length < 3) {
    solutionPoints.push("Designed to be adopted in days, not months");
    solutionPoints.push("Built on a modern, scalable architecture");
  }

  return [
    {
      title: "Cover",
      bullets: [
        `${company}  a ${industry} company`,
        `Mission: ${headline(mission)}`,
        "Pre-seed · Seed-ready",
      ],
      narrative: `Introducing ${company}. We are building in ${industry}, driven by a clear mission: ${mission}.`,
    },
    {
      title: "Problem",
      bullets: problemPoints,
      narrative: `The market today is broken. ${headline(problem)}. Every week our target customers lose time and money to this pain  and nothing on the market solves it end-to-end.`,
    },
    {
      title: "Solution",
      bullets: solutionPoints,
      narrative: `${company} delivers ${headline(solution)}. The product is designed around the customer journey, removing friction and delivering measurable outcomes from day one.`,
    },
    {
      title: "Market Opportunity",
      bullets: [
        `Fast-growing ${industry} market with clear tailwinds`,
        "Repeatable buying behavior confirmed in early conversations",
        "Expansion path into adjacent segments over 24 months",
      ],
      narrative: `The ${industry} landscape is expanding quickly, and demand for a better option is visible today. Our positioning captures the mainstream early, before competitors consolidate.`,
    },
    {
      title: "Business Model",
      bullets: [
        `Revenue engine built on ${modelForIndustry(industry)}`,
        "Low variable cost per customer as we scale",
        "Clear path to strong unit economics within 12 months",
      ],
      narrative: `We monetize through ${modelForIndustry(industry)}. As adoption grows, fixed costs are amortized across an expanding base, improving margins every quarter.`,
    },
    {
      title: "Traction & Roadmap",
      bullets: [
        "Founder-market fit: we live this problem every day",
        "First pilots and design partners signed",
        "Next 6 months: ship core v1, onboard 50 paying customers",
      ],
      narrative: `Our roadmap is aggressive but deliberate: validate, ship, and scale. With this round, we move from pilots to a repeatable growth engine.`,
    },
    {
      title: "The Ask",
      bullets: [
        "Raising $500K pre-seed",
        "18-month runway to a Series A-ready trajectory",
        "Experienced team, ready to execute immediately",
      ],
      narrative: `We are raising $500K to fund product development and the first wave of growth. In return, investors get a team obsessed with execution and a market ready to be captured.`,
    },
  ];
}

export function generateBusinessPlanSuggestion(step: string): string {
  switch (step) {
    case "summary":
      return "This plan sets out the strategy, market opportunity and financial trajectory for the company over the next 12–24 months, with a focus on reaching profitability while building durable competitive advantages.";
    case "market":
      return "We are entering a growing market currently served by fragmented, outdated alternatives. Our segmentation targets early adopters first, then expands to the mainstream as the product matures and evidence compounds.";
    case "product":
      return "The product solves a high-frequency pain point with a 10x better experience. Development follows an iterative roadmap that ships measurable value every sprint, guided by direct customer feedback.";
    case "marketing":
      return "Growth combines always-on content and community channels with performance marketing that scales once unit economics are proven. Partnerships extend reach into adjacent audiences at near-zero CAC.";
    case "financials":
      return "We operate a capital-efficient model: startup costs are minimized until product-market fit is demonstrated, then growth spend is unlocked and tied to retention and payback targets.";
    case "team":
      return "The founding team combines deep domain expertise with proven execution. Additional hires are sequenced around product, sales and community as revenue milestones are hit.";
    case "milestones":
      return "Within 12 months: launch v1, reach first 100 paying customers, and hit a monthly run rate that covers core operating costs. Year two focuses on expanding the channel mix and building toward Series A readiness.";
    default:
      return "Focus on one clear objective per quarter, and tie every decision back to the customer problem.";
  }
}

export function generatePitchSuggestion(field: string): string {
  switch (field) {
    case "problem":
      return "The current way of solving this costs teams weeks of time and thousands in wasted effort each quarter. Incumbents are slow, pricing is opaque, and nothing is purpose-built for this workflow.";
    case "solution":
      return "Our solution automates the core workflow, cutting time-to-done from weeks to days. It works with existing tools, requires no migration, and pays for itself within the first quarter.";
    case "mission":
      return "To make world-class execution available to every founder, removing the busywork between idea and investment-ready.";
    default:
      return "We are obsessed with this problem and have been living it daily  that is why the solution fits like a glove.";
  }
}
