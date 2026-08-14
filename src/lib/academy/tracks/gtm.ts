import type { AcademyTrack } from "../types";

export const gtmTrack: AcademyTrack = {
  id: "gtm",
  title: "Go-to-Market & Sales",
  tagline: "Positioning, channels, founder-led sales, and the pipeline that becomes revenue.",
  icon: "megaphone",
  estimatedHours: "4.5h",
  free: false,
  lessons: [
    {
      id: "gtm-1",
      title: "Positioning: the decision you make before marketing",
      readMinutes: 9,
      sections: [
        {
          heading: "Positioning is the story the market tells about you",
          paragraphs: [
            "Positioning is not your tagline — it's the category you own in the buyer's mind: who you're for, what job you do, and who you're different from. Bad positioning is the most expensive mistake in go-to-market: you can spend a fortune driving traffic to a story that doesn't land. Good positioning makes every channel cheaper.",
            "The positioning statement template: 'For [target customer], who [have this problem], [product] is a [category] that [core benefit], unlike [alternative], which [their weakness].' Fill it with nouns and specifics, not adjectives ('revolutionary' is a claim, not a position).",
            "The test of a position: can the buyer repeat it? If the buyer can't say back what you do in one sentence that matches how they'd describe it to a colleague, the position isn't theirs yet — it's yours.",
          ],
        },
        {
          heading: "The positioning traps",
          paragraphs: [
            "Trap 1: positioning for everyone ('we help any business grow') — that's positioning for no one; buyers sort themselves out, and the ones who stay are the wrong ones. Trap 2: feature-led positioning ('we have AI and automations') — features are evidence, not position; the buyer buys the job, not the tech. Trap 3: copying the category leader's language — 'the Uber of X' positions you as the imitation.",
            "The healthy position names a specific segment, a sharp job, and a real alternative (doing nothing, spreadsheets, the incumbent). The alternative IS part of the position — 'unlike spreadsheets, which break at scale' tells the buyer what you're replacing.",
          ],
        },
        {
          heading: "Positioning as a process, not a launch",
          paragraphs: [
            "Positioning is tested like everything else: state it, put it on the landing page, watch the activation and conversion data, listen to what customers say back, and refine. The best signal that a position is right: prospects describe you back to you in your own words — and then they buy because the words matched their job.",
          ],
        },
      ],
      examples: [
        "A tool that does payroll + HR for 'all small businesses' gets 2% landing-page conversion. Repositioned as 'payroll for US construction crews' (a segment, a job, a spreadsheets-and-paper alternative), conversion triples — the market sorted itself when the position got sharp.",
        "A founder's position: 'we're an AI copilot for sales teams.' Nobody buys a category they don't have. Repositioned: 'for B2B sales leaders who lose deals in the redlines, DealWatch is contract review that flags risky terms in seconds — unlike legal review, which takes a week.' Now the buyer has a job and a comparison.",
      ],
      actionItems: [
        "Fill in the positioning template with nouns and specifics, in one paragraph.",
        "Test it: put it on your landing page and watch conversion for 2 weeks.",
        "Write the alternative you replace and its weakness — if you can't, sharpen.",
      ],
      keyPoints: [
        "Positioning = the category you own in the buyer's mind.",
        "Template: for [customer] with [problem], [product] is a [category] that [benefit], unlike [alternative].",
        "A position is real when the buyer can repeat it.",
        "Name the segment, the job, and the alternative.",
      ],
    },
    {
      id: "gtm-2",
      title: "The ICP and the market you enter first",
      readMinutes: 8,
      sections: [
        {
          heading: "Defining the ICP tightly",
          paragraphs: [
            "The ICP (ideal customer profile) is the buyer you'd take 10 of, now: the segment where the pain is sharpest, the budget exists, and the alternative is weakest. Write it as a firmographic + behavioral profile: industry, size, revenue, tech stack, and the trigger ('just got audited,' 'hiring a compliance officer').",
            "The 'just' trigger matters: people buy in moments, not in general. 'SMBs' is a market; 'SMBs that just failed a compliance audit' is an ICP. The sharper the ICP, the cheaper the CAC — you know where they gather, what they read, and what to say.",
            "Most companies enter too wide. The counter-intuitive rule: your first 20 customers should be nearly identical. A narrow beachhead (segment × job) that you dominate beats a wide market where you're a small fish in every pond.",
          ],
        },
        {
          heading: "The buyer inside the company",
          paragraphs: [
            "Two buyers in B2B: the user (who feels the pain daily) and the economic buyer (who controls budget). In SMB, often the same person. In enterprise, almost never. Your positioning must answer for BOTH: the user's pitch is 'this makes your job measurably better'; the economic buyer's pitch is 'this returns more than it costs, with acceptable risk.'",
            "The champion: your ally inside the account who sells for you. The champion is cultivated, not discovered: they need the ROI math, the internal memo, and the demo assets that make their case easy. A deal without a champion is a lottery ticket.",
          ],
        },
        {
          heading: "The no-market test",
          paragraphs: [
            "The market you chose is right when: you can name 50 specific companies in it, you can name the trigger events that precede purchase, and you know the 3 alternatives they use today. If you can't name 50 companies or the alternatives — the ICP is too vague, and every channel will be expensive because you're marketing to a fiction.",
          ],
        },
      ],
      examples: [
        "A compliance tool enters as 'for regulated SMBs.' CAC: $4,000. Sharpened to 'US clinics with 5-50 staff that bill Medicare' — now they know the conferences, the trade press, and the exact trigger (a CMS audit letter). CAC drops to $900.",
        "A founder sells to the 'user' (a marketing manager) but the economic buyer (the CFO) needs ROI. The deal stalls until he gives the champion an internal one-pager: 3x ROI, pilot terms, risk mitigation. The champion closes it for him.",
      ],
      actionItems: [
        "Write your ICP as a firmographic + trigger profile, and name 50 companies in it.",
        "Write the two pitches: to the user and to the economic buyer.",
        "Identify your 3 alternatives in the segment and their weakness (this IS the positioning).",
      ],
      keyPoints: [
        "ICP = the segment with the sharpest pain, budget, and weakest alternative.",
        "Triggers ('just got audited') beat demographics.",
        "First 20 customers nearly identical — dominate the beachhead.",
        "Sell to the user and the economic buyer; cultivate the champion.",
      ],
    },
    {
      id: "gtm-3",
      title: "Channel selection: where your customers actually are",
      readMinutes: 9,
      sections: [
        {
          heading: "The channel menu",
          paragraphs: [
            "The channels: founder-led outbound (cold email/DM — works for B2B with a clear ICP), content/SEO (slow, compounds, works when buyers search for the problem), paid search (works when intent exists and CAC math holds), paid social (works for consumer/PLG and warm audiences), partnerships/integrations (works when you sit beside an existing workflow), community/word-of-mouth (works when the product is inherently shareable), and marketplace/platforms (list where buyers already shop).",
            "The early-stage rule: pick ONE primary channel and go deep, not five channels shallow. Depth creates compounding knowledge (you learn the channel's language, its costs, its loops) while breadth spreads you thin. The second channel comes from what the first channel's data suggests.",
          ],
        },
        {
          heading: "Matching channel to motion",
          paragraphs: [
            "The channel must match your go-to-market motion: product-led (users discover/use before buying) needs self-serve discovery — content, SEO, viral loops, integrations. Sales-led (a rep closes the deal) needs outbound and targeted demand gen. The mismatch (a sales-led product with only passive content, or a self-serve product with only outbound reps) is the classic dead channel.",
            "The math for any channel: LTV:CAC must clear 3x and CAC payback under 12 months (finance track). Every channel decision is a unit-economics decision wearing a marketing costume.",
          ],
        },
        {
          heading: "The 6-week channel test",
          paragraphs: [
            "Before committing to a channel, run a 6-week test with a fixed budget and pre-committed pass/fail numbers (e.g., 'outbound: 30 demos booked at <$400 each, or we stop'). Measure acquisition cost AND the downstream quality (does the channel's customer retain? convert? churn?). A channel that delivers cheap but wrong customers is worse than no channel.",
            "Document the test: the hypothesis, the spend, the results, the learning. The learning is the asset even when the channel fails — every failed channel test tells you where the customer isn't, which is as valuable as where they are.",
          ],
        },
      ],
      examples: [
        "A B2B tool's founder runs outbound as the one channel: 200 personalized emails/week, a strong ICP, a real trigger. By week 8 he has 14 demos and 3 logos — CAC under $800, LTV:CAC at 5x. The channel works; he scales it before touching anything else.",
        "Another founder spreads $5K across ads, SEO, a newsletter, and a podcast sponsor. Every channel is 'working a little' — which means none is working enough to learn from. The data is too thin to double down; the budget is gone.",
      ],
      actionItems: [
        "List the 5 candidate channels and pick the ONE your motion demands.",
        "Write the 6-week test with pre-committed pass/fail numbers and budget.",
        "Run it, log everything, and let the data pick channel #2.",
      ],
      keyPoints: [
        "One primary channel, deep — not five shallow.",
        "Match channel to motion: PLG vs sales-led.",
        "Every channel is a unit-economics decision.",
        "6-week tests with pre-committed numbers; the learning is the asset.",
      ],
    },
    {
      id: "gtm-4",
      title: "Founder-led sales: the first revenue machine",
      readMinutes: 9,
      sections: [
        {
          heading: "Why the founder sells",
          paragraphs: [
            "At the start, the founder is the best seller: you know the product deeper, the story is yours, and the customer can smell conviction. Founder-led sales also teaches the market faster than any survey — every 'no' is product research, every 'why did you buy' is positioning research.",
            "The rule: sell personally until you can't (until there are more opportunities than your hours), and sell to learn even after you hire sellers — the founder who stops selling loses the direct line to the market.",
          ],
        },
        {
          heading: "The discovery call that sells",
          paragraphs: [
            "The 30-minute discovery call structure: 10 minutes of questions (the problem, the current process, the cost of the problem, the decision process), 10 minutes of the pitch (tailored to what you just heard — not a canned deck), 10 minutes of next steps (the demo, the trial, the proposal) and the close ('does this solve your problem well enough to move forward?').",
            "The questions that sell: 'how do you handle X today?' (reveals the alternative), 'what happens when it goes wrong?' (reveals the cost), 'what would a solution need to prove?' (reveals the buying criteria — then meet those criteria in your pitch), and 'who else needs to be involved?' (reveals the process).",
            "The founder's error: pitching before discovering. The pitch that follows the discovery is 10x more relevant than the pitch you came in ready to deliver.",
          ],
        },
        {
          heading: "The no-pressure close and the follow-up",
          paragraphs: [
            "The close isn't a trick; it's clarity: 'based on what you've shared, here's what we propose, here's the price, here's the timeline. Does this work for you?' Then — silence. The next speaker owns the outcome.",
            "Follow-up is where founders lose deals: most sales happen after the 4th touch. A simple cadence — recap after the call, the proposal, a check-in at day 3, day 10, and a 'closing or parked?' at day 21 — recovers more revenue than any pitch skill. The unresponsive prospect isn't a no; it's a follow-up you haven't sent.",
          ],
        },
      ],
      examples: [
        "A founder cold-emails 20 clinics with a 3-line problem hook. Four reply. In discovery, the questions reveal the real buying criteria (not cost — integration risk). The pitch meets the criteria; two clinics sign. Revenue, research, and a repeatable script in one.",
        "A founder closes 'we'll get back to you' and never follows up. The prospect buys from a competitor who followed up four times. The founder learns the lesson the expensive way: silence isn't a decision, it's an opening.",
      ],
      actionItems: [
        "Script your discovery questions (problem, current process, cost, criteria, process).",
        "Build the 30-minute call structure: 10/10/10 with the tailored pitch and the close.",
        "Adopt the follow-up cadence template: recap, proposal, day 3, day 10, day 21.",
      ],
      keyPoints: [
        "The founder sells until they can't — and sells to learn forever.",
        "Discover before you pitch; 10 minutes of questions beats a canned deck.",
        "The close is clarity, not a trick — then silence.",
        "Most sales happen after the 4th touch — follow up.",
      ],
    },
    {
      id: "gtm-5",
      title: "The revenue engine: pipeline, demos, and deals",
      readMinutes: 9,
      sections: [
        {
          heading: "The pipeline structure",
          paragraphs: [
            "The pipeline is the forecast: every opportunity with a stage, an owner, an amount, and an expected close date. The stages (adapted to your business): lead → qualified → discovery done → demo done → proposal → verbal yes → closed. The discipline: an opportunity isn't 'real' until it has a champion, a budget signal, and a decision date.",
            "The pipeline math: how many leads → qualified → demos → proposals → closes? The conversion rates ARE the forecast. If 100 leads → 10 demos → 3 closes, then revenue = leads × 3%. Every lever (more leads, better qualification, higher close rate) moves the same output — but the cheapest lever is usually qualification, not more leads.",
            "The founder's weekly pipeline review: 20 minutes, every opportunity, the next action, the blocker. The question for each: 'what would make this close — and who owns it?' A pipeline without an owner and a next action isn't a pipeline; it's a wishlist.",
          ],
        },
        {
          heading: "The demo that closes",
          paragraphs: [
            "The demo is the pitch meeting (from the fundraising track) applied to the sale: 5-7 minutes, the customer's job, real data, the wow moment. But the sales demo adds two things: the objection section (show the feature that answers the objection they raised) and the next step ('let's set up your pilot').",
            "Sales demos fail in two ways: the feature tour (demonstrates your tool, not their job) and the monologue (the rep talks for 25 of 30 minutes). The demo is a conversation with a guided walkthrough — pause, check, ask 'does this match how you'd use it?'",
          ],
        },
        {
          heading: "Proposals and the decision date",
          paragraphs: [
            "The proposal is short and specific: the problem you heard, the solution, the price, the timeline, the implementation plan, and — the part most founders skip — the decision date and the next step. 'We'll review it' is not a next step.",
            "The negotiation floor: know your discount floor and your 'no' before the conversation. Discounts trade margin for urgency; the healthy pattern is value-added (more scope, better terms, an annual contract) instead of price cuts. And never discount without getting something — a discount without a concession trains the customer to ask for the next one.",
          ],
        },
      ],
      examples: [
        "A founder's pipeline has 40 'opportunities' and no forecast. A qualification pass cuts it to 9 real ones — with champions, budgets, and dates. The 9 close faster than the 40 ever would have, because effort concentrated where probability lived.",
        "A proposal says 'we'd love to work with you.' The prospect says 'great, we'll get back to you.' Two weeks later — nothing. The rewrite includes a decision date and a pilot start date. Three prospects in a row move. The missing sentence was the missing deal.",
      ],
      actionItems: [
        "Build your pipeline stages and the qualification bar (champion, budget, decision date).",
        "Calculate your conversion rates: leads → demos → proposals → closes.",
        "Schedule the weekly 20-minute pipeline review with the 'what makes this close?' question.",
      ],
      keyPoints: [
        "Pipeline = forecast; conversions = the math.",
        "Qualification is the cheapest lever — real deals have champion, budget, date.",
        "The sales demo is their job, not your feature tour.",
        "Every proposal ends with a decision date and a next step.",
      ],
    },
    {
      id: "gtm-6",
      title: "Objections, pricing resistance, and the hard conversation",
      readMinutes: 8,
      sections: [
        {
          heading: "The objection playbook",
          paragraphs: [
            "The five objections: 'too expensive' (value not established — return to the cost of the problem), 'not now' (no urgency — find or create the trigger), 'we're happy with what we have' (the alternative is comfortable — quantify its cost), 'need to think about it' (usually a hidden objection — ask 'what specifically is giving you pause?'), and 'no budget' (either real — change the proposal, or a polite no — qualify out).",
            "The objection skill: don't answer the surface objection — answer the job under it. 'Too expensive' almost always means 'I don't yet believe it's worth more than the price.' The fix is not a discount; it's the value story: 'here's what the problem costs you monthly, here's what we save you, here's the payback.'",
            "The honest objection: 'this is a real deal, but our budget is $4K and you're $6K.' Now the conversation is legitimate — a scope change, an annual prepay, a phased rollout, or a genuine pass. Never invent urgency; the buyer who senses manipulation stops trusting everything.",
          ],
        },
        {
          heading: "The lost deal review",
          paragraphs: [
            "Every lost deal is a lesson if you extract it. The review: what did we promise vs. deliver? Where did the deal stall (stage)? Who said no and why (real reason, not the polite one)? What would have changed the outcome? Collect 10 lost-deal reviews and the pattern writes your roadmap — pricing, feature gaps, or qualification failures.",
            "The discipline: actually call the lost prospect and ask. Most founders skip it because it's uncomfortable — and that's exactly why the ones who do it win.",
          ],
        },
        {
          heading: "When to walk away",
          paragraphs: [
            "The qualification that saves you: a deal where the champion is weak, the budget is a hope, and the timeline is 'someday' is not a deal — it's a time sink. The founder's scarcest resource is attention; a weak pipeline that looks busy is how startups spend six months 'in talks' with zero revenue.",
            "The walk-away test: 'if this closed today, would it move our metrics?' If no, the opportunity doesn't deserve a next action — park it and move to one that does.",
          ],
        },
      ],
      examples: [
        "A prospect says 'too expensive' to a $2K/mo tool that replaces $8K/mo in manual work. The founder's fix isn't a discount — it's the payback table: 2-month ROI, then 'is the problem worth $2K/mo to remove?' The prospect signs, at full price.",
        "A founder chases a 'hot' enterprise lead for 4 months: no champion, no budget signal, 'we love your product.' The competitor's cold email to the actual buyer closes in 3 weeks. The founder's pipeline was a comfort object, not a forecast.",
      ],
      actionItems: [
        "Write your objection playbook: the five objections and the job under each.",
        "Call your last 3 lost prospects and ask the real reason — log the pattern.",
        "Apply the walk-away test to your current pipeline and park the dead weight.",
      ],
      keyPoints: [
        "Answer the job under the objection, not the surface.",
        "'Too expensive' = value not established — return to problem cost.",
        "Lost-deal reviews are the roadmap; do them even when it's uncomfortable.",
        "Walk away from no-champion, no-budget, no-date deals.",
      ],
    },
    {
      id: "gtm-7",
      title: "Content and brand: the assets that sell while you sleep",
      readMinutes: 8,
      sections: [
        {
          heading: "Why content works for founders",
          paragraphs: [
            "Content is the cheapest compounding channel: it builds trust before the first call, it educates the market (which makes your sales calls shorter), and it compounds (a post from month 1 still sells in month 24). For a founder, content is also a research channel — the comments and replies are discovery.",
            "The content strategy at this stage: not 'post daily' (that's noise) but 'document what you're learning honestly.' The founders whose content works are the ones who write about the problem from inside it — the failed experiment, the pricing lesson, the customer story. Painful honesty outperforms polished hype because trust is built in the specificity.",
          ],
        },
        {
          heading: "The content that converts",
          paragraphs: [
            "The formats that convert: the customer problem explainer (the pain, the cost, the fix — positions you), the teardown (analyze how the market solves the problem — shows expertise), the before/after (a customer's result — social proof), and the point-of-view piece (your thesis on the category — attracts believers).",
            "Distribution: 80% of the work is distribution, not writing. Repurpose one deep piece into 5 snippets across channels, engage in the comments where your ICP lives, and answer questions (the search and community channels) — answering IS marketing when you answer from expertise.",
            "The quality bar: every piece must either teach the reader something true or make them feel seen. Content that does neither is digital litter that also happens to advertise you.",
          ],
        },
        {
          heading: "Brand is what people say when you're not there",
          paragraphs: [
            "Brand at this stage is built in two places: the product (the experience speaks) and the founder's public voice (consistent, specific, trustworthy). The brand moat: every honest piece of content, every good support reply, every solved problem in public compounds into a reputation that competitors can't copy in a quarter.",
            "The rule: be known for ONE thing (your position, from lesson 1), say it consistently, and let the specificity be the filter — the wrong customers self-select out, which is the point.",
          ],
        },
      ],
      examples: [
        "A founder writes weekly essays on contract-review pain for legal ops. 40 posts in, prospects start saying 'I read your thing about redlines — that's us.' The inbound calls convert at 3x the outbound rate, and the content that cost 2 hours/week out-sells the paid channels.",
        "Another founder posts daily 'growth hacks' — generic, listicle, no specificity. The audience is other founders, not buyers. The channel produces followers, not revenue. Honesty about the real problem would have produced the opposite.",
      ],
      actionItems: [
        "Write one deep, honest piece on the customer problem this week (not a hype post).",
        "Repurpose it into 5 snippets and distribute where your ICP actually reads.",
        "Pick the ONE thing you'll be known for and say it consistently for 90 days.",
      ],
      keyPoints: [
        "Content compounds and makes sales calls shorter.",
        "Document the learning honestly — trust lives in specificity.",
        "80% of content is distribution; answering is marketing.",
        "Be known for one thing, consistently.",
      ],
    },
    {
      id: "gtm-8",
      title: "Customer success: the revenue hiding in the base",
      readMinutes: 8,
      sections: [
        {
          heading: "Success is the second sales team",
          paragraphs: [
            "The base is the cheapest revenue: selling more to an existing customer costs a fraction of acquiring a new one, and retention (from the product track) is the compounding engine. Customer success at the early stage = making sure every customer gets their activation moment, hits their first success, and sees the value weekly.",
            "The early CS rhythm: a check-in at day 7 and day 30 (did they activate? did they hit value?), a monthly value review (what did the product do for you this month?), and a health score (usage, support, sentiment) that predicts churn before it happens. The customer who goes quiet is the customer about to leave — reach out first.",
            "The one-number job: NRR (from the finance track). Every CS activity should move NRR — expansion (upsells, add-ons, seat growth) or contraction prevention (saving the account). CS that 'keeps customers happy' without touching NRR is cost; CS that grows NRR is revenue.",
          ],
        },
        {
          heading: "The expansion conversation",
          paragraphs: [
            "Expansion comes from usage, not from asking: when a customer uses more (more seats, more volume, an adjacent feature), the expansion conversation writes itself — 'you're now using X beyond your plan; here's the natural next step.' Track usage, spot the growth, and make the offer at the moment of value, not at renewal day.",
            "The B2B expansion levers: seats (more users), volume/tier (more usage), add-ons (adjacent features), and annualization (cash now for retention). The order: help them use more first, then ask. Asking before value is how expansion dies.",
          ],
        },
        {
          heading: "The churn-save play",
          paragraphs: [
            "When a customer threatens to leave: find out the REAL reason (usually value or fit, not price), fix what's fixable (the missing feature, the underused value), restructure what's not (plan change, pause, a scaled-down version), and accept what's true (sometimes the fit is wrong — let them go gracefully and learn).",
            "The churn-save math: saving an account is worth many months of revenue; but saving the WRONG account (a segment that will churn again) just delays the lesson. Log every churn-save attempt — the patterns tell you which customers to stop acquiring, which is the real fix.",
          ],
        },
      ],
      examples: [
        "A SaaS's NRR is 92% (below 100% — the treadmill). The CS lead finds the pattern: customers who never hit activation churn at 5x. The fix is onboarding, not CS effort. Six months later NRR is 104% — the base started growing the company.",
        "A customer at 300% usage growth is still on the base plan. The founder spots the usage spike in the health dashboard, offers the next tier with a smooth migration — and closes a 3x expansion with a 10-minute conversation.",
      ],
      actionItems: [
        "Build the day-7/day-30 check-in and the monthly value review for every customer.",
        "Add a usage-based health score that flags quiet accounts before they churn.",
        "Write the expansion play: spot usage growth → offer at the moment of value.",
      ],
      keyPoints: [
        "The base is the cheapest revenue; NRR is the one-number job.",
        "Reach the quiet customer first — silence precedes churn.",
        "Expansion follows usage: help them use more, then ask.",
        "Churn-save patterns tell you which customers to stop acquiring.",
      ],
    },
    {
      id: "gtm-9",
      title: "Scaling from founder-led to a sales motion",
      readMinutes: 8,
      sections: [
        {
          heading: "When to hire sellers",
          paragraphs: [
            "The signal to hire the first seller: you have more real opportunities than you can personally work (usually a full pipeline at a stable close rate). The wrong signals: 'we should have sales people' (org chart thinking) or hiring sellers to 'make up for' a weak product (sellers amplify the product's reputation, they don't fix it).",
            "The first seller profile: a founder-like operator who can build the playbook WITH you — not a process-appointed enterprise rep. They need: experience selling in your motion, hunger for variable comp, and the ability to document what they learn. The first seller's job is to make the second seller possible (playbook > quota).",
          ],
        },
        {
          heading: "The playbook first",
          paragraphs: [
            "Before hiring, you should be able to hand over a playbook: the ICP, the trigger events, the discovery script, the objection playbook, the demo flow, the pricing floor, and the pipeline stages. The playbook is what the founder learned selling personally — written down so it can be repeated.",
            "The system: a CRM from day one (the pipeline stages already exist — put them in the tool), the proposal template, the contract template, and the metrics (pipeline, conversion, CAC, NRR). Sales is a numbers game the moment it stops being a founder's personal relationships.",
            "Compensation: base + commission (60/40 or 70/30 base/variable), with a ramp. The commission structure is a strategy statement: pay for the metric you want (new revenue, NRR, or logo growth — pick deliberately).",
          ],
        },
        {
          heading: "The founder's role in the machine",
          paragraphs: [
            "The founder's sales job changes, not ends: from closing every deal to (1) being the closer on the top 3-5 accounts (the ones that establish the category), (2) reviewing the pipeline weekly, (3) coaching the sellers on the discovery calls (record them, review them), and (4) staying the voice in the market (content, customers, press).",
            "The transition trap: the founder who can't let go of the close. Selling personally is how you build it; scaling is how you win it. The founder's new job is to build the machine, not to be the machine.",
          ],
        },
      ],
      examples: [
        "A founder hires a salesperson after closing 20 logos himself and writing the 12-page playbook. The seller follows the playbook and closes 3 in his first month — the machine works because the process preceded the hire.",
        "Another founder hires two sellers 'to get sales going' with no playbook, no CRM, and no pricing floor. Three months later: zero deals, two burned paychecks, and a damaged market reputation from unpracticed demos.",
      ],
      actionItems: [
        "Write the playbook from what you've learned selling — before hiring anyone.",
        "Put your pipeline in a CRM with the stages, conversion math, and pricing floor.",
        "Define the first seller's ramp, comp structure, and the 'playbook complete' exit criteria for your role.",
      ],
      keyPoints: [
        "Hire when opportunities exceed your hours — not to 'fix' a weak product.",
        "The first seller's job is the playbook, not the quota.",
        "Sales is a numbers game once it stops being personal relationships.",
        "The founder closes the top accounts and builds the machine — not the other way around.",
      ],
    },
  ],
  quiz: [
    {
      question: "A positioning is real when:",
      options: [
        "The tagline is catchy",
        "The buyer can repeat it back in their own words",
        "The deck has a big market slide",
        "The logo looks professional",
      ],
      correctIndex: 1,
      explanation: "If the buyer can describe you the way they'd describe you to a colleague — the position has landed. Otherwise it's your story, not theirs.",
    },
    {
      question: "The strongest ICP includes:",
      options: [
        "Just an industry",
        "Firmographics AND a trigger event",
        "Company size only",
        "A revenue estimate",
      ],
      correctIndex: 1,
      explanation: "Triggers ('just failed an audit') beat demographics — people buy in moments, not in general.",
    },
    {
      question: "The early-stage channel rule is:",
      options: [
        "Five channels, shallow",
        "One primary channel, deep",
        "Whatever competitors use",
        "Always paid ads",
      ],
      correctIndex: 1,
      explanation: "Depth creates compounding channel knowledge. The second channel is chosen by the first channel's data.",
    },
    {
      question: "Most sales happen:",
      options: [
        "On the first call",
        "After the 4th touch",
        "In the discovery",
        "At the demo",
      ],
      correctIndex: 1,
      explanation: "The unresponsive prospect isn't a no — it's a follow-up not yet sent. Cadence recovers more revenue than pitch skill.",
    },
    {
      question: "A pipeline opportunity is 'real' when it has:",
      options: [
        "A friendly contact",
        "A champion, a budget signal, and a decision date",
        "A long email thread",
        "A signed NDA",
      ],
      correctIndex: 1,
      explanation: "Real deals have a champion, a budget signal, and a decision date. Everything else is a wishlist.",
    },
    {
      question: "'Too expensive' usually means:",
      options: [
        "The budget is truly zero",
        "Value hasn't been established",
        "They want a discount",
        "They're comparing competitors",
      ],
      correctIndex: 1,
      explanation: "The fix is the value story (problem cost vs. price), not a discount — answer the job under the objection.",
    },
    {
      question: "The one-number job for customer success is:",
      options: [
        "Support tickets closed",
        "NRR (net revenue retention)",
        "Customer satisfaction scores",
        "Number of check-ins",
      ],
      correctIndex: 1,
      explanation: "Every CS activity should move NRR — expansion or contraction prevention. Happy customers who don't grow revenue are cost, not success.",
    },
    {
      question: "The signal to hire your first seller is:",
      options: [
        "The org chart feels thin",
        "Opportunities exceed your hours at a stable close rate",
        "Competitors have sales teams",
        "Revenue is flat",
      ],
      correctIndex: 1,
      explanation: "Hire when there are more real opportunities than you can personally work — with a playbook to hand over.",
    },
  ],
};