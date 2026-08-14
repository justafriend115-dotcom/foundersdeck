import type { AcademyTrack } from "../types";

export const pitchingTrack: AcademyTrack = {
  id: "pitching",
  title: "Pitching & Storytelling",
  tagline: "Craft the story, design the deck, and run every investor meeting like a pro.",
  icon: "mic",
  estimatedHours: "3.5h",
  free: false,
  lessons: [
    {
      id: "pitching-1",
      title: "Storytelling: the architecture of a pitch that lands",
      readMinutes: 8,
      sections: [
        {
          heading: "Why story beats information",
          paragraphs: [
            "Investors decide with emotion and justify with logic. A pitch that's only information (market size, features, roadmap) gets a polite pass; a pitch that's a story creates a stake — they remember the problem, feel the tension, and want the resolution. The story is not a garnish; it's the argument.",
            "The narrative arc that works for investors: the personal moment (a specific, felt problem) → the struggle (the failed alternatives — this is where you prove you understand the world) → the insight (why you see what others don't) → the proof (traction — the world agreeing) → the future (what this becomes). Each beat earns the next.",
            "The test: tell the story to a stranger in 2 minutes. If they can repeat the problem and why it matters, the architecture works. If they repeat your features, it doesn't.",
          ],
        },
        {
          heading: "The three stories in every pitch",
          paragraphs: [
            "You're actually telling three: (1) the market story — the change that makes this the right moment (the wave), (2) the company story — why this team at this time can win, and (3) the customer story — the real person whose problem gets smaller. The best pitches weave all three into one thread: the market wave creates the opportunity, the customer story shows it's real, the team story says we can take it.",
            "The customer story is the one most founders skip — and it's the one that lands. 'Maria the logistics manager loses 11 hours a week to spreadsheets' is worth a thousand TAM slides. Specific humans are persuasive; abstractions are forgettable.",
          ],
        },
        {
          heading: "The verbal tics that break trust",
          paragraphs: [
            "Hedging ('we hope to,' 'potentially,' 'sort of') reads as low conviction — cut them from the pitch. Filler (um, like, you know) is normal but trainable — record yourself once and hear what the room hears. And the biggest one: number inflation. 'We have 500 users' (free trials) vs 'we have 500 paying users' — the room will do the diligence math in their heads; make your numbers survive it.",
          ],
        },
      ],
      examples: [
        "A founder's first pitch: 15 slides of market size and features. Reaction: polite questions, no follow-ups. Rewritten: opens with the failed audit story of a real clinic, then the wave (new CMS rules), then the team. Three of five meetings schedule partner calls.",
        "A pitch says 'potentially a huge market.' The room hears 'I don't know.' The rewrite: 'our segment spends $2B/yr on this, currently wasted — here are the five companies that prove it.'",
      ],
      actionItems: [
        "Write your 2-minute story and tell it to a stranger — check what they repeat.",
        "Weave the three stories (market, customer, team) into one thread.",
        "Record one practice pitch and cut every hedge word from the script.",
      ],
      keyPoints: [
        "Emotion decides, logic justifies — pitch a story, not data.",
        "Arc: personal moment → struggle → insight → proof → future.",
        "The customer story lands hardest — specific humans persuade.",
        "Cut hedges; make every number survive diligence.",
      ],
    },
    {
      id: "pitching-2",
      title: "Designing the deck: 10 slides that tell the story",
      readMinutes: 8,
      sections: [
        {
          heading: "The 10-slide architecture",
          paragraphs: [
            "Slide 1: The one-liner — what you do, for whom, in one sentence (this is the position, not the slogan). Slide 2: The problem — a specific person, a specific cost. Slide 3: The alternative — what they use today and why it fails. Slide 4: The solution — the product in the customer's job (one screenshot, not a tour). Slide 5: The evidence — traction, labeled (the evidence stack from the fundraising track). Slide 6: The market — the segment and the wave, not the fantasy TAM. Slide 7: The model — how you make money and the unit economics. Slide 8: The team — why you, with the unfair advantage. Slide 9: The ask — the number, the milestone it buys, the runway it creates. Slide 10: The future — what the company becomes in 3-5 years, the story's end.",
            "The rhythm: 10-15 minutes spoken, ~2 minutes per slide. The deck is a map for the conversation, not a document to be read — the text on each slide is a headline and evidence, never paragraphs.",
          ],
        },
        {
          heading: "The design rules",
          paragraphs: [
            "One idea per slide. One number per line. Big fonts (the back of the room). Real screenshots, not wireframes. One accent color; no clip art; no walls of text. The design's job: make the story effortless to follow — the cognitive load goes to the argument, not the layout.",
            "The deck file itself is a distribution document too — it will be forwarded. Put the narrative in the deck (a forwarded deck that reads like slides-with-missing-voice dies), and never put numbers in the deck that you can't defend verbally.",
          ],
        },
        {
          heading: "The common deck diseases",
          paragraphs: [
            "The feature dump (30 slides of features — you've shown you can build, not that you should). The TAM fantasy ('$1T market' — the room knows you can't serve it). The question-mark slide (roadmaps to nowhere: 'Series A at 20M users'). The ugly duckling (a deck that looks broken reads as a company that is broken).",
            "The antidote to all four: the 10-slide architecture and the rule that every slide answers 'so what?' — if a slide doesn't change the decision, it doesn't belong.",
          ],
        },
      ],
      examples: [
        "A founder's 28-slide deck gets cut to 10 by the 'so what' test. The traction slide (which was buried on slide 22) moves to slide 5 — and the follow-up rate triples. The story was always good; the layout was burying it.",
        "A deck uses 12 words per line and 3 fonts per slide. The investor's eye can't find the argument. The redesign (one headline, one number, one screenshot) — same content, 3x the comprehension.",
      ],
      actionItems: [
        "Build or rebuild your deck to the 10-slide architecture.",
        "Apply the 'so what' test to every slide; delete what fails.",
        "Design pass: one idea, one number, big fonts, one accent color, real screenshots.",
      ],
      keyPoints: [
        "10 slides: one-liner, problem, alternative, solution, evidence, market, model, team, ask, future.",
        "One idea per slide; one number per line.",
        "The deck must survive forwarding without your voice.",
        "Every slide answers 'so what?' or it leaves.",
      ],
    },
    {
      id: "pitching-3",
      title: "The ask and the numbers behind it",
      readMinutes: 8,
      sections: [
        {
          heading: "The ask slide, done right",
          paragraphs: [
            "The ask slide has five numbers, in order: the amount, the instrument (SAFE/equity), the valuation (or cap + discount), the use of funds (in buckets: 50% product, 30% go-to-market, 20% runway — with a milestone each bucket buys), and the runway it creates (18-24 months). Vague asks ('we're raising a seed round') are the fast lane to a pass — the room needs to evaluate a decision, not a mystery.",
            "The use of funds is where conviction shows: 'we'll hire two engineers to ship the mobile product that our top 10 prospects have asked for, and spend Q3-Q4 proving the enterprise motion' is a plan. 'We'll grow the team' is not.",
          ],
        },
        {
          heading: "The numbers that get picked apart",
          paragraphs: [
            "Every number in the deck should survive 'how did you get that?': the TAM (top-down vs bottom-up — bottom-up survives), the growth rate (labeled: weekly? monthly? what counts as a customer?), the churn (computed how?), the CAC (which channel, what period?), and the burn (gross or net?).",
            "The diligence-ready deck has footnotes in the mind of the founder — the labels are in the conversation. The moment a number is challenged and the answer is 'we estimated it,' the whole deck's credibility wobbles. Every number has a source you can say out loud.",
          ],
        },
        {
          heading: "The down-round honesty",
          paragraphs: [
            "If the numbers are modest (the honest ones often are at seed), own it: 'we're deliberately early — that's the discount for investing now. Here's the milestone this round buys and the multiple it should earn.' The honest founder with modest numbers beats the inflated founder with impressive ones — the room knows the difference, and trust is the whole game.",
          ],
        },
      ],
      examples: [
        "A founder asks for $1.5M with no cap, no use of funds, no runway math. The room: 'so... what are we evaluating?' A rewrite — $1.5M SAFE, $12M cap, 40% product / 35% GTM / 25% runway, 20 months runway — turns the same company into a decision the room can make.",
        "A deck claims '500% annual growth' without labeling the base. The founder, challenged: 'we grew from 2 to 12 paying customers this year.' The label changes the story from miracle to early — which is fine, as long as it's said first.",
      ],
      actionItems: [
        "Write the five ask numbers: amount, instrument, valuation, use of funds (with buckets), runway.",
        "Attach a defensible source to every number in the deck.",
        "Write your honest story: 'we're early because X, the round buys Y, the multiple is Z.'",
      ],
      keyPoints: [
        "The ask is five numbers: amount, instrument, valuation, use of funds, runway.",
        "Use of funds with milestones = conviction; 'grow the team' = nothing.",
        "Every number survives 'how did you get that?'",
        "Modest and honest beats inflated — trust is the game.",
      ],
    },
    {
      id: "pitching-4",
      title: "The demo and the live moment",
      readMinutes: 8,
      sections: [
        {
          heading: "The demo as the proof beat",
          paragraphs: [
            "The demo is where the story meets reality — it's the strongest evidence you own (from the fundraising track), and it's where pitches either accelerate or stall. The live demo structure: 1-minute setup (the job in the user's words), 3-minute happy path (the core job done well, real data), 1-minute payoff (the number — the time saved, the error avoided, the money found).",
            "The demo is rehearsed until it runs without hunting: real data loaded, the network is fine, the backup screen recorded (a pre-recorded version for the technical failure). The demo fails happen to everyone; the prepared founder has the fallback ready before the first click.",
          ],
        },
        {
          heading: "The demo don'ts",
          paragraphs: [
            "No sandbox data (dummy users with fake names read as 'this isn't real'). No feature tours (the investor doesn't care about your settings screen). No 25-minute click-throughs (you've lost the room at minute 8). No apologizing for the UI (if it's embarrassing, fix it before the meeting — the demo IS the product).",
            "The demo shows the product the customer uses, not the product you're building. The roadmap slide is for the future; the demo is the present, and the present must work.",
          ],
        },
        {
          heading: "The live demo playbook",
          paragraphs: [
            "The rules that win live: (1) tell them what you'll show in one sentence first ('I'll show the three minutes that save Maria 11 hours a week'), (2) narrate the JOB, not the clicks ('this is Maria flagging the invoice discrepancy'), (3) pause at the wow moment and let it land, (4) end with the natural next question: 'want to see the workflow with your own data?'",
            "And the failure grace: when something breaks, the script is 'that's actually the edge case we're solving — let me show you what happens...' (then show the fix or the roadmap item). Every founder has broken a demo; the ones who recover keep the meeting.",
          ],
        },
      ],
      examples: [
        "A founder's demo shows a real clinic's account, walks the happy path in 4 minutes, and ends with 'this is Maria's 11 hours back.' The partner asks to see the workflow with his own data — the demo converted the meeting into a trial.",
        "Another founder clicks through 22 screens of features with dummy data. At minute 12 the partner checks his watch; the meeting dies at the demo, not at the numbers. The product was good; the presentation was a tour.",
      ],
      actionItems: [
        "Rehearse the 5-minute demo with real data until it runs without hunting.",
        "Record a backup demo video for technical failures — before the first meeting.",
        "Script the one-sentence setup and the wow-moment pause.",
      ],
      keyPoints: [
        "Demo = proof beat: 1-min setup, 3-min happy path, 1-min payoff.",
        "Real data, the customer's job, narrated — never a feature tour.",
        "Pre-recorded backup; rehearse until it can't fail.",
        "The recovery script turns a broken demo into a story.",
      ],
    },
    {
      id: "pitching-5",
      title: "Handling questions and the hard room",
      readMinutes: 8,
      sections: [
        {
          heading: "The question taxonomy",
          paragraphs: [
            "The question types and their jobs: the diligence question ('what's your churn?') — answer with the number and the source, then the context ('here's why, here's the fix, here's the trend'). The test question ('what does your competitor do better?') — the honest comparison is the answer; the founder who can't name it has never looked. The hypothetical ('what if a big company copies you?') — answer with your moat, then the wave ('the question is whether the window is open — we're moving fastest through it'). The hostile question — stay warm, answer the substance, never the tone.",
            "The universal rule: answer the question that was asked, in 3 sentences, then stop. Founders drown themselves by answering the question they wished was asked — the room hears the dodge.",
          ],
        },
        {
          heading: "The questions to practice until they're boring",
          paragraphs: [
            "The ten questions that come up in every room: what's your churn and why? how is this defensible? who's the real competitor? what if X company enters? why you? what does the money buy? how do you get customers? what if you're wrong? what's the 5-year outcome? and — the one that kills unprepared founders — 'walk me through your unit economics.'",
            "Write the answer to each in 3 sentences, out loud, until they're automatic. The prepared founder isn't the one with perfect answers — it's the one whose answers don't waver under follow-up.",
          ],
        },
        {
          heading: "The room reads your recovery",
          paragraphs: [
            "You will be asked a question you can't answer. The professional response: 'I don't have that number in front of me — here's what I know, here's what I'll send you by tomorrow.' The amateur response: a made-up number or a dodge. Investors have heard every dodge; the honest 'I don't have it, I'll get it' is itself a signal — of an operator who can say 'I don't know' without flinching, which is the most startup-relevant skill there is.",
          ],
        },
      ],
      examples: [
        "A partner asks 'what's your CAC payback?' The founder answers with the number, the channel it came from, and the trend — then stops. The room notes the fluency; the follow-up questions get harder, which is the room's way of saying 'you're passing.'",
        "Another founder, asked about churn, pivots to 'our roadmap is really exciting.' The room heard the dodge; the meeting never returns to the numbers. Answer the asked question, or the meeting is over.",
      ],
      actionItems: [
        "Write 3-sentence answers to the ten standard questions, out loud, until automatic.",
        "Practice the 'I don't have it — here's what I know, I'll send it tomorrow' response.",
        "Run one mock Q&A with a skeptic friend — then record it once.",
      ],
      keyPoints: [
        "Answer the question asked, in 3 sentences, then stop.",
        "Know your numbers cold — fluency IS the signal.",
        "The ten questions are predictable; prepare until boring.",
        "'I don't know, I'll get it' is an operator's answer.",
      ],
    },
    {
      id: "pitching-6",
      title: "Cold outreach and getting the meeting",
      readMinutes: 7,
      sections: [
        {
          heading: "The cold email that gets a reply",
          paragraphs: [
            "The cold investor email has three parts: the hook (why them — their thesis, a portfolio company, a recent post — in one line), the proof (your strongest number or your story's sharpest line, in two lines), the ask (a specific, low-friction next step: 'would you take 20 minutes this week?' — never 'can I send you my deck?', which is homework, not a meeting).",
            "The rules: under 150 words, no attachments (the deck comes after interest), no mass-mail look (the first line must prove you read them), and a follow-up at day 5 (one line, add new proof — 'since I wrote, we signed two more customers'). Most replies come from the follow-up, not the first email.",
          ],
        },
        {
          heading: "The intro game",
          paragraphs: [
            "Warm intros convert at 10x cold outreach. The intro request: make it easy — give the referrer a 3-line forwardable note ('I'm building X, we just hit Y, you invested in Z which is adjacent — would you take 20 minutes?'). The referrer forwards it; the meeting gets scheduled; everyone's credibility survives because you did the work.",
            "Who to ask: portfolio founders of your target funds (the strongest), your advisors, other founders in your space, and the service providers (lawyers, bankers, accountants) who know the investor socially. The ask is specific: 'would you forward this to [name]?', not 'do you know any investors?'",
          ],
        },
        {
          heading: "The follow-up system",
          paragraphs: [
            "The raise is a follow-up game: day 5 after the first email (add proof), day 14 (add a milestone — the raise is progressing, 'we've had strong conversations'), day 30 (the close date — 'we're closing next month, want to be in?'). The polite close: 'if this isn't a fit, would you tell me why? — it helps us' (the rejection that returns data).",
            "The system: a tracker (from the fundraising track) with the last touch per investor, so nobody falls through the cracks — the investor you forgot is the one who would have said yes.",
          ],
        },
      ],
      examples: [
        "A founder's cold email: 'You wrote that you look for compliance pain in clinics — we just signed our 12th clinic and we're raising $1M. 20 minutes this week?' Two of eight replied; both meetings happened. Under 150 words, specific, low friction.",
        "Another founder emails 40 investors with 'attached is our deck.' Thirty-eight silence. The deck attachment is a wall; the meeting ask is a door. The rewritten version with the one-line proof and the 20-minute ask converts 5x.",
      ],
      actionItems: [
        "Write your 150-word cold email: hook (why them), proof (strongest line), ask (20 minutes).",
        "Prepare the 3-line forwardable intro note and list your strongest referrers.",
        "Build the follow-up calendar: day 5, day 14, day 30 — with new proof each touch.",
      ],
      keyPoints: [
        "Cold email: why them, one proof line, a 20-minute ask — under 150 words.",
        "Warm intros convert 10x — make the referral effortless.",
        "Follow-up at day 5, 14, 30 with NEW proof each time.",
        "Ask for the 'why' in rejections — it's free market research.",
      ],
    },
    {
      id: "pitching-7",
      title: "Demo days, accelerators, and public pitching",
      readMinutes: 7,
      sections: [
        {
          heading: "The demo day format",
          paragraphs: [
            "Demo day is a different sport: 3-5 minutes, no questions, and 200 investors who will forget 95% of what they saw. The format demands: ONE story beat (the problem + the proof + the ask), a demo flash (15 seconds of product), and a memorable last line. The goal is not the deal in the room — it's the meeting afterward, so the deck and the one-liner must survive being remembered.",
            "The demo day prep: cut the pitch to the bone, rehearse to the second, and run the 'last line' — the sentence the room will repeat ('we're the audit tool that paid for itself in two months'). The investors who come to the table afterward will say your last line back to you.",
          ],
        },
        {
          heading: "Choosing an accelerator",
          paragraphs: [
            "Accelerators (Y Combinator, Techstars, sector-specific, and local programs) trade equity (typically 6-10%) for: capital, network, brand, and a deadline that forces focus. The honest math: the network and the brand are worth more than the check in most cases — the YC alumni intro is worth real money; the $125K for 7% is the smallest part of the deal.",
            "The selection criteria: does the network match your ICP and your investor list? (a food-tech accelerator for a B2B SaaS may be a waste), what's the alumni pattern (did their companies raise after?), and what's the program's reputation with YOUR kind of founder? Ask alumni the real questions: what did you actually get, and what did it cost (in equity and in distraction)?",
          ],
        },
        {
          heading: "The public pitch voice",
          paragraphs: [
            "Public pitching (competitions, panels, podcasts) is a distribution channel with its own rules: speak to the room's level (a competition judges on the full arc; a podcast host wants the war story), keep the ask flexible ('we're raising — intros welcome'), and always have the one-pager ready to hand over (QR code or link on the last slide).",
            "The discipline: never pitch a version of the numbers you wouldn't put in the diligence data room. Public pitches are the most-audited pitches of all — the audience includes your future investors, your future hires, and your competitors. Accuracy is the brand.",
          ],
        },
      ],
      examples: [
        "A founder's demo day ends with 'we're the bookkeeping tool that paid for itself in two months — 47 clinics, $400K ARR, raising $1.5M.' Four investors say the last line back to him at the reception. Three meetings follow; the round closes in six weeks.",
        "Another founder takes 6% equity in a local accelerator for a small check and zero network relevance to his enterprise buyers. The alumni pattern: no follow-on raises. The equity was the price; the value never arrived.",
      ],
      actionItems: [
        "Write your 3-minute demo day pitch: one beat, one demo flash, one memorable last line.",
        "If considering an accelerator: interview 3 alumni and check the follow-on raise pattern.",
        "Prepare the one-pager with a QR link for every public appearance.",
      ],
      keyPoints: [
        "Demo day = one beat + demo flash + memorable last line; the meeting is the goal.",
        "Accelerators: network and brand > the check; verify alumni outcomes.",
        "Public pitching is distribution — always have the one-pager.",
        "Never pitch numbers you wouldn't put in the data room.",
      ],
    },
  ],
  quiz: [
    {
      question: "Investors decide with emotion and justify with logic — so the pitch should:",
      options: [
        "Lead with dense data",
        "Be a story with proof beats",
        "Maximize slide count",
        "Lead with the TAM",
      ],
      correctIndex: 1,
      explanation: "The story creates the stake; the evidence (proof beats) lets them justify the emotion. Data alone gets a polite pass.",
    },
    {
      question: "The slide that lands hardest is usually:",
      options: [
        "The TAM slide",
        "The customer story",
        "The org chart",
        "The roadmap",
      ],
      correctIndex: 1,
      explanation: "A specific person with a specific cost persuades; abstractions are forgettable.",
    },
    {
      question: "The ask slide must contain:",
      options: [
        "Just the amount",
        "Amount, instrument, valuation, use of funds, runway",
        "The logo and the amount",
        "A list of features",
      ],
      correctIndex: 1,
      explanation: "The room needs to evaluate a decision: amount, instrument, valuation/cap, use of funds with buckets, and the runway it buys.",
    },
    {
      question: "When a demo breaks live, the founder should:",
      options: [
        "Apologize and move on",
        "Use the recovery script and keep the meeting",
        "Restart the whole demo",
        "Skip to the roadmap",
      ],
      correctIndex: 1,
      explanation: "'That's the edge case we're solving...' turns the failure into the story. Every founder breaks a demo; the recovery keeps the meeting.",
    },
    {
      question: "Asked a question you can't answer, the professional response is:",
      options: [
        "Make a confident estimate",
        "Change the subject",
        "'I don't have it — here's what I know, I'll send it tomorrow'",
        "Ask why they want to know",
      ],
      correctIndex: 2,
      explanation: "Honest 'I don't know' signals an operator — investors have heard every dodge.",
    },
    {
      question: "The best cold investor email asks for:",
      options: [
        "A deck review",
        "A 20-minute meeting",
        "Feedback on the idea",
        "A term sheet",
      ],
      correctIndex: 1,
      explanation: "A meeting ask is a door; a deck attachment is homework. Under 150 words: why them, one proof line, 20 minutes.",
    },
    {
      question: "Warm intros convert roughly:",
      options: [
        "2x cold outreach",
        "10x cold outreach",
        "The same as cold",
        "Worse than cold",
      ],
      correctIndex: 1,
      explanation: "Warm intros convert ~10x — make the referral effortless with a 3-line forwardable note.",
    },
    {
      question: "What is the actual goal of a demo day pitch?",
      options: [
        "Signing investors in the room",
        "The meeting afterward",
        "Impressions on stage",
        "Social media clips",
      ],
      correctIndex: 1,
      explanation: "The room forgets 95% — the goal is a remembered last line that produces meetings afterward.",
    },
  ],
};