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
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your week is like a machine. If you do not plan it, other people plan it for you. This lesson teaches you the simple rhythm that great founders use: plan on Monday, protect your deep work every day, review on Friday. The goal is simple. You want your best hours spent on the work that moves the company, not on everyone else's requests.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Living in the inbox. The inbox is a list of other people's priorities. Every email is someone else's request. If the inbox runs your day, your company drifts toward whoever emails first. Fix: process email in two fixed windows a day, and never let an email enter your calendar unless it serves your three priorities.",
            "Mistake 2: Protecting deep work only when you have time. Deep work is the work that moves the product and the company. If it is not on the calendar, it will not happen. Leftover time gets eaten by meetings and messages. Fix: block the same 90 minutes every morning and treat that block like a customer meeting.",
            "Mistake 3: Reviewing only when things go wrong. Review is not punishment. It is the steering wheel. If you only look at the numbers in a crisis, you always steer late. Fix: put the Friday review and the monthly review on the calendar now, and keep them forever.",
            "Mistake 4: Running on adrenaline. Long hours feel like progress, but tired decisions are expensive decisions. The company's bottleneck is often the founder's energy. Fix: treat sleep, exercise, and free thinking time as part of the operating system, not as luxuries.",
          ],
        },
        {
          heading: "The weekly and monthly rhythms",
          paragraphs: [
            "The founder's week has a simple skeleton. Monday is for planning: the three priorities, the meetings, the deep-work blocks. Every day has one protected 90-minute deep-work block before the world wakes up. That block is for the product work, the sales calls, or the content that moves the company. Friday is for review: what shipped, what the numbers say, what you learned.",
            "The month has its own rhythm. Once a month, do the strategy review: the metrics, the roadmap, the hires. Do the personal review too: energy, balance, and the honest question of whether you are still the right person for this job. Both reviews are short and recurring. The point is that they happen on a schedule, not when things calm down, because things never calm down.",
            "The calendars of great founders share two properties. First, deep work is protected. It is scheduled, not leftover. Second, review happens on a schedule. The plan is not a wish list. It is the company's strategy expressed in hours.",
          ],
        },
        {
          heading: "The priority system",
          paragraphs: [
            "The three-priorities rule is simple: every week, pick exactly three outcomes that move the company. Not five, not ten. Three. The rule does the discipline for you. When a new task appears, weigh it against the three. The urgent-but-unimportant stuff, the email, the sync, the favor, gets batched, deferred, or refused.",
            "The classic founder failure is operating on the inbox. The inbox is everyone else's priorities. Your plan is yours. So process the inbox in two windows a day. Nothing enters the calendar without a clear answer to one question: how does this serve the three?",
            "If everything is a priority, nothing is. A priority list of ten items is not a plan, it is a hope. The three-priorities rule forces you to choose, and choosing is the job. When the team sees the same three priorities every week, they start aligning their own work to them.",
          ],
        },
        {
          heading: "Energy management",
          paragraphs: [
            "Founding is a marathon with sprint intervals. The operating system runs on energy, not hours. The disciplines that matter are simple: sleep, exercise, and white space. Sleep is non-negotiable. Decisions made on five hours of sleep cost more than the hours they saved. Exercise is the stress outlet and the clarity engine.",
            "White space is an afternoon or a day a week with no meetings. It is where the strategy actually gets thought. Without it, the calendar is full and the thinking is empty. Great founders protect white space the same way they protect a customer meeting.",
            "How do you know you are overdrawing your energy? The signs are clear: decision quality drops, email reactivity rises, and the team starts saying 'we cannot get the founder's attention.' That is not hustle. That is the company's bottleneck complaining. Listen to it.",
          ],
        },
      ],
      examples: [
        "A founder works 90-hour weeks and the company is stuck. The audit shows 30 hours of meetings, 4 hours of deep work, and zero review time. The rebuild is simple: three priorities, protected deep work, and a Friday review. The company produces more in 55 hours than it did in 90.",
        "Another founder's calendar is owned by the inbox for six months. The team learns to CC her aggressively to get things moving. The company's priorities drift toward whoever emails first. The three-priorities rule takes back the wheel in two weeks.",
        "A founder skips the personal review for a year. She wakes up burned out and resentful of the company she built. The monthly personal check would have caught the slide early. Energy is a resource, and resources need monitoring.",
        "A founder blocks deep work from 7am to 8:30am every day for a quarter. The product ships faster, the team stops waiting on him, and the weekly plan actually gets executed. The habit cost one hour of sleep schedule, and it returned the company.",
      ],
      actionItems: [
        "Write this week's three priorities. Put them where you can see them all week.",
        "Block your deep-work hours now. Same time every day, and treat the block as non-negotiable.",
        "Set your inbox windows: two sessions a day, nothing in between.",
        "Book the Friday review and one white-space afternoon. Make both recurring, forever.",
        "Add the monthly strategy review and the monthly personal check to your calendar.",
      ],
      keyPoints: [
        "Monday plans, daily deep work, Friday reviews, monthly strategy and personal checks.",
        "Three priorities a week. The inbox serves the plan, never the reverse.",
        "Deep work is scheduled, not leftover.",
        "Energy beats hours: sleep, exercise, and white space are part of the system.",
        "Reactivity is the bottleneck complaining. When the team cannot reach you, that is data, not hustle.",
      ],
    },
    {
      id: "operations-2",
      title: "Tools and systems: the stack that scales",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Tools are just boxes where your work lives. If you have too many boxes, you lose things. If you have too few, everything spills. This lesson helps you pick one tool for each job, and build the safety systems that keep the company running when things break.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Collecting tools. A new tool feels productive, but every tool costs attention. Three note apps split your memory into three places. Fix: one tool per category, and add a tool only when the cost of not having it is visible.",
            "Mistake 2: No backup, or an untested backup. A backup you have never restored is a hope, not a backup. The hard drive dies on a Monday, and the 'backup' turns out to be broken. Fix: automate backups, and test a restore every quarter.",
            "Mistake 3: Passwords in spreadsheets and chats. A shared spreadsheet of passwords is a single point of failure. One leak and the whole company is open. Fix: a password manager, every credential inside it, and 2FA everywhere.",
            "Mistake 4: Systems that depend on you. If the process only works when you run it, you have a habit, not a system. When you are sick or on vacation, everything stops. Fix: write it down so someone else can run it.",
          ],
        },
        {
          heading: "The minimal stack",
          paragraphs: [
            "The early-stage tool stack should stay deliberately small. Seven categories cover almost everything: communication (Slack or Discord), docs and knowledge (Notion or Google Docs), project tracking (Linear, Asana, or Trello), CRM (your pipeline stages), analytics (your product events), finance (your bookkeeping), and hosting for code and design. One tool per category is the rule.",
            "Why one tool each? Because the tool is a home for the work, not a toy. Three notes apps create three versions of the truth. Two task boards split the priorities. Every extra tool is a tax on attention, and attention is the scarcest resource in a startup.",
            "The tool rule: add a tool only when the cost of NOT having it is visible. You can name the lost work, the missed deadline, or the scattered knowledge. If you cannot name the cost, you do not need the tool. Never adopt a tool for novelty.",
          ],
        },
        {
          heading: "The systems that matter",
          paragraphs: [
            "Some systems exist to prevent disasters. The backup system covers code, data, and docs. It is automated, tested, and stored off-site. The restore test runs quarterly, because an untested backup is a hope. The password system is a password manager with every credential inside it and 2FA everywhere. The founder's laptop is a target.",
            "The access system controls who can touch what. When someone departs, revoke access the same hour. The documentation system holds the decision log, the onboarding doc, and the runbook for recurring tasks. Together, these systems make the company survive a bad day.",
            "The test of a system: can someone else run it without you? If the answer is no, it is a habit, not a system. The bus test is the checklist: if you vanished this week, what breaks? Whatever breaks is what you systematize next.",
          ],
        },
        {
          heading: "The documentation discipline",
          paragraphs: [
            "The company's memory lives in writing. Decisions go in the decision log. Processes go in the runbook: how we ship, how we onboard, how we handle support. Unwritten rules go in the culture doc. The rule is simple: if a task is done twice, write it down once. The third time, it is a system.",
            "The ROI of documentation is invisible until it is not. The day the second hire joins, the day an employee asks 'how do we do this?', the day you are sick and the launch still ships. That is the difference between a company and a person with a company.",
            "Documentation does not need to be beautiful. It needs to exist, and it needs to be findable. One doc, one place, one link. A messy doc that people can find beats a perfect doc that nobody knows about.",
          ],
        },
      ],
      examples: [
        "A founder runs three note apps, two task boards, and a CRM that nobody updates. The knowledge is scattered and the pipeline is fiction. A two-day consolidation project, one tool per category, returns an hour a day from that point on.",
        "A founder's laptop dies on a Monday. The password manager, the cloud backup, and the off-site code repo mean the team loses a day, not a month. The systems paid for themselves in one morning.",
        "A startup skips the restore test for two years. The server dies, and the backup fails to restore. The customers' data is gone. One quarterly restore test would have caught the broken backup years earlier.",
        "A founder writes a one-page onboarding doc after the second hire struggles for a week. The third hire is productive in two days. The doc cost an afternoon and saved a month of a senior person's time.",
      ],
      actionItems: [
        "Audit your stack: the seven categories, one tool each. Consolidate or delete the extras.",
        "Run the bus test: if you vanished this week, what breaks? Write down the top three gaps.",
        "Automate your backups and test a restore this week, not next month.",
        "Move every credential into the password manager and turn on 2FA everywhere.",
        "Write the runbook for your most repeated task: the exact steps, in one doc, in one place.",
      ],
      keyPoints: [
        "Seven categories, one tool each. Tools are taxes on attention.",
        "Add a tool only when the cost of not having it is visible.",
        "Systems: backups (tested), passwords, access, and documentation.",
        "The bus test is the systematization checklist.",
        "Twice means write it down. Thrice means make it a system.",
      ],
    },
    {
      id: "operations-3",
      title: "Security and the data you can't afford to lose",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Security is just locking the doors of your company. Most attacks are not clever. They are lazy: stolen passwords, fake emails, one key left in a chat. This lesson shows you the cheap, boring habits that stop almost all attacks before they start.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Reusing passwords. The same password on a forum and on your email is a chain. When the forum leaks, the email is open. Fix: a password manager with a unique password everywhere.",
            "Mistake 2: No 2FA on the big four. Email, code, banking, and hosting are the systems whose breach ends companies. Fix: turn on two-factor authentication (2FA) on all four today. 2FA means you need a code from your phone as well as the password.",
            "Mistake 3: Acting on urgency. The fake invoice, the urgent wire change, the fake login page. Urgency is the attacker's favorite tool. Fix: never act on an urgent request. Verify every request through a channel you know is real.",
            "Mistake 4: Secrets in chats and repos. An API key pasted in a chat is a public key. Fix: keys go in the secret store or environment, never in chat, never in the repo, never in screenshots.",
          ],
        },
        {
          heading: "The founder's security baseline",
          paragraphs: [
            "The baseline prevents 95% of disasters. First, a password manager with unique passwords everywhere. Reused credentials are the number one attack vector, which means the place attackers try first. Second, 2FA on email, code, banking, and hosting. Those are the four systems whose breach ends companies. Third, no personal-account reuse for company systems. A departing employee's personal Google account holding company data is a data-loss incident waiting to happen.",
            "The phishing reality: the founder is a target. Attackers send the 'invoice from your accountant' email, the 'urgent wire change' email, the fake login page. The defense is a habit, not a tool. Never act on urgency. Verify every request through a known channel. Hover over every link to see where it really goes.",
            "The wire-verification rule from the close lesson applies to everything. Big money moves only after a voice call to a known number. If someone asks you to change payment details, slow down and verify. The minutes you spend verifying are cheap compared to the money you can lose.",
          ],
        },
        {
          heading: "The data map",
          paragraphs: [
            "Know where your data lives. Customer data sits in the database, the backups, the analytics tools, and the AI APIs. Company data sits in the docs, the repo, and the email. Personal data is the founder's own, and it is often the most valuable and the least protected.",
            "The map is one page. For each type of data, write four things: where it lives, who can access it, how it is protected, and what happens if it leaks. One page. If you cannot write it in an hour, your data is scattered.",
            "The incident response plan is 10 lines. Who is in charge, what we say, whom we tell, including the legal obligations from the privacy track. Write it before the incident. The incident arrives with no time to write, so the plan must already exist.",
          ],
        },
        {
          heading: "The 'single point of failure' audit",
          paragraphs: [
            "The dangerous architecture is familiar: one laptop, one password, one person who knows the deployment, one API key in a chat message. Any one of those, if it failed, can stop the company for more than a day. The audit asks exactly that question: what single point would stop the company?",
            "Then fix the top three. Shared credentials move into the password manager. The lone operator gets a runbook. The unrotated keys get rotated. The rotation rule: quarterly, including every key that has ever been pasted in a chat. The day a key leaks is the day you rotate it, same hour, not same week.",
            "The rule that prevents the classics: secrets go in the environment or the secret store. Never in the repo, never in chat, never in screenshots. If a key has ever been shared, treat it as already compromised. Rotate it now.",
          ],
        },
      ],
      examples: [
        "A founder's password manager plus 2FA stop a takeover in the logs. A login from a foreign IP hits his email and the second factor blocks it. The same password reused on a forum was the leak. The manager cost an afternoon. The account was the company's bank access.",
        "A departing developer's personal account holds the company's design files and a deployment key. The offboarding checklist runs in an hour: revoke, rotate, transfer. The company keeps running, and the former developer keeps no access.",
        "A founder gets a fake 'wire change' email during a fundraise. The attacker asks for the money to move to a new account. The founder verifies with a voice call, discovers the fraud, and loses nothing. The verification habit saved the round.",
        "A startup's API key sits in a public repo for a year. A scraper finds it and runs a huge bill on their account. The quarterly rotation rule would have killed the key long before the bill arrived.",
      ],
      actionItems: [
        "Set up the password manager with unique passwords and 2FA everywhere. Do it this week.",
        "Write the one-page data map: where data lives, who can access it, how it is protected, what happens if it leaks.",
        "Write the 10-line incident response plan: who is in charge, what we say, whom we tell.",
        "Rotate every key that has ever been shared in chat. Now, and quarterly from now on.",
        "Run the single-point-of-failure audit and fix the top three gaps this month.",
      ],
      keyPoints: [
        "Reused credentials are the number one attack. Password manager plus 2FA on the big four.",
        "Urgency is the phishing tell. Verify through known channels.",
        "The data map and the incident plan are one page each, written before the incident.",
        "Rotate leaked keys the same hour. Secrets never live in chat or the repo.",
        "Security is a habit, not a tool. The boring habits stop the lazy attacks.",
      ],
    },
    {
      id: "operations-4",
      title: "Meetings, communication, and the async discipline",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Meetings cost more than the hour on the calendar. They also break everyone's focus. This lesson shows you how to cut meetings, move work to written updates, and set simple rules so nobody is left guessing.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: A meeting for every update. Status belongs in the tracker, not in a room. If the meeting is only people reading numbers, cancel it. Fix: write the update, and keep the meeting only for decisions.",
            "Mistake 2: Meetings with no agenda and no owner. A meeting without a written agenda wanders. A decision without an owner never happens. Fix: every recurring meeting has a written agenda and a named decision owner.",
            "Mistake 3: Going silent in async. Async means written, not absent. When the founder goes quiet for two weeks, the team improvises and decisions drift. Fix: respond to threads within a day, and keep the weekly note going.",
            "Mistake 4: No escalation path. When someone is blocked, they should know who to ask. Without a path, blockages sit and fester. Fix: write the path: blocked means ask the owner, then ask the founder.",
          ],
        },
        {
          heading: "The meeting diet",
          paragraphs: [
            "The early-stage meeting rules are simple. Every recurring meeting has a written agenda and a decision owner. Sync meetings exist for decisions, not for status. Status lives in the tracker, where anyone can read it. The default for everything else is async: the doc, the thread, the recorded demo.",
            "The cost of a meeting is not the hour. It is the context switch for everyone in it, multiplied. A one-hour meeting with five people is really five hours of interruption plus the time to re-focus. That is why calendars full of meetings feel so exhausting.",
            "The test for every meeting: what decision or alignment does this produce that async cannot? If the answer is nothing, cancel it and write the update instead. The teams that ship fastest are the ones whose calendars are mostly empty.",
          ],
        },
        {
          heading: "The async stack",
          paragraphs: [
            "The async stack is a set of written tools. The weekly note: what you did, what you learned, what is next. The decision log: date, decision, why. The proposal doc, also called the decision doc: context, options, recommendation, ask. And the async review: a doc with a deadline, comments instead of a meeting.",
            "The rule: asynchronous by default, synchronous when the topic is emotional, strategic, or genuinely complex. Written words can make a hard discussion colder than it should be. Save the meeting for the moments that need a human voice.",
            "The founder's async skills are three. Write the decision doc so the reader can decide in five minutes. Respond to the team's threads within a day, because silence is the async killer. And never let async become no communication. The weekly note keeps a floor under everything.",
          ],
        },
        {
          heading: "The communication contracts",
          paragraphs: [
            "The company runs on explicit contracts. Response times: urgent means call, standard means within a day, async means by the deadline. The no-silent-disagreement rule: the node that nods and resists is the costliest node. And the escalation path: blocked means ask the owner, then ask the founder. Every blockage has an owner.",
            "The founder's communication job has three parts. The vision is restated weekly until the team can say it back. The team hears it ten times before they can repeat it. Bad news moves fast, in the update pattern: the numbers, the cause, the plan, no dressing. Praise is specific and public.",
            "Written updates do not replace leadership. They replace the noise. When the team knows the response times and the escalation path, they spend less energy guessing and more energy building.",
          ],
        },
      ],
      examples: [
        "A 7-person team runs 11 recurring meetings. The audit kills seven of them: status meetings replaced by the weekly note. Two weeks later, engineers report 40% more deep-work time, and the roadmap accelerates visibly.",
        "A founder goes silent for two weeks of heads-down work. The team improvises, decisions drift, and the shipping pace halves. The weekly note would have kept a floor under everything. Async only works with the contract in place.",
        "A team's 'quick sync' every morning turns into a 45-minute update session. The tracker already has every number. The meeting dies in a week, replaced by a 5-minute written standup, and the team gains 40 hours a month.",
        "A founder restates the vision in the weekly note for three months. At the all-hands, a junior engineer explains the strategy and the ideal customer profile back perfectly. The repetition worked.",
      ],
      actionItems: [
        "Audit every recurring meeting: agenda, decision owner, or cancel.",
        "Adopt the decision-doc pattern: context, options, recommendation, ask.",
        "Write the async contract: response times, no silent disagreement, escalation path.",
        "Write this week's note in the did, learned, next format and share it.",
        "Cancel the meetings that fail the test: no decision, no alignment, async could do it.",
      ],
      keyPoints: [
        "Sync for decisions. Async for everything else.",
        "The weekly note, the decision log, and decision docs are the async stack.",
        "Silence is the async killer. Response contracts save it.",
        "A meeting without an agenda and an owner is a social event.",
        "The vision is restated weekly until the team can say it back.",
      ],
    },
    {
      id: "operations-5",
      title: "Managing the board and investors after the raise",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your board and your investors can be your best free advisors, or they can be a distraction. The difference is how you use them. This lesson shows you how to turn reporting into a tool that helps you decide and opens doors.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Treating the board as a report. 'Here is how it is going' gives the board nothing to do. They stop helping. Fix: bring decisions, not reports. List the three things you want input on.",
            "Mistake 2: Circulating the deck at the meeting. If the board reads the deck in the room, the meeting is wasted. Fix: circulate 48 hours early. The meeting is for discussion, not discovery.",
            "Mistake 3: Hiding the bad news. An 'all good' update builds trust on sand. When the miss finally shows up, the trust takes the hit at the worst moment. Fix: bad news first, always.",
            "Mistake 4: Raising money and never using the network. The raise bought access, and access is the part founders forget. Fix: one specific ask in every update, and one problem of the month.",
          ],
        },
        {
          heading: "The board: an operating tool, not a report",
          paragraphs: [
            "The board meeting is where the company's judgment gets audited. Used right, it is the founder's best free advisory resource. The board's job is to help with the decisions that matter: capital, hires, strategy. It holds the company to its commitments. It catches the founder's blind spots.",
            "The rhythm: quarterly, 90 minutes, deck circulated 48 hours ahead. The deck has four parts. The numbers: the 8-metric dashboard with actuals versus plan. The story: what happened and why. The decisions: the three things you want input on. The asks: intros, hires, advice.",
            "The board that only gets 'here is how it is going' never helps. The board that gets 'here is what I am deciding' becomes an operating tool. The founder's skills: prepare, circulate early, know the numbers cold. Be honest first, bad news before it is asked. Disagree productively, because the board is advisory and the founder owns the decision. But remember: a board that is ignored twice in a row stops advising.",
          ],
        },
        {
          heading: "The investor update that gets read",
          paragraphs: [
            "The monthly update has a format that gets read. The three-sentence story: up because, down because, the risk. The eight numbers. The asks: what you need, intros, hires, advice. The 60-second future: next month's plan. Under 500 words, skimmable, honest.",
            "The update that hides the bad news is the update that gets scrutinized. Investors have seen a hundred 'all good' updates that ended badly. The honest update builds the trust that the company will need at the worst moment.",
            "The cadence: monthly, on a fixed day. The calendar owns it, not motivation. And the rule that saves work: the update is also the company's internal monthly review. One document, two audiences, zero extra work.",
          ],
        },
        {
          heading: "Using the network you raised",
          paragraphs: [
            "The raise bought capital and access. The access is the part founders forget to use. The habits are simple. One ask in every update: a specific intro, a specific hire, a specific customer. The problem of the month: surface one problem and invite help. Investors love to be useful, and the one who helps once becomes a sponsor.",
            "The thank-you is the small capital of the relationship. Spend it generously. A two-line note after an intro or a piece of advice costs a minute and compounds like interest.",
            "The network math: the investor who introduces one customer is worth more than the investor who wrote the same check twice. Cultivate the useful ones deliberately. Keep a list of who opened doors and who did not, and invest your update time where it returns.",
          ],
        },
      ],
      examples: [
        "A founder treats the board as a report. In quarter three, the board says: 'You have raised, but you are drifting. What are you deciding?' The founder starts circulating the decision list 48 hours early. The board's advice on the next raise's structure saves the company a point of dilution.",
        "Another founder's updates are 'all good, on track.' When the product misses, the update finally says so. The investors' trust, built on the all-good monthlies, takes the hit at the worst moment. Honesty first, always.",
        "A founder puts one ask in every update: an intro to a specific enterprise customer. On the fourth update, an investor makes the intro, and the meeting leads to a pilot. The access was already paid for. The ask was the missing step.",
        "A founder goes silent for three months after the raise. The first update arrives with a fundraising ask. The investors feel used, and the response is cold. The monthly cadence would have kept the relationship warm.",
      ],
      actionItems: [
        "Build the board deck template: numbers, story, decisions, asks. Circulate 48 hours early.",
        "Adopt the monthly update format: story, numbers, asks, future. Under 500 words, fixed day.",
        "Put one specific ask in every update, and keep a list of who opened doors.",
        "Schedule the problem-of-the-month habit: surface one problem, invite help.",
        "Write the thank-you habit: a two-line note after every intro or piece of advice.",
      ],
      keyPoints: [
        "The board is an operating tool: decisions and asks, not reports.",
        "Bad news first, always. Board trust is the company's credit.",
        "The monthly update: story, numbers, asks, future. Under 500 words, fixed day.",
        "The raise bought access. One ask per update, and cultivate the useful investors.",
        "A board that is ignored twice in a row stops advising.",
      ],
    },
    {
      id: "operations-6",
      title: "Crisis management: the plan you hope to never use",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A crisis is a bad day that was not planned for. Every startup will have one, and the response decides the damage. This lesson gives you a simple playbook to write now, so the bad day is boring instead of terrifying.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Writing the plan during the crisis. The incident arrives with no time to write. Teams improvise, and improvisation is how small problems become big ones. Fix: write the playbook now: who is in charge, who speaks, what we say, whom we tell first.",
            "Mistake 2: Hiding the bad news. 'We are fine' sounds brave and costs trust. When the truth surfaces, the credibility damage is worse than the crisis. Fix: tell the team first, in person, fully. Then the honest version to the world.",
            "Mistake 3: Speculating publicly. Guesses in a public statement become quotes. Fix: the statement covers only what is known. 'We are investigating' is a complete sentence.",
            "Mistake 4: Letting the founder hide. The company's credibility is borrowed from the founder's. The apology, the ownership, the fix belong in front. Fix: the founder fronts the crisis, always.",
          ],
        },
        {
          heading: "The crisis taxonomy",
          paragraphs: [
            "The crises that hit startups come in five shapes. The runway crisis: cash below three months. The people crisis: the key person leaving, the firing gone wrong, the equity fight. The product crisis: the security breach, the outage, the data loss. The reputation crisis: the public failure, the bad press, the angry customer post going viral. And the founder crisis: health, personal, the burnout spiral.",
            "The rule that governs all of them: the crisis arrives with no time, so the response is prepared in advance. The crisis playbook has four lines. Who is in charge: the founder, always. Who speaks: one voice, to the team and the public. What we say: the honest version, with the story, the cause, the fix, and the timeline. Whom we tell first: the team before the press, the investors before the world, the customers before the speculation.",
            "Write the playbook on one page. It does not need to be perfect. It needs to exist, because the crisis will not wait for you to think.",
          ],
        },
        {
          heading: "The crisis operating rules",
          paragraphs: [
            "Rule one: tell the team first, in person, fully. Rule two: bad news travels in one message, the three-part pattern: what happened, what it means, what we are doing. No dressing. Rule three: never speculate publicly. The statement covers what is known. Rule four: the founder takes the front. Rule five: the aftermath is a system, the postmortem: what happened, why, what changed.",
            "The emotional rule for the founder: crises are judged by the response, not the cause. The company that responds honestly and fast comes out of a crisis stronger than the one that responds defensively and slow. The market rewards the handling, not the happening.",
            "Speed matters, but honesty matters more. A fast response with the wrong facts makes the next statement harder. Say what you know, say when you will know more, and say what you are doing now.",
          ],
        },
        {
          heading: "The prevention that beats the cure",
          paragraphs: [
            "Most crises are predictable. The runway is known: it is a weekly number. The key-person dependency is known: it is the bus test. The security gaps are known: they are in the data map. Prevention is just doing the boring Tuesday work.",
            "The prevention practice: the quarterly 'what would kill us' review. Write the five worst-case scenarios. Score the likelihood of each. Fix the top two. One hour a quarter, and the crisis becomes a non-event.",
            "The founders who survive are the ones who did the Tuesday work. The playbook written, the backup tested, the key person documented. When the crisis arrives, it finds a company that is ready, and it passes quickly.",
          ],
        },
      ],
      examples: [
        "A startup's product outage takes down customer data for eight hours. The response: team told first, customers within the hour, what happened, what we are doing, the timeline. Investors that afternoon. A public postmortem 48 hours later. Two customers churn. The defensive and slow alternative would have cost ten.",
        "Another founder's key engineer resigns with no notice and no documentation. The bus test was never run. The feature she owned is frozen for a quarter. The Tuesday work was the missed investment.",
        "A startup's angry customer post goes viral. The founder replies publicly with the honest version: what happened, the fix, the timeline. The comment thread turns from outrage to respect, and two of the loudest critics become customers.",
        "A founder hides a missed payroll for two weeks. When the team finds out, the trust damage is worse than the cash problem. The three-part message on day one would have kept the team in the fight.",
      ],
      actionItems: [
        "Write the crisis playbook: who is in charge, one voice, the honest-message template, the tell order.",
        "Run the what-would-kill-us review: five scenarios, score the likelihood, fix the top two.",
        "Draft the bad-news template: what happened, what it means, what we are doing. Ready before the first use.",
        "Write the postmortem template: what happened, why, what changed.",
        "Pick the one Tuesday task that prevents your most likely crisis and do it this week.",
      ],
      keyPoints: [
        "Crisis response is prepared in advance: who, what, how, whom first.",
        "Bad news in one message: happened, means, doing. No dressing.",
        "The founder fronts the crisis. The response is judged, not the cause.",
        "Never speculate publicly. 'We are investigating' is a complete sentence.",
        "Prevention: the quarterly what-would-kill-us review, and the Tuesday work.",
      ],
    },
    {
      id: "operations-7",
      title: "The long game: focus, pivots, and knowing when to slow down",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Startups are won slowly. The team that does one thing deeply beats the team that does three things okay. This lesson is about focus, about changing direction only when the evidence says so, and about knowing when to slow down.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Chasing every opportunity. The new product line, the services business 'to fund development', the pivot by feature request. Every detour is a distraction wearing a revenue costume. Fix: write down the one thing and weigh every opportunity against it.",
            "Mistake 2: Confusing drift with a pivot. A pivot is a decision. Drift is a series of small steps that carry you somewhere you never chose. Fix: pivots start with the evidence and a deliberate decision.",
            "Mistake 3: Pivoting without runway. A pivot needs 6 to 9 months of cash to be a choice instead of a scramble. Fix: protect the runway before you pivot.",
            "Mistake 4: Treating speed as the only metric. The wrong hire is a quarter. The wrong investor is a decade. The broken launch is a reputation. Fix: slow down on the decisions that compound.",
          ],
        },
        {
          heading: "Focus as a compounding asset",
          paragraphs: [
            "The startup's competitive advantage at every stage is focus. The team that does one thing deeply beats the team that does three things adequately. Focus compounds: every month of depth makes the next month easier, and every detour makes the next month harder.",
            "The focus discipline starts with writing. The company's one thing goes on one page: the position, the ICP (ideal customer profile), the metric. Then every opportunity is weighed against it. The opportunity that takes you off the one thing is usually a distraction wearing a revenue costume.",
            "The quarterly check: are we still doing the one thing? The drift is silent. It arrives as the new product line, the services business to fund development, the pivot by feature request. The check brings the drift into the light, where it can be decided instead of discovered.",
          ],
        },
        {
          heading: "The pivot that's a decision, not a drift",
          paragraphs: [
            "The pivot rules are three. Pivot with the evidence: the cohorts, the interviews, not the mood. Pivot the smallest thing first: segment before problem before everything. And protect the runway before pivoting: a pivot needs 6 to 9 months of cash to be a choice instead of a scramble.",
            "The pivot is a strategic decision made deliberately. That is the opposite of drift, which happens one feature at a time. Nobody remembers the meeting where the company drifted. They just wake up in a different business.",
            "The founder's pivot check: if we were starting today with what we know, would we build this for these customers? If the answer is no, the pivot conversation starts. With the data in hand, not the sunk cost. The money you spent does not vote.",
          ],
        },
        {
          heading: "Slowing down is a strategy",
          paragraphs: [
            "The startup mythology glorifies speed. The startup reality rewards judgment. The moments that demand slow: the hire that cannot be rushed, because the wrong hire is a quarter. The round that should not be taken, because the wrong investor is a decade. The feature that is not ready, because the broken launch is a reputation.",
            "The founders who know when to slow down are the ones who get to keep speeding up later. Speed is a burst. Judgment is a system. The long game rewards the system.",
            "The long game checklist: the runway is always known. The calendar has white space. Decisions are made with sleep. And the founder's energy is managed like the resource it is. The company that survives to year five beats the company that burns out at year two. The long game is not a slogan. It is the operating plan.",
          ],
        },
      ],
      examples: [
        "A startup's services arm grows to 40% of revenue, for cash flow. The distraction compounds: the services customers need services, the product stalls, the equity story weakens. The quarterly one-thing check would have caught the drift at 15%.",
        "A founder signs the wrong investor to close the round fast. The term sheet has a board seat and a wide veto. The fast round becomes two years of friction. The slowed-down decision, interviewing the investor's portfolio founders and reading the governance, would have cost two weeks.",
        "A founder pivots on mood after two slow quarters. Six months later, the new direction has the same problem and no runway left. The evidence-based pivot, cohort by cohort, would have shown the real problem was pricing, not the product.",
        "A founder skips a hire to 'move faster' and ships with a broken team dynamic. The rebuild costs a quarter. The slowed-down hiring, three more interviews and one more week, would have saved the quarter.",
      ],
      actionItems: [
        "Write the company's one thing on one page: position, ICP, the metric. Weigh every opportunity against it.",
        "Run the quarterly check: starting today, would we build this for these customers?",
        "Review the last quarter's decisions: which were rushed, and what did the rush cost?",
        "Write your top three compounding decisions: the hire, the round, the launch. Schedule the slow time each needs.",
        "Check the runway number this week, and write down the pivot trigger: the evidence that would make you change direction.",
      ],
      keyPoints: [
        "Focus compounds. The opportunity off the one thing is usually a distraction.",
        "Pivots are deliberate, evidence-based, and runway-protected. Drift is none of those.",
        "Slow is a strategy: hires, rounds, and launches that cannot be rushed.",
        "Sunk cost does not vote. The data does.",
        "The long game is the operating plan: runway known, white space kept, energy managed.",
      ],
    },
  ],
  quiz: [
    {
      question: "The founder's week should be built around:",
      options: [
        "The inbox",
        "Three priorities, protected deep work, and review",
        "Filling every calendar slot",
        "Whatever the team needs",
      ],
      correctIndex: 1,
      explanation: "The plan owns the inbox, never the reverse. Three priorities, protected deep work, and the Friday review run the week.",
    },
    {
      question: "The tool rule is:",
      options: [
        "More tools mean more organized",
        "Add a tool only when the cost of NOT having it is visible",
        "Use the most popular tool",
        "One tool for every task",
      ],
      correctIndex: 1,
      explanation: "Every tool is a tax on attention. Seven categories, one tool each, nothing for novelty.",
    },
    {
      question: "The number one attack vector for founders is:",
      options: [
        "Sophisticated hacking",
        "Reused credentials",
        "Physical theft",
        "Disgruntled employees",
      ],
      correctIndex: 1,
      explanation: "Reused passwords are the top attack. A password manager with unique credentials everywhere prevents most breaches.",
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
      explanation: "Sync for decisions and the emotional and strategic topics. Async, docs, threads, and weekly notes for everything else.",
    },
    {
      question: "The board's real value is:",
      options: [
        "Approving your plans",
        "Input on decisions and catching blind spots",
        "Running your operations",
        "Investor relations only",
      ],
      correctIndex: 1,
      explanation: "The board is advisory. Its value is input on decisions, asks, and blind spots, not reports or approval.",
    },
    {
      question: "In a crisis, bad news should travel:",
      options: [
        "First to the press",
        "In one honest message: happened, means, doing",
        "In pieces as facts emerge",
        "Only to investors",
      ],
      correctIndex: 1,
      explanation: "One three-part message. Team first, investors before the world, no dressing, no speculation.",
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
      explanation: "The team that does one thing deeply beats the team doing three things adequately. Focus is the moat at every stage.",
    },
    {
      question: "When should the pivot conversation start?",
      options: [
        "When the runway is at two months",
        "When starting today, we would not build this for these customers",
        "After every missed quarter",
        "When the team asks",
      ],
      correctIndex: 1,
      explanation: "The pivot is deliberate and evidence-based, with the data in hand and the runway protected, not the sunk cost.",
    },
    {
      question: "The bus test asks:",
      options: [
        "How many users we have",
        "If you vanished this week, what breaks",
        "How fast we can ship",
        "Who is the fastest engineer",
      ],
      correctIndex: 1,
      explanation: "The bus test is the systematization checklist. Whatever breaks when you vanish is what to systematize next.",
    },
    {
      question: "The monthly investor update should be:",
      options: [
        "As long as needed to explain everything",
        "Under 500 words, skimmable, honest, with one ask",
        "Only good news",
        "Sent only when something big happens",
      ],
      correctIndex: 1,
      explanation: "Story, numbers, asks, future. Under 500 words, on a fixed day, honest, with one specific ask.",
    },
  ],
  exam: [
    {
      question: "Which habit do great founders' calendars share?",
      options: [
        "Deep work is protected and review is scheduled",
        "Every slot is filled with meetings",
        "The inbox decides the day",
        "Reviews happen when things calm down",
      ],
      correctIndex: 0,
      explanation: "Great founders protect deep work on the calendar and review on a schedule. The plan owns the inbox, never the reverse.",
    },
    {
      question: "A founder's week is eaten by email and favors. The fix is:",
      options: [
        "Work more hours",
        "Process email in two windows and plan three priorities",
        "Answer every message instantly",
        "Hire an assistant to do the planning",
      ],
      correctIndex: 1,
      explanation: "The inbox is other people's priorities. Two windows a day plus three written priorities take the wheel back.",
    },
    {
      question: "The clearest sign a founder is overdrawing energy:",
      options: [
        "The team says they cannot get the founder's attention",
        "Fewer meetings on the calendar",
        "More deep work shipped",
        "Longer work hours",
      ],
      correctIndex: 0,
      explanation: "When the team cannot reach the founder, the company's bottleneck is complaining. That is reactivity, not hustle.",
    },
    {
      question: "When should you add a new tool?",
      options: [
        "When it looks impressive",
        "When the cost of NOT having it is visible",
        "When a friend recommends it",
        "When it is the most popular option",
      ],
      correctIndex: 1,
      explanation: "If you cannot name the lost work or missed deadline, you do not need the tool. Every tool is a tax on attention.",
    },
    {
      question: "Your backup has never been restored. The right move:",
      options: [
        "Buy more storage",
        "Assume it works",
        "Test a restore this quarter",
        "Keep a second laptop",
      ],
      correctIndex: 2,
      explanation: "A backup you have never restored is a hope. The restore test is quarterly, because untested backups fail on the worst day.",
    },
    {
      question: "The number one attack vector for founders is:",
      options: [
        "Sophisticated hacking teams",
        "Reused credentials",
        "Physical theft",
        "Disgruntled employees",
      ],
      correctIndex: 1,
      explanation: "Reused passwords are where attackers try first. A password manager with unique credentials stops most breaches.",
    },
    {
      question: "An urgent email asks you to change wire details during your raise. You:",
      options: [
        "Reply asking for more info",
        "Forward it to the team",
        "Act immediately",
        "Verify through a known channel first",
      ],
      correctIndex: 3,
      explanation: "Urgency is the phishing tell. Verify the request with a voice call to a known number before any money moves.",
    },
    {
      question: "An API key was pasted in a chat six months ago. You should:",
      options: [
        "Ignore it, nobody saw it",
        "Rotate it now and quarterly from now on",
        "Delete the chat message",
        "Change the team's passwords",
      ],
      correctIndex: 1,
      explanation: "A key that has ever been shared is treated as compromised. Rotate it the same hour, then on a quarterly schedule.",
    },
    {
      question: "The default for startup communication should be:",
      options: [
        "Sync meetings for everything",
        "Async, with sync for decisions",
        "Email only",
        "Impromptu calls",
      ],
      correctIndex: 1,
      explanation: "Async by default, sync for decisions and the emotional, strategic, or genuinely complex topics.",
    },
    {
      question: "A recurring meeting only reads status updates. You should:",
      options: [
        "Keep it, it builds culture",
        "Cancel it and write the update instead",
        "Invite more people",
        "Record it for later",
      ],
      correctIndex: 1,
      explanation: "Status lives in the tracker. If the meeting produces no decision that async cannot, cancel it and write the update.",
    },
    {
      question: "The board's real value is:",
      options: [
        "Running your operations",
        "Input on decisions and catching blind spots",
        "Approving your plans",
        "Managing investor relations",
      ],
      correctIndex: 1,
      explanation: "The board is advisory. Its value is input on decisions, asks, and blind spots, not reports or approval.",
    },
    {
      question: "Your updates have said 'all good' but the product missed. Next update:",
      options: [
        "Soften the news",
        "Wait for the board meeting to say it",
        "Lead with the numbers, the cause, and the plan",
        "Keep saying all good",
      ],
      correctIndex: 2,
      explanation: "Bad news first, always. The honest update protects the trust you will need at the worst moment.",
    },
    {
      question: "In a crisis, bad news should travel:",
      options: [
        "In pieces as facts emerge",
        "Only to investors",
        "First to the press",
        "In one honest message, team first",
      ],
      correctIndex: 3,
      explanation: "One three-part message: happened, means, doing. Team first, investors before the world, no speculation.",
    },
    {
      question: "Your product has a public outage. Who do you tell first?",
      options: [
        "The press",
        "Your investors",
        "The team, in person, fully",
        "Your social media followers",
      ],
      correctIndex: 2,
      explanation: "Rule one of the crisis playbook: the team is told first, in person, fully. Then customers, then investors.",
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
      explanation: "The team that does one thing deeply beats the team doing three things adequately. Focus compounds.",
    },
    {
      question: "A services deal is 40% of revenue but pulls you off the one thing. The check says:",
      options: [
        "Take it, cash is cash",
        "Hire a services lead",
        "Spin off a new company",
        "Weigh it against the one thing and likely cut it",
      ],
      correctIndex: 3,
      explanation: "The opportunity off the one thing is usually a distraction wearing a revenue costume. The quarterly check brings the drift into the light.",
    },
  ],
};