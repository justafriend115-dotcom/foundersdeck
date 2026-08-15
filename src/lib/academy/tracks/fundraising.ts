import type { AcademyTrack } from "../types";

export const fundraisingTrack: AcademyTrack = {
  id: "fundraising",
  title: "Fundraising & Pitching",
  tagline: "From valuation to term sheet to close â€” run your raise like a professional.",
  icon: "banknote",
  estimatedHours: "5h",
  free: false,
  lessons: [
    {
      id: "fundraising-1",
      title: "Do you actually need to raise?",
      readMinutes: 8,
      sections: [
        {
          heading: "The honest pre-mortem",
          paragraphs: [
            "Before the roadshow, answer three questions: (1) What will the money buy that revenue cannot? (2) What milestone will it unlock that makes the next round (or profitability) possible? (3) Is your product ready for the scrutiny? Raising is a distraction from building â€” if your product isn't working yet, money accelerates the problem.",
            "The milestones that justify a raise: achieving PMF metrics, hitting a revenue inflection, funding a land-grab (market timing), or buying enterprise customers who need balance-sheet credibility. 'We want to hire more people' is not a milestone â€” it's a plan to buy more of the same problem.",
            "Also check the alternative: are you raising because the business model doesn't work yet? VCs fund growth, not the search for a business model. If unit economics are still broken, fix them with customers, not with a deck.",
          ],
        },
        {
          heading: "The amount and the runway math",
          paragraphs: [
            "Raise enough for 18-24 months of runway â€” enough time to hit the next milestone and run the next round without desperation (fundraising in the last quarter of runway is negotiating from weakness). Rule of thumb: the round = 18-24 months of burn + a buffer.",
            "Two common mistakes: raising too little (forced back into the market too early, wearing out your investor list) and raising too much at the wrong stage (over-dilution with nothing to show). The right amount is the minimum that reaches your next value inflection â€” not the maximum you can extract.",
          ],
        },
        {
          heading: "The investor-readiness check",
          paragraphs: [
            "Before reaching out, be able to answer in one sentence each: what problem, for whom, why now, why you, and what the money buys. Have 12-18 months of data (metrics, customers, revenue) if you've been operating. Have the legal housekeeping (entity, cap table, docs) clean. And have a lead investor thesis â€” the single most valuable asset in your raise.",
            "Cold outreach works best with a warm intro and a reason 'why them.' Investors fund people they can believe in â€” and belief comes from credibility signals: customers, traction, and a point of view.",
          ],
        },
      ],
      examples: [
        "A pre-product founder raises $500K to 'build the team and figure it out.' 12 months later the product is still unfunded in traction and the runway is at 4 months. The next round â€” if any â€” is a down round with brutal terms.",
        "A founder with 30 paying customers and 40% monthly growth raises an $800K seed specifically to hire two engineers and reach the $1M ARR inflection that justifies Series A. The round closes in 6 weeks because the milestone is credible.",
      ],
      actionItems: [
        "Write the milestone your raise will buy, with a number and a date.",
        "Calculate your 18-month runway target and the round size it implies.",
        "Complete the readiness check: one-sentence problem/market/why-you, clean docs, 12+ months of data.",
      ],
      keyPoints: [
        "Raise to reach a milestone, not to hire people.",
        "18-24 months of runway; round = burn Ã 18-24 + buffer.",
        "Fix broken unit economics before raising.",
        "A lead investor thesis is your strongest asset.",
      ],
    },
    {
      id: "fundraising-2",
      title: "Understanding the investor landscape",
      readMinutes: 9,
      sections: [
        {
          heading: "The capital stack, mapped",
          paragraphs: [
            "Pre-seed: angels, angel syndicates, micro-VCs (funds of $5-50M), accelerators, and friends & family. Checks: $25K-500K. Seed: seed VCs ($50-300M funds), syndicates, sometimes angels at the top. Checks: $500K-3M. Series A: institutional VCs ($150-500M+ funds) writing $3-15M.",
            "Each layer has a different job: angels write smaller checks on belief; syndicates (AngelList etc.) aggregate angels behind a lead; VCs bring capital, brand, and network but need a bigger story and usually a board seat. Understand who you're pitching and what their fund's math demands.",
            "Fund math matters: a $100M fund needs to return ~3x, so a $2M check at a $10M valuation must become ~$60M of exit value attributed to them. That's why VCs push for big markets and 10x outcomes â€” their model requires it. Angels and syndicates are more tolerant of smaller outcomes.",
          ],
        },
        {
          heading: "Reading investors before you pitch",
          paragraphs: [
            "Spend 30 minutes per target before the first call: what do they invest in (stage, sector, geography, check size)? What's their portfolio (are you complementary or competitive)? What's their thesis language? Who's the partner vs. the associate (pitch the partner; the associate's job is filtering)?",
            "Signals to read: recent investments (momentum â€” funds back what they're already backing), follow-on behavior (do they support their companies?), and their public content (podcasts, Twitter, newsletters). An investor who talks about 'founder-market fit' cares about a different pitch than one who talks about 'TAM expansion.'",
            "Red flags: investors who ghost for weeks, who ask for exclusive decks without meetings, who push term sheets with weird clauses 'as a favor,' and funds that are out of deployment for the year (they're still meeting â€” it's free diligence for them).",
          ],
        },
        {
          heading: "Building your target list",
          paragraphs: [
            "Your list should be 30-60 investors, tiered: Tier 1 (dream fits â€” 10), Tier 2 (strong fits â€” 15), Tier 3 (maybes â€” 20+). Reach out in waves â€” the goal is to create momentum (multiple offers) and avoid burning your list in one mass email.",
            "Use warm intros where possible (portfolio founders are the strongest referrers), and give your referrer a 3-line hook they can forward â€” make it easy for them to be helpful.",
          ],
        },
      ],
      examples: [
        "A founder pitches a $20M-exit-potential lifestyle business to a $200M fund. The fund passes â€” not because the business is bad, but because the math doesn't work for their model. He raises from angels and a $10M micro-VC instead, and everyone's happy.",
        "Another founder cold-emails 80 investors in one night with no research. Response rate: 3%. His competitor sends 15 targeted, researched intros via warm connections â€” and closes an oversubscribed round.",
      ],
      actionItems: [
        "Build your tiered target list: 10 Tier 1, 15 Tier 2, 20+ Tier 3.",
        "Spend 30 minutes researching each Tier 1: thesis, portfolio, recent moves, who to pitch.",
        "Prepare a 3-line forwardable hook for your warm intros.",
      ],
      keyPoints: [
        "Pre-seed/seed/Series A: different funds, different checks, different math.",
        "Fund math demands 10x â€” know what your audience needs.",
        "Research 30 minutes per target before pitching.",
        "Tiered list + waves = momentum, not spam.",
      ],
    },
    {
      id: "fundraising-3",
      title: "Valuation: how it's actually determined",
      readMinutes: 9,
      sections: [
        {
          heading: "The four forces",
          paragraphs: [
            "Valuation is set by supply and demand, not by formulas â€” but four forces determine the range: (1) traction (revenue, growth rate, retention â€” the strongest signal), (2) comparable deals (what similar companies at similar stages raised), (3) scarcity (how many investors are competing), and (4) founder quality and team credibility.",
            "Pre-revenue, valuation is mostly narrative + team + market: a proven founder with a big idea commands 2-3x a first-time founder. With revenue, the anchor shifts to math: growth rate and ARR multiples (seed-stage SaaS often trades at 15-40x ARR for high-growth, far less for low-growth).",
          ],
        },
        {
          heading: "The benchmarks",
          paragraphs: [
            "Typical ranges (2024-2026, rough): pre-seed/SAFE pre-money $2-8M; seed $8-15M pre; post-seed pre-revenue rarely exceeds $15M; seed with revenue $15-30M. Series A $30-60M pre. These move with markets â€” in cold markets everything compresses 20-40%.",
            "The mistake: anchoring on the highest story you've heard. Your comp set is your actual peer group: same stage, same geography, same sector, same growth. An AI startup raising at $40M doesn't set the market for a B2B services seed.",
          ],
        },
        {
          heading: "The negotiation lever: growth",
          paragraphs: [
            "There is one lever that moves valuation more than any other: growth rate. A company growing 20%/month at $50K MRR is worth 2-3x a company growing 5%/month at $100K MRR â€” investors buy the trajectory, not the level. If you want a higher valuation, the highest-leverage move is not negotiation â€” it's two months of faster growth before the round.",
            "Competition is the second lever: a term sheet in hand changes the conversation entirely. When multiple investors want in, valuation becomes a function of their fear of losing the deal.",
          ],
        },
      ],
      examples: [
        "Two identical products, identical revenue ($80K MRR). Company A grows 6%/mo; Company B grows 25%/mo. A's seed: $8M pre. B's seed: $18M pre. Same business, different trajectories â€” the market pays for the slope.",
        "A first-time founder opens at a $25M pre for a pre-revenue app. Every investor's comp set says $3-6M for their profile. The round stalls for months; he eventually closes at $4M with bruises. The same idea, raised a year later with traction, would have cleared $15M.",
      ],
      actionItems: [
        "Find 5-10 comparable rounds (Pitchbook, Crunchbase, newsletters) in your exact peer group.",
        "Write your valuation range with three anchors: comps, traction multiple, founder/team quality.",
        "Identify one growth lever you can pull for 60 days before the round â€” then pull it.",
      ],
      keyPoints: [
        "Valuation = supply and demand; traction, comps, scarcity, and team set the range.",
        "Seed SaaS: 15-40x ARR for high growth; pre-revenue is narrative.",
        "Growth rate is the valuation lever that matters most.",
        "Competition (multiple investors) beats negotiation.",
      ],
    },
    {
      id: "fundraising-4",
      title: "SAFEs, convertible notes, and priced rounds",
      readMinutes: 10,
      sections: [
        {
          heading: "The instruments, plain language",
          paragraphs: [
            "SAFE (Simple Agreement for Future Equity): you take money now, investor receives equity when the next priced round happens, with a discount (typically 10-20%) and/or a valuation cap (e.g., $10M). No interest, no maturity date, no debt. The Post-Money SAFE (YC standard) is the modern default â€” it makes cap-table math predictable.",
            "Convertible note: technically debt â€” money plus interest (typically 6-8%), converting at the next round with a discount/cap, with a maturity date (usually 18-24 months). The maturity date is the risk: if no round happens, the note becomes due and must be repaid or converted by agreement.",
            "Priced round: actual preferred stock sold at a fixed valuation with a full term sheet (board seats, protective provisions, liquidation preference). More legal work, more control changes â€” usually the 'real' institutional step.",
          ],
        },
        {
          heading: "How to choose",
          paragraphs: [
            "Seed/pre-seed from angels and syndicates: SAFEs â€” fast, cheap, standardized. The Post-Money SAFE's beauty: you know your dilution per dollar immediately. If you're raising $1M on a $10M cap, each $100K is 1% post-money â€” do the math in your head at the dinner table.",
            "Notes make sense when investors want downside protection (debt-like) or when you expect a fast conversion with certainty. Their complexity (interest, maturity, repayment obligations) is rarely worth it at seed.",
            "Priced rounds: when a lead investor wants governance and you're ready for board dynamics, or when your cap table is getting crowded (too many SAFEs = chaos at conversion). The rule: keep instruments simple until the round demands structure.",
          ],
        },
        {
          heading: "The cap and discount dance",
          paragraphs: [
            "Cap = the maximum valuation at which the money converts (your investor gets equity at min(round valuation, cap), less the discount). A $10M cap means: whatever the round's price, your SAFE investor pays as if the company were worth $10M â€” and gets a 10-20% discount on top.",
            "Cap arithmetic: $500K at a $10M cap converts to 5% at $10M round valuation (with post-money SAFE). If the round comes at $20M, the SAFE still converts at $10M â€” the investor is rewarded for early risk, and you gave up more than the $20M number suggests. This is why founders negotiate caps hard and investors love them.",
            "The 'valuation cap creep' problem: consecutive rounds with caps inflate the implied valuation until the real priced round hits a wall. Keep caps honest â€” a cap 3x above your realistic comp set is a time bomb.",
          ],
        },
      ],
      examples: [
        "A founder raises $750K on a $12M cap with 20% discount. Next year the seed round comes at a $15M pre. Each SAFE dollar converts at min($12M cap, $15M round) minus 20% â€” effectively an $9.6M valuation for those dollars. The founder realizes the cap he signed was the real valuation all along.",
        "Another founder uses notes with 18-month maturity. The market turns, no round happens in 18 months, and the notes come due â€” he now owes $400K+interest or must negotiate a conversion the investors don't need to agree to. The SAFE's lack of a maturity date was the gift he should have taken.",
      ],
      actionItems: [
        "Compute your current cap-table dilution with a post-money SAFE calculator before signing anything.",
        "State your cap and discount position in writing, with your walk-away numbers.",
        "If anyone offers a note, write down the maturity date, interest, and your conversion plan.",
      ],
      keyPoints: [
        "SAFE = no debt, no interest, no maturity â€” converts with discount + cap at next round.",
        "Post-Money SAFE: know your dilution per dollar instantly.",
        "Notes have a maturity date â€” the risk nobody plans for.",
        "The cap is the real valuation; negotiate it accordingly.",
      ],
    },
    {
      id: "fundraising-5",
      title: "Building the investor narrative",
      readMinutes: 9,
      sections: [
        {
          heading: "The story structure",
          paragraphs: [
            "The narrative arc that works: a personal, specific problem (start with a moment, not a market size) â†’ the failed alternatives (why existing solutions don't work â€” this is where you show you understand the space) â†’ your solution and why it's fundamentally better â†’ the evidence (traction, testimonials, numbers) â†’ the market and the wave (why now) â†’ the team (why you can win) â†’ the ask (what you need and what it buys).",
            "The narrative must survive a skeptic: every claim needs a defensible basis. 'The market is $50B' without segmentation reads as noise. 'The segment we target spends $2B/yr on X, currently wasted on Y' is a claim that survives scrutiny.",
            "Talk about competitors without flinching: 'we compete with X, they do A well, we're different on B because C.' Investors want conviction, not blindness â€” the founder who can't name their real competitor reads as someone who hasn't looked.",
          ],
        },
        {
          heading: "The evidence stack",
          paragraphs: [
            "Evidence hierarchy: revenue (best), paying customers (very good), users with real usage (good), interviews/letters of intent (weak but real), opinions (no). Structure your pitch so the evidence you have is the center of gravity. If you only have opinions, your narrative should be shorter and your focus sharper â€” 'this is the problem, here's the team, here's what we'll prove in 6 months.'",
            "Traction slides should be one number per line, trending up, with the method labeled: 'Revenue (subscriptions, not refunds)', 'Users (DAU/MAU)', 'Retention (W4 cohort)', 'Pipeline (qualified, not leads)'. Labels prevent the question 'how is this counted?' â€” the question you don't want in the meeting.",
          ],
        },
        {
          heading: "The 'why now' and 'why you'",
          paragraphs: [
            "Why now: a market that's ready â€” regulation change, tech shift, adoption inflection, an economic tailwind. 'The data shows buyers have started spending on X in the last 18 months' is a wave. 'We've been building for two years' is not a wave.",
            "Why you: your unfair advantage â€” insight (you've lived the problem), access (you know the buyers), speed (you've shipped fast), or compounding defensibility (data, network effects). 'Passion' is not an unfair advantage; 'I ran a logistics company for 8 years and lost $2M to this exact problem' is.",
          ],
        },
      ],
      examples: [
        "A founder opens with 'I spent three years running a restaurant group and watched $80K/yr walk out the door in food waste.' That's a story. The same founder opening with 'the global food waste market is $1T' gets a different â€” worse â€” audience posture.",
        "A team pitches 'we're building an AI assistant for doctors.' The VC asks 'what's your unfair advantage?' The answer â€” 'we're faster' â€” fails. The same team, with one member who spent 10 years in clinical IT and two healthcare contracts signed, converts the room.",
      ],
      actionItems: [
        "Write your pitch narrative in 6 sentences: problem moment, failed alternatives, solution, evidence, why now, why you.",
        "Audit every claim: what's the evidence, and is it labeled?",
        "Write your competitor answer out loud, then record and listen to it once.",
      ],
      keyPoints: [
        "Start with a moment, not a market size.",
        "Evidence hierarchy: revenue > paying users > usage > LOIs > opinions.",
        "Label your traction numbers; label every claim.",
        "Why now = a wave; why you = an unfair advantage, not passion.",
      ],
    },
    {
      id: "fundraising-6",
      title: "The investor meeting: from first call to term sheet",
      readMinutes: 9,
      sections: [
        {
          heading: "The meeting arc",
          paragraphs: [
            "The first call is a 25-30 minute filter: your story compressed, their questions, and a clear next step. Never end a call without asking for the next one: 'Would you like to see the full deck / meet the team / do a product demo?' The strongest signal in fundraising is moving meetings.",
            "Meeting 2 (often the full pitch + product demo): demo the real product live, in 5 minutes, telling the story through the product. Meeting 3 (deeper diligence): team, financials, market maps, competitive teardown, reference calls. Meeting 4-5: partner meetings and the term sheet conversation.",
            "The pattern to know: if you're not being asked for the next meeting, you're not progressing â€” and 'we'll circle back' means no. Ask directly at the end of every meeting: 'What would you need to see to move forward?'",
          ],
        },
        {
          heading: "The demo that sells",
          paragraphs: [
            "A live demo is your single most persuasive artifact. Structure: 1-minute setup (the problem the product solves in the user's words), 3-minute walkthrough of the core job (the happy path â€” not settings, not edge cases), 1-minute payoff (the result â€” the number, the saved hour, the avoided error). Practice until it runs without hunting for buttons.",
            "Demo do's: use real data (a real customer's story), fail gracefully (when something breaks, say 'the interesting thing about this edge case is...'), and end with the wow moment â€” the thing the audience will retell. Demo don'ts: no sandbox demos with dummy data, no 30-minute click-throughs, no apologizing for the UI.",
          ],
        },
        {
          heading: "Reading the room and the signals",
          paragraphs: [
            "Signals of interest: questions about 'what if we invested', timing questions ('when do you want to close?'), offer to introduce you to portfolio founders, and requests for the data room. Signals of concern: silence, questions about competitors, 'who else are you talking to?' (usually neutral), and the eternal 'we like you but...'",
            "Never lie, never exaggerate, and never pretend you have a term sheet you don't. Fundraising is a small world: investors talk, and a reputation for hype is a tax you'll pay on every future round.",
          ],
        },
      ],
      examples: [
        "A founder treats the first call as a full pitch, monologuing for 20 minutes. The investor asks three questions and the call ends without a next step. The lesson: first calls are filters â€” compress, listen, and ask for the next meeting.",
        "Another founder ends every meeting with 'what would you need to see to move forward?' One investor says 'a customer reference from a named enterprise.' She sends it the same day â€” and moves to partner meeting in 48 hours. The question turned passive interest into an actionable path.",
      ],
      actionItems: [
        "Script your first-call 25 minutes: 8-min story, 10-min Q&A, next-step ask.",
        "Build and rehearse a 5-minute live demo with real customer data.",
        "Add the closing question to your meeting template: 'What would you need to move forward?'",
      ],
      keyPoints: [
        "Meetings are a filter: moving to the next meeting is the signal.",
        "Demo the real product, real data, 5 minutes, happy path, wow ending.",
        "Ask the next step out loud at the end of every meeting.",
        "Never inflate claims â€” fundraising is a small world.",
      ],
    },
    {
      id: "fundraising-7",
      title: "Running the process: momentum, deadlines, and multiple offers",
      readMinutes: 9,
      sections: [
        {
          heading: "Engineering competition",
          paragraphs: [
            "A raise is a momentum business. The strategy: open with your strongest Tier 1 candidates in parallel, get at least one serious lead early, then use that lead to create FOMO with the rest. Investors want to be in rounds that are filling up â€” a term sheet in hand converts 'interesting' into 'must decide.'",
            "Practical tactics: batch your intro calls in the same two weeks (so interest is simultaneous), keep a simple tracker (target, status, next action, owner), and never wait on one investor â€” always have the next conversation scheduled before you depend on anyone's answer.",
            "The deadline move: give every investor a real or soft deadline ('we're looking to close in 3 weeks to hit a milestone'). Deadlines are honest if your round size and timeline are real; they're manipulation if invented â€” and investors can smell a fake deadline from across the room.",
          ],
        },
        {
          heading: "Deal flow hygiene",
          paragraphs: [
            "Log every conversation: contact, date, stage (intro â†’ call â†’ meeting â†’ DD â†’ term sheet), and the open question. Fundraising chaos â€” unanswered emails, double-booked calls, lost threads â€” reads as operational weakness. A clean pipeline is a signal.",
            "When interest is real, offer a standard process: shared data room, a fixed diligence window, and a decision date. Professionalizing the process makes you the one controlling the timeline rather than the one being controlled by it.",
          ],
        },
        {
          heading: "Choosing between offers",
          paragraphs: [
            "Price (valuation, cap) is the least important dimension at the extremes. Rank offers on: (1) strategic value (do they help you win â€” network, customers, talent?), (2) governance (board seats, protective provisions), (3) relationship (who will you work with through the hard times?), (4) follow-on ability, and (5) price, in that order.",
            "A 'bad' valuation with a brilliant strategic investor beats a 'good' valuation with a passive check from a random name â€” the first accelerates your company; the second is just money. Money is the same everywhere; expertise is not.",
          ],
        },
      ],
      examples: [
        "A founder gets a term sheet from a strong lead and tells three Tier 2 investors 'we have a term sheet and are closing in two weeks.' Two of three suddenly find time for partner meetings. The round closes oversubscribed at better terms than the lead offered.",
        "Another founder takes the highest cap without checking governance. The investor's term sheet includes a board seat for a $200K check and a veto list covering hiring. Eighteen months of friction later, the 'better' cap has cost him a co-founder and a pivot.",
      ],
      actionItems: [
        "Set your round's timeline and milestone-driven deadline in writing.",
        "Build the tracker: target, stage, next action, owner â€” update it daily during the raise.",
        "Score each offer on strategy, governance, relationship, follow-on, price â€” before you're holding two.",
      ],
      keyPoints: [
        "Parallel openings + a lead early = momentum.",
        "Real deadlines, professionally run process.",
        "Log every conversation; control the timeline.",
        "Rank offers: strategic value > governance > relationship > follow-on > price.",
      ],
    },
    {
      id: "fundraising-8",
      title: "Due diligence: what they check and how to pass",
      readMinutes: 9,
      sections: [
        {
          heading: "The four diligences",
          paragraphs: [
            "Financial DD: P&L, cash, cap table, burn, and the model behind your projections. Legal DD: entity, contracts, IP, equity documents, compliance. Technical DD: architecture, security, code quality, and team depth. Commercial DD: market, competition, customer references, and pipeline authenticity.",
            "The principle that makes all four pass: the data room you prepared in the Legal track. Documentation you can produce in an afternoon is a mark of an organized company; a two-week scramble for basic documents kills more deals than any red flag does.",
          ],
        },
        {
          heading: "The questions they actually ask",
          paragraphs: [
            "Financial: 'walk me through your burn' â€” know your burn monthly and seasonally. 'What's your path to profitability?' â€” have the model. 'Why is this line item what it is?' â€” every number has a story; know them all. Legal: 'who owns the IP?' â€” answers are: the company, per signed assignments. Anything else is a problem.",
            "Technical: 'how does the system scale?' â€” the honest answer at seed is 'we're built to refactor; here's our plan.' Pretending your monolith is infinitely scalable is a bigger red flag than the monolith. Commercial: 'talk to three customers' â€” warm references are normal; just make sure they're real users, not your friends.",
          ],
        },
        {
          heading: "Diligence as a relationship",
          paragraphs: [
            "Diligence is where trust is built or lost. Answer fast, answer completely, and surface problems before they're found ('our churn in Q1 was bad â€” here's why and here's the fix'). Investors would rather fund a founder who finds their own problems than one who hides them.",
            "The end state: a signed term sheet, legal review, and a close. Plan the close checklist: subscriber docs, funds wired, cap table updated, Form D filed, announcement agreed with the lead. Closing is not the finish line â€” the first board meeting and your reporting cadence are.",
          ],
        },
      ],
      examples: [
        "A founder's legal DD turns up an unsigned CIIAA from a key engineer. Because she'd run pre-diligence, she produces it signed in 24 hours. The deal closes on schedule. The investor later tells her: 'we've seen deals die on exactly that document.'",
        "Another founder's financial DD reveals a $30K 'marketing' line that's actually a personal expense. He hides it; it surfaces; the deal dies. The same founder, surfaced it himself with a fix, would have closed â€” investors fund honesty.",
      ],
      actionItems: [
        "Run the financial DD drill: burn, path to profitability, and every line item explained.",
        "Verify the IP ownership chain end-to-end (entity â†’ founders â†’ employees â†’ contractors).",
        "Pick 3 real customers and prep them for reference calls.",
      ],
      keyPoints: [
        "Financial, legal, technical, commercial â€” four diligence tracks.",
        "The prepared data room is the pass.",
        "Surface problems before they're found.",
        "Plan the close checklist the day you sign the term sheet.",
      ],
    },
    {
      id: "fundraising-9",
      title: "Closing the round and wiring the money",
      readMinutes: 8,
      sections: [
        {
          heading: "The closing mechanics",
          paragraphs: [
            "Closing = all investors' subscription documents signed, funds in the company's bank account, and the cap table updated to reflect the new money. For SAFE rounds: each investor signs the SAFE + wires; you countersign and issue the receipt â€” typically a same-day or same-week process per investor.",
            "For priced rounds: the process runs through counsel â€” Stock Purchase Agreement, Amended & Restated Charter, Investors' Rights Agreement, plus closing deliverables (certificates, resolutions, good standing). It's a two-to-four-week sprint coordinated by lawyers. Know this BEFORE you get the term sheet so the timeline doesn't surprise you.",
          ],
        },
        {
          heading: "The post-close checklist",
          paragraphs: [
            "The week after close: (1) update the cap table and ledger, (2) file Form D within 15 days (SEC), (3) add investor info to the data room, (4) open your reporting cadence (monthly metrics, quarterly updates), (5) schedule the first board meeting, (6) update the website/marketing where appropriate, and (7) send a thank-you with the closing summary â€” investors remember how the close felt.",
            "The money itself: move to the operating account, wire carefully (verify accounts twice â€” fraud on wire instructions is real), and connect it to your accounting from day one so the bank matches the books.",
          ],
        },
        {
          heading: "The investor relationship you just signed up for",
          paragraphs: [
            "You now have partners, not customers. The relationship is maintained by the monthly update: what you did, the numbers, what's hard, what you need help with. Updates are not optional PR â€” they're the trust engine that powers your next round, warm intros, and help when you're in trouble.",
            "Trouble rules: tell investors bad news before they ask, bring options not problems, and never disappear. The founders who go quiet when things go wrong are the founders whose phones stop ringing when they need help.",
          ],
        },
      ],
      examples: [
        "A founder receives a 'changed wire instructions' email from her lead investor's 'counsel' two days before close. She calls the investor on a verified number first â€” the email was a scam. She verifies every wire twice and closes clean, having learned the fraud rule on day one instead of the hard way.",
        "Another founder closes and goes silent for five months. When he needs a bridge round, his updates resume â€” but the investors who would have helped now remember the silence. The bridge takes 3x longer with worse terms.",
      ],
      actionItems: [
        "Write your closing checklist: docs, wires, Form D, cap table, board meeting, announcement.",
        "Adopt the wire-verification rule: verify account details by phone with a known number, twice.",
        "Draft your monthly update template now â€” fill it in the first month, not the fifth.",
      ],
      keyPoints: [
        "SAFE closes are fast; priced rounds are 2-4 week legal sprints.",
        "Post-close: cap table, Form D (15 days), reporting cadence, first board meeting.",
        "Verify wire instructions twice â€” fraud is real.",
        "The monthly update is the trust engine for your next round.",
      ],
    },
    {
      id: "fundraising-10",
      title: "What to do when investors say no",
      readMinutes: 8,
      sections: [
        {
          heading: "The rejection taxonomy",
          paragraphs: [
            "'No' comes in three flavors: (1) 'not right now' (timing, stage, sector â€” often real), (2) 'not you' (the team read as not ready â€” painful but actionable), (3) 'not at this price' (interest but a terms problem â€” the most useful). Extract which one you got at the end of every meeting: 'what would change your mind?' is the question that converts a no into information.",
            "Rejections are data. If every no is 'too early,' your story needs a milestone. If every no is 'team,' you need a stronger profile (which usually means traction). If every no is 'valuation,' you have a terms problem you can fix. Aggregated rejection patterns are the cheapest market research you'll ever run.",
          ],
        },
        {
          heading: "The failed round playbook",
          paragraphs: [
            "A round that doesn't close is a normal outcome â€” most seed attempts fail. The response is a sequence: (1) stop the burn of the raise (pause outreach), (2) extend runway (cut burn, raise small bridge from believers â€” customers, angels, debt), (3) redefine the milestone to something credible and achievable, (4) restart in 6-9 months with the new evidence.",
            "The failure mode to avoid: raising the same deck to the same list for a year. That's not persistence, it's noise. The market is telling you what it needs â€” the milestone. Go build it.",
            "One more source: revenue. A company that grows is always fundable eventually. The most underrated capital is the customer's check.",
          ],
        },
        {
          heading: "Keeping the door open",
          paragraphs: [
            "End every no with grace and a follow-up path: 'thank you â€” if we hit $X MRR by Q3, would you be open to a re-look?' Then actually send them the update when you hit it. Half the deals in Silicon Valley start with a second meeting a year after the first no.",
            "And keep your own scoreboard honest: the goal of the raise is the milestone it unlocks, not the round itself. A round that closes before you can deliver is a loan of credibility you'll pay back in pain.",
          ],
        },
      ],
      examples: [
        "A founder collects 23 rejections. The pattern: 'we love the team, too early.' She stops raising, raises a $200K bridge from two believers, ships the product to 50 paying customers, and re-enters nine months later at a valuation 4x higher with a 3-week raise.",
        "Another founder keeps cold-emailing the same 80 investors every quarter for 18 months with the same deck. Response rate goes from 5% to zero. The market answered â€” he just didn't read the reply.",
      ],
      actionItems: [
        "Add the question to every meeting script: 'What would change your mind?'",
        "After 10+ rejections, classify the pattern: too early / team / price â€” then act on the category.",
        "Write your restart plan now: bridge, burn cut, and the one milestone you'll bring back.",
      ],
      keyPoints: [
        "Categorize every no: timing, team, or price â€” then fix the category.",
        "A failed round is normal; the playbook is bridge, milestone, restart.",
        "Revenue is the most underrated capital.",
        "Leave every no with a re-look path â€” and send the update when you hit it.",
      ],
    },
  ],
  quiz: [
    {
      question: "How much runway should a seed raise buy?",
      options: ["6-9 months", "12 months", "18-24 months", "36 months"],
      correctIndex: 2,
      explanation: "18-24 months gives time to hit the next milestone and run the next round without desperation.",
    },
    {
      question: "What is the strongest lever on valuation?",
      options: ["Negotiation scripts", "Growth rate", "Deck design", "A bigger TAM slide"],
      correctIndex: 1,
      explanation: "Investors buy the trajectory. Two months of faster growth before the round moves valuation more than any negotiation.",
    },
    {
      question: "Which is true of a Post-Money SAFE?",
      options: [
        "It has a maturity date",
        "It charges interest",
        "You know dilution per dollar immediately",
        "It requires a board seat",
      ],
      correctIndex: 2,
      explanation: "The Post-Money SAFE computes dilution on post-money basis â€” every dollar's dilution is known instantly.",
    },
    {
      question: "What does the cap in a SAFE mean for the investor?",
      options: [
        "The maximum investment amount",
        "The maximum valuation they convert at",
        "The minimum return they get",
        "The board size limit",
      ],
      correctIndex: 1,
      explanation: "The cap is the valuation ceiling for conversion â€” investors convert at min(round value, cap), minus discount.",
    },
    {
      question: "What is the strongest evidence in a pitch?",
      options: ["Interviews", "Letters of intent", "Revenue", "Team credentials"],
      correctIndex: 2,
      explanation: "Revenue is the strongest evidence; opinions are the weakest. Structure the pitch around your strongest evidence.",
    },
    {
      question: "What signal indicates real investor interest?",
      options: [
        "A polite 'we'll circle back'",
        "Questions about when you want to close",
        "Long meetings with junior staff",
        "Requests for an exclusive deck",
      ],
      correctIndex: 1,
      explanation: "Timing questions and offers of introductions indicate movement. 'We'll circle back' without a next step means no.",
    },
    {
      question: "When ranking offers, what matters MOST?",
      options: ["Valuation", "Strategic value and governance", "Speed of wiring", "Brand name only"],
      correctIndex: 1,
      explanation: "Strategic value, governance, and relationship outweigh price â€” money is the same everywhere; expertise is not.",
    },
    {
      question: "If investors say 'too early,' what is the right response?",
      options: [
        "Raise the same deck to more investors",
        "Build the milestone they asked for, then return",
        "Lower your valuation instantly",
        "Pitch harder with the same evidence",
      ],
      correctIndex: 1,
      explanation: "'Too early' means the evidence gap. Go build the milestone, then return with new proof â€” not the same deck.",
    },
  ],
};
