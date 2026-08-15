import type { AcademyTrack } from "../types";

export const operationsTrack: AcademyTrack = {
  id: "operations",
  title: "Operations & Execution",
  tagline: "Systems, rhythms, security, and the founder's operating system for the long game.",
  icon: "settings",
  estimatedHours: "3.5h",
  free: false,
  lessons: [
    {
      id: "operations-1",
      title: "The founder's operating system",
      readMinutes: 8,
      sections: [
        {
          heading: "The weekly and monthly rhythms",
          paragraphs: [
            "The founder's week has a skeleton: Monday (plan the week  the 3 priorities, the meetings, the deep-work blocks), daily (the 90-minute deep work block before the world wakes up  the product work, the sales calls, the content), Friday (the review  what shipped, what the numbers say, what's learned). The monthly rhythm: the strategy review (the metrics, the roadmap, the hires) and the personal review (energy, balance, the 'am I still the right person for this job' check).",
            "The calendars of great founders share two properties: the deep work is protected (scheduled, not leftover) and the review happens on a schedule (not 'when things calm down'  they never calm down).",
          ],
        },
        {
          heading: "The priority system",
          paragraphs: [
            "The three-priorities rule: every week, exactly three outcomes that move the company. Not five, not ten  three. The discipline does the work: every new task is weighed against the three, and the 'urgent but unimportant' (the email, the sync, the favor) is batched, deferred, or refused. The weekly plan is the company's strategy expressed in hours.",
            "The classic founder failure: operating on the inbox. The inbox is everyone else's priorities; the plan is yours. The rule: the inbox is processed in two windows a day, and nothing enters the calendar without a 'why does this serve the three?'",
          ],
        },
        {
          heading: "Energy management",
          paragraphs: [
            "Founding is a marathon with sprint intervals  the operating system runs on energy, not hours. The disciplines that matter: sleep (non-negotiable  decisions made on 5 hours of sleep cost more than the hours they saved), exercise (the stress outlet and the clarity engine), and the 'white space' (an afternoon or a day a week with no meetings  where the strategy actually gets thought).",
            "The sign you're overdrawing: the decision quality drops, the email reactivity rises, and the team starts saying 'we can't get the founder's attention.' That's not hustle; that's the company's bottleneck complaining.",
          ],
        },
      ],
      examples: [
        "A founder works 90-hour weeks and the company is stuck. The audit: 30 hours of meetings, 4 hours of deep work, zero review time. The rebuild  three priorities, protected deep work, Friday review  produces more output in 55 hours than 90 produced.",
        "Another founder's calendar is owned by his inbox for six months. The team learns to CC him aggressively to 'get things moving'  and the company's priorities drift into whoever emails first. The three-priorities rule takes back the wheel in two weeks.",
      ],
      actionItems: [
        "Write this week's three priorities and block the deep-work hours now.",
        "Set the inbox windows: 2 sessions/day, nothing else.",
        "Book the Friday review and one white-space afternoon  recurring, forever.",
      ],
      keyPoints: [
        "Monday plan, daily deep work, Friday review, monthly strategy + personal check.",
        "Three priorities a week; the inbox serves the plan, never the reverse.",
        "Energy management: sleep, exercise, white space.",
        "Reactivity is the bottleneck complaining.",
      ],
    },
    {
      id: "operations-2",
      title: "Tools and systems: the stack that scales",
      readMinutes: 8,
      sections: [
        {
          heading: "The minimal stack",
          paragraphs: [
            "The early-stage tool stack, kept deliberately small: communication (Slack/Discord  and the written record discipline), docs/knowledge (Notion/Google Docs  the company memory), project tracking (Linear/Asana/Trello  one board, the priorities visible), CRM (the pipeline stages from the GTM track), analytics (the events from the product track), finance (the bookkeeping system), and design/code hosting. Seven categories, one tool each, and the discipline that the tool is a home for the work, not a toy.",
            "The tool rule: add a tool only when the cost of NOT having it is visible (lost work, missed deadlines, scattered knowledge)  never for novelty. Every tool is a tax on attention: three notes apps is a knowledge fragmentation machine.",
          ],
        },
        {
          heading: "The systems that matter",
          paragraphs: [
            "The systems that prevent disasters: the backup system (code, data, docs  automated, tested, off-site; the restore test quarterly), the password system (a password manager, every credential in it, 2FA everywhere  the founder's laptop is a target), the access system (who can touch what; revoke on departure the same hour), and the documentation system (the decision log, the onboarding doc, the runbook for the recurring task).",
            "The test of a system: can someone else run it without you? A system that dies when you're sick or on vacation is a habit, not a system. The 'bus test'  if you vanished, what breaks?  is the checklist for what to systematize next.",
          ],
        },
        {
          heading: "The documentation discipline",
          paragraphs: [
            "The company's memory lives in writing: decisions (the log from the team track), processes (the runbook  'how we ship,' 'how we onboard'), and the unwritten rules (the culture doc). The rule: if a task is done twice, write it down once  the third time, it's a system.",
            "The ROI is invisible until it's not: the day the second hire joins, the day the first employee asks 'how do we do this?', the day you're sick and the launch still ships  the documentation was the difference between a company and a person with a company.",
          ],
        },
      ],
      examples: [
        "A founder uses three note apps, two task boards, and a CRM that nobody updates. The knowledge is scattered; the pipeline is fiction. The consolidation (one of each, with the discipline) is a two-day project that returns an hour a day.",
        "A founder's laptop dies on a Monday. The password manager, the cloud backup, and the off-site code repo mean the team loses a day, not a month. The systems paid for themselves in one morning.",
      ],
      actionItems: [
        "Audit your stack: seven categories, one tool each  consolidate the extras.",
        "Run the 'bus test': if you vanished this week, what breaks? Write the top 3 gaps.",
        "Automate the backups and test the restore  this week, not next month.",
      ],
      keyPoints: [
        "Seven categories, one tool each  tools are taxes on attention.",
        "Systems: backup (tested), passwords, access, documentation.",
        "The bus test is the systematization checklist.",
        "Twice = write it down; thrice = a system.",
      ],
    },
    {
      id: "operations-3",
      title: "Security and the data you can't afford to lose",
      readMinutes: 8,
      sections: [
        {
          heading: "The founder's security baseline",
          paragraphs: [
            "The baseline that prevents 95% of disasters: a password manager with unique passwords everywhere (the #1 attack vector is reused credentials), 2FA on email, code, banking, and hosting (the four systems whose breach ends companies), no personal-account reuse for company systems, and the rule that company data lives in company accounts (a departing employee's personal Google account is a data-loss incident waiting to happen).",
            "The phishing reality: the founder is a target  the 'invoice from your accountant' email, the 'urgent wire change' (from the fundraising track), the fake login page. The defense is the habit: never act on urgency, verify every request through a known channel, and hover/check every link. The wire-verification rule from the close lesson applies to everything.",
          ],
        },
        {
          heading: "The data map",
          paragraphs: [
            "Know where the data lives: customer data (the database, the backups, the analytics tools, the AI APIs  with the privacy track's DPA checks), company data (the docs, the repo, the email), and personal data (the founder's own  often the most valuable and least protected). The map is one page: data → where → who can access → how it's protected → what happens if it leaks.",
            "The incident response: a 10-line plan (who's in charge, what we say, whom we tell  including the legal obligations from the privacy track), written before the incident, because the incident arrives with no time to write.",
          ],
        },
        {
          heading: "The 'single point of failure' audit",
          paragraphs: [
            "The dangerous architecture: one laptop, one password, one person who knows the deployment, one API key in a chat message. The audit: what single point, if it failed, would stop the company for more than a day? Then fix the top three: the shared credentials (use the password manager), the lone operator (document the runbook), the unrotated keys (rotate quarterly  including every key that's ever been pasted in a chat).",
            "The rule that prevents the classics: secrets go in the environment/secret store, never in the repo, never in chat, never in screenshots. The day a key leaks is the day you rotate it  same hour, not same week.",
          ],
        },
      ],
      examples: [
        "A founder's password manager + 2FA stop a takeover attempt in the logs: a login from a foreign IP on his email, blocked by the second factor. The same password reused on a forum was the leak. The manager cost an afternoon; the account was the company's bank access.",
        "A departing developer's personal account holds the company's design files and a deployment key. The offboarding checklist (revoke, rotate, transfer) runs in an hour  the company keeps running, and the former developer keeps no access.",
      ],
      actionItems: [
        "Set up the password manager with unique passwords and 2FA everywhere  this week.",
        "Write the one-page data map and the 10-line incident response plan.",
        "Rotate every key that has ever been shared in chat  now, and quarterly.",
      ],
      keyPoints: [
        "Reused credentials are the #1 attack  password manager + 2FA on the big four.",
        "Urgency is the phishing tell  verify through known channels.",
        "The data map and the incident plan are one page each, written before.",
        "Rotate leaked keys the same hour; secrets never live in chat or repo.",
      ],
    },
    {
      id: "operations-4",
      title: "Meetings, communication, and the async discipline",
      readMinutes: 7,
      sections: [
        {
          heading: "The meeting diet",
          paragraphs: [
            "The early-stage meeting rules: every recurring meeting has a written agenda and a decision owner (from the team track), sync meetings are for decisions (not status  status lives in the tracker), and the default for everything else is async (the doc, the thread, the recorded demo). The cost of a meeting isn't the hour  it's the context switch for everyone in it, multiplied.",
            "The test for every meeting: 'what decision or alignment does this produce that async can't?' If the answer is nothing, cancel it and write the update instead. The teams that ship fastest are the ones whose calendars are mostly empty.",
          ],
        },
        {
          heading: "The async stack",
          paragraphs: [
            "The async discipline: the weekly note (did, learned, next  from the team track), the decision log (date, decision, why), the proposal doc (the 'decision doc' pattern: context → options → recommendation → ask), and the async review (a doc with a deadline, comments instead of a meeting). The rule: asynchronous by default, synchronous when the topic is emotional, strategic, or genuinely complex.",
            "The founder's async skills: write the decision doc so the reader can decide in 5 minutes, respond to the team's threads within a day (the async contract  silence is the async killer), and never let async become 'no communication'  the weekly note keeps the floor under everything.",
          ],
        },
        {
          heading: "The communication contracts",
          paragraphs: [
            "The company runs on explicit contracts: response times (urgent = call; standard = within a day; async = by the deadline), the 'no silent disagreement' rule (from the team track  the node that nods and resists is the costliest node), and the escalation path (blocked → ask the owner → ask the founder; every blockage has an owner).",
            "The founder's communication job: the vision is restated weekly until it's internalized (the team hears it 10x before they can say it back), bad news moves fast (the update pattern: the numbers, the cause, the plan  no dressing), and praise is specific and public.",
          ],
        },
      ],
      examples: [
        "A 7-person team runs 11 recurring meetings. The audit kills 7 (status meetings replaced by the weekly note). Two weeks later: engineers report 40% more deep-work time, and the roadmap accelerates visibly.",
        "A founder goes silent for two weeks of 'heads-down work.' The team improvises, decisions drift, and the shipping pace halves. The weekly note would have kept the floor under everything  async only works with the contract in place.",
      ],
      actionItems: [
        "Audit every recurring meeting: agenda, decision owner, or cancel.",
        "Adopt the decision-doc pattern: context → options → recommendation → ask.",
        "Write the async contract: response times, no silent disagreement, escalation path.",
      ],
      keyPoints: [
        "Sync for decisions, async for everything else.",
        "The weekly note + decision log + decision docs = the async stack.",
        "Silence is the async killer  response contracts save it.",
        "The vision is restated weekly until the team can say it back.",
      ],
    },
    {
      id: "operations-5",
      title: "Managing the board and investors after the raise",
      readMinutes: 8,
      sections: [
        {
          heading: "The board: an operating tool, not a report",
          paragraphs: [
            "The board meeting is where the company's judgment gets audited  and it's the founder's best free advisory resource if used right. The board's job: help with the decisions that matter (capital, hires, strategy), hold the company to its commitments, and catch the founder's blind spots. The board meeting rhythm: quarterly, 90 minutes, deck circulated 48 hours ahead (the meeting is for discussion, not discovery).",
            "The board deck: the numbers (the 8-metric dashboard, actuals vs plan), the story (what happened and why), the decisions (the 3 things you want input on  the board's real value), and the asks (intros, hires, advice). The board that only gets 'here's how it's going' never helps; the board that gets 'here's what I'm deciding' becomes an operating tool.",
            "The founder's board skills: prepare (circulate early, know the numbers cold), be honest first (bad news before it's asked  the board's trust is the company's credit), and disagree productively (the board is advisory; the founder owns the decision  but a board that's ignored twice in a row stops advising).",
          ],
        },
        {
          heading: "The investor update that gets read",
          paragraphs: [
            "The monthly update (from the fundraising track) has a format that gets read: the 3-sentence story (up because / down because / the risk), the 8 numbers, the asks (what you need  intros, hires, advice), and the 60-second future (next month's plan). Under 500 words, skimmable, honest. The update that hides the bad news is the update that gets scrutinized.",
            "The cadence: monthly, on a fixed day (the calendar owns it, not motivation). And the rule: the update is also the company's internal monthly review  one document, two audiences, zero extra work.",
          ],
        },
        {
          heading: "Using the network you raised",
          paragraphs: [
            "The raise bought capital AND access  the access is the part founders forget to use. The habits: one 'ask' in every update (a specific intro, a specific hire, a specific customer), the 'problem of the month' (surface one problem and invite help  investors love to be useful, and the one who helps once becomes a sponsor), and the thank-you (the small capital of the relationship, spent generously).",
            "The network math: the investor who introduces one customer is worth more than the investor who wrote the same check twice. Cultivate the useful ones deliberately.",
          ],
        },
      ],
      examples: [
        "A founder treats the board as a report. Quarter 3: the board says 'you've raised but you're drifting  what are you deciding?' The founder starts circulating the decision list 48 hours early. The board's advice on the next raise's structure saves the company a point of dilution.",
        "Another founder's updates are 'all good, on track.' When the product misses, the update finally says so  and the investors' trust (built on the 'all good' monthlies) takes the hit at the worst moment. Honesty first, always.",
      ],
      actionItems: [
        "Build the board deck template: numbers, story, decisions, asks  and circulate 48 hours early.",
        "Adopt the monthly update format with one specific ask in every update.",
        "Schedule the 'problem of the month' habit: surface one problem, invite help.",
      ],
      keyPoints: [
        "The board is an operating tool: decisions and asks, not reports.",
        "Bad news first, always  board trust is the company's credit.",
        "The monthly update: story, numbers, asks, future  under 500 words, on a fixed day.",
        "The raise bought access  one ask per update, and cultivate the useful investors.",
      ],
    },
    {
      id: "operations-6",
      title: "Crisis management: the plan you hope to never use",
      readMinutes: 8,
      sections: [
        {
          heading: "The crisis taxonomy",
          paragraphs: [
            "The crises that hit startups: the runway crisis (cash below 3 months  the finance track's survival math), the people crisis (the key person leaving, the firing gone wrong, the equity fight), the product crisis (the security breach, the outage, the data loss  the security track's incident plan), the reputation crisis (the public failure, the bad press, the angry customer post going viral), and the founder crisis (health, personal, the burnout spiral).",
            "The rule that governs all of them: the crisis arrives with no time  so the response is prepared in advance. The crisis playbook: who's in charge (the founder, always), who speaks (one voice, to the team and the public), what we say (the honest version  the story, the cause, the fix, the timeline), and whom we tell first (the team before the press, the investors before the world, the customers before the speculation).",
          ],
        },
        {
          heading: "The crisis operating rules",
          paragraphs: [
            "Rule 1: tell the team first, in person, fully. Rule 2: bad news travels in one message  the three-part pattern (what happened, what it means, what we're doing) with no dressing. Rule 3: never speculate publicly (the statement covers what's known; 'we're investigating' is a complete sentence). Rule 4: the founder takes the front (the company's credibility is borrowed from the founder's  the apology, the ownership, the fix). Rule 5: the aftermath is a system (the postmortem  what happened, why, what changed  from the culture lesson).",
            "The emotional rule for the founder: crises are judged by the response, not the cause. The company that responds honestly and fast comes out of a crisis stronger than the one that responds defensively and slow  the market rewards the handling, not the happening.",
          ],
        },
        {
          heading: "The prevention that beats the cure",
          paragraphs: [
            "Most crises are predictable: the runway is known (the weekly number), the key-person dependency is known (the bus test), the security gaps are known (the data map). The prevention practice: the quarterly 'what would kill us' review  write the five worst-case scenarios, score the likelihood, and fix the top two. The founders who survive are the ones who did the boring Tuesday work that made the crisis a non-event.",
          ],
        },
      ],
      examples: [
        "A startup's product outage takes down customer data for 8 hours. The founder's response: team told first, customers within the hour (what happened, what we're doing, the timeline), investors that afternoon, and a public postmortem 48 hours later. Two customers churn  the 'defensive and slow' alternative would have cost ten.",
        "Another founder's key engineer resigns with no notice  and no documentation. The bus test was never run. The feature she owned is frozen for a quarter. The Tuesday work was the missed investment.",
      ],
      actionItems: [
        "Write the crisis playbook: who's in charge, one voice, the honest-message template, the tell-order.",
        "Run the 'what would kill us' review: 5 scenarios, likelihood, fix the top 2.",
        "Draft the bad-news template (what happened / what it means / what we're doing)  ready before the first use.",
      ],
      keyPoints: [
        "Crisis response is prepared in advance: who, what, how, whom-first.",
        "Bad news in one message: happened / means / doing  no dressing.",
        "The founder fronts the crisis; the response is judged, not the cause.",
        "Prevention: the quarterly 'what would kill us' review, and the Tuesday work.",
      ],
    },
    {
      id: "operations-7",
      title: "The long game: focus, pivots, and knowing when to slow down",
      readMinutes: 7,
      sections: [
        {
          heading: "Focus as a compounding asset",
          paragraphs: [
            "The startup's competitive advantage at every stage is focus: the team that does one thing deeply beats the team that does three things adequately. The focus discipline: the strategy is written down (the company's 'one thing'  the position, the ICP, the metric), and every opportunity is weighed against it. The 'opportunity' that takes you off the one thing is usually a distraction wearing a revenue costume.",
            "The quarterly check: are we still doing the one thing? The drift is silent  the new product line, the services business 'to fund development,' the pivot-by-feature-request. The check brings the drift into the light where it can be decided, not discovered.",
          ],
        },
        {
          heading: "The pivot that's a decision, not a drift",
          paragraphs: [
            "The pivot rules (from the product track): pivot with the evidence (the cohorts, the interviews  not the mood), pivot the smallest thing first (segment before problem before everything), and protect the runway before pivoting (a pivot needs 6-9 months of cash to be a choice instead of a scramble). The pivot is a strategic decision made deliberately  the opposite of the drift that happens one feature at a time.",
            "The founder's pivot check: 'if we were starting today with what we know, would we build this for these customers?' If the answer is no, the pivot conversation starts  with the data in hand, not the sunk cost.",
          ],
        },
        {
          heading: "Slowing down is a strategy",
          paragraphs: [
            "The startup mythology glorifies speed; the startup reality rewards judgment. The moments that demand slow: the hire that can't be rushed (the wrong hire is a quarter), the round that shouldn't be taken (the wrong investor is a decade), the feature that's not ready (the broken launch is a reputation). The founders who know when to slow down are the ones who get to keep speeding up later.",
            "The long game checklist: the runway is always known, the calendar has white space, the decisions are made with sleep, and the founder's energy is managed like the resource it is. The company that survives to year 5 beats the company that burns out at year 2  the long game is not a slogan, it's the operating plan.",
          ],
        },
      ],
      examples: [
        "A startup's services arm grows to 40% of revenue  'for cash flow.' The distraction compounds: the services customers need services, the product stalls, and the equity story weakens. The quarterly one-thing check would have caught the drift at 15%.",
        "A founder signs the wrong investor 'to close the round fast'  the term sheet has a board seat and a wide veto. The 'fast' round becomes two years of friction. The slowed-down decision (interview the investor's portfolio founders, read the governance) would have cost two weeks.",
      ],
      actionItems: [
        "Write the company's one thing on one page: position, ICP, the metric. Weigh every opportunity against it.",
        "Run the quarterly check: 'starting today, would we build this for these customers?'",
        "Review the last quarter's decisions: which were rushed, and what did the rush cost?",
      ],
      keyPoints: [
        "Focus compounds  the opportunity off the one thing is usually a distraction.",
        "Pivots are deliberate, evidence-based, and runway-protected; drift is neither.",
        "Slow is a strategy: hires, rounds, and launches that can't be rushed.",
        "The long game is the operating plan: runway known, white space kept, energy managed.",
      ],
    },
  ],
  quiz: [
    {
      question: "The founder's week should be built around:",
      options: [
        "The inbox",
        "Three priorities + protected deep work + review",
        "Filling every calendar slot",
        "Whatever the team needs",
      ],
      correctIndex: 1,
      explanation: "The plan owns the inbox, never the reverse  three priorities, protected deep work, and the Friday review.",
    },
    {
      question: "The tool rule is:",
      options: [
        "More tools = more organized",
        "Add a tool only when the cost of NOT having it is visible",
        "Use the most popular tool",
        "One tool for every task",
      ],
      correctIndex: 1,
      explanation: "Every tool is a tax on attention  seven categories, one tool each, and nothing for novelty.",
    },
    {
      question: "The #1 attack vector for founders is:",
      options: [
        "Sophisticated hacking",
        "Reused credentials",
        "Physical theft",
        "Disgruntled employees",
      ],
      correctIndex: 1,
      explanation: "Reused passwords are the #1 attack  a password manager with unique credentials everywhere prevents most breaches.",
    },
    {
      question: "The default for startup communication should be:",
      options: [
        "Sync meetings",
        "Async, with sync reserved for decisions",
        "Email only",
        "Impromptu calls",
      ],
      correctIndex: 1,
      explanation: "Sync for decisions and the emotional/strategic; async (docs, threads, weekly notes) for everything else.",
    },
    {
      question: "The board's real value is:",
      options: [
        "Approving your plans",
        "Input on decisions + catching blind spots",
        "Running your operations",
        "Investor relations only",
      ],
      correctIndex: 1,
      explanation: "The board is advisory  its value is input on decisions, asks, and blind spots, not reports or approval.",
    },
    {
      question: "In a crisis, bad news should travel:",
      options: [
        "First to the press",
        "In one honest message: happened / means / doing",
        "In pieces, as facts emerge",
        "Only to investors",
      ],
      correctIndex: 1,
      explanation: "One three-part message, team first, investors before the world  no dressing, no speculation.",
    },
    {
      question: "The startup's compounding advantage is:",
      options: [
        "Speed alone",
        "Focus",
        "More features",
        "More meetings",
      ],
      correctIndex: 1,
      explanation: "The team that does one thing deeply beats the team doing three things adequately  focus is the moat at every stage.",
    },
    {
      question: "When should the pivot conversation start?",
      options: [
        "When the runway is at 2 months",
        "When 'starting today, we wouldn't build this for these customers'",
        "After every missed quarter",
        "When the team asks",
      ],
      correctIndex: 1,
      explanation: "The pivot is deliberate and evidence-based  with the data in hand and the runway protected, not the sunk cost.",
    },
  ],
};