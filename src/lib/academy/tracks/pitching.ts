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
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Investors are people, and people remember stories better than they remember facts. A good pitch tells a short story about a real problem and how you fix it. If you tell that story well, investors will feel interested first, and then they will use your numbers to say yes.",
          ],
        },
        {
          heading: "Why story beats information",
          paragraphs: [
            "Investors decide with emotion and justify with logic. A pitch that is only information (market size, features, roadmap) gets a polite pass. A pitch that is a story creates a stake. They remember the problem, feel the tension, and want the resolution. The story is not a garnish. It is the argument.",
            "Think of your pitch as a tiny movie, not a report. The hero is your customer. The villain is the problem. Your product is the tool that wins. When the pitch is framed this way, the room leans in. When it is framed as data, the room nods politely and forgets you by the next meeting.",
            "The test: tell the story to a stranger in 2 minutes. If they can repeat the problem and why it matters, the architecture works. If they repeat your features, it does not. Run this test with a friend who knows nothing about your industry. Their memory is the honest scoreboard.",
          ],
        },
        {
          heading: "The three stories in every pitch",
          paragraphs: [
            "You are actually telling three stories: (1) the market story, the change that makes this the right moment (the wave); (2) the company story, why this team at this time can win; and (3) the customer story, the real person whose problem gets smaller.",
            "The best pitches weave all three into one thread. The market wave creates the opportunity. The customer story shows it is real. The team story says we can take it. Practice weaving them until they sound like one sentence, not three slides bolted together.",
            "The customer story is the one most founders skip, and it is the one that lands. 'Maria the logistics manager loses 11 hours a week to spreadsheets' is worth a thousand TAM slides. Specific humans persuade. Abstractions are forgettable.",
          ],
        },
        {
          heading: "The narrative arc that works",
          paragraphs: [
            "The arc that works for investors: the personal moment (a specific, felt problem), the struggle (the failed alternatives, this is where you prove you understand the world), the insight (why you see what others don't), the proof (traction, the world agreeing), and the future (what this becomes). Each beat earns the next.",
            "Do not rush the struggle. This is where you show you lived inside the customer's problem. Founders who skip it sound like they read about the problem in a report. Founders who live it can describe the pain in detail, and the room can feel the difference.",
          ],
        },
        {
          heading: "The verbal tics that break trust",
          paragraphs: [
            "Hedging ('we hope to,' 'potentially,' 'sort of') reads as low conviction. Cut them from the pitch. Replace them with plain statements: 'we will,' 'we do,' 'customers tell us.'",
            "Filler words (um, like, you know) are normal but trainable. Record yourself once and hear what the room hears. And the biggest one: number inflation. 'We have 500 users' (free trials) versus 'we have 500 paying users.' The room will do the diligence math in their heads. Make your numbers survive it.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Leading with your features. A list of features proves you can build, not that anyone needs it. Lead with the problem and the person who has it.",
            "Mistake 2: Hiding the story behind data. Slide after slide of charts makes you sound smart and feel forgettable. Use data to support the story, never to replace it.",
            "Mistake 3: Hedging every claim. Words like 'potentially' and 'we hope to' tell the room you do not believe your own pitch. State your case plainly and let the room challenge it.",
            "Mistake 4: Telling the story only for experts. If your mom cannot repeat the problem after hearing the pitch, neither can a busy investor who sees 50 decks a week.",
          ],
        },
      ],
      examples: [
        "A founder's first pitch: 15 slides of market size and features. Reaction: polite questions, no follow-ups. Rewritten: opens with the failed audit story of a real clinic, then the wave (new CMS rules), then the team. Three of five meetings schedule partner calls.",
        "A pitch says 'potentially a huge market.' The room hears 'I don't know.' The rewrite: 'our segment spends $2B a year on this, currently wasted, and here are the five companies that prove it.'",
        "A founder with a fintech product pitched the team's tech stack first. After rewriting to open with 'Tunde runs payroll for 40 staff and spends every Friday fixing mistakes,' the same investor asked a follow-up question for the first time.",
        "One founder told the same 2-minute story to four strangers on a train platform. Three repeated the problem back correctly. The one who failed repeated features, so he rewrote the opening until the problem was the first sentence.",
        "A founder kept saying 'we hope to expand to enterprise.' In the rewrite, the line became 'enterprise is the plan for 2027, and here is the customer who asked for it.' The room stopped hearing a wish and heard a decision.",
      ],
      actionItems: [
        "Write your 2-minute story and tell it to a stranger. Check what they repeat.",
        "Weave the three stories (market, customer, team) into one thread.",
        "Record one practice pitch and cut every hedge word from the script.",
        "List the failed alternatives your customers tried before you. Put the best one in the struggle beat.",
        "Ask a non-expert to summarize your pitch in two sentences. Rewrite until the problem leads.",
      ],
      keyPoints: [
        "Emotion decides, logic justifies. Pitch a story, not data.",
        "Arc: personal moment, struggle, insight, proof, future.",
        "The customer story lands hardest. Specific humans persuade.",
        "Cut hedges. Make every number survive diligence.",
        "The test is a stranger's memory, not your slide count.",
        "The struggle beat proves you understand the world.",
      ],
    },
    {
      id: "pitching-2",
      title: "Designing the deck: 10 slides that tell the story",
      readMinutes: 16,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A deck is a map for a conversation, not a report to be read. You only need about ten slides, and each slide should carry one single idea. If a slide does not help the investor say yes, it does not belong in the deck.",
          ],
        },
        {
          heading: "The 10-slide architecture",
          paragraphs: [
            "Slide 1: The one-liner, what you do and for whom, in one sentence (this is the position, not the slogan). Slide 2: The problem, a specific person, a specific cost. Slide 3: The alternative, what they use today and why it fails. Slide 4: The solution, the product in the customer's job (one screenshot, not a tour).",
            "Slide 5: The evidence, traction, labeled (the evidence stack from the fundraising track). Slide 6: The market, the segment and the wave, not the fantasy TAM. Slide 7: The model, how you make money and the unit economics. Slide 8: The team, why you, with the unfair advantage.",
            "Slide 9: The ask, the number, the milestone it buys, the runway it creates. Slide 10: The future, what the company becomes in 3 to 5 years, the story's end. The rhythm: 10 to 15 minutes spoken, about 2 minutes per slide.",
            "The deck is a map for the conversation, not a document to be read. The text on each slide is a headline and evidence, never paragraphs. If a slide needs a paragraph, you are writing a report, not pitching.",
          ],
        },
        {
          heading: "The design rules",
          paragraphs: [
            "One idea per slide. One number per line. Big fonts, the back of the room. Real screenshots, not wireframes. One accent color, no clip art, no walls of text. The design's job is to make the story effortless to follow. The cognitive load goes to the argument, not the layout.",
            "The deck file itself is a distribution document too, because it will be forwarded. Put the narrative in the deck. A forwarded deck that reads like slides with a missing voice dies. And never put numbers in the deck that you can't defend verbally.",
            "Design is not decoration. Design is clarity. The investor's eye should land on the headline, then the number, then the image, in that order. If their eye wanders, the layout is failing, not the idea.",
          ],
        },
        {
          heading: "The common deck diseases",
          paragraphs: [
            "The feature dump: 30 slides of features. You have shown you can build, not that you should. The TAM fantasy: a '$1T market.' The room knows you can't serve it. The question-mark slide: roadmaps to nowhere, like 'Series A at 20M users.'",
            "The ugly duckling: a deck that looks broken reads as a company that is broken. Investors read the deck as a sample of your work. If the deck is sloppy, they assume the product is too.",
            "The antidote to all four is the 10-slide architecture plus one rule: every slide answers 'so what?' If a slide does not change the decision, it does not belong.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: More than one idea per slide. Your slide is not a document. Split it, or cut it.",
            "Mistake 2: Walls of text. Anything over two lines of body text should become a headline or a number instead.",
            "Mistake 3: Using the deck as a data dump. The deck supports the conversation, it does not replace it. You should be able to present 10 slides in 15 minutes and still leave the room wanting more.",
            "Mistake 4: Forgetting the deck gets forwarded. Investors share decks internally and with partners. Write the deck so it survives without your voice in the room.",
          ],
        },
      ],
      examples: [
        "A founder's 28-slide deck gets cut to 10 by the 'so what' test. The traction slide (which was buried on slide 22) moves to slide 5, and the follow-up rate triples. The story was always good. The layout was burying it.",
        "A deck uses 12 words per line and 3 fonts per slide. The investor's eye can't find the argument. The redesign (one headline, one number, one screenshot) has the same content and 3x the comprehension.",
        "A founder kept a 'Company History' slide because he was proud of the journey. It did not change the decision, so it left. The meeting gained two minutes for questions, and the room noticed the focus.",
        "A seed deck claimed a $40B TAM. In the rewrite, the market slide showed the segment they could actually serve ($400M) and the wave that opens it. The investor who passed before asked for the full data room after the fix.",
        "One founder put a QR code and a one-page summary on the final slide. The deck got forwarded to a partner who was not in the meeting, and that partner led the follow-on conversation. The deck that travels wins deals.",
      ],
      actionItems: [
        "Build or rebuild your deck to the 10-slide architecture.",
        "Apply the 'so what' test to every slide. Delete what fails.",
        "Design pass: one idea, one number, big fonts, one accent color, real screenshots.",
        "Forward your deck to a stranger and ask: what is the story? If they cannot say it, rewrite the headlines.",
        "Time your presentation at 10 to 15 minutes, about 2 minutes per slide.",
        "Label every number on the evidence and market slides with its source and date.",
      ],
      keyPoints: [
        "10 slides: one-liner, problem, alternative, solution, evidence, market, model, team, ask, future.",
        "One idea per slide. One number per line.",
        "The deck must survive forwarding without your voice.",
        "Every slide answers 'so what?' or it leaves.",
        "Design is clarity, not decoration. The eye lands on headline, number, image.",
        "A broken-looking deck reads as a broken company.",
      ],
    },
    {
      id: "pitching-3",
      title: "The ask and the numbers behind it",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "The ask is the part where you tell investors exactly what you need: how much money, what kind of deal, and what you will do with it. Investors cannot say yes to a mystery. When the ask is clear, saying yes becomes easy.",
          ],
        },
        {
          heading: "The ask slide, done right",
          paragraphs: [
            "The ask slide has five numbers, in order: the amount, the instrument (SAFE or equity), the valuation (or cap and discount), the use of funds (in buckets: 50% product, 30% go-to-market, 20% runway, with a milestone each bucket buys), and the runway it creates (18 to 24 months).",
            "Vague asks ('we're raising a seed round') are the fast lane to a pass. The room needs to evaluate a decision, not a mystery. Show the math so they can check it, argue with it, and eventually sign it.",
            "The use of funds is where conviction shows. 'We'll hire two engineers to ship the mobile product our top 10 prospects have asked for, and spend Q3-Q4 proving the enterprise motion' is a plan. 'We'll grow the team' is not.",
          ],
        },
        {
          heading: "The numbers that get picked apart",
          paragraphs: [
            "Every number in the deck should survive 'how did you get that?': the TAM (top-down versus bottom-up, bottom-up survives), the growth rate (labeled: weekly or monthly, and what counts as a customer), the churn (computed how), the CAC (which channel, what period), and the burn (gross or net).",
            "The diligence-ready deck has footnotes in the mind of the founder. The labels are in the conversation. The moment a number is challenged and the answer is 'we estimated it,' the whole deck's credibility wobbles. Every number has a source you can say out loud.",
            "You do not need to be perfect. You need to be precise. 'We grew from 12 to 34 paying customers in the last six months' beats 'we grew 200%' every time, because the room can check it and believe it.",
          ],
        },
        {
          heading: "The down-round honesty",
          paragraphs: [
            "If the numbers are modest (the honest ones often are at seed), own it: 'we're deliberately early, that's the discount for investing now. Here's the milestone this round buys and the multiple it should earn.'",
            "The honest founder with modest numbers beats the inflated founder with impressive ones. The room knows the difference, and trust is the whole game. The founder who inflates is not buying time. They are buying a reputation that follows them into the next round.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Asking for money without the instrument or the cap. The room cannot price the deal, so the meeting ends with 'let's talk later,' which means no.",
            "Mistake 2: A use of funds that is one vague line. Buckets with milestones show you have a plan. 'Hire more people' shows you do not.",
            "Mistake 3: Unlabeled numbers. An unlabeled growth rate is a number nobody can check. Label everything: period, base, and definition.",
            "Mistake 4: Inflating to impress. The room will do diligence, find the gap, and remember it. Honest modest numbers that survive the check build the trust that closes the round.",
          ],
        },
      ],
      examples: [
        "A founder asks for $1.5M with no cap, no use of funds, no runway math. The room: 'so... what are we evaluating?' A rewrite ($1.5M SAFE, $12M cap, 40% product, 35% GTM, 25% runway, 20 months of runway) turns the same company into a decision the room can make.",
        "A deck claims '500% annual growth' without labeling the base. The founder, challenged: 'we grew from 2 to 12 paying customers this year.' The label changes the story from miracle to early, which is fine as long as it is said first.",
        "A founder planned to burn $90K a month on sales hires before proving the product. The rewrite tied hiring to a milestone: two engineers to ship the mobile product first, sales hires only after 10 enterprise letters of intent. The ask got real, and the room got interested.",
        "One founder asked for $2M but could only name two quarters of runway with it. The room did the math and heard 'we need to raise again before we know anything.' The fix was a smaller round with an 18-month runway and a defined milestone.",
        "A founder shared her honest numbers early: churn was higher than she liked, but she had a fix with a timeline. The investor said: 'you're the first founder this month who didn't need three follow-ups to get to the real churn.' Trust became the reason for the term sheet.",
      ],
      actionItems: [
        "Write the five ask numbers: amount, instrument, valuation, use of funds with buckets, runway.",
        "Attach a defensible source to every number in the deck.",
        "Write your honest story: 'we're early because X, the round buys Y, the multiple is Z.'",
        "Practice saying every number out loud with its label: base, period, and how it was computed.",
        "Stress-test the ask with a skeptic. Ask them to find the weakest number, then fix it.",
        "Compute the runway your ask buys and the milestone it pays for. If either is fuzzy, sharpen it.",
      ],
      keyPoints: [
        "The ask is five numbers: amount, instrument, valuation, use of funds, runway.",
        "Use of funds with milestones equals conviction. 'Grow the team' equals nothing.",
        "Every number survives 'how did you get that?'",
        "Modest and honest beats inflated. Trust is the game.",
        "Precise beats impressive. Labeled beats mysterious.",
        "The room cannot say yes to a mystery. Give them a decision.",
      ],
    },
    {
      id: "pitching-4",
      title: "The demo and the live moment",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "The demo is the part of the pitch where you show the product actually working. It is the strongest proof you own, because seeing is believing. A short, rehearsed demo beats a long, clumsy one every time.",
          ],
        },
        {
          heading: "The demo as the proof beat",
          paragraphs: [
            "The demo is where the story meets reality. It is the strongest evidence you own (from the fundraising track), and it is where pitches either accelerate or stall. The live demo structure: 1-minute setup (the job in the user's words), 3-minute happy path (the core job done well, real data), 1-minute payoff (the number: the time saved, the error avoided, the money found).",
            "The demo is rehearsed until it runs without hunting. Real data loaded. The network is fine. The backup screen recorded (a pre-recorded version for the technical failure). Demo fails happen to everyone. The prepared founder has the fallback ready before the first click.",
            "Think of the demo as a scene in the story, not a tour of the building. The scene has a beginning (the job), a middle (the job done), and an end (the number that proves it matters). If your demo does not have that shape, it is not a demo yet.",
          ],
        },
        {
          heading: "The demo don'ts",
          paragraphs: [
            "No sandbox data (dummy users with fake names read as 'this isn't real'). No feature tours (the investor does not care about your settings screen). No 25-minute click-throughs (you have lost the room at minute 8). No apologizing for the UI (if it is embarrassing, fix it before the meeting, because the demo IS the product).",
            "The demo shows the product the customer uses, not the product you are building. The roadmap slide is for the future. The demo is the present, and the present must work.",
            "If the product is not ready, say so before you open the laptop, and show the closest real thing you have. A founder who manages expectations and shows real progress still wins points. A founder who fakes the demo loses everything.",
          ],
        },
        {
          heading: "The live demo playbook",
          paragraphs: [
            "The rules that win live: (1) tell them what you will show in one sentence first ('I'll show the three minutes that save Maria 11 hours a week'); (2) narrate the JOB, not the clicks ('this is Maria flagging the invoice discrepancy'); (3) pause at the wow moment and let it land; (4) end with the natural next question: 'want to see the workflow with your own data?'",
            "And the failure grace: when something breaks, the script is 'that's actually the edge case we're solving, let me show you what happens...' (then show the fix or the roadmap item). Every founder has broken a demo. The ones who recover keep the meeting.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Dummy data with fake names. It reads as 'this is not real.' Use real records, even if they are small.",
            "Mistake 2: Touring every screen. The investor wants the job done, not the menu. Cut anything that is not the happy path.",
            "Mistake 3: Going over five minutes. The demo is one beat of the pitch. Overrun it and you lose the questions.",
            "Mistake 4: No backup plan. The network fails at the worst moment, and the meeting dies on a loading spinner. Record the backup before the first meeting.",
          ],
        },
      ],
      examples: [
        "A founder's demo shows a real clinic's account, walks the happy path in 4 minutes, and ends with 'this is Maria's 11 hours back.' The partner asks to see the workflow with his own data. The demo converted the meeting into a trial.",
        "Another founder clicks through 22 screens of features with dummy data. At minute 12 the partner checks his watch. The meeting dies at the demo, not at the numbers. The product was good. The presentation was a tour.",
        "A founder's network failed during the live demo. She smiled, said 'that's the edge case we're solving, let me show you the fix,' and switched to the recorded backup. The investor asked for a trial, and the meeting never mentioned the failure again.",
        "One founder narrated the clicks: 'here I click here, then here.' The room checked out. The rewrite narrated the job: 'here is Maria flagging the discrepancy, and here is the email the system sends.' The same product, a different meeting.",
        "A founder demoed with a single real customer's data, then ended with 'want to see it with your own data?' The investor pulled out his own laptop on the spot. The demo ended, and the trial began in the same room.",
      ],
      actionItems: [
        "Rehearse the 5-minute demo with real data until it runs without hunting.",
        "Record a backup demo video for technical failures, before the first meeting.",
        "Script the one-sentence setup and the wow-moment pause.",
        "Cut every screen that is not the happy path. Time it: setup 1, core 3, payoff 1.",
        "Write the recovery line for your most likely failure point and say it out loud once.",
        "End the demo with the handoff question: 'want to see it with your own data?'",
      ],
      keyPoints: [
        "Demo = proof beat: 1-minute setup, 3-minute happy path, 1-minute payoff.",
        "Real data, the customer's job, narrated. Never a feature tour.",
        "Pre-recorded backup. Rehearse until it can't fail.",
        "The recovery script turns a broken demo into a story.",
        "The demo is the present. The roadmap is the future.",
        "End with the handoff question. Turn the meeting into a trial.",
      ],
    },
    {
      id: "pitching-5",
      title: "Handling questions and the hard room",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Investors ask hard questions to test how well you know your business. The goal is not to have a perfect answer every time. The goal is to answer clearly, stay calm, and tell the truth, especially when you do not know.",
          ],
        },
        {
          heading: "The question taxonomy",
          paragraphs: [
            "The question types and their jobs: the diligence question ('what's your churn?') answered with the number and the source, then the context ('here's why, here's the fix, here's the trend'). The test question ('what does your competitor do better?') answered with the honest comparison. The founder who cannot name the competitor's strength has never looked.",
            "The hypothetical ('what if a big company copies you?') answered with your moat, then the wave ('the question is whether the window is open, and we're moving fastest through it'). The hostile question: stay warm, answer the substance, never the tone.",
            "The universal rule: answer the question that was asked, in 3 sentences, then stop. Founders drown themselves by answering the question they wished was asked. The room hears the dodge.",
          ],
        },
        {
          heading: "The questions to practice until they're boring",
          paragraphs: [
            "The ten questions that come up in every room: what's your churn and why? how is this defensible? who's the real competitor? what if X company enters? why you? what does the money buy? how do you get customers? what if you're wrong? what's the 5-year outcome? and the one that kills unprepared founders: 'walk me through your unit economics.'",
            "Write the answer to each in 3 sentences, out loud, until they are automatic. The prepared founder is not the one with perfect answers. It is the one whose answers do not waver under follow-up. Practice until the follow-up does not shake you.",
          ],
        },
        {
          heading: "The room reads your recovery",
          paragraphs: [
            "You will be asked a question you cannot answer. The professional response: 'I don't have that number in front of me, here's what I know, here's what I'll send you by tomorrow.' The amateur response: a made-up number or a dodge.",
            "Investors have heard every dodge. The honest 'I don't have it, I'll get it' is itself a signal. It tells them you are an operator who can say 'I don't know' without flinching, which is the most startup-relevant skill there is. The room is not testing your knowledge. It is testing your honesty under pressure.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Answering the question you wished was asked. The room hears the dodge, and the meeting never returns to the numbers.",
            "Mistake 2: Making up a number under pressure. One invented number poisons the whole conversation. Say you will send it instead.",
            "Mistake 3: Talking until you fill the silence. Answer in 3 sentences and stop. Long answers hide insecurity, and the room can tell.",
            "Mistake 4: Matching hostility with hostility. The tone is a test. Stay warm, answer the substance, and let the hostility deflate on its own.",
          ],
        },
      ],
      examples: [
        "A partner asks 'what's your CAC payback?' The founder answers with the number, the channel it came from, and the trend, then stops. The room notes the fluency. The follow-up questions get harder, which is the room's way of saying 'you're passing.'",
        "Another founder, asked about churn, pivots to 'our roadmap is really exciting.' The room heard the dodge. The meeting never returns to the numbers. Answer the asked question, or the meeting is over.",
        "A founder was asked about the biggest competitor. She named it, said exactly what it does better, then explained the segment it ignores. The investor later said that single answer was why the meeting continued. Honesty reads as confidence.",
        "Asked 'what if a big company copies you?', a founder talked for six minutes about patents. The room got lost. The rewrite: 'the window is open for about 18 months, our speed is the moat, here is the proof we are fastest.' Three sentences. The room sat up.",
        "A founder did not know the exact MRR churn. He said: 'I don't have that in front of me, here is what I know from cohort data, and I'll send the full table tomorrow.' He sent it that night. The follow-up meeting was scheduled the same week.",
      ],
      actionItems: [
        "Write 3-sentence answers to the ten standard questions, out loud, until automatic.",
        "Practice the 'I don't have it, here's what I know, I'll send it tomorrow' response.",
        "Run one mock Q&A with a skeptic friend, then record it once.",
        "List your competitor's real strengths before the meeting, not after.",
        "Rehearse the hostile-question script: warm tone, substance only.",
        "Prepare a send-by-tomorrow folder: churn table, cohort data, unit economics.",
      ],
      keyPoints: [
        "Answer the question asked, in 3 sentences, then stop.",
        "Know your numbers cold. Fluency IS the signal.",
        "The ten questions are predictable. Prepare until boring.",
        "'I don't know, I'll get it' is an operator's answer.",
        "The room is testing honesty under pressure, not perfection.",
        "A dodge is louder than a wrong answer.",
      ],
    },
    {
      id: "pitching-6",
      title: "Cold outreach and getting the meeting",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "To get an investor meeting, you write a short email that shows why you matter to them, and you follow up patiently. Warm introductions work even better. The whole game is making it easy for someone to say yes.",
          ],
        },
        {
          heading: "The cold email that gets a reply",
          paragraphs: [
            "The cold investor email has three parts: the hook (why them: their thesis, a portfolio company, a recent post, in one line), the proof (your strongest number or your story's sharpest line, in two lines), and the ask (a specific, low-friction next step: 'would you take 20 minutes this week?' never 'can I send you my deck?', which is homework, not a meeting).",
            "The rules: under 150 words, no attachments (the deck comes after interest), no mass-mail look (the first line must prove you read them), and a follow-up at day 5 (one line, add new proof: 'since I wrote, we signed two more customers'). Most replies come from the follow-up, not the first email.",
            "The follow-up is not nagging. Investors get hundreds of cold emails a month, and yours is simply not on their desk when they read it. One polite nudge with new proof is the difference between a reply and silence.",
          ],
        },
        {
          heading: "The intro game",
          paragraphs: [
            "Warm intros convert at 10x cold outreach. The intro request: make it easy. Give the referrer a 3-line forwardable note ('I'm building X, we just hit Y, you invested in Z which is adjacent, would you take 20 minutes?'). The referrer forwards it, the meeting gets scheduled, and everyone's credibility survives because you did the work.",
            "Who to ask: portfolio founders of your target funds (the strongest), your advisors, other founders in your space, and the service providers (lawyers, bankers, accountants) who know the investor socially. The ask is specific: 'would you forward this to [name]?', not 'do you know any investors?'",
          ],
        },
        {
          heading: "The follow-up system",
          paragraphs: [
            "The raise is a follow-up game: day 5 after the first email (add proof), day 14 (add a milestone: the raise is progressing, 'we've had strong conversations'), day 30 (the close date: 'we're closing next month, want to be in?'). The polite close: 'if this isn't a fit, would you tell me why? it helps us.' The rejection that returns data is still a win.",
            "The system: a tracker (from the fundraising track) with the last touch per investor, so nobody falls through the cracks. The investor you forgot is the one who would have said yes.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Attaching the deck. The deck is homework, and homework does not get meetings. Send it after the first yes.",
            "Mistake 2: A mass-mail opening. 'Dear Investor' proves you did not read them, and it is deleted in two seconds. The first line must be about them.",
            "Mistake 3: One email and silence. Most replies come from the follow-up. A polite day-5 nudge with new proof is the difference between a meeting and a ghost.",
            "Mistake 4: The vague ask. 'Can I send you my deck?' is homework. 'Would you take 20 minutes this week?' is a decision the investor can make in one click.",
          ],
        },
      ],
      examples: [
        "A founder's cold email: 'You wrote that you look for compliance pain in clinics. We just signed our 12th clinic and we're raising $1M. 20 minutes this week?' Two of eight replied, and both meetings happened. Under 150 words, specific, low friction.",
        "Another founder emails 40 investors with 'attached is our deck.' Thirty-eight silence. The deck attachment is a wall. The meeting ask is a door. The rewritten version with the one-line proof and the 20-minute ask converts 5x.",
        "A founder asked a portfolio founder of her target fund: 'would you forward this 3-line note to [name]?' The note was written, the intro landed, and the meeting was on the calendar in 48 hours. The referrer's name was the opening line of the meeting.",
        "One founder sent 60 cold emails, got 3 replies, then followed up at day 5 with a new customer signed. Two of the three replies came after the follow-up, not the first email. The follow-up is where the raise is won.",
        "A founder got a polite pass from an investor and asked: 'would you tell me why? it helps us.' The investor said the pricing page was confusing. The founder fixed it that week, and the same investor took a meeting two months later.",
      ],
      actionItems: [
        "Write your 150-word cold email: hook (why them), proof (strongest line), ask (20 minutes).",
        "Prepare the 3-line forwardable intro note and list your strongest referrers.",
        "Build the follow-up calendar: day 5, day 14, day 30, with new proof each touch.",
        "Cut every attachment from your first email. The deck comes after interest.",
        "Personalize the first line for your top 10 investors: thesis, portfolio, or post.",
        "Add the 'why not?' close to your rejections: one question that returns data.",
      ],
      keyPoints: [
        "Cold email: why them, one proof line, a 20-minute ask, under 150 words.",
        "Warm intros convert 10x. Make the referral effortless.",
        "Follow-up at day 5, 14, 30 with NEW proof each time.",
        "Ask for the 'why' in rejections. It is free market research.",
        "No attachments in the first email. Interest first, deck after.",
        "The investor you forgot is the one who would have said yes.",
      ],
    },
    {
      id: "pitching-7",
      title: "Demo days, accelerators, and public pitching",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Demo days and public stages work differently from a normal meeting. You have only a few minutes, and most of the room will forget you. So you pack one clear story into a short pitch, make the last line memorable, and hand out your one-pager.",
          ],
        },
        {
          heading: "The demo day format",
          paragraphs: [
            "Demo day is a different sport: 3 to 5 minutes, no questions, and 200 investors who will forget 95% of what they saw. The format demands: ONE story beat (the problem plus the proof plus the ask), a demo flash (15 seconds of product), and a memorable last line.",
            "The goal is not the deal in the room. It is the meeting afterward. So the deck and the one-liner must survive being remembered. If the room cannot repeat your line, the room cannot act on your pitch.",
            "The demo day prep: cut the pitch to the bone, rehearse to the second, and run the 'last line': the sentence the room will repeat ('we're the audit tool that paid for itself in two months'). The investors who come to the table afterward will say your last line back to you.",
          ],
        },
        {
          heading: "Choosing an accelerator",
          paragraphs: [
            "Accelerators (Y Combinator, Techstars, sector-specific, and local programs) trade equity (typically 6 to 10%) for: capital, network, brand, and a deadline that forces focus. The honest math: the network and the brand are worth more than the check in most cases. The alumni intro is worth real money. The check is the smallest part of the deal.",
            "The selection criteria: does the network match your ICP and your investor list? (a food-tech accelerator for a B2B SaaS may be a waste). What is the alumni pattern (did their companies raise after)? What is the program's reputation with YOUR kind of founder?",
            "Ask alumni the real questions: what did you actually get, and what did it cost, in equity and in distraction? A program that takes 10% and delivers zero relevant intros is a bad trade, however famous the logo.",
          ],
        },
        {
          heading: "The public pitch voice",
          paragraphs: [
            "Public pitching (competitions, panels, podcasts) is a distribution channel with its own rules: speak to the room's level (a competition judges on the full arc; a podcast host wants the war story), keep the ask flexible ('we're raising, intros welcome'), and always have the one-pager ready to hand over (QR code or link on the last slide).",
            "The discipline: never pitch a version of the numbers you would not put in the diligence data room. Public pitches are the most-audited pitches of all. The audience includes your future investors, your future hires, and your competitors. Accuracy is the brand.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake 1: Fitting a 15-minute pitch into 4 minutes. You get one beat. Cut everything that is not the problem, the proof, and the ask.",
            "Mistake 2: A forgettable last line. The room cannot repeat 'and also we have a roadmap.' Write a line that states the win in one sentence.",
            "Mistake 3: Joining an accelerator for the check. Compare the network to your investor list first, and interview alumni before signing.",
            "Mistake 4: Looser numbers on stage than in the data room. Public audiences include your future investors and competitors. One inflated number on stage becomes a reputation off stage.",
          ],
        },
      ],
      examples: [
        "A founder's demo day ends with 'we're the bookkeeping tool that paid for itself in two months, 47 clinics, $400K ARR, raising $1.5M.' Four investors say the last line back to him at the reception. Three meetings follow. The round closes in six weeks.",
        "Another founder takes 6% equity in a local accelerator for a small check and zero network relevance to his enterprise buyers. The alumni pattern: no follow-on raises. The equity was the price. The value never arrived.",
        "A founder's demo day had a 15-second demo flash: a real clinic account, one happy path, one number. The room saw the product working instead of hearing about it. Five investors asked for the one-pager after the pitch.",
        "On a podcast, a founder told the war story: the first customer who fired them, and the second who paid. The host repeated the story in the intro. Listeners emailed the founder for weeks. The war story was the distribution.",
        "A competition judge asked for the numbers. The founder gave the same labeled numbers as the data room, no rounding up. A partner in the audience said: 'you're the only one who gave us numbers we could verify tonight.' He led the diligence after the event.",
      ],
      actionItems: [
        "Write your 3-minute demo day pitch: one beat, one demo flash, one memorable last line.",
        "If considering an accelerator: interview 3 alumni and check the follow-on raise pattern.",
        "Prepare the one-pager with a QR link for every public appearance.",
        "Cut the demo day pitch to the bone and rehearse to the second.",
        "Write your one-sentence last line and test it: can a stranger repeat it?",
        "Use the same numbers on stage as in the data room. Label them.",
      ],
      keyPoints: [
        "Demo day = one beat + demo flash + memorable last line. The meeting is the goal.",
        "Accelerators: network and brand matter more than the check. Verify alumni outcomes.",
        "Public pitching is distribution. Always have the one-pager.",
        "Never pitch numbers you would not put in the data room.",
        "The room repeats the last line. Make it repeatable.",
        "The war story is the public-pitch gold.",
      ],
    },
  ],
  quiz: [
    {
      question: "Investors decide with emotion and justify with logic, so the pitch should:",
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
      explanation: "A specific person with a specific cost persuades. Abstractions are forgettable.",
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
      explanation: "The room needs to evaluate a decision: amount, instrument, valuation or cap, use of funds with buckets, and the runway it buys.",
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
      explanation: "'That's the edge case we're solving...' turns the failure into the story. Every founder breaks a demo. The recovery keeps the meeting.",
    },
    {
      question: "Asked a question you can't answer, the professional response is:",
      options: [
        "Make a confident estimate",
        "Change the subject",
        "'I don't have it, here's what I know, I'll send it tomorrow'",
        "Ask why they want to know",
      ],
      correctIndex: 2,
      explanation: "Honest 'I don't know' signals an operator. Investors have heard every dodge.",
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
      explanation: "A meeting ask is a door. A deck attachment is homework. Under 150 words: why them, one proof line, 20 minutes.",
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
      explanation: "Warm intros convert about 10x. Make the referral effortless with a 3-line forwardable note.",
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
      explanation: "The room forgets 95%. The goal is a remembered last line that produces meetings afterward.",
    },
    {
      question: "The test that tells you your story architecture works is:",
      options: [
        "The deck has 20 slides",
        "A stranger repeats the problem and why it matters",
        "The team likes the story",
        "The numbers are big",
      ],
      correctIndex: 1,
      explanation: "If a stranger can repeat the problem and why it matters, the architecture works. If they repeat features, it does not.",
    },
    {
      question: "Which number is most likely to break trust in a room of investors?",
      options: [
        "A labeled growth rate",
        "An unlabeled growth rate",
        "A bottom-up TAM",
        "A monthly churn figure with its definition",
      ],
      correctIndex: 1,
      explanation: "An unlabeled number cannot be checked. The moment a number is challenged and the answer is 'we estimated it,' the deck's credibility wobbles.",
    },
  ],
  exam: [
    {
      question: "A founder's pitch is all market size and features, and investors pass politely. The most likely reason is:",
      options: [
        "The market is too small",
        "The pitch has no story for the room to remember",
        "The fonts are wrong",
        "The round is too big",
      ],
      correctIndex: 1,
      explanation: "A pitch that is only information gets a polite pass. A story creates a stake and a memory.",
    },
    {
      question: "Which beat of the pitch arc proves you understand the customer's world?",
      options: [
        "The personal moment",
        "The struggle",
        "The insight",
        "The proof",
      ],
      correctIndex: 1,
      explanation: "The struggle (the failed alternatives) is where you prove you understand the world.",
    },
    {
      question: "A founder says 'we potentially have a huge market.' The room most likely hears:",
      options: [
        "'We don't know'",
        "'We're confident'",
        "'We need more time'",
        "'We're done with data'",
      ],
      correctIndex: 0,
      explanation: "Hedging reads as low conviction. Cut the hedges and state the segment and the proof.",
    },
    {
      question: "The best test for whether a slide belongs in the deck is:",
      options: [
        "Does it look beautiful?",
        "Does it answer 'so what?'",
        "Does it have a chart?",
        "Is it on the template?",
      ],
      correctIndex: 1,
      explanation: "If a slide does not change the decision, it does not belong. That is the 'so what' test.",
    },
    {
      question: "Why must the deck survive being forwarded?",
      options: [
        "Investors print decks",
        "The deck is a distribution document read without your voice",
        "Forwarded decks are required by law",
        "It makes the file smaller",
      ],
      correctIndex: 1,
      explanation: "The deck is a distribution document. A forwarded deck that reads like slides with a missing voice dies.",
    },
    {
      question: "The five numbers on a correct ask slide are:",
      options: [
        "Amount, instrument, valuation, use of funds, runway",
        "Amount, logo, team, market, roadmap",
        "Valuation, churn, CAC, burn, TAM",
        "Amount, headcount, offices, logo, deck version",
      ],
      correctIndex: 0,
      explanation: "The ask is five numbers: amount, instrument, valuation or cap, use of funds in buckets, and runway.",
    },
    {
      question: "A founder is challenged on the growth rate and answers 'we estimated it.' The effect on the room is:",
      options: [
        "Relief that they are honest",
        "The deck's credibility wobbles",
        "Nothing, numbers are optional",
        "They ask for more slides",
      ],
      correctIndex: 1,
      explanation: "Every number should survive 'how did you get that?' An estimated answer wobbles the whole deck.",
    },
    {
      question: "The correct shape of a live demo is:",
      options: [
        "A full feature tour with dummy data",
        "1-minute setup, 3-minute happy path, 1-minute payoff",
        "Show the roadmap first",
        "Click through every screen twice",
      ],
      correctIndex: 1,
      explanation: "The demo structure: 1-minute setup in the user's words, 3-minute happy path with real data, 1-minute payoff with the number.",
    },
    {
      question: "When the network fails mid-demo, the prepared founder:",
      options: [
        "Apologizes and ends the meeting",
        "Switches to a pre-recorded backup",
        "Restarts the demo from the top",
        "Moves to the roadmap slide",
      ],
      correctIndex: 1,
      explanation: "Demo fails happen to everyone. The prepared founder has the recorded fallback ready before the first click.",
    },
    {
      question: "The universal rule for answering investor questions is:",
      options: [
        "Answer the question asked, in 3 sentences, then stop",
        "Answer the question you wished was asked",
        "Talk until the room looks convinced",
        "Deflect with the roadmap",
      ],
      correctIndex: 0,
      explanation: "Answer the question that was asked, in 3 sentences, then stop. The room hears a dodge otherwise.",
    },
    {
      question: "'I don't have that number in front of me, here's what I know, and I'll send it by tomorrow' is:",
      options: [
        "A weakness the room will punish",
        "An operator's answer that builds trust",
        "A dodge in disguise",
        "A reason to end the meeting",
      ],
      correctIndex: 1,
      explanation: "Honest 'I don't know' signals an operator. Investors have heard every dodge, so the honest answer stands out.",
    },
    {
      question: "Which cold email ask converts better than 'can I send you my deck?'",
      options: [
        "'Would you take 20 minutes this week?'",
        "'Would you review our website?'",
        "'Can I add you to our newsletter?'",
        "'Do you know any investors?'",
      ],
      correctIndex: 0,
      explanation: "A meeting ask is a door. A deck attachment or review is homework, not a meeting.",
    },
    {
      question: "The most important day in a cold outreach sequence is usually:",
      options: [
        "Day 1, the first email",
        "Day 5, the follow-up with new proof",
        "Day 60, the last reminder",
        "Day 1, the attachment",
      ],
      correctIndex: 1,
      explanation: "Most replies come from the follow-up, not the first email. The day-5 nudge with new proof is where the raise is won.",
    },
    {
      question: "The real goal of a demo day pitch is:",
      options: [
        "The deal signed in the room",
        "The meeting afterward",
        "A standing ovation",
        "A podcast invitation",
      ],
      correctIndex: 1,
      explanation: "The room forgets 95% of what it saw. The goal is a memorable line that produces meetings afterward.",
    },
    {
      question: "When choosing an accelerator, the most useful data point is:",
      options: [
        "The size of the logo",
        "The alumni follow-on raise pattern",
        "The free snacks",
        "The length of the program",
      ],
      correctIndex: 1,
      explanation: "Ask alumni what they actually got and check whether their companies raised after. Network and brand matter more than the check.",
    },
  ],
};