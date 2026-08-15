import type { AcademyTrack } from "../types";

export const teamTrack: AcademyTrack = {
  id: "team",
  title: "Team & Hiring",
  tagline: "Co-founders, equity, first hires, and the culture that makes people stay.",
  icon: "users",
  estimatedHours: "4.5h",
  free: false,
  lessons: [
    {
      id: "team-1",
      title: "Co-founder selection: the second most important decision",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your co-founder is your business partner for years. They own part of the company with you, and they help make every big decision. Choosing the wrong one is one of the most expensive mistakes a startup can make, so this lesson shows you how to choose well.",
          ],
        },
        {
          heading: "What you're actually selecting for",
          paragraphs: [
            "Your co-founder is your longest-tenured colleague, your co-owner, and your most powerful critic. Investors look at the co-founder relationship as a sign of how your company will handle conflict. A crack in that relationship is a red flag they can smell from across the room.",
            "The criteria that matter: (1) complementary skills, so you are not redundant, (2) independent judgment, because a co-founder who always agrees with you is a mirror, not a partner, (3) resilience, because the startup will be a crisis machine for years, and you need someone who performs under pressure, and (4) alignment on ambition and exit, because you want the same size of outcome and the same pace.",
            "Red flags: friendship as the primary basis (friendship is fine, but 'he's my best friend so he's my co-founder' is how you lose both), pure desperation ('I can't do this alone'), and asymmetric risk tolerance (one founder lives frugally on savings while the other keeps a high-paying job).",
            "Skills can be learned, and resumes can be polished. What cannot be fixed later is how the two of you handle stress, money, and being wrong. Those three things decide most of your future arguments, so look for evidence of them early, before you sign anything.",
          ],
        },
        {
          heading: "The working interview",
          paragraphs: [
            "You cannot learn this from coffee chats. Work together on something real for 2-4 weeks first. Build a prototype together, run a sales sprint, or take a customer call. Watch how they react to rejection, how they communicate under a deadline, and how they handle being wrong.",
            "Run explicit discussions BEFORE the agreement. What does each of you need to earn? What outcome are you building toward, a lifestyle business, a $100M exit, or an IPO? How long will you commit? And how does each of you handle conflict?",
            "Write the answers down. They become the founder agreement. A written agreement made before things get hard is worth more than any lawyer drafted after the fighting starts.",
          ],
        },
        {
          heading: "The decision tests",
          paragraphs: [
            "Three tests before you commit: (1) Would I trust this person with my life savings? (2) If our roles were reversed tomorrow, would I be comfortable? (3) Would I rather solve this problem with them than without them? If any answer is no, wait.",
            "Waiting is not a failure. The right co-founder at month 9 beats the wrong one at month 3. The wrong one costs you a year and a big chunk of the company.",
            "Equity math comes AFTER fit. The '50/50 vs 60/40' question is a symptom, not the problem. Fix the fit first, then use the split framework in the next lesson.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Picking a friend because the friendship is comfortable. Friendship is a bonus, not a qualification. Pick on skills, judgment, and resilience, then keep the friendship safe with a written agreement.",
            "2. Skipping the working test. A few nice dinners feel like progress but reveal almost nothing. A 2-week project shows you how they act when things break, which is the only evidence that matters.",
            "3. Ignoring misalignment on money and exit. One founder dreaming of a $10M lifestyle business and the other of a $500M IPO will fight for years. Talk about the numbers before you sign.",
            "4. Giving a big equity stake to someone who is not committing fully. Part-time involvement at founding usually deserves a much smaller stake with vesting, not an equal split.",
          ],
        },
      ],
      examples: [
        "Two friends start a startup 'for fun.' One quits his job, the other doesn't. Twelve months later the employed co-founder has contributed 20% of the work, and the split is still 50/50. The founder who quit eats the resentment for two years before a painful buyout.",
        "A founder interviews three candidates for co-founder by having each build a 1-week prototype with him. One ships, one argues about tooling, one disappears for 5 days. The choice makes itself.",
        "A technical founder takes on a sales co-founder after a shared 3-week sales sprint. In that time they lose seven deals, and the founder watches how the candidate handles each loss. After the third loss the candidate is already adjusting the pitch. That evidence is worth more than any interview answer.",
        "Two founders skip the founder agreement because they 'trust each other.' When the company raises its first round, the term sheet requires a founder agreement, and the lawyers bill them a painful five-figure sum to draft one under time pressure.",
        "A founder picks a co-founder who always agrees with him. For two years the company makes every bad decision in cheerful agreement, until a board member finally points out that nobody in the room will say no. The fix costs them a year.",
      ],
      actionItems: [
        "Write your ideal co-founder spec: skills, behaviors, values, and deal-breakers.",
        "Run a 2-week working project with the candidate before signing anything.",
        "Answer the three decision tests in writing, separately, then compare.",
        "List your own deal-breakers and say them out loud to a friend before the first meeting.",
        "Draft the founder agreement topics: salary needs, outcome, commitment, and conflict style.",
        "Schedule a 'bad news' rehearsal: each of you shares one hard truth with the other before you commit.",
      ],
      keyPoints: [
        "Co-founder quality predicts how investors read your company.",
        "Complementary skills + independent judgment + resilience + aligned ambition.",
        "2-4 week working interview beats any number of dinners.",
        "Fix fit first, equity split second.",
        "Written answers from the working interview become your founder agreement.",
        "If any of the three tests fails, waiting is the right move.",
      ],
    },
    {
      id: "team-2",
      title: "Splitting equity between founders",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "When you start a company with other people, you need to decide who owns how much of it. This lesson shows you a fair way to make that call. The goal is a split everyone can live with for years, even when things get hard.",
          ],
        },
        {
          heading: "The split framework",
          paragraphs: [
            "The naive split is 50/50 for two founders, or 33/33/33 for three. The better framework splits on past contribution, present, and future. Past means IP built before day one, funding brought in, and domain authority. Present means who is working full-time versus part-time, and who is risking a salary. Future means the expected role and impact over the next 4 years.",
            "A common fair shape: equal base, then adjustments. The CEO with the full-time commitment and the pre-existing product gets more. The part-time advisor-style co-founder gets markedly less, usually 5-15%, with different vesting.",
            "Whatever the split, the question 'does this split survive the first real contribution difference?' is the test. The first person to feel unfairly treated starts the company's slow bleed. Equity fights are the number one cause of founder breakups.",
            "Be careful with 'equal.' 50/50 feels fair on day one, but it ignores how much each person brings and how much they will actually do. If the split cannot survive a year of real work, it will not survive five years of it.",
          ],
        },
        {
          heading: "The asymmetric cases",
          paragraphs: [
            "Solo founder keeping 100% is fine until you need a co-founder's credibility to raise. Idea-only founders (no build, no network, no money) bring the least to the table and should get the least. The classic bad deal: giving an idea-giver 50% when they add no ongoing value.",
            "The 'sweat equity vs cash' question: if one founder contributes capital, that is usually a loan or a priced purchase of shares, not a license to own 10% more. Keep capital contributions clean and documented so the equity split stays about work.",
            "Different stakes are fine and common. What matters is that everyone understands why the numbers are what they are, and that the reasons are written down before anyone signs.",
          ],
        },
        {
          heading: "The vesting counterweight",
          paragraphs: [
            "Splits are decided at founding, but vesting is what makes them fair over time. Vesting means the shares are earned gradually over years, not given all at once.",
            "If everyone vests 4 years with a 1-year cliff, a founder who leaves in month 3 keeps nothing. The split is a promise, and vesting is the enforcement. Never issue fully-vested founder shares without a very good, documented reason.",
            "A cliff means no shares vest at all until the first year is done. After that, shares vest monthly. This protects the company when someone leaves early, and it protects the founders from each other's bad timing.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Splitting 50/50 because it feels friendly. Equal is not fair when contributions are unequal. Score the past, present, and future contributions first, then split.",
            "2. Skipping vesting. A founder who leaves in month 3 walks away with a third of the company. Vesting with a cliff keeps the split honest.",
            "3. Rewarding an idea with a big stake. A two-line concept note is not a company. Idea-givers who do no work should get a small stake with vesting, or none.",
            "4. Treating cash put in as automatic equity. Money in is a loan or a share purchase. Mixing cash and work equity without documentation is how cap tables get radioactive.",
          ],
        },
      ],
      examples: [
        "Founder A has the product built, 200 users, and $20K of his own money in it. Founder B joins full-time with a strong network and sales ability. Split: 60/40 with equal 4-year vesting and a signed founder agreement, defensible because the difference is real and documented.",
        "A founder gives his 'idea guy' friend 40% for a two-line concept note. No vesting. The friend contributes nothing further. Three years later he holds 40% of everything, and the company cannot raise because the cap table is radioactive.",
        "Two founders split 50/50 with no vesting. One quits at month 8. The remaining founder now works 100% of the hours for 50% of the company, and every future investor asks why. The fix is a buyback, and it costs six months of stress.",
        "Three founders use a 0-10 scorecard for past, present, and future contributions. The scores produce 45/35/20. It feels uncomfortable for a week, but two years later nobody argues, because the reasoning is on paper.",
        "A founder who put in $50K takes it back as a documented loan with a simple note, instead of demanding 10% more equity. The split stays clean, and the cap table stays investable.",
      ],
      actionItems: [
        "Score each founder's past, present, and future contribution on a simple 0-10 scale.",
        "Translate the scores into a draft split and pressure-test it: 'does this feel fair in year 2?'",
        "Whatever the split: 4-year vesting, 1-year cliff, founder agreement signed by all.",
        "Write down any cash each founder has put in and label it: loan, purchase, or gift.",
        "Ask each founder to write what they think is fair BEFORE seeing your draft.",
        "Book a 2-hour meeting to go through the scorecard together, and write down the final numbers.",
      ],
      keyPoints: [
        "Split on past + present + future contribution, not vibes.",
        "Idea-givers and part-timers get less, documented, with vesting.",
        "Capital contributions are loans or purchases, not equity.",
        "Vesting is what makes the split fair when someone leaves.",
        "Equal is not the same as fair.",
        "A written scorecard prevents most future equity fights.",
      ],
    },
    {
      id: "team-3",
      title: "Your first hires: who, when, and how",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Hiring is how you turn your idea into a company. But the first people you hire matter more than any others, because they set the standard for everyone who comes after. This lesson shows you who to hire first, and how to hire them well.",
          ],
        },
        {
          heading: "The hiring order",
          paragraphs: [
            "Hire the function that is the constraint on growth. If you have demand you cannot build fast enough, hire engineering. If you have a product nobody can sell, hire sales. Never hire to 'round out the org.' Pre-seed companies hire one painful bottleneck at a time.",
            "The first five hires are the dangerous ones because they set the bar. Their standards become your standards, and their behavior becomes your culture. Hire deliberately slow, fire fast, and never compromise on talent quality at this stage. A mediocre first engineer compounds into a mediocre team.",
            "The roles to fill early: a co-pilot engineer if you are product-led, a first seller if you are revenue-led, and possibly a first designer. A designer at day 20 produces more leverage than a designer at day 200.",
            "Ask yourself: what is the one thing that, if it got done better, would move the company the most this quarter? That answer is your hiring list. Everything else can wait.",
          ],
        },
        {
          heading: "The first-hire profile",
          paragraphs: [
            "Early hires are generalists with a specialist's edge: an engineer who owns the stack end-to-end, a seller who can build pipeline AND close. They need low ego, high ownership, comfort with ambiguity, and a desire to build systems from scratch.",
            "Test for it: give them a real task. An engineer gets a 48-hour take-home that touches the real codebase. A seller gets a mock pitch to your actual ICP. Watch for how they handle missing information, because that is the real signal.",
            "Ask them how they have handled being wrong. The best early hires can point to a specific mistake they made, what it cost, and what they changed. That answer tells you more than any list of technologies or titles.",
          ],
        },
        {
          heading: "The process that doesn't waste weeks",
          paragraphs: [
            "A hiring process that works at this stage: (1) write the job as a problem statement, not a requirements list. 'Own our payments pipeline' beats '5+ years of Stripe experience.' (2) Phone screen, 30 minutes, you. (3) Working session, 2 hours. (4) 2-3 references, call them, and ask what the candidate is bad at. (5) Offer within 3 days of 'yes.' Slow processes lose great candidates to fast competitors.",
            "Always do a paid 1-2 week contract trial before a full-time offer for key roles. It converts 'I think they're good' into 'they are good,' and it gives the candidate a real look too. The cost of a trial gone wrong is a month; the cost of a bad hire is a year.",
            "Do not make the offer a negotiation marathon. Give your best number first, and say it plainly. People at this stage join for the mission and the equity, so the money conversation should take minutes, not weeks.",
            "Keep a candidate scorecard: three or four questions you ask every candidate, with the answers written down. It keeps you honest, and it makes your process repeatable when you hire the next five people.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Hiring for the org chart instead of the constraint. A sales team with no working product is a salary bill, not a strategy. Hire the bottleneck.",
            "2. Skipping the trial. A good interview is a story; a good week of work is proof. Pay for a short trial on a real task.",
            "3. Dragging the process. Top candidates have three offers by Friday. Decide in days, not months.",
            "4. Hiring someone you like instead of someone who can do the job. Warm feelings are nice, but they do not ship. Use the scorecard, not your gut.",
          ],
        },
      ],
      examples: [
        "A pre-revenue startup hires a sales team of three before the product works. Eight months of salaries later, they have a product and no pipeline, because the constraint was product, not sales. The team is let go in the first down round.",
        "Another founder hires her first engineer after a paid two-week trial in which the engineer shipped a feature customers actually used. She offered within a day. That engineer is still there three years later, running the platform.",
        "A founder writes the job as a requirements list: '5+ years of React, 3+ years of Stripe, Stanford or MIT.' He attracts exactly two applicants and hires neither. His friend rewrites it as 'own our payments pipeline' and gets forty applicants, three of them excellent.",
        "A founder hires a senior engineer on the strength of a single great interview. The engineer is brilliant but does no code reviews, writes no docs, and never answers on weekends. The team learns that this behavior is acceptable, and it takes a year to undo.",
        "A startup hires a part-time 'outsourced' designer before its first engineer, because design feels safer and cheaper. Six months later they have beautiful mockups and no product. The constraint was build speed, and the design work sits unused.",
      ],
      actionItems: [
        "Write your current #1 constraint in one sentence. That is your next hire.",
        "Rewrite the job posting as a problem statement with 3 outcomes.",
        "Design the 2-hour working session you will use for the role.",
        "Prepare a paid trial brief: one real task, one week, a clear definition of done.",
        "Write your candidate scorecard: 4 questions, the same for everyone.",
        "List 5 places to find candidates beyond job boards: communities, open-source projects, meetups, your network, and referrals.",
      ],
      keyPoints: [
        "Hire the constraint, not the org chart.",
        "First hires set the bar and the culture: slow, deliberate, non-negotiable quality.",
        "Generalists with a specialist's edge.",
        "Paid trial first; offer fast; fire fast.",
        "The job post is a problem statement, not a wish list.",
        "A scorecard keeps your gut honest.",
      ],
    },
    {
      id: "team-4",
      title: "Compensation, equity grants, and offer letters",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "When someone joins your startup, you need to decide what they get paid and how much of the company they own. Early startups usually pay less cash and give more ownership, because they do not have much cash. This lesson explains how to make offers that are fair, clear, and written down.",
          ],
        },
        {
          heading: "The compensation stack at pre-seed",
          paragraphs: [
            "Pre-seed compensation = base (often below market) + equity (often above market) + mission. You compete on ownership and optionality, not cash. Be transparent about the trade-off: 'we pay 80% of market because your equity has real upside.' Employees who understand the math accept it; employees who do not understand it resent it.",
            "Know your market numbers (levels.fyi, local salary surveys) so your offers are defensible. A defensible offer is one where the candidate can verify the logic themselves.",
            "Cash is the scarce thing at pre-seed, and equity is the abundant thing. Spend cash like it is your own, because it is. Give equity like it is the future of the company, because it is.",
            "Pay your first hires slightly above what you planned, not below. A great first hire costs a little more now and saves a fortune later. A cheap first hire costs you twice: once in salary, and once in everything they break.",
          ],
        },
        {
          heading: "Equity grant sizing",
          paragraphs: [
            "Early-stage equity ranges (order of magnitude): founding engineer 3-8%, first engineer 1-3%, senior IC hires later 0.25-1%. These shrink fast as the team grows. The 10th hire is 10x cheaper than the 1st, which is why hiring early is expensive in equity.",
            "Grants are priced in % of the company, then converted to options at the current 409A valuation. Employees pay the strike price on exercise, which is meaningfully cheaper than the FMV at sale. That difference is the point of the option.",
            "Rule: never hire with equity-only if they are risking a real salary elsewhere. Never hire with salary-only at a startup if you want them invested. The offer is a portfolio decision for the candidate. Respect that.",
            "As the team grows, keep a small reserve of equity (10-20%) for later hires and future rounds. Running out of equity is a founder failure you can see coming a year away.",
          ],
        },
        {
          heading: "The paperwork that protects everyone",
          paragraphs: [
            "Every hire signs: offer letter, CIIAA (IP assignment), and an equity grant agreement (or stock plan grant). Missing the CIIAA means the employee owns what they write, the same failure mode as the contractor case.",
            "Make offers time-boxed (valid 5 business days) and clean. Verbal promises that are not in writing become 'what I was promised' the day things go wrong. One page, clear numbers, clear vesting, no surprises.",
            "The offer letter should name the numbers: salary, equity percentage, vesting schedule, and start date. If a number is not in writing, it does not exist when the company changes hands.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Paying below market without saying why. The math only works if the candidate understands it. Show them the equity upside in numbers, not vibes.",
            "2. Verbally promising 'a solid stake.' Vague promises become lawsuits. Put every number in writing before day one.",
            "3. Skipping the CIIAA. Without it, the employee owns the code they write, and your company cannot sell it. Sign it on day one.",
            "4. Giving the same equity to the 1st and the 10th hire. Early risk deserves more ownership. Band your grants by hire number and write the bands down.",
          ],
        },
      ],
      examples: [
        "A founder offers her first engineer 2% equity with a 4-year vest and a strike price of $0.02. Three years later the company exits at $50M. The engineer's vested and exercised position is worth about $250K net of strike. The candidate who chose a big-company salary instead got $150K/yr in cash and nothing else.",
        "A founder verbally promises 'a solid stake' to a first hire. The hire later interprets this as 5%; the written grant says 1.5%. The fight costs the company the employee and the team's morale.",
        "A founder pays 100% of market cash and gives 0.5% equity to everyone. Two years later the company has no loyal option-holders, and the cap table is a wall of small grants that complicate every round.",
        "A founder checks levels.fyi before every offer and prints the comparison into the offer email. Candidates verify the logic, accept in 48 hours, and tell other founders that the process felt honest.",
        "A startup forgets the CIIAA for its first three hires. During due diligence, an investor's lawyer finds the gap, and the fix costs $40K in legal fees plus six weeks of paperwork. The three employees each get a nice check for signing retroactively.",
      ],
      actionItems: [
        "Pull market salary data for your next 3 roles and write your offer range.",
        "Decide your equity grant bands for hire #1, #2-5, #6-15.",
        "Adopt your offer letter + CIIAA + grant templates before the first offer.",
        "Write the one-paragraph equity explanation you will use in every offer call.",
        "Check your option pool size against the next 12 months of planned hires.",
        "Run one mock offer conversation with a friend before the real one.",
      ],
      keyPoints: [
        "Pre-seed: below-market cash + above-market equity + mission.",
        "Equity bands: founding engineer 3-8%, first engineer 1-3%, later ICs 0.25-1%.",
        "Every hire signs offer + CIIAA + grant. Verbal promises are lawsuits.",
        "Time-box offers; be transparent about the math.",
        "Keep a 10-20% option reserve for later hires and rounds.",
        "If a number is not in writing, it does not exist.",
      ],
    },
    {
      id: "team-5",
      title: "Contractors vs. employees and international hiring",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "There are two ways to work with people who help you build: employees and contractors. The law cares a lot about which one they are, and getting it wrong costs money. This lesson also covers hiring people who live in other countries.",
          ],
        },
        {
          heading: "The real differences",
          paragraphs: [
            "The legal difference is control. An employee works under your direction, schedule, and tools, full-time, with benefits and payroll taxes. A contractor controls how and when they work, can work for others, and invoices you.",
            "Classification is not a choice, it is a fact pattern. Regulators (IRS, state labor boards) reclassify misclassified workers with expensive consequences: back taxes, penalties, and benefits owed.",
            "Rules of thumb: ongoing full-time work with your tools and direction = employee, even if they asked to be a contractor. Contractors are right for scoped projects, specialized expertise, and geographic diversity.",
            "A common early-stage pattern: hire the first 1-2 people as contractors to validate the fit, then convert to employees. Just do not run a full-time 'contractor' workforce forever. It is a liability ticking clock.",
          ],
        },
        {
          heading: "Hiring internationally",
          paragraphs: [
            "Remote international hiring opens the talent pool and cuts cost, but adds complexity: payroll (use an EOR like Deel, Remote, or Oyster), IP assignment nuances (work-for-hire does not exist in most countries, so you need an explicit assignment clause), data protection (EU workers' data means GDPR), and time-zone coordination.",
            "The contract must assign IP explicitly, because many jurisdictions do not give it automatically. Include assignment language that survives termination, and specify jurisdiction and governing law you can actually enforce.",
            "Practical tips: align core overlap hours (4+ hours a day), invest in async writing (docs, decision records), and never let the legal tail wag the hiring dog. A good EOR makes international hiring almost as easy as local.",
            "Time zones are a feature, not just a bug. A developer in Poland can cover your mornings while you sleep, and a designer in Brazil extends your working day. Give the team overlap hours, not everyone.",
          ],
        },
        {
          heading: "The 1099 vs W-2 checklist",
          paragraphs: [
            "If you control WHAT and HOW work is done, provide the tools, set the hours, pay by the period, and the person does nothing else, they are an employee. W-2 is the employee form; 1099 is the contractor form.",
            "When in doubt, ask a local employment lawyer. The cost of one hour of advice beats the cost of a misclassification audit.",
            "Keep the evidence: emails, contracts, invoices, and calendars. If a regulator ever asks, the paper trail decides the case, not your memory of the arrangement.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Calling a full-time worker a contractor to save money. The label does not matter; the facts do. Control and schedule decide it, and the back taxes will find you.",
            "2. Skipping IP assignment for international workers. Work-for-hire does not exist in most countries. Without an assignment clause, they own what they build.",
            "3. Hiring across time zones with zero overlap. Async-only teams drift and redo work. Set 4+ hours of overlap a day.",
            "4. Letting the EOR be the whole strategy. The EOR handles payroll, but IP, data, and culture are still your job. Read the contract.",
          ],
        },
      ],
      examples: [
        "A startup hires a 'freelance developer' who works 40 hours/week, uses their laptops, and follows their roadmap. Three years later, the dev is reclassified as an employee, and the company owes three years of payroll taxes and benefits, with interest.",
        "A founder uses an EOR to hire a senior engineer in Poland. The EOR handles payroll and compliance, and the contract assigns all IP to the US company. The engineer ships for two years with zero legal friction.",
        "A startup hires a designer in Brazil with no overlap hours. Every day starts with 12 new Slack messages, and the founder rewrites the briefs at night. Two months in, the redesign is behind schedule, and both sides are exhausted.",
        "A founder pays a contractor in India with a contract that says nothing about IP. The contractor later licenses 'their' code back to the startup for a fee. The startup pays twice for code it thought it owned.",
        "A company keeps its first engineer as a contractor for 18 months to 'save costs.' The engineer leaves, and the company later discovers it does not fully own the code they wrote together. The buyout costs more than a year of payroll.",
      ],
      actionItems: [
        "Classify each current worker in writing: employee or contractor, with the evidence.",
        "If you use contractors full-time, set a conversion plan and date.",
        "If hiring internationally, get EOR quotes and confirm IP assignment language.",
        "Define your overlap hours and put them in the contract.",
        "Run the 1099 vs W-2 checklist on every current arrangement.",
        "Save one folder with all contracts, invoices, and IP assignments.",
      ],
      keyPoints: [
        "Classification follows the facts (control), not the label.",
        "Full-time + your tools + your direction = employee.",
        "International: EOR + explicit IP assignment + GDPR awareness.",
        "Misclassification = back taxes + benefits + penalties.",
        "4+ hours of overlap a day for remote teams.",
        "The paper trail decides the case, not your memory.",
      ],
    },
    {
      id: "team-6",
      title: "Performance management without the bureaucracy",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "You need people to do their best work, but you do not want a pile of paperwork and meetings. This lesson shows the simple system: regular one-on-one chats, honest feedback, and clear steps when work is not good enough. It also covers how to let someone go when you have to.",
          ],
        },
        {
          heading: "The system of one-on-ones",
          paragraphs: [
            "The weekly 1:1 is the atomic unit of startup management. 30 minutes, recurring, on the calendar forever. The employee brings the agenda: their wins, blockers, and feelings about the work. You listen 80%, talk 20%.",
            "The 1:1 is not a status meeting. Status goes in the tracker. The 1:1 is for the things the tracker cannot capture: worry, boredom, confusion, and ambition.",
            "The questions that produce the truth: 'What's the thing you're least looking forward to this week?' 'What do we need to stop doing?' 'What would make you leave?' The last one is the retention question. Most people give you a six-month warning in a 1:1 before they resign in a calendar invite.",
            "Do not cancel the 1:1 when you are busy. That is exactly when it matters most. The meeting is 30 minutes; the cost of missing it is measured in resignations.",
          ],
        },
        {
          heading: "Feedback cadence and the PIP",
          paragraphs: [
            "Feedback lives at the weekly cadence: specific, behavioral, and immediate. 'When you shipped the migration with no tests, we spent a week fixing regressions' beats 'you're sloppy.' Praise in public, correct in private.",
            "But correct consistently. If you save your criticism for the exit interview, you have failed the employee twice: once by not saying it, and once by making them hear it from a stranger.",
            "When consistent feedback does not change behavior, move to a Performance Improvement Plan: written, time-boxed (30-60 days), with measurable goals and weekly check-ins. A PIP is a legal and humane tool. Most PIP'd employees either improve or self-select out.",
            "The founder's job: hire slow, manage deliberately, and separate the person from the problem. You can love someone and still say their work is not working.",
          ],
        },
        {
          heading: "Firing fast, well",
          paragraphs: [
            "The rule 'hire slow, fire fast' is real. One bad hire costs more than ten good ones save. When the decision is made, it should be swift, private, dignified, and immediate. No 2-week garden leave for access-sensitive roles.",
            "Give clear severance, a clear references policy, and a clean offboarding. The goal is not to win the firing; it is to protect the company and the person's next chapter.",
            "Founders who wait to fire pay the team's morale in the currency of their best people. The team usually knows the person is not working long before you admit it. Speed is kindness to everyone, including the person being let go.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Skipping 1:1s when you get busy. The month you cancel them is the month the resignations start.",
            "2. Feedback that is vague. 'You need to be more proactive' teaches nobody anything. Name the behavior, the moment, and the fix.",
            "3. Waiting years to act on poor performance. A PIP after two weeks of clear feedback is fair. A PIP after two years is theater.",
            "4. Firing in anger, or firing publicly. Decisions made in a bad week become lawsuits. Be calm, private, and immediate.",
          ],
        },
      ],
      examples: [
        "A founder cancels 1:1s for a month to 'focus.' An engineer's dissatisfaction festers quietly, and the founder hears about it only when the engineer resigns. A six-month hiring cycle lost, that a 30-minute conversation twice a month would have caught.",
        "A senior hire has underperformed for three quarters. The founder keeps hoping. Two strong engineers quit 'because X gets to do that.' The founder finally acts, too late to keep the ones who mattered.",
        "A founder runs a PIP with three measurable goals and weekly check-ins. The employee improves for six weeks, then self-selects out with a fair package. The team sees a process that was honest, and morale actually rises.",
        "A manager gives only positive feedback for a year. The exit interview is the first time the employee hears about the problems. The employee leaves bitter, and the remaining team learns that feedback is a performance, not a practice.",
        "A founder fires someone in a hallway, mid-argument, with the team watching. Two other employees resign within a month. The firing was right; the theater around it was the mistake.",
      ],
      actionItems: [
        "Put recurring weekly 1:1s on your calendar with every direct report, starting this week.",
        "Adopt the three questions (least looking forward / stop doing / would make you leave).",
        "Write your PIP template now so it is ready before you need it.",
        "Write one piece of specific feedback for each teammate this week, and deliver it in private.",
        "Write your severance and offboarding checklist before the first departure.",
        "Set a rule for yourself: feedback said twice, then a written plan.",
      ],
      keyPoints: [
        "Weekly 1:1s, employee-led agenda, you listen 80%.",
        "Feedback: specific, behavioral, immediate.",
        "PIP = written, time-boxed, measurable.",
        "Fire fast, privately, with dignity. The team is watching.",
        "The 1:1 is where resignations get caught, six months early.",
        "Separate the person from the problem.",
      ],
    },
    {
      id: "team-7",
      title: "Building culture deliberately",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Culture is how people act when you are not watching. You cannot post your way into a good culture, but you can build one with small habits done every week. This lesson shows you which habits actually work.",
          ],
        },
        {
          heading: "Culture is behavior, not posters",
          paragraphs: [
            "Culture is what happens when you are not in the room. Before 15 people, your culture is literally the behaviors you reward, tolerate, and punish, every day, visibly. A 'culture of ownership' means someone takes the heat for a broken deploy publicly. A 'no-blame culture' means the postmortem names the system, not the person.",
            "Write down the 3-5 behaviors you want to scale: for example, 'we ship and learn fast,' 'we write things down,' 'we disagree openly and commit once decided.' Then audit: does our behavior match the list? The gap between your list and your behavior is your real culture.",
            "Posters and values pages only work when they match behavior. When they do not match, the team learns the real value is the poster's opposite, and you have paid to teach the wrong lesson.",
            "Your behavior as founder is the loudest channel. The team watches what you reward, what you tolerate, and what you punish. Every decision you make is a culture broadcast.",
          ],
        },
        {
          heading: "Rituals that build culture",
          paragraphs: [
            "Culture is installed through repetition: a Monday demo of what shipped, a Friday 'wins and learnings' note, decision records that show WHY (so future employees absorb the reasoning), and an onboarding doc that transfers the unwritten rules on day one.",
            "The most important ritual is the postmortem without blame. When things break, and they will, the team that learns together stays together. Write: what happened, why, what we changed. Then move on.",
            "Nothing builds trust faster than watching a founder own their own mistake in public. It gives everyone permission to be honest, and honesty is the raw material of every other cultural value.",
            "Keep the rituals small and repeatable. A ritual that needs a slide deck and an agenda will die by month two. A ritual that fits in 15 minutes will still be running in year five.",
          ],
        },
        {
          heading: "The anti-patterns",
          paragraphs: [
            "Anti-patterns to kill early: heroes (one person who 'saves' everything, usually a single point of failure), meetings as status (no agenda = no meeting), and silent disagreement (people who nod in the room and resist in the hallway).",
            "Silent disagreement is the most expensive. It makes decisions seem made when they are not, and the company moves in two directions at once.",
            "At this stage, culture is a few written rules, reinforced weekly, demonstrated daily. You are not building a culture program; you are building a habit set.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Printing values that do not match behavior. A poster that contradicts your actions teaches the team the opposite of what you meant.",
            "2. Tolerating silent disagreement. Nodding in the room and resisting in the hallway doubles your costs. Name it out loud when you see it.",
            "3. Letting one hero carry everything. Heroes are single points of failure, and they burn out. Spread the load and the credit.",
            "4. Trying to fix culture with one big event. Culture is built weekly, not in a workshop. Small rituals beat big launches.",
          ],
        },
      ],
      examples: [
        "A founder posts a 'values' page but ships features with obvious bugs while celebrating 'speed.' The team learns the real value is 'don't slow down for quality.' The poster and the behavior disagree, and behavior wins.",
        "Another founder starts every Monday meeting with 'what we broke last week and what we learned.' Within a quarter, people stop hiding mistakes and start fixing them at the root. That meeting is now their most-loved ritual.",
        "A startup hires a brilliant engineer who never writes anything down. Within months, the team treats documentation as optional, and the second hire rebuilds the first hire's work from memory. The founder starts a decision log, and the rebuilding stops.",
        "A founder publicly owns a bad pricing decision in the Friday note. The next week, a junior designer publicly owns a mistake for the first time. The founder's one paragraph bought the team's honesty for years.",
        "A team runs a values offsite with a consultant and a slide deck. Morale spikes for two weeks and returns to baseline. Meanwhile the team next door runs a 15-minute Monday demo, and their shipping cadence becomes the benchmark.",
      ],
      actionItems: [
        "Write your 3-5 non-negotiable behaviors on one page.",
        "Audit the last 2 weeks: where did behavior match, and not match, the list?",
        "Start a Monday demo + Friday learnings rhythm this week.",
        "Write your first decision record this week, and send it to the team.",
        "Find one hero pattern in your company and spread that work.",
        "Write the onboarding doc that transfers your unwritten rules on day one.",
      ],
      keyPoints: [
        "Culture = rewarded, tolerated, and punished behavior.",
        "Install it with rituals: demos, learnings, decision records, blameless postmortems.",
        "Kill heroes, status meetings, and silent disagreement.",
        "A few written rules, weekly reinforcement, daily demonstration.",
        "Owning your mistake in public is the cheapest trust you will ever buy.",
        "Small rituals beat big events.",
      ],
    },
    {
      id: "team-8",
      title: "Managing a small team: rhythms and decisions",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A small team works best when everyone knows what is happening and who decides what. This lesson gives you a simple schedule of meetings and a simple rule for decisions. The goal is fewer meetings and clearer ownership.",
          ],
        },
        {
          heading: "The operating rhythms",
          paragraphs: [
            "A 3-10 person startup runs on four rhythms: weekly planning (what are the 3 priorities, who owns them), weekly 1:1s (covered earlier), weekly demo/learnings, and a monthly review (numbers + strategy). Everything else is optional.",
            "Add meetings only when a missing decision costs more than the meeting. That test kills most meeting creep before it starts.",
            "The weekly planning meeting is a decisions meeting, not a status meeting. Each person says their 3 priorities for the week, surfaces dependencies, and leaves with a clear plan.",
            "The monthly review looks at the numbers that matter: revenue, retention, burn. Then it asks one question: are our actions changing the numbers? If not, change the actions, not the slides.",
          ],
        },
        {
          heading: "Who decides what",
          paragraphs: [
            "Clarity of decision rights prevents the classic startup disease: everyone decides, nobody owns. Write it down. The founder/CEO owns strategy, hiring, and money. Engineers own architecture and tech choices. The seller owns pipeline and pricing experiments within bounds.",
            "When in doubt, the owner is the person whose name is on the outcome. If you cannot name the owner of a decision in five seconds, the decision has no owner yet.",
            "Disagreements: debate openly in the meeting, commit once decided, and never re-litigate in the hallway. The phrase that saves startups: 'I disagree, and I'll support the decision.'",
          ],
        },
        {
          heading: "Writing things down",
          paragraphs: [
            "The single highest-leverage habit at this size: write decisions down. A decision log (date, decision, who, why, when to revisit) costs 5 minutes and saves weeks of 'why did we do it this way?'",
            "A short weekly team note (what we did, what we learned, what's next) keeps everyone aligned without meetings. Write it as plain text, no decks.",
            "The cost of the unwritten decision: the second hire redoes the first hire's work because nobody recorded why. The cost compounds with every new person.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Meeting creep. If a meeting has no agenda and no decision owner, cancel it. Four rhythms cover almost everything at this size.",
            "2. Everyone decides, nobody owns. When you cannot name the owner, the decision will be argued forever. Write owners down.",
            "3. Re-litigating decisions in the hallway. The meeting decided; the hallway undoes it. Kill it with 'I disagree, and I'll support the decision.'",
            "4. Keeping decisions in your head. Your memory is not the source of truth. The decision log is.",
          ],
        },
      ],
      examples: [
        "A 6-person team runs 14 weekly meetings because 'that's how it was at my last job.' Engineers have 6 hours of meetings a week and two hours of deep work. The founder cuts the schedule to four meetings, and the team's velocity doubles in a month.",
        "The founder decides 'no mobile app this quarter' in a hallway chat. Three weeks later a contractor is scoping a mobile app because nobody wrote it down. The decision log would have cost 2 minutes.",
        "A founder assigns 'the website' to nobody. Three people assume someone else owns it, and the redesign stalls for two months. One line in a decision log fixes it: owner, date, and goal.",
        "Two founders argue about pricing in every hallway for a month. A weekly decision meeting with a timer settles it in 20 minutes, and the phrase 'I disagree, and I'll support the decision' becomes their fastest meeting.",
        "A startup's monthly review shows retention dropping. The team debates the slide for an hour. The founder asks 'are our actions changing the numbers?' Nobody can answer, so they stop the meeting and change the actions.",
      ],
      actionItems: [
        "List every recurring meeting; delete any without a written agenda or a decision owner.",
        "Start your decision log today: one line per decision, dated.",
        "Adopt the weekly note: did, learned, next, written by the founder.",
        "Write the decision rights for your company: who owns what, in one page.",
        "At your next monthly review, ask 'are our actions changing the numbers?'",
        "Name the owner for every open decision on your list by Friday.",
      ],
      keyPoints: [
        "Four rhythms: weekly planning, 1:1s, demo/learnings, monthly review.",
        "Every decision has one owner whose name is on the outcome.",
        "Disagree openly, commit once decided.",
        "Write decisions down. The decision log is the cheapest tool you own.",
        "Add a meeting only if a missing decision costs more than the meeting.",
        "If the numbers do not change, change the actions, not the slides.",
      ],
    },
    {
      id: "team-9",
      title: "Retention, departures, and the emotional ledger",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Keeping good people is cheaper than hiring new ones. People stay when they are learning, growing, and feeling valued. This lesson also covers what to do when someone leaves, and how to take care of yourself as the founder.",
          ],
        },
        {
          heading: "Why people stay",
          paragraphs: [
            "People stay for three reasons in compounding order: they are learning, they are growing (title, scope, equity), and they feel valued (visible appreciation, fair pay, autonomy). At a startup you have an advantage on all three. You just have to be deliberate.",
            "Give big projects. Promote scope, not just title. Say thanks specifically and often. These cost nothing, and they compound.",
            "Run your own retention data: who has been quiet in 1:1s, who has not shipped in a while, whose ideas stopped appearing in meetings. Quiet is the pre-resignation state.",
            "Fair pay is table stakes. You can win on learning and growth, but if the cash is insulting, the rest does not matter. Check the market numbers at least every six months.",
          ],
        },
        {
          heading: "Managing the departure",
          paragraphs: [
            "Every departure teaches the company something: why they left, how you handled it, what the remaining team concluded. Conduct a real exit interview. The employee usually shares more with a peer or a tool than with you. Do not take it personally.",
            "For voluntary departures: match the counter-offer only in rare cases, because the reasons people leave are usually not money. Protect IP and access on day one. Handle the announcement with grace.",
            "The team's conclusion from how you treat a leaver is exactly the culture you advertised. Treat the leaver like a future partner, because they might become one.",
            "For equity: unvested shares return to the pool. Vested options have a post-termination exercise window, typically 90 days at seed. Longer windows are becoming standard, so negotiate before signing the plan.",
          ],
        },
        {
          heading: "The emotional ledger",
          paragraphs: [
            "Founders burn out from the emotional load of managing people long before the workload: layoffs, firings, and disappointments accumulate.",
            "Build a personal operating system: a co-founder or peer you can be honest with, a therapist or coach, exercise, and a hard rule about working hours.",
            "The company's ceiling is your capacity to keep showing up. Protect it like a resource, because it is the only one that cannot be replaced.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "1. Counter-offering everyone who resigns. If they wanted more money, they would have asked. Find the real reason in the 1:1, not the counter-offer.",
            "2. Letting quiet go unnoticed. Silence is not contentment. It is the pre-resignation state.",
            "3. Treating leavers as enemies. The team is watching how you say goodbye, and they are drawing conclusions about their own futures.",
            "4. Ignoring your own burnout. A burned-out founder cannot retain anyone. Protect your capacity like the company resource it is.",
          ],
        },
      ],
      examples: [
        "A valued engineer resigns. The founder counter-offers +30% cash. The engineer stays six months and leaves anyway, because the reason was scope and trust, not cash. The founder learns: the 1:1 where he asked 'what would make you leave' was the moment to act.",
        "A departing contractor holds unexercised options that expire in 90 days and cannot afford to exercise without knowing the exit. The company later extends the window to 10 years. The founder reads the room, and the loyalty dividend pays back in referrals.",
        "A founder ignores the quiet employee. The employee's ideas stop appearing in meetings, then the resignation email arrives. The founder scans the old 1:1 notes and finds the warning, dated five months earlier.",
        "A startup treats a leaver badly: cancelled access the same hour, no goodbye, a terse reference. The remaining team watches. Within six months, two more resign, and candidates start asking about the company online.",
        "A founder schedules one protected hour a week, no phone, no Slack. A year later he is the calmest person in every crisis meeting, and the team notices. The hour cost nothing and bought the company its ceiling.",
      ],
      actionItems: [
        "Run the retention scan on your team: who is quiet, who has stopped proposing, who is last in demos.",
        "Write your counter-offer policy BEFORE the first resignation.",
        "Set one protected hour a week for your own recovery, non-negotiable.",
        "Write the exit interview questions and decide who conducts them.",
        "Check your equity exercise windows and negotiate longer ones before signing anything.",
        "Say one specific thank-you to each teammate this week, in writing.",
      ],
      keyPoints: [
        "People stay for learning, growth, and feeling valued, in that order.",
        "Quiet is the pre-resignation state.",
        "How you treat leavers is what the remaining team believes about you.",
        "Your capacity is the company's ceiling. Protect it.",
        "Counter-offers rarely fix the real reason people leave.",
        "Fair pay is table stakes; learning and growth are the differentiators.",
      ],
    },
  ],
  quiz: [
    {
      question: "What is the strongest selection method for a co-founder?",
      options: [
        "Long dinners discussing vision",
        "A 2-4 week working project together",
        "Personality tests",
        "Shared friend circles",
      ],
      correctIndex: 1,
      explanation: "Working together under real pressure reveals how they handle rejection, deadlines, and being wrong. Dinner conversations cannot.",
    },
    {
      question: "A part-time 'idea-giver' co-founder should typically receive:",
      options: ["50%", "An equal share", "A smaller stake with vesting", "Nothing at all"],
      correctIndex: 2,
      explanation: "Idea-only, part-time contributions warrant a smaller stake, often 5-15%, with vesting, documented in the founder agreement.",
    },
    {
      question: "What is the standard vesting schedule for founders?",
      options: ["2 years, no cliff", "4 years with 1-year cliff, monthly after", "Immediate vesting", "10 years"],
      correctIndex: 1,
      explanation: "4 years with a 1-year cliff and monthly vesting after is the standard. It protects the company if a founder leaves early.",
    },
    {
      question: "Which worker is most likely to be legally classified as an employee?",
      options: [
        "A freelancer with three clients",
        "Someone working 40h/week on your tools with your direction",
        "A specialist doing one scoped project",
        "A contractor who sets their own hours",
      ],
      correctIndex: 1,
      explanation: "Control of how and when work is done, full-time hours, and your tools means employee, regardless of the label on the contract.",
    },
    {
      question: "Why must a contractor's contract include explicit IP assignment?",
      options: [
        "It is required by tax law",
        "Work-for-hire is not automatic for contractors in most places",
        "It reduces their pay",
        "It is only needed for employees",
      ],
      correctIndex: 1,
      explanation: "Creators own what they create unless assigned. An explicit assignment clause transfers the contractor's rights to your company.",
    },
    {
      question: "What is the purpose of the weekly 1:1?",
      options: [
        "Status updates",
        "An employee-led conversation about wins, blockers, and feelings",
        "Performance reviews",
        "Planning the roadmap",
      ],
      correctIndex: 1,
      explanation: "The 1:1 is the employee's conversation. You listen 80%. Status belongs in the tracker; the 1:1 surfaces what the tracker cannot.",
    },
    {
      question: "What is the retention signal that most often precedes resignation?",
      options: [
        "Complaining in meetings",
        "Quiet: fewer ideas, less engagement",
        "Working overtime",
        "Asking for a raise",
      ],
      correctIndex: 1,
      explanation: "People go quiet before they go. Shrinking ideas and participation in 1:1s is the pre-resignation state.",
    },
    {
      question: "What should the founder do when a decision is made after open debate?",
      options: [
        "Keep debating until everyone agrees",
        "Revisit it weekly",
        "Commit and stop re-litigating",
        "Let each person do their own thing",
      ],
      correctIndex: 2,
      explanation: "'Disagree openly, commit once decided.' Hallway re-litigation is the most expensive startup habit.",
    },
    {
      question: "Which signal shows a startup's real culture?",
      options: [
        "The values page on its website",
        "The behaviors it rewards, tolerates, and punishes",
        "The size of the office",
        "The number of perks it offers",
      ],
      correctIndex: 1,
      explanation: "Culture is behavior, not posters. The behaviors you reward, tolerate, and punish are the culture, no matter what the website says.",
    },
    {
      question: "When consistent feedback does not change someone's behavior, the next step is:",
      options: [
        "Immediate termination",
        "A written, time-boxed Performance Improvement Plan",
        "A public warning",
        "Ignoring it until the exit interview",
      ],
      correctIndex: 1,
      explanation: "A PIP is written, time-boxed (30-60 days), and measurable. It gives the employee a fair chance and the company a clean record.",
    },
  ],
  exam: [
    {
      question: "A candidate for co-founder always agrees with you in meetings and never pushes back. What does this suggest?",
      options: [
        "They have complementary skills",
        "They are a mirror, not a partner",
        "They are the ideal co-founder",
        "They will be easy to manage",
      ],
      correctIndex: 1,
      explanation: "Independent judgment matters. A co-founder who always agrees cannot challenge you, and challenge is where better decisions come from.",
    },
    {
      question: "You are choosing between two co-founder candidates. Candidate A has a great resume and agrees with you on everything. Candidate B argues with you about the roadmap but brings skills you lack. Which is the better sign?",
      options: [
        "Candidate A, because agreement avoids conflict",
        "Candidate B, because complementary skills and independent judgment matter more",
        "It depends on who is cheaper",
        "Neither, choose by friendship",
      ],
      correctIndex: 1,
      explanation: "Complementary skills and independent judgment beat agreement. You can fix a roadmap disagreement; you cannot fix a missing skill set.",
    },
    {
      question: "A founder leaves the company in month 3 of a standard 4-year vesting schedule with a 1-year cliff. What happens to their shares?",
      options: [
        "They keep 100%",
        "They keep the shares vested so far",
        "They keep nothing, because the cliff has not passed",
        "They keep half",
      ],
      correctIndex: 2,
      explanation: "With a 1-year cliff, no shares vest until the first year is complete. A founder leaving in month 3 keeps nothing, which is exactly the protection the cliff exists for.",
    },
    {
      question: "Founder A built the product and brought $20K of capital. Founder B joins full-time with a strong network but no product work. Which split framework applies?",
      options: [
        "50/50 because they are equal partners",
        "A split that scores past, present, and future contributions, often favoring A",
        "100% to B because sales matters more",
        "The split decided by whoever speaks first",
      ],
      correctIndex: 1,
      explanation: "The framework splits on past contribution (IP and capital), present (full-time commitment), and future impact. Real, documented differences justify an unequal split.",
    },
    {
      question: "A startup has demand it cannot build fast enough. What should the next hire be?",
      options: [
        "A designer",
        "An engineer",
        "A salesperson",
        "An office manager",
      ],
      correctIndex: 1,
      explanation: "Hire the constraint on growth. If build speed is the bottleneck, engineering is the hire. Sales would be a salary bill without a product to sell.",
    },
    {
      question: "Your first engineer candidate interviews brilliantly but has never shipped a real feature. What does the lesson recommend?",
      options: [
        "Hire them immediately",
        "Run a paid 1-2 week trial on a real task",
        "Skip them for someone from a bigger company",
        "Ask for more references only",
      ],
      correctIndex: 1,
      explanation: "A paid trial converts 'I think they are good' into 'they are good.' A trial gone wrong costs a month; a bad hire costs a year.",
    },
    {
      question: "Which document prevents an employee from owning the code they write for your company?",
      options: [
        "The offer letter alone",
        "The CIIAA (IP assignment)",
        "The non-disclosure agreement",
        "The vesting schedule",
      ],
      correctIndex: 1,
      explanation: "Without an IP assignment (CIIAA), the employee owns what they write. The offer letter covers terms; the CIIAA covers ownership.",
    },
    {
      question: "A candidate compares your offer against a big-company salary. What should you include in the offer conversation?",
      options: [
        "Only the salary number",
        "The equity upside explained in numbers, and why cash is below market",
        "A promise to match later",
        "Nothing, just sign and hope",
      ],
      correctIndex: 1,
      explanation: "Transparency about the trade-off (below-market cash, above-market equity) makes offers defensible. Employees who understand the math accept it; employees who do not resent it.",
    },
    {
      question: "A 'freelancer' works 40 hours a week, uses your laptop, follows your roadmap, and does nothing else. Legally, they are most likely:",
      options: [
        "A contractor, because of the label",
        "An employee, because of control and schedule",
        "A consultant",
        "An advisor",
      ],
      correctIndex: 1,
      explanation: "Classification follows the facts, not the label. Control of what and how, full-time hours, and your tools mean employee, with payroll taxes and benefits owed.",
    },
    {
      question: "Why is explicit IP assignment essential when hiring a contractor in most countries?",
      options: [
        "Work-for-hire is automatic everywhere",
        "Creators own what they create unless the contract assigns it",
        "It is optional for small projects",
        "It only matters for employees",
      ],
      correctIndex: 1,
      explanation: "In most countries work-for-hire does not exist. Without an assignment clause, the contractor owns what they build, and you may pay twice for your own product.",
    },
    {
      question: "What is the most effective early warning system for resignations?",
      options: [
        "Annual performance reviews",
        "Regular weekly 1:1s where employees lead the agenda",
        "Payroll trends",
        "Office gossip",
      ],
      correctIndex: 1,
      explanation: "Most people give a six-month warning in a 1:1 before they resign in a calendar invite. The 1:1 is where quiet and dissatisfaction surface.",
    },
    {
      question: "A teammate has shipped poor work for two weeks despite clear, specific feedback. What is the recommended next step?",
      options: [
        "Fire them immediately",
        "Move to a written, time-boxed Performance Improvement Plan",
        "Ignore it",
        "Praise them more",
      ],
      correctIndex: 1,
      explanation: "Consistent feedback first, then a written, time-boxed PIP with measurable goals and weekly check-ins. It is fair to the employee and protects the company.",
    },
    {
      question: "A startup's website says 'we value quality,' but the founder ships buggy features and celebrates speed. What is the real culture?",
      options: [
        "Quality",
        "Speed over quality, because behavior wins over posters",
        "The values page",
        "Whatever the next offsite says",
      ],
      correctIndex: 1,
      explanation: "Culture is behavior, not posters. The gap between the list and the behavior is the real culture, and behavior wins every time.",
    },
    {
      question: "Which ritual most directly builds trust after a failure?",
      options: [
        "A blame session to find who is at fault",
        "A postmortem that names the system, not the person",
        "Hiding the failure",
        "A new values poster",
      ],
      correctIndex: 1,
      explanation: "Blameless postmortems (what happened, why, what we changed) build trust. Watching a founder own a mistake in public gives everyone permission to be honest.",
    },
    {
      question: "Your 6-person team has 14 weekly meetings, and engineers have no time for deep work. What is the recommended fix?",
      options: [
        "Add more meetings",
        "Cut to four rhythms: weekly planning, 1:1s, demo/learnings, monthly review",
        "Cancel all meetings forever",
        "Move meetings to weekends",
      ],
      correctIndex: 1,
      explanation: "The four rhythms cover almost everything at this size. Add a meeting only when a missing decision costs more than the meeting.",
    },
    {
      question: "A valued employee resigns for scope and trust reasons. What is the most effective response?",
      options: [
        "Counter-offer +30% cash",
        "Address the real reasons: scope, trust, and growth",
        "Ignore it, people come and go",
        "Threaten to withhold the reference",
      ],
      correctIndex: 1,
      explanation: "Counter-offers rarely fix the real reason people leave, and the reasons are usually not money. The 1:1 where you asked 'what would make you leave' was the moment to act.",
    },
  ],
};