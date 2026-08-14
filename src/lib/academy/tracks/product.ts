import type { AcademyTrack } from "../types";

export const productTrack: AcademyTrack = {
  id: "product",
  title: "Product & Product-Market Fit",
  tagline: "Find the real problem, build the right thing, and prove people will pay.",
  icon: "target",
  estimatedHours: "4.5h",
  free: false,
  lessons: [
    {
      id: "product-1",
      title: "Problem validation before you write code",
      readMinutes: 9,
      sections: [
        {
          heading: "The problem interview",
          paragraphs: [
            "Before a line of code, validate the problem — not the solution. The problem interview: find 10-15 people who have the problem (not friends), ask about their current behavior (how do you handle X today?), the pain (what does it cost you — money, time, emotion?), and the history (what have you tried? what happened?). Never pitch your solution in the interview — the moment you pitch, they tell you what you want to hear.",
            "The interview rules: ask about the past, not the future ('have you paid for this?' beats 'would you pay for this?'). Ask about frequency ('how often does this happen?'), urgency ('what did it cost you last time?'), and alternatives ('what do you use instead today?'). The answers stack into a pain map: who hurts, how much, how often, what they tried.",
            "The signal you're hunting: an emotional reaction to the problem itself — someone who has tried three workarounds and still loses sleep is a market; someone who nods politely is an opinion.",
          ],
        },
        {
          heading: "The validation ladder",
          paragraphs: [
            "Evidence ranks (weakest to strongest): opinion → problem interview → willingness to try (they signed up for a waitlist) → willingness to pay (deposit, preorder, paid pilot) → repeat purchase. Each rung is harder and worth more. Pre-selling (charging money before the product exists) is the ultimate validation — and legal if you deliver.",
            "The trap: validating the SOLUTION (people say 'cool app!') instead of the PROBLEM. Everyone loves a demo. The only validation that matters is the problem being painful enough that they change behavior — usually by paying.",
          ],
        },
        {
          heading: "When to walk away",
          paragraphs: [
            "If after 15 interviews you can't name the pain, the frequency, and the buyer — the problem is either weak or you're asking the wrong people. Walking away early from a weak problem is the cheapest decision in the company's life. The 'sunk cost' trap (we already talked to 15 people) is how founders build products for problems that don't exist.",
            "A problem is worth building for when: it's frequent, urgent, expensive to ignore, and the buyer is identifiable and reachable. Missing any of the four → keep searching or fix the framing.",
          ],
        },
      ],
      examples: [
        "A founder interviews 12 restaurant managers about inventory waste. Three have tried paper logs, spreadsheets, and a consultant — and all three flinch when asked what it costs monthly. He has a market. He builds.",
        "Another founder interviews 15 friends about 'better note-taking.' All are polite; none has tried anything to fix it; none has spent money. The pain is a preference, not a problem — he walks away and saves a year.",
      ],
      actionItems: [
        "Write the problem statement as a sentence: 'X happens to Y with cost Z, frequently.'",
        "Run 10-15 problem interviews using only past-behavior questions.",
        "Score each interviewee: pain (1-5) × frequency (1-5) — keep only the top segment.",
      ],
      keyPoints: [
        "Validate the problem, never pitch the solution.",
        "Ask about the past: what have they tried, paid for, lost?",
        "The validation ladder: interviews < willingness to try < to pay < repeat purchase.",
        "Frequent + urgent + expensive + reachable buyer = build.",
      ],
    },
    {
      id: "product-2",
      title: "The MVP that actually validates",
      readMinutes: 9,
      sections: [
        {
          heading: "What an MVP is (and isn't)",
          paragraphs: [
            "An MVP is the smallest thing that tests your riskiest assumption — usually 'will someone pay/keep using this?' It is not a small version of your vision; it's the sharpest test of the hypothesis. If your riskiest assumption is demand, the MVP might be a landing page with a preorder button (no product). If it's retention, it might be a concierge service you run manually behind the scenes.",
            "The question that designs the MVP: 'what is the ONE assumption whose failure kills this company?' Build exactly that, nothing more. Every feature beyond the test is waste until the test returns.",
          ],
        },
        {
          heading: "The MVP menu",
          paragraphs: [
            "Options ranked by cost: landing page + waitlist (tests interest), concierge/manual (you do the work by hand, learning the problem while pretending to be software), wizard of Oz (product looks automated, a human does the work), prototype/demo (tests desire, not retention), single-feature product (the one core job, done well), and paid pilot (the strongest — money changes hands).",
            "The rule: pick the cheapest test that produces real behavior — signup is weak, payment is strong, return visits are strongest. And time-box the MVP: a deadline forces scope honesty. 'We'll ship the MVP in 6 weeks' with a defined test and pass/fail criteria is a plan; 'when it's ready' is a prayer.",
          ],
        },
        {
          heading: "The pass/fail criteria",
          paragraphs: [
            "Before building, write the numbers that mean 'validated' — e.g., '40% of visitors click the preorder button,' '30% of signups return in week 2,' '3 of 10 pilots convert to paid.' The criteria protect you from your own optimism: without pre-committed numbers, every outcome gets spun as a win.",
            "When the MVP fails the criteria, the response is iterate (new message, new segment) or kill (the problem was the problem). When it passes, the next step is the retention grind, not the feature party.",
          ],
        },
      ],
      examples: [
        "A founder tests demand for a bookkeeping service for restaurants with a landing page and a 'reserve your month' button at $400/mo. 9 of 26 visitors click. She has demand — and preorders paying before a line of code.",
        "Another founder spends 6 months building 'the full platform' with 40 features. Nobody asked for 39 of them. The first customers use one feature, and the platform's complexity becomes the support burden that kills it.",
      ],
      actionItems: [
        "Write your riskiest assumption in one sentence — that's what the MVP tests.",
        "Choose the cheapest test from the MVP menu that produces real behavior.",
        "Pre-commit pass/fail numbers and a ship date before building.",
      ],
      keyPoints: [
        "MVP = the smallest test of your riskiest assumption.",
        "Pick the cheapest test producing real behavior: payment > return > signup.",
        "Time-box it; write pass/fail criteria before building.",
        "Fail = iterate or kill — never spin.",
      ],
    },
    {
      id: "product-3",
      title: "Activation: turning visitors into users who get value",
      readMinutes: 8,
      sections: [
        {
          heading: "The activation moment",
          paragraphs: [
            "Activation is the moment a new user experiences the core value — the 'aha.' It's not signup; it's the first time the user's problem gets smaller because of your product. For Canva it's the first finished design; for a CRM it's the first pipeline view; for your product it's whatever makes someone say 'I'd use this again.'",
            "Define your activation event with data, not intuition: find the behavior that correlates with week-4 retention (check the retention by first-24-hour behavior — the users who do X in the first day retain 2-3x). That X is your activation event, and the whole onboarding exists to drive it.",
            "The metric: activation rate = % of signups reaching the event within day 1. Benchmarks vary, but the discipline is universal: measure it, then move it with onboarding changes, then watch retention follow.",
          ],
        },
        {
          heading: "Designing the onboarding",
          paragraphs: [
            "The onboarding's job: remove every step between signup and the activation event. Cut friction (no 'tell us about your company' surveys before value), add guidance (a sample dataset, a template, a guided first run), and add motivation (a progress list, a quick win, a visible output).",
            "The two onboarding failures: empty-state death (the user signs up, sees a blank dashboard, and has no idea what to do — so they leave) and feature-ceiling (onboarding teaches features instead of the job the user came to do). Onboard to the JOB, not the interface.",
          ],
        },
        {
          heading: "The funnel to watch",
          paragraphs: [
            "Signup → activation → retained. Watch the signup→activation drop: most products lose 60-80% here, and that leak is the cheapest growth you'll ever unlock — fixing activation costs nothing in CAC and returns everything. A 10-point activation improvement often beats a 10x ad budget.",
            "Instrument it early: event tracking from day one (PostHog/GA4/Amplitude), the activation cohort curve, and the weekly question: 'what did this week's signups do in their first hour — and does it match the activation event?'",
          ],
        },
      ],
      examples: [
        "A note-taking app finds users who create 3 notes in the first hour retain 4x better. Onboarding changes: a template pack pre-loaded, a 'finish your first note' prompt. Activation rises 18 points; week-4 retention follows within a month.",
        "A B2B tool asks for a 6-field 'company profile' at signup. Drop-off at the form: 70%. Removing the form (filling later, async) cuts the drop-off in half — the form was the empty-state killer.",
      ],
      actionItems: [
        "Identify the behavior that correlates with week-4 retention (use your data or run the analysis).",
        "Define the activation event and instrument the funnel: signup → activation → retained.",
        "List every step between signup and activation; cut or automate half of them this week.",
      ],
      keyPoints: [
        "Activation = the moment of first value ('aha'), found in the data.",
        "Activation rate is the cheapest growth lever: no CAC, all retention.",
        "Onboard to the job, not the interface.",
        "Empty states kill — give users a template and a quick win.",
      ],
    },
    {
      id: "product-4",
      title: "Retention: the engine underneath everything",
      readMinutes: 9,
      sections: [
        {
          heading: "Retention is the company's immune system",
          paragraphs: [
            "Retention is the only metric that gates everything: revenue compounds only when customers stay; CAC math works only when lifetime is real; fundraising requires cohort curves that climb. A product with poor retention is a business on a treadmill — every new customer just replaces one who left.",
            "The tool: the retention cohort chart (each row = a cohort, columns = weeks since signup, cell = % still active). The patterns: a flat-ish line above a healthy level = great product; a line that keeps falling = the value isn't sticky; a line that curves down then flattens = there's a retained core — find who they are and why they stay.",
          ],
        },
        {
          heading: "Why users churn — the five causes",
          paragraphs: [
            "(1) Wrong segment — the product fit someone else's job (fix: sharpen ICP, not the product). (2) Weak activation — they never got the value (fix: onboarding). (3) Value decay — the job happens monthly, the product is used once (fix: habit loops, reminders, recurring value moments). (4) Missing feature — a gap in the core job (fix: build the missing 20%). (5) External — competitors, budget cuts, life changes (fix: accept, measure, focus where you can win).",
            "Before fixing churn, classify it: churn by cohort, by plan, by usage level, by segment. 'Our churn is 8%' is a headline; 'churn among low-usage SMB accounts on the starter plan is 22%, driven by weak activation' is an action plan.",
          ],
        },
        {
          heading: "The retention playbook",
          paragraphs: [
            "The highest-leverage retention moves, in order: fix activation (lesson 3), identify and scale the retained core (find the segment that stays, market to more of them), build the habit loop (when does the job recur? make the product show up then — notifications, reports, replays), and manage expectations (users churn when reality beats expectations — the sold promise must match the shipped product).",
            "B2B retention specifics: expansion is retention — NRR is driven by usage growth and add-ons, so the account-management job is 'help the customer use more,' not 'keep them happy.' The customer who uses more stays more.",
          ],
        },
      ],
      examples: [
        "A fitness app has 40% week-4 retention. Cohort analysis shows users who log a workout in their first 48 hours retain 60%+. The onboarding change ('start with your first workout, not a survey') lifts activation and week-4 retention to 55% — the treadmill slows.",
        "A B2B tool's churn is '8% monthly' across the board. Segmented: enterprise accounts churn at 1% (they use the product daily); SMB accounts at 22% (they never activated). The fix isn't a product change — it's a segment decision.",
      ],
      actionItems: [
        "Build your cohort retention chart this week — before touching anything else.",
        "Classify your churn: segment × plan × usage, and name the #1 cause.",
        "Pick the retained core and write how you'll acquire more of them.",
      ],
      keyPoints: [
        "Retention gates revenue, CAC math, and fundraising.",
        "The cohort chart is the instrument; the curve's shape is the diagnosis.",
        "Churn has five causes — classify before fixing.",
        "Fix activation first; expansion is the B2B retention engine.",
      ],
    },
    {
      id: "product-5",
      title: "Product-market fit: recognizing it and measuring it",
      readMinutes: 9,
      sections: [
        {
          heading: "What PMF feels like — and how to measure it",
          paragraphs: [
            "Product-market fit is the moment the product is pulled by the market instead of pushed by you: usage grows without campaigns, users churn in to the product, and revenue starts to compound. The classic measurement is the Sean Ellis test: ask users 'how disappointed would you be if you could no longer use the product?' — 40%+ answering 'very disappointed' is the standard threshold.",
            "The supporting dashboard: week-4 retention (above 40% for consumer-ish products is promising; B2B benchmarks differ), NRR above 100%, and organic growth signals (users who find you without being acquired). PMF is a zone, not a moment: multiple cohorts in a row passing the tests.",
            "The trap: declaring PMF from one metric spike or from feature requests. PMF is proven when the COHORTS hold — this month's users retain like last month's, and next month's will too.",
          ],
        },
        {
          heading: "The PMF pivot types",
          paragraphs: [
            "If the metrics aren't there, the pivot is usually one of: (1) segment pivot — same product, different customer (the most common fix: the product was right, the buyer was wrong), (2) problem pivot — same customer, different problem (they loved you, just not for this job), (3) platform/technology pivot (rare — usually an execution excuse), and (4) the 'beachhead' pivot — same product and market, but a narrower entry (a vertical slice instead of horizontal).",
            "The pivot discipline: keep the evidence (the cohorts, the interviews) that pointed the way; the pivot is a change of direction with the data in hand, not a restart. And protect the runway: a pivot usually means another 6-9 months — plan the cash before you pivot, not after.",
          ],
        },
        {
          heading: "When to stop searching and start scaling",
          paragraphs: [
            "The transition signal: you can write the growth engine from memory — who the customer is, why they stay, and how the numbers compound. When retention cohorts hold, NRR > 100%, and one channel is producing predictable acquisition, the job shifts from 'find the fit' to 'build the engine': pricing refinement, hiring to the growth constraint, and systematizing what works.",
            "Most founders err on one side: scaling before fit (money burned on ads for a product that doesn't retain) or searching forever (pivoting past the point of evidence). The antidote is the pre-committed criteria from lesson 2 — the numbers decide, not the mood.",
          ],
        },
      ],
      examples: [
        "A founder runs the Ellis test at 1,200 active users: 47% 'very disappointed,' week-4 retention at 51% across three cohorts, and 12% of new signups came from referrals — unsolicited. That's the pull signal. She shifts from search mode to scaling mode.",
        "Another founder sees one strong month and declares fit, scaling ad spend 5x. The next cohort's retention is half — the spike was a channel artifact, not fit. Pre-committed cohort criteria would have saved a quarter of burn.",
      ],
      actionItems: [
        "Run the Sean Ellis test on 200+ active users and record the number.",
        "Chart 3 consecutive cohorts of week-4 retention — do they hold?",
        "Write the growth engine from memory in 5 sentences — if you can't, you're still searching.",
      ],
      keyPoints: [
        "PMF = pull instead of push: cohorts hold, NRR > 100%, organic signals.",
        "Sean Ellis: 40%+ 'very disappointed' is the standard bar.",
        "Pivots: segment > problem > beachhead — with the data in hand.",
        "Pre-committed criteria decide, not mood.",
      ],
    },
    {
      id: "product-6",
      title: "Prioritization and the roadmap that ships",
      readMinutes: 8,
      sections: [
        {
          heading: "The prioritization frameworks that work",
          paragraphs: [
            "The frameworks: ICE (Impact × Confidence × Ease — fast and honest), RICE (adds Reach — better for teams), the Kano model (which features delight vs. satisfy vs. are hygiene — hygiene features don't move retention, they just prevent churn), and the jobs-to-be-done test (does this feature speed up the core job or add a new one?).",
            "The startup refinement: rank by 'impact on the metric we're currently moving.' If the goal is activation, the roadmap is activation features. If it's retention, churn features. The roadmap is the strategy expressed in shipping order — a roadmap full of 'nice to haves' is a roadmap without a strategy.",
            "The killer question for every feature: 'what metric does this move, and by how much?' If the answer is vague, the feature is a guess — run it as an experiment, not a commitment.",
          ],
        },
        {
          heading: "The shipping rhythm",
          paragraphs: [
            "Small, frequent releases beat big, rare ones: weekly or bi-weekly shipping creates the feedback loop (see the data, adjust), reduces risk per release, and sets the team's identity ('we ship'). The discipline: a fixed release day, a small scope per release, and a 'can't ship today → what did we learn?' review.",
            "The roadmap itself: 1-2 quarters of detail, beyond that themes not dates. The further out the plan, the more it should be direction — the market will rewrite the details anyway.",
          ],
        },
        {
          heading: "Saying no — the founder's core job",
          paragraphs: [
            "The product will grow by what you refuse to build. Customers will ask for 40 things; the job is to hear them, synthesize the underlying job, and ship the 3 that move the metric. The 'no' that matters: no to the feature that serves one customer's request at the cost of the core job — the customer who asked will be fine; the core job is the company.",
            "Create the pattern: every feature request goes into a list with the asker's context, reviewed monthly for patterns (three customers asking the same thing is a signal; one customer asking is a support conversation).",
          ],
        },
      ],
      examples: [
        "A startup's roadmap is 40 features ranked by 'what sounds cool.' After switching to RICE with the current-metric lens, 30 drop off. The 10 that remain all move activation — and the next month's activation number is the best in the company's history.",
        "An enterprise customer demands a custom integration worth $30K/year. The founder says yes — and three weeks of the team's velocity disappear. The integration ships to one customer while the core product stalls. The $30K cost $200K in missed roadmap.",
      ],
      actionItems: [
        "Score your current backlog with RICE in one spreadsheet — 30 minutes.",
        "State this quarter's metric target in writing; mark every roadmap item with the metric it moves.",
        "Adopt the release rhythm: a fixed day, small scope, post-release review.",
      ],
      keyPoints: [
        "Rank by impact on the metric you're currently moving.",
        "Every feature answers: what metric, how much?",
        "Ship weekly/bi-weekly; the roadmap is 1-2 quarters of detail.",
        "Saying no is the founder's core product job.",
      ],
    },
    {
      id: "product-7",
      title: "Customer discovery that never stops",
      readMinutes: 8,
      sections: [
        {
          heading: "The always-on discovery machine",
          paragraphs: [
            "Discovery isn't a pre-launch phase; it's a habit. The rhythm: 3-5 user conversations a week, forever. Interview users who use the product differently (the power users and the leavers), watch them work, and keep a decision log of what you learn. The founder who stops talking to users is the founder who ships the wrong roadmap.",
            "The conversation types: usage interviews (walk me through how you used it this week), lost-user interviews (what made you stop?), and job interviews (what are you really trying to accomplish — is the product the best way?). The best questions are about behavior, not satisfaction: 'what did you do when you hit the wall?'",
          ],
        },
        {
          heading: "Feedback vs. truth",
          paragraphs: [
            "Users describe solutions ('add a dark mode,' 'make it faster') — the truth is the underlying job ('I work late in dim rooms,' 'the export takes too long and I lose time'). Translate every request into the job it serves before prioritizing.",
            "And triangulate: one passionate request is an opinion; three customers with the same job and workaround is a signal; the data (usage, retention, support tickets) is the referee. The product decision process: interview + data + shipping small → measure → decide.",
          ],
        },
        {
          heading: "The support channel as discovery",
          paragraphs: [
            "Support tickets are the cheapest discovery source: they're users hitting the real edges. Weekly ritual: read 20 support conversations, categorize them (confusion = onboarding problem, requests = roadmap signals, bugs = quality), and let the patterns seed the roadmap. The support desk is a discovery channel wearing a customer-service costume.",
          ],
        },
      ],
      examples: [
        "A founder ships a 'settings redesign' from two support requests. The underlying job — 'I want to control who sees my data' — needed a privacy control, not a redesign. Three interviews after the requests revealed the real job; the redesign shipped empty.",
        "A B2B founder reads support weekly. The pattern over two months: 14 tickets about the same confusing step. One onboarding fix later, support volume on the step drops to zero — a discovery machine paying for itself.",
      ],
      actionItems: [
        "Schedule 3-5 user conversations this week — usage, lost-user, and job interviews.",
        "Translate your last 10 feature requests into the underlying jobs.",
        "Adopt the weekly 20-ticket read and the pattern list.",
      ],
      keyPoints: [
        "Discovery is a habit: 3-5 conversations weekly, forever.",
        "Users give solutions; the truth is the job.",
        "Triangulate: interviews + data + small ships.",
        "Support tickets are free discovery.",
      ],
    },
    {
      id: "product-8",
      title: "Metrics instrumentation: measuring what you build",
      readMinutes: 8,
      sections: [
        {
          heading: "The analytics stack at the start",
          paragraphs: [
            "From day one: an event tracker (PostHog self-host or cloud, GA4, Amplitude), a database of core events (signup, activation event, weekly usage, churn signal, payment), and a weekly dashboard with the 8 numbers from the finance track. The cost is small; the cost of NOT having it (guessing) is enormous.",
            "The event taxonomy: name events consistently (verb_noun: 'signup_completed,' 'invoice_created'), define your activation event explicitly, and track the funnel signup → activation → retained before you need it. Retroactive tracking is a myth — the cohort data you didn't collect in month 1 is gone forever.",
          ],
        },
        {
          heading: "The instrumented questions",
          paragraphs: [
            "The instrumentation exists to answer questions: 'do new users hit activation?' (funnel), 'does the new onboarding lift week-4 retention?' (cohort experiment), 'where do users get stuck?' (funnel drop analysis), 'which features drive retention?' (behavioral retention analysis — users who use feature X retain how much better?).",
            "The discipline: every significant ship gets a measurement plan — the metric, the expected direction, the review date. Ship without a measurement plan is shipping in the dark, and the dark is where roadmaps go to die.",
          ],
        },
        {
          heading: "The dashboard that gets read",
          paragraphs: [
            "A dashboard that gets read: one page, 8 numbers, updated weekly, with the 3-sentence story attached (up because / down because / the risk). No 40-chart dashboards — a dashboard nobody reads is worse than no dashboard (it gives the illusion of knowledge).",
            "And the owner: metrics are the founder's personal responsibility at this stage. You can delegate the build, not the reading — the founder who reads the weekly numbers is the founder who sees the crisis in month 3 instead of month 9.",
          ],
        },
      ],
      examples: [
        "A founder launches with zero event tracking. In month 4, an investor asks 'what's your activation rate?' — the answer is 'we think it's good.' The meeting cools. The tracker that costs $0/month in month 1 would have been the difference between confidence and a shrug.",
        "Another founder ships a redesign with a measurement plan: activation expected +15%, review in 3 weeks. The number comes back -8%. She reverts in a week — a cost measured in days instead of months.",
      ],
      actionItems: [
        "Set up the event tracker and instrument: signup, activation, usage, churn signal, payment.",
        "Write the measurement plan for your current in-flight feature (metric + direction + review date).",
        "Build the one-page 8-number dashboard with the 3-sentence story block.",
      ],
      keyPoints: [
        "Instrument day one — cohort data you didn't collect is gone forever.",
        "Every ship gets a measurement plan: metric, direction, review date.",
        "One page, 8 numbers, weekly, with a story.",
        "Metrics reading is the founder's personal job.",
      ],
    },
    {
      id: "product-9",
      title: "The founder's product mindset: taste, speed, and user love",
      readMinutes: 7,
      sections: [
        {
          heading: "Taste is a skill you build",
          paragraphs: [
            "Taste = the ability to see the difference between good and great, and to feel the user's experience as your own. It's built the same way as any skill: by consuming great products deeply (use the best products in your category and adjacent ones, note what makes them work), by shipping and feeling the gap between intent and outcome, and by doing the work yourself — the founder who has used their product 100 times this week feels the friction that the roadmap will never catch.",
            "The taste loop: use your product like a demanding customer, every week. Find the friction, fix it, repeat. Taste compounds — every round of use raises the bar for the next.",
          ],
        },
        {
          heading: "Speed as a product feature",
          paragraphs: [
            "At the early stage, speed IS the competitive advantage: the team that ships weekly learns monthly what the team that ships quarterly learns yearly. Speed compounds into an un-replicable data advantage — you've tested 50 things they've tested 5.",
            "The speed killers: perfect-first culture (ship good, learn, iterate), heavyweight process (reviews, tickets, ceremonies for a 3-person team), and the founder as bottleneck (delegating decisions late). The speed practices: small releases, clear owners, ship-then-polish, and a bias to 'try it and see' over 'discuss it more.'",
          ],
        },
        {
          heading: "The product love test",
          paragraphs: [
            "The final metric: would you use this product if you weren't the founder? If the honest answer is 'not really,' that's the highest-priority roadmap item — the product the founder doesn't love, customers won't either. The love gap is usually a symptom: the founder shipped the roadmap of requests instead of the roadmap of the job.",
            "The product is the company's letter to the market. The founder's job is to make sure it says something true and useful — and that it keeps saying it, better, every release.",
          ],
        },
      ],
      examples: [
        "A founder ships every Monday for a year — 50 releases, 30 experiments, 4 pivots of messaging. The competitor that 'does it right' ships quarterly. By year 2 the founder's data on what works in the market is 10x the competitor's — and the market can feel it.",
        "A founder uses his own product weekly and finds the same friction in the same place, three weeks running. He stops the feature roadmap for a week, fixes the friction, and support volume on it drops by half. Taste, applied.",
      ],
      actionItems: [
        "Block one hour weekly to use your product as a demanding customer — and fix the top friction.",
        "Adopt a weekly ship cadence with a 'try it and see' bias for the next 6 weeks.",
        "Run the love test monthly: would you use this if you weren't the founder?",
      ],
      keyPoints: [
        "Taste is built by using, shipping, and feeling the gap.",
        "Speed is the early-stage moat — it compounds into data advantage.",
        "Ship good, learn, iterate; kill process bloat.",
        "The love test: use it yourself, every week.",
      ],
    },
  ],
  quiz: [
    {
      question: "What is the strongest problem-validation signal?",
      options: [
        "Polite interview feedback",
        "Money changing hands (preorder, pilot)",
        "Waitlist signups",
        "Feature requests",
      ],
      correctIndex: 1,
      explanation: "Willingness to pay is the strongest rung on the validation ladder — behavior beats opinion.",
    },
    {
      question: "What should the MVP test?",
      options: [
        "Your full feature vision",
        "The riskiest assumption, minimally",
        "Your competitors' features",
        "UI polish",
      ],
      correctIndex: 1,
      explanation: "The MVP is the smallest test of the one assumption whose failure kills the company — nothing more.",
    },
    {
      question: "What is the activation event?",
      options: [
        "The signup moment",
        "The first moment of core value ('aha')",
        "The first payment",
        "The first referral",
      ],
      correctIndex: 1,
      explanation: "Activation is when the user's problem gets smaller — the behavior that correlates with week-4 retention.",
    },
    {
      question: "What does a retention cohort chart show?",
      options: [
        "Revenue per month",
        "What % of each cohort stays active over time",
        "CAC per channel",
        "Employee retention",
      ],
      correctIndex: 1,
      explanation: "Each row is a cohort, each column a week since signup — the curve's shape is the product's diagnosis.",
    },
    {
      question: "The Sean Ellis test measures PMF when:",
      options: [
        "30% say 'somewhat disappointed'",
        "40%+ say 'very disappointed' if the product disappeared",
        "10% refer friends",
        "50% open support tickets",
      ],
      correctIndex: 1,
      explanation: "40%+ answering 'very disappointed' is the classic PMF threshold — combined with holding cohorts.",
    },
    {
      question: "The most common successful pivot is:",
      options: [
        "Technology change",
        "Segment pivot — same product, different customer",
        "Brand refresh",
        "Moving to another market entirely",
      ],
      correctIndex: 1,
      explanation: "Often the product was right and the buyer was wrong — the segment pivot is the most common fix.",
    },
    {
      question: "What is the founder's core product job?",
      options: [
        "Building every requested feature",
        "Saying no to features that don't move the metric",
        "Pleasing the loudest customer",
        "Adding features to compete",
      ],
      correctIndex: 1,
      explanation: "The product grows by what you refuse to build — hear requests, synthesize the job, ship what moves the metric.",
    },
    {
      question: "What is the best source of free discovery?",
      options: [
        "Industry reports",
        "Support tickets read weekly",
        "Social media polls",
        "Competitor decks",
      ],
      correctIndex: 1,
      explanation: "Support tickets are users hitting the real edges — 20 conversations a week, categorized, seed the roadmap.",
    },
  ],
};