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
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Positioning is deciding what people think you do before they even meet you. It is the one sentence a customer uses to describe you to a friend. If that sentence is clear, marketing gets cheaper. If it is fuzzy, no amount of ads can fix it.",
          ],
        },
        {
          heading: "Positioning is the story the market tells about you",
          paragraphs: [
            "Positioning is not your tagline. It is the category you own in the buyer's mind: who you're for, what job you do, and who you're different from. Bad positioning is the most expensive mistake in go-to-market. You can spend a fortune driving traffic to a story that doesn't land. Good positioning makes every channel cheaper, because fewer people bounce and more people say 'that's us.'",
            "The positioning statement template: 'For [target customer], who [have this problem], [product] is a [category] that [core benefit], unlike [alternative], which [their weakness].' Fill it with nouns and specifics, not adjectives. 'Revolutionary' is a claim, not a position. 'Cuts payroll prep from 6 hours to 20 minutes' is a position.",
            "The test of a position: can the buyer repeat it? If the buyer can't say back what you do in one sentence that matches how they'd describe it to a colleague, the position isn't theirs yet. It's yours.",
            "A good position answers three questions in order: who is it for, what job does it do, and what does it replace? If you can answer those three, the story writes itself. If you can't, keep working on the position before you touch any channel.",
          ],
        },
        {
          heading: "The positioning traps",
          paragraphs: [
            "Trap 1: positioning for everyone. 'We help any business grow' is positioning for no one. Buyers sort themselves out, and the ones who stay are usually the wrong ones. A position that fits everyone fits no one.",
            "Trap 2: feature-led positioning. 'We have AI and automations' lists features, not a position. Features are evidence, not a promise. The buyer buys the job, not the tech. Sell the outcome, and show the features as proof.",
            "Trap 3: copying the category leader's language. 'The Uber of X' positions you as the imitation. It tells the buyer you are a copy, not a choice. The healthy position names a specific segment, a sharp job, and a real alternative (doing nothing, spreadsheets, the incumbent). The alternative IS part of the position. 'Unlike spreadsheets, which break at scale' tells the buyer exactly what you're replacing.",
          ],
        },
        {
          heading: "Positioning as a process, not a launch",
          paragraphs: [
            "Positioning is tested like everything else. State it, put it on the landing page, watch the activation and conversion data, listen to what customers say back, and refine. The best signal that a position is right: prospects describe you back to you in your own words, and then they buy because the words matched their job.",
            "Do this loop in weeks, not months. A bad position discovered in week 2 costs one landing page. A bad position discovered in month 8 costs a burned channel budget and a confused market.",
            "Keep a version log. Every time you sharpen the position, save the old one. Customers and investors both respond to a founder who can show how the story evolved as the market spoke.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Writing the position for investors instead of buyers. Investors buy markets, buyers buy jobs. If the sentence would impress a VC but confuse a customer, rewrite it.",
            "Mistake 2: Changing the position every week. A position needs time to land. If you rewrite it every time one call goes badly, the market never hears a consistent story.",
            "Mistake 3: Skipping the alternative. Many founders say who they're for but not what they replace. Without the alternative, the buyer can't tell why now and why you.",
            "Mistake 4: Using vague words like 'platform', 'solution', and 'powerful'. These words mean nothing. Replace each one with a noun and a number.",
          ],
        },
      ],
      examples: [
        "A tool that does payroll + HR for 'all small businesses' gets 2% landing-page conversion. Repositioned as 'payroll for US construction crews' (a segment, a job, a spreadsheets-and-paper alternative), conversion triples. The market sorted itself once the position got sharp.",
        "A founder's position: 'we're an AI copilot for sales teams.' Nobody buys a category they don't have. Repositioned: 'for B2B sales leaders who lose deals in the redlines, DealWatch is contract review that flags risky terms in seconds, unlike legal review, which takes a week.' Now the buyer has a job and a comparison.",
        "A meal-kit founder positioned against restaurants: 'healthy dinners in 20 minutes.' It flopped. Repositioned against the real alternative, cooking from scratch: 'the same grocery budget, zero chopping.' Same product, sharper replacement, different customers.",
        "A freelancer tools startup said 'productivity for creators.' Nobody knew what that meant. Sharper: 'for YouTubers who waste 5 hours a week on invoicing, this sends invoices and chases late payments automatically.' The trigger (late payments) did the selling.",
        "A compliance software founder tested two landing pages in one week: one feature-led ('AI-powered compliance'), one job-led ('pass your SOC 2 audit in 40 days'). The job-led page converted 4x. Same product, same price, different story.",
      ],
      actionItems: [
        "Fill in the positioning template with nouns and specifics, in one paragraph.",
        "Cut every vague word (platform, solution, powerful) and replace it with a noun and a number.",
        "Write the alternative you replace and its weakness. If you can't name one, sharpen the position.",
        "Test it: put it on your landing page and watch conversion for 2 weeks.",
        "Ask your last 3 customers to describe what you do in one sentence. Compare their words to yours.",
        "Keep a version log of the position, with a date on every rewrite.",
      ],
      keyPoints: [
        "Positioning = the category you own in the buyer's mind.",
        "Template: for [customer] with [problem], [product] is a [category] that [benefit], unlike [alternative].",
        "A position is real when the buyer can repeat it.",
        "Name the segment, the job, and the alternative.",
        "Features are evidence, not a position.",
        "Test the position on the landing page, in weeks, not months.",
      ],
    },
    {
      id: "gtm-2",
      title: "The ICP and the market you enter first",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "An ICP (ideal customer profile) is the exact kind of customer you want your first 10 sales to come from. It is like a map that tells you where to knock on doors. A sharp map makes selling cheap. A fuzzy map makes every channel expensive.",
          ],
        },
        {
          heading: "Defining the ICP tightly",
          paragraphs: [
            "The ICP is the buyer you'd take 10 of, now: the segment where the pain is sharpest, the budget exists, and the alternative is weakest. Write it as a firmographic + behavioral profile: industry, size, revenue, tech stack, and the trigger ('just got audited,' 'hiring a compliance officer').",
            "The 'just' trigger matters: people buy in moments, not in general. 'SMBs' is a market; 'SMBs that just failed a compliance audit' is an ICP. The sharper the ICP, the cheaper the CAC, because you know where they gather, what they read, and what to say.",
            "Most companies enter too wide. The counter-intuitive rule: your first 20 customers should be nearly identical. A narrow beachhead (segment x job) that you dominate beats a wide market where you're a small fish in every pond.",
            "Write the profile on one page: who they are, what they feel, when they feel it, what they use today, and who signs the check. If the page has more than one customer on it, split it until each page has one.",
          ],
        },
        {
          heading: "The buyer inside the company",
          paragraphs: [
            "Two buyers in B2B: the user (who feels the pain daily) and the economic buyer (who controls budget). In SMB, often the same person. In enterprise, almost never. Your positioning must answer for BOTH: the user's pitch is 'this makes your job measurably better'; the economic buyer's pitch is 'this returns more than it costs, with acceptable risk.'",
            "The champion: your ally inside the account who sells for you. The champion is cultivated, not discovered: they need the ROI math, the internal memo, and the demo assets that make their case easy. A deal without a champion is a lottery ticket.",
            "Find the champion by asking one question in discovery: 'who else needs to be involved for this to move forward?' The person who answers with names is your map. The person who answers 'just me' in a big company is usually not the real buyer.",
          ],
        },
        {
          heading: "The no-market test",
          paragraphs: [
            "The market you chose is right when: you can name 50 specific companies in it, you can name the trigger events that precede purchase, and you know the 3 alternatives they use today.",
            "If you can't name 50 companies or the alternatives, the ICP is too vague, and every channel will be expensive because you're marketing to a fiction. The test takes 30 minutes. Run it before you spend a dollar.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Confusing a broad market with a big market. 'All businesses' is a wide description, not a big opportunity. Sharp segments convert; wide ones waste budget.",
            "Mistake 2: Writing the ICP from imagination instead of interviews. Talk to 10 real customers first. The profile you imagine is rarely the profile that pays.",
            "Mistake 3: Chasing anyone with a credit card. Early churn comes from bad fits. Every customer who doesn't fit poisons your metrics and your reputation.",
            "Mistake 4: Forgetting the trigger. Demographics say who they are; triggers say when they buy. Without the trigger you're marketing to a calendar, not a moment.",
          ],
        },
      ],
      examples: [
        "A compliance tool enters as 'for regulated SMBs.' CAC: $4,000. Sharpened to 'US clinics with 5-50 staff that bill Medicare', now they know the conferences, the trade press, and the exact trigger (a CMS audit letter). CAC drops to $900.",
        "A founder sells to the 'user' (a marketing manager) but the economic buyer (the CFO) needs ROI. The deal stalls until he gives the champion an internal one-pager: 3x ROI, pilot terms, risk mitigation. The champion closes it for him.",
        "A bookkeeping app targeted 'all small businesses.' Cost per signup: $60. Narrowed to 'US restaurants with 2-5 locations.' Cost per signup: $14, because restaurant owners talk to each other and the trigger (end of tax year) is predictable.",
        "A training platform kept selling to HR, but the real pain sat with operations managers who had no budget. After 5 interviews, the founder switched the pitch to ops managers and made the economic buyer (finance) a one-slide ROI case. The pipeline filled in 3 weeks.",
        "A dev-tools founder picked 'startups' as his ICP. His first 20 customers were all seed-stage SaaS companies using the same stack. Nearly identical. Support calls got shorter, word of mouth got louder, and the sales motion became repeatable because every deal looked like the last one.",
      ],
      actionItems: [
        "Write your ICP as a firmographic + trigger profile on one page.",
        "Name 50 specific companies that fit the profile. If you can't, sharpen it.",
        "Write the two pitches: to the user and to the economic buyer.",
        "Identify your 3 alternatives in the segment and their weakness (this IS the positioning).",
        "Interview 10 customers who fit the ICP and ask what triggered their last purchase.",
        "Check your last 10 paying customers against the profile. Note who doesn't fit and why.",
      ],
      keyPoints: [
        "ICP = the segment with the sharpest pain, budget, and weakest alternative.",
        "Triggers ('just got audited') beat demographics.",
        "First 20 customers nearly identical: dominate the beachhead.",
        "Sell to the user and the economic buyer; cultivate the champion.",
        "The no-market test: 50 companies, triggers, and 3 alternatives, or it's a fiction.",
        "A deal without a champion is a lottery ticket.",
      ],
    },
    {
      id: "gtm-3",
      title: "Channel selection: where your customers actually are",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A channel is the road you use to reach customers, like email, ads, or SEO. Different products use different roads. The trick is to pick one road, learn it well, and only add a second road when the first one works.",
          ],
        },
        {
          heading: "The channel menu",
          paragraphs: [
            "The channels: founder-led outbound (cold email/DM, works for B2B with a clear ICP), content/SEO (slow, compounds, works when buyers search for the problem), paid search (works when intent exists and CAC math holds), paid social (works for consumer/PLG and warm audiences), partnerships/integrations (works when you sit beside an existing workflow), community/word-of-mouth (works when the product is inherently shareable), and marketplace/platforms (list where buyers already shop).",
            "The early-stage rule: pick ONE primary channel and go deep, not five channels shallow. Depth creates compounding knowledge (you learn the channel's language, its costs, its loops) while breadth spreads you thin.",
            "The second channel comes from what the first channel's data suggests. If your outbound emails get replies from people who found you on LinkedIn, that's your signal. Let the data, not the fads, pick channel number two.",
          ],
        },
        {
          heading: "Matching channel to motion",
          paragraphs: [
            "The channel must match your go-to-market motion: product-led (users discover/use before buying) needs self-serve discovery: content, SEO, viral loops, integrations. Sales-led (a rep closes the deal) needs outbound and targeted demand gen. The mismatch (a sales-led product with only passive content, or a self-serve product with only outbound reps) is the classic dead channel.",
            "The math for any channel: LTV:CAC must clear 3x and CAC payback under 12 months (finance track). Every channel decision is a unit-economics decision wearing a marketing costume.",
            "If you're unsure which motion you are, watch what your best customers did. If they signed up alone and used the product, you're product-led. If they needed a call and a champion, you're sales-led. Match the channel to what already happens.",
          ],
        },
        {
          heading: "The 6-week channel test",
          paragraphs: [
            "Before committing to a channel, run a 6-week test with a fixed budget and pre-committed pass/fail numbers (e.g., 'outbound: 30 demos booked at <$400 each, or we stop'). Measure acquisition cost AND the downstream quality (does the channel's customer retain? convert? churn?).",
            "A channel that delivers cheap but wrong customers is worse than no channel. Cheap leads that churn in month 2 cost more than expensive leads that stay for two years.",
            "Document the test: the hypothesis, the spend, the results, the learning. The learning is the asset even when the channel fails. Every failed channel test tells you where the customer isn't, which is as valuable as where they are.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Spreading the budget across five channels 'to see what sticks.' The data stays too thin in every channel to learn anything. One deep bet beats five shallow ones.",
            "Mistake 2: Judging a channel before the 6 weeks are up. Channels have a learning curve. Killing outbound in week 2 because replies were slow is like judging a crop in week 2.",
            "Mistake 3: Optimizing for cost per lead instead of quality. Cheap leads from the wrong audience are a tax, not a win.",
            "Mistake 4: Copying a competitor's channel without their context. Their channel works because of their ICP, their price, their story. Your job is to test your own hypothesis, not rent theirs.",
          ],
        },
      ],
      examples: [
        "A B2B tool's founder runs outbound as the one channel: 200 personalized emails/week, a strong ICP, a real trigger. By week 8 he has 14 demos and 3 logos, CAC under $800, LTV:CAC at 5x. The channel works; he scales it before touching anything else.",
        "Another founder spreads $5K across ads, SEO, a newsletter, and a podcast sponsor. Every channel is 'working a little,' which means none is working enough to learn from. The data is too thin to double down; the budget is gone.",
        "A developer tool is product-led: free tier, instant signup, viral loops through GitHub. The founder skips outbound entirely, invests in SEO and integrations, and the loops do the selling. The channel matched the motion, so growth became self-service.",
        "An agency software targets accountants. The founder tests paid search on the exact trigger ('just got a new client, need practice management'). CAC is $350, payback is 6 months, LTV:CAC is 4.5x. The intent existed, so the math held.",
        "A founder tests partnerships by integrating with a popular HR tool. In 6 weeks, 12% of signups come through the integration at near-zero CAC. The data says channel number two is partnerships, so he doubles down there before ever touching ads.",
      ],
      actionItems: [
        "List the 5 candidate channels and pick the ONE your motion demands.",
        "Write the 6-week test with pre-committed pass/fail numbers and a fixed budget.",
        "Run it, log everything (spend, leads, demos, closes) in one sheet.",
        "Track downstream quality: do the channel's customers retain and convert?",
        "Write the one-page learning summary even if the channel fails.",
        "Let the first channel's data pick channel #2, then repeat the test.",
      ],
      keyPoints: [
        "One primary channel, deep: not five shallow.",
        "Match channel to motion: PLG vs sales-led.",
        "Every channel is a unit-economics decision.",
        "6-week tests with pre-committed numbers; the learning is the asset.",
        "Cheap but wrong customers are worse than no customers.",
        "Channel #2 is chosen by channel #1's data.",
      ],
    },
    {
      id: "gtm-4",
      title: "Founder-led sales: the first revenue machine",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "In the beginning, the founder is the salesperson. You know the product best and customers can feel your belief. Every no is a free lesson, and every yes is a recipe you can copy.",
          ],
        },
        {
          heading: "Why the founder sells",
          paragraphs: [
            "At the start, the founder is the best seller: you know the product deeper, the story is yours, and the customer can smell conviction. Founder-led sales also teaches the market faster than any survey. Every 'no' is product research. Every 'why did you buy' is positioning research.",
            "The rule: sell personally until you can't (until there are more opportunities than your hours), and sell to learn even after you hire sellers. The founder who stops selling loses the direct line to the market.",
            "Keep a notebook of every call. What questions worked, what objections came up, what words customers used to describe their pain. That notebook is the seed of your sales playbook, your content, and your product roadmap.",
          ],
        },
        {
          heading: "The discovery call that sells",
          paragraphs: [
            "The 30-minute discovery call structure: 10 minutes of questions (the problem, the current process, the cost of the problem, the decision process), 10 minutes of the pitch (tailored to what you just heard, not a canned deck), 10 minutes of next steps (the demo, the trial, the proposal) and the close ('does this solve your problem well enough to move forward?').",
            "The questions that sell: 'how do you handle X today?' (reveals the alternative), 'what happens when it goes wrong?' (reveals the cost), 'what would a solution need to prove?' (reveals the buying criteria, then meet those criteria in your pitch), and 'who else needs to be involved?' (reveals the process).",
            "The founder's error: pitching before discovering. The pitch that follows the discovery is 10x more relevant than the pitch you came in ready to deliver.",
            "Take notes during the call, not after. Write down the customer's exact words. When you mirror their words back in the pitch, they hear someone who understands them, not a script.",
          ],
        },
        {
          heading: "The no-pressure close and the follow-up",
          paragraphs: [
            "The close isn't a trick; it's clarity: 'based on what you've shared, here's what we propose, here's the price, here's the timeline. Does this work for you?' Then silence. The next speaker owns the outcome.",
            "Follow-up is where founders lose deals: most sales happen after the 4th touch. A simple cadence, recap after the call, the proposal, a check-in at day 3, day 10, and a 'closing or parked?' at day 21, recovers more revenue than any pitch skill.",
            "The unresponsive prospect isn't a no; it's a follow-up you haven't sent. Park it, don't delete it. And never go silent after a no: a 'we'll check back in 6 months' follow-up has closed many deals that simply weren't ready.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Pitching before discovering. A canned demo answers questions nobody asked. Listen first, pitch second.",
            "Mistake 2: Talking over the silence. The close needs space. Whoever speaks first after the proposal owns the outcome; make sure it's not you.",
            "Mistake 3: Treating a no as the end. Most no's are 'not yet' or 'not like this.' A graceful follow-up in 3 months is a second chance, not harassment.",
            "Mistake 4: Not logging the calls. Every call you don't record is research you throw away. Even a two-line summary per call compounds into a playbook.",
          ],
        },
      ],
      examples: [
        "A founder cold-emails 20 clinics with a 3-line problem hook. Four reply. In discovery, the questions reveal the real buying criteria (not cost, integration risk). The pitch meets the criteria; two clinics sign. Revenue, research, and a repeatable script in one.",
        "A founder closes 'we'll get back to you' and never follows up. The prospect buys from a competitor who followed up four times. The founder learns the lesson the expensive way: silence isn't a decision, it's an opening.",
        "A B2B founder books 30 discovery calls in a month. On every call he asks 'what would a solution need to prove?' The same answer comes back four times: security review. He builds the security page, and the close rate doubles. The calls were research.",
        "A founder gives a 25-minute demo on the first call and loses the prospect. On the next call he flips the structure: 10 minutes of questions first. The pitch lands because it answers what was actually said. The prospect signs the same week.",
        "A solo founder has 40 meetings and 4 no's in a row. Instead of quitting, she emails each no at month 3 with one line: 'still thinking about your situation, no pressure.' Two of the four reply, one signs. Timing, not luck, closed the deal.",
      ],
      actionItems: [
        "Script your discovery questions (problem, current process, cost, criteria, process).",
        "Build the 30-minute call structure: 10/10/10 with the tailored pitch and the close.",
        "Adopt the follow-up cadence template: recap, proposal, day 3, day 10, day 21.",
        "Log a 2-line summary of every call: what was said, what was learned.",
        "Record one of your discovery calls and critique it against the 10/10/10 structure.",
        "Write your 3-month 'parked deals' follow-up list and schedule the emails.",
      ],
      keyPoints: [
        "The founder sells until they can't, and sells to learn forever.",
        "Discover before you pitch; 10 minutes of questions beats a canned deck.",
        "The close is clarity, not a trick, then silence.",
        "Most sales happen after the 4th touch: follow up.",
        "Silence isn't a decision; it's an opening.",
        "Every call is research: log it, learn from it.",
      ],
    },
    {
      id: "gtm-5",
      title: "The revenue engine: pipeline, demos, and deals",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A pipeline is a list of every possible deal with a stage and a date. It tells you how much revenue is coming and what's blocking it. Without a pipeline, sales is just hope.",
          ],
        },
        {
          heading: "The pipeline structure",
          paragraphs: [
            "The pipeline is the forecast: every opportunity with a stage, an owner, an amount, and an expected close date. The stages (adapted to your business): lead, qualified, discovery done, demo done, proposal, verbal yes, closed. The discipline: an opportunity isn't 'real' until it has a champion, a budget signal, and a decision date.",
            "The pipeline math: how many leads become qualified, demos, proposals, closes? The conversion rates ARE the forecast. If 100 leads give 10 demos and 3 closes, then revenue = leads x 3%.",
            "Every lever (more leads, better qualification, higher close rate) moves the same output, but the cheapest lever is usually qualification, not more leads. Pulling the top of the funnel when the middle leaks is a waste.",
            "The founder's weekly pipeline review: 20 minutes, every opportunity, the next action, the blocker. The question for each: 'what would make this close, and who owns it?' A pipeline without an owner and a next action isn't a pipeline; it's a wishlist.",
          ],
        },
        {
          heading: "The demo that closes",
          paragraphs: [
            "The demo is the pitch meeting (from the fundraising track) applied to the sale: 5-7 minutes, the customer's job, real data, the wow moment. But the sales demo adds two things: the objection section (show the feature that answers the objection they raised) and the next step ('let's set up your pilot').",
            "Sales demos fail in two ways: the feature tour (demonstrates your tool, not their job) and the monologue (the rep talks for 25 of 30 minutes). The demo is a conversation with a guided walkthrough: pause, check, ask 'does this match how you'd use it?'",
            "Use the customer's own data in the demo. A demo with their numbers is a proof; a demo with your numbers is a trailer. One tells them 'this will work for you,' the other tells them 'this looks nice.'",
          ],
        },
        {
          heading: "Proposals and the decision date",
          paragraphs: [
            "The proposal is short and specific: the problem you heard, the solution, the price, the timeline, the implementation plan, and, the part most founders skip, the decision date and the next step. 'We'll review it' is not a next step.",
            "The negotiation floor: know your discount floor and your 'no' before the conversation. Discounts trade margin for urgency; the healthy pattern is value-added (more scope, better terms, an annual contract) instead of price cuts.",
            "Never discount without getting something. A discount without a concession trains the customer to ask for the next one. If you must move on price, move on terms: longer contract, faster payment, larger scope.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Keeping leads in the pipeline past their expiry. A deal with no next action for 60 days isn't a deal; it's a decoration. Park it or close it.",
            "Mistake 2: Demo monologues. If the customer speaks less than a third of the demo, you're touring, not selling.",
            "Mistake 3: Proposals without a date. 'We'll get back to you' is the sound of a deal dying. Every proposal ends with a decision date.",
            "Mistake 4: Discounting without a concession. Every discount trains the next discount. Trade terms, not price, and only for something in return.",
          ],
        },
      ],
      examples: [
        "A founder's pipeline has 40 'opportunities' and no forecast. A qualification pass cuts it to 9 real ones, with champions, budgets, and dates. The 9 close faster than the 40 ever would have, because effort concentrated where probability lived.",
        "A proposal says 'we'd love to work with you.' The prospect says 'great, we'll get back to you.' Two weeks later, nothing. The rewrite includes a decision date and a pilot start date. Three prospects in a row move. The missing sentence was the missing deal.",
        "A SaaS founder tracks 100 leads to 10 demos to 3 closes. Revenue = leads x 3%. He doubles leads to 200 and gets 6 closes. Then he improves qualification and the demo-to-close rate from 30% to 45%. Same lead volume, 50% more revenue.",
        "A founder runs a demo with the prospect's own report data. Halfway through, the prospect says 'that's our spreadsheet, but done.' The demo becomes the proposal, and the deal closes the same week.",
        "A founder with a weak pipeline spends every Friday hunting new leads. A coach makes him spend Fridays qualifying instead: calling the 40 'maybe' deals and asking for a date or a no. 12 say no, 3 give dates, and the forecast stops lying.",
      ],
      actionItems: [
        "Build your pipeline stages and the qualification bar (champion, budget, decision date).",
        "Calculate your conversion rates: leads to demos, demos to proposals, proposals to closes.",
        "Schedule the weekly 20-minute pipeline review with the 'what makes this close?' question.",
        "Rewrite your proposal template so it ends with a decision date and a next step.",
        "Write your discount floor and your 'no' before the next negotiation.",
        "Purge the pipeline: park or close every deal with no next action for 60 days.",
      ],
      keyPoints: [
        "Pipeline = forecast; conversions = the math.",
        "Qualification is the cheapest lever: real deals have champion, budget, date.",
        "The sales demo is their job, not your feature tour.",
        "Every proposal ends with a decision date and a next step.",
        "Discounts trade margin for urgency: trade terms, not price.",
        "A pipeline without an owner and a next action is a wishlist.",
      ],
    },
    {
      id: "gtm-6",
      title: "Objections, pricing resistance, and the hard conversation",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Objections are not walls; they are questions the buyer hasn't answered yet. When a prospect says 'too expensive' or 'not now,' they are telling you where the story needs work. Every objection is a map to the real issue.",
          ],
        },
        {
          heading: "The objection playbook",
          paragraphs: [
            "The five objections: 'too expensive' (value not established, return to the cost of the problem), 'not now' (no urgency, find or create the trigger), 'we're happy with what we have' (the alternative is comfortable, quantify its cost), 'need to think about it' (usually a hidden objection, ask 'what specifically is giving you pause?'), and 'no budget' (either real, change the proposal, or a polite no, qualify out).",
            "The objection skill: don't answer the surface objection, answer the job under it. 'Too expensive' almost always means 'I don't yet believe it's worth more than the price.' The fix is not a discount; it's the value story: 'here's what the problem costs you monthly, here's what we save you, here's the payback.'",
            "The honest objection: 'this is a real deal, but our budget is $4K and you're $6K.' Now the conversation is legitimate: a scope change, an annual prepay, a phased rollout, or a genuine pass. Never invent urgency; the buyer who senses manipulation stops trusting everything.",
            "Write your five objection scripts this week. A founder who has answered 'too expensive' 20 times has a script. A founder who answers it fresh every time is giving a different answer on every call.",
          ],
        },
        {
          heading: "The lost deal review",
          paragraphs: [
            "Every lost deal is a lesson if you extract it. The review: what did we promise vs. deliver? Where did the deal stall (stage)? Who said no and why (real reason, not the polite one)? What would have changed the outcome?",
            "Collect 10 lost-deal reviews and the pattern writes your roadmap: pricing, feature gaps, or qualification failures. One review is a story; ten reviews are a signal.",
            "The discipline: actually call the lost prospect and ask. Most founders skip it because it's uncomfortable, and that's exactly why the ones who do it win.",
          ],
        },
        {
          heading: "When to walk away",
          paragraphs: [
            "The qualification that saves you: a deal where the champion is weak, the budget is a hope, and the timeline is 'someday' is not a deal, it's a time sink. The founder's scarcest resource is attention; a weak pipeline that looks busy is how startups spend six months 'in talks' with zero revenue.",
            "The walk-away test: 'if this closed today, would it move our metrics?' If no, the opportunity doesn't deserve a next action: park it and move to one that does.",
            "Walking away also sets your price. A founder who always chases 'maybe' deals ends up selling to the worst customers at the worst terms. Your time is the filter; use it to choose your customers.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Discounting at the first 'too expensive.' The objection is a request for proof, not a request for a sale. Answer with value first, price second.",
            "Mistake 2: Chasing polite no's. 'We love your product' with no budget, no champion, and no date is a time sink. Qualify or walk.",
            "Mistake 3: Skipping the lost-deal call because it's awkward. The uncomfortable 10-minute call is the cheapest roadmap research you will ever do.",
            "Mistake 4: Inventing urgency. A fake deadline is a trust tax; the buyer who smells it stops believing everything you say after.",
          ],
        },
      ],
      examples: [
        "A prospect says 'too expensive' to a $2K/mo tool that replaces $8K/mo in manual work. The founder's fix isn't a discount, it's the payback table: 2-month ROI, then 'is the problem worth $2K/mo to remove?' The prospect signs, at full price.",
        "A founder chases a 'hot' enterprise lead for 4 months: no champion, no budget signal, 'we love your product.' The competitor's cold email to the actual buyer closes in 3 weeks. The founder's pipeline was a comfort object, not a forecast.",
        "A prospect says 'not now, we're busy with a merger.' The founder marks the trigger and checks back in 90 days. The merger lands, the pain returns, and the deal closes in a week. The objection was a calendar, not a wall.",
        "A founder loses a deal and asks the real reason: the champion's boss wanted a different product category. One sentence. He adds that category question to discovery and saves himself 3 lost deals the next quarter.",
        "A prospect with a $3K budget asks for a $6K product 'at half price.' The founder offers the $3K scope instead: fewer seats, phased rollout, full price. The prospect takes it, and the expansion conversation starts at month 6.",
      ],
      actionItems: [
        "Write your objection playbook: the five objections and the job under each.",
        "Call your last 3 lost prospects and ask the real reason: log the pattern.",
        "Apply the walk-away test to your current pipeline and park the dead weight.",
        "Write your payback table: problem cost vs. price, in months.",
        "Script your 'what specifically is giving you pause?' follow-up for hidden objections.",
        "Set your discount floor and your 'no' before the next hard conversation.",
      ],
      keyPoints: [
        "Answer the job under the objection, not the surface.",
        "'Too expensive' = value not established: return to problem cost.",
        "Lost-deal reviews are the roadmap; do them even when it's uncomfortable.",
        "Walk away from no-champion, no-budget, no-date deals.",
        "Never invent urgency; trust is the asset.",
        "Ten lost-deal reviews are a signal; one is a story.",
      ],
    },
    {
      id: "gtm-7",
      title: "Content and brand: the assets that sell while you sleep",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Content is writing or posting things that help your customers, so they trust you before they ever talk to you. It works while you sleep and gets cheaper over time. Brand is simply what people say about you when you're not in the room.",
          ],
        },
        {
          heading: "Why content works for founders",
          paragraphs: [
            "Content is the cheapest compounding channel: it builds trust before the first call, it educates the market (which makes your sales calls shorter), and it compounds (a post from month 1 still sells in month 24). For a founder, content is also a research channel: the comments and replies are discovery.",
            "The content strategy at this stage: not 'post daily' (that's noise) but 'document what you're learning honestly.' The founders whose content works are the ones who write about the problem from inside it: the failed experiment, the pricing lesson, the customer story.",
            "Painful honesty outperforms polished hype because trust is built in the specificity. 'We lost 3 deals this month and here's why' gets read, shared, and believed. 'We're the best at what we do' gets scrolled past.",
          ],
        },
        {
          heading: "The content that converts",
          paragraphs: [
            "The formats that convert: the customer problem explainer (the pain, the cost, the fix, positions you), the teardown (analyze how the market solves the problem, shows expertise), the before/after (a customer's result, social proof), and the point-of-view piece (your thesis on the category, attracts believers).",
            "Distribution: 80% of the work is distribution, not writing. Repurpose one deep piece into 5 snippets across channels, engage in the comments where your ICP lives, and answer questions (the search and community channels). Answering IS marketing when you answer from expertise.",
            "The quality bar: every piece must either teach the reader something true or make them feel seen. Content that does neither is digital litter that also happens to advertise you.",
            "One deep piece a week beats five shallow posts. Deep pieces rank, get cited, and get shared. Shallow posts feed an algorithm for an hour and then vanish.",
          ],
        },
        {
          heading: "Brand is what people say when you're not there",
          paragraphs: [
            "Brand at this stage is built in two places: the product (the experience speaks) and the founder's public voice (consistent, specific, trustworthy). The brand moat: every honest piece of content, every good support reply, every solved problem in public compounds into a reputation that competitors can't copy in a quarter.",
            "The rule: be known for ONE thing (your position, from lesson 1), say it consistently, and let the specificity be the filter. The wrong customers self-select out, which is the point.",
            "Say no to random topics. A founder of a payroll tool who posts about startup life builds a personal audience. A founder who posts about payroll mistakes builds a customer base. Pick the one that pays.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Posting daily for the algorithm. Volume without specificity is noise. One honest deep piece beats five shallow ones.",
            "Mistake 2: Writing for other founders instead of buyers. Followers are not customers; the audience is only worth something if it contains your ICP.",
            "Mistake 3: Polishing the hype. Perfect, generic marketing gets ignored. Specific, honest, slightly messy gets believed.",
            "Mistake 4: Forgetting distribution. Writing is 20% of the work; posting, answering, and engaging is the other 80%.",
          ],
        },
      ],
      examples: [
        "A founder writes weekly essays on contract-review pain for legal ops. 40 posts in, prospects start saying 'I read your thing about redlines, that's us.' The inbound calls convert at 3x the outbound rate, and the content that cost 2 hours/week out-sells the paid channels.",
        "Another founder posts daily 'growth hacks': generic, listicle, no specificity. The audience is other founders, not buyers. The channel produces followers, not revenue. Honesty about the real problem would have produced the opposite.",
        "A developer-tools founder answers 30 questions a month in the community where his ICP lives. No posts, just answers. Six months later, half his inbound leads mention his username. Answering was the whole funnel.",
        "A founder writes the teardown of a competitor's pricing page. It gets cited in a newsletter with 50K readers. Inbound demo requests double for a month. One piece, one distribution hit, one quarter of pipeline.",
        "A fintech founder writes the honest post: 'we raised prices and 12 customers left.' The replies are full of future customers saying 'this is exactly why I trust you.' Specificity converted where hype never could.",
      ],
      actionItems: [
        "Write one deep, honest piece on the customer problem this week (not a hype post).",
        "Repurpose it into 5 snippets and distribute where your ICP actually reads.",
        "Pick the ONE thing you'll be known for and say it consistently for 90 days.",
        "Answer 3 real questions this week in the community where your customers live.",
        "Write the quality bar check: does the piece teach something true or make someone feel seen?",
        "Set the 2-hour weekly content block in your calendar and treat it like a meeting.",
      ],
      keyPoints: [
        "Content compounds and makes sales calls shorter.",
        "Document the learning honestly: trust lives in specificity.",
        "80% of content is distribution; answering is marketing.",
        "Be known for one thing, consistently.",
        "One deep piece beats five shallow posts.",
        "Content that teaches nothing is digital litter.",
      ],
    },
    {
      id: "gtm-8",
      title: "Customer success: the revenue hiding in the base",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Customer success means making sure the people who already pay you actually get value. Happy, growing customers buy more and stay longer. Your existing customers are the cheapest revenue you will ever find.",
          ],
        },
        {
          heading: "Success is the second sales team",
          paragraphs: [
            "The base is the cheapest revenue: selling more to an existing customer costs a fraction of acquiring a new one, and retention (from the product track) is the compounding engine. Customer success at the early stage = making sure every customer gets their activation moment, hits their first success, and sees the value weekly.",
            "The early CS rhythm: a check-in at day 7 and day 30 (did they activate? did they hit value?), a monthly value review (what did the product do for you this month?), and a health score (usage, support, sentiment) that predicts churn before it happens. The customer who goes quiet is the customer about to leave: reach out first.",
            "The one-number job: NRR (from the finance track). Every CS activity should move NRR: expansion (upsells, add-ons, seat growth) or contraction prevention (saving the account). CS that 'keeps customers happy' without touching NRR is cost; CS that grows NRR is revenue.",
          ],
        },
        {
          heading: "The expansion conversation",
          paragraphs: [
            "Expansion comes from usage, not from asking: when a customer uses more (more seats, more volume, an adjacent feature), the expansion conversation writes itself: 'you're now using X beyond your plan; here's the natural next step.' Track usage, spot the growth, and make the offer at the moment of value, not at renewal day.",
            "The B2B expansion levers: seats (more users), volume/tier (more usage), add-ons (adjacent features), and annualization (cash now for retention). The order: help them use more first, then ask. Asking before value is how expansion dies.",
            "Put the usage dashboard in front of the customer. When they see their own growth, the upgrade asks itself. Your job is to surface the number and name the next step.",
          ],
        },
        {
          heading: "The churn-save play",
          paragraphs: [
            "When a customer threatens to leave: find out the REAL reason (usually value or fit, not price), fix what's fixable (the missing feature, the underused value), restructure what's not (plan change, pause, a scaled-down version), and accept what's true (sometimes the fit is wrong: let them go gracefully and learn).",
            "The churn-save math: saving an account is worth many months of revenue; but saving the WRONG account (a segment that will churn again) just delays the lesson.",
            "Log every churn-save attempt: the patterns tell you which customers to stop acquiring, which is the real fix. Churn is rarely a CS failure; it's usually an ICP or onboarding problem wearing a CS costume.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Confusing activity with success. Five check-ins with no value review are theater. Every touch should move value or NRR.",
            "Mistake 2: Waiting for renewal day to talk expansion. The offer belongs at the moment of value, not the moment of the invoice.",
            "Mistake 3: Saving the wrong accounts. A churned-in-3-months customer saved today is a churned customer again in 3 months, with a worse story.",
            "Mistake 4: Ignoring the quiet customer. Silence is the early warning; the first person to reach out owns the conversation.",
          ],
        },
      ],
      examples: [
        "A SaaS's NRR is 92% (below 100%, the treadmill). The CS lead finds the pattern: customers who never hit activation churn at 5x. The fix is onboarding, not CS effort. Six months later NRR is 104%, the base started growing the company.",
        "A customer at 300% usage growth is still on the base plan. The founder spots the usage spike in the health dashboard, offers the next tier with a smooth migration, and closes a 3x expansion with a 10-minute conversation.",
        "A customer goes quiet for 3 weeks. The founder calls before the invoice, finds the integration broke, fixes it in a day. The customer renews and adds 10 seats. One early call saved the account and grew it.",
        "A founder offers a discount to a churning customer who never activated. The customer churns anyway, 2 months later, with a story about the 'broken tool.' The real fix was onboarding, and the discount just postponed the lesson.",
        "A product with 100 customers and 95% NRR but zero expansion activity. The founder adds one usage-triggered email ('you've used 80% of your plan, here's the next tier') and expansion revenue appears without a single sales call.",
      ],
      actionItems: [
        "Build the day-7/day-30 check-in and the monthly value review for every customer.",
        "Add a usage-based health score that flags quiet accounts before they churn.",
        "Write the expansion play: spot usage growth, offer at the moment of value.",
        "Call your 3 quietest customers this week and find out why they're quiet.",
        "Log your last 3 churn-save attempts and look for the pattern.",
        "Put the usage number in front of each customer monthly, with the next step named.",
      ],
      keyPoints: [
        "The base is the cheapest revenue; NRR is the one-number job.",
        "Reach the quiet customer first: silence precedes churn.",
        "Expansion follows usage: help them use more, then ask.",
        "Churn-save patterns tell you which customers to stop acquiring.",
        "Churn is usually an onboarding or ICP problem, not a CS problem.",
        "CS that doesn't move NRR is cost, not success.",
      ],
    },
    {
      id: "gtm-9",
      title: "Scaling from founder-led to a sales motion",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "At some point you can't do all the selling alone, so you hire salespeople. The trick is to write down everything you learned first, so the new person can copy it. You build the machine, then the machine sells.",
          ],
        },
        {
          heading: "When to hire sellers",
          paragraphs: [
            "The signal to hire the first seller: you have more real opportunities than you can personally work (usually a full pipeline at a stable close rate). The wrong signals: 'we should have sales people' (org chart thinking) or hiring sellers to 'make up for' a weak product (sellers amplify the product's reputation, they don't fix it).",
            "The first seller profile: a founder-like operator who can build the playbook WITH you, not a process-appointed enterprise rep. They need: experience selling in your motion, hunger for variable comp, and the ability to document what they learn.",
            "The first seller's job is to make the second seller possible (playbook over quota). If your first hire can't write down what works, you've hired a rep instead of a builder.",
          ],
        },
        {
          heading: "The playbook first",
          paragraphs: [
            "Before hiring, you should be able to hand over a playbook: the ICP, the trigger events, the discovery script, the objection playbook, the demo flow, the pricing floor, and the pipeline stages. The playbook is what the founder learned selling personally, written down so it can be repeated.",
            "The system: a CRM from day one (the pipeline stages already exist: put them in the tool), the proposal template, the contract template, and the metrics (pipeline, conversion, CAC, NRR). Sales is a numbers game the moment it stops being a founder's personal relationships.",
            "Compensation: base + commission (60/40 or 70/30 base/variable), with a ramp. The commission structure is a strategy statement: pay for the metric you want (new revenue, NRR, or logo growth: pick deliberately).",
            "Hire slowly, fire fast is a cliche because it's true. One great seller beats three mediocre ones, and a mediocre hire costs you customers before it costs you money.",
          ],
        },
        {
          heading: "The founder's role in the machine",
          paragraphs: [
            "The founder's sales job changes, not ends: from closing every deal to (1) being the closer on the top 3-5 accounts (the ones that establish the category), (2) reviewing the pipeline weekly, (3) coaching the sellers on the discovery calls (record them, review them), and (4) staying the voice in the market (content, customers, press).",
            "The transition trap: the founder who can't let go of the close. Selling personally is how you build it; scaling is how you win it. The founder's new job is to build the machine, not to be the machine.",
            "Weekly coaching beats quarterly reviews. Fifteen minutes after each discovery call, ask the seller one question: 'what would you do differently?' The repetition compounds into skill faster than any training course.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Hiring before the playbook exists. A seller without a playbook is improvising with your reputation and your cash.",
            "Mistake 2: Hiring to fix a weak product. Sellers amplify what exists; they don't create what's missing. Fix the product first.",
            "Mistake 3: No CRM from day one. Without the tool, the pipeline lives in heads and emails, and the numbers stop being true.",
            "Mistake 4: The founder keeps closing every deal. The machine never learns, and the founder becomes the bottleneck forever.",
          ],
        },
      ],
      examples: [
        "A founder hires a salesperson after closing 20 logos himself and writing the 12-page playbook. The seller follows the playbook and closes 3 in his first month: the machine works because the process preceded the hire.",
        "Another founder hires two sellers 'to get sales going' with no playbook, no CRM, and no pricing floor. Three months later: zero deals, two burned paychecks, and a damaged market reputation from unpracticed demos.",
        "A founder pays 100% commission to her first seller. The seller chases easy logos, not the ICP, and the base fills with bad fits. She switches to 60/40 with a quota tied to NRR, and the quality returns in a quarter.",
        "A founder records every discovery call for 3 months and reviews 2 per week with the seller. The seller's close rate goes from 15% to 25%. The coaching was the product.",
        "A founder hands his top 3 enterprise prospects to a new closer while keeping the SMB pipeline himself. The top accounts close, the category story gets set, and the founder learns what the machine needs before he scales it further.",
      ],
      actionItems: [
        "Write the playbook from what you've learned selling, before hiring anyone.",
        "Put your pipeline in a CRM with the stages, conversion math, and pricing floor.",
        "Define the first seller's ramp, comp structure, and the 'playbook complete' exit criteria for your role.",
        "Record 3 of your own discovery calls and note the patterns you'd hand over.",
        "Write the interview questions that test for builder, not rep, behavior.",
        "List the top 3-5 accounts you will personally close once the seller starts.",
      ],
      keyPoints: [
        "Hire when opportunities exceed your hours, not to 'fix' a weak product.",
        "The first seller's job is the playbook, not the quota.",
        "Sales is a numbers game once it stops being personal relationships.",
        "The founder closes the top accounts and builds the machine, not the other way around.",
        "The playbook must exist before the hire.",
        "Weekly coaching beats quarterly reviews.",
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
      explanation: "If the buyer can describe you the way they'd describe you to a colleague, the position has landed. Otherwise it's your story, not theirs.",
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
      explanation: "Triggers ('just failed an audit') beat demographics: people buy in moments, not in general.",
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
      explanation: "The unresponsive prospect isn't a no; it's a follow-up not yet sent. Cadence recovers more revenue than pitch skill.",
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
      explanation: "The fix is the value story (problem cost vs. price), not a discount: answer the job under the objection.",
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
      explanation: "Every CS activity should move NRR: expansion or contraction prevention. Happy customers who don't grow revenue are cost, not success.",
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
      explanation: "Hire when there are more real opportunities than you can personally work, with a playbook to hand over.",
    },
    {
      question: "The 'just' trigger in an ICP matters because:",
      options: [
        "It sounds professional",
        "People buy in moments, not in general",
        "It makes the logo better",
        "It impresses investors",
      ],
      correctIndex: 1,
      explanation: "Triggers like 'just failed an audit' name the moment of purchase. Demographics say who they are; triggers say when they buy.",
    },
    {
      question: "When a prospect says 'we'll get back to you,' the best next move is:",
      options: [
        "Wait for them to call",
        "Send the proposal with a decision date and a next step",
        "Lower the price immediately",
        "Remove them from the pipeline",
      ],
      correctIndex: 1,
      explanation: "'We'll get back to you' is not a next step. A proposal with a decision date and a pilot start date turns a maybe into a calendar.",
    },
  ],
  exam: [
    {
      question: "A founder says 'we help any business grow.' The core problem with this position is:",
      options: [
        "It's too long",
        "It's positioning for no one: buyers can't tell if they fit",
        "It uses too many adjectives",
        "It's not catchy enough",
      ],
      correctIndex: 1,
      explanation: "Positioning for everyone is positioning for no one. The sharp position names a segment, a job, and an alternative.",
    },
    {
      question: "Which of these is a position, not a claim?",
      options: [
        "'Revolutionary AI-powered platform'",
        "'For US construction crews, payroll that cuts prep from 6 hours to 20 minutes, unlike spreadsheets'",
        "'The best tool on the market'",
        "'We help all businesses grow'",
      ],
      correctIndex: 1,
      explanation: "A position names who it's for, what job it does, and what it replaces. 'Revolutionary' and 'best' are claims, not positions.",
    },
    {
      question: "An ICP written as 'US clinics with 5-50 staff that bill Medicare' is sharper than 'regulated SMBs' because:",
      options: [
        "It sounds smarter in the deck",
        "It names a segment where the pain, budget, and trigger are knowable",
        "It's easier to say",
        "It excludes more customers on purpose",
      ],
      correctIndex: 1,
      explanation: "The sharp ICP tells you where they gather, what they read, and the trigger that precedes purchase. That makes every channel cheaper.",
    },
    {
      question: "A deal stalls in a large company. The most likely missing piece is:",
      options: [
        "A better demo",
        "A champion who sells for you inside the account",
        "A lower price",
        "A longer proposal",
      ],
      correctIndex: 1,
      explanation: "The champion is cultivated, not discovered: they need the ROI math, the memo, and the demo assets. A deal without a champion is a lottery ticket.",
    },
    {
      question: "A product-led company (users sign up and use it themselves) should probably pick channels like:",
      options: [
        "Outbound cold calling only",
        "Content, SEO, integrations, and viral loops",
        "Trade shows only",
        "A single enterprise sales rep",
      ],
      correctIndex: 1,
      explanation: "Product-led motion needs self-serve discovery. Matching the channel to the motion is the difference between a dead channel and a growth loop.",
    },
    {
      question: "A channel test produced cheap leads that all churn in month 2. The right conclusion is:",
      options: [
        "Scale it: cheap is cheap",
        "The channel delivers the wrong customers: quality beats cost",
        "Blame the product team",
        "Double the budget and hope",
      ],
      correctIndex: 1,
      explanation: "A channel that delivers cheap but wrong customers is worse than no channel. Measure downstream quality, not just cost per lead.",
    },
    {
      question: "The 30-minute discovery call should roughly be:",
      options: [
        "30 minutes of demo",
        "10 minutes of questions, 10 minutes of tailored pitch, 10 minutes of next steps and close",
        "5 minutes of questions, 25 minutes of features",
        "Just the price discussion",
      ],
      correctIndex: 1,
      explanation: "Discover before you pitch. The pitch that follows discovery is 10x more relevant than the one you came in ready to deliver.",
    },
    {
      question: "A prospect says 'we'll get back to you' and goes silent. The founder should:",
      options: [
        "Assume it's a no and delete the lead",
        "Follow the cadence: recap, proposal, day 3, day 10, day 21",
        "Send a discount immediately",
        "Complain to the team",
      ],
      correctIndex: 1,
      explanation: "Silence isn't a decision; it's an opening. Most sales happen after the 4th touch.",
    },
    {
      question: "With 100 leads, 10 demos, and 3 closes, revenue equals:",
      options: [
        "Leads x 3%",
        "Demos x 10%",
        "Proposals x 100%",
        "Leads x 10%",
      ],
      correctIndex: 0,
      explanation: "The conversion rates ARE the forecast. If 100 leads give 3 closes, revenue = leads x 3%.",
    },
    {
      question: "The cheapest lever in the funnel is usually:",
      options: [
        "More leads at any cost",
        "Better qualification",
        "Lower prices",
        "More features",
      ],
      correctIndex: 1,
      explanation: "Qualification is the cheapest lever. A pipeline without a champion, budget, and decision date is a wishlist.",
    },
    {
      question: "'Too expensive' almost always means:",
      options: [
        "The buyer is broke",
        "Value hasn't been established yet",
        "The buyer wants haggling",
        "The competitor is cheaper",
      ],
      correctIndex: 1,
      explanation: "The fix is the value story (problem cost vs. price), not a discount. Answer the job under the objection.",
    },
    {
      question: "The lost deal review pattern (10 reviews) is most likely to reveal:",
      options: [
        "Which demos to cut",
        "Pricing, feature gaps, or qualification failures",
        "Which email client to use",
        "How many logos to print",
      ],
      correctIndex: 1,
      explanation: "Ten lost-deal reviews write your roadmap: pricing, features, or qualification. One review is a story; ten are a signal.",
    },
    {
      question: "The most effective early content strategy for a founder is:",
      options: [
        "Post daily growth hacks",
        "Document what you're learning honestly, with specificity",
        "Repost industry news",
        "Hire a ghostwriter to polish hype",
      ],
      correctIndex: 1,
      explanation: "Trust lives in specificity. Honest, specific writing attracts buyers; generic hype attracts followers, not revenue.",
    },
    {
      question: "A customer goes quiet for 3 weeks. The best move is:",
      options: [
        "Wait for renewal",
        "Reach out first: silence precedes churn",
        "Raise the price",
        "Move them to support tickets",
      ],
      correctIndex: 1,
      explanation: "The customer who goes quiet is the customer about to leave. Reach out first, find the real reason, fix what's fixable.",
    },
    {
      question: "The right time to hire the first seller is when:",
      options: [
        "The org chart feels thin",
        "Real opportunities exceed your hours at a stable close rate",
        "Competitors hire sales teams",
        "Revenue is flat for a month",
      ],
      correctIndex: 1,
      explanation: "Hire when opportunities exceed your hours, with a playbook ready to hand over. Sellers don't fix a weak product.",
    },
    {
      question: "The first seller's real job is to:",
      options: [
        "Hit quota at any cost",
        "Make the second seller possible by building the playbook",
        "Close every deal personally",
        "Replace the founder in the market",
      ],
      correctIndex: 1,
      explanation: "The first seller's job is the playbook, not the quota. The machine works because the process preceded the hire.",
    },
  ],
};