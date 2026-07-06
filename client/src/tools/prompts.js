// client/src/tools/prompts.js

export const PROMPTS = {
  "pitch-deck": (d) => `You are an expert startup pitch coach. Create a detailed pitch deck outline for:

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Problem: ${d.problem}
Solution: ${d.solution}
Target Market: ${d.market}
Business Model: ${d.model}

Generate a 10-slide pitch deck. For each slide provide:
- Slide number and title
- Key message (1 sentence)
- 3-5 bullet points of content to include
- Speaker note tip

Be specific, compelling, and investor-ready.`,

  "pitch-video": (d) => `You are a top startup storytelling coach. Write a 2-minute pitch video script for:

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Problem: ${d.problem} | Solution: ${d.solution} | Market: ${d.market} | Model: ${d.model}

Structure:
- Hook (0:00-0:15): Bold statement or surprising stat
- Problem (0:15-0:35): Make the pain real
- Solution (0:35-1:00): Introduce the product clearly
- Traction/Why Now (1:00-1:25): Momentum or market timing
- Ask/CTA (1:25-2:00): Clear ask

Include [VISUAL CUE] suggestions. Conversational tone, not corporate.`,

  "investor-email": (d) => `You are an expert at investor outreach. Write a cold email to an investor for:

Startup: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Problem: ${d.problem} | Solution: ${d.solution}
Investor: ${d.investorName || "the investor"} at ${d.investorFirm || "their firm"}
Raise: ${d.raise || "not specified"}

Write a cold email that:
- Opens with a warm, specific hook (reference something about the investor or their portfolio)
- Delivers the pitch in 3-4 sentences max
- Mentions one compelling traction metric or milestone
- Ends with a soft, specific ask (15-min call, not "I'd love to connect")
- Is under 200 words total

Write 2 variations: one more direct, one more story-driven. Label them clearly.`,

  "term-sheet-explainer": (d) => `You are a startup lawyer explaining terms to a first-time founder.

Company context: ${d.company} | Stage: ${d.stage}
Clause to explain: ${d.clause || "Not provided — explain common term sheet terms generally"}

Explain in plain English:
1. What this term/clause means in simple language
2. Why investors include it
3. What founders should watch out for
4. What is negotiable and what is standard
5. Red flags if any
6. Founder-friendly alternatives if applicable

Be direct and practical. No legal jargon without explanation.`,

  "investor-one-pager": (d) => `You are a startup pitch expert. Write a concise investor one-pager for:

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Problem: ${d.problem} | Solution: ${d.solution}
Market: ${d.market} | Model: ${d.model}
Traction: ${d.traction || "Early stage, no traction data yet"}
Raising: ${d.raise || "Not specified"}

Format as a structured one-pager with these sections:
- Company tagline (one punchy sentence)
- The Problem (2-3 sentences)
- Our Solution (2-3 sentences)
- Market Opportunity (TAM/SAM/SOM if possible)
- Business Model (how you make money)
- Traction & Milestones
- Team (placeholder — note they should add real names)
- The Ask (amount, use of funds, timeline)

Keep each section tight. This should fit on one page.`,

  "cofounder-agreement": (d) => `You are a startup lawyer drafting a co-founder agreement for a ${d.stage || "early-stage"} startup.

Company: ${d.company} | Industry: ${d.industry}
Number of co-founders: ${d.cofounderCount || "2"}
Roles: ${d.roles || "Not specified"}

Draft a comprehensive co-founder agreement covering:
1. Equity split and rationale
2. Vesting schedule (standard 4-year, 1-year cliff)
3. Role and responsibilities definition
4. IP assignment (all work assigned to company)
5. Decision-making authority (who decides what)
6. Departure scenarios (buyout, good leaver vs bad leaver)
7. Non-compete and non-solicitation clauses
8. Dispute resolution process
9. Salary (placeholder — to be filled)
10. Board composition

Note: Mark all placeholder sections with [FILL IN]. Recommend they have a lawyer review before signing.`,

  "safe-explainer": (d) => `You are a startup lawyer explaining SAFE note terms to a first-time founder.

Company: ${d.company} | Stage: ${d.stage}
Terms to explain: ${d.safeTerms || "Explain standard YC SAFE note terms"}

Provide a plain-English explanation of:
1. What a SAFE note is and how it works
2. Key terms: valuation cap, discount rate, MFN clause, pro-rata rights
3. How SAFEs convert at the next priced round
4. Dilution impact with a simple numerical example
5. Founder-friendly vs investor-friendly terms
6. Common mistakes founders make with SAFEs
7. Questions to ask before signing

Include a simple worked example with numbers.`,

  "launch-checklist": (d) => `You are a growth expert creating a pre-launch checklist for:

Company: ${d.company} | Product: ${d.solution}
Industry: ${d.industry} | Market: ${d.market}
Launch type: ${d.launchType || "B2B SaaS"} | Timeline: ${d.timeline || "8 weeks"}

Create a 30-item launch checklist organized into phases:
- Phase 1: Product Readiness (weeks before launch)
- Phase 2: Marketing & Content Prep
- Phase 3: Distribution & Channels
- Phase 4: Community & PR
- Phase 5: Launch Week Execution
- Phase 6: Post-Launch (first 30 days)

For each item: checkbox format, one-line description, and who typically owns it (Founder/Marketing/Engineering/Design).
Tailor specifically to their industry and launch type.`,

  "press-release": (d) => `You are a PR expert writing a press release for:

Company: ${d.company} | Industry: ${d.industry}
Announcement: ${d.announcement || "product launch"}
Launch date: ${d.launchDate || "TBD"}
What they do: ${d.solution}
Who they serve: ${d.market}

Write a professional press release with:
- Headline (compelling, newsworth)
- Subheadline (adds context)
- Dateline
- Opening paragraph (who, what, when, where, why)
- Body paragraphs (product details, market context, traction if any)
- Quote from CEO/Founder (they should personalize this)
- Quote from a customer or investor (placeholder)
- About the company boilerplate
- Contact information (placeholder)
- Closing ###

Follow AP style. Make it genuinely newsworthy, not promotional fluff.`,

  "landing-page-copy": (d) => `You are a conversion copywriter writing landing page copy for:

Company: ${d.company} | Product: ${d.productName || d.company}
What it does: ${d.solution}
Who it's for: ${d.market}
Primary CTA: ${d.primaryCTA || "Get started free"}
Business model: ${d.model}

Write complete landing page copy including:
1. HERO SECTION
   - Main headline (bold, outcome-focused, under 10 words)
   - Subheadline (expand on headline, 1-2 sentences)
   - CTA button text
   - Social proof line (placeholder)

2. PROBLEM SECTION
   - Section headline
   - 3 pain points with short descriptions

3. SOLUTION SECTION
   - Section headline
   - 3-4 key features with icon suggestion, title, and 1-sentence description

4. HOW IT WORKS
   - 3-step process (simple, clear)

5. SOCIAL PROOF
   - 3 testimonial placeholders
   - Logos bar placeholder

6. PRICING SECTION
   - Section headline
   - 3 pricing tier names and suggested structure

7. FAQ SECTION
   - 5 common objections answered

8. FINAL CTA
   - Closing headline
   - CTA button text
   - Risk-reduction line

Make every word earn its place. Conversion-focused.`,

  "positioning": (d) => `You are a positioning strategist for startups.

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Product: ${d.solution} | Market: ${d.market}
Competitors: ${d.competitors || "Not specified"}
Differentiator: ${d.differentiator || "Not specified"}

Produce a complete positioning document:
1. POSITIONING STATEMENT (fill-in-the-blank format)
   "For [target customer] who [need/problem], [Company] is the [category] that [benefit] unlike [alternatives] because [proof]."
2. THREE POSITIONING OPTIONS
   Give 3 different positioning angles with pros/cons of each.
3. MESSAGE HIERARCHY
   - Primary message (one sentence)
   - Supporting messages (3 bullets)
   - Proof points (3 bullets)
4. COMPETITIVE DIFFERENTIATION TABLE
   Compare against 3 competitors across 5 dimensions.
5. CATEGORY CREATION vs CATEGORY ENTRY
   Advise whether they should create a new category or compete in existing ones, with reasoning.`,

  "job-description": (d) => `You are an expert at startup hiring. Write a complete job description for:

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Role: ${d.role || "Senior Engineer"}
Work style: ${d.remote || "Remote-first"}
Salary: ${d.salary || "Competitive + meaningful equity"}

Write a full job description:
1. Role headline and one-line hook
2. About the company
3. Why this role matters
4. What you'll do (8-10 specific responsibilities)
5. What we're looking for (6-8 requirements)
6. What we offer
7. Our interview process

Write like a company people actually want to work for. No corporate jargon.`,

  "culture-doc": (d) => `You are a culture and people expert helping an early-stage startup define their culture.

Company: ${d.company} | Industry: ${d.industry} | Stage: ${d.stage}
Existing values (if any): ${d.values || "None yet — help us define them"}

Create a complete culture document:
1. MISSION STATEMENT
2. VISION
3. CORE VALUES (5-6 values with description, examples, violations)
4. HOW WE WORK (working norms, feedback)
5. WHAT WE HIRE FOR
6. WHAT SUCCESS LOOKS LIKE
7. WHAT WE WON'T DO (anti-values)

Make it feel human and specific, not generic.`,

  "hiring-scorecard": (d) => `You are a talent expert creating an interview scorecard for a startup.

Company: ${d.company} | Stage: ${d.stage} | Industry: ${d.industry}
Role: ${d.role || "Not specified — create a general template"}

Create a structured hiring scorecard:
1. ROLE SUMMARY (30/60/90 days goals)
2. MUST-HAVE COMPETENCIES (5-6 with interview questions and rubric)
3. CULTURE FIT COMPETENCIES (3-4 with interview questions and rubric)
4. RED FLAGS (5 dealbreakers)
5. INTERVIEW STRUCTURE
6. SCORING TEMPLATE
7. REFERENCE CHECK QUESTIONS (5 questions)`,

  "financials": (d) => `You are a CFO advisor for early-stage startups. Create a financial overview for:

Company: ${d.company} | Industry: ${d.industry} | Model: ${d.model} | Stage: ${d.stage}
Monthly Revenue: ${d.revenue || "Pre-revenue"} | Burn: ${d.burn || "Unknown"} | Team: ${d.headcount || "Not specified"}

Provide:
1. Financial Health Summary — 3-sentence snapshot
2. Key Metrics to Track — 6-8 KPIs with explanations
3. Unit Economics — CAC, LTV, LTV:CAC, payback period
4. Burn & Runway Analysis — calculation and investor expectations
5. Fundraising Readiness Checklist — 8 financial items to have ready
6. Red Flags to Watch — 4-5 common mistakes at this stage`,

  "projections": (d) => `You are a financial modeling expert. Generate a 3-year revenue projection for:

Company: ${d.company} | Industry: ${d.industry} | Model: ${d.model} | Stage: ${d.stage}
Current Monthly Revenue: ${d.revenue || "Pre-revenue / $0"} | Revenue Stream: ${d.revenueStream || "Not specified"}

Create THREE scenarios (Conservative, Base, Optimistic):
- Year 1: monthly breakdown
- Year 2: quarterly breakdown
- Year 3: annual total

Each scenario: Revenue, COGS, Gross Profit, OpEx, Net Income/Loss, Headcount, Growth Assumptions.
Format as tables. Include top 5 assumptions, key milestones, and investor expectations.`,
};
