export interface LessonSection {
  heading: string;
  paragraphs: string[];
}

export interface Lesson {
  id: string;
  title: string;
  readMinutes: number;
  sections: LessonSection[];
  keyPoints: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AcademyTrack {
  id: string;
  title: string;
  tagline: string;
  icon: "scale" | "users" | "banknote" | "calculator" | "target" | "megaphone";
  estimatedHours: string;
  free: boolean;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export const PASS_SCORE = 80;

export const ACADEMY_TRACKS: AcademyTrack[] = [
  {
    id: "legal",
    title: "Legal & Entity Setup",
    tagline: "Choose the right structure, protect yourself, and stay compliant from day one.",
    icon: "scale",
    estimatedHours: "2.5h",
    free: true,
    lessons: [
      {
        id: "legal-1",
        title: "Choosing an entity: LLC vs. C-Corp",
        readMinutes: 8,
        sections: [
          {
            heading: "Why the structure matters",
            paragraphs: [
              "Your entity type decides how you're taxed, how you raise money, how you're governed, and how much paperwork you carry. Most founders pick LLC or C-Corp, and the choice is usually driven by fundraising plans — not personal preference.",
              "An LLC is flexible, pass-through taxed, and cheap to run. A C-Corp is a separate taxable entity, subject to double taxation (corporate + dividend), but it supports preferred stock, option pools, and investors who expect standard venture documents.",
            ],
          },
          {
            heading: "The venture rule of thumb",
            paragraphs: [
              "If you plan to raise venture capital or issue equity to employees, incorporate as a Delaware C-Corp. VCs, accelerators, and acquirers expect it; their lawyers will push you there eventually anyway, and converting an LLC later triggers a taxable event.",
              "If you're building a bootstrapped business, a consulting shop, or a company that may never take institutional money, an LLC is cheaper and simpler. You can always convert later — just know the conversion has tax consequences.",
            ],
          },
          {
            heading: "State of incorporation",
            paragraphs: [
              "Delaware is the default for startups because its corporate law is well settled, its courts are fast and predictable, and every major investor understands its documents. You can be a Delaware C-Corp while operating anywhere in the US.",
              "If you never plan to raise or sell, incorporating in your home state is usually enough and avoids Delaware's annual franchise fee.",
            ],
          },
        ],
        keyPoints: [
          "Raise VC → Delaware C-Corp. Bootstrap → LLC is fine.",
          "LLC = pass-through taxes, flexible, low cost.",
          "C-Corp = preferred stock, option pools, standard VC docs.",
          "Converting an LLC to a C-Corp later triggers taxable events.",
        ],
      },
      {
        id: "legal-2",
        title: "Incorporation steps & founding paperwork",
        readMinutes: 7,
        sections: [
          {
            heading: "The checklist",
            paragraphs: [
              "The core steps: pick a name and check trademark conflicts, file a Certificate of Incorporation, appoint directors, issue shares to founders, adopt bylaws, open a business bank account, and get an EIN from the IRS.",
              "Most founders use a service like Stripe Atlas or Clerky to handle the boilerplate. What the service can't do is make your founder decisions for you — that's the real work.",
            ],
          },
          {
            heading: "The 83(b) election — the most important form you'll ever file",
            paragraphs: [
              "When you receive shares, the IRS treats the spread between fair market value and what you paid as ordinary income — unless you file an 83(b) election within 30 days of receiving the shares. Founders typically pay pennies per share, so the tax is tiny at grant time.",
              "If you miss the 30-day window, your shares vest over time and the appreciation gets taxed as ordinary income when each tranche vests — a potentially massive bill. File the election the day you get your shares, in duplicate, and keep proof.",
            ],
          },
          {
            heading: "Founder agreements",
            paragraphs: [
              "Before anyone builds anything: a founder agreement covering ownership split, vesting, IP assignment (the company owns everything you build), roles, and what happens if a founder leaves or dies.",
              "Also sign a Confidential Information and Invention Assignment Agreement (CIIAA) with every employee and contractor. Without IP assignment, your contractors may legally own the code they wrote for you.",
            ],
          },
        ],
        keyPoints: [
          "Incorporate, issue shares, open a bank account, get an EIN.",
          "File the 83(b) election within 30 days — it's the single most expensive mistake to skip.",
          "Always use written founder agreements with vesting and IP assignment.",
          "Contractors need CIIAAs signed before they write any code.",
        ],
      },
      {
        id: "legal-3",
        title: "Equity, vesting, and option pools",
        readMinutes: 8,
        sections: [
          {
            heading: "How venture equity actually works",
            paragraphs: [
              "Founders own common stock. Investors buy preferred stock. Employees earn options that vest over time, usually 4 years with a 1-year cliff — nothing vests in year one, then 25% vests at the cliff, the rest monthly.",
              "The option pool is a block of shares reserved for employees, typically 10-20% of the company. It's negotiated during fundraising and effectively dilutes the founders — so the size you agree to matters.",
            ],
          },
          {
            heading: "Splitting equity with co-founders",
            paragraphs: [
              "There is no 'fair' formula, but a common baseline is an equal split among founding team members whose contributions are roughly equal. Uneven splits are fine when contributions, capital, or experience differ — the key is deciding it explicitly, in writing, early.",
              "Whatever you decide, apply the same vesting to all founders. Vesting is the mechanism that keeps a departing founder from taking half the company while contributing nothing.",
            ],
          },
          {
            heading: "Common pitfalls",
            paragraphs: [
              "Giving a founding employee 'co-founder' equity without vesting. Issuing shares without an 83(b) election. Forgetting that SAFEs and convertible notes dilute everyone equally at the next priced round.",
              "Rule of thumb: anything that creates equity should be written, reviewed by a lawyer who represents the company (not you personally), and consistent with the cap table you keep updated after every round.",
            ],
          },
        ],
        keyPoints: [
          "Standard vesting: 4 years, 1-year cliff — for founders and employees.",
          "Option pool (10-20%) dilutes founders, not investors.",
          "Equal splits are the baseline; the real rule is explicit, written, early.",
          "Cap table discipline = always written, always current.",
        ],
      },
      {
        id: "legal-4",
        title: "Fundraising compliance & staying out of trouble",
        readMinutes: 7,
        sections: [
          {
            heading: "Who can you pitch?",
            paragraphs: [
              "In the US, securities law (Regulation D, Rule 506) limits private fundraising to accredited investors — individuals with >$1M net worth (excluding primary residence) or >$200K income. Rule 506(c) allows general solicitation but requires you to verify accredited status; 506(b) bans public solicitation.",
              "The SEC also has a general anti-fraud rule: you cannot make misleading statements about your company, in any medium, to anyone. The startup trope 'we're raising a $2M seed at $12M' is marketing — keep it truthful.",
            ],
          },
          {
            heading: "SAFEs, notes, and priced rounds",
            paragraphs: [
              "SAFEs (Simple Agreements for Future Equity) and convertible notes defer the valuation question until a priced round triggers conversion. SAFEs are founder-friendlier: no interest, no maturity date, simpler paperwork.",
              "Priced rounds (Seed, Series A) sell preferred stock at a fixed valuation with a full negotiation of terms: liquidation preference, board seats, protective provisions, option pool top-ups. The term sheet is legally binding when signed; everything before it is subject to change.",
            ],
          },
          {
            heading: "Practical guardrails",
            paragraphs: [
              "Keep a data room from day one: cap table, incorporation docs, contracts, IP assignments, financials. Investors will ask; having it ready signals professionalism.",
              "Pay a startup lawyer for the terms you actually sign. DIY templates are fine for discovery, dangerous for binding documents. And never commingle company and personal funds — pierce the corporate veil and your liability protection is gone.",
            ],
          },
        ],
        keyPoints: [
          "Rule 506: accredited investors, or verified status under 506(c).",
          "No misleading statements, ever — the SEC's anti-fraud rule applies to all.",
          "SAFE = simpler, founder-friendlier than convertible notes.",
          "Term sheet signed = binding. Data room ready = professional.",
        ],
      },
    ],
    quiz: [
      {
        question: "You plan to raise venture capital. What entity should you incorporate?",
        options: ["Sole proprietorship", "Delaware C-Corp", "LLC in your home state", "Nonprofit"],
        correctIndex: 1,
        explanation:
          "VCs expect Delaware C-Corps: they support preferred stock, option pools, and standard venture documents. LLCs convert with tax consequences.",
      },
      {
        question: "How long do you have to file an 83(b) election after receiving shares?",
        options: ["60 days", "1 year", "30 days", "At your next tax filing"],
        correctIndex: 2,
        explanation:
          "83(b) must be filed within 30 days of receiving shares. Missing it turns future appreciation into ordinary income at vesting — potentially a huge bill.",
      },
      {
        question: "Which is the standard employee vesting schedule?",
        options: [
          "2 years, no cliff",
          "4 years with a 1-year cliff",
          "Immediate vesting",
          "5 years, no cliff",
        ],
        correctIndex: 1,
        explanation:
          "Standard is 4-year vesting with a 1-year cliff: nothing vests in year one, then 25% at the cliff and monthly thereafter.",
      },
      {
        question: "Under SEC Rule 506, who can you raise from without verifying accredited status?",
        options: [
          "Anyone who asks",
          "Friends and family only",
          "Accredited investors",
          "Only venture funds",
        ],
        correctIndex: 2,
        explanation:
          "506(b) limits you to accredited investors with no general solicitation. 506(c) allows solicitation but requires verification.",
      },
      {
        question: "Why must contractors sign an IP assignment agreement before writing code?",
        options: [
          "It's required by tax law",
          "Without it, they may own the code they wrote for you",
          "It lowers their rates",
          "It's only needed for employees",
        ],
        correctIndex: 1,
        explanation:
          "Without a CIIAA, the contractor retains copyright in the work. Written IP assignment transfers ownership to your company.",
      },
    ],
  },
  {
    id: "team",
    title: "Team & Hiring",
    tagline: "Choose co-founders wisely, split equity fairly, and hire people who raise the bar.",
    icon: "users",
    estimatedHours: "2h",
    free: false,
    lessons: [
      {
        id: "team-1",
        title: "Finding the right co-founder",
        readMinutes: 7,
        sections: [
          {
            heading: "What you're actually looking for",
            paragraphs: [
              "Co-founder fit is less about friendship and more about complementary skills, aligned values, equal hunger, and compatible working styles. The classic pairing is builder + seller: someone who ships, someone who sells.",
              "Look for people who have a reason to stay: shared mission, shared risk. The best test is a small paid or shared-equity project before you commit — you learn how they handle conflict, deadlines, and money.",
            ],
          },
          {
            heading: "Where to find them",
            paragraphs: [
              "Your network is the highest-quality source — former colleagues you've shipped with, competitors' teams, accelerator alumni groups. Communities like YC's Co-Founder Matching, startup meetups, and founder Slack groups are second-best.",
              "Avoid hiring a co-founder you met last week. References matter: talk to everyone they've worked with. A co-founder split is harder to unwind than a marriage.",
            ],
          },
          {
            heading: "The 5 questions to answer before committing",
            paragraphs: [
              "What happens if one of us wants out? What if we disagree on strategy? Who owns the IP? How do we make decisions? What happens if we take a salary — or don't?",
              "Answer all five in a written founder agreement with vesting. 'We'll figure it out later' is how startups die.",
            ],
          },
        ],
        keyPoints: [
          "Complementary skills + aligned values > friendship.",
          "Test with a small project before the split.",
          "Your network is the best hiring pool.",
          "Answer the hard questions in writing before committing.",
        ],
      },
      {
        id: "team-2",
        title: "Equity splits and vesting for co-founders",
        readMinutes: 7,
        sections: [
          {
            heading: "The baseline and the exceptions",
            paragraphs: [
              "Equal splits among founders are the default because they're the least likely to blow up morale. Deviate when contributions are clearly unequal — one founder brings the patent, or capital, or a decade of domain experience — but make the deviation explicit and written.",
              "Whatever the split, ALL founders vest. Standard: 4 years, 1-year cliff, sometimes with accelerated vesting on acquisition.",
            ],
          },
          {
            heading: "What vesting actually protects",
            paragraphs: [
              "Vesting protects the company and the remaining founders from a co-founder who leaves early taking a founder-size slice. With a 1-year cliff, someone who quits at month 6 walks away with nothing — which is exactly the incentive alignment you want.",
              "It also sets the tone for employees: if founders vest, fairness arguments disappear.",
            ],
          },
          {
            heading: "The option pool and your dilution math",
            paragraphs: [
              "When you raise, investors will ask for an option pool (usually 10-20% post-money) to be reserved for employees — and it typically dilutes founders only, not investors. Model this before you negotiate, not after.",
              "Tool: your cap table. Keep it in a spreadsheet you own; services are nice but the founder who understands dilution survives the boardroom.",
            ],
          },
        ],
        keyPoints: [
          "Equal split is the baseline; explicit deviations when contributions differ.",
          "Founders vest too — 4 years, 1-year cliff.",
          "The option pool usually dilutes founders, not investors.",
          "Know your cap table math before negotiating terms.",
        ],
      },
      {
        id: "team-3",
        title: "Hiring your first employees",
        readMinutes: 8,
        sections: [
          {
            heading: "Hire the problem, not the person",
            paragraphs: [
              "First hires should remove a bottleneck only you can't remove. The first salesperson, the first engineer, the first designer — hire to cover a specific, urgent gap, not because a 'real company' needs a logo designer.",
              "A rule founders repeat: hire slow, fire fast. Process (interviews, take-home tests, paid trials) beats instinct, especially for the first five people who define your culture.",
            ],
          },
          {
            heading: "What to pay and offer",
            paragraphs: [
              "Pre-seed you can't match market salaries — so be transparent about the trade-off: below-market salary, above-market equity, and a real growth path. Candidates who only want market comp aren't your first hires.",
              "Put everything in writing: equity grants with vesting, salary, benefits, and an IP assignment agreement signed before day one.",
            ],
          },
          {
            heading: "Contractor vs. employee — the rules",
            paragraphs: [
              "Misclassifying an employee as a contractor is one of the most common (and expensive) early legal mistakes. If you control their hours, tools, and process, they're an employee under most jurisdictions — whatever you call them.",
              "When in doubt, run the tests: control of work, economic dependence, and the written contract. Local rules differ; check your state's guidance before your second hire.",
            ],
          },
        ],
        keyPoints: [
          "First hires cover an urgent bottleneck — nothing else.",
          "Hire slow, fire fast; paid trials beat gut feel.",
          "Pre-seed comp: below-market salary + above-market equity, stated openly.",
          "Misclassified contractors = expensive liability. Know the test.",
        ],
      },
      {
        id: "team-4",
        title: "Culture, roles, and operating rhythm",
        readMinutes: 6,
        sections: [
          {
            heading: "Culture is what you tolerate",
            paragraphs: [
              "The founder's habits become the company's culture: how you respond to bad news, how you treat the first customer, what happens when someone misses a deadline. Write down the 3-5 operating principles you refuse to compromise on.",
              "Culture is also communication. Weekly all-hands, written updates, and decision logs beat Slack noise. Document decisions: 'the why' is what survives staff changes.",
            ],
          },
          {
            heading: "Small-team operating rhythm",
            paragraphs: [
              "Pre-seed teams need: one source of truth for priorities (a short list, not a roadmap), a weekly cadence of plan → do → review, and explicit owners for every outcome. Ambiguity is the enemy of small teams.",
              "Use a simple decision framework: any team member can raise a decision; owners decide; everyone ships. Speed beats consensus at this stage.",
            ],
          },
          {
            heading: "Growing past yourself",
            paragraphs: [
              "Every hire should be someone who could eventually do your job better than you. Hire for ceiling, not floor. And plan for management overhead: ~1 manager per 5-7 people once you cross ~10 employees.",
            ],
          },
        ],
        keyPoints: [
          "Culture = what you tolerate, set by founder habits.",
          "One priority list, weekly cadence, explicit owners.",
          "Speed beats consensus pre-seed.",
          "Hire people who could do your job better.",
        ],
      },
    ],
    quiz: [
      {
        question: "What is the strongest predictor of co-founder fit?",
        options: [
          "Similar personality types",
          "Complementary skills + aligned values",
          "Same university",
          "Same investment thesis",
        ],
        correctIndex: 1,
        explanation:
          "The classic pairing is builder + seller; shared values and complementary skills are what survive conflict.",
      },
      {
        question:
          "A co-founder quits at month 6 with standard vesting (4yr, 1yr cliff). What do they keep?",
        options: ["Half their shares", "Nothing", "25% of shares", "All shares"],
        correctIndex: 1,
        explanation:
          "With a 1-year cliff, nothing vests before 12 months. The co-founder walks away with no equity — which is the point.",
      },
      {
        question: "Which is a red flag that a contractor is actually an employee?",
        options: [
          "They work remotely",
          "You control their hours and tools",
          "They have other clients",
          "They use their own laptop",
        ],
        correctIndex: 1,
        explanation:
          "Control of hours, tools, and process indicates employment. Misclassification carries significant penalties.",
      },
      {
        question: "What should first hires cover?",
        options: [
          "Roles a 'real company' needs",
          "An urgent bottleneck only you can't remove",
          "Your weakest skill areas",
          "Industry prestige",
        ],
        correctIndex: 1,
        explanation:
          "First hires remove bottlenecks. Hiring for appearances wastes runway and dilutes culture.",
      },
      {
        question: "What's the recommended option pool size requested by investors?",
        options: ["1-5%", "10-20%", "40-50%", "0%"],
        correctIndex: 1,
        explanation:
          "A 10-20% post-money pool is the norm, and it typically dilutes founders rather than investors.",
      },
    ],
  },
  {
    id: "fundraising",
    title: "Fundraising & Pitching",
    tagline: "Master the deck, the ask, and the terms — from first email to signed term sheet.",
    icon: "banknote",
    estimatedHours: "3h",
    free: false,
    lessons: [
      {
        id: "fundraising-1",
        title: "The investor landscape",
        readMinutes: 7,
        sections: [
          {
            heading: "Who's who on the cap table",
            paragraphs: [
              "Angels are individuals writing $25K-$250K checks. Angel syndicates pool many angels behind one lead. Micro-VCs and pre-seed funds write $250K-$1.5M checks with lighter diligence. Venture funds (Seed to Series B+) manage larger pools, take board seats, and expect rapid growth.",
              "Accelerators (Y Combinator, Techstars, and their regional equivalents) trade a small equity stake for a structured cohort, capital, and network. For many pre-seed founders they're the fastest on-ramp to institutional investors.",
            ],
          },
          {
            heading: "What each investor actually wants",
            paragraphs: [
              "Angels often care about the founder story and the problem's pain. Pre-seed funds want proof the team can move fast on a big market. VCs want evidence of product-market fit and a path to a billion-dollar outcome.",
              "Raise from people whose incentives match your stage. Taking a growth-stage VC's money pre-seed is a mismatch that creates pressure you can't meet.",
            ],
          },
          {
            heading: "The numbers game",
            paragraphs: [
              "Fundraising is a funnel: hundreds of emails → dozens of calls → a handful of serious processes → one or two term sheets. Expect 80%+ of your outreach to go unanswered, and plan outreach in waves so you can respond to inbound demand without overcommitting.",
            ],
          },
        ],
        keyPoints: [
          "Match investor type to your stage — incentives matter.",
          "Accelerators are the fastest institutional on-ramp for many.",
          "Plan outreach in waves; 80%+ goes unanswered.",
          "Know what each investor type is optimizing for.",
        ],
      },
      {
        id: "fundraising-2",
        title: "Building the pitch deck that gets meetings",
        readMinutes: 8,
        sections: [
          {
            heading: "The 10-slide structure that works",
            paragraphs: [
              "1) Problem, 2) Solution, 3) Market, 4) Product, 5) Traction, 6) Business model, 7) Competition, 8) Team, 9) Financials, 10) The Ask. If a slide doesn't move the story forward, cut it.",
              "The problem slide is the hero: one specific customer, one painful job-to-be-done, quantified. Investors fund pain, not features.",
            ],
          },
          {
            heading: "Traction beats everything",
            paragraphs: [
              "Revenue, active users, retention, waitlist, LOIs, a successful pilot — whatever you have, put the number on the slide with the timeframe. 'We have 400 paying teams in 6 months' is worth more than a beautiful market slide.",
              "If you have no traction, make the team slide carry weight: why you specifically will win this market. Both a founder pattern-match and unfair advantages matter here.",
            ],
          },
          {
            heading: "Design and delivery rules",
            paragraphs: [
              "One idea per slide, no paragraphs, visuals over text, consistent branding. Send the deck as a PDF link (not an attachment). Practice the 3-minute version: you'll deliver it more than the 30-minute one.",
              "The deck opens doors; the meeting closes them. Your job in the meeting is to get to the next meeting.",
            ],
          },
        ],
        keyPoints: [
          "10-slide structure; cut anything that doesn't advance the story.",
          "Problem slide is the hero — quantified pain.",
          "Traction beats market size. Timeframe every number.",
          "Deck opens doors; the meeting gets you the next meeting.",
        ],
      },
      {
        id: "fundraising-3",
        title: "SAFEs, notes, and term sheets",
        readMinutes: 9,
        sections: [
          {
            heading: "Seed instruments, compared",
            paragraphs: [
              "A SAFE is a simple agreement for future equity: investor gives money now, gets shares at the next priced round (or a defined trigger). No interest, no maturity date, founder-friendly paperwork.",
              "A convertible note is a loan that converts: it carries interest (5-8%) and a maturity date (18-24 months) when it must convert or be repaid. Notes are older, more investor-protective, and now less common.",
              "A priced round issues preferred stock at a valuation with full term-sheet negotiation — the standard for Seed and beyond.",
            ],
          },
          {
            heading: "Valuation basics",
            paragraphs: [
              "Pre-money valuation is what the company is worth before the new money; post-money = pre-money + the raise. A $5M pre-money with a $1M raise = $6M post-money, and the investor owns 16.7%.",
              "Early valuations are negotiated, not calculated: benchmarks from comparable companies at your stage, your traction, and supply/demand for your round. Don't anchor on vanity numbers — the next round's valuation is what matters.",
            ],
          },
          {
            heading: "Reading the term sheet",
            paragraphs: [
              "Key terms: pre-money, option pool (dilutes you), liquidation preference (1x non-participating is standard — they get their money back before you), board composition, pro-rata rights, vesting and founder clawbacks, and protective provisions.",
              "Rule: a standard term sheet from a good firm is usually better than a slightly richer one from a bad firm. The fund's reputation and follow-on capacity compound.",
            ],
          },
        ],
        keyPoints: [
          "SAFE = simple, no interest/maturity. Note = loan with interest + maturity.",
          "Post-money = pre-money + raise. Know what you're giving up.",
          "1x non-participating liquidation preference is the fair baseline.",
          "The fund's reputation matters more than the last decimal on valuation.",
        ],
      },
      {
        id: "fundraising-4",
        title: "Due diligence & closing",
        readMinutes: 6,
        sections: [
          {
            heading: "The data room",
            paragraphs: [
              "Serious investors will ask for: incorporation docs, cap table, founder agreements and vesting, IP assignments, key contracts, financials, and any legal history. Keep a virtual data room organized from day one — it signals professionalism and speeds the process.",
              "Diligence is about verifying, not discovering: surprises kill deals. If something is off (a missing 83(b), an unwritten founder agreement), fix it before you start fundraising.",
            ],
          },
          {
            heading: "Managing the process",
            paragraphs: [
              "Create competitive tension ethically: run a tight 4-6 week process, give investors a decision date, and keep everyone informed. The strongest signal to an investor is that other investors are interested.",
              "Never lie about a competing term sheet — fabrication is fraud and founders get caught. Manufactured urgency is fine; fabricated facts are not.",
            ],
          },
          {
            heading: "After signing",
            paragraphs: [
              "Celebrate for a day, then close the loop: update your cap table, file the paperwork, set up investor updates (monthly or quarterly), and schedule a board cadence. Raising money is the start of a relationship, not the end of a process.",
            ],
          },
        ],
        keyPoints: [
          "Data room ready before you start — surprises kill deals.",
          "4-6 week process with a decision date creates ethical urgency.",
          "Never fabricate competing term sheets.",
          "Investor updates + board cadence start the day you sign.",
        ],
      },
    ],
    quiz: [
      {
        question: "Which investor type is typically the best match for a pre-seed company?",
        options: [
          "Growth-stage VC",
          "Angels and pre-seed funds",
          "Public market funds",
          "Private equity buyout firms",
        ],
        correctIndex: 1,
        explanation:
          "Angels and pre-seed funds match pre-seed incentives. Growth-stage money creates pressure you can't meet yet.",
      },
      {
        question: "What's the standard liquidation preference on a founder-friendly term sheet?",
        options: ["3x participating", "1x non-participating", "2x participating", "No preference"],
        correctIndex: 1,
        explanation:
          "1x non-participating is the fair baseline: investors get their money back first, but don't double-dip into the common pool.",
      },
      {
        question: "A $6M pre-money with a $1.5M raise: what does the investor own?",
        options: ["25%", "16.7%", "20%", "33%"],
        correctIndex: 2,
        explanation: "Post-money = $6M + $1.5M = $7.5M. $1.5M / $7.5M = 20%.",
      },
      {
        question: "Which instrument has a maturity date?",
        options: ["SAFE", "Convertible note", "Common stock", "Neither"],
        correctIndex: 1,
        explanation:
          "Convertible notes are loans: they accrue interest and hit a maturity date when they must convert or be repaid.",
      },
      {
        question: "Which is true about fabricated competing term sheets?",
        options: [
          "A common negotiation tactic",
          "Fraud — founders get caught",
          "Fine if the investor doesn't verify",
          "Only illegal in California",
        ],
        correctIndex: 1,
        explanation:
          "Inventing investors is securities fraud territory and diligence will expose it. Ethical urgency: real interest, decision dates.",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance & Runway",
    tagline: "Understand burn, unit economics, and the numbers investors will interrogate.",
    icon: "calculator",
    estimatedHours: "2.5h",
    free: false,
    lessons: [
      {
        id: "finance-1",
        title: "Burn, runway, and the monthly operating plan",
        readMinutes: 7,
        sections: [
          {
            heading: "The three numbers that matter",
            paragraphs: [
              "Burn rate = how much cash you spend per month (gross: all spend; net: spend minus revenue). Runway = cash on hand ÷ net burn. If you have $300K and burn $50K/mo, you have 6 months of runway.",
              "Founders underreport burn by forgetting one-off costs: legal, cloud, contractor invoices, founder salaries. Build a monthly operating plan (MOP) that reconciles to your bank account every month.",
            ],
          },
          {
            heading: "Runway rules of thumb",
            paragraphs: [
              "Raise before you're desperate: start a round with 6+ months of runway, because raising takes 3-6 months of your full attention. Many founders raise at 12 months and plan to never go below 3.",
              "Cut costs before you raise, not after. Investors fund momentum; a company that cut burn to extend runway shows discipline — a company that kept spending shows neither.",
            ],
          },
          {
            heading: "Building the MOP",
            paragraphs: [
              "List every cost category with a monthly amount, model three scenarios (base, stretch, down), and update monthly. Revenues flow in when they exist. The MOP is also your seed-stage budget for the investor deck.",
            ],
          },
        ],
        keyPoints: [
          "Runway = cash ÷ net burn. Track one-off costs or you'll misjudge it.",
          "Start fundraising at 6+ months runway, never below 3.",
          "Cut burn before you raise — discipline reads in diligence.",
          "A monthly operating plan with three scenarios is your budget.",
        ],
      },
      {
        id: "finance-2",
        title: "Unit economics and pricing",
        readMinutes: 8,
        sections: [
          {
            heading: "CAC and LTV — the fundamentals",
            paragraphs: [
              "Customer Acquisition Cost = all sales & marketing spend ÷ new customers in the period. Lifetime Value = average revenue per customer × gross margin × average customer lifetime.",
              "Healthy SaaS rule of thumb: LTV:CAC above 3:1, and CAC payback (months to recover CAC via gross margin) under 12 months. If those are inverted, growth just burns faster.",
            ],
          },
          {
            heading: "Pricing is a feature",
            paragraphs: [
              "Founders underprice out of fear. Better heuristic: price from value created, then validate with willingness-to-pay conversations and a price test. You can always grandfather early customers on old prices.",
              "The biggest pricing mistakes: annual-only plans (blocks trial), free tiers that are too generous (no monetization path), and pricing that makes enterprise deals impossible (no per-seat growth).",
            ],
          },
          {
            heading: "Margins that compound",
            paragraphs: [
              "Gross margin (revenue minus direct cost to serve) is the number investors stress-test. Software should be 80%+; services businesses struggle below 40%. Every pricing decision is really a margin decision.",
            ],
          },
        ],
        keyPoints: [
          "Healthy: LTV:CAC ≥ 3:1, payback < 12 months.",
          "Price from value, validate with real conversations.",
          "Design pricing so free→paid and per-seat growth paths exist.",
          "Gross margin is the number investors stress-test first.",
        ],
      },
      {
        id: "finance-3",
        title: "Bookkeeping, accounting, and taxes",
        readMinutes: 7,
        sections: [
          {
            heading: "Do this from month one",
            paragraphs: [
              "Open a business bank account and a separate card — commingling destroys your liability shield and makes diligence painful. Set up accounting software (QuickBooks, Xero) and reconcile monthly.",
              "Quarterly estimated taxes apply to founder salaries and LLC income. Forgetting them produces penalties plus interest — an avoidable, compounding cost.",
            ],
          },
          {
            heading: "Cash vs. accrual",
            paragraphs: [
              "Cash accounting records money when it moves; accrual records it when earned/owed. Investors and auditors think in accrual. Know both: cash tells you if you can pay next month, accrual tells you if the business is real.",
            ],
          },
          {
            heading: "The finance team trajectory",
            paragraphs: [
              "Founder → bookkeeper (virtual, ~$300-500/mo) → fractional CFO at Series A → in-house finance team later. Every stage has an affordable answer; the expensive mistake is having no books at all.",
            ],
          },
        ],
        keyPoints: [
          "Separate accounts + monthly reconciliation from day one.",
          "Pay quarterly estimated taxes on time.",
          "Cash = survival; accrual = truth.",
          "Virtual bookkeepers are cheap; no books is expensive.",
        ],
      },
      {
        id: "finance-4",
        title: "Financials investors will ask for",
        readMinutes: 6,
        sections: [
          {
            heading: "The three statements, startup edition",
            paragraphs: [
              "Income statement (revenue, costs, profit), cash flow statement (where cash comes and goes — the one that kills startups), and balance sheet (what you own and owe). Pre-seed, investors primarily want: monthly revenue, burn, runway, and unit economics.",
              "Projections should be 3 years, monthly for year 1, and built on explicit assumptions (price, conversion, churn, headcount) — not a hockey stick pulled from thin air. Every line should be explainable in one sentence.",
            ],
          },
          {
            heading: "The diligence financials",
            paragraphs: [
              "Investors will ask for: current revenue and ARR/MRR, churn/retention, CAC and payback, gross margin, and the cap table. If those are clean, the full statements rarely get deep scrutiny pre-seed.",
            ],
          },
          {
            heading: "Forecasting discipline",
            paragraphs: [
              "Model the downside as carefully as the upside: what happens if the round takes 6 months longer? Forecasts are stories with numbers — make them credible, and update them as reality diverges.",
            ],
          },
        ],
        keyPoints: [
          "Three statements exist, but pre-seed diligence = revenue, burn, runway, unit economics.",
          "Projections must be explainable line by line.",
          "Model the downside; update as reality diverges.",
          "Clean unit economics reduce diligence to a formality.",
        ],
      },
    ],
    quiz: [
      {
        question: "You have $240K in the bank and net burn of $40K/mo. What's your runway?",
        options: ["4 months", "6 months", "8 months", "12 months"],
        correctIndex: 1,
        explanation:
          "$240K ÷ $40K/mo = 6 months. At 6 months you should already be deep in a raise.",
      },
      {
        question: "Which LTV:CAC ratio is the standard healthy threshold?",
        options: ["1:1", "2:1", "3:1", "5:1"],
        correctIndex: 2,
        explanation:
          "SaaS convention: LTV should be at least 3x CAC, with payback under 12 months.",
      },
      {
        question: "Why should founders pay quarterly estimated taxes?",
        options: [
          "They're optional",
          "To avoid penalties plus interest",
          "Only LLCs need to",
          "Only after Series A",
        ],
        correctIndex: 1,
        explanation:
          "Forgetting quarterly estimates produces penalties plus interest — an avoidable, compounding cost.",
      },
      {
        question: "Cash accounting records revenue when...",
        options: [
          "It's earned",
          "Money actually moves",
          "The invoice is sent",
          "The fiscal year ends",
        ],
        correctIndex: 1,
        explanation:
          "Cash basis = when money moves; accrual = when earned. Cash tells you survival; accrual tells you truth.",
      },
      {
        question: "What should startup projections be built on?",
        options: [
          "A hockey stick",
          "Explicit, explainable assumptions",
          "Investor expectations",
          "Industry averages only",
        ],
        correctIndex: 1,
        explanation:
          "Every projection line should be explainable in one sentence — assumptions drive credibility in diligence.",
      },
    ],
  },
  {
    id: "product",
    title: "Product & Product-Market Fit",
    tagline: "Validate the problem, ship fast, and find the market that pulls you in.",
    icon: "target",
    estimatedHours: "2.5h",
    free: false,
    lessons: [
      {
        id: "product-1",
        title: "Validating the problem before building",
        readMinutes: 8,
        sections: [
          {
            heading: "Interviews over surveys",
            paragraphs: [
              "The most reliable signal is 15-30 customer interviews: specific past behavior, frequency and cost of the problem, what they tried before. Survey data is cheap but lies; observed behavior doesn't.",
              "Ask about the last time the problem happened, not 'would you use this?' — hypotheticals predict nothing. Listen for stories, urgency, and the language customers use to describe the pain (you'll steal that language for your marketing).",
            ],
          },
          {
            heading: "The pain test",
            paragraphs: [
              "A real problem has: frequency (happens often), severity (costs money/time/opportunity), and urgency (they're already paying for workarounds). If customers are stitching together spreadsheets and contractors to solve it today, you have a market.",
              "The famous test: would they be sad if the workaround disappeared? Would they pay to make the pain go away?",
            ],
          },
          {
            heading: "When to stop validating",
            paragraphs: [
              "Stop when interviews stop teaching you something new (thematic saturation) and when a clear subset of customers describes the same pain with the same words. Validation is a tool, not a lifestyle — at some point the only way to learn is to ship.",
            ],
          },
        ],
        keyPoints: [
          "15-30 interviews with specific past behavior > surveys.",
          "Real problems are frequent, severe, and urgent.",
          "Customers already paying for workarounds = market.",
          "Ship when interviews stop teaching you.",
        ],
      },
      {
        id: "product-2",
        title: "The MVP that isn't embarrassing",
        readMinutes: 7,
        sections: [
          {
            heading: "MVP means minimum, not terrible",
            paragraphs: [
              "An MVP must be good enough to be loved by someone, not good enough to be tolerated by everyone. Cut features, not quality: the core workflow should be flawless, and everything else can be manual, stubbed, or absent.",
              "The 'Wizard of Oz' approach — appearing automated while humans do the work behind the scenes — validates demand without building the hard part.",
            ],
          },
          {
            heading: "The MVP scope question",
            paragraphs: [
              "Ask: what is the smallest thing that will make a customer experience the core value? That's the MVP. Features that only complete the picture are the product roadmap, not the MVP.",
              "Set a success metric before launch: activation rate, time-to-value, retention. 'People used it' is not a metric; '40% of signups completed their first deck in 24 hours' is.",
            ],
          },
          {
            heading: "Ship speed is a strategy",
            paragraphs: [
              "Weekly shipping cycles pre-seed: ship a small thing every week, learn, adjust. Momentum compounds — both in the product and in the team's confidence. If a week passes without a ship, the process is broken, not the team.",
            ],
          },
        ],
        keyPoints: [
          "Cut features, not quality — the core flow must be flawless.",
          "Wizard-of-Oz validates demand without building everything.",
          "Define the success metric before you launch.",
          "Weekly ships compound momentum.",
        ],
      },
      {
        id: "product-3",
        title: "Measuring product-market fit",
        readMinutes: 7,
        sections: [
          {
            heading: "The classic signals",
            paragraphs: [
              "Sean Ellis test: 40%+ of users would be 'very disappointed' without your product. Retention curves that flatten above zero (people come back). Organic growth: users inviting users without being asked.",
              "The strongest qualitative signal: customers describing your product to others in their own words, unsolicited.",
            ],
          },
          {
            heading: "The metrics that matter pre-seed",
            paragraphs: [
              "Activation (new users reaching the 'aha' moment), weekly retention (returning users / active users), and the core event completion rate. Cohort charts over time reveal fit; total user counts hide it.",
              "Churn is the silent killer: 5% monthly churn means losing half your base in ~14 months. Fix retention before adding acquisition spend — growth on a leaky bucket wastes capital.",
            ],
          },
          {
            heading: "What to do when you don't have fit",
            paragraphs: [
              "Fit is usually a pivot in market or positioning, not a feature backlog. Talk to the customers who love you most, find the segment that pulls, and reposition the product around them. Keep the code; change the story and the segment.",
            ],
          },
        ],
        keyPoints: [
          "40%+ 'very disappointed' (Sean Ellis) + flat retention + organic growth.",
          "Cohort charts reveal fit; totals hide it.",
          "Fix churn before scaling acquisition.",
          "No fit = pivot segment/positioning, not features.",
        ],
      },
      {
        id: "product-4",
        title: "Iterating on feedback",
        readMinutes: 6,
        sections: [
          {
            heading: "Build-measure-learn, done properly",
            paragraphs: [
              "Each cycle: pick ONE assumption, define the metric that would falsify it, ship the smallest test, and decide based on data. 'We learned a lot' is not learning; a falsified assumption with a decision attached is.",
              "Write the decision in advance: 'if activation stays under 25%, we change onboarding this sprint.' Pre-committed decisions remove post-hoc rationalization.",
            ],
          },
          {
            heading: "Feedback sources, ranked",
            paragraphs: [
              "Usage data first (what people do), support tickets second (what breaks), interviews third (what they say), feature requests last (what they imagine). Users are great at describing problems and terrible at designing solutions.",
              "Channels to ignore politely: the loudest forum voice, the friend who 'would definitely pay for this', and your own feature crush. Triangulate three sources before committing a sprint.",
            ],
          },
          {
            heading: "The roadmap discipline",
            paragraphs: [
              "Keep a public-facing roadmap short (the next 3 things), and a private backlog long. Everything not in the next 3 is negotiable — the market can and will reprioritize it.",
            ],
          },
        ],
        keyPoints: [
          "One assumption, one falsifiable metric, one test per cycle.",
          "Pre-commit the decision before running the experiment.",
          "Usage data > interviews > feature requests.",
          "The next 3 things are the roadmap; everything else is negotiable.",
        ],
      },
    ],
    quiz: [
      {
        question: "What's the most reliable validation signal?",
        options: [
          "Survey results",
          "Specific past behavior in interviews",
          "Twitter reactions",
          "Ad click-through rates",
        ],
        correctIndex: 1,
        explanation:
          "Interviews about specific past behavior reveal real frequency, severity, and urgency. Hypotheticals predict nothing.",
      },
      {
        question: "The Sean Ellis test threshold is...",
        options: ["20%", "30%", "40%", "60%"],
        correctIndex: 2,
        explanation:
          "40%+ of users saying they'd be 'very disappointed' without the product indicates product-market fit.",
      },
      {
        question: "5% monthly churn means you lose half your customers in roughly...",
        options: ["3 months", "6 months", "14 months", "24 months"],
        correctIndex: 2,
        explanation:
          "0.95^14 ≈ 0.49. Half your base is gone in about 14 months — fix churn before scaling spend.",
      },
      {
        question: "Wizard-of-Oz testing means...",
        options: [
          "Building the full product secretly",
          "Humans doing the work behind a product facade",
          "Using AI to build",
          "A/B testing two versions",
        ],
        correctIndex: 1,
        explanation:
          "You appear automated while humans do the work — validating demand without building the hard part.",
      },
      {
        question: "The best feedback source is...",
        options: ["Feature requests", "Usage data", "Friend opinions", "Forum complaints"],
        correctIndex: 1,
        explanation:
          "Usage data shows what people actually do. Feature requests show what they imagine — a poor predictor.",
      },
    ],
  },
  {
    id: "gtm",
    title: "Go-to-Market & Sales",
    tagline: "Position, reach, and sell — the skills that turn product into revenue.",
    icon: "megaphone",
    estimatedHours: "2h",
    free: false,
    lessons: [
      {
        id: "gtm-1",
        title: "Positioning that wins",
        readMinutes: 7,
        sections: [
          {
            heading: "Positioning is choosing a fight you can win",
            paragraphs: [
              "Positioning answers: who is this for, what's the category, what's the alternative they'd use instead, and why you're the obvious choice. 'We do X for Y' is not positioning — it's a description.",
              "The most powerful positioning frames compete against the status quo, not the incumbent: 'the spreadsheet that runs your fundraising' beats 'a CRM for founders'.",
            ],
          },
          {
            heading: "The one-sentence test",
            paragraphs: [
              "If your customer can't repeat your pitch in one sentence to another founder, your positioning isn't built yet. Test it in interviews: after describing your product, ask them to explain it back.",
              "Steal the customer's own words — their vocabulary is your copy. 'We help founders stop juggling spreadsheets' (their words) outperforms 'integrated SaaS orchestration' (your words).",
            ],
          },
          {
            heading: "Segment ruthlessly",
            paragraphs: [
              "The market is not 'startups' — it's 'SaaS founders post-seed with a headcount under 10 who sell B2B'. A narrow segment you can name and reach beats a broad one you can't. Positioning narrows; revenue broadens.",
            ],
          },
        ],
        keyPoints: [
          "Positioning = who, category, alternative, and why you win.",
          "Compete against the status quo, not the incumbent.",
          "One-sentence repeatability is the test.",
          "Narrow segments win; broad ones stall.",
        ],
      },
      {
        id: "gtm-2",
        title: "Channels that work pre-seed",
        readMinutes: 7,
        sections: [
          {
            heading: "Founder-led everything",
            paragraphs: [
              "Pre-seed, the founder is the channel: content, community, direct outreach, and personal network. Channels don't exist yet; credibility transfers from the founder to the product.",
              "Pick ONE organic channel and go deep (newsletter, X, LinkedIn, niche community) before adding a second. Founder-led channels compound: every post is both acquisition and feedback loop.",
            ],
          },
          {
            heading: "The 80/20 of paid and partnerships",
            paragraphs: [
              "Paid ads rarely work pre-seed — you lack the data to buy attention profitably. Instead: partnerships (a complementary product's users), integrations, and communities where your segment already gathers.",
              "Measure channel economics per channel: CAC, conversion, and activation quality. Kill channels that bring signups that don't activate.",
            ],
          },
          {
            heading: "Organic loops",
            paragraphs: [
              "Build referral and content loops early: shareable results (the pitch deck you made), invites, and case studies. A loop is growth without a budget — the only kind pre-seed companies can afford.",
            ],
          },
        ],
        keyPoints: [
          "The founder is the channel pre-seed.",
          "One organic channel, gone deep, before the second.",
          "Partnerships beat paid ads pre-seed.",
          "Build loops: shareable outputs are free growth.",
        ],
      },
      {
        id: "gtm-3",
        title: "Selling before you have a sales team",
        readMinutes: 8,
        sections: [
          {
            heading: "The founder sales script",
            paragraphs: [
              "Qualify early: budget, authority, need, timing. Then sell outcomes, not features: 'you'll save 10 hours a week on fundraising admin' beats 'we have automated pipelines'.",
              "The standard call structure: 5 min context, 15 min problem discovery, 10 min demo tied to their problem, 10 min next steps with a commitment. Demo the pain you discovered, not the menu of features.",
            ],
          },
          {
            heading: "Objections and price",
            paragraphs: [
              "Price objections are usually value objections in disguise: 'too expensive' means 'I don't believe it's worth it for me.' Re-anchor on the cost of the problem: what did the last month of manual work cost?",
              "When you hear the same objection twice, fix the product or the positioning — don't just practice the reply.",
            ],
          },
          {
            heading: "The pipeline discipline",
            paragraphs: [
              "Keep a simple CRM (even a spreadsheet): every conversation has a next step with a date, and every deal has a stage. Follow-up cadence: 24 hours, then weekly, then a breakup email at 3 months.",
              "Sales velocity pre-seed = meetings booked × close rate ÷ cycle time. Track those three numbers weekly and the funnel tells you what to fix.",
            ],
          },
        ],
        keyPoints: [
          "Qualify: budget, authority, need, timing — then sell outcomes.",
          "Demo the discovered pain, not the feature menu.",
          "Price objections are value objections.",
          "Every conversation gets a dated next step; track the funnel weekly.",
        ],
      },
      {
        id: "gtm-4",
        title: "Retention and the revenue flywheel",
        readMinutes: 6,
        sections: [
          {
            heading: "Revenue is a retention problem",
            paragraphs: [
              "Acquisition fills the top of the funnel; retention determines whether the funnel is a business. The flywheel: retained customers → referrals and case studies → cheaper acquisition → better product data.",
              "Measure cohort retention weekly from the first week you have customers. The cohort chart is the single most honest document in the company.",
            ],
          },
          {
            heading: "Expansion and churn prevention",
            paragraphs: [
              "Pre-seed expansion is mostly upgrades (more seats, higher plans). Churn prevention is mostly onboarding: the first-week experience predicts lifetime behavior.",
              "Reach out personally to every customer who churns or downgrades. The reasons are your roadmap, priced in real dollars.",
            ],
          },
          {
            heading: "When to build a real sales team",
            paragraphs: [
              "Hire your first salesperson when you have repeatable discovery (you can write the call script from memory) and the founder's time is the constraint. Before that, sales is still the founder's job.",
            ],
          },
        ],
        keyPoints: [
          "The cohort chart is the most honest document you own.",
          "Onboarding predicts retention; fix week one.",
          "Every churn reason is roadmap data, priced in dollars.",
          "Hire sales when discovery is repeatable and founder time is the constraint.",
        ],
      },
    ],
    quiz: [
      {
        question: "What is positioning, at its core?",
        options: [
          "A tagline",
          "Choosing a fight you can win",
          "A features list",
          "A pricing model",
        ],
        correctIndex: 1,
        explanation:
          "Positioning = who it's for, the category, the alternative, and why you win. It's a strategic choice, not copy.",
      },
      {
        question: "The best channel strategy pre-seed is...",
        options: [
          "Broad paid ads",
          "One organic channel, gone deep",
          "Billboard advertising",
          "App store optimization",
        ],
        correctIndex: 1,
        explanation:
          "Founder-led organic channels compound and double as feedback loops; paid ads lack data to be profitable pre-seed.",
      },
      {
        question: "A price objection usually means...",
        options: [
          "Lower the price immediately",
          "The value hasn't been established",
          "They can't afford it ever",
          "Offer a discount",
        ],
        correctIndex: 1,
        explanation:
          "'Too expensive' is usually 'I don't believe it's worth it for me.' Re-anchor on the cost of the problem.",
      },
      {
        question: "What's the most honest document in the company?",
        options: [
          "The pitch deck",
          "The cohort retention chart",
          "The feature roadmap",
          "The press release",
        ],
        correctIndex: 1,
        explanation:
          "Cohort retention shows what actually happens, week after week, unobscured by growth totals.",
      },
      {
        question: "When should you hire your first salesperson?",
        options: [
          "At incorporation",
          "When discovery is repeatable and founder time is the constraint",
          "After 100 employees",
          "Never — founders sell forever",
        ],
        correctIndex: 1,
        explanation:
          "Repeatable discovery (scriptable calls) + founder time as bottleneck = the moment sales becomes a hire.",
      },
    ],
  },
];

export function getTrack(trackId: string): AcademyTrack | undefined {
  return ACADEMY_TRACKS.find((t) => t.id === trackId);
}
