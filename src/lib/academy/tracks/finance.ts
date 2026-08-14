import type { AcademyTrack } from "../types";

export const financeTrack: AcademyTrack = {
  id: "finance",
  title: "Finance & Runway",
  tagline: "Burn, runway, unit economics, and the books — the numbers that keep you alive.",
  icon: "calculator",
  estimatedHours: "4.5h",
  free: false,
  lessons: [
    {
      id: "finance-1",
      title: "Runway, burn, and the 12-month survival math",
      readMinutes: 9,
      sections: [
        {
          heading: "The two numbers that govern everything",
          paragraphs: [
            "Burn is how much cash you spend per month; runway is how many months you have left. Runway = cash on hand ÷ burn. These two numbers decide when you raise, when you hire, and when you cut. Most startup crises are runway crises that were visible six months earlier.",
            "Gross burn = all monthly cash spent. Net burn = gross burn minus revenue (what actually drains the bank). For survival math, use net burn. For fundraising math, investors use gross burn plus a growth buffer.",
            "The hard rule: know your exact cash balance and your exact runway every single week. 'Approximately' is how companies die with full conviction they had six months left.",
          ],
        },
        {
          heading: "The runway rules of thumb",
          paragraphs: [
            "Raising? You want 18-24 months of runway from the raise date. Operating? Keep a minimum of 6 months of runway for 'something happens' — an investor no, a customer churn, a lawsuit. Below 6 months and outside of a raise, you are in survival mode: extend runway before adding anything.",
            "The runway extensions, in order of speed: cut subscription overhead (audit every SaaS you pay for), pause hiring (the biggest lever), cut contractors, renegotiate fixed costs, raise bridge revenue (services, annual prepay deals), then — as a last resort — raise a bridge note from believers.",
          ],
        },
        {
          heading: "The 12-month plan that keeps you honest",
          paragraphs: [
            "Write the 12-month plan in one page: revenue by month (with assumptions labeled), costs by month (headcount, infra, marketing, fixed), and the resulting cash balance each month. Update it monthly, comparing actuals to plan. The plan's purpose is not prediction — it's early detection: the month you drift 20% off plan is the month you act, not the month you notice.",
          ],
        },
      ],
      examples: [
        "A founder with $180K in the bank and $30K/mo net burn thinks she has 6 months. She'd forgotten the $40K tax payment due in month 4 — real runway: 4.5 months. The 12-month plan would have flagged it in week one.",
        "Another founder at 7 months runway cuts $4K/mo in subscriptions (25% of the gap), pauses hiring, and renegotiates the office. He extends to 11 months — then raises the bridge that saves him.",
      ],
      actionItems: [
        "Compute exact cash, gross burn, net burn, and runway TODAY.",
        "Write the one-page 12-month plan with labeled assumptions.",
        "Audit every subscription this week and cancel anything not used in 30 days.",
      ],
      keyPoints: [
        "Runway = cash ÷ net burn. Recompute weekly.",
        "Minimum 6 months of runway, always.",
        "Pause hiring before cutting anything else.",
        "The 12-month plan is for early detection, not prediction.",
      ],
    },
    {
      id: "finance-2",
      title: "Unit economics: the math that predicts your future",
      readMinutes: 9,
      sections: [
        {
          heading: "LTV and CAC, defined with your own numbers",
          paragraphs: [
            "CAC = all sales & marketing cost ÷ new customers acquired in the period. LTV = average revenue per customer over their lifetime (ARPACU ÷ churn, or a cohort-based calculation). The two rules: LTV must be > 3x CAC, and CAC must be recovered in under 12 months (ideally under 6).",
            "The subtlety that kills startups: LTV and CAC computed on averages hide the segments. Compute them per channel, per plan, per cohort — the channel with 5x might be propping up a channel with 0.8x that's quietly burning money. Your average is a lie; your segments are the truth.",
          ],
        },
        {
          heading: "The cohort view",
          paragraphs: [
            "Cohorts (customers acquired in the same month) are the only honest look at retention: what % of the January cohort is still paying in June? Rising cohort curves = improving product. Flat or falling = a leak. Cohort analysis is how you see problems months before they show up in revenue.",
            "The first cohort analysis to run: W1/W4/W12 retention (week 1, week 4, week 12). For SaaS: W4 ≥ 40% is a minimum bar to scale; W12 ≥ 25% is the climb. Below that, every dollar of CAC is poured into a sieve — fix retention before scaling spend.",
          ],
        },
        {
          heading: "Contribution margin and the unit deal",
          paragraphs: [
            "Contribution margin = revenue minus variable cost (COGS: hosting, support, payment fees, CAC). The unit deal must be positive before you scale: each customer must contribute more than their marginal cost. SaaS gross margins of 70-90% are normal; services margins of 20-30% need different math and much lower CAC tolerance.",
            "When unit economics are broken, the fix is never 'more customers.' It's price, packaging, cost structure, or churn — the levers under the arithmetic.",
          ],
        },
      ],
      examples: [
        "A founder's average LTV:CAC looks like a healthy 3.5x. By channel: content = 8x, ads = 2.1x, partnerships = 0.7x. The partnerships 'strategy' is quietly losing money every quarter. Segmenting shows it in one afternoon.",
        "A SaaS at $50 ARPU, 8% monthly churn: average customer lifetime = 12.5 months → LTV = $625. CAC must stay under ~$210 and recovery under ~7 months of revenue. The founder prices and spends accordingly — the arithmetic replaces the guesswork.",
      ],
      actionItems: [
        "Compute CAC and LTV per channel, not in aggregate.",
        "Run your first cohort analysis: W1/W4/W12 retention for your last 3 cohorts.",
        "Write your LTV:CAC and payback targets on a card above your desk.",
      ],
      keyPoints: [
        "LTV > 3x CAC; CAC payback under 12 months.",
        "Averages lie — segment by channel, plan, and cohort.",
        "Cohorts reveal leaks months before revenue does.",
        "Fix unit economics with price/packaging/churn, never with more customers.",
      ],
    },
    {
      id: "finance-3",
      title: "Pricing: setting, testing, and raising it",
      readMinutes: 9,
      sections: [
        {
          heading: "The pricing framework",
          paragraphs: [
            "Price is set by value delivered, not cost plus margin. The anchor: how much money does your product save or earn the customer, per month or per year? Price = a fraction of that value (typically 10-30% for SaaS), adjusted for competitive pressure and willingness to pay.",
            "The four pricing patterns: flat (one price, simple, leaves money on the table), tiered (3 tiers — the standard: a low 'get in' tier, a middle 'most popular' tier, a high 'pro' tier — the decoy effect makes the middle win), usage-based (pay for what you consume — aligns value and price, harder to predict), and seat-based (per user — common, but punished when buyers count seats).",
            "The classic mistake: pricing from your cost and your comfort instead of customer value. Every 'I feel weird charging $500/mo' is a founder underpricing by 10x and then scaling a thin-margin business.",
          ],
        },
        {
          heading: "The pricing experiments",
          paragraphs: [
            "You cannot know the right price from a spreadsheet. Run experiments: (1) the 'too expensive' test — quote a price 3-5x your target to a handful of buyers and watch the reaction (real buyers tell you what it's worth), (2) the paywall test — make the product require payment to proceed and measure conversion, (3) annual vs monthly framing — annual prepay at 20% discount often beats monthly on both retention and cash flow.",
            "Price changes are data, not decisions: raise the price on new customers only, measure conversion, and move the number with evidence. The most common pricing error is not raising — pricing is the highest-leverage growth lever most founders never pull.",
          ],
        },
        {
          heading: "Raising prices without losing customers",
          paragraphs: [
            "Grandfather existing customers (their price is protected — they're your references and your retention data), raise for new customers, and announce changes clearly with lead time. The fear that kills raises: 'customers will leave.' The data usually shows the opposite — churn is rarely price-driven below the value line; the customers you lose to a 20% raise weren't going to renew anyway, and the ones who stay fund your margin.",
            "For enterprise-ish deals: price per outcome where possible ('per $1K of revenue you don't lose'), or per unit of value ('per invoice processed'). When the price is tied to the outcome, the buyer stops optimizing cost and starts asking how to get more.",
          ],
        },
      ],
      examples: [
        "A founder prices his tool at $19/mo because he'd be comfortable paying that. His customer's problem costs them $2,000/mo in waste. A value-anchored price is $199/mo — 11x the revenue for the same work.",
        "A SaaS grandfathers old customers at $29, moves new to $49, and runs a 3x 'too expensive' test on prospects. Conversion drops 8% — but revenue per customer rises 70%. The market signal was there all along.",
      ],
      actionItems: [
        "Write your value math: what does the customer save/earn, monthly?",
        "Design your three tiers with a clear 'most popular' decoy.",
        "Run the 3-5x 'too expensive' test on your next 5 prospect conversations.",
      ],
      keyPoints: [
        "Price = fraction of customer value, not cost + margin.",
        "Three tiers with a decoy; the middle wins.",
        "Run the 'too expensive' test — buyers reveal the real price.",
        "Grandfather old customers; raise for new ones.",
      ],
    },
    {
      id: "finance-4",
      title: "Bookkeeping and the monthly close",
      readMinutes: 8,
      sections: [
        {
          heading: "Why the books matter from day one",
          paragraphs: [
            "The books are your memory and your evidence. From day one: separate bank account (done at incorporation), a bookkeeping system (QuickBooks/Xero or a service), and a rule — every transaction categorized by the 5th of the following month. The company that books from day one is the company that raises without a 'the accountant will fix it' panic.",
            "The three documents to understand: P&L (revenue minus costs over a period), Balance Sheet (assets, liabilities, equity at a moment — this is what your bank and investors actually read), and Cash Flow statement (the bank's-eye view: where cash went). A profitable company can still die of cash-flow — profit is an opinion, cash is a fact.",
          ],
        },
        {
          heading: "The monthly close in 90 minutes",
          paragraphs: [
            "The monthly close: (1) reconcile the bank account to the penny, (2) categorize all transactions, (3) record accruals (deferred revenue — money received but not yet earned — and unpaid invoices), (4) review the P&L vs plan (the 'drift check' from lesson 1), (5) review cash vs forecast, (6) pay the taxes due. That's it. 90 minutes a month keeps the company honest and the investor updates real.",
            "Accrual vs cash accounting: cash = simple, shows when money moves. Accrual = matches revenue to when it was earned — required for accurate LTV/unit economics and eventually required by law (most businesses cross the threshold early). Ask your accountant which applies to you now; run your metrics on accrual regardless.",
          ],
        },
        {
          heading: "When to hire help",
          paragraphs: [
            "Hire a bookkeeper when the close takes more than an afternoon or when transactions exceed ~200/month. Hire a controller/CFO-fractional when you have investors to report to, debt, or complex revenue recognition. The sequence: DIY + templates → bookkeeper → fractional CFO. Don't skip the middle step — the first time a tax penalty lands, it costs more than a year of bookkeeping.",
          ],
        },
      ],
      examples: [
        "A founder signs a $60K annual contract with a customer in January. Cash accounting says $60K revenue in January. Accrual says $5K/month. When she models churn and LTV, cash accounting would have made her company look 12x healthier than reality.",
        "Another founder never reconciles. In month 7 the bank shows $40K less than the 'books.' The missing money: a double-paid vendor invoice, a refund processed twice, and a subscription that renewed for a year. A 90-minute monthly close would have caught all three in month 1.",
      ],
      actionItems: [
        "Set up: separate account, bookkeeping tool, and the 5th-of-month categorization rule.",
        "Do this month's close: reconcile, categorize, accruals, P&L vs plan, cash forecast.",
        "Book the 90-minute close block in your calendar for the next 12 months, now.",
      ],
      keyPoints: [
        "Profit is an opinion; cash is a fact.",
        "The monthly close is 6 steps, 90 minutes, and non-negotiable.",
        "Metrics run on accrual; books comply with the law.",
        "Bookkeeper → fractional CFO in that order, before the penalty.",
      ],
    },
    {
      id: "finance-5",
      title: "Taxes for founders: what's real and what's avoidable",
      readMinutes: 9,
      sections: [
        {
          heading: "The tax map at the start",
          paragraphs: [
            "US federal: income tax (C-Corp pays corporate rates on profits; S-Corp/LLC pass through), payroll taxes (if you have employees — withholding, FICA, unemployment), sales tax (on taxable goods/services by state — digital products have a patchwork of rules, especially with economic nexus), and self-employment taxes for solo/LLC founders. International revenue adds VAT obligations in the EU (the distance-selling threshold caught many startups) — and digital marketplaces (Stripe, Paddle, Stripe Tax) often collect for you, which doesn't mean you have no responsibility to file.",
            "The taxes that surprise founders: sales tax nexus (cross $100K or 200 transactions in a state and you may owe), VAT on EU digital sales, quarterly estimated payments (federal income tax is pay-as-you-go — miss the deadline and the penalties start), and the 83(b)-missed income tax covered in the legal track.",
          ],
        },
        {
          heading: "The founder's tax moves",
          paragraphs: [
            "Quarterly estimated payments: mark the four dates, compute from last year's tax + 25% of this year's projection, and pay. Penalties for underpayment apply even if you owe $0 at filing. Set the money aside: the rule is 25-30% of net income into a tax account, monthly, automatically — the company that has the tax money when it's due never needs the payment plan.",
            "The 83(b) was lesson 1's tax move. The 409A valuation is the second: an independent valuation of your common stock that sets option strike prices. Pay for the 409A (a few hundred to low thousands) — options granted with a 'reasonable' 409A are clean for both company and employee; strike prices set by guesswork are how IRS penalties happen.",
            "Hire an accountant early — the $200-500/mo question to a tax professional is the cheapest insurance against the $10K-50K surprise. And keep the tax account funded even when cash is tight: tax debt is the debt that doesn't go away in bankruptcy.",
          ],
        },
        {
          heading: "The state piece",
          paragraphs: [
            "Franchise taxes (Delaware, annual, based on shares/methods), state income tax in your operating state, and the 'foreign qualification' filing when you operate in a state where you're not incorporated. These are small numbers that compound into big penalties when ignored. The rule: when you have a physical presence (office, employee, inventory) in a state, you owe that state's basics — register early, file annually, and keep the calendar.",
          ],
        },
      ],
      examples: [
        "A solo founder sees 'no taxable income' (he paid himself nothing) and skips estimated payments. At filing, the company owes $24K in payroll and state taxes with interest and penalties — a $6K+ premium on money he always knew existed.",
        "A C-Corp with EU customers crosses the €10K distance-selling threshold. Without VAT registration, the first EU tax letter arrives with a bill including penalties. A $100/mo tax tool (or Paddle's merchant-of-record model) would have handled it silently.",
      ],
      actionItems: [
        "Put the four quarterly payment dates on your calendar with the money-rules (25-30% of net set aside monthly).",
        "Confirm you have a current 409A before your next option grant.",
        "Hire an accountant this quarter if you don't have one — and book a 30-min tax-mapping call.",
      ],
      keyPoints: [
        "Sales tax nexus and EU VAT are the surprise taxes.",
        "Estimated payments: four dates, 25-30% set aside monthly.",
        "409A before option grants; 83(b) before it's too late.",
        "Tax debt is the debt that doesn't disappear.",
      ],
    },
    {
      id: "finance-6",
      title: "Financial modeling: the model that predicts your raise",
      readMinutes: 9,
      sections: [
        {
          heading: "The three-part model",
          paragraphs: [
            "The startup financial model has three parts: (1) the operating model (headcount, spend by category, CAC by channel, pricing assumptions), (2) the revenue model (customers per cohort, retention, expansion, churn — usually the 'core engine'), and (3) the cash model (when money comes in, when it goes out, the resulting balance and runway).",
            "The model's job is not precision — it's sensitivity: change one input (pricing +20%) and see the whole company move. The investor's favorite question is 'what happens to the plan if X?' A model you can answer live is worth more than a perfect deck.",
          ],
        },
        {
          heading: "The revenue engine",
          paragraphs: [
            "The best models are cohort-based: new customers per month (by channel), churn by cohort, expansion (upsells) by cohort. Revenue = sum over cohorts of (acquirers × retention × ARPU). This structure answers the real questions: how much does the 12-month cohort contribute, and where does growth actually come from?",
            "Assumptions get labels and dates: 'ad CAC of $60, observed March 2026, expected to hold 3 months.' When the model drifts from reality, you update the assumption and watch the plan move — that's the model working.",
          ],
        },
        {
          heading: "The model as a negotiation tool",
          paragraphs: [
            "In fundraising, the model is the diligence document. Investors will stress-test it: 'you assume 3% monthly churn — show me the cohort data.' 'CAC goes down at scale — what's the evidence?' Weak models get picked apart; honest ones build trust even when they're pessimistic.",
            "Build it in a tool you can share (Google Sheets/Excel), keep it simple enough to explain in 5 minutes, and never fudge an assumption — the fudge is the first thing they find.",
          ],
        },
      ],
      examples: [
        "An investor asks 'what if your best channel doubles its CAC?' A founder with a cohort model answers live: 'we'd add 11 months to CAC payback and the plan breaks in Q4 — here's the channel mix shift we'd run.' The meeting proceeds. A founder without the model says 'we'd... manage it.' The meeting stalls.",
        "A model with 'customers grow 20% monthly forever' and no sensitivity analysis gets a pass from nobody. The same business modeled with labeled assumptions and a downside case looks like the professional operation it is.",
      ],
      actionItems: [
        "Build your three-part model: operating, revenue (cohort-based), cash.",
        "Label every assumption with a date and an evidence source.",
        "Run the three stress tests: pricing +20%, CAC ×2, churn ×1.5 — what breaks?",
      ],
      keyPoints: [
        "Operating + cohort revenue + cash = the three parts.",
        "Cohort-based revenue answers the real questions.",
        "Labeled assumptions and an honest downside build trust.",
        "The model's job is sensitivity, not precision.",
      ],
    },
    {
      id: "finance-7",
      title: "Banking, treasury, and spending discipline",
      readMinutes: 8,
      sections: [
        {
          heading: "The banking stack",
          paragraphs: [
            "A real business account (not a personal account), ideally with a startup-friendly bank (Mercury, Brex, Relay, or a local bank with a business product). Separate: operating account (spend), reserve account (taxes and 3 months of runway, untouchable except in emergency), and — once you raise — a designated account for investor funds. Cards: use corporate cards with limits; personal cards on the company are how founders lose the liability shield.",
            "The discipline rules: no personal spend on company cards (it's a tax issue AND a cap-table-issue at diligence), a two-signature rule for wires above a threshold, and a weekly 10-minute money review: cash, burn, runway, flagged transactions.",
          ],
        },
        {
          heading: "Treasury at the early stage",
          paragraphs: [
            "Pre-revenue: treasury = keep the cash liquid (money market funds are fine; lockups are not — a startup that can't reach its cash when an opportunity appears has no treasury). Once you raise: keep 18+ months runway in conservative instruments, and never, ever touch it for 'strategy' — the line between runway and conviction is drawn with your own discipline.",
            "Currency risk if international: hold what you spend in the currency you spend it; keep FX exposure small and simple. No crypto 'yield' with operational cash. No lending to friends. The treasury rule is boring on purpose: preserve, don't speculate.",
          ],
        },
        {
          heading: "The spending culture",
          paragraphs: [
            "The company's spending culture is set in the first six months: founder flights in economy, tools audited quarterly, equity over salary for the early team. A founder who flies first-class before revenue has told the team what the company values. Spend like the money is yours — because the attitude you show the money, your investors will match in the next round.",
            "The audit habit: every quarter, export all subscriptions and cancel anything unused. Most startups find 10-20% of burn in that one hour.",
          ],
        },
      ],
      examples: [
        "A founder keeps 3 months of runway in the operating account and the rest in a money-market reserve. A customer disaster hits in month 5 — she has the cash to ride it out and the discipline to have placed it where it's reachable.",
        "Another founder uses his personal card for 'team dinners' for a year. At diligence, the expense report shows $18K of personal meals on company funds. The liability shield was breached on day one — and the cap table is now a negotiation topic.",
      ],
      actionItems: [
        "Set up the three accounts: operating, reserve (taxes + 3 months), investor funds.",
        "Establish the two-signature wire rule and corporate card limits today.",
        "Schedule the quarterly subscription audit (1 hour, standing appointment).",
      ],
      keyPoints: [
        "Three accounts: operating, reserve, investor funds.",
        "No personal spend on company cards — ever.",
        "Boring treasury: liquid, conservative, untouchable reserve.",
        "Spending culture is set in the first six months.",
      ],
    },
    {
      id: "finance-8",
      title: "Cap table management after the round",
      readMinutes: 8,
      sections: [
        {
          heading: "What the cap table really is",
          paragraphs: [
            "The cap table is the ownership map: who owns what, what's vested, what's in the option pool, what converts on the next round. It is a legal document (the ledger) and a living model (the projections). Keep both, in sync, forever — the divergence between them is where disputes and dead rounds come from.",
            "The practical stack: a ledger (shares issued, transfers, cancellations), a model (what the next round does to everyone), and a tool that keeps them together (Carta/Pulley for the real stuff; a disciplined spreadsheet until then — but a spreadsheet requires discipline it rarely gets).",
          ],
        },
        {
          heading: "The post-round updates",
          paragraphs: [
            "After every round and every grant: (1) update the ledger with the new shares, (2) update the option pool balance, (3) refresh the 409A (new valuation → new strike prices), (4) recompute the model — what's the next round's ownership impact? (5) reconcile with the transfer agent if you have one. The discipline: the cap table is updated the week of the event, not the month of the next raise.",
            "The conversion math that matters: what does a $5M Series A at $25M pre do to a $1M SAFE at a $10M cap? The SAFE converts at $10M → $1M buys 10% pre-money → after the round, ~6.7% post. Do this arithmetic before the round, not during — it's what 'negotiating the cap' means.",
          ],
        },
        {
          heading: "The options paperwork",
          paragraphs: [
            "Every option grant: grant agreement (number, strike, vesting, exercise window), 409A valuation reference, and board approval recorded in minutes. Grants without board approval are a legal question mark; grants without 409A are a tax question mark. The pattern: do the paperwork the week of the grant, keep the minutes, archive everything — the data room thanks you later.",
          ],
        },
      ],
      examples: [
        "A founder grants options to 4 people 'informally' without board minutes or a 409A. At Series A, counsel needs to ratify or reprice — a $30K legal exercise and a 3-week delay that nearly pushes the round out of the term sheet's no-shop window.",
        "Another founder models the next round on the cap table before negotiating: the $1M SAFE at a $10M cap + $5M round at $25M pre leaves him at 51%. He negotiates the round at $28M pre — still 51%, but now with $3M more in the bank. The model was the negotiation.",
      ],
      actionItems: [
        "Reconcile ledger vs model today — find the first divergence.",
        "Model your next round's impact on every shareholder, in one spreadsheet.",
        "Confirm every grant has: agreement, 409A, board minutes.",
      ],
      keyPoints: [
        "The ledger and the model must always agree.",
        "Update the cap table the week of the event, not the month of the next raise.",
        "Model the next round before negotiating it.",
        "Grants without board approval and 409A are legal question marks.",
      ],
    },
    {
      id: "finance-9",
      title: "Metrics you should track and the ones you should ignore",
      readMinutes: 8,
      sections: [
        {
          heading: "The core dashboard",
          paragraphs: [
            "The founding dashboard has eight numbers: cash, runway, net burn, MRR/ARR (with breakdown: new, expansion, churned), NRR (net revenue retention — the growth engine metric), LTV:CAC, CAC payback, and cohort retention (W1/W4/W12). Everything else is either a driver of these or noise.",
            "NRR deserves the attention: NRR above 100% means existing customers grow you without acquisition — the compounding engine. Below 100% means you're running on a treadmill, outrunning churn with new logos. Investors ask about NRR before almost anything else in SaaS.",
          ],
        },
        {
          heading: "The metric traps",
          paragraphs: [
            "Vanity traps: total users (dead accounts inflate it), signups (unless paired with activation), press mentions (not revenue), 'enterprise pipeline' (unqualified), and downloads. Growth traps: MRR growth that's linear (hires scaling, not compounding), high growth with falling NRR (the funnel leaks), and cohort-retention curves that flatten below the sustainable line.",
            "The two questions that expose a trap: 'what behavior does this number reward?' and 'what decision does it change?' If the answer is 'nothing,' the number is a decoration.",
          ],
        },
        {
          heading: "The reporting rhythm",
          paragraphs: [
            "Daily: cash, burn, runway (10 minutes). Weekly: new customers, churn events, pipeline moves. Monthly: the full dashboard plus the P&L-vs-plan drift check and the 3-sentence story ('revenue up X because Y; the risk is Z'). The monthly update is also the investor update — one document serves both, which is why the update template from the fundraising track matters.",
            "The final rule: track the numbers you can act on this week. A metric you can't change is a metric you shouldn't worship.",
          ],
        },
      ],
      examples: [
        "A founder celebrates 10,000 signups — 90% never activated, and the dashboard glowed. When an investor asks 'how many pay?' the answer (312) collapses the story. Activation and paid conversions were the metrics all along.",
        "A SaaS at $120K MRR with 98% NRR and 12% monthly growth raises easily — the NRR says retention compounds. A competitor at $300K MRR with 85% NRR and 4% growth struggles to raise: growth is a treadmill without retention.",
      ],
      actionItems: [
        "Build the 8-number dashboard and connect it to real data this week.",
        "Kill one vanity metric from your reporting (or add the NRR if it's missing).",
        "Write your monthly 3-sentence story template: up because / down because / the risk is.",
      ],
      keyPoints: [
        "Eight numbers: cash, runway, burn, MRR, NRR, LTV:CAC, payback, cohort retention.",
        "NRR above 100% = compounding; below = treadmill.",
        "Ask every metric: what decision does it change?",
        "Daily 10 minutes, weekly events, monthly story.",
      ],
    },
  ],
  quiz: [
    {
      question: "Runway is calculated as:",
      options: [
        "Revenue ÷ burn",
        "Cash on hand ÷ net burn",
        "Assets ÷ liabilities",
        "Profit × months",
      ],
      correctIndex: 1,
      explanation: "Runway = cash ÷ net burn. Recompute weekly — it's the survival number that governs everything.",
    },
    {
      question: "What is the healthy LTV:CAC rule of thumb?",
      options: ["1x", "2x", "3x or more", "10x or more"],
      correctIndex: 2,
      explanation: "LTV should be 3x+ CAC, with CAC recovered in under 12 months — computed per channel, not in aggregate.",
    },
    {
      question: "What does NRR above 100% mean?",
      options: [
        "You're losing customers",
        "Existing customers grow you without acquisition",
        "Your price is too low",
        "Churn is below zero",
      ],
      correctIndex: 1,
      explanation: "Net revenue retention above 100% means expansion revenue exceeds churn — the compounding engine investors look for first.",
    },
    {
      question: "What is the strongest pricing anchor?",
      options: [
        "Your costs + margin",
        "Your competitor's price",
        "The value your product creates for the customer",
        "What you'd pay yourself",
      ],
      correctIndex: 2,
      explanation: "Price = a fraction of customer value (usually 10-30% of value for SaaS). Pricing from cost leaves money on the table.",
    },
    {
      question: "A profitable company can still die from:",
      options: ["Low morale", "Cash flow", "Too many customers", "High NRR"],
      correctIndex: 1,
      explanation: "Profit is an opinion; cash is a fact. Cash-flow timing kills companies that are technically profitable.",
    },
    {
      question: "Which metric best exposes a retention problem early?",
      options: [
        "Total signups",
        "Monthly press mentions",
        "Cohort retention (W1/W4/W12)",
        "Annual revenue",
      ],
      correctIndex: 2,
      explanation: "Cohort analysis reveals leaks months before they show in revenue. Signups and press are vanity without activation.",
    },
    {
      question: "The best first move to extend runway is:",
      options: [
        "Raise a bridge note",
        "Pause hiring",
        "Cut marketing",
        "Move to a cheaper office",
      ],
      correctIndex: 1,
      explanation: "Pausing hiring is the biggest and fastest lever — headcount is usually 60-80% of burn.",
    },
    {
      question: "What is the cap table's purpose after a round?",
      options: [
        "A decoration for the data room",
        "The ownership map: ledger and model in sync",
        "A tax document",
        "A marketing tool",
      ],
      correctIndex: 1,
      explanation: "The cap table is the ownership map — the legal ledger and the forward model must always agree, updated the week of each event.",
    },
  ],
};