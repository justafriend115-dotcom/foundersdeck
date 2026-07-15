// client/src/tools/toolConfig.js

export const TOOLS = [
  // ── Pitch & Fundraising ──────────────────────────────────────────
  { id: "pitch-deck",          category: "pitch",     type: "ai",         icon: "📊", label: "Pitch Deck Generator",    description: "10-slide investor deck outline with speaker notes" },
  { id: "pitch-deck-builder",  category: "pitch",     type: "calculator", icon: "🎨", label: "Pitch Deck Builder",      description: "Create and customize a professional pitch deck (no API)" },
  { id: "pitch-video",         category: "pitch",     type: "ai",         icon: "🎬", label: "Pitch Video Script",      description: "2-minute pitch video script with visual cues" },
  { id: "investor-email",      category: "pitch",     type: "ai",         icon: "✉️", label: "Investor Cold Email",     description: "Personalized cold outreach email to investors" },
  { id: "term-sheet-explainer",category: "pitch",     type: "ai",         icon: "📋", label: "Term Sheet Explainer",    description: "Plain-English breakdown of any term sheet clause" },
  { id: "investor-one-pager",  category: "pitch",     type: "ai",         icon: "📄", label: "Investor One-Pager",      description: "Single-page company overview for investor meetings" },
  { id: "fundraising-tracker", category: "pitch",     type: "calculator", icon: "📡", label: "Fundraising Tracker",     description: "Track your investor pipeline from contact to close" },
  { id: "safe-calculator",     category: "pitch",     type: "calculator", icon: "🧮", label: "SAFE Note Calculator",    description: "Calculate dilution, valuation cap, and discount outcomes" },

  // ── Legal & Compliance ───────────────────────────────────────────
  { id: "cofounder-agreement", category: "legal",     type: "ai",         icon: "🤝", label: "Co-Founder Agreement",    description: "Draft equity, roles, vesting, and IP assignment terms" },
  { id: "safe-explainer",      category: "legal",     type: "ai",         icon: "📑", label: "SAFE Note Explainer",     description: "Explain SAFE note terms in plain language" },
  { id: "cap-table",           category: "legal",     type: "calculator", icon: "📈", label: "Cap Table Builder",       description: "Interactive cap table with founders, investors, options pool" },

  // ── Go-to-Market ─────────────────────────────────────────────────
  { id: "launch-checklist",    category: "gtm",       type: "ai",         icon: "✅", label: "Launch Checklist",        description: "30-item pre-launch checklist tailored to your product" },
  { id: "press-release",       category: "gtm",       type: "ai",         icon: "📰", label: "Press Release",           description: "Publication-ready press release for your launch" },
  { id: "landing-page-copy",   category: "gtm",       type: "ai",         icon: "🖥️", label: "Landing Page Copy",       description: "Headline, features, CTA, FAQs — full page copy" },
  { id: "positioning",         category: "gtm",       type: "ai",         icon: "🎯", label: "Positioning Statement",   description: "Category, customer, differentiation, and value prop" },

  // ── Team & Hiring ────────────────────────────────────────────────
  { id: "job-description",     category: "team",      type: "ai",         icon: "📝", label: "Job Description",         description: "Full JD with responsibilities, requirements, and culture fit" },
  { id: "equity-split",        category: "team",      type: "calculator", icon: "🥧", label: "Equity Split Calculator", description: "Fair equity split across co-founders by contribution" },
  { id: "culture-doc",         category: "team",      type: "ai",         icon: "🏛️", label: "Culture & Values Doc",    description: "Company values, working norms, and culture statement" },
  { id: "hiring-scorecard",    category: "team",      type: "ai",         icon: "🎖️", label: "Hiring Scorecard",        description: "Interview scorecard template for any role" },

  // ── Financial ────────────────────────────────────────────────────
  { id: "financials",          category: "financial", type: "ai",         icon: "💰", label: "Financial Tracker",       description: "CFO-style overview, KPIs, burn analysis, investor readiness" },
  { id: "projections",         category: "financial", type: "ai",         icon: "📈", label: "Revenue Projections",     description: "3-scenario 3-year financial projection tables" },
  { id: "unit-economics",      category: "financial", type: "calculator", icon: "🔢", label: "Unit Economics",          description: "CAC, LTV, LTV:CAC ratio, payback period, gross margin" },
];

export const FIELDS_BASE = [
  { key: "company",  label: "Company Name",     placeholder: "e.g. Acme AI" },
  { key: "industry", label: "Industry",          placeholder: "e.g. FinTech, HealthTech, SaaS" },
  { key: "problem",  label: "Problem You Solve", placeholder: "What pain point do you address?" },
  { key: "solution", label: "Your Solution",     placeholder: "How do you solve it?" },
  { key: "market",   label: "Target Market",     placeholder: "Who are your customers?" },
  { key: "model",    label: "Business Model",    placeholder: "e.g. SaaS subscription, marketplace" },
  { key: "stage",    label: "Startup Stage",     placeholder: "e.g. Pre-seed, Seed, Series A" },
];

export const FIELDS_EXTRA = {
  "investor-email": [
    { key: "investorName", label: "Investor Name", placeholder: "e.g. Sarah Chen" },
    { key: "investorFirm", label: "Investor Firm", placeholder: "e.g. Sequoia Capital" },
    { key: "raise", label: "Raise Amount", placeholder: "e.g. $1.5M" }
  ],
  "term-sheet-explainer": [
    { key: "clause", label: "Term Sheet Clause to Explain", placeholder: "Paste the clause or term you want explained..." }
  ],
  "investor-one-pager": [
    { key: "traction", label: "Key Traction Metrics", placeholder: "e.g. $10k MRR, 500 users, 20% MoM growth" },
    { key: "raise", label: "Amount Raising", placeholder: "e.g. $1.5M Seed" }
  ],
  "safe-explainer": [
    { key: "safeTerms", label: "SAFE Terms to Explain", placeholder: "Paste your SAFE note terms or specific clauses..." }
  ],
  "cofounder-agreement": [
    { key: "cofounderCount", label: "Number of Co-Founders", placeholder: "e.g. 2" },
    { key: "roles", label: "Roles", placeholder: "e.g. CEO (technical), COO (business)" }
  ],
  "press-release": [
    { key: "announcement", label: "What are you announcing?", placeholder: "e.g. Product launch, funding round, partnership" },
    { key: "launchDate", label: "Launch Date", placeholder: "e.g. January 15, 2026" }
  ],
  "landing-page-copy": [
    { key: "productName", label: "Product Name", placeholder: "e.g. Acme Dashboard" },
    { key: "primaryCTA", label: "Primary CTA", placeholder: "e.g. Start free trial, Get early access" }
  ],
  "positioning": [
    { key: "competitors", label: "Main Competitors", placeholder: "e.g. Notion, Asana, Monday.com" },
    { key: "differentiator", label: "Key Differentiator", placeholder: "What makes you unique?" }
  ],
  "job-description": [
    { key: "role", label: "Role Title", placeholder: "e.g. Senior Full-Stack Engineer" },
    { key: "remote", label: "Remote / In-person / Hybrid", placeholder: "e.g. Remote-first" },
    { key: "salary", label: "Salary Range (optional)", placeholder: "e.g. $120k–$150k + equity" }
  ],
  "culture-doc": [
    { key: "values", label: "Core Values (optional)", placeholder: "e.g. Speed, transparency, ownership — or leave blank" }
  ],
  "hiring-scorecard": [
    { key: "role", label: "Role You're Hiring For", placeholder: "e.g. Head of Marketing" }
  ],
  "financials": [
    { key: "revenue", label: "Monthly Revenue ($)", placeholder: "e.g. $12,000 or Pre-revenue" },
    { key: "burn", label: "Monthly Burn Rate ($)", placeholder: "e.g. $25,000" },
    { key: "headcount", label: "Team Size", placeholder: "e.g. 4" }
  ],
  "projections": [
    { key: "revenue", label: "Current Monthly Revenue ($)", placeholder: "e.g. $8,000 or $0" },
    { key: "revenueStream", label: "Primary Revenue Stream", placeholder: "e.g. monthly subscriptions" }
  ],
  "launch-checklist": [
    { key: "launchType", label: "Launch Type", placeholder: "e.g. B2B SaaS, mobile app, marketplace, physical product" },
    { key: "timeline", label: "Launch Timeline", placeholder: "e.g. 6 weeks" }
  ],
};
