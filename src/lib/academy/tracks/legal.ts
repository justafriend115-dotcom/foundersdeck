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
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your company's 'entity' is the legal box it lives in. The box decides who pays what tax, how you get money from investors, and how much paperwork you do.",
            "Most startups pick one of two boxes: an LLC or a C-Corp. The right choice depends mostly on one question: will you raise money from venture investors?",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Picking an LLC because it feels simpler, then raising money later. Converting an LLC into a C-Corp is a taxable event, which means you can owe real money just for switching.",
            "Incorporating in Delaware when you will never raise money. You pay Delaware franchise fees every year for no benefit.",
            "Incorporating in your home state when you plan to raise. Investors and their lawyers expect Delaware paperwork, and re-doing it later costs time and money.",
            "Letting a friend or an online form pick your entity for you. The choice depends on your specific plan, not on what someone else did.",
          ],
        },
        {
          heading: "Why the structure matters",
          paragraphs: [
            "Your entity type decides how you are taxed, how you raise money, how you are governed, and how much paperwork you carry. Most founders pick between an LLC and a C-Corp, and the choice is driven by one question: do you plan to raise venture capital?",
            "An LLC is pass-through taxed. That means profits flow to the owners, and they are taxed once on their personal returns. The LLC is flexible about how it splits ownership, and it is cheap to maintain. No corporate tax drama, just simple annual paperwork.",
            "A C-Corp is a separate taxable entity. The company pays corporate tax, and shareholders pay tax on dividends. That is why people call it 'double taxation.' But the C-Corp can issue preferred stock, run an option pool for employees, and use the standard documents every investor expects. If you want venture money, you basically need these tools.",
            "The trap founders fall into: building a VC-bound company as an LLC because it felt simpler, then paying a taxable conversion later. Or the opposite: paying Delaware franchise fees and double-taxed salaries for a business that will never raise.",
          ],
        },
        {
          heading: "The decision framework",
          paragraphs: [
            "Raise venture money now or within about 24 months? Go with a Delaware C-Corp. Run a profitable services or product business with no institutional money? Go with an LLC, often in your home state. Plan to take on a strategic partner or be acquired by a larger company? Go with a C-Corp usually, because acquirers want a clean equity structure.",
            "If you are undecided, the safe default for a technology startup with ambition is a Delaware C-Corp. It costs a little more per year, but it removes the biggest structural conversion risk you will ever face.",
            "Also think about the future. You can always add an LLC later for side projects, but you almost never want to move backwards from a C-Corp. Structural changes are much cheaper when the company is worth little, so decide early.",
          ],
        },
        {
          heading: "State of incorporation",
          paragraphs: [
            "Delaware dominates startup incorporation because its corporate law is settled, its Court of Chancery is fast and predictable, and every VC's template documents are built for it. You can be a Delaware company while operating anywhere in the world.",
            "If you never expect institutional investors, incorporate where you operate to avoid Delaware's annual franchise tax and foreign-qualification filings.",
            "Either way, do it once, correctly, with a service or a lawyer. Amateur incorporation errors surface at the worst moment: due diligence.",
          ],
        },
      ],
      examples: [
        "Maya wants to raise a $1.5M seed in 12 months. She chooses a Delaware C-Corp even though she is a solo founder in Texas. The conversion cost of doing it later (a taxable event) far exceeds the ~$300 per year Delaware fees.",
        "Jon runs a successful productized service. He keeps an LLC in California: pass-through taxes, no franchise tax, and he never needs preferred stock.",
        "Priya is not sure if she will raise. She picks a Delaware C-Corp anyway as the safe default. Six months later an angel wants in, and her structure is already ready.",
        "Diego forms an LLC because his co-founder said it was 'simpler.' Two years later an investor offers a term sheet, and Diego pays lawyers $15K plus a taxable conversion to switch to a C-Corp.",
        "Sam runs a local agency and never wants investors. He incorporates in his home state as an LLC and saves the Delaware franchise fee every single year.",
      ],
      actionItems: [
        "Write one paragraph: 'Will I seek VC funding within 24 months? Yes or No, and why.'",
        "Compare Delaware franchise tax vs. your home state's costs with a 10-minute search.",
        "List 3 consequences of picking the wrong entity, and your mitigation for each.",
        "Ask one founder you respect which entity they chose and whether they would change it.",
        "If you already incorporated, write down whether your choice still matches your plan.",
      ],
      keyPoints: [
        "VC-bound means Delaware C-Corp. Bootstrapped means LLC.",
        "LLC = pass-through tax, flexible, cheap. C-Corp = preferred stock, option pools, standard docs.",
        "Converting LLC to C-Corp later is a taxable event.",
        "Delaware is the default for fundraising companies.",
        "Structural changes are cheapest while the company is worth little.",
        "If you are undecided, pick the Delaware C-Corp as the safe default.",
      ],
    },
    {
      id: "legal-2",
      title: "Incorporation step-by-step",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Incorporation is the official act of creating your company on paper. You file some forms, issue yourself some shares, and open a bank account, and now your company is real and separate from you.",
            "This lesson walks you through the exact steps so you do not forget the ones that hurt later.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Missing the 83(b) deadline. You have 30 days from getting your shares, and missing it can create a giant tax bill years later.",
            "Operating as if the company does not exist. If you sign contracts personally or pay with personal cards for months, you blur your liability protection and create a mess in diligence.",
            "Doing nothing after incorporation. Forgetting annual reports, franchise taxes, and board minutes turns a five-minute upload into a two-week scramble later.",
            "Skipping the paperwork because it feels like theater. Investors check minutes, ledgers, and signatures, and a missing signature can stall a whole round.",
          ],
        },
        {
          heading: "The full checklist",
          paragraphs: [
            "1) Name: pick and check trademark (USPTO TESS) plus domain and social handles. 2) File the Certificate of Incorporation with the state (Delaware: $90 + franchise tax). 3) Appoint initial directors. 4) Authorize and issue founder shares. 5) Adopt bylaws. 6) Get an EIN from the IRS (free, instant online). 7) Open a business bank account (requires the EIN and the certificate). 8) Register for state taxes and franchise tax where required. 9) Set up bookkeeping and a separate card.",
            "Services like Stripe Atlas, Clerky, or a startup lawyer handle steps 2-5 for a flat fee. What they cannot do is make your founder decisions: ownership split, vesting, and IP. Those are the real work, and they are yours to do.",
            "The order matters less than completeness. The classic screw-up: incorporating, then operating for six months as if the entity did not exist, signing contracts personally and paying with personal cards, which blurs liability protection and creates a mess in diligence.",
          ],
        },
        {
          heading: "The 83(b) election: non-negotiable",
          paragraphs: [
            "When you receive restricted stock (shares that vest over time), the IRS treats the spread between fair market value and your purchase price as ordinary income as each tranche vests. If you bought shares at par (pennies), the FMV is also low at grant. So the tax on the spread is tiny if you file an 83(b) election within 30 days of receiving the shares.",
            "Miss the window and you cannot file later (with rare exceptions). Each vesting tranche then gets taxed at its then-current FMV, and if the company grew, that is ordinary income on a large amount, on top of your salary. Founders have owed six figures for a mistake that cost one hour and one stamp.",
            "File in duplicate (one copy to the IRS, one to the company), by certified mail, and keep proof. Do it the day you get your shares. This applies to co-founders and early employees with restricted stock alike.",
          ],
        },
        {
          heading: "Post-incorporation housekeeping",
          paragraphs: [
            "Keep the company current: annual reports, franchise taxes, board meeting minutes (even for small boards, note the decisions), a share ledger, and a cap table you actually maintain. These feel like bureaucracy until an investor or acquirer asks, and then they are either a five-minute upload or a two-week scramble.",
            "Also adopt an independent contractor agreement and a stock plan for future grants now, while there is no pressure, so hiring later is a form-fill instead of a legal project.",
            "Set a simple reminder system: one calendar entry per year for the annual report, one for the franchise tax, and one for a board minutes review.",
          ],
        },
      ],
      examples: [
        "Nina files her 83(b) election by certified mail the same day she signs her founder shares. Two years later the company is worth $20M, and her early filing kept her founder tax bill to hundreds of dollars instead of millions in ordinary income.",
        "A founder misses 83(b). His company later raises at a $30M valuation, and his first vesting tranche is taxed at FMV: a bill bigger than his annual salary.",
        "Tom incorporates with Stripe Atlas on a Friday. On Monday he signs a client contract personally, because he has no EIN yet. A year later that client sues, and Tom is personally on the hook instead of the company.",
        "Lena files her certificate, gets her EIN, and opens a business bank account the same week. When her first investor asks for proof of company formation, she uploads everything in two minutes.",
        "A founder forgets Delaware's annual franchise tax for three years. When diligence asks for good standing, the state flags the company, and the fix takes weeks of calls.",
      ],
      actionItems: [
        "Verify whether you (or your co-founders) filed 83(b) within 30 days of share issuance. If not and you are still within the window, file today.",
        "Confirm you have: EIN, business bank account, bylaws, initial minutes, share ledger.",
        "Buy the domain and check USPTO TESS for your name: 10 minutes, do it now.",
        "Set calendar reminders for annual report, franchise tax, and minutes review.",
        "Save proof of your 83(b) filing (certified receipt plus copy) in your company folder.",
        "Write the name and contact of the person who will maintain your cap table.",
      ],
      keyPoints: [
        "Incorporation = file, issue shares, bylaws, EIN, bank account, taxes.",
        "File the 83(b) within 30 days, certified, duplicated, with proof.",
        "Keep the company current: minutes, franchise tax, cap table, share ledger.",
        "Sign a contractor agreement and stock plan before you need them.",
        "Do not operate as if the company does not exist after you file.",
        "One hour of filing now beats two weeks of scramble later.",
      ],
    },
    {
      id: "legal-3",
      title: "Founder agreements and IP assignment",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A founder agreement is a written deal between the founders about who owns what, who does what, and what happens if someone leaves.",
            "IP assignment means the company legally owns the code and content people build for it. If you skip both, you are betting your company on memory and goodwill.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Splitting equity verbally. If you say 'we will figure it out later,' the leaver keeps their full share when they quit, and nobody will invest into that mess.",
            "Letting contractors work without an IP assignment. The person who writes your code may legally own it if you never made them sign.",
            "Forgetting IP created before the company existed. If a founder built the core product at a previous job, that employer may own it.",
            "Making the agreement vague on purpose to avoid awkward conversations. Awkward now, expensive later. Be explicit.",
          ],
        },
        {
          heading: "The founder agreement",
          paragraphs: [
            "A founder agreement is the constitution of your company before you have a constitution. It covers: ownership split, vesting schedule, IP assignment (the company owns everything built), roles and responsibilities, decision rights, what happens on departure (death, disability, voluntary exit, termination), and non-solicitation of the company's people.",
            "The most expensive sentence in early startup history is 'we are all founders, we will figure it out.' Figure it out now, in writing. The agreement does not need to be long. It needs to be explicit.",
            "Key clauses to get right: buyback rights (the company can repurchase unvested shares from a departing founder at cost), garden-leave or non-compete scope (enforceability varies by state), and what happens to IP created before incorporation, which must be signed over in writing.",
          ],
        },
        {
          heading: "IP assignment: the invisible moat",
          paragraphs: [
            "Under US law, work you create belongs to you unless assigned. For a startup, that means every founder, employee, and contractor must sign a Confidential Information and Invention Assignment Agreement (a CIIAA) assigning IP to the company BEFORE they start work.",
            "The contractor CIIAA is the one founders forget. A contractor who writes your code without an assignment agreement may legally own that code. Fixing it later means a retroactive assignment, possible but legally fragile, and contractors have leverage.",
            "Also check: did any founder build the core IP before the company existed, possibly at a previous employer or university? Prior-IP assignments (what stays with the founder vs. what goes to the company) prevent nasty fights with universities and former employers during diligence.",
          ],
        },
        {
          heading: "The 20-minute self-audit",
          paragraphs: [
            "Answer these on paper: (1) Who owns what percentage, and does the paperwork say so? (2) Is all code, design, and content assigned to the company in writing? (3) Is there any IP created outside the company that the company now depends on? (4) What happens to each founder's equity if they leave tomorrow? (5) Who can sign contracts for the company?",
            "If any answer is 'I don't know,' that is your next legal task. These five answers are what a seed investor's lawyer asks for first.",
          ],
        },
      ],
      examples: [
        "Two founders split 50/50 verbally. After 9 months one quits. There is no buyback clause, so the leaver keeps 50% of a company they do not work for. That is a dead company, because nobody will invest into that structure.",
        "A startup hired a contractor who built its entire backend. No CIIAA. The contractor later holds the code hostage over unpaid invoices. A proper assignment would have made this a non-event.",
        "Kofi built his product's prototype while working at a big tech company, on a company laptop. When his startup files patents, the old employer claims ownership, and the startup loses months and legal fees.",
        "Amara's university owns research she did in her master's program. Her startup uses that research as its core tech. Her lawyer negotiates a license with the university before the seed round, which keeps investors happy.",
        "A startup with three founders writes the founder agreement a year late. One founder has done 10% of the work but still holds 33%. Re-negotiating under pressure is far harder than writing it at the start.",
      ],
      actionItems: [
        "Download a standard founder agreement template and fill in the 5 audit answers.",
        "Confirm every person who has written code or made content for you has signed an IP assignment.",
        "List all IP created before incorporation and decide who owns it, in writing.",
        "Ask each co-founder to do the 5-question audit separately, then compare answers.",
        "Put the signed founder agreement and all CIIAAs in one folder and tell your co-founders where it lives.",
        "Set a date, within 30 days, to sign or update all of these documents.",
      ],
      keyPoints: [
        "Founder agreement: split, vesting, IP, roles, exit, explicit and written.",
        "CIIAAs before work starts, for employees AND contractors.",
        "Prior-IP clauses prevent university and employer fights in diligence.",
        "If you cannot answer the 5 audit questions, that is your next task.",
        "Verbal splits are the most expensive sentence in startup history.",
        "Contracts protect relationships, they do not threaten them.",
      ],
    },
    {
      id: "legal-4",
      title: "Vesting and the option pool",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Vesting means you earn your shares over time instead of getting them all at once.",
            "The option pool is a pile of shares saved for future employees. Both exist to make sure people earn what they own, and both have math that every founder should understand.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Accepting the investor's pool size without arithmetic. A bigger pool comes out of your ownership, not theirs.",
            "Granting shares without an adopted stock plan. A pool on paper is fiction until the plan exists and grants are signed.",
            "Skipping the cliff conversation. A one-year cliff means a short-term hire walks away with nothing, which is exactly what you want.",
            "Forgetting that employees dilute you too. Every time someone vests, the pie is fixed, and everyone dilutes proportionally.",
          ],
        },
        {
          heading: "How vesting works mechanically",
          paragraphs: [
            "Standard: 4 years, 1-year cliff, monthly vesting after. Nothing vests in the first year; at the 12-month mark 25% vests; then 1/48 of the grant vests each month. Early exercise (paying for unvested shares and filing 83(b)) lets employees start their capital-gains clock early.",
            "Founders sometimes negotiate accelerated vesting on acquisition (for example, 50% of unvested shares accelerate if the company is sold). That is a retention and incentive tool that also shapes acquisition math.",
            "The cliff is your friend. If a hire leaves at month 9, they get nothing, and their shares go back to the pool. That protects the company from rewarding people who did not stay.",
          ],
        },
        {
          heading: "The option pool: who really pays",
          paragraphs: [
            "The option pool is the block of shares reserved for future employees, typically 10-20% of the company. It is created before or at a priced round, and here is the crux: the pool is carved out of the PRE-money valuation, so it dilutes the founders, not the new investors. A $10M pre-money with a 20% pool means founders' equity is effectively valued at $8M.",
            "This is why pool size is a negotiation, not a formality. Investors push for a bigger pool (more room to hire); founders want it smaller and topped-up in later rounds. Knowing the arithmetic before the meeting lets you push back with numbers, not emotion.",
            "Rule of thumb for size: 10% for a small early team, up to 15-20% if you are hiring aggressively or the team is unproven. Whatever you reserve, the plan must actually be adopted (the stock plan plus grants), or the pool is fiction.",
          ],
        },
        {
          heading: "Cap table math every founder should do by hand",
          paragraphs: [
            "Model: start with 10,000,000 shares. Founders own 6M, option pool 2M, reserve 2M. Now you raise $2M at $8M pre-money, and the investor gets 20% (2M post / 10M post). The pool is NOT part of your ownership, it belongs to future hires. When an employee vests pool shares, the pie is fixed, and everyone dilutes proportionally.",
            "Always compute post-money ownership after each hypothetical round before you negotiate. 'I own 60% of a company that raised at $10M' sounds good; '60% pre-money, 45% after the pool and this round' is reality.",
            "Do the math in a spreadsheet and keep the model. You will reuse it for every future round, and it will stop you from making emotional concessions in the room.",
          ],
        },
      ],
      examples: [
        "A founder proposes a 20% pool at a $5M pre-money raise. The founders compute: effective valuation for founders = $5M x (1 - 0.20) = $4M. They counter with 12% and an agreement to top up at Series A, keeping $400K of value.",
        "An early engineer's 0.5% grant vests over 4 years with a cliff. She leaves at month 14, keeping her 25% plus 2 months: a trivial cost to the company, and exactly the alignment that protects it.",
        "Raj joins a startup and his shares vest over 4 years with a 1-year cliff. The company gets acquired at month 30. He keeps only his vested portion, which is exactly what the investors and founders agreed to.",
        "A startup grants 1% to a friend 'for advice' without vesting. The friend leaves in month 2 and keeps 1% forever, and every future round gets 1% messier.",
        "An investor asks for a 25% pool at a $10M pre-money. The founder shows the math: a 25% pool means her effective valuation is $7.5M, not $10M. They settle on 15%, and the founder keeps $500K of value.",
      ],
      actionItems: [
        "Open a spreadsheet and model: founders %, pool %, post-money investor % after your next round.",
        "Decide your opening pool-size position and your walk-away number.",
        "Confirm your stock plan is actually adopted before you grant anything.",
        "Re-read your grants: do they have a cliff, vesting schedule, and acceleration terms?",
        "Compute what happens to your ownership after two future rounds, and write it down.",
        "Review who has unvested vs. vested shares today, and update the ledger.",
      ],
      keyPoints: [
        "4 years / 1-year cliff / monthly is the standard for founders and employees.",
        "The option pool dilutes founders, not new investors, so negotiate the number.",
        "Compute post-money ownership by hand before negotiating.",
        "A pool is fiction until the stock plan exists and grants are signed.",
        "The cliff protects you from rewarding people who do not stay.",
        "Keep a spreadsheet model and update it after every round.",
      ],
    },
    {
      id: "legal-5",
      title: "Contracts every founder must understand",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Contracts are just written promises about money, work, and blame. You will sign many of them, and almost all of the danger lives in five clauses.",
            "This lesson teaches you to spot the dangerous ones so nothing sneaks up on you.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Signing the customer's contract without reading the liability clause. Uncapped liability can cost more than your first year of revenue.",
            "Letting contracts auto-renew. A forgotten 90-day notice window can drain your runway for a service you no longer use.",
            "Never checking who owns the work. A 'work for hire' line in a consulting agreement is not always enough.",
            "Treating every contract the same. Your templates for customers are different from their templates for you, and only the second one needs a lawyer's eyes.",
          ],
        },
        {
          heading: "The contracts you will sign repeatedly",
          paragraphs: [
            "MSA (Master Services Agreement) and SOW (Statement of Work) for service work. SaaS terms of service plus privacy policy for your product. NDAs (mutual vs. one-way) for conversations. Consulting agreements with IP assignment. Commercial leases. Terms with any payment processor or marketplace you depend on.",
            "You do not need to become a lawyer, but you must be able to read the 5 clauses that matter: indemnification, limitation of liability, payment terms, termination, and IP ownership.",
            "Keep a simple map of your contracts: who, what, when it renews, and how to cancel. Thirty minutes of organization now saves you from surprises later.",
          ],
        },
        {
          heading: "Reading the dangerous clauses",
          paragraphs: [
            "Indemnification: who is liable if your software breaks something at a customer? Unbounded indemnities from a startup are a risk you cannot price. Limitation of liability: the standard is 'liability capped at fees paid.' Anything above that is a red flag for an early-stage company. Auto-renewal: when does this contract silently renew, and can you exit? IP ownership: does the work-for-hire clause actually assign the work?",
            "Also watch 'most favored nation' pricing clauses (a big customer can retroactively force you to match a cheaper deal you give anyone else) and exclusivity, since both can box you in.",
            "Payment terms matter too: net 30 vs. net 90 is the difference between cash in hand and a receivables hole. And read the termination clause twice: notice periods and fees for early exit are where surprises hide.",
          ],
        },
        {
          heading: "When to pay a lawyer",
          paragraphs: [
            "The rule: templates for inbound (your terms), a lawyer for outbound (their terms). Reviewing a customer's redline of your template is worth the ~$500-1,000. Signing a customer's aggressive MSA without review can cost more than your first year of revenue in a single indemnity clause.",
            "Keep every signed contract in a folder with the counterparty, date, and parties, because your data room starts here.",
            "You do not need a lawyer for every email thread. You need one for anything that changes money, ownership, or blame.",
          ],
        },
      ],
      examples: [
        "A startup signs a customer's MSA with an uncapped indemnity. Their software has an outage that costs the customer $300K in lost sales, and the startup, not its insurer, is on the hook because liability was never capped.",
        "A SaaS's terms auto-renew annually with a 90-day termination window. The founder forgets, and a year of unused platform fees drain the runway for a service they no longer use.",
        "Maria's consulting agreement says 'work for hire,' but the state law where the client sits says otherwise. When she leaves, the client claims the code, and it takes a lawyer to sort out who owns it.",
        "A founder signs a customer contract with net 90 payment terms. By the time the customer pays, payroll is late twice, and the founder realizes payment terms are cash-flow terms.",
        "Tom's startup signs a 'most favored nation' clause with a big customer. Later he gives a small startup a discount to win the deal, and the big customer retroactively demands the same price, eating his margin.",
      ],
      actionItems: [
        "Audit every contract you have signed: find the indemnity, liability cap, auto-renew, and IP clauses.",
        "Adopt your own MSA + SOW templates with capped liability.",
        "Set up a contracts folder with counterparty + dates, and a 60-day renewal calendar.",
        "Write a one-line summary of each contract's termination notice period.",
        "Read one contract end to end this week, and underline every number you find.",
        "Before you sign anything new, ask: who is on the hook, and how do we get out?",
      ],
      keyPoints: [
        "The 5 clauses: indemnity, liability cap, payment, termination, IP ownership.",
        "Uncapped indemnity + no liability cap = red flags for a startup.",
        "Templates inbound; lawyer review for their redlines.",
        "A renewal calendar prevents silent auto-renewals bleeding runway.",
        "Payment terms are cash-flow terms.",
        "Always know how to get out before you sign.",
      ],
    },
    {
      id: "legal-6",
      title: "Securities law and fundraising compliance",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "When you sell pieces of your company, the government treats it like selling stocks on a market, and there are rules about who you can sell to and how you advertise.",
            "The rules are simpler than they sound, but breaking them quietly can cost you everything.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Telling the world about your round. Under 506(b) you cannot market publicly at all, and a single tweet can break the exemption.",
            "Trusting a checkbox for accredited status. Under 506(c) you must actually verify income or assets with documents.",
            "Forgetting Form D. It is a simple filing due within 15 days of the first sale, and skipping it is a real violation.",
            "Exaggerating your numbers in public. Anti-fraud rules apply to every claim you make, and diligence will test each one.",
          ],
        },
        {
          heading: "The rules you cannot afford to guess",
          paragraphs: [
            "In the US, selling equity or equity-like instruments (SAFEs and notes count) is 'selling securities,' regulated by the SEC under the Securities Act of 1933. Private placements rely on Regulation D: Rule 506(b) lets you raise an unlimited amount from unlimited accredited investors and up to 35 non-accredited, but with NO general solicitation (no public marketing). Rule 506(c) allows public solicitation but requires you to VERIFY accredited status with income or asset documentation, not just a checkbox.",
            "Accredited investor thresholds (current): net worth over $1M excluding primary residence, OR income over $200K (or $300K joint) in each of the last two years. Newer rules also allow investments based on 'knowledgeable employee' or revenue-based tests for certain funds, but for a startup raising from individuals, the classic tests apply.",
            "Non-accredited investors: taking them under 506(b) is legal, but every state has its own registration requirements (merit review), which is a compliance maze. Most founders simply raise from accredited investors only. It is cleaner, and most angel money is accredited anyway.",
          ],
        },
        {
          heading: "Anti-fraud rules apply to everything",
          paragraphs: [
            "Rule 10b-5: no misleading statements or omissions, in ANY medium, to anyone. That includes your website, your pitch email, your podcast appearance, and what you tell the press. Saying you are raising a $2M round at a $15M valuation when it is actually a $1M round at a $5M valuation is fraud, even if it is what 'everyone says.'",
            "The practical consequence: keep your public claims defensible. If you say '500 customers,' be able to show 500. If your ARR is 'run-rate,' label it. Diligence will test every claim you made in public, and investors who catch a stretch stop believing everything else.",
          ],
        },
        {
          heading: "The compliance paperwork",
          paragraphs: [
            "For a 506 offering: file Form D with the SEC within 15 days of the first sale. Provide a disclosure document if any non-accredited investors participate. Keep the subscriber questionnaire and accredited-investor verification for every investor (you will need them to prove compliance). Many platforms (AngelList, syndicates) handle this for you; direct raises do not.",
            "If you use a platform or a lead investor with a fund, confirm they handle 506(c) verification and KYC, and do not assume.",
          ],
        },
        {
          heading: "State level",
          paragraphs: [
            "Federal exemption does not automatically exempt state 'blue sky' laws. Under the JOBS Act, 506 offerings preempt most state registration, with notice filings in some states. For 506(b) with only accredited investors, most states require only a notice filing or nothing.",
            "Check the states where your investors reside. This is a two-page form, not a reason to panic, but it is real.",
          ],
        },
      ],
      examples: [
        "A founder says in a demo-day pitch 'we are raising $2M at $20M post,' but the actual terms are a $1.5M SAFE with no valuation. An investor's lawyer sees the mismatch, the investor pulls out, and the founder's credibility is gone.",
        "Under 506(c), a founder markets publicly but only verifies one investor's status after wiring. The SEC later asks for documentation, and she has none. Best case, fines; worst case, rescission rights for investors.",
        "Ben uses 506(b) and tweets 'closing our round, DM me if interested.' That is general solicitation. The exemption is compromised, and the raise needs restructuring with a lawyer.",
        "A founder raises from 40 non-accredited friends under 506(b) without disclosure documents. A year later one friend complains, and the state demands registration filings the founder never made.",
        "Nina files Form D on day 10 of her raise and keeps verification docs for every investor. When her lead investor's counsel asks for compliance evidence, she uploads the folder in minutes, and the round closes on schedule.",
      ],
      actionItems: [
        "State in writing which exemption you intend to use (506(b) vs 506(c)) and how you will verify investors.",
        "Prepare the accredited-investor verification workflow (income docs / CPA letter / broker confirmation) before your first close.",
        "Set a reminder to file Form D within 15 days of first sale.",
        "Review your public claims (website, posts, decks) for anything that could not survive a diligence check.",
        "List the states where your investors live and check their notice-filing requirements.",
        "Confirm whether your platform or lead handles verification and KYC, in writing.",
      ],
      keyPoints: [
        "506(b): no solicitation, accredited + up to 35 non-accredited. 506(c): solicitation OK, verification required.",
        "Anti-fraud (10b-5) applies to every public statement, so keep claims defensible.",
        "File Form D within 15 days; keep verification records per investor.",
        "Blue-sky notice filings vary by state, so check where investors live.",
        "A single tweet can break your 506(b) exemption.",
        "Compliance is paperwork, not magic, and platforms can handle most of it.",
      ],
    },
    {
      id: "legal-7",
      title: "Data protection and privacy basics",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "If you collect information about people, the law cares about how you store and use it.",
            "Different countries have different rules, and they apply based on who your users are, not where you are incorporated. The fix is mostly good habits plus one honest policy page.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Ignoring GDPR because you are not in Europe. If even one customer is in the EU or UK, it applies to their data.",
            "Writing a privacy policy that promises things your code does not do. A mismatch is worse than no policy.",
            "Sending personal data into AI tools that train on it. That can break your obligations and your customer trust.",
            "Forgetting your vendors. You are responsible for what you send to Mailchimp, Stripe, and analytics tools, so each needs a data processing agreement.",
          ],
        },
        {
          heading: "Which rules apply to you",
          paragraphs: [
            "GDPR applies if you process EU/UK personal data, even one customer there. CCPA/CPRA applies if you do business in California and meet thresholds (25K+ Californians or significant revenue). Others follow: Canada PIPEDA, Brazil LGPD. If you have ANY users and a website, you have data protection obligations, and most startups just do not know they do.",
            "The practical floor: a privacy policy that says what you collect, why, and how users can access or delete it; a cookie banner if you use analytics cookies in the EU; and a lawful basis (usually 'consent' or 'legitimate interest') documented for each processing activity.",
            "Write the policy in plain words. It should match your product, and if your product changes, update the policy the same week.",
          ],
        },
        {
          heading: "The vendor chain is part of you",
          paragraphs: [
            "When you use analytics (GA4, PostHog), email (Mailchimp, Resend), payments (Stripe), or AI APIs, YOU are the 'data controller' and they are 'processors.' You need data processing agreements (DPAs) with each, and you are responsible for what you pipe into them, including not sending personal data to AI APIs without a lawful basis and a DPA.",
            "The invisible risk: an AI tool that trains on your users' data. Check every vendor's 'training on customer data' policy, and the safe ones have it off by default.",
          ],
        },
        {
          heading: "What diligence actually checks",
          paragraphs: [
            "Investors' lawyers ask for: your privacy policy URL, DPA coverage with key vendors, evidence of a breach-response plan, and whether you process special-category data. You do not need a compliance department. You need a documented, sensible framework and a policy that matches reality, because a privacy policy that promises things your code does not do is worse than none.",
            "Add a simple breach plan: who is in charge, how you notify users, and how you notify regulators where required. One page is enough for a seed company.",
          ],
        },
      ],
      examples: [
        "A US startup sells to one UK company. It adds EU users' emails to Mailchimp without consent or a DPA. GDPR applies to every one of those emails, and Mailchimp will shut the account down on the first complaint.",
        "A founder uses an AI API that trains on inputs. Support tickets containing customer names go in. A customer's lawyer asks where their data is, and the answer ('an AI model someone else trained on it') ends the deal.",
        "Sara's analytics tool is configured to track EU visitors without a consent banner. A competitor files a complaint, and the fine plus legal fees dwarf her annual revenue.",
        "A startup's privacy policy promises 'we never share your data with third parties,' but their payment processor gets the data by necessity. A security researcher finds the mismatch, and the startup's credibility takes a hit.",
        "Tom deletes test data from his database but forgets the backups and the analytics export. When a user asks for deletion under GDPR, it takes a week to honor the request, and the user complains.",
      ],
      actionItems: [
        "Write or adopt a privacy policy that matches your actual data flows.",
        "List every tool that touches personal data and confirm a DPA exists (or remove it).",
        "Turn OFF AI training on your data for every vendor, and document that choice.",
        "Write a one-page breach-response plan with names and steps.",
        "Check your analytics setup: is there a consent banner where required?",
        "Test your own delete-user flow once, end to end, and time it.",
      ],
      keyPoints: [
        "GDPR/CCPA apply based on who you touch, not where you are incorporated.",
        "You are the controller; vendors are processors, so DPAs are required.",
        "Check 'trains on my data' for every AI and analytics vendor.",
        "A policy that matches reality beats a perfect-sounding fiction.",
        "One honest policy page covers most of the obligations.",
        "The vendor chain is part of you, so know what you pipe into it.",
      ],
    },
    {
      id: "legal-8",
      title: "Insurance for early-stage companies",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Insurance is a deal with a company that pays your bills if something goes wrong.",
            "You buy a few cheap policies now so that one lawsuit, one leak, or one accident does not end the company. It is a checklist item, not a strategy.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Buying insurance you do not need. Some founders buy exotic policies instead of the required basics.",
            "Skipping insurance that customers require. One enterprise deal can hinge on a $1,200 per year policy.",
            "Forgetting workers' comp. The day you hire a W-2 employee, most states require it by law.",
            "Buying once and never reviewing. Coverage needs change as you add customers, employees, and data.",
          ],
        },
        {
          heading: "The minimum viable stack",
          paragraphs: [
            "General Liability (GL): slips and physical damage, cheap, often required by landlords. Errors & Omissions (E&O) / Professional Liability: claims your product or advice caused financial harm, increasingly required by B2B customers. Workers' Compensation: once you have employees, required by law in most states. Cyber / Data Breach liability: if you store customer data or take payments.",
            "For a pre-revenue SaaS, the pragmatic order: GL if you lease space, E&O if B2B customers ask, Cyber as soon as you hold customer data, and WC the day you hire anyone.",
            "Prices are small in the early years, often a few hundred to a couple thousand dollars a year. The peace of mind is worth more than the premium.",
          ],
        },
        {
          heading: "Directors & Officers (D&O)",
          paragraphs: [
            "D&O covers the board and founders against claims of mismanagement. Investors' diligence will often require the company to carry D&O, or at least note its absence. It is not about what you will do wrong. It is that boards get sued when things go wrong, and defense costs alone are enormous.",
            "Do not buy insurance you do not need, but DO ask your investors' counsel what they require. 'Minimum D&O' and 'tail' provisions show up in term sheets more than founders expect.",
          ],
        },
        {
          heading: "The negotiation point",
          paragraphs: [
            "Insurance is a diligence checkbox, not a strategy. Your time is better spent on the operating risks (security, contracts) than optimizing premiums. Get one broker quote across the stack, buy the required pieces, and move on, then revisit at Series A when requirements tighten.",
            "Keep the certificates in your data room folder. When a customer or investor asks for proof, it should be a one-minute upload.",
          ],
        },
      ],
      examples: [
        "A B2B startup's first enterprise customer's procurement says 'no E&O policy, no contract.' The $50K deal hinges on a $1,200 per year policy, which is an obvious buy.",
        "A pre-revenue founder skips cyber insurance. A contractor's laptop with client data is stolen; the incident response, notification, and legal costs exceed what a $600 policy would have covered.",
        "A landlord requires $1M of general liability before the startup can sign the lease. The policy costs $400 a year, and without it, there is no office.",
        "A founder hires her first employee in California without workers' comp. A small injury becomes a state citation plus the full medical bill, all because the policy was not bought on day one.",
        "An investor's term sheet asks for D&O and a tail provision. The founder had asked her counsel in advance, so the policy is quoted and bound within a week, and the round does not stall.",
      ],
      actionItems: [
        "List the policies your landlord, customers, and investors will require (ask them).",
        "Get one broker quote for GL + E&O + Cyber.",
        "Buy WC coverage the day you hire your first W-2 employee.",
        "Ask your investors' counsel what insurance the term sheet expects.",
        "Store insurance certificates in your data room folder.",
        "Put a yearly review on your calendar to re-check coverage as you grow.",
      ],
      keyPoints: [
        "Minimum stack: GL, E&O, Cyber, then WC the day you hire.",
        "D&O is an investor diligence checkbox, so ask what they require.",
        "Insurance is a checkbox, not a strategy: one quote, move on.",
        "Customers and landlords can force specific policies, so ask them first.",
        "Certificates belong in the data room from day one.",
        "Revisit coverage at Series A when requirements tighten.",
      ],
    },
    {
      id: "legal-9",
      title: "Reading a term sheet like a lawyer",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A term sheet is the summary of the deal an investor offers you.",
            "It has two parts: the economics (how the money and ownership get split) and the control (who gets to decide things). Founders usually stare at the valuation and skip the control, and that is backwards.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Falling in love with the valuation. A high number with bad control terms can leave you with nothing on an exit.",
            "Ignoring the liquidation preference. A 2x participating preference can swallow your entire exit.",
            "Not checking who appoints the independent board seat. The tiebreaker usually votes with whoever picked them.",
            "Signing without a lawyer who does startup financing. The term sheet is a summary, and the real details live in the definitive agreements.",
          ],
        },
        {
          heading: "The economics vs. the control",
          paragraphs: [
            "A term sheet has two halves. The economics (valuation, price, pool, liquidation) determine how the pie is split. The control (board, protective provisions, voting, drag-along) determine who steers. Founders over-index on valuation and under-index on control, which is the opposite of what usually bites later.",
            "The standard founder-friendly shape: 1x non-participating liquidation preference, standard 4-5 person board (2 founders, 1-2 investors, 1 independent), market-rate protective provisions (no changes to charter without preferred approval), pro-rata rights for investors, and standard drag-along.",
          ],
        },
        {
          heading: "Decoding the terms",
          paragraphs: [
            "Liquidation preference: preferred get their money back before common. 1x non-participating means they get 1x their investment, then the rest splits per ownership, which is the fair baseline. 1x participating means they ALSO get their percentage on top (double-dipping), so push back. 2-3x preferences are founder-hostile.",
            "Board: 1 seat with a VC at seed (typical), or 2-1-1 with an independent at Series A. More investor seats mean more control. Pay attention to who appoints the independent, because deadlocks break toward whoever picked the tiebreaker.",
            "Protective provisions: the investor veto list, covering selling, changing capital structure, issuing more shares, changing the business, taking on significant debt. 'Significant' is negotiated, and a wide veto list is death by a thousand cuts.",
            "Pro-rata rights: investors can buy their share of future rounds, which is good (they can support you), unless your future rounds need new money and existing holders do not participate (which blows up your cap table).",
            "Drag-along: if a majority of preferred agree to sell, everyone must sell. Standard and fair at market terms; read the threshold (often 50-66% of preferred plus the board).",
          ],
        },
        {
          heading: "The rest of the stack",
          paragraphs: [
            "Vesting on founder shares (re-vesting requirements are common on new money), no-shop clauses (you cannot talk to other investors for X days, fine at 30-45 days), exclusivity, and expenses. The data-rights clause (monthly or quarterly reports to investors) is standard, so budget for the reporting cadence.",
            "Rule: the term sheet is a summary; the definitive agreements (Stock Purchase Agreement, Amended Charter, Investors' Rights, Voting, Right of First Refusal & Co-Sale) are where the detail lives. Get a lawyer who does startup financing. This is not DIY.",
          ],
        },
      ],
      examples: [
        "Founder A takes a $3M seed with a 2x participating preference, happy about the 'high' valuation. A $5M exit later: investors take 2 x $3M = $6M (the entire exit), and the founders get $0, a 'liquidation overhang' that makes small exits worthless to founders.",
        "Founder B negotiates a 1x non-participating preference, pro-rata with a participation floor for future rounds, and a 2-1-1 board. Same exit: investors take their $3M back, and $2M splits among the equity holders, so founders actually earn from the outcome.",
        "A founder signs a term sheet with a 3-person board, 2 of them investor-appointed. When a disagreement arises, the investor side wins every vote, and the founder realizes control was the real price of the round.",
        "An investor's counsel adds a no-shop of 90 days. The founder's other interested investors go quiet, and the deal drags for months while the founder cannot talk to anyone else.",
        "Leo's term sheet has a data-rights clause requiring monthly board packages. He builds a simple reporting template before signing, so the obligation costs him two hours a month instead of a scramble.",
      ],
      actionItems: [
        "Model the exit math for 1x non-participating vs 2x participating at 3 exit sizes (1x, 3x, 10x of investment).",
        "Write down your walk-away on: liquidation preference, board seats, protective provisions, and pro-rata.",
        "Before signing, have a startup financing lawyer read the definitive docs, not just the term sheet.",
        "Ask who appoints the independent board seat and how deadlocks break.",
        "Check the no-shop length and the data-rights reporting cadence.",
        "Practice explaining every term sheet line in plain words to a co-founder.",
      ],
      keyPoints: [
        "Control terms (board, vetoes) matter as much as valuation.",
        "1x non-participating is the fair baseline; 2x+ participating is founder-hostile.",
        "Watch the independent-board appointment and the veto list.",
        "The term sheet is a summary; the definitive agreements are where it is decided.",
        "The tiebreaker usually votes with whoever appointed them.",
        "Know your walk-away numbers before the meeting, not during it.",
      ],
    },
    {
      id: "legal-10",
      title: "The data room and running legal due diligence",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A data room is a secure folder where you show investors your company's papers.",
            "Due diligence is investors checking that those papers are real and complete. A tidy data room makes you look professional and closes rounds faster.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Sending one giant zip file. Investors want a structured room with folders and view-only access.",
            "Hiding problems instead of fixing them first. Investors will find them, and fixing issues you found is professional, while having them find them is disqualifying.",
            "Letting the room go stale. The day you close, the cap table and documents change, and the room needs updating.",
            "Slow answers. Even a fine answer, delivered late, reads like a red flag.",
          ],
        },
        {
          heading: "What belongs in the data room",
          paragraphs: [
            "The 'tidy data room' at seed: cap table plus incorporation documents; all founder agreements and IP assignments; option plan plus grants; key contracts (customer, vendor, lease); financials (P&L, burn, runway); board minutes; insurance certificates; privacy policy plus DPAs; any litigation history; and the raise documents themselves (SAFEs and notes).",
            "Investors also ask for the 'why': customer pipeline, product metrics, and the working models behind your projections. Separate the legal data room from the business data room. Lawyers want contracts, investors want numbers.",
          ],
        },
        {
          heading: "Doing your own pre-diligence",
          paragraphs: [
            "Before you invite investors in, run the process on yourself: pull every document, check signatures and dates, confirm the cap table matches the ledger, and verify all 83(b)s and IP assignments exist. The most common seed diligence surprises: missing 83(b) elections, a founder who never assigned IP, an unwritten founder agreement, and a cap table that does not match the stock ledger.",
            "Fixing issues you found is professional; having investors find them is disqualifying. Run the checklist now, then update it quarterly.",
          ],
        },
        {
          heading: "Running the process",
          paragraphs: [
            "Keep the data room structured and access-controlled, not one big zip. Grant view-only access and track who looked at what. Expect three rounds of questions, and answer fast and completely. Slow or evasive answers are read as red flags even when the answer is fine.",
            "After close: update the cap table, file the amended documents, and archive the signed set, then set your investor-update and board cadence immediately.",
            "Keep a running question log. Every question an investor asks is a hint about what the next investor will ask, so turn the log into your checklist for next time.",
          ],
        },
      ],
      examples: [
        "A founder invites a lead investor's counsel into her data room. In week 1, they find an unsigned IP assignment from her CTO. She produces it signed within a day because she had pre-emptively done her own audit, and the deal proceeds.",
        "Another founder's cap table shows 5% to a friend 'for advice.' The investor's lawyer asks for the written agreement. There is none. Weeks of explanation later, the friend is bought out at a discount, and the round closes two months late.",
        "A founder answers every diligence question within 24 hours, even the awkward ones. The lead investor's counsel tells the GP, 'this team is easy to work with,' and the round closes a week early.",
        "Sara finds a missing signature in her own audit and fixes it quietly. When the investor's lawyer checks the same folder, everything is signed and dated, and the check clears without drama.",
        "A startup closes its seed, then forgets to update the cap table. Six months later the SAFE conversion math is wrong, and the Series A negotiation starts with a credibility problem.",
      ],
      actionItems: [
        "Build your legal data room folder structure and populate every item on the checklist.",
        "Run the pre-diligence audit: 83(b)s, IP assignments, founder agreements, cap table vs ledger.",
        "Set a quarterly reminder to keep the data room current.",
        "Create a question log from every investor conversation and turn it into a checklist.",
        "Check that signatures and dates exist on every document in the room.",
        "Update the cap table and reporting cadence the day you close.",
      ],
      keyPoints: [
        "A tidy data room signals professionalism and speeds the round.",
        "Run pre-diligence on yourself before investors do.",
        "Structured, view-only access; answer fast and completely.",
        "Update cap table + reporting cadence the day you close.",
        "Every investor question is a hint for the next checklist.",
        "Problems you find are fixable; problems they find are disqualifying.",
      ],
    },
  ],
  quiz: [
    {
      question: "You plan to raise venture capital in the next 12 months. Which entity is the best choice?",
      options: ["LLC", "Delaware C-Corp", "Sole proprietorship", "Partnership"],
      correctIndex: 1,
      explanation: "VC-bound startups should incorporate as Delaware C-Corps to support preferred stock, option pools, and standard venture documents.",
    },
    {
      question: "How long do you have to file an 83(b) election after receiving shares?",
      options: ["10 days", "30 days", "90 days", "By the next tax year"],
      correctIndex: 1,
      explanation: "83(b) must be filed within 30 days. Missing it taxes each vesting tranche at FMV, which can mean huge ordinary income.",
    },
    {
      question: "Under Rule 506(b), what is NOT allowed?",
      options: ["Selling to accredited investors", "General solicitation", "Raising more than $1M", "Foreign investors"],
      correctIndex: 1,
      explanation: "506(b) prohibits general solicitation and public marketing. 506(c) allows it but requires verification of accredited status.",
    },
    {
      question: "Which is the standard liquidation preference on a fair term sheet?",
      options: ["3x participating", "1x non-participating", "2x participating", "No preference"],
      correctIndex: 1,
      explanation: "1x non-participating means investors recover 1x their money first, then everything splits normally. Participating preferences double-dip.",
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
      explanation: "Limitation of liability caps damages, commonly at fees paid. Uncapped liability is a startup red flag.",
    },
    {
      question: "Who is typically diluted by the option pool in a priced round?",
      options: ["New investors", "Founders", "Employees", "Nobody"],
      correctIndex: 1,
      explanation: "The pool is carved out of pre-money, so it dilutes founders and existing shareholders, not the new money coming in.",
    },
    {
      question: "What does the 'cliff' in a standard vesting schedule do?",
      options: ["Delays all vesting for 4 years", "Nothing vests until the 1-year mark", "Doubles the vesting speed", "Cancels all unvested shares"],
      correctIndex: 1,
      explanation: "The 1-year cliff means nothing vests in the first year. If a hire leaves before 12 months, they keep nothing.",
    },
    {
      question: "Which of these is NOT part of the minimum insurance stack for an early startup?",
      options: ["General Liability", "Cyber liability", "Workers' Comp once you hire", "Key-person life insurance"],
      correctIndex: 3,
      explanation: "The minimum stack is GL, E&O, Cyber, and Workers' Comp when you hire. Key-person insurance is optional, not part of the stack.",
    },
  ],
  exam: [
    {
      question: "A founder plans to stay bootstrapped and run a profitable services business. Which entity is the better fit?",
      options: ["Delaware C-Corp", "LLC in the home state", "Public company", "Nonprofit"],
      correctIndex: 1,
      explanation: "A bootstrapped services business gets pass-through taxes, flexibility, and no franchise fees from an LLC in its home state.",
    },
    {
      question: "Why is converting an LLC to a C-Corp later considered risky?",
      options: ["It is a taxable event", "It is illegal", "States forbid it", "Investors always reject it"],
      correctIndex: 0,
      explanation: "Conversion can trigger taxes on the value shift, which is why founders decide the entity early.",
    },
    {
      question: "Nina just received her founder shares. By what deadline must she file her 83(b) election?",
      options: ["10 days", "30 days", "90 days", "End of the tax year"],
      correctIndex: 1,
      explanation: "The 83(b) election must be filed within 30 days of receiving the shares, with proof kept.",
    },
    {
      question: "Which pair of items proves the company exists as a separate legal entity for a bank account?",
      options: ["EIN + certificate of incorporation", "A logo + a website", "A Twitter handle + a domain", "A pitch deck + a co-founder"],
      correctIndex: 0,
      explanation: "Banks require the EIN and the certificate of incorporation to open a business account.",
    },
    {
      question: "A contractor builds your entire backend without signing anything. Who legally owns that code?",
      options: ["Your company", "The contractor", "The state", "Nobody"],
      correctIndex: 1,
      explanation: "Work created belongs to the creator unless assigned. Without a CIIAA, the contractor owns the code.",
    },
    {
      question: "What does the buyback clause in a founder agreement do?",
      options: [
        "Lets the company repurchase unvested shares of a departing founder at cost",
        "Doubles a departing founder's shares",
        "Forces the company to sell itself",
        "Pays departing founders a salary",
      ],
      correctIndex: 0,
      explanation: "Buyback rights let the company take back unvested shares cheaply when a founder leaves, keeping the cap table clean.",
    },
    {
      question: "In a standard 4-year vesting schedule with a 1-year cliff, how much vests at the 12-month mark?",
      options: ["0%", "25%", "50%", "100%"],
      correctIndex: 1,
      explanation: "Nothing vests in the first year; at month 12 the first 25% vests, then monthly vesting continues.",
    },
    {
      question: "Who is most directly diluted when the option pool is created before a priced round?",
      options: ["New investors", "Founders and existing shareholders", "Customers", "The government"],
      correctIndex: 1,
      explanation: "The pool is carved from the pre-money valuation, so founders and existing shareholders absorb the dilution.",
    },
    {
      question: "Which clause limits what a party must pay if something goes wrong?",
      options: ["Indemnification", "Limitation of liability", "Auto-renewal", "Most favored nation"],
      correctIndex: 1,
      explanation: "Limitation of liability caps damages, usually at fees paid, which is the startup-friendly baseline.",
    },
    {
      question: "Under Rule 506(b), which of these is NOT allowed?",
      options: ["Raising from accredited investors", "Public marketing of the raise", "Raising more than $1M", "Using SAFEs and notes"],
      correctIndex: 1,
      explanation: "506(b) prohibits general solicitation and public marketing. Public marketing requires 506(c) plus verification.",
    },
    {
      question: "A founder markets her round publicly on a podcast and only collects signed checkboxes for accredited status. Which rule is she likely violating?",
      options: ["506(c) verification", "The privacy policy rules", "Form 83(b)", "Workers' comp laws"],
      correctIndex: 0,
      explanation: "Public solicitation under 506(c) requires documented verification of accredited status, not just a checkbox.",
    },
    {
      question: "Your startup has one UK customer. Does GDPR apply to that customer's data?",
      options: [
        "No, because we are US-based",
        "Yes, because GDPR applies based on who you touch, not where you are incorporated",
        "Only if revenue exceeds $1M",
        "Only for B2C products",
      ],
      correctIndex: 1,
      explanation: "GDPR applies to EU/UK personal data you process, even for a single customer, regardless of where you are incorporated.",
    },
    {
      question: "When must you buy workers' compensation coverage?",
      options: ["The day you hire your first W-2 employee", "Only after Series A", "When a customer asks", "Never for startups"],
      correctIndex: 0,
      explanation: "Most states require workers' comp by law once you have employees, so buy it the day you hire.",
    },
    {
      question: "Which liquidation preference is the fair baseline for founders?",
      options: ["2x participating", "3x non-participating", "1x non-participating", "No preference at all"],
      correctIndex: 2,
      explanation: "1x non-participating lets investors recover their money first, then everything splits normally. Participating preferences double-dip.",
    },
    {
      question: "Why does the independent board seat matter?",
      options: [
        "They typically vote with whoever appointed them on deadlocks",
        "They have no vote",
        "They always side with founders",
        "They audit the financials",
      ],
      correctIndex: 0,
      explanation: "Deadlocks break toward whoever picked the independent seat, so the appointment is a control decision.",
    },
    {
      question: "An investor's lawyer asks for a document you are missing. What is the best move?",
      options: [
        "Ignore the request",
        "Explain why it is unnecessary",
        "Get it signed and produced quickly, since problems you find first are fixable",
        "Remove the investor from the process",
      ],
      correctIndex: 2,
      explanation: "Fast, complete answers build trust. Fixing issues you found is professional; hiding them is disqualifying.",
    },
  ],
};