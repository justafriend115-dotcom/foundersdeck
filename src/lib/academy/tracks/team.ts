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
      readMinutes: 8,
      sections: [
        {
          heading: "What you're actually selecting for",
          paragraphs: [
            "Your co-founder is your longest-tenured colleague, co-owner, and most powerful critic. Investors read the co-founder relationship as a proxy for how your company will handle conflict  a crack here is a red flag they can smell.",
            "The selection criteria that matter: (1) complementary skills  you shouldn't be redundant, (2) independent judgment  a co-founder who agrees with you always is a mirror, not a partner, (3) resilience  the startup will be a crisis machine for years; you need someone who performs under pressure rather than performs pressure, (4) alignment on ambition and exit  you want the same scale of outcome and the same pace.",
            "Red flags: friendship as the primary basis (friendship is fine, but 'he's my best friend so he's my co-founder' is how you lose both), pure desperation ('I can't do this alone'), and asymmetric risk tolerance (one founder living frugally on savings while the other keeps a high-paying job).",
          ],
        },
        {
          heading: "The working interview",
          paragraphs: [
            "You cannot learn this from coffee chats. Work together on something real for 2-4 weeks first  build a prototype together, run a sales sprint, take a customer call. Watch how they react to rejection, how they communicate under deadline, how they handle being wrong.",
            "Run explicit discussions BEFORE the agreement: what does each of you need to earn, what outcome are you building toward (lifestyle business? $100M exit? IPO?), how long will you commit, and how do you each handle conflict. Write the answers down  they become the founder agreement.",
          ],
        },
        {
          heading: "The decision tests",
          paragraphs: [
            "Three tests before you commit: (1) Would I trust this person with my life savings? (2) If our roles were reversed tomorrow, would I be comfortable? (3) Would I rather solve this problem with them than without them? If any answer is no, wait.",
            "Equity math comes AFTER fit: the '50/50 vs 60/40' question is a symptom. Fix the fit first; then use the split framework in the next lesson.",
          ],
        },
      ],
      examples: [
        "Two friends start a startup 'for fun.' One quits his job, the other doesn't. Twelve months later the employed co-founder has contributed 20% of the work  and the split is still 50/50. The founder who quit eats the resentment for two years before a painful buyout.",
        "A founder interviews three candidates for co-founder by having each build a 1-week prototype with him. One ships, one argues about tooling, one disappears for 5 days. The choice makes itself.",
      ],
      actionItems: [
        "Write your ideal co-founder spec: skills, behaviors, values, and deal-breakers.",
        "Run a 2-week working project with the candidate before signing anything.",
        "Answer the three tests in writing, separately, then compare.",
      ],
      keyPoints: [
        "Co-founder quality predicts how investors read your company.",
        "Complementary skills + independent judgment + resilience + aligned ambition.",
        "2-4 week working interview beats any number of dinners.",
        "Fix fit first, equity split second.",
      ],
    },
    {
      id: "team-2",
      title: "Splitting equity between founders",
      readMinutes: 8,
      sections: [
        {
          heading: "The split framework",
          paragraphs: [
            "The naive split is 50/50 for two founders, 33/33/33 for three. The better framework: split on past contribution (IP built before day one, funding, domain authority), present (who is working full-time vs part-time, who is risking salary), and future (expected role and impact over the next 4 years).",
            "A common fair shape: equal base, then adjustments. The CEO with the full-time commitment and the pre-existing product gets more. The part-time advisor/co-founder gets markedly less  usually 5-15% with different vesting.",
            "Whatever the split, the question 'does this split survive the first real contribution difference?' is the test. The first person to feel unfairly treated starts the company's slow bleed  and equity fights are the #1 cause.",
          ],
        },
        {
          heading: "The asymmetric cases",
          paragraphs: [
            "Solo founder keeping 100% is fine until you need a co-founder's credibility to raise. Idea-only founders (no build, no network, no money) bring the least to the table  and should get the least. The classic bad deal: giving an idea-giver 50% when they add no ongoing value.",
            "The 'sweat equity vs cash' question: if one founder contributes capital, that's usually a loan or a priced purchase of shares, not a license to own 10% more. Keep capital contributions clean and documented so the equity split stays about work.",
          ],
        },
        {
          heading: "The vesting counterweight",
          paragraphs: [
            "Splits are decided at founding, but vesting is what makes them fair over time. If everyone vests 4 years with a 1-year cliff, a founder who leaves in month 3 keeps nothing  the split is a promise, and vesting is the enforcement. Never issue fully-vested founder shares without a very good, documented reason.",
          ],
        },
      ],
      examples: [
        "Founder A has the product built, 200 users, and $20K of his own money in it. Founder B joins full-time with a strong network and sales ability. Split: 60/40 with equal 4-year vesting and a signed founder agreement  defensible because the difference is real and documented.",
        "A founder gives his 'idea guy' friend 40% for a two-line concept note. No vesting. The friend contributes nothing further. Three years later he holds 40% of everything  the company can't raise because the cap table is radioactive.",
      ],
      actionItems: [
        "Score each founder's past, present, and future contribution on a simple 0-10 scale.",
        "Translate the scores into a draft split and pressure-test it: 'does this feel fair in year 2?'",
        "Whatever the split: 4-year vesting, 1-year cliff, founder agreement signed by all.",
      ],
      keyPoints: [
        "Split on past + present + future contribution, not vibes.",
        "Idea-givers and part-timers get less, documented, with vesting.",
        "Capital contributions are loans/purchases, not equity.",
        "Vesting is what makes the split fair when someone leaves.",
      ],
    },
    {
      id: "team-3",
      title: "Your first hires: who, when, and how",
      readMinutes: 9,
      sections: [
        {
          heading: "The hiring order",
          paragraphs: [
            "Hire the function that is the constraint on growth. If you have demand you can't build fast enough, hire engineering. If you have a product nobody can sell, hire sales. Never hire to 'round out the org'  pre-seed companies hire one painful bottleneck at a time.",
            "The first five hires are the dangerous ones because they set the bar: their standards become your standards, and their behavior becomes your culture. Hire deliberately slow, fire fast, and never compromise on talent quality at this stage  a mediocre first engineer compounds into a mediocre team.",
            "The roles to fill early: a co-pilot engineer (if product-led), a first seller (if revenue-led), and possibly a first designer  a designer at day 20 produces more leverage than a designer at day 200.",
          ],
        },
        {
          heading: "The first-hire profile",
          paragraphs: [
            "Early hires are generalists with a specialist's edge: an engineer who owns the stack end-to-end, a seller who can build pipeline AND close. They need: low ego, high ownership, comfort with ambiguity, and a desire to build systems from scratch.",
            "Test for it: give them a real task. An engineer gets a 48-hour take-home that touches the real codebase. A seller gets a mock pitch to your actual ICP. Watch for how they handle missing information  that's the real signal.",
          ],
        },
        {
          heading: "The process that doesn't waste weeks",
          paragraphs: [
            "A hiring process that works at this stage: (1) write the job as a problem statement, not a requirements list  'own our payments pipeline' beats '5+ years of Stripe experience', (2) phone screen (30 min, you), (3) working session (2 hours), (4) 2-3 references  call them, ask what the candidate is bad at, (5) offer within 3 days of 'yes'. Slow processes lose great candidates to fast competitors.",
            "Always do a paid 1-2 week contract trial before a full-time offer for key roles. It converts 'I think they're good' into 'they are good'  and it gives the candidate a real look too. The cost of a trial gone wrong is a month; the cost of a bad hire is a year.",
          ],
        },
      ],
      examples: [
        "A pre-revenue startup hires a sales team of three before the product works. Eight months of salaries later, they have a product and no pipeline  the constraint was product, not sales. The team is let go in the first down round.",
        "Another founder hires her first engineer after a paid two-week trial in which the engineer shipped a feature customers actually used. She offered within a day. That engineer is still there three years later, running the platform.",
      ],
      actionItems: [
        "Write your current #1 constraint in one sentence  that's your next hire.",
        "Rewrite the job posting as a problem statement with 3 outcomes.",
        "Design the 2-hour working session you'll use for the role.",
      ],
      keyPoints: [
        "Hire the constraint, not the org chart.",
        "First hires set the bar and the culture  slow, deliberate, non-negotiable quality.",
        "Generalists with a specialist's edge.",
        "Paid trial first; offer fast; fire fast.",
      ],
    },
    {
      id: "team-4",
      title: "Compensation, equity grants, and offer letters",
      readMinutes: 9,
      sections: [
        {
          heading: "The compensation stack at pre-seed",
          paragraphs: [
            "Pre-seed compensation = base (often below market) + equity (often above market) + mission. You compete on ownership and optionality, not cash. Be transparent about the trade-off: 'we pay 80% of market because your equity has real upside'  employees who understand the math accept it; employees who don't resent it.",
            "Know your market numbers (levels.fyi, local salary surveys) so your offers are defensible. A defensible offer is one where the candidate can verify the logic.",
          ],
        },
        {
          heading: "Equity grant sizing",
          paragraphs: [
            "Early-stage equity ranges (order of magnitude): founding engineer 3-8%, first engineer 1-3%, senior IC hires later 0.25-1%. These shrink fast as the team grows  the 10th hire is 10x cheaper than the 1st, which is why hiring early is expensive in equity.",
            "Grants are priced in % of the company, then converted to options at the current 409A valuation. Employees pay strike price on exercise  meaningfully cheaper than the FMV at sale, which is the point.",
            "Rule: never hire with equity-only if they're risking a real salary elsewhere; never hire with salary-only at a startup if you want them invested. The offer is a portfolio decision for the candidate  respect that.",
          ],
        },
        {
          heading: "The paperwork that protects everyone",
          paragraphs: [
            "Every hire signs: offer letter, CIIAA (IP assignment), and an equity grant agreement (or stock plan grant). Missing the CIIAA means the employee owns what they write  the same failure mode as the contractor case.",
            "Make offers time-boxed (valid 5 business days) and clean. Verbal promises that aren't in writing become 'what I was promised' the day things go wrong. One page, clear numbers, clear vesting, no surprises.",
          ],
        },
      ],
      examples: [
        "A founder offers her first engineer 2% equity with a 4-year vest and a strike price of $0.02. Three years later the company exits at $50M  the engineer's 0.5% vested-plus-exercised position (vested through the offer date) is worth ~$250K net of strike. The candidate who chose a big-company salary instead got $150K/yr in cash and nothing else.",
        "A founder verbally promises 'a solid stake' to a first hire. The hire later interprets this as 5%; the written grant says 1.5%. The fight costs the company the employee and the team's morale.",
      ],
      actionItems: [
        "Pull market salary data for your next 3 roles and write your offer range.",
        "Decide your equity grant bands for hire #1, #2-5, #6-15.",
        "Adopt your offer letter + CIIAA + grant templates before the first offer.",
      ],
      keyPoints: [
        "Pre-seed: below-market cash + above-market equity + mission.",
        "Equity bands: founding engineer 3-8%, first engineer 1-3%, later ICs 0.25-1%.",
        "Every hire signs offer + CIIAA + grant  verbal promises are lawsuits.",
        "Time-box offers; be transparent about the math.",
      ],
    },
    {
      id: "team-5",
      title: "Contractors vs. employees  and international hiring",
      readMinutes: 8,
      sections: [
        {
          heading: "The real differences",
          paragraphs: [
            "The legal difference: control. An employee works under your direction, schedule, and tools, full-time, with benefits and payroll taxes. A contractor controls how and when they work, can work for others, and invoices you. Classification isn't a choice  it's a fact pattern, and regulators (IRS, state labor boards) reclassify misclassified workers with expensive consequences (back taxes, penalties, benefits owed).",
            "Rules of thumb: ongoing full-time work with your tools and direction = employee, even if they asked to be a contractor. Contractors are right for scoped projects, specialized expertise, and geographic diversity.",
            "A common early-stage pattern: hire the first 1-2 people as contractors to validate the fit, then convert to employees. Just don't run a full-time 'contractor' workforce forever  it's a liability ticking clock.",
          ],
        },
        {
          heading: "Hiring internationally",
          paragraphs: [
            "Remote international hiring opens the talent pool and cuts cost, but adds: payroll complexity (use an EOR like Deel/Remote/Oyster), IP assignment nuances (work-for-hire doesn't exist in most countries  you need an explicit assignment clause), data protection (EU workers' data → GDPR), and time-zone coordination.",
            "The contract must assign IP explicitly (many jurisdictions don't give it automatically), include the assignment language that survives termination, and specify jurisdiction and governing law you can actually enforce.",
            "Practical tips: align core overlap hours (4+), invest in async writing (docs, decision records), and never let the legal tail wag the hiring dog  a good EOR makes international hiring almost as easy as local.",
          ],
        },
        {
          heading: "The 1099 vs W-2 checklist",
          paragraphs: [
            "If you control WHAT and HOW work is done, provide the tools, set the hours, pay by the period, and the person does nothing else  they're an employee. When in doubt, ask a local employment lawyer; the cost of one hour beats the cost of a misclassification audit.",
          ],
        },
      ],
      examples: [
        "A startup hires a 'freelance developer' who works 40 hours/week, uses their laptops, and follows their roadmap. Three years later, the dev is reclassified as an employee and the company owes three years of payroll taxes and benefits  with interest.",
        "A founder uses an EOR to hire a senior engineer in Poland. The EOR handles payroll and compliance, and the contract assigns all IP to the US company. The engineer ships for two years with zero legal friction.",
      ],
      actionItems: [
        "Classify each current worker in writing: employee or contractor, with the evidence.",
        "If you use contractors full-time, set a conversion plan and date.",
        "If hiring internationally, get EOR quotes and confirm IP assignment language.",
      ],
      keyPoints: [
        "Classification follows the facts (control), not the label.",
        "Full-time + your tools + your direction = employee.",
        "International: EOR + explicit IP assignment + GDPR awareness.",
        "Misclassification = back taxes + benefits + penalties.",
      ],
    },
    {
      id: "team-6",
      title: "Performance management without the bureaucracy",
      readMinutes: 8,
      sections: [
        {
          heading: "The system of one-on-ones",
          paragraphs: [
            "The weekly 1:1 is the atomic unit of startup management. 30 minutes, recurring, on the calendar forever. Employee brings the agenda (their wins, blockers, and feelings about the work); you listen 80%, talk 20%. The 1:1 is not a status meeting  status goes in the tracker.",
            "The questions that produce the truth: 'What's the thing you're least looking forward to this week?' 'What do we need to stop doing?' 'What would make you leave?' The last one is the retention question  most people give you a six-month warning in a 1:1 before they resign in a calendar invite.",
          ],
        },
        {
          heading: "Feedback cadence and the PIP",
          paragraphs: [
            "Feedback lives at the weekly cadence: specific, behavioral, and immediate. 'When you shipped the migration with no tests, we spent a week fixing regressions' beats 'you're sloppy.' Praise in public, correct in private  but correct consistently, or you'll save the criticism for the exit interview.",
            "When consistent feedback doesn't change behavior, move to a Performance Improvement Plan: written, time-boxed (30-60 days), with measurable goals and weekly check-ins. A PIP is a legal and humane tool  most PIP'd employees either improve or self-select out.",
            "The founder's job: hire slow, manage deliberately, and separate the person from the problem  you can love someone and still say their work isn't working.",
          ],
        },
        {
          heading: "Firing fast, well",
          paragraphs: [
            "The rule 'hire slow, fire fast' is real: one bad hire costs more than ten good ones save. When the decision is made, it should be: swift, private, dignified, and immediate (no 2-week garden leave for access-sensitive roles). Give clear severance, clear references policy, and a clean offboarding.",
            "Founders who wait to fire pay the team's morale in the currency of their best people. The team usually knows the person isn't working long before you admit it  speed is kindness to everyone, including the person being let go.",
          ],
        },
      ],
      examples: [
        "A founder cancels 1:1s for a month to 'focus.' An engineer's dissatisfaction festers quietly, and the founder hears about it only when the engineer resigns  a six-month hiring cycle lost that a 30-minute conversation twice a month would have caught.",
        "A senior hire has underperformed for three quarters. The founder keeps hoping. Two strong engineers quit 'because X gets to do that.' The founder finally acts  too late to keep the ones who mattered.",
      ],
      actionItems: [
        "Put recurring weekly 1:1s on your calendar with every direct report, starting this week.",
        "Adopt the three questions (least looking forward / stop doing / would make you leave).",
        "Write your PIP template now so it's ready before you need it.",
      ],
      keyPoints: [
        "Weekly 1:1s, employee-led agenda, you listen 80%.",
        "Feedback: specific, behavioral, immediate.",
        "PIP = written, time-boxed, measurable.",
        "Fire fast, privately, with dignity  the team is watching.",
      ],
    },
    {
      id: "team-7",
      title: "Building culture deliberately",
      readMinutes: 8,
      sections: [
        {
          heading: "Culture is behavior, not posters",
          paragraphs: [
            "Culture is what happens when you're not in the room. Before 15 people, your culture is literally the behaviors you reward, tolerate, and punish  every day, visibly. A 'culture of ownership' means someone takes the heat for a broken deploy publicly. A 'no-blame culture' means the postmortem names the system, not the person.",
            "Write down the 3-5 behaviors you want to scale: e.g., 'we ship and learn fast,' 'we write things down,' 'we disagree openly and commit once decided.' Then audit: does our behavior match the list? The gap between your list and your behavior is your real culture.",
          ],
        },
        {
          heading: "Rituals that build culture",
          paragraphs: [
            "Culture is installed through repetition: a Monday demo of what shipped, a Friday 'wins and learnings' note, decision records that show WHY (so future employees absorb the reasoning), and an onboarding doc that transfers the unwritten rules on day one.",
            "The most important ritual is the postmortem without blame. When things break  and they will  the team that learns together stays together. Write: what happened, why, what we changed. Then move on. Nothing builds trust faster than watching a founder own their own mistake in public.",
          ],
        },
        {
          heading: "The anti-patterns",
          paragraphs: [
            "Anti-patterns to kill early: heroes (one person who 'saves' everything  usually a single point of failure), meetings as status (no agenda = no meeting), and silent disagreement (people who nod in the room and resist in the hallway). The last one is the most expensive  it makes decisions seem made when they aren't.",
            "At this stage, culture is a few written rules, reinforced weekly, demonstrated daily. You're not building a culture program; you're building a habit set.",
          ],
        },
      ],
      examples: [
        "A founder posts a 'values' page but ships features with obvious bugs while celebrating 'speed.' The team learns the real value is 'don't slow down for quality'  the poster and the behavior disagree, and behavior wins.",
        "Another founder starts every Monday meeting with 'what we broke last week and what we learned.' Within a quarter, people stop hiding mistakes and start fixing them at the root. That meeting is now their most-loved ritual.",
      ],
      actionItems: [
        "Write your 3-5 non-negotiable behaviors on one page.",
        "Audit the last 2 weeks: where did behavior match  and not match  the list?",
        "Start a Monday demo + Friday learnings rhythm this week.",
      ],
      keyPoints: [
        "Culture = rewarded, tolerated, and punished behavior.",
        "Install it with rituals: demos, learnings, decision records, blameless postmortems.",
        "Kill heroes, status meetings, and silent disagreement.",
        "A few written rules, weekly reinforcement, daily demonstration.",
      ],
    },
    {
      id: "team-8",
      title: "Managing a small team: rhythms and decisions",
      readMinutes: 8,
      sections: [
        {
          heading: "The operating rhythms",
          paragraphs: [
            "A 3-10 person startup runs on four rhythms: weekly planning (what are the 3 priorities, who owns them), weekly 1:1s (covered earlier), weekly demo/learnings, and a monthly review (numbers + strategy). Everything else is optional. Add meetings only when a missing decision costs more than the meeting.",
            "The weekly planning meeting is a decisions meeting, not a status meeting: each person says their 3 priorities for the week, surfaces dependencies, and leaves with a clear plan. The monthly review looks at the numbers that matter (revenue, retention, burn) and asks: 'are our actions changing the numbers?'",
          ],
        },
        {
          heading: "Who decides what",
          paragraphs: [
            "Clarity of decision rights prevents the classic startup disease  everyone decides, nobody owns. Write down: the founder/CEO owns strategy, hiring, and money. Engineers own architecture and tech choices. The seller owns pipeline and pricing experiments within bounds. When in doubt, the owner is the person whose name is on the outcome.",
            "Disagreements: debate openly in the meeting, commit once decided, and never re-litigate in the hallway. The phrase that saves startups: 'I disagree, and I'll support the decision.'",
          ],
        },
        {
          heading: "Writing things down",
          paragraphs: [
            "The single highest-leverage habit at this size: write decisions down. A decision log (date, decision, who, why, when to revisit) costs 5 minutes and saves weeks of 'why did we do it this way?' A short weekly team note (what we did, what we learned, what's next) keeps everyone aligned without meetings.",
            "Startup cost of the unwritten decision: the second hire redoes the first hire's work because nobody recorded why. The cost compounds with every new person.",
          ],
        },
      ],
      examples: [
        "A 6-person team runs 14 weekly meetings because 'that's how it was at my last job.' Engineers have 6 hours of meetings a week and two hours of deep work. The founder cuts the schedule to four meetings and the team's velocity doubles in a month.",
        "The founder decides 'no mobile app this quarter' in a hallway chat. Three weeks later a contractor is scoping a mobile app because nobody wrote it down. The decision log would have cost 2 minutes.",
      ],
      actionItems: [
        "List every recurring meeting; delete any without a written agenda or a decision owner.",
        "Start your decision log today  one line per decision, dated.",
        "Adopt the weekly note: did, learned, next  written by the founder.",
      ],
      keyPoints: [
        "Four rhythms: weekly planning, 1:1s, demo/learnings, monthly review.",
        "Every decision has one owner whose name is on the outcome.",
        "Disagree openly, commit once decided.",
        "Write decisions down  the decision log is the cheapest tool you own.",
      ],
    },
    {
      id: "team-9",
      title: "Retention, departures, and the emotional ledger",
      readMinutes: 8,
      sections: [
        {
          heading: "Why people stay",
          paragraphs: [
            "People stay for three reasons in compounding order: they're learning, they're growing (title/scope/equity), and they feel valued (visible appreciation, fair pay, autonomy). At a startup you have an advantage on all three  you just have to be deliberate. Give big projects, promote scope not just title, and say thanks specifically and often.",
            "Run your own retention data: who has been quiet in 1:1s, who hasn't shipped in a while, whose ideas stopped appearing in meetings. Quiet is the pre-resignation state.",
          ],
        },
        {
          heading: "Managing the departure",
          paragraphs: [
            "Every departure teaches the company something: why they left, how you handled it, what the remaining team concluded. Conduct a real exit interview (the employee usually shares more with a peer or a tool than with you  don't take it personally).",
            "For voluntary departures: match the counter-offer only in rare cases (the reasons people leave are usually not money), protect IP and access on day one, and handle the announcement with grace. The team's conclusion from how you treat a leaver is exactly the culture you advertised.",
            "For equity: unvested shares return to the pool; vested options have a post-termination exercise window (typically 90 days at seed; longer windows are becoming standard  negotiate before signing the plan).",
          ],
        },
        {
          heading: "The emotional ledger",
          paragraphs: [
            "Founders burn out from the emotional load of managing people long before the workload  layoffs, firings, and disappointments accumulate. Build a personal operating system: a co-founder/peer you can be honest with, a therapist or coach, exercise, and a hard rule about working hours. The company's ceiling is your capacity to keep showing up  protect it like a resource.",
          ],
        },
      ],
      examples: [
        "A valued engineer resigns. The founder counter-offers +30% cash. The engineer stays six months and leaves anyway  the reason was scope and trust, not cash. The founder learns: the 1:1 where he asked 'what would make you leave' was the moment to act.",
        "A departing contractor holds unexercised options that expire in 90 days and can't afford to exercise at $0.05/share without knowing the exit. The company later extends the window to 10 years  the founder reads the room, and the loyalty dividend pays back in referrals.",
      ],
      actionItems: [
        "Run the retention scan on your team: who's quiet, who's stopped proposing, who's last in demos.",
        "Write your counter-offer policy BEFORE the first resignation.",
        "Set one protected hour a week for your own recovery  non-negotiable.",
      ],
      keyPoints: [
        "People stay for learning, growth, and feeling valued  in that order.",
        "Quiet is the pre-resignation state.",
        "How you treat leavers is what the remaining team believes about you.",
        "Your capacity is the company's ceiling  protect it.",
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
      explanation: "Working together under real pressure reveals how they handle rejection, deadlines, and being wrong  dinner conversations cannot.",
    },
    {
      question: "A part-time 'idea-giver' co-founder should typically receive:",
      options: ["50%", "Equal share", "A smaller stake with vesting", "Nothing at all"],
      correctIndex: 2,
      explanation: "Idea-only, part-time contributions warrant a smaller stake (often 5-15%) with vesting, documented in the founder agreement.",
    },
    {
      question: "What is the standard vesting schedule for founders?",
      options: ["2 years, no cliff", "4 years with 1-year cliff, monthly after", "Immediate vesting", "10 years"],
      correctIndex: 1,
      explanation: "4 years with a 1-year cliff and monthly vesting after is the standard  it protects the company if a founder leaves early.",
    },
    {
      question: "Which worker is most likely to be legally classified as an employee?",
      options: [
        "A freelancer with three clients",
        "Someone working 40h/week on your tools with your direction",
        "A specialist doing one scoped project",
        "A contractor who set their own hours",
      ],
      correctIndex: 1,
      explanation: "Control of how and when work is done, full-time hours, and your tools = employee, regardless of the label on the contract.",
    },
    {
      question: "Why must a contractor's contract include explicit IP assignment?",
      options: [
        "It is required by tax law",
        "Work-for-hire isn't automatic for contractors in most places",
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
        "Employee-led conversation about wins, blockers, and feelings",
        "Performance reviews",
        "Planning the roadmap",
      ],
      correctIndex: 1,
      explanation: "The 1:1 is the employee's conversation  you listen 80%. Status belongs in the tracker; the 1:1 surfaces what the tracker can't.",
    },
    {
      question: "What is the retention signal that most precedes resignation?",
      options: [
        "Complaining in meetings",
        "Quiet: fewer ideas, less engagement",
        "Working overtime",
        "Asking for a raise",
      ],
      correctIndex: 1,
      explanation: "People go quiet before they go  shrinking ideas and participation in 1:1s is the pre-resignation state.",
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
      explanation: "'Disagree openly, commit once decided'  hallway re-litigation is the most expensive startup habit.",
    },
  ],
};