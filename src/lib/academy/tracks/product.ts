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
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Before you build anything, you need to know that people actually have the problem you want to fix.",
            "You find this out by talking to real people who have the problem, not by guessing.",
            "If the problem hurts them and they already pay to fix it, you have a business. If not, you save yourself a lot of wasted work by walking away.",
          ],
        },
        {
          heading: "The problem interview",
          paragraphs: [
            "Before a line of code, validate the problem, not the solution. The problem interview works like this: find 10 to 15 people who actually have the problem (not your friends), ask about their current behavior (how do you handle X today?), the pain (what does it cost you: money, time, emotion?), and the history (what have you tried? what happened?).",
            "Never pitch your solution in the interview. The moment you pitch, people stop thinking and start complimenting. They tell you what you want to hear, and you learn nothing. Keep the interview about them, not about you.",
            "The interview rules are simple. Ask about the past, not the future: 'have you paid for this?' beats 'would you pay for this?' Ask about frequency ('how often does this happen?'), urgency ('what did it cost you last time?'), and alternatives ('what do you use instead today?').",
            "The answers stack into a pain map: who hurts, how much it costs them, how often it happens, and what they have tried. Keep the map on one page. It becomes the skeleton of your pitch deck and your product.",
          ],
        },
        {
          heading: "The validation ladder",
          paragraphs: [
            "Evidence ranks from weakest to strongest: opinion, problem interview, willingness to try (they joined a waitlist), willingness to pay (deposit, preorder, paid pilot), and repeat purchase. Each rung is harder to climb and worth more than the last.",
            "Pre-selling, charging money before the product exists, is the ultimate validation. It is legal as long as you deliver. If strangers pay you for a promise, the problem is real.",
            "The trap is validating the solution instead of the problem. People say 'cool app!' because they love demos. That is not evidence. The only validation that matters is a problem painful enough that people change their behavior, usually by paying.",
          ],
        },
        {
          heading: "When to walk away",
          paragraphs: [
            "If after 15 interviews you cannot name the pain, the frequency, and the buyer, the problem is either weak or you are asking the wrong people. Both are fixable, but only if you admit them.",
            "Walking away early from a weak problem is the cheapest decision in the company's life. It saves you months of building and years of pain. The sunk cost trap, 'we already talked to 15 people,' is how founders build products for problems that do not exist.",
            "A problem is worth building for when it is frequent, urgent, expensive to ignore, and the buyer is identifiable and reachable. Missing any of the four means keep searching or fix the framing.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: talking only to friends and family. They are nice to you. They say 'great idea' to be polite. Their answers are compliments, not evidence.",
            "Mistake: pitching your solution in the interview. Once you pitch, people stop thinking and start approving. You walk away with nothing but praise and no information.",
            "Mistake: asking about the future. 'Would you pay for this?' gets a yes from almost everyone. 'Have you paid for something like this?' gets the truth. Ask about the past.",
            "Mistake: falling for the sunk cost trap. 'We already did 15 interviews' is not a reason to build. A weak problem stays weak no matter how many hours you spent on it.",
          ],
        },
      ],
      examples: [
        "A founder interviews 12 restaurant managers about inventory waste. Three have tried paper logs, spreadsheets, and a consultant, and all three flinch when asked what it costs monthly. He has a market. He builds.",
        "Another founder interviews 15 friends about 'better note-taking.' All are polite; none has tried anything to fix it; none has spent money. The pain is a preference, not a problem. He walks away and saves a year.",
        "A founder interviews 12 people about a dog-walking app. Everyone says they would love it, but nobody has ever paid for dog walking. She realizes the pain is low for most owners. She pivots her interviews to busy professionals who already pay a neighbor or a service, and there she finds her market.",
        "A founder wants to build a tool for accountants. He asks his accountant friend 'would you use this?' and the friend says yes. Then he asks 'what did you do last time you had this problem?' The friend hired a temp for a week. That history is the real evidence.",
        "A founder interviews 10 people about a meal-prep app. Two have already paid for a meal service in the past year and flinch when they describe the cost. The other eight nod politely. He builds for the two, not the eight.",
      ],
      actionItems: [
        "Write the problem statement as one sentence: 'X happens to Y with cost Z, frequently.'",
        "Run 10 to 15 problem interviews using only past-behavior questions.",
        "Score each interviewee: pain (1 to 5) x frequency (1 to 5). Keep only the top segment.",
        "Record every interview and write notes the same day. Mark the moments when the person's voice changed.",
        "After the interviews, write the pain map on one page: who hurts, how much it costs, how often, and what they tried.",
        "Score the problem against the four tests: frequent, urgent, expensive to ignore, reachable buyer. If two fail, plan the next round or walk away.",
      ],
      keyPoints: [
        "Validate the problem, never pitch the solution.",
        "Ask about the past: what have they tried, paid for, lost?",
        "The validation ladder: interviews lead to willingness to try, leads to willingness to pay, leads to repeat purchase.",
        "Frequent + urgent + expensive + reachable buyer = build.",
        "An emotional reaction to the problem is the signal you are hunting.",
        "Walking away from a weak problem early is the cheapest decision you will ever make.",
      ],
    },
    {
      id: "product-2",
      title: "The MVP that actually validates",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "An MVP is the smallest thing you can build to test the biggest unknown in your business.",
            "It is not the full product. It is one sharp test, like a science experiment.",
            "If the test works, you learn and build more. If it fails, you learn what to change before you waste months of work.",
          ],
        },
        {
          heading: "What an MVP is (and isn't)",
          paragraphs: [
            "An MVP is the smallest thing that tests your riskiest assumption, usually 'will someone pay or keep using this?' It is not a small version of your vision. It is the sharpest test of the hypothesis.",
            "If your riskiest assumption is demand, the MVP might be a landing page with a preorder button and no product at all. If it is retention, it might be a concierge service you run manually behind the scenes.",
            "The question that designs the MVP: 'what is the ONE assumption whose failure kills this company?' Build exactly that, nothing more. Every feature beyond the test is waste until the test returns.",
            "An MVP is also not a demo for investors, not a prototype to impress friends, and not a beta of your full vision. It is a learning machine with one job: answer the unknown.",
          ],
        },
        {
          heading: "The MVP menu",
          paragraphs: [
            "The options, ranked by cost: landing page + waitlist (tests interest), concierge or manual (you do the work by hand, learning the problem while pretending to be software), wizard of Oz (the product looks automated, but a human does the work), prototype or demo (tests desire, not retention), single-feature product (the one core job, done well), and paid pilot (the strongest, because money changes hands).",
            "The rule: pick the cheapest test that produces real behavior. Signup is weak, payment is strong, and return visits are strongest of all.",
            "Time-box the MVP. A deadline forces scope honesty. 'We will ship the MVP in 6 weeks' with a defined test and pass/fail criteria is a plan. 'When it is ready' is a prayer.",
            "For each menu item, know what counts as proof. Landing page: how many click the button. Concierge: do they come back and ask for more. Wizard of Oz: do they reorder. Write the proof down before you start.",
          ],
        },
        {
          heading: "The pass/fail criteria",
          paragraphs: [
            "Before building, write the numbers that mean 'validated.' For example: '40% of visitors click the preorder button,' '30% of signups return in week 2,' or '3 of 10 pilots convert to paid.'",
            "The criteria protect you from your own optimism. Without pre-committed numbers, every outcome gets spun as a win, and the spin is how founders fool themselves for a year.",
            "When the MVP fails the criteria, the response is iterate (new message, new segment) or kill (the problem was the problem). When it passes, the next step is the retention grind, not the feature party.",
            "Share the criteria with a co-founder or an advisor before the test runs. The promise you make to someone else is harder to break than the promise you make to yourself.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: building the full vision as 'a small version.' A smaller version of everything is still everything. Cut down to one test.",
            "Mistake: using the MVP to impress investors. An MVP is a learning tool, not a demo. Investors can wait. The test cannot.",
            "Mistake: no deadline. 'When it is ready' means forever. Without a ship date, scope grows and the test never runs.",
            "Mistake: declaring the MVP passed before the numbers say so. If you wrote '40% click' and 12% clicked, that is a fail. Spin is a slow poison.",
          ],
        },
      ],
      examples: [
        "A founder tests demand for a bookkeeping service for restaurants with a landing page and a 'reserve your month' button at $400/mo. 9 of 26 visitors click. She has demand, and preorders paying before a line of code.",
        "Another founder spends 6 months building 'the full platform' with 40 features. Nobody asked for 39 of them. The first customers use one feature, and the platform's complexity becomes the support burden that kills it.",
        "A founder tests a tutoring marketplace with a concierge MVP. Parents email her, she finds a tutor by hand, and runs the whole thing manually for a month. Twelve parents pay. She learns pricing, demand, and the hard part of the job before writing any code.",
        "A founder builds a wizard-of-Oz MVP for an AI content tool. The website looks automated, but a human writes the content by hand. Users reorder. He learns retention works, then automates the parts users care about most.",
        "A founder sets a 6-week deadline and pass/fail numbers. The MVP fails the numbers, but the interviews show the message was wrong, not the problem. He changes the message, reruns the test, and passes in 3 more weeks. The criteria saved him from declaring victory too early.",
      ],
      actionItems: [
        "Write your riskiest assumption in one sentence. That is what the MVP tests.",
        "Choose the cheapest test from the MVP menu that produces real behavior.",
        "Pre-commit pass/fail numbers and a ship date before building.",
        "Name the one behavior that counts as proof, and how you will track it.",
        "List every feature you think the MVP needs, then cut it down to the single test.",
        "Book the review meeting for the week after the deadline, with the pass/fail numbers on the agenda.",
      ],
      keyPoints: [
        "MVP = the smallest test of your riskiest assumption.",
        "Pick the cheapest test producing real behavior: payment beats return, return beats signup.",
        "Time-box it; write pass/fail criteria before building.",
        "Fail = iterate or kill, never spin.",
        "The MVP is a learning tool, not a demo for investors.",
        "Every feature beyond the test is waste until the test returns.",
      ],
    },
    {
      id: "product-3",
      title: "Activation: turning visitors into users who get value",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Activation is the moment a new user gets real value from your product for the first time.",
            "Signing up is not activation. Feeling 'this actually helps me' is activation.",
            "Make that moment fast and easy, and people will stay. Staying is what makes your business grow.",
          ],
        },
        {
          heading: "The activation moment",
          paragraphs: [
            "Activation is the moment a new user experiences the core value. That is the 'aha.' It is not signup. It is the first time the user's problem gets smaller because of your product.",
            "For Canva it is the first finished design. For a CRM it is the first pipeline view. For your product it is whatever makes someone say, 'I would use this again.'",
            "Define your activation event with data, not intuition. Find the behavior that correlates with week-4 retention. Check retention by first-24-hour behavior: the users who do X in the first day retain 2 to 3 times better. That X is your activation event, and the whole onboarding exists to drive it.",
            "The metric is the activation rate: the % of signups who reach the event within day 1. Benchmarks vary by product, but the discipline is universal. Measure it, move it with onboarding changes, then watch retention follow.",
          ],
        },
        {
          heading: "Designing the onboarding",
          paragraphs: [
            "The onboarding's job is to remove every step between signup and the activation event. Cut friction: no 'tell us about your company' surveys before value. Add guidance: a sample dataset, a template, a guided first run. Add motivation: a progress list, a quick win, a visible output.",
            "There are two classic onboarding failures. Empty-state death: the user signs up, sees a blank dashboard, and has no idea what to do, so they leave. Feature-ceiling: the onboarding teaches features instead of the job the user came to do.",
            "Onboard to the job, not the interface. The user does not care about your buttons. They care that their problem gets smaller.",
            "Onboarding is never finished. Review it every month with real users. Watch a new user sign up on a screen share and write down every pause.",
          ],
        },
        {
          heading: "The funnel to watch",
          paragraphs: [
            "The funnel is simple: signup leads to activation, and activation leads to retained. Watch the drop between signup and activation. Most products lose 60 to 80% of signups there, and that leak is the cheapest growth you will ever unlock.",
            "Fixing activation costs nothing in customer acquisition spend and returns everything. A 10-point activation improvement often beats a 10x ad budget.",
            "Instrument it early: event tracking from day one (PostHog, GA4, or Amplitude), the activation cohort curve, and the weekly question: 'what did this week's signups do in their first hour, and does it match the activation event?'",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: treating signup as success. A signup is a promise, not proof. The proof is the first moment of value.",
            "Mistake: asking for information before value. The six-field company profile form at signup kills activation. Collect it later or not at all.",
            "Mistake: teaching features instead of the job. Nobody signs up to learn your interface. They sign up to get a job done.",
            "Mistake: guessing the activation event. Your gut is not data. Find the behavior that predicts retention before you redesign anything.",
          ],
        },
      ],
      examples: [
        "A note-taking app finds users who create 3 notes in the first hour retain 4 times better. Onboarding changes: a template pack pre-loaded, a 'finish your first note' prompt. Activation rises 18 points; week-4 retention follows within a month.",
        "A B2B tool asks for a 6-field 'company profile' at signup. Drop-off at the form: 70%. Removing the form (filling later, async) cuts the drop-off in half. The form was the empty-state killer.",
        "A scheduling tool finds that users who book their first meeting in the first hour retain 3 times better. The team adds a one-click 'import your calendar' step. Activation goes from 31% to 49% in a month.",
        "A budgeting app's onboarding asks 8 questions about income and spending before showing anything. Most users quit. The team flips it: show a sample budget first, let users adjust it. Onboarding completion jumps from 40% to 75%.",
        "A founder watches five new users on screen share. Every one of them pauses at the same confusing button. He renames it in a day. Activation climbs 9 points with a one-word change.",
      ],
      actionItems: [
        "Identify the behavior that correlates with week-4 retention. Use your data or run the analysis.",
        "Define the activation event and instrument the funnel: signup leads to activation, leads to retained.",
        "List every step between signup and activation. Cut or automate half of them this week.",
        "Watch three new users sign up on a screen share. Write down every pause and confusion.",
        "Pick the one biggest drop in your funnel and make one change to fix it. Measure next week.",
        "Rewrite the welcome email to point users at the activation event, not the feature list.",
      ],
      keyPoints: [
        "Activation = the moment of first value ('aha'), found in the data.",
        "Activation rate is the cheapest growth lever: no CAC, all retention.",
        "Onboard to the job, not the interface.",
        "Empty states kill. Give users a template and a quick win.",
        "Signup is a promise. The first moment of value is the proof.",
        "Find the activation event in data, not in your gut.",
      ],
    },
    {
      id: "product-4",
      title: "Retention: the engine underneath everything",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Retention means customers keep using your product for a long time.",
            "It matters more than almost anything, because revenue only grows when customers stay.",
            "If customers leave quickly, you are on a treadmill: you must keep buying new customers just to stand still.",
          ],
        },
        {
          heading: "Retention is the company's immune system",
          paragraphs: [
            "Retention is the only metric that gates everything. Revenue compounds only when customers stay. CAC math works only when lifetime is real. Fundraising requires cohort curves that climb.",
            "A product with poor retention is a business on a treadmill: every new customer just replaces one who left. You grow the ad spend, and nothing grows back.",
            "The tool is the retention cohort chart: each row is a cohort, each column is a week since signup, and each cell is the % still active. The patterns: a flat-ish line above a healthy level means a great product; a line that keeps falling means the value is not sticky; a curve that dips then flattens means there is a retained core, so find who they are and why they stay.",
            "Read your chart honestly. Look at week 1, week 4, and week 8, and ask where the line stops falling. That point is your sticky core.",
          ],
        },
        {
          heading: "Why users churn: the five causes",
          paragraphs: [
            "(1) Wrong segment: the product fit someone else's job. Fix: sharpen your ideal customer profile, not the product. (2) Weak activation: they never got the value. Fix: onboarding. (3) Value decay: the job happens monthly but the product is used once. Fix: habit loops, reminders, recurring value moments.",
            "(4) Missing feature: a gap in the core job. Fix: build the missing 20%. (5) External: competitors, budget cuts, life changes. Fix: accept it, measure it, and focus where you can win.",
            "Before fixing churn, classify it: by cohort, by plan, by usage level, by segment. 'Our churn is 8%' is a headline. 'Churn among low-usage SMB accounts on the starter plan is 22%, driven by weak activation' is an action plan.",
            "How to classify: pull the list of users who churned last month and read 10 of their stories. The same cause will keep appearing, and that cause is your to-do list.",
          ],
        },
        {
          heading: "The retention playbook",
          paragraphs: [
            "The highest-leverage retention moves, in order: fix activation (lesson 3), identify and scale the retained core (find the segment that stays, then market to more of them), and build the habit loop (when does the job recur? make the product show up then: notifications, reports, replays).",
            "Then manage expectations. Users churn when reality beats expectations. The sold promise must match the shipped product, or every new customer arrives already disappointed.",
            "B2B retention specifics: expansion is retention. NRR is driven by usage growth and add-ons, so the account-management job is 'help the customer use more,' not 'keep them happy.' The customer who uses more stays more.",
            "Re-engagement is not retention. Win-back emails can lift the number for a week, but they do not fix the reason people left.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: watching the churn rate without the cohort chart. The average hides everything. The chart shows where the leak is.",
            "Mistake: fixing churn before classifying it. 'People leave' is not a diagnosis. Find which people, which plan, which week.",
            "Mistake: treating re-engagement emails as retention. A spike from a win-back email is a Band-Aid, not a fix.",
            "Mistake: blaming the product for every churn. Sometimes the customer was wrong for you. Sharpen who you sell to before you change what you build.",
          ],
        },
      ],
      examples: [
        "A fitness app has 40% week-4 retention. Cohort analysis shows users who log a workout in their first 48 hours retain 60%+. The onboarding change ('start with your first workout, not a survey') lifts activation and week-4 retention to 55%. The treadmill slows.",
        "A B2B tool's churn is '8% monthly' across the board. Segmented: enterprise accounts churn at 1% (they use the product daily); SMB accounts at 22% (they never activated). The fix is not a product change. It is a segment decision.",
        "A CRM notices week-4 retention of 35%. Cohort analysis shows users who imported their contacts retain 60%. The team adds a one-click import with a sample. Week-4 retention reaches 52% in two months.",
        "A newsletter tool finds churn is highest in month 3. Reading the churned stories: most are solopreneurs who stopped publishing. The team adds a 'republish' feature and a cadence reminder. Month-3 churn drops by a third.",
        "A SaaS founder promised 'setup in 5 minutes.' Setup actually takes an hour. Users churn in week 1. He changes the promise to 'setup in an hour, with our help' and updates onboarding to match. Churn falls because reality now matches the promise.",
      ],
      actionItems: [
        "Build your cohort retention chart this week, before touching anything else.",
        "Classify your churn: segment x plan x usage, and name the #1 cause.",
        "Pick the retained core and write how you will acquire more of them.",
        "Read the stories of 10 churned users and write down the one repeated cause.",
        "Find the natural rhythm of the job and add one habit moment (report, digest, reminder) that matches it.",
        "Check the promise vs the product: write down what you promise at signup and test whether the first hour delivers it.",
      ],
      keyPoints: [
        "Retention gates revenue, CAC math, and fundraising.",
        "The cohort chart is the instrument; the curve's shape is the diagnosis.",
        "Churn has five causes. Classify before fixing.",
        "Fix activation first; expansion is the B2B retention engine.",
        "Find the sticky core: the segment whose curve flattens. Learn why they stay and market to more of them.",
        "Users churn when reality beats expectations. Match the promise to the product.",
      ],
    },
    {
      id: "product-5",
      title: "Product-market fit: recognizing it and measuring it",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Product-market fit means your product is being pulled by customers instead of pushed by you.",
            "People find it themselves, they stay, and they tell others.",
            "You can measure it with a simple question and a few charts, so you are not guessing.",
          ],
        },
        {
          heading: "What PMF feels like, and how to measure it",
          paragraphs: [
            "Product-market fit is the moment the product is pulled by the market instead of pushed by you. Usage grows without campaigns, users churn in to the product, and revenue starts to compound.",
            "The classic measurement is the Sean Ellis test: ask users 'how disappointed would you be if you could no longer use the product?' 40%+ answering 'very disappointed' is the standard threshold.",
            "The supporting dashboard: week-4 retention (above 40% is promising for consumer-ish products; B2B benchmarks differ), NRR above 100%, and organic growth signals (users who find you without being acquired).",
            "PMF is a zone, not a moment: multiple cohorts in a row must pass the tests. The trap is declaring PMF from one metric spike or from feature requests. PMF is proven when the cohorts hold: this month's users retain like last month's, and next month's will too.",
          ],
        },
        {
          heading: "The PMF pivot types",
          paragraphs: [
            "If the metrics are not there, the pivot is usually one of: (1) segment pivot, same product, different customer (the most common fix: the product was right, the buyer was wrong), (2) problem pivot, same customer, different problem (they loved you, just not for this job), (3) platform or technology pivot (rare, usually an execution excuse), and (4) the beachhead pivot, same product and market but a narrower entry (a vertical slice instead of horizontal).",
            "The pivot discipline: keep the evidence, the cohorts and the interviews, that pointed the way. A pivot is a change of direction with the data in hand, not a restart.",
            "Protect the runway: a pivot usually means another 6 to 9 months. Plan the cash before you pivot, not after.",
            "How to choose the pivot: reread the interview notes and the cohort chart. The evidence usually points to one of the four. The pivot is a conclusion, not a vibe. And remember: pivoting is not failure. It is the process of finding fit.",
          ],
        },
        {
          heading: "When to stop searching and start scaling",
          paragraphs: [
            "The transition signal: you can write the growth engine from memory: who the customer is, why they stay, and how the numbers compound. When retention cohorts hold, NRR is above 100%, and one channel produces predictable acquisition, the job shifts from 'find the fit' to 'build the engine.'",
            "Building the engine means pricing refinement, hiring to the growth constraint, and systematizing what works. It is less romantic than the search, and it is where the money is made.",
            "Most founders err on one side: scaling before fit (money burned on ads for a product that does not retain) or searching forever (pivoting past the point of evidence). The antidote is the pre-committed criteria from lesson 2: the numbers decide, not the mood.",
            "Scaling is not just spending more. It is building the machine: hiring, systems, and focus. If the machine is not built, more money just makes more waste.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: declaring fit from one good month. A spike is a spike. Three cohorts in a row is evidence.",
            "Mistake: scaling ads before retention holds. You pay to fill a leaking bucket. Fix the bucket first.",
            "Mistake: searching forever. If you have pre-committed criteria, you know when to stop. Without them, you will pivot past the evidence.",
            "Mistake: trusting feature requests as proof of fit. Requests mean interest, not fit. Cohorts and the Ellis test mean fit.",
          ],
        },
      ],
      examples: [
        "A founder runs the Ellis test at 1,200 active users: 47% 'very disappointed,' week-4 retention at 51% across three cohorts, and 12% of new signups came from referrals, unsolicited. That is the pull signal. She shifts from search mode to scaling mode.",
        "Another founder sees one strong month and declares fit, scaling ad spend 5x. The next cohort's retention is half. The spike was a channel artifact, not fit. Pre-committed cohort criteria would have saved a quarter of burn.",
        "A founder's week-4 retention is 22% for six months. She pivots from 'all small businesses' to 'dental clinics' after interviews show dentists have the same urgent problem and buy fast. Retention climbs to 48% in two cohorts. The product barely changed; the customer did.",
        "A productivity app gets 60% 'very disappointed' on the Ellis test from power users, but 10% from new signups. The insight: fit is real for the power segment, and the job is to get more of them, not to chase everyone.",
        "A founder burns $40K on ads for a product with 15% week-4 retention. The ads bring users; the product sends them away. He stops ads, fixes onboarding, and only restarts spend when two cohorts hold above 40%. The pause saves him a year of burn.",
      ],
      actionItems: [
        "Run the Sean Ellis test on 200+ active users and record the number.",
        "Chart 3 consecutive cohorts of week-4 retention. Do they hold?",
        "Write the growth engine from memory in 5 sentences. If you cannot, you are still searching.",
        "If the Ellis number is under 40%, read the 'disappointed' and 'not disappointed' answers side by side and look for the pattern.",
        "Write down which pivot type your evidence points to, if any. Keep the interviews and cohort charts as your proof.",
        "Set a date and criteria for the 'scale' decision. Put them in writing before you spend on growth.",
      ],
      keyPoints: [
        "PMF = pull instead of push: cohorts hold, NRR above 100%, organic signals.",
        "Sean Ellis: 40%+ 'very disappointed' is the standard bar.",
        "Pivots: segment, problem, beachhead, with the data in hand.",
        "Pre-committed criteria decide, not mood.",
        "Fit is a zone, not a moment. Three cohorts in a row is evidence.",
        "Scaling before fit fills a leaking bucket. Fix the bucket first.",
      ],
    },
    {
      id: "product-6",
      title: "Prioritization and the roadmap that ships",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "You will always have more ideas than time, so you must choose what to build.",
            "The rule is simple: build the things that move the number you are trying to move.",
            "Saying no to good ideas is the hardest and most important part of the job.",
          ],
        },
        {
          heading: "The prioritization frameworks that work",
          paragraphs: [
            "The frameworks: ICE (Impact x Confidence x Ease, fast and honest), RICE (adds Reach, better for teams), the Kano model (which features delight, satisfy, or are hygiene; hygiene features do not move retention, they just prevent churn), and the jobs-to-be-done test (does this feature speed up the core job or add a new one?).",
            "The startup refinement: rank by 'impact on the metric we are currently moving.' If the goal is activation, the roadmap is activation features. If it is retention, churn features.",
            "The roadmap is the strategy expressed in shipping order. A roadmap full of 'nice to haves' is a roadmap without a strategy.",
            "The killer question for every feature: 'what metric does this move, and by how much?' If the answer is vague, the feature is a guess. Run it as an experiment, not a commitment.",
          ],
        },
        {
          heading: "The shipping rhythm",
          paragraphs: [
            "Small, frequent releases beat big, rare ones. Weekly or bi-weekly shipping creates the feedback loop: see the data, adjust. It reduces risk per release and sets the team's identity: 'we ship.'",
            "The discipline: a fixed release day, a small scope per release, and a 'can't ship today? what did we learn?' review.",
            "The roadmap itself: 1 to 2 quarters of detail, and beyond that themes, not dates. The further out the plan, the more it should be direction. The market will rewrite the details anyway.",
            "Shipping small changes the culture. Everyone learns faster, and the team becomes brave enough to try things because failures are small.",
          ],
        },
        {
          heading: "Saying no: the founder's core job",
          paragraphs: [
            "The product will grow by what you refuse to build. Customers will ask for 40 things. The job is to hear them, synthesize the underlying job, and ship the 3 that move the metric.",
            "The 'no' that matters: no to the feature that serves one customer's request at the cost of the core job. The customer who asked will be fine. The core job is the company.",
            "Create the pattern: every feature request goes into a list with the asker's context, reviewed monthly for patterns. Three customers asking the same thing is a signal. One customer asking is a support conversation.",
            "How to say no without burning bridges: explain what you are saying yes to instead. 'We are building X this quarter. Y would slow it down. Let us revisit Y after.'",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: ranking by 'what sounds cool.' Cool is not a strategy. The metric you are moving is the strategy.",
            "Mistake: building the loudest customer's feature. One customer's ask is a support conversation, not a roadmap item.",
            "Mistake: big rare releases. Six months of work hidden in one release means six months without feedback. Ship small and often.",
            "Mistake: a roadmap full of dates and no strategy. Dates are not priorities. Every item must name the metric it moves.",
          ],
        },
      ],
      examples: [
        "A startup's roadmap is 40 features ranked by 'what sounds cool.' After switching to RICE with the current-metric lens, 30 drop off. The 10 that remain all move activation, and the next month's activation number is the best in the company's history.",
        "An enterprise customer demands a custom integration worth $30K/year. The founder says yes, and three weeks of the team's velocity disappear. The integration ships to one customer while the core product stalls. The $30K cost $200K in missed roadmap.",
        "A founder's roadmap has 25 features. She asks 'what metric does each move?' Only 7 have an answer. She ships the 7, and the rest become experiments with small tests. The 7 all move activation, and activation climbs 14 points.",
        "A team switches from monthly releases to weekly. A bug ships in week 2 and is caught by users in 3 days. With monthly releases it would have lived for a month. The small release cadence turns every week into a lesson.",
        "Three customers ask for exports to Excel. The founder was going to say no to keep scope small. Three asks, same job: 'I need my data in my workflow.' He builds the export, and support volume on data questions drops to zero.",
      ],
      actionItems: [
        "Score your current backlog with RICE in one spreadsheet. 30 minutes.",
        "State this quarter's metric target in writing. Mark every roadmap item with the metric it moves.",
        "Adopt the release rhythm: a fixed day, small scope, post-release review.",
        "Write the killer question on the wall: 'what metric does this move, and by how much?' Ask it for every feature this week.",
        "Start the request list: every customer ask, with who asked and why, reviewed monthly.",
        "Practice one hard 'no' this week. Explain what you are saying yes to instead.",
      ],
      keyPoints: [
        "Rank by impact on the metric you are currently moving.",
        "Every feature answers: what metric, how much?",
        "Ship weekly or bi-weekly; the roadmap is 1 to 2 quarters of detail.",
        "Saying no is the founder's core product job.",
        "Three customers with the same ask is a signal. One customer is a support conversation.",
        "The roadmap is the strategy expressed in shipping order.",
      ],
    },
    {
      id: "product-7",
      title: "Customer discovery that never stops",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Talking to customers is not a one-time thing you do before launch.",
            "It is a habit you keep forever, like brushing your teeth.",
            "A few short conversations every week will save you from building the wrong things.",
          ],
        },
        {
          heading: "The always-on discovery machine",
          paragraphs: [
            "Discovery is not a pre-launch phase. It is a habit. The rhythm: 3 to 5 user conversations a week, forever.",
            "Interview users who use the product differently: the power users and the leavers. Watch them work. Keep a decision log of what you learn. The founder who stops talking to users is the founder who ships the wrong roadmap.",
            "The conversation types: usage interviews (walk me through how you used it this week), lost-user interviews (what made you stop?), and job interviews (what are you really trying to accomplish, and is the product the best way?).",
            "The best questions are about behavior, not satisfaction: 'what did you do when you hit the wall?' How to schedule: offer a small thank-you (a gift card or early access), use an in-app 'book a call' link, and protect the slot in your calendar like a meeting with an investor.",
          ],
        },
        {
          heading: "Feedback vs truth",
          paragraphs: [
            "Users describe solutions: 'add a dark mode,' 'make it faster.' The truth is the underlying job: 'I work late in dim rooms,' 'the export takes too long and I lose time.' Translate every request into the job it serves before prioritizing.",
            "And triangulate: one passionate request is an opinion. Three customers with the same job and workaround is a signal. The data (usage, retention, support tickets) is the referee.",
            "The product decision process: interview + data + shipping small leads to measure, leads to decide.",
            "The translation trick: after any request, ask 'what are you trying to get done?' and 'what do you do today when it does not work?' The answer is the job. When interview and data disagree, run the small test: ship the cheap version, measure, decide.",
          ],
        },
        {
          heading: "The support channel as discovery",
          paragraphs: [
            "Support tickets are the cheapest discovery source: they are users hitting the real edges. The weekly ritual: read 20 support conversations, categorize them (confusion = onboarding problem, requests = roadmap signals, bugs = quality), and let the patterns seed the roadmap.",
            "The support desk is a discovery channel wearing a customer-service costume. Read fast: skim 20 tickets in 30 minutes, sort them into three piles (confusion, request, bug), count each pile, and write one sentence on the biggest pile. That sentence is next week's roadmap input.",
            "Close the loop: when a pattern becomes a fix, tell the users who reported it. They become your biggest fans, and they keep reporting.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: stopping discovery after launch. The product changes, the market changes, and your understanding must change with it.",
            "Mistake: talking only to happy users. Happy users tell you what to keep. Leavers tell you what to fix. Talk to both.",
            "Mistake: asking 'are you happy?' Satisfaction questions produce polite answers. Behavior questions produce truth.",
            "Mistake: acting on one passionate request. One opinion becomes a signal only when three customers share the same job. Triangulate first.",
          ],
        },
      ],
      examples: [
        "A founder ships a 'settings redesign' from two support requests. The underlying job, 'I want to control who sees my data,' needed a privacy control, not a redesign. Three interviews after the requests revealed the real job; the redesign shipped empty.",
        "A B2B founder reads support weekly. The pattern over two months: 14 tickets about the same confusing step. One onboarding fix later, support volume on the step drops to zero. A discovery machine paying for itself.",
        "A founder keeps a 5-conversation weekly habit for a year. In month 8, a power user mentions a new regulation that will change how customers buy. The founder hears it early, adapts the roadmap, and is first to market with the fix while competitors are still surprised.",
        "A founder interviews three users who churned. All three say the same thing: the export was too slow. One interview would have been an opinion. Three interviews, same job, that is a signal. He fixes the export and churn drops.",
        "A support review shows 30% of tickets are confusion about the same screen. The founder had planned a new feature for next month. He swaps the roadmap: fix the screen first. Confusion tickets drop to zero, and the feature waits one month.",
      ],
      actionItems: [
        "Schedule 3 to 5 user conversations this week: usage, lost-user, and job interviews.",
        "Translate your last 10 feature requests into the underlying jobs.",
        "Adopt the weekly 20-ticket read and the pattern list.",
        "Start the decision log: what I heard, what I decided, when I will check.",
        "Add a 'book a call' link in the product and offer a small thank-you for 30 minutes.",
        "Close the loop: when a pattern becomes a fix, tell the users who reported it.",
      ],
      keyPoints: [
        "Discovery is a habit: 3 to 5 conversations weekly, forever.",
        "Users give solutions; the truth is the job.",
        "Triangulate: interviews + data + small ships.",
        "Support tickets are free discovery.",
        "One request is an opinion. Three customers with the same job is a signal.",
        "The decision log turns conversations into decisions.",
      ],
    },
    {
      id: "product-8",
      title: "Metrics instrumentation: measuring what you build",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "If you cannot measure what users do, you are guessing about your business.",
            "The fix is simple tools that track the key actions from day one.",
            "A little setup at the start saves you from years of guessing.",
          ],
        },
        {
          heading: "The analytics stack at the start",
          paragraphs: [
            "From day one: an event tracker (PostHog self-host or cloud, GA4, Amplitude), a database of core events (signup, activation event, weekly usage, churn signal, payment), and a weekly dashboard with the 8 numbers from the finance track.",
            "The cost is small. The cost of NOT having it, guessing, is enormous.",
            "The event taxonomy: name events consistently (verb_noun: 'signup_completed,' 'invoice_created'), define your activation event explicitly, and track the funnel signup leads to activation, leads to retained before you need it.",
            "Retroactive tracking is a myth: the cohort data you did not collect in month 1 is gone forever. Start with five events and no more. Five events answer 80% of early questions. Pick one tool and stay with it; switching later is painful.",
          ],
        },
        {
          heading: "The instrumented questions",
          paragraphs: [
            "The instrumentation exists to answer questions: 'do new users hit activation?' (funnel), 'does the new onboarding lift week-4 retention?' (cohort experiment), 'where do users get stuck?' (funnel drop analysis), 'which features drive retention?' (behavioral retention analysis: users who use feature X retain how much better?).",
            "The discipline: every significant ship gets a measurement plan: the metric, the expected direction, the review date. Shipping without a measurement plan is shipping in the dark, and the dark is where roadmaps go to die.",
            "One question at a time: pick the question that matters most this month, and let it choose the chart. Dashboards of everything answer nothing.",
            "The measurement plan is three lines long: metric, expected direction, review date. If you cannot write it, you do not know what you are shipping.",
          ],
        },
        {
          heading: "The dashboard that gets read",
          paragraphs: [
            "A dashboard that gets read: one page, 8 numbers, updated weekly, with the 3-sentence story attached: up because, down because, the risk. No 40-chart dashboards. A dashboard nobody reads is worse than no dashboard, because it gives the illusion of knowledge.",
            "And the owner: metrics are the founder's personal responsibility at this stage. You can delegate the build, not the reading. The founder who reads the weekly numbers is the founder who sees the crisis in month 3 instead of month 9.",
            "The 3-sentence story is the most important part: 'Up because X. Down because Y. The risk is Z.' A dashboard without a story is a wall of numbers.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: launching without tracking. The cohort data you did not collect is gone forever. There is no rewind button.",
            "Mistake: tracking everything. 40 charts answer nothing. Track the 5 core events and the 8 dashboard numbers.",
            "Mistake: building dashboards nobody reads. An ignored dashboard gives the illusion of knowledge. Fewer numbers, with a story, gets read.",
            "Mistake: delegating the reading. The founder who does not read the weekly numbers is the founder who learns about the crisis in month 9.",
          ],
        },
      ],
      examples: [
        "A founder launches with zero event tracking. In month 4, an investor asks 'what's your activation rate?' The answer is 'we think it's good.' The meeting cools. The tracker that costs $0/month in month 1 would have been the difference between confidence and a shrug.",
        "Another founder ships a redesign with a measurement plan: activation expected +15%, review in 3 weeks. The number comes back -8%. She reverts in a week, a cost measured in days instead of months.",
        "A founder ships a new onboarding with a measurement plan: activation +15% expected, review in 3 weeks. The number comes back +2%. Small win, honest review: he keeps the change but stops the marketing push he had planned around it.",
        "A team tracks five events from day one. In month 6, an investor asks three questions: activation rate, week-4 retention, payment conversion. The founder answers all three from memory in two minutes. The meeting moves from 'tell us about the market' to 'here is the term sheet.'",
        "A founder's dashboard has 40 charts and nobody opens it. He cuts it to 8 numbers and a 3-sentence story. Now the whole team reads it every Monday, and a slowdown in activation is caught in week 2 instead of month 4.",
      ],
      actionItems: [
        "Set up the event tracker and instrument: signup, activation, usage, churn signal, payment.",
        "Write the measurement plan for your current in-flight feature: metric + direction + review date.",
        "Build the one-page 8-number dashboard with the 3-sentence story block.",
        "Name your five core events in writing. Use verb_noun names: 'signup_completed,' 'invoice_created.'",
        "Set a weekly 30-minute metrics review on your calendar and never move it.",
        "Pick the one question that matters this month. Let it choose the one chart you open.",
      ],
      keyPoints: [
        "Instrument day one. Cohort data you did not collect is gone forever.",
        "Every ship gets a measurement plan: metric, direction, review date.",
        "One page, 8 numbers, weekly, with a story.",
        "Metrics reading is the founder's personal job.",
        "Track five core events. They answer 80% of early questions.",
        "One question at a time. Dashboards of everything answer nothing.",
      ],
    },
    {
      id: "product-9",
      title: "The founder's product mindset: taste, speed, and user love",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your product will be as good as your habits as a founder.",
            "Use your own product, ship often, and care about the little details.",
            "Those three habits beat talent, money, and luck in the long run.",
          ],
        },
        {
          heading: "Taste is a skill you build",
          paragraphs: [
            "Taste is the ability to see the difference between good and great, and to feel the user's experience as your own. It is built the same way as any skill: by consuming great products deeply, by shipping and feeling the gap between intent and outcome, and by doing the work yourself.",
            "Use the best products in your category and the adjacent ones, and note what makes them work. The founder who has used their product 100 times this week feels the friction that the roadmap will never catch.",
            "The taste loop: use your product like a demanding customer, every week. Find the friction, fix it, repeat. Taste compounds: every round of use raises the bar for the next.",
            "Train taste like a muscle: once a month, use the best product in your category and write down three things it does that yours does not. Then steal one of them, in your own way. Taste also means knowing what NOT to build: great products are great partly because of what they leave out.",
          ],
        },
        {
          heading: "Speed as a product feature",
          paragraphs: [
            "At the early stage, speed IS the competitive advantage. The team that ships weekly learns monthly what the team that ships quarterly learns yearly. Speed compounds into an un-replicable data advantage: you have tested 50 things, they have tested 5.",
            "The speed killers: perfect-first culture (ship good, learn, iterate), heavyweight process (reviews, tickets, ceremonies for a 3-person team), and the founder as bottleneck (delegating decisions late).",
            "The speed practices: small releases, clear owners, ship-then-polish, and a bias to 'try it and see' over 'discuss it more.'",
            "Speed is a team culture. Celebrate the small ship, not the big meeting. And speed does not mean sloppy: it means small scope and fast feedback. Quality comes from the loop, not from the extra week of polishing.",
          ],
        },
        {
          heading: "The product love test",
          paragraphs: [
            "The final metric: would you use this product if you were not the founder? If the honest answer is 'not really,' that is the highest-priority roadmap item. The product the founder does not love, customers will not either.",
            "The love gap is usually a symptom: the founder shipped the roadmap of requests instead of the roadmap of the job.",
            "The product is the company's letter to the market. The founder's job is to make sure it says something true and useful, and that it keeps saying it, better, every release.",
            "The love test in practice: use the product for a real job this week, not a demo. If you stop halfway, that pause is the answer. Love is not vanity: it is the signal that the product does the job well enough that you yourself would choose it. If you would not, why would a stranger?",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake: never using your own product. The founder who does not feel the friction cannot fix the friction.",
            "Mistake: waiting for perfection. Perfect is the enemy of shipped. Ship good, learn, iterate.",
            "Mistake: the founder as bottleneck. If every decision waits for you, speed dies. Give clear owners and let them decide.",
            "Mistake: building the roadmap of requests instead of the roadmap of the job. Requests are input, not the plan.",
          ],
        },
      ],
      examples: [
        "A founder ships every Monday for a year: 50 releases, 30 experiments, 4 pivots of messaging. The competitor that 'does it right' ships quarterly. By year 2 the founder's data on what works in the market is 10x the competitor's, and the market can feel it.",
        "A founder uses his own product weekly and finds the same friction in the same place, three weeks running. He stops the feature roadmap for a week, fixes the friction, and support volume on it drops by half. Taste, applied.",
        "A founder adds a 'monthly best-in-class review' to her calendar. Each month she studies one great product and steals one idea, adapted to her users. Over a year, twelve small improvements compound into a noticeably better product.",
        "A 3-person team has a review meeting for every release. Ships happen monthly. The founder removes two steps of process, and ships go weekly. In three months the team runs 10 experiments instead of 3.",
        "A founder answers the love test honestly: 'I would not use this if I were not the founder.' He cancels the next two features and spends the month on the core flow. Support volume drops 30%, and he starts using the product himself.",
      ],
      actionItems: [
        "Block one hour weekly to use your product as a demanding customer, and fix the top friction.",
        "Adopt a weekly ship cadence with a 'try it and see' bias for the next 6 weeks.",
        "Run the love test monthly: would you use this if you were not the founder?",
        "This month, study the best product in your category and write down three things it does better. Steal one, in your own way.",
        "Find one process step that slows your team down and remove it this week.",
        "Do one real job with your product this week, from start to finish, and write down every pause.",
      ],
      keyPoints: [
        "Taste is built by using, shipping, and feeling the gap.",
        "Speed is the early-stage moat. It compounds into a data advantage.",
        "Ship good, learn, iterate. Kill process bloat.",
        "The love test: use it yourself, every week.",
        "The product is the company's letter to the market. Make it true and useful, and better every release.",
        "Quality comes from the loop of shipping and feedback, not from polishing forever.",
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
      explanation: "Willingness to pay is the strongest rung on the validation ladder. Behavior beats opinion.",
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
      explanation: "The MVP is the smallest test of the one assumption whose failure kills the company. Nothing more.",
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
      explanation: "Activation is when the user's problem gets smaller. It is the behavior that correlates with week-4 retention.",
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
      explanation: "Each row is a cohort and each column is a week since signup. The curve's shape is the diagnosis.",
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
      explanation: "40%+ answering 'very disappointed' is the classic PMF threshold, combined with holding cohorts.",
    },
    {
      question: "The most common successful pivot is:",
      options: [
        "Technology change",
        "Segment pivot, same product, different customer",
        "Brand refresh",
        "Moving to another market entirely",
      ],
      correctIndex: 1,
      explanation: "Often the product was right and the buyer was wrong. The segment pivot is the most common fix.",
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
      explanation: "The product grows by what you refuse to build. Hear the requests, synthesize the job, ship what moves the metric.",
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
      explanation: "Support tickets are users hitting the real edges. Twenty conversations a week, categorized, seed the roadmap.",
    },
    {
      question: "In a problem interview, which question is better?",
      options: [
        "Would you pay for this?",
        "Have you paid for something like this?",
        "Do you like this idea?",
        "How much would you pay?",
      ],
      correctIndex: 1,
      explanation: "Past behavior predicts future behavior. 'Have you paid for something like this?' gets the truth. 'Would you pay?' gets a polite yes.",
    },
    {
      question: "A user requests 'add a dark mode.' What should the founder do first?",
      options: [
        "Build it immediately",
        "Ask what job the request serves and how they work today",
        "Ignore the request",
        "Ask five friends if they want dark mode",
      ],
      correctIndex: 1,
      explanation: "Users describe solutions; the truth is the underlying job. Translate the request into the job before prioritizing.",
    },
  ],
  exam: [
    {
      question: "A founder finishes 15 problem interviews and still cannot name the pain, the frequency, or the buyer. What should she do?",
      options: [
        "Build anyway to test the market",
        "Keep interviewing, change the questions or the people, or walk away",
        "Pitch the solution to friends for feedback",
        "Ask family what they think",
      ],
      correctIndex: 1,
      explanation: "If you cannot name the pain, the frequency, and the buyer after 15 interviews, the problem is weak or you are asking the wrong people. Keep searching or walk away.",
    },
    {
      question: "Which interview answer is the strongest signal of a real market?",
      options: [
        "That sounds like a great idea",
        "I tried three workarounds and still lose sleep over it",
        "I could use that someday",
        "My neighbor would love this",
      ],
      correctIndex: 1,
      explanation: "An emotional reaction to the problem, with tried workarounds, is the signal. Polite nodding is an opinion.",
    },
    {
      question: "A founder's riskiest assumption is demand. What is the cheapest MVP that tests it with real behavior?",
      options: [
        "The full product with 20 features",
        "A landing page with a preorder button",
        "A polished demo video",
        "A competitor analysis",
      ],
      correctIndex: 1,
      explanation: "When demand is the riskiest assumption, a landing page with a preorder button tests willingness to pay without building anything.",
    },
    {
      question: "The MVP returned 12% clicks against a pre-committed bar of 40%. The right response is:",
      options: [
        "Declare victory because some people clicked",
        "Iterate on message or segment, or kill the test",
        "Ship the full product to compensate",
        "Ignore the numbers and trust the idea",
      ],
      correctIndex: 1,
      explanation: "Pre-committed criteria protect you from spin. Below the bar means iterate or kill, never spin.",
    },
    {
      question: "What is the activation event?",
      options: [
        "The signup",
        "The first moment of core value that predicts retention",
        "The first support ticket",
        "The first ad click",
      ],
      correctIndex: 1,
      explanation: "The activation event is the behavior that correlates with week-4 retention. Find it in data, not intuition.",
    },
    {
      question: "A new user signs up and sees a blank dashboard. What is the most likely outcome?",
      options: [
        "They explore and figure it out",
        "They leave, because the empty state gives no next step",
        "They invite their team",
        "They read the docs",
      ],
      correctIndex: 1,
      explanation: "Empty-state death is real. Give users a template, a sample, and a clear next step toward the activation event.",
    },
    {
      question: "A founder's churn is 22% among low-usage SMB accounts and 1% among daily-use enterprise accounts. The best first response is:",
      options: [
        "Build a new feature for everyone",
        "Treat it as a segment problem, not a product problem",
        "Lower the price for everyone",
        "Send win-back emails to everyone",
      ],
      correctIndex: 1,
      explanation: "Classify churn before fixing it. When one segment never activated and another is sticky, the fix is segment strategy, not a product change.",
    },
    {
      question: "Which move builds the habit loop for a product whose job happens monthly?",
      options: [
        "A recurring monthly report or value moment",
        "More onboarding questions",
        "A bigger ad budget",
        "A yearly survey",
      ],
      correctIndex: 1,
      explanation: "Value decay happens when the job recurs monthly but the product is used once. Meet the user at the job's rhythm.",
    },
    {
      question: "Which combination best proves product-market fit?",
      options: [
        "One month of high signups",
        "Three consecutive cohorts holding week-4 retention, NRR above 100%, and organic growth signals",
        "A viral blog post",
        "40 feature requests",
      ],
      correctIndex: 1,
      explanation: "PMF is a zone, not a moment. Cohorts hold across months, NRR stays above 100%, and users arrive without being bought.",
    },
    {
      question: "A founder sees one strong month and scales ad spend 5x. The next cohort's retention is half. What happened?",
      options: [
        "The product got worse",
        "The spike was a channel artifact, not fit",
        "Ads are always bad",
        "Retention is not important",
      ],
      correctIndex: 1,
      explanation: "One spike is not fit. Pre-committed cohort criteria would have caught this before the burn.",
    },
    {
      question: "Three customers ask for the same export feature. The founder should treat this as:",
      options: [
        "A support conversation with one customer",
        "A signal of a shared job worth testing",
        "A reason to drop everything",
        "A request to ignore",
      ],
      correctIndex: 1,
      explanation: "Three customers with the same job and workaround is a signal. One customer asking is a support conversation.",
    },
    {
      question: "A user says 'make the app faster.' What is the underlying job the founder should translate this into?",
      options: [
        "They hate your design",
        "The export takes too long and they lose time",
        "They want a new feature",
        "They want you to add animations",
      ],
      correctIndex: 1,
      explanation: "Users describe solutions. The truth is the underlying job: the export takes too long and they lose time.",
    },
    {
      question: "Why must a founder instrument analytics in month 1?",
      options: [
        "Because investors demand dashboards",
        "Cohort data not collected early is gone forever",
        "It is cheaper than interviews",
        "Tools get more expensive later",
      ],
      correctIndex: 1,
      explanation: "Retroactive tracking is a myth. The cohort data you did not collect in month 1 is gone forever.",
    },
    {
      question: "What makes a dashboard get read?",
      options: [
        "40 charts of everything",
        "One page, 8 numbers, weekly, with a 3-sentence story",
        "Real-time alerts for every event",
        "The most colorful design",
      ],
      correctIndex: 1,
      explanation: "A dashboard nobody reads is worse than none. One page, 8 numbers, a story: up because, down because, the risk.",
    },
    {
      question: "A founder is the bottleneck on every product decision. The best fix is:",
      options: [
        "Decide everything faster yourself",
        "Give clear owners and let them decide small things",
        "Cancel all releases",
        "Hire a consultant for decisions",
      ],
      correctIndex: 1,
      explanation: "The founder as bottleneck kills speed. Clear owners and small decisions keep the ship cadence alive.",
    },
    {
      question: "The founder answers the love test with 'I would not use this if I were not the founder.' What should happen?",
      options: [
        "Nothing, founders are biased",
        "Fix the core flow so the founder would use it; customers will not love what the founder does not",
        "Spend more on ads",
        "Add more features quickly",
      ],
      correctIndex: 1,
      explanation: "The product the founder does not love, customers will not either. The love gap is usually a symptom of shipping requests instead of the job.",
    },
  ],
};