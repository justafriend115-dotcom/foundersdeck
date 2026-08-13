export interface StepField {
  key: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  fields: StepField[];
}

export const BUSINESS_PLAN_STEPS: Step[] = [
  {
    id: "summary",
    title: "Executive Summary",
    description:
      "The elevator pitch for your entire business — write it last if it helps, but keep it sharp.",
    fields: [
      {
        key: "vision",
        label: "Your vision",
        placeholder: "What does the company look like at scale?",
        multiline: true,
      },
      {
        key: "elevator",
        label: "Elevator pitch",
        placeholder: "One paragraph on what you do and why it matters.",
        multiline: true,
      },
    ],
  },
  {
    id: "market",
    title: "Market Analysis",
    description: "Who you're selling to, who you're competing with, and why you win.",
    fields: [
      {
        key: "customers",
        label: "Target customers",
        placeholder: "Who has this problem most acutely?",
        multiline: true,
      },
      {
        key: "competitors",
        label: "Competitors & alternatives",
        placeholder: "What do they use today?",
        multiline: true,
      },
      {
        key: "differentiator",
        label: "Your differentiator",
        placeholder: "Why will you win?",
        multiline: true,
      },
    ],
  },
  {
    id: "product",
    title: "Product",
    description: "What you're building and how it will evolve.",
    fields: [
      {
        key: "description",
        label: "Product description",
        placeholder: "What does the product actually do?",
        multiline: true,
      },
      {
        key: "features",
        label: "Key features",
        placeholder: "The 3–5 features that matter most.",
        multiline: true,
      },
      {
        key: "roadmap",
        label: "Roadmap",
        placeholder: "Next 6–12 months of development.",
        multiline: true,
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Sales",
    description: "How customers find you, and how you convert them.",
    fields: [
      {
        key: "channels",
        label: "Acquisition channels",
        placeholder: "Content, community, sales, partnerships…",
        multiline: true,
      },
      {
        key: "pricing",
        label: "Pricing strategy",
        placeholder: "What do you charge, and why?",
        multiline: true,
      },
    ],
  },
  {
    id: "financials",
    title: "Financial Plan",
    description: "The numbers behind the story — keep assumptions conservative.",
    fields: [
      {
        key: "startupCosts",
        label: "Startup costs",
        placeholder: "What do you need before launch?",
        multiline: true,
      },
      {
        key: "model",
        label: "Revenue model",
        placeholder: "How does money enter the business?",
        multiline: true,
      },
      {
        key: "projections",
        label: "12-month projections",
        placeholder: "Revenues, costs, runway.",
        multiline: true,
      },
    ],
  },
  {
    id: "team",
    title: "Team",
    description: "The people executing the plan — and the gaps you'll fill.",
    fields: [
      {
        key: "founders",
        label: "Founding team",
        placeholder: "Who is on the team and what have they built?",
        multiline: true,
      },
      { key: "hiring", label: "Planned hires", placeholder: "Who comes first?", multiline: true },
    ],
  },
  {
    id: "milestones",
    title: "Milestones",
    description: "The milestones that turn the plan into reality.",
    fields: [
      {
        key: "next12",
        label: "Next 12 months",
        placeholder: "The 5 milestones that matter most.",
        multiline: true,
      },
      {
        key: "goals",
        label: "Long-term goals",
        placeholder: "Where do you want the company in 3 years?",
        multiline: true,
      },
    ],
  },
];

export function emptyBusinessPlanValues(): Record<string, string> {
  return Object.fromEntries(
    BUSINESS_PLAN_STEPS.flatMap((step) =>
      step.fields.map((field) => [`${step.id}.${field.key}`, ""]),
    ),
  );
}
