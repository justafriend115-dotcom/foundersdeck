import type { AcademyTrack } from "../types";

export const legalTrack: AcademyTrack = {
  id: "legal",
  title: "Legal & Entity Setup",
  tagline: "Choose the right structure, protect yourself, and stay compliant from day one.",
  icon: "scale",
  estimatedHours: "5h",
  free: true,
  lessons: [
    {
      id: "legal-1",
      title: "Choosing an entity: LLC vs. C-Corp",
      readMinutes: 9,
      sections: [
        {
          heading: "Why the structure matters",
          paragraphs: [
            "Your entity type decides how you're taxed, how you raise money, how you're governed, and how much paperwork you carry. Most founders pick between an LLC and a C-Corp, and the choice is driven by one question: do you plan to raise venture capital?",
            "An LLC is pass-through taxed (profits flow to owners, taxed once on personal returns), flexible in how it allocates ownership, and cheap to maintain. A C-Corp is a separate taxable entity (the company pays corporate tax, shareholders pay tax on dividends — 'double taxation'), but it can issue preferred stock, run an option pool, and use the standard documents every investor expects.",
            "The trap founders fall into: building a VC-bound company as an LLC because it felt simpler, then paying a taxable conversion later. Or the opposite — paying Delaware franchise fees and double-taxed salaries for a business that will never raise.",
          ],
        },
        {
          heading: "The decision framework",
          paragraphs: [
            "Raise venture money now or within ~24 months → Delaware C-Corp. Run a profitable services or product business with no institutional money → LLC (often in your home state). Plan to take on a strategic partner or be acquired by a larger company → C-Corp usually, because acquirers want a clean equity structure.",
            "If you're undecided, the safe default for a technology startup with ambition is a Delaware C-Corp: it costs a little more per year but removes the biggest structural conversion risk.",
          ],
        },
        {
          heading: "State of incorporation",
          paragraphs: [
            "Delaware dominates startup incorporation because its corporate law is settled, its Court of Chancery is fast and predictable, and every VC's template documents are built for it. You can be a Delaware company while operating anywhere.",
            "If you never expect institutional investors, incorporate where you operate to avoid Delaware's annual franchise tax and foreign-qualification filings. Either way, do it once, correctly, with a service or lawyer — amateur incorporation errors surface at the worst moment: diligence.",
          ],
        },
      ],
      examples: [
        "Maya wants to raise a $1.5M seed in 12 months. She chooses a Delaware C-Corp even though she's a solo founder in Texas — the conversion cost of doing it later (a taxable event) far exceeds the ~$300/yr Delaware fees.",
        "Jon runs a successful productized service. He keeps an LLC in California: pass-through taxes, no franchise tax, and he never needs preferred stock.",
      ],
      actionItems: [
        "Write one paragraph: 'Will I seek VC funding within 24 months? Yes/No — and why.'",
        "Compare Delaware franchise tax vs. your home state's costs with a 10-minute search.",
        "List 3 consequences of picking the wrong entity, and your mitigation.",
      ],
      keyPoints: [
        "VC-bound → Delaware C-Corp. Bootstrapped → LLC.",
        "LLC = pass-through tax, flexible, cheap. C-Corp = preferred stock, option pools, standard docs.",
        "Converting LLC→C-Corp later is a taxable event.",
        "Delaware is the default for fundraising companies.",
      ],
    },
    {
      id: "legal-2",
      title: "Incorporation step-by-step",
      readMinutes: 9,
      sections: [
        {
          heading: "The full checklist",
          paragraphs: [
            "1) Name: pick and check trademark (USPTO TESS) + domain + social handles. 2) File the Certificate of Incorporation with the state (Delaware: $90 + franchise tax). 3) Appoint initial directors. 4) Authorize and issue founder shares. 5) Adopt bylaws. 6) Get an EIN from the IRS (free, instant online). 7) Open a business bank account (requires the EIN + certificate). 8) Register for state taxes/franchise tax where required. 9) Set up bookkeeping and a separate card.",
            "Services like Stripe Atlas, Clerky, or a startup lawyer handle steps 2-5 for a flat fee. What they cannot do is make your founder decisions — ownership split, vesting, and IP — which are the real work.",
            "The order matters less than completeness. The classic screw-up: incorporating, then operating for six months as if the entity didn't exist — signing contracts personally, paying personal cards — which blurs liability protection and creates a mess in diligence.",
          ],
        },
        {
          heading: "The 83(b) election — non-negotiable",
          paragraphs: [
            "When you receive restricted stock (shares subject to vesting), the IRS treats the spread between fair market value and your purchase price as ordinary income as each tranche vests. If you bought shares at par (pennies), the FMV is also low at grant — so the tax on the spread is tiny if you file an 83(b) election within 30 days of receiving the shares.",
            "Miss the window and you cannot file later (with rare exceptions). Each vesting tranche then gets taxed at its then-current FMV — and if the company grew, that's ordinary income on a large amount, on top of your salary. Founders have owed six figures for a mistake that cost one hour and one stamp.",
            "File in duplicate (one copy to the IRS, one to the company), certified mail, and keep proof. Do it the day you get your shares. This applies to co-founders and early employees with restricted stock alike.",
          ],
        },
        {
          heading: "Post-incorporation housekeeping",
          paragraphs: [
            "Keep the company current: annual reports, franchise taxes, board meeting minutes (even for small boards — note the decisions), a share ledger, and a cap table you actually maintain. These feel like bureaucracy until an investor or acquirer asks, and then they're either a five-minute upload or a two-week scramble.",
            "Also: adopt an independent contractor agreement and a stock plan for future grants now, while there's no pressure, so hiring later is a form-fill instead of a legal project.",
          ],
        },
      ],
      examples: [
        "Nina files her 83(b) election by certified mail the same day she signs her founder shares. Two years later the company is worth $20M — her early filing kept her founder tax bill to hundreds of dollars instead of millions in ordinary income.",
        "A founder misses 83(b). His company later raises at a $30M valuation and his first vesting tranche is taxed at FMV — a bill bigger than his annual salary.",
      ],
      actionItems: [
        "Verify whether you (or your co-founders) filed 83(b) within 30 days of share issuance. If not and you're still within the window, file today.",
        "Confirm you have: EIN, business bank account, bylaws, initial minutes, share ledger.",
        "Buy the domain and check USPTO TESS for your name — 10 minutes, do it now.",
      ],
      keyPoints: [
        "Incorporation = file, issue shares, bylaws, EIN, bank account, taxes.",
        "File the 83(b) within 30 days — certified, duplicated, with proof.",
        "Keep the company current: minutes, franchise tax, cap table, share ledger.",
        "Sign a contractor agreement + stock plan before you need them.",
      ],
    },
    {
      id: "legal-3",
      title: "Founder agreements and IP assignment",
      readMinutes: 9,
      sections: [
        {
          heading: "The founder agreement",
          paragraphs: [
            "A founder agreement is the constitution of your company before you have a constitution. It covers: ownership split, vesting schedule, IP assignment (the company owns everything built), roles and responsibilities, decision rights, what happens on departure (death, disability, voluntary exit, termination), and non-solicitation of the company's people.",
            "The most expensive sentence in early startup history is 'we're all founders, we'll figure it out.' Figure it out now, in writing. The agreement does not need to be long — it needs to be explicit.",
            "Key clauses to get right: buyback rights (company can repurchase unvested shares from a departing founder at cost), garden-leave or non-compete scope (state-dependent — enforceability varies wildly), and what happens to IP created before incorporation (signed over in writing).",
          ],
        },
        {
          heading: "IP assignment — the invisible moat",
          paragraphs: [
            "Under US law, work you create belongs to you unless assigned. For a startup, that means every founder, employee, and contractor must sign a Confidential Information and Invention Assignment Agreement (CIIAA) assigning IP to the company BEFORE they start work.",
            "The contractor CIIAA is the one founders forget. A contractor who writes your code without an assignment agreement may legally own that code. Fixing it later means a retroactive assignment (possible but legally fragile — and contractors have leverage).",
            "Also check: did any founder build the core IP before the company existed, possibly at a previous employer or university? Prior-IP assignments (what stays with the founder vs. what goes to the company) prevent nasty fights with universities and former employers during diligence.",
          ],
        },
        {
          heading: "The 20-minute self-audit",
          paragraphs: [
            "Answer these on paper: (1) Who owns what percentage and does the paperwork say so? (2) Is all code/design/content assigned to the company in writing? (3) Is there any IP created outside the company that the company now depends on? (4) What happens to each founder's equity if they leave tomorrow? (5) Who can sign contracts for the company?",
            "If any answer is 'I don't know,' that's your next legal task. These five answers are what a seed investor's lawyer asks for first.",
          ],
        },
      ],
      examples: [
        "Two founders split 50/50 verbally. After 9 months one quits. There's no buyback clause, so the leaver keeps 50% of a company they don't work for — a dead company, because nobody will invest into that structure.",
        "A startup hired a contractor who built its entire backend. No CIIAA. The contractor later holds the code hostage over unpaid invoices. A proper assignment would have made this a non-event.",
      ],
      actionItems: [
        "Download a standard founder agreement template and fill in the 5 audit answers.",
        "Confirm every person who has written code or made content for you has signed an IP assignment.",
        "List all IP created before incorporation and decide who owns it, in writing.",
      ],
      keyPoints: [
        "Founder agreement: split, vesting, IP, roles, exit — explicit and written.",
        "CIIAAs before work starts, for employees AND contractors.",
        "Prior-IP clauses prevent university/employer fights in diligence.",
        "If you can't answer the 5 audit questions, that's your next task.",
      ],
    },
    {
      id: "legal-4",
      title: "Vesting and the option pool",
      readMinutes: 9,
      sections: [
        {
          heading: "How vesting works mechanically",
          paragraphs: [
            "Standard: 4 years, 1-year cliff, monthly vesting after. Nothing vests in the first year; at the 12-month mark 25% vests; then 1/48 of the grant vests each month. Early exercise (paying for unvested shares and filing 83(b)) lets employees start their capital-gains clock early.",
            "Founders sometimes negotiate accelerated vesting on acquisition (e.g., 50% of unvested shares accelerate if the company is sold) — a retention and incentive tool that also shapes acquisition math.",
          ],
        },
        {
          heading: "The option pool — who really pays",
          paragraphs: [
            "The option pool is the block of shares reserved for future employees, typically 10-20% of the company. It's created before (or at) a priced round, and here's the crux: the pool is carved out of the PRE-money valuation, so it dilutes the founders — not the new investors. A $10M pre-money with a 20% pool means founders' equity is effectively valued at $8M.",
            "This is why pool size is a negotiation, not a formality. Investors push for a bigger pool (more room to hire); founders want it smaller and topped-up in later rounds. Knowing the arithmetic before the meeting lets you push back with numbers, not emotion.",
            "Rule of thumb for size: 10% for a small early team, up to 15-20% if you're hiring aggressively or the team is unproven. Whatever you reserve, the plan must actually be adopted (the stock plan + grants) or the pool is fiction.",
          ],
        },
        {
          heading: "Cap table math every founder should do by hand",
          paragraphs: [
            "Model: start with 10,000,000 shares. Founders own 6M, option pool 2M, reserve 2M. Now you raise $2M at $8M pre-money → investor gets 20% (2M post / 10M post). The pool is NOT part of your ownership — it belongs to future hires. When an employee vests pool shares, the pie is fixed; everyone dilutes proportionally.",
            "Always compute post-money ownership after each hypothetical round before you negotiate. 'I own 60% of a company that raised at $10M' sounds good; '60% pre-money, 45% after the pool and this round' is reality.",
          ],
        },
      ],
      examples: [
        "A founder proposes a 20% pool at a $5M pre-money raise. The founders compute: effective valuation for founders = $5M × (1 − 0.20) = $4M. They counter with 12% and an agreement to top up at Series A — keeping $400K of value.",
        "An early engineer's 0.5% grant vests over 4 years with a cliff. She leaves at month 14, keeping her 25% + 2 months — a trivial cost to the company, and exactly the alignment that protects it.",
      ],
      actionItems: [
        "Open a spreadsheet and model: founders %, pool %, post-money investor % after your next round.",
        "Decide your opening pool-size position and your walk-away number.",
        "Confirm your stock plan is actually adopted before you grant anything.",
      ],
      keyPoints: [
        "4yr / 1yr cliff / monthly is the standard for founders and employees.",
        "The option pool dilutes founders, not new investors — negotiate the number.",
        "Compute post-money ownership by hand before negotiating.",
        "A pool is fiction until the stock plan exists and grants are signed.",
      ],
    },
    {
      id: "legal-5",
      title: "Contracts every founder must understand",
      readMinutes: 9,
      sections: [
        {
          heading: "The contracts you'll sign repeatedly",
          paragraphs: [
            "MSA (Master Services Agreement) and SOW (Statement of Work) for service work. SaaS terms of service + privacy policy for your product. NDAs (mutual vs. one-way) for conversations. Consulting agreements with IP assignment. Commercial leases. Terms with any payment processor or marketplace you depend on.",
            "You don't need to become a lawyer, but you must be able to read the 5 clauses that matter: indemnification, limitation of liability, payment terms, termination, and IP ownership.",
          ],
        },
        {
          heading: "Reading the dangerous clauses",
          paragraphs: [
            "Indemnification: who is liable if your software breaks something at a customer? Unbounded indemnities from a startup are a risk you can't price. Limitation of liability: standard is 'liability capped at fees paid' — anything above that is a red flag for an early-stage company. Auto-renewal: when does this contract silently renew and can you exit? IP ownership: does the work-for-hire clause actually assign the work?",
            "Also watch 'most favored nation' pricing clauses (a big customer can retroactively force you to match a cheaper deal you give anyone else) and exclusivity — both can box you in.",
          ],
        },
        {
          heading: "When to pay a lawyer",
          paragraphs: [
            "The rule: templates for inbound (your terms), a lawyer for outbound (their terms). Reviewing a customer's redline of your template is worth the ~$500-1,000. Signing a customer's aggressive MSA without review can cost more than your first year of revenue in a single indemnity clause.",
            "Keep every signed contract in a folder with the counterparty, date, and parties — your data room starts here.",
          ],
        },
      ],
      examples: [
        "A startup signs a customer's MSA with an uncapped indemnity. Their software has an outage that costs the customer $300K in lost sales — and the startup, not its insurer, is on the hook because liability was never capped.",
        "A SaaS's terms auto-renew annually with a 90-day termination window. The founder forgets; a year of unused platform fees drain the runway for a service they no longer use.",
      ],
      actionItems: [
        "Audit every contract you've signed: find the indemnity, liability cap, auto-renew, and IP clauses.",
        "Adopt your own MSA + SOW templates with capped liability.",
        "Set up a contracts folder with counterparty + dates, and a 60-day renewal calendar.",
      ],
      keyPoints: [
        "The 5 clauses: indemnity, liability cap, payment, termination, IP ownership.",
        "Uncapped indemnity + no liability cap = red flags for a startup.",
        "Templates inbound; lawyer review for their redlines.",
        "A renewal calendar prevents silent auto-renewals bleeding runway.",
      ],
    },
    {
      id: "legal-6",
      title: "Securities law and fundraising compliance",
      readMinutes: 10,
      sections: [
        {
          heading: "The rules you cannot afford to guess",
          paragraphs: [
            "In the US, selling equity or equity-like instruments (SAFEs, notes) is 'selling securities,' regulated by the SEC under the Securities Act of 1933. Private placements rely on Regulation D: Rule 506(b) lets you raise an unlimited amount from unlimited accredited investors and up to 35 non-accredited, but NO general solicitation (no public marketing). Rule 506(c) allows public solicitation but requires you to VERIFY accredited status (income/asset documentation, not just a checkbox).",
            "Accredited investor thresholds (current): net worth over $1M excluding primary residence, OR income over $200K (or $300K joint) in each of the last two years. Newer rules also allow investments based on 'knowledgeable employee' or revenue-based tests for certain funds — but for a startup raising from individuals, the classic tests apply.",
            "Non-accredited investors: taking them under 506(b) is legal but every state has its own registration requirements (merit review) that are a compliance maze. Most founders simply raise from accredited investors only — cleaner, and most angel money is accredited anyway.",
          ],
        },
        {
          heading: "Anti-fraud rules apply to everything",
          paragraphs: [
            "Rule 10b-5: no misleading statements or omissions, in ANY medium, to anyone. That includes your website, your pitch email, your podcast appearance, and what you tell the press. 'Raising a $2M round at a $15M valuation' that is actually a $1M round at a $5M valuation is fraud — even if it's what 'everyone says.'",
            "The practical consequence: keep your public claims defensible. If you say '500 customers,' be able to show 500. If your ARR is 'run-rate,' label it. Diligence will test every claim you made in public — and investors who catch a stretch stop believing everything else.",
          ],
        },
        {
          heading: "The compliance paperwork",
          paragraphs: [
            "For a 506 offering: file Form D with the SEC within 15 days of the first sale. Provide a disclosure document if any non-accredited investors participate. Keep the subscriber questionnaire and accredited-investor verification for every investor (you'll need them to prove compliance). Many platforms (Angellist, syndicates) handle this for you; direct raises don't.",
            "If you use a platform or a lead investor with a fund, confirm they handle 506(c) verification and KYC — don't assume.",
          ],
        },
        {
          heading: "State level",
          paragraphs: [
            "Federal exemption doesn't automatically exempt state 'blue sky' laws. Under the JOBS Act, 506 offerings preempt most state registration (with notice filings in some states). For 506(b) with only accredited investors, most states require only a notice filing or nothing. Check the states where your investors reside — this is a two-page form, not a reason to panic, but it's real.",
          ],
        },
      ],
      examples: [
        "A founder says in a demo-day pitch 'we're raising $2M at $20M post' — but the actual terms are a $1.5M SAFE with no valuation. An investor's lawyer sees the mismatch, the investor pulls out, and the founder's credibility is gone.",
        "Under 506(c), a founder markets publicly but only verifies one investor's status after wiring. The SEC later asks for documentation — she has none. Best case, fines; worst case, rescission rights for investors.",
      ],
      actionItems: [
        "State in writing: which exemption you intend to use (506(b) vs 506(c)) and how you'll verify investors.",
        "Prepare the accredited-investor verification workflow (income docs / CPA letter / broker confirmation) before your first close.",
        "Set a reminder to file Form D within 15 days of first sale.",
      ],
      keyPoints: [
        "506(b): no solicitation, accredited + up to 35 non-accredited. 506(c): solicitation OK, verification required.",
        "Anti-fraud (10b-5) applies to every public statement — keep claims defensible.",
        "File Form D within 15 days; keep verification records per investor.",
        "Blue-sky notice filings vary by state — check where investors live.",
      ],
    },
    {
      id: "legal-7",
      title: "Data protection and privacy basics",
      readMinutes: 8,
      sections: [
        {
          heading: "Which rules apply to you",
          paragraphs: [
            "GDPR applies if you process EU/UK personal data (even one customer there). CCPA/CPRA applies if you do business in California and meet thresholds (25K+ Californians or significant revenue). Others follow: Canada PIPEDA, Brazil LGPD. If you have ANY users and a website, you have data protection obligations — most startups just don't know they do.",
            "The practical floor: a privacy policy that says what you collect, why, and how users can access/delete it; a cookie banner if you use analytics cookies in the EU; and a lawful basis (usually 'consent' or 'legitimate interest') documented for each processing activity.",
          ],
        },
        {
          heading: "The vendor chain is part of you",
          paragraphs: [
            "When you use analytics (GA4, PostHog), email (Mailchimp, Resend), payments (Stripe), or AI APIs, YOU are the 'data controller' and they are 'processors.' You need: data processing agreements (DPAs) with each, and you're responsible for what you pipe into them — including not sending personal data to AI APIs without a lawful basis and a DPA.",
            "The invisible risk: an AI tool that trains on your users' data. Check every vendor's 'training on customer data' policy; the safe ones have it off by default.",
          ],
        },
        {
          heading: "What diligence actually checks",
          paragraphs: [
            "Investors' lawyers ask for: your privacy policy URL, DPA coverage with key vendors, evidence of a breach-response plan, and whether you process special-category data. You don't need a compliance department — you need a documented, sensible framework and a policy that matches reality (a privacy policy that promises things your code doesn't do is worse than none).",
          ],
        },
      ],
      examples: [
        "A US startup sells to one UK company. It adds EU users' emails to Mailchimp without consent or a DPA. GDPR applies to every one of those emails, and Mailchimp will shut the account down on the first complaint.",
        "A founder uses an AI API that trains on inputs. Support tickets containing customer names go in. A customer's lawyer asks where their data is. The answer — 'an AI model someone else trained on it' — ends the deal.",
      ],
      actionItems: [
        "Write or adopt a privacy policy that matches your actual data flows.",
        "List every tool that touches personal data and confirm a DPA exists (or remove it).",
        "Turn OFF AI training on your data for every vendor, and document that choice.",
      ],
      keyPoints: [
        "GDPR/CCPA apply based on who you touch, not where you're incorporated.",
        "You're the controller; vendors are processors — DPAs required.",
        "Check 'trains on my data' for every AI/analytics vendor.",
        "A policy that matches reality beats a perfect-sounding fiction.",
      ],
    },
    {
      id: "legal-8",
      title: "Insurance for early-stage companies",
      readMinutes: 8,
      sections: [
        {
          heading: "The minimum viable stack",
          paragraphs: [
            "General Liability (slips, physical damage) — cheap, often required by landlords. Errors & Omissions / Professional Liability (claims your product or advice caused financial harm) — increasingly required by B2B customers. Workers' Compensation (once you have employees, required by law in most states). Cyber/Data Breach liability (if you store customer data or take payments).",
            "For a pre-revenue SaaS, the pragmatic order: GL (if you lease space), E&O (if B2B customers ask), Cyber (as soon as you hold customer data), WC (the day you hire anyone).",
          ],
        },
        {
          heading: "Directors & Officers (D&O)",
          paragraphs: [
            "D&O covers the board and founders against claims of mismanagement. Investors' diligence will often require the company to carry D&O (or at least note its absence). It's not about what you'll do wrong — it's that boards get sued when things go wrong, and defense costs alone are enormous.",
            "Don't buy insurance you don't need, but DO ask your investors' counsel what they require; 'minimum D&O' and 'tail' provisions show up in term sheets more than founders expect.",
          ],
        },
        {
          heading: "The negotiation point",
          paragraphs: [
            "Insurance is a diligence checkbox, not a strategy. Your time is better spent on the operating risks (security, contracts) than optimizing premiums. Get one broker quote across the stack, buy the required pieces, and move on — then revisit at Series A when requirements tighten.",
          ],
        },
      ],
      examples: [
        "A B2B startup's first enterprise customer's procurement says 'no E&O policy, no contract.' The $50K deal hinges on a $1,200/year policy — an obvious buy.",
        "A pre-revenue founder skips cyber insurance. A contractor's laptop with client data is stolen; the incident response, notification, and legal costs exceed what a $600 policy would have covered.",
      ],
      actionItems: [
        "List the policies your landlord, customers, and investors will require (ask them).",
        "Get one broker quote for GL + E&O + Cyber.",
        "Buy WC coverage the day you hire your first W-2 employee.",
      ],
      keyPoints: [
        "Minimum stack: GL, E&O, Cyber, then WC the day you hire.",
        "D&O is an investor diligence checkbox — ask what they require.",
        "Insurance is a checkbox, not a strategy — one quote, move on.",
      ],
    },
    {
      id: "legal-9",
      title: "Reading a term sheet like a lawyer",
      readMinutes: 10,
      sections: [
        {
          heading: "The economics vs. the control",
          paragraphs: [
            "A term sheet has two halves. The economics (valuation, price, pool, liquidation) determine how the pie is split. The control (board, protective provisions, voting, drag-along) determine who steers. Founders over-index on valuation and under-index on control — the opposite of what usually bites later.",
            "The standard founder-friendly shape: 1x non-participating liquidation preference, standard 4-5 person board (2 founders, 1-2 investors, 1 independent), market-rate protective provisions (no changes to charter without preferred approval), pro-rata rights for investors, and standard drag-along.",
          ],
        },
        {
          heading: "Decoding the terms",
          paragraphs: [
            "Liquidation preference: preferred get their money back before common. 1x non-participating = they get 1x their investment, then the rest splits per ownership — the fair baseline. 1x participating = they ALSO get their percentage on top (double-dipping) — push back. 2-3x preferences are founder-hostile.",
            "Board: 1 seat with VC (typical seed), or 2-1-1 with an independent at Series A. More investor seats = more control. Pay attention to who appoints the independent — deadlocks break toward whoever picked the tiebreaker.",
            "Protective provisions: the investor veto list — selling, changing capital structure, issuing more shares, changing the business, taking on significant debt. 'Significant' is negotiated; a wide veto list is death by a thousand cuts.",
            "Pro-rata rights: investors can buy their share of future rounds — good (they can support you) unless your future rounds need new money and existing holders don't participate (a 'blow-up' of your cap table).",
            "Drag-along: if a majority of preferred agree to sell, everyone must sell. Standard and fair at market terms; read the threshold (often 50-66% of preferred + board).",
          ],
        },
        {
          heading: "The rest of the stack",
          paragraphs: [
            "Vesting on founder shares (re-vesting requirements are common on new money), no-shop clauses (can't talk to other investors for X days — fine at 30-45 days), exclusivity, and expenses. The data-rights clause (monthly/quarterly reports to investors) is standard — budget for the reporting cadence.",
            "Rule: the term sheet is a summary; the definitive agreements (Stock Purchase Agreement, Amended Charter, Investors' Rights, Voting, Right of First Refusal & Co-Sale) are where the detail lives. Get a lawyer who does startup financing — this is not DIY.",
          ],
        },
      ],
      examples: [
        "Founder A takes a $3M seed with a 2x participating preference, happy about the 'high' valuation. A $5M exit later: investors take 2×$3M = $6M (the entire exit) and the founders get $0 — a 'liquidation overhang' that makes small exits worthless to founders.",
        "Founder B negotiates a 1x non-participating preference, pro-rata with a participation floor for future rounds, and a 2-1-1 board. Same exit: investors take their $3M back, and $2M splits among the equity holders — founders actually earn from the outcome.",
      ],
      actionItems: [
        "Model the exit math for 1x non-participating vs 2x participating at 3 exit sizes (1×, 3×, 10× of investment).",
        "Write down your walk-away on: liquidation preference, board seats, protective provisions, and pro-rata.",
        "Before signing: have a startup financing lawyer read the definitive docs, not just the term sheet.",
      ],
      keyPoints: [
        "Control terms (board, vetoes) matter as much as valuation.",
        "1x non-participating is the fair baseline; 2x+ participating is founder-hostile.",
        "Watch the independent-board appointment and the veto list.",
        "The term sheet is a summary — the definitive agreements are where it's decided.",
      ],
    },
    {
      id: "legal-10",
      title: "The data room and running legal due diligence",
      readMinutes: 8,
      sections: [
        {
          heading: "What belongs in the data room",
          paragraphs: [
            "The 'tidy data room' at seed: cap table + incorporation documents; all founder agreements and IP assignments; option plan + grants; key contracts (customer, vendor, lease); financials (P&L, burn, runway); board minutes; insurance certificates; privacy policy + DPAs; any litigation history; and the raise documents themselves (SAFEs/notes).",
            "Investors also ask for the 'why': customer pipeline, product metrics, and the working models behind your projections. Separate the legal data room from the business data room — lawyers want contracts, investors want numbers.",
          ],
        },
        {
          heading: "Doing your own pre-diligence",
          paragraphs: [
            "Before you invite investors in, run the process on yourself: pull every document, check signatures and dates, confirm the cap table matches the ledger, verify all 83(b)s and IP assignments exist. The most common seed diligence surprises: missing 83(b) elections, a founder who never assigned IP, an unwritten founder agreement, and a cap table that doesn't match the stock ledger.",
            "Fixing issues you found is professional; having investors find them is disqualifying. Run the checklist now, then update it quarterly.",
          ],
        },
        {
          heading: "Running the process",
          paragraphs: [
            "Keep the data room structured and access-controlled (not one big zip). Grant view-only access; track who looked at what. Expect three rounds of questions — answer fast and completely. Slow or evasive answers are read as red flags even when the answer is fine.",
            "After close: update the cap table, file the amended documents, and archive the signed set — then set your investor-update and board cadence immediately.",
          ],
        },
      ],
      examples: [
        "A founder invites a lead investor's counsel into her data room. In week 1, they find an unsigned IP assignment from her CTO. She produces it signed within a day because she'd pre-emptively done her own audit — the deal proceeds.",
        "Another founder's cap table shows 5% to a friend 'for advice.' The investor's lawyer asks for the written agreement. There is none. Weeks of explanation later, the friend is bought out at a discount and the round closes two months late.",
      ],
      actionItems: [
        "Build your legal data room folder structure and populate every item on the checklist.",
        "Run the pre-diligence audit: 83(b)s, IP assignments, founder agreements, cap table vs ledger.",
        "Set a quarterly reminder to keep the data room current.",
      ],
      keyPoints: [
        "A tidy data room signals professionalism and speeds the round.",
        "Run pre-diligence on yourself before investors do.",
        "Structured, view-only access; answer fast and completely.",
        "Update cap table + reporting cadence the day you close.",
      ],
    },
  ],
  quiz: [
    {
      question: "You plan to raise venture capital in the next 12 months. Best entity?",
      options: ["LLC", "Delaware C-Corp", "Sole proprietorship", "Partnership"],
      correctIndex: 1,
      explanation: "VC-bound startups should incorporate as Delaware C-Corps to support preferred stock, option pools, and standard venture documents.",
    },
    {
      question: "How long do you have to file an 83(b) election after receiving shares?",
      options: ["10 days", "30 days", "90 days", "By the next tax year"],
      correctIndex: 1,
      explanation: "83(b) must be filed within 30 days. Missing it taxes each vesting tranche at FMV — potentially huge ordinary income.",
    },
    {
      question: "Under Rule 506(b), what is NOT allowed?",
      options: ["Selling to accredited investors", "General solicitation", "Raising more than $1M", "Foreign investors"],
      correctIndex: 1,
      explanation: "506(b) prohibits general solicitation/public marketing. 506(c) allows it but requires verification of accredited status.",
    },
    {
      question: "Which is the standard liquidation preference on a fair term sheet?",
      options: ["3x participating", "1x non-participating", "2x participating", "No preference"],
      correctIndex: 1,
      explanation: "1x non-participating: investors recover 1x their money first, then everything splits normally. Participating preferences double-dip.",
    },
    {
      question: "Why must contractors sign an IP assignment before writing code?",
      options: [
        "It's a tax requirement",
        "Without it, they own the code they wrote",
        "It's only for employees",
        "It lowers their rates",
      ],
      correctIndex: 1,
      explanation: "Work created belongs to the creator unless assigned. A CIIAA transfers the contractor's rights to your company before work begins.",
    },
    {
      question: "What must you file within 15 days of your first securities sale under 506?",
      options: ["Form D", "Form 83(b)", "A 10-K", "Nothing"],
      correctIndex: 0,
      explanation: "Form D is the notice filing for Rule 506 offerings, due within 15 days of the first sale.",
    },
    {
      question: "Which clause caps what a party must pay if things go wrong?",
      options: ["Indemnification", "Limitation of liability", "Termination", "Assignment"],
      correctIndex: 1,
      explanation: "Limitation of liability caps damages (commonly at fees paid). Uncapped liability is a startup red flag.",
    },
    {
      question: "Who is typically diluted by the option pool in a priced round?",
      options: ["New investors", "Founders", "Employees", "Nobody"],
      correctIndex: 1,
      explanation: "The pool is carved out of pre-money, so it dilutes founders and existing shareholders — not the new money coming in.",
    },
  ],
};
