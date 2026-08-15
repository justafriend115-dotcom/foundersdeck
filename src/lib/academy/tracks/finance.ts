import type { AcademyTrack } from "../types";

export const financeTrack: AcademyTrack = {
  id: "finance",
  title: "Finance & Runway",
  tagline: "Burn, runway, unit economics, and the books: the numbers that keep you alive.",
  icon: "calculator",
  estimatedHours: "4.5h",
  free: false,
  lessons: [
    {
      id: "finance-1",
      title: "Runway, burn, and the 12-month survival math",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your company is like a car with a gas tank. Burn is how fast you use the gas, which is your cash, every month. Runway is how many months you can keep driving before the tank is empty. Know these two numbers and you can plan ahead. Ignore them and you can run out of gas in the middle of nowhere.",
          ],
        },
        {
          heading: "The two numbers that govern everything",
          paragraphs: [
            "Burn is how much cash you spend per month. Runway is how many months you have left. Runway equals cash on hand divided by burn. These two numbers decide when you raise money, when you hire, and when you cut. Most startup crises are runway crises that were visible six months earlier.",
            "There are two kinds of burn. Gross burn is all the cash you spend in a month. Net burn is gross burn minus your revenue. Net burn is what actually drains your bank account. For survival math, use net burn. For fundraising math, investors look at gross burn plus a growth buffer.",
            "The hard rule: know your exact cash balance and your exact runway every single week. Write both numbers down on a card. 'Approximately' is how companies die with full conviction they had six months left.",
            "A good habit is a standing 10-minute money review every Monday. Open the bank account, check the burn, check the runway, flag anything odd. This small habit catches problems while they are still small.",
          ],
        },
        {
          heading: "The runway rules of thumb",
          paragraphs: [
            "Raising money? You want 18 to 24 months of runway from the day the money lands. Operating normally? Keep a minimum of 6 months of runway for 'something happens': an investor saying no, a customer churn, a lawsuit.",
            "Below 6 months of runway and outside of a raise, you are in survival mode. Survival mode means one job: extend the runway before adding anything new. No new hires, no new tools, no new office space.",
            "The runway extensions, in order of speed: cut subscription overhead (audit every SaaS you pay for), pause hiring (the biggest lever by far), cut contractors, renegotiate fixed costs, and raise bridge revenue (services, annual prepay deals). As a last resort, raise a bridge note from believers. Do the cheap, fast moves first.",
          ],
        },
        {
          heading: "The 12-month plan that keeps you honest",
          paragraphs: [
            "Write the 12-month plan on one page. Revenue by month, with assumptions labeled. Costs by month: headcount, infrastructure, marketing, fixed costs. And the resulting cash balance each month.",
            "Update it monthly, comparing actuals to plan. The plan's purpose is not prediction. It is early detection. The month you drift 20% off plan is the month you act, not the month you notice.",
            "Label every assumption with a date. Write 'ad CAC of $60, observed March 2026, expected to hold 3 months' instead of just 'ad CAC $60.' When reality changes, update the label and watch the plan move.",
            "Keep the plan in a tool you can share, like Google Sheets. You will need it for every investor meeting and for your own decisions. A one-page plan you actually update beats a 30-tab model you never open.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: using gross burn when you mean net burn. This makes your runway look shorter than it is, which causes panic cuts. Be consistent: net burn for survival math, gross burn for fundraising math.",
            "Mistake two: forgetting lumpy payments. Taxes, annual software bills, and big vendor invoices arrive once or twice a year. Put them in the 12-month plan, or your runway number is a fantasy.",
            "Mistake three: waiting until month 5 to check the runway. Check weekly. A problem found at 8 months of runway is a plan. A problem found at 2 months is a crisis with no good options.",
            "Mistake four: cutting revenue-generating spend first. Cut subscriptions and pause hiring before you cut the marketing that brings in customers. Survival is about buying time without killing the engine.",
          ],
        },
      ],
      examples: [
        "A founder with $180K in the bank and $30K per month of net burn thinks she has 6 months. She forgot the $40K tax payment due in month 4. Real runway: 4.5 months. The 12-month plan would have flagged it in week one.",
        "Another founder at 7 months of runway cuts $4K per month in subscriptions, which is 25% of the gap. He pauses hiring and renegotiates the office lease. He extends to 11 months, then raises the bridge that saves him.",
        "A founder keeps her 12-month plan in Google Sheets and updates it the first Monday of every month. In month 6, actual spend is 18% above plan. She cuts two contractors that week instead of discovering the gap at month 10.",
        "A founder at 4 months of runway does nothing because a raise 'should close soon.' The raise falls through. He has to sell at a discount price and give up board control. The runway number was telling him the truth for months.",
        "A founder raises at 14 months of runway, while he is strong. He negotiates calmly and keeps most of the company. His co-founder waited until 5 months and signed whatever was on the table.",
      ],
      actionItems: [
        "Compute exact cash, gross burn, net burn, and runway TODAY. Write the four numbers on a card above your desk.",
        "Write the one-page 12-month plan with labeled assumptions for revenue and costs.",
        "Audit every subscription this week and cancel anything not used in 30 days.",
        "Schedule a standing 10-minute money review every Monday at the same time.",
        "Write your hiring trigger: what runway number makes a new hire safe?",
        "Write the 3-sentence monthly plan update: up because, down because, the risk is.",
      ],
      keyPoints: [
        "Runway equals cash divided by net burn. Recompute weekly.",
        "Minimum 6 months of runway, always.",
        "Pause hiring before cutting anything else.",
        "The 12-month plan is for early detection, not prediction.",
        "'Approximately' is how companies die.",
        "Below 6 months of runway and outside a raise, you are in survival mode.",
      ],
    },
    {
      id: "finance-2",
      title: "Unit economics: the math that predicts your future",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Think of each customer as a small business deal. You spend money to win the customer, and you hope they pay you more than that over time. LTV is the money a customer gives you over their whole time with you. CAC is the money it costs you to win that customer. If it costs you more to win a customer than they will ever pay you, you lose money on every sale. That is a business that dies slowly.",
          ],
        },
        {
          heading: "LTV and CAC, defined with your own numbers",
          paragraphs: [
            "CAC stands for customer acquisition cost. It is all of your sales and marketing cost divided by the new customers you acquired in that period. If you spent $30K and won 100 customers, your CAC is $300.",
            "LTV stands for lifetime value. It is the average revenue a customer gives you over their whole time with you. The quick way to estimate it: take the average monthly revenue per customer and divide by monthly churn. Churn is the percentage of customers who leave each month.",
            "Example: a customer pays $50 per month and 8% of customers leave each month. Average lifetime is 12.5 months, so LTV is about $625. That is the number you compare to CAC.",
            "Two rules of thumb: LTV must be more than 3x CAC, and CAC must be recovered in under 12 months, ideally under 6. The subtlety that kills startups: LTV and CAC computed on averages hide the segments. Compute them per channel, per plan, per cohort. The channel with 5x might be propping up a channel with 0.8x that is quietly burning money. Your average is a lie; your segments are the truth.",
          ],
        },
        {
          heading: "The cohort view",
          paragraphs: [
            "A cohort is a group of customers acquired in the same month. Cohorts are the only honest look at retention. Ask: what percentage of the January cohort is still paying in June?",
            "Rising cohort curves mean an improving product. Flat or falling curves mean a leak. Cohort analysis is how you see problems months before they show up in revenue.",
            "The first cohort analysis to run is W1, W4, W12 retention: the percentage still with you after week 1, week 4, and week 12. For SaaS, W4 at or above 40% is the minimum bar to scale. W12 at or above 25% is the climb.",
            "Below that bar, every dollar of CAC is poured into a sieve. Fix retention before scaling spend. More ads on a leaky product just buy more churn.",
          ],
        },
        {
          heading: "Contribution margin and the unit deal",
          paragraphs: [
            "Contribution margin is revenue minus variable cost. Variable costs are the ones that grow with each customer: hosting, support, payment fees, and CAC. The unit deal must be positive before you scale. Each customer must contribute more than their marginal cost.",
            "SaaS gross margins of 70 to 90% are normal. Services margins of 20 to 30% need different math and a much lower CAC tolerance. A services business cannot afford to spend $1,000 to win a $2,000 project.",
            "When unit economics are broken, the fix is never 'more customers.' It is price, packaging, cost structure, or churn. Those are the levers under the arithmetic. Selling more of a losing deal just loses more.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: computing only the average. Averages hide the channel, the plan, and the cohort that are bleeding. Segment everything before you trust any number.",
            "Mistake two: checking the ratio but not the payback. A 5x ratio with a 20-month payback can still starve you. Payback is about cash, and cash is what pays salaries.",
            "Mistake three: using gross margin instead of contribution margin. Forgetting hosting, support, and payment fees makes a losing deal look profitable.",
            "Mistake four: scaling ad spend while retention is below the bar. Every dollar of CAC lands in a sieve. Fix the leak first, then turn up the tap.",
          ],
        },
      ],
      examples: [
        "A founder's average LTV:CAC looks like a healthy 3.5x. By channel: content is 8x, ads are 2.1x, partnerships are 0.7x. The partnerships 'strategy' is quietly losing money every quarter. Segmenting shows it in one afternoon.",
        "A SaaS at $50 per month ARPU and 8% monthly churn: average customer lifetime is 12.5 months, so LTV is $625. CAC must stay under about $210, and payback under about 7 months of revenue. The founder prices and spends accordingly. The arithmetic replaces the guesswork.",
        "A founder spends $400 of CAC on a $30 per month product with 15% churn. LTV is only $200. The ratio is 0.5x. Every new customer makes the company poorer. No amount of growth fixes that math.",
        "A founder watches W4 retention fall from 45% to 30% over four months. He pauses ads, fixes onboarding, and retention recovers. Revenue only dips months later, but the cohort data caught it at the start.",
        "A services founder with 25% margins knows his CAC payback must be under 3 months. He prices projects accordingly and refuses deals that cannot pay back in time. The discipline keeps the cash flowing.",
      ],
      actionItems: [
        "Compute CAC and LTV per channel, not in aggregate. Write the numbers in a table.",
        "Run your first cohort analysis: W1, W4, W12 retention for your last 3 cohorts.",
        "Write your LTV:CAC and payback targets on a card above your desk.",
        "List your variable costs line by line: hosting, support, payment fees, CAC.",
        "Compute the contribution margin for each plan or tier.",
        "Set a retention bar: what W4 number makes you pause ad spend?",
      ],
      keyPoints: [
        "LTV must be more than 3x CAC; CAC payback under 12 months.",
        "Averages lie. Segment by channel, plan, and cohort.",
        "Cohorts reveal leaks months before revenue does.",
        "Fix unit economics with price, packaging, or churn, never with more customers.",
        "W4 at or above 40% is the SaaS bar to scale.",
        "Contribution margin must be positive before you scale.",
      ],
    },
    {
      id: "finance-3",
      title: "Pricing: setting, testing, and raising it",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Price is what the customer pays. Value is what the product is worth to them. A product that saves a customer $2,000 per month is worth a lot more than $19. Charge a fair slice of the value, not what feels comfortable. And you can test prices with real buyers. They will tell you the truth if you ask the right way.",
          ],
        },
        {
          heading: "The pricing framework",
          paragraphs: [
            "Price is set by value delivered, not by cost plus margin. The anchor: how much money does your product save or earn the customer, per month or per year? Price equals a fraction of that value, typically 10 to 30% for SaaS, adjusted for competitive pressure and willingness to pay.",
            "The four pricing patterns. Flat: one price, simple, but it leaves money on the table. Tiered: three tiers, the standard. A low 'get in' tier, a middle 'most popular' tier, and a high 'pro' tier. The decoy effect makes the middle win: the high tier makes the middle look reasonable. Usage-based: pay for what you consume, which aligns value and price but is harder to predict. Seat-based: per user, common, but punished when buyers count seats.",
            "The classic mistake is pricing from your cost and your comfort instead of customer value. Every 'I feel weird charging $500 per month' is a founder underpricing by 10x and then scaling a thin-margin business.",
          ],
        },
        {
          heading: "The pricing experiments",
          paragraphs: [
            "You cannot know the right price from a spreadsheet. You have to run experiments. Experiment one: the 'too expensive' test. Quote a price 3 to 5x your target to a handful of real buyers and watch the reaction. Real buyers tell you what it is worth.",
            "Experiment two: the paywall test. Make the product require payment to proceed and measure conversion. Experiment three: annual versus monthly framing. Annual prepay at a 20% discount often beats monthly on both retention and cash flow.",
            "Price changes are data, not decisions. Raise the price on new customers only, measure conversion, and move the number with evidence. The most common pricing error is not raising. Pricing is the highest-leverage growth lever most founders never pull.",
          ],
        },
        {
          heading: "Raising prices without losing customers",
          paragraphs: [
            "Grandfather existing customers: their price is protected. They are your references and your retention data. Raise for new customers. Announce changes clearly and with lead time.",
            "The fear that kills raises is 'customers will leave.' The data usually shows the opposite. Churn is rarely price-driven below the value line. The customers you lose to a 20% raise were probably not going to renew anyway, and the ones who stay fund your margin.",
            "For enterprise-style deals, price per outcome where possible: 'per $1K of revenue you do not lose' or 'per invoice processed.' When the price is tied to the outcome, the buyer stops optimizing cost and starts asking how to get more.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: pricing from cost plus margin. The customer does not care what your product costs to build. They care what it is worth to them.",
            "Mistake two: a single flat price with no tiers. You leave the small and the large customers both underpriced.",
            "Mistake three: never raising prices. If your price has not moved in two years, you are almost certainly leaving money on the table.",
            "Mistake four: surprising existing customers with a raise. Grandfather them, announce clearly, and raise for new customers only.",
          ],
        },
      ],
      examples: [
        "A founder prices his tool at $19 per month because he would be comfortable paying that. His customer's problem costs them $2,000 per month in waste. A value-anchored price is $199 per month. That is 11x the revenue for the same work.",
        "A SaaS grandfathers old customers at $29, moves new customers to $49, and runs a 3x 'too expensive' test on prospects. Conversion drops 8%, but revenue per customer rises 70%. The market signal was there all along.",
        "A founder runs the 'too expensive' test at $5,000 per month for a tool he thought was worth $500. A buyer says, 'that is cheap compared to our current $9K solution.' He reprices at $2,500 and closes the deal.",
        "A founder switches to annual prepay with a 20% discount. Cash flow improves immediately, and annual customers churn far less. The discount pays for itself in retained revenue.",
        "A services founder stops billing hourly and prices per outcome: 'per $1K of revenue you do not lose.' Clients stop arguing about hours and start asking how to get more value.",
      ],
      actionItems: [
        "Write your value math: what does the customer save or earn, monthly and yearly?",
        "Design your three tiers with a clear 'most popular' decoy in the middle.",
        "Run the 3 to 5x 'too expensive' test on your next 5 prospect conversations.",
        "Set a price raise date for new customers only, and draft the grandfathering policy.",
        "Switch at least one segment to annual prepay and measure cash flow and retention.",
        "Measure conversion before and after any price change, and record it.",
      ],
      keyPoints: [
        "Price equals a fraction of customer value, not cost plus margin.",
        "Three tiers with a decoy; the middle wins.",
        "Run the 'too expensive' test. Buyers reveal the real price.",
        "Grandfather old customers; raise for new ones.",
        "Pricing is the highest-leverage growth lever most founders never pull.",
        "Price changes are data, not decisions.",
      ],
    },
    {
      id: "finance-4",
      title: "Bookkeeping and the monthly close",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Bookkeeping is writing down every dollar that comes in and goes out. It sounds boring, but it is your memory. If you do not write things down, you forget, and your company can look healthy when it is not. The monthly close is a short checklist that keeps the books true. It takes 90 minutes, and it is non-negotiable.",
          ],
        },
        {
          heading: "Why the books matter from day one",
          paragraphs: [
            "The books are your memory and your evidence. From day one: a separate bank account, done at incorporation. A bookkeeping system: QuickBooks, Xero, or a service. And a rule: every transaction categorized by the 5th of the following month.",
            "The company that books from day one is the company that raises without an 'the accountant will fix it' panic. Your books are the first thing investors, banks, and tax authorities ask for.",
            "Three documents to understand. The P&L, or profit and loss statement: revenue minus costs over a period. The Balance Sheet: assets, liabilities, and equity at a moment in time. This is what your bank and investors actually read. The Cash Flow statement: the bank's-eye view of where cash went.",
            "A profitable company can still die of cash flow. Profit is an opinion; cash is a fact. The P&L says you made money; the bank account says the money is gone.",
          ],
        },
        {
          heading: "The monthly close in 90 minutes",
          paragraphs: [
            "The monthly close has six steps. One: reconcile the bank account to the penny. Two: categorize all transactions. Three: record accruals, such as deferred revenue, money received but not yet earned, and unpaid invoices. Four: review the P&L against plan, the drift check from lesson 1. Five: review cash versus forecast. Six: pay the taxes due.",
            "That is it. 90 minutes a month keeps the company honest and the investor updates real.",
            "Accrual versus cash accounting. Cash accounting is simple: it shows when money moves. Accrual accounting matches revenue to when it was earned. Accrual is required for accurate LTV and unit economics, and eventually required by law. Most businesses cross that threshold early.",
            "Ask your accountant which applies to you now. Run your metrics on accrual regardless. Your LTV math needs revenue matched to the month it was earned, not the month cash arrived.",
          ],
        },
        {
          heading: "When to hire help",
          paragraphs: [
            "Hire a bookkeeper when the close takes more than an afternoon, or when transactions exceed about 200 per month. Hire a controller or a fractional CFO when you have investors to report to, debt, or complex revenue recognition.",
            "The sequence: DIY plus templates, then a bookkeeper, then a fractional CFO. Do not skip the middle step. The first time a tax penalty lands, it costs more than a year of bookkeeping.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: running business money through a personal account. It breaks your liability shield and turns every statement into a puzzle.",
            "Mistake two: never reconciling. The bank and the books drift apart quietly. By month 7, the gap is a mystery you cannot solve.",
            "Mistake three: running metrics on cash accounting. Revenue lands in the wrong month, and your LTV and churn numbers lie.",
            "Mistake four: skipping the close because 'we are small.' The close is 90 minutes. The penalty for skipping it is measured in surprises and penalties.",
          ],
        },
      ],
      examples: [
        "A founder signs a $60K annual contract with a customer in January. Cash accounting says $60K of revenue in January. Accrual says $5K per month. When she models churn and LTV, cash accounting would have made her company look 12x healthier than reality.",
        "Another founder never reconciles. In month 7 the bank shows $40K less than the books. The missing money: a double-paid vendor invoice, a refund processed twice, and a subscription that renewed for a year. A 90-minute monthly close would have caught all three in month 1.",
        "A founder categorizes transactions as they happen. When an investor asks for three years of clean financials, diligence takes an afternoon instead of a month.",
        "A founder watches the cash flow statement monthly and sees payment delays from a big customer. He switches that customer to prepay before the delay becomes a crisis.",
        "A founder hits 200 transactions per month and hires a bookkeeper. The 90-minute close becomes a 15-minute review, and he gets 6 hours of his week back.",
      ],
      actionItems: [
        "Set up the separate account, the bookkeeping tool, and the 5th-of-month categorization rule.",
        "Do this month's close now: reconcile, categorize, accruals, P&L versus plan, cash forecast, taxes.",
        "Book the 90-minute close block in your calendar for the next 12 months, today.",
        "Export last month's transactions and categorize anything uncategorized.",
        "Write your accrual policy: which revenue is deferred, and how is it recognized?",
        "Ask your accountant: cash or accrual, and when must you switch?",
      ],
      keyPoints: [
        "Profit is an opinion; cash is a fact.",
        "The monthly close is 6 steps, 90 minutes, and non-negotiable.",
        "Metrics run on accrual; books comply with the law.",
        "Bookkeeper, then fractional CFO, in that order, before the penalty.",
        "Categorize every transaction by the 5th of the following month.",
        "A profitable company can die of cash flow.",
      ],
    },
    {
      id: "finance-5",
      title: "Taxes for founders: what's real and what's avoidable",
      readMinutes: 15,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Taxes are money you owe the government. If you set a little aside every month, they are easy to pay. If you ignore them, they grow with penalties and become a disaster. The founder's job is simple: know which taxes apply, set the money aside, and pay on the right dates.",
          ],
        },
        {
          heading: "The tax map at the start",
          paragraphs: [
            "US federal taxes: income tax (a C-Corp pays corporate rates on profits; an S-Corp or LLC passes profits through to owners), payroll taxes if you have employees (withholding, FICA, unemployment), sales tax on taxable goods and services by state, and self-employment taxes for solo or LLC founders.",
            "Digital products have a patchwork of sales tax rules, especially with economic nexus. International revenue adds VAT obligations in the EU. The distance-selling threshold caught many startups. Digital marketplaces like Stripe, Paddle, and Stripe Tax often collect VAT for you, which does not mean you have no responsibility to file.",
            "The taxes that surprise founders: sales tax nexus (cross $100K or 200 transactions in a state and you may owe), VAT on EU digital sales, quarterly estimated payments (federal income tax is pay-as-you-go; miss the deadline and penalties start), and the missed 83(b) income tax covered in the legal track.",
          ],
        },
        {
          heading: "The founder's tax moves",
          paragraphs: [
            "Quarterly estimated payments: mark the four dates, compute from last year's tax plus 25% of this year's projection, and pay. Penalties for underpayment apply even if you owe $0 at filing.",
            "Set the money aside. The rule is 25 to 30% of net income into a tax account, monthly, automatically. The company that has the tax money when it is due never needs the payment plan.",
            "The 83(b) election was lesson 1's tax move. The 409A valuation is the second: an independent valuation of your common stock that sets option strike prices. Pay for the 409A, a few hundred to low thousands. Options granted with a reasonable 409A are clean for both company and employee. Strike prices set by guesswork are how IRS penalties happen.",
            "Hire an accountant early. The $200 to $500 per month question to a tax professional is the cheapest insurance against the $10K to $50K surprise. And keep the tax account funded even when cash is tight. Tax debt is the debt that does not go away in bankruptcy.",
          ],
        },
        {
          heading: "The state piece",
          paragraphs: [
            "Franchise taxes: Delaware charges one annually, based on shares or methods. State income tax applies in your operating state. The 'foreign qualification' filing is needed when you operate in a state where you are not incorporated.",
            "These are small numbers that compound into big penalties when ignored. The rule: when you have a physical presence in a state, an office, an employee, or inventory, you owe that state's basics. Register early, file annually, and keep the calendar.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: skipping estimated payments because 'we have no taxable income.' You paid yourself nothing, so you think nothing is due. Payroll, sales, and state taxes still exist, and the penalties arrive with interest.",
            "Mistake two: no tax account. You spend the tax money on payroll and hope. The tax bill does not care about your hopes.",
            "Mistake three: granting options without a 409A. Strike prices set by guesswork become tax penalties for the company and the employee.",
            "Mistake four: ignoring nexus until a letter arrives. The first letter always includes penalties. Register early, file early, sleep early.",
          ],
        },
      ],
      examples: [
        "A solo founder sees 'no taxable income' because he paid himself nothing, and skips estimated payments. At filing, the company owes $24K in payroll and state taxes with interest and penalties. A $6K+ premium on money he always knew existed.",
        "A C-Corp with EU customers crosses the 10,000 euro distance-selling threshold. Without VAT registration, the first EU tax letter arrives with a bill including penalties. A $100 per month tax tool, or Paddle's merchant-of-record model, would have handled it silently.",
        "A founder sets up an automatic 25% transfer to the tax account on day one. Tax day is boring: the money is there, the forms are filed, and nothing is urgent.",
        "A founder pays $2,500 for a 409A before granting options. At diligence, the strike prices are defensible, and the lawyers move on in minutes instead of weeks.",
        "A founder ignores Delaware franchise tax for three years. The penalty exceeds the annual fee several times over. The calendar would have cost him nothing.",
      ],
      actionItems: [
        "Put the four quarterly payment dates on your calendar, with the money rule: 25 to 30% of net income set aside monthly.",
        "Set up the automatic monthly transfer to the tax account, today.",
        "Confirm you have a current 409A before your next option grant.",
        "Hire an accountant this quarter if you do not have one, and book a 30-minute tax-mapping call.",
        "Check nexus: list every state where you have an office, an employee, or inventory.",
        "Verify whether your payment processor collects VAT for you, and what you must still file.",
      ],
      keyPoints: [
        "Sales tax nexus and EU VAT are the surprise taxes.",
        "Estimated payments: four dates, 25 to 30% set aside monthly.",
        "409A before option grants; 83(b) before it is too late.",
        "Tax debt is the debt that does not disappear.",
        "Set the money aside monthly, automatically.",
        "An accountant at $200 to $500 per month is cheap insurance.",
      ],
    },
    {
      id: "finance-6",
      title: "Financial modeling: the model that predicts your raise",
      readMinutes: 14,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A financial model is a big calculator that shows your future. You type in your assumptions, like how many customers you win each month, and it shows your revenue, costs, and cash. The model is not magic. Its real job is to answer 'what if' questions: what if prices go up, what if a channel gets expensive, what if churn doubles. A good model shows you which parts of your plan are strong and which are fragile.",
          ],
        },
        {
          heading: "The three-part model",
          paragraphs: [
            "The startup financial model has three parts. The operating model: headcount, spend by category, CAC by channel, and pricing assumptions. The revenue model: customers per cohort, retention, expansion, and churn. This is usually the core engine. The cash model: when money comes in, when it goes out, and the resulting balance and runway.",
            "The model's job is not precision. It is sensitivity. Change one input, pricing plus 20%, and watch the whole company move. The investor's favorite question is 'what happens to the plan if X?' A model you can answer live is worth more than a perfect deck.",
          ],
        },
        {
          heading: "The revenue engine",
          paragraphs: [
            "The best models are cohort-based. New customers per month, by channel. Churn by cohort. Expansion, or upsells, by cohort. Revenue equals the sum over cohorts of acquirers times retention times ARPU, the average revenue per user.",
            "This structure answers the real questions. How much does the 12-month cohort contribute? Where does growth actually come from? The cohort engine makes growth explainable.",
            "Assumptions get labels and dates. Write 'ad CAC of $60, observed March 2026, expected to hold 3 months.' When the model drifts from reality, you update the assumption and watch the plan move. That is the model working.",
          ],
        },
        {
          heading: "The model as a negotiation tool",
          paragraphs: [
            "In fundraising, the model is the diligence document. Investors will stress-test it. 'You assume 3% monthly churn. Show me the cohort data.' 'CAC goes down at scale. What is the evidence?' Weak models get picked apart. Honest ones build trust even when they are pessimistic.",
            "Build it in a tool you can share, like Google Sheets or Excel. Keep it simple enough to explain in 5 minutes. And never fudge an assumption. The fudge is the first thing they find.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: 'customers grow 20% monthly forever' with no labeled assumptions and no evidence. Investors have seen that slide a thousand times.",
            "Mistake two: no downside case. A model with only a happy path is a wish, not a model.",
            "Mistake three: precision theater. Thirty tabs and formulas nobody understands, including you. Simplicity that you can defend beats complexity you cannot.",
            "Mistake four: a model only you can open or explain. If you get hit by a bus, the raise dies with you. Share it, and keep it boring.",
          ],
        },
      ],
      examples: [
        "An investor asks 'what if your best channel doubles its CAC?' A founder with a cohort model answers live: 'we would add 11 months to CAC payback, and the plan breaks in Q4. Here is the channel mix shift we would run.' The meeting proceeds. A founder without the model says 'we would manage it.' The meeting stalls.",
        "A model with 'customers grow 20% monthly forever' and no sensitivity analysis gets a pass from nobody. The same business modeled with labeled assumptions and a downside case looks like the professional operation it is.",
        "A founder runs the stress test 'pricing plus 20%.' The model shows the plan turns cash-positive in Q4 instead of Q2 of next year. He raises prices on new customers that week.",
        "A founder compares actuals to the model in March. The March data shifts the assumptions, and the model shows the marketing budget will run dry in Q3. He cuts spend now instead of in Q3.",
        "An investor asks for the cohort data behind a churn assumption. The founder pulls it from the model live, with the source month labeled. The round proceeds on trust.",
      ],
      actionItems: [
        "Build your three-part model: operating, revenue (cohort-based), and cash.",
        "Label every assumption with a date and an evidence source.",
        "Run the three stress tests: pricing +20%, CAC x2, churn x1.5. Write down what breaks.",
        "Write the downside case: what does the plan look like in a bad market?",
        "Time yourself explaining the model to a friend in 5 minutes. Simplify what takes longer.",
        "Schedule a monthly model update: compare actuals, update assumptions, watch the plan move.",
      ],
      keyPoints: [
        "Operating plus cohort revenue plus cash equals the three parts.",
        "Cohort-based revenue answers the real questions.",
        "Labeled assumptions and an honest downside build trust.",
        "The model's job is sensitivity, not precision.",
        "Never fudge an assumption. Investors always find it.",
        "Keep it simple enough to explain in 5 minutes.",
      ],
    },
    {
      id: "finance-7",
      title: "Banking, treasury, and spending discipline",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Your money needs a safe home and clear rules. The safe home is a real business bank account, not your personal one. The rules are simple: separate money for spending, money for taxes and emergencies, and money for investors. And spend like the money is precious, because it is.",
          ],
        },
        {
          heading: "The banking stack",
          paragraphs: [
            "Open a real business account, not a personal account. Ideally with a startup-friendly bank like Mercury, Brex, or Relay, or a local bank with a business product.",
            "Separate the money into three accounts. Operating account: for spending. Reserve account: taxes and 3 months of runway, untouchable except in an emergency. And once you raise, a designated account for investor funds.",
            "Cards: use corporate cards with limits. Personal cards on the company are how founders lose the liability shield. The company should stand between you and the debts.",
            "The discipline rules: no personal spend on company cards, it is a tax issue and a cap-table issue at diligence. A two-signature rule for wires above a threshold. And a weekly 10-minute money review: cash, burn, runway, flagged transactions.",
          ],
        },
        {
          heading: "Treasury at the early stage",
          paragraphs: [
            "Pre-revenue, treasury means keeping the cash liquid. Money market funds are fine. Lockups are not. A startup that cannot reach its cash when an opportunity appears has no treasury.",
            "Once you raise, keep 18+ months of runway in conservative instruments. Never touch it for 'strategy.' The line between runway and conviction is drawn with your own discipline.",
            "Currency risk if you are international: hold what you spend in the currency you spend. Keep FX exposure small and simple. No crypto 'yield' with operational cash. No lending to friends. The treasury rule is boring on purpose: preserve, do not speculate.",
          ],
        },
        {
          heading: "The spending culture",
          paragraphs: [
            "The company's spending culture is set in the first six months. Founder flights in economy. Tools audited quarterly. Equity over salary for the early team.",
            "A founder who flies first-class before revenue has told the team what the company values. Spend like the money is yours, because the attitude you show the money, your investors will match in the next round.",
            "The audit habit: every quarter, export all subscriptions and cancel anything unused. Most startups find 10 to 20% of burn in that one hour.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: using a personal card for company spend. At diligence, the expense report becomes a negotiation topic, and the liability shield is gone.",
            "Mistake two: all cash in one operating account. Emergencies and taxes get spent on payroll by accident.",
            "Mistake three: touching the reserve for 'strategy.' A reserve that is not untouchable is not a reserve.",
            "Mistake four: no card limits and no two-signature rule. The first month a wire goes wrong, you will want both.",
          ],
        },
      ],
      examples: [
        "A founder keeps 3 months of runway in the operating account and the rest in a money-market reserve. A customer disaster hits in month 5. She has the cash to ride it out and the discipline to have placed it where it is reachable.",
        "Another founder uses his personal card for 'team dinners' for a year. At diligence, the expense report shows $18K of personal meals on company funds. The liability shield was breached on day one, and the cap table is now a negotiation topic.",
        "A founder locks cash in a 12-month CD 'for a better rate.' A competitor acquisition opportunity appears in month 4. The cash is unreachable. The lockup cost more than the rate ever returned.",
        "A founder runs the quarterly subscription audit and finds $2,800 per month of unused tools. That is 14% of burn, recovered in one hour.",
        "A founder takes equity over salary from day one and pays himself modestly. At the next round, investors note the discipline, and the term sheet gets friendlier.",
      ],
      actionItems: [
        "Set up the three accounts: operating, reserve (taxes plus 3 months), and investor funds.",
        "Establish the two-signature wire rule and corporate card limits, today.",
        "Schedule the quarterly subscription audit as a standing appointment.",
        "Move reserve money into a liquid, conservative instrument, not a lockup.",
        "Write the company spending policy: flights, meals, tools.",
        "Review last month's card statement line by line for personal charges.",
      ],
      keyPoints: [
        "Three accounts: operating, reserve, investor funds.",
        "No personal spend on company cards, ever.",
        "Boring treasury: liquid, conservative, untouchable reserve.",
        "Spending culture is set in the first six months.",
        "Keep the reserve reachable. Lockups are not treasury.",
        "The audit habit finds 10 to 20% of burn in one hour.",
      ],
    },
    {
      id: "finance-8",
      title: "Cap table management after the round",
      readMinutes: 13,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "A cap table is a list of who owns your company and how much. It shows founders, investors, and employees with options. The trick is to keep the list true and updated. If you do, negotiations and raises go smoothly. If you do not, small mistakes become big fights.",
          ],
        },
        {
          heading: "What the cap table really is",
          paragraphs: [
            "The cap table is the ownership map. Who owns what. What is vested. What is in the option pool. What converts on the next round. It is a legal document, the ledger, and a living model, the projections. Keep both, in sync, forever. The divergence between them is where disputes and dead rounds come from.",
            "The practical stack: a ledger (shares issued, transfers, cancellations), a model (what the next round does to everyone), and a tool that keeps them together. Carta or Pulley for the real stuff. A disciplined spreadsheet until then. But a spreadsheet requires discipline it rarely gets.",
          ],
        },
        {
          heading: "The post-round updates",
          paragraphs: [
            "After every round and every grant: one, update the ledger with the new shares. Two, update the option pool balance. Three, refresh the 409A: a new valuation leads to new strike prices. Four, recompute the model: what is the next round's ownership impact? Five, reconcile with the transfer agent if you have one.",
            "The discipline: the cap table is updated the week of the event, not the month of the next raise. Small updates on time beat big catch-ups under pressure.",
            "The conversion math that matters: what does a $5M Series A at $25M pre do to a $1M SAFE at a $10M cap? The SAFE converts at the $10M cap, so $1M buys 10% pre-money, which becomes about 6.7% after the round. Do this arithmetic before the round, not during. That is what 'negotiating the cap' means.",
          ],
        },
        {
          heading: "The options paperwork",
          paragraphs: [
            "Every option grant needs: a grant agreement (number, strike, vesting, exercise window), a 409A valuation reference, and board approval recorded in minutes.",
            "Grants without board approval are a legal question mark. Grants without a 409A are a tax question mark. The pattern: do the paperwork the week of the grant, keep the minutes, and archive everything. The data room thanks you later.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: informal grants without paperwork. 'We will formalize it later' becomes a $30K legal exercise at the Series A.",
            "Mistake two: letting the ledger and the model diverge. A share transferred but never recorded is a dispute waiting for a raise.",
            "Mistake three: negotiating the round without modeling it first. The model is the negotiation.",
            "Mistake four: updating the cap table only before a raise. By then, the mistakes have compounded for a year.",
          ],
        },
      ],
      examples: [
        "A founder grants options to 4 people 'informally' without board minutes or a 409A. At Series A, counsel needs to ratify or reprice. It becomes a $30K legal exercise and a 3-week delay that nearly pushes the round out of the term sheet's no-shop window.",
        "Another founder models the next round on the cap table before negotiating. The $1M SAFE at a $10M cap plus a $5M round at $25M pre leaves him at 51%. He negotiates the round at $28M pre. Still 51%, but now with $3M more in the bank. The model was the negotiation.",
        "A founder reconciles the ledger against the model monthly. In month 3 he finds a transferred share that was never recorded. One email fixes it. A year later, it would have been a lawsuit.",
        "A founder issues options without a 409A. An employee exercises and faces a surprise tax bill. The employee leaves, and the story follows the company into the next raise.",
        "A founder updates the cap table the week of every event. At diligence, the data room is clean, and the lawyers move on in a day instead of a month.",
      ],
      actionItems: [
        "Reconcile the ledger against the model today. Find the first divergence.",
        "Model your next round's impact on every shareholder, in one spreadsheet.",
        "Confirm every grant has: agreement, 409A, board minutes.",
        "Write the conversion math for your existing SAFEs before you negotiate anything.",
        "Archive all grant documents in one folder, with dates.",
        "Schedule a monthly cap-table review, 15 minutes.",
      ],
      keyPoints: [
        "The ledger and the model must always agree.",
        "Update the cap table the week of the event, not the month of the next raise.",
        "Model the next round before negotiating it.",
        "Grants without board approval and 409A are legal question marks.",
        "Do the arithmetic before the round, not during.",
        "A spreadsheet cap table requires discipline it rarely gets.",
      ],
    },
    {
      id: "finance-9",
      title: "Metrics you should track and the ones you should ignore",
      readMinutes: 12,
      sections: [
        {
          heading: "In plain English",
          paragraphs: [
            "Metrics are the numbers that tell you how your company is doing. Some numbers matter a lot, like cash and how many customers stay. Some numbers only look impressive, like total signups. A good founder watches the eight numbers that matter and ignores the decoration.",
          ],
        },
        {
          heading: "The core dashboard",
          paragraphs: [
            "The founding dashboard has eight numbers: cash, runway, net burn, MRR/ARR with a breakdown into new, expansion, and churned, NRR, LTV:CAC, CAC payback, and cohort retention (W1, W4, W12). Everything else is either a driver of these or noise.",
            "NRR stands for net revenue retention. It measures what your existing customers pay now compared to before. NRR deserves your attention. Above 100% means existing customers grow you without acquisition. That is the compounding engine. Below 100% means you are running on a treadmill, outrunning churn with new logos.",
            "Investors ask about NRR before almost anything else in SaaS. It tells them whether the product sticks.",
          ],
        },
        {
          heading: "The metric traps",
          paragraphs: [
            "Vanity traps: total users (dead accounts inflate it), signups (unless paired with activation), press mentions (not revenue), 'enterprise pipeline' (unqualified), and downloads. They glow, and they change nothing.",
            "Growth traps: MRR growth that is linear, which means hires are scaling it, not compounding. High growth with falling NRR: the funnel leaks. Cohort-retention curves that flatten below the sustainable line.",
            "The two questions that expose a trap: 'what behavior does this number reward?' and 'what decision does it change?' If the answer is 'nothing,' the number is a decoration.",
          ],
        },
        {
          heading: "The reporting rhythm",
          paragraphs: [
            "Daily: cash, burn, runway. Ten minutes. Weekly: new customers, churn events, pipeline moves. Monthly: the full dashboard, the P&L-versus-plan drift check, and the 3-sentence story: revenue up X because Y, the risk is Z.",
            "The monthly update is also the investor update. One document serves both, which is why the update template from the fundraising track matters.",
            "The final rule: track the numbers you can act on this week. A metric you cannot change is a metric you should not worship.",
          ],
        },
        {
          heading: "Common mistakes to avoid",
          paragraphs: [
            "Mistake one: celebrating signups without activation. Ten thousand signups with 300 paying is not a story. It is a leak.",
            "Mistake two: tracking 40 numbers instead of 8. Attention is the scarcest resource in a startup. A dashboard with 40 rows is a decoration.",
            "Mistake three: ignoring NRR. It is the first metric investors ask about, and the one founders forget to compute.",
            "Mistake four: reporting a metric you cannot change. If the number cannot drive a decision this week, it is entertainment.",
          ],
        },
      ],
      examples: [
        "A founder celebrates 10,000 signups. 90% never activated, and the dashboard glowed. When an investor asks 'how many pay?', the answer, 312, collapses the story. Activation and paid conversions were the metrics all along.",
        "A SaaS at $120K MRR with 98% NRR and 12% monthly growth raises easily. The NRR says retention compounds. A competitor at $300K MRR with 85% NRR and 4% growth struggles to raise. Growth is a treadmill without retention.",
        "A founder's dashboard shows MRR growing 10% monthly for a year. He hires more salespeople to keep the line going. The cohort data shows W4 retention falling the whole time. The growth was hires, not compounding.",
        "A founder adds activation rate to the dashboard and finds onboarding is the leak. Only 40% of signups reach the first value moment. He fixes onboarding, and conversion doubles without a dollar of new spend.",
        "A founder sends the monthly 3-sentence story to investors: up because, down because, the risk is. One investor reads it and makes an intro that changes the company. Clarity is a growth asset.",
      ],
      actionItems: [
        "Build the 8-number dashboard and connect it to real data this week.",
        "Kill one vanity metric from your reporting, or add NRR if it is missing.",
        "Write your monthly 3-sentence story template: up because, down because, the risk is.",
        "Set the daily 10-minute money review: cash, burn, runway.",
        "Define activation for your product and start measuring it.",
        "Write down one metric you will act on this week, and the action.",
      ],
      keyPoints: [
        "Eight numbers: cash, runway, burn, MRR, NRR, LTV:CAC, payback, cohort retention.",
        "NRR above 100% means compounding; below means treadmill.",
        "Ask every metric: what decision does it change?",
        "Daily 10 minutes, weekly events, monthly story.",
        "A metric you cannot change is a metric you should not worship.",
        "Signups without activation are decoration.",
      ],
    },
  ],
  quiz: [
    {
      question: "Runway is calculated as:",
      options: [
        "Revenue divided by burn",
        "Cash on hand divided by net burn",
        "Assets divided by liabilities",
        "Profit x months",
      ],
      correctIndex: 1,
      explanation: "Runway = cash divided by net burn. Recompute weekly. It is the survival number that governs everything.",
    },
    {
      question: "What is the healthy LTV:CAC rule of thumb?",
      options: ["1x", "2x", "3x or more", "10x or more"],
      correctIndex: 2,
      explanation: "LTV should be 3x+ CAC, with CAC recovered in under 12 months, computed per channel, not in aggregate.",
    },
    {
      question: "What does NRR above 100% mean?",
      options: [
        "You are losing customers",
        "Existing customers grow you without acquisition",
        "Your price is too low",
        "Churn is below zero",
      ],
      correctIndex: 1,
      explanation: "Net revenue retention above 100% means expansion revenue exceeds churn. It is the compounding engine investors look for first.",
    },
    {
      question: "What is the strongest pricing anchor?",
      options: [
        "Your costs plus margin",
        "Your competitor's price",
        "The value your product creates for the customer",
        "What you would pay yourself",
      ],
      correctIndex: 2,
      explanation: "Price equals a fraction of customer value, usually 10 to 30% for SaaS. Pricing from cost leaves money on the table.",
    },
    {
      question: "A profitable company can still die from:",
      options: ["Low morale", "Cash flow", "Too many customers", "High NRR"],
      correctIndex: 1,
      explanation: "Profit is an opinion; cash is a fact. Cash-flow timing kills companies that are technically profitable.",
    },
    {
      question: "Which metric best exposes a retention problem early?",
      options: [
        "Total signups",
        "Monthly press mentions",
        "Cohort retention (W1, W4, W12)",
        "Annual revenue",
      ],
      correctIndex: 2,
      explanation: "Cohort analysis reveals leaks months before they show in revenue. Signups and press are vanity without activation.",
    },
    {
      question: "The best first move to extend runway is:",
      options: [
        "Raise a bridge note",
        "Pause hiring",
        "Cut marketing",
        "Move to a cheaper office",
      ],
      correctIndex: 1,
      explanation: "Pausing hiring is the biggest and fastest lever. Headcount is usually 60 to 80% of burn.",
    },
    {
      question: "What is the cap table's purpose after a round?",
      options: [
        "A decoration for the data room",
        "The ownership map: ledger and model in sync",
        "A tax document",
        "A marketing tool",
      ],
      correctIndex: 1,
      explanation: "The cap table is the ownership map. The legal ledger and the forward model must always agree, updated the week of each event.",
    },
    {
      question: "What is gross burn?",
      options: [
        "Revenue minus costs",
        "All monthly cash spent",
        "Cash on hand divided by burn",
        "Profit before tax",
      ],
      correctIndex: 1,
      explanation: "Gross burn is all the cash you spend in a month. Net burn subtracts revenue. Use net burn for survival math.",
    },
    {
      question: "What is the 'too expensive' test?",
      options: [
        "Asking investors for a higher valuation",
        "Quoting a price 3 to 5x your target to real buyers and watching the reaction",
        "Charging everyone double for one month",
        "Raising prices without telling anyone",
      ],
      correctIndex: 1,
      explanation: "The 'too expensive' test quotes a price 3 to 5x your target to a handful of real buyers. Their reaction reveals the real price.",
    },
  ],
  exam: [
    {
      question: "A founder has $120K in cash and $20K of net burn per month, but owes a $30K tax payment in 3 months. What is her real runway?",
      options: ["6 months", "4.5 months", "3 months", "9 months"],
      correctIndex: 1,
      explanation: "Real runway = ($120K minus $30K) divided by $20K = 4.5 months. Lumpy payments like taxes must go into the math.",
    },
    {
      question: "The best time to raise money is:",
      options: [
        "When you are at 2 months of runway",
        "When you have 18 to 24 months of runway and you are strong",
        "Only when you are profitable",
        "Whenever an investor calls first",
      ],
      correctIndex: 1,
      explanation: "Raise while you are strong, at 18 to 24 months of runway. Raising from a position of desperation always costs more.",
    },
    {
      question: "Your average LTV:CAC looks healthy at 3.5x, but one channel is at 0.7x. What should you do?",
      options: [
        "Ignore it, the average is fine",
        "Segment by channel and fix or cut the weak channel",
        "Raise prices for everyone",
        "Stop selling on all channels",
      ],
      correctIndex: 1,
      explanation: "Averages hide the segments. The channel at 0.7x is quietly losing money. Segment, then fix or cut it.",
    },
    {
      question: "For SaaS, a W4 retention below 40% means:",
      options: [
        "Time to double marketing spend",
        "Fix retention before scaling spend",
        "The product is perfect",
        "Raise prices immediately",
      ],
      correctIndex: 1,
      explanation: "W4 at or above 40% is the minimum bar to scale. Below it, every dollar of CAC is poured into a sieve.",
    },
    {
      question: "A customer's problem costs them $2,000 per month. A value-anchored price for a SaaS tool is roughly:",
      options: ["$19 per month", "$200 to $600 per month", "$2,000 per month", "$50,000 per year"],
      correctIndex: 1,
      explanation: "Price equals 10 to 30% of customer value. Ten to thirty percent of $2,000 monthly is $200 to $600 per month.",
    },
    {
      question: "When you raise prices, existing customers should:",
      options: [
        "Be repriced immediately",
        "Be grandfathered at their old price",
        "Be cut off",
        "Pay retroactively",
      ],
      correctIndex: 1,
      explanation: "Grandfather existing customers: their price is protected. They are your references and your retention data. Raise for new customers.",
    },
    {
      question: "A customer signs a $60K annual contract in January. Accrual accounting records:",
      options: [
        "$60K of revenue in January",
        "$5K of revenue per month",
        "No revenue until the year ends",
        "$60K of cash and $60K of revenue in January",
      ],
      correctIndex: 1,
      explanation: "Accrual matches revenue to when it is earned: $60K divided by 12 months = $5K per month. Cash accounting would overstate January by 12x.",
    },
    {
      question: "Which of these is part of the monthly close?",
      options: [
        "Reconcile the bank account to the penny",
        "Post on social media",
        "Interview new hires",
        "Redesign the logo",
      ],
      correctIndex: 0,
      explanation: "The monthly close is six steps: reconcile, categorize, record accruals, review P&L versus plan, review cash versus forecast, and pay taxes due.",
    },
    {
      question: "The 409A valuation exists to:",
      options: [
        "Set your option strike prices at a defensible value",
        "Value your office furniture",
        "Replace your accountant",
        "Calculate your runway",
      ],
      correctIndex: 0,
      explanation: "A 409A is an independent valuation of your common stock that sets option strike prices. Options granted without one are a tax question mark.",
    },
    {
      question: "You may owe sales tax in another US state when you:",
      options: [
        "Send one email there",
        "Cross the state's economic nexus threshold, such as $100K or 200 transactions",
        "Visit for a vacation",
        "Hire a remote worker in any state",
      ],
      correctIndex: 1,
      explanation: "Economic nexus kicks in around $100K of sales or 200 transactions in a state. Crossing the threshold means you may owe that state's sales tax.",
    },
    {
      question: "The three parts of a startup financial model are:",
      options: [
        "Operating, revenue, and cash",
        "Sales, marketing, and support",
        "Assets, liabilities, and equity",
        "Deck, data room, and demo",
      ],
      correctIndex: 0,
      explanation: "The operating model covers spend and headcount, the revenue model is the cohort-based engine, and the cash model tracks when money moves.",
    },
    {
      question: "The model's real job is:",
      options: [
        "Perfect precision",
        "Sensitivity: showing what happens when an input changes",
        "Impressing investors with tabs",
        "Replacing your accountant",
      ],
      correctIndex: 1,
      explanation: "The model's job is sensitivity, not precision. Change one input and watch the whole company move. That answers the investor's 'what if' questions.",
    },
    {
      question: "The reserve account should hold:",
      options: [
        "Investor funds only",
        "Taxes and about 3 months of runway, untouchable except in an emergency",
        "Everything, so it is easy to spend",
        "Crypto yields",
      ],
      correctIndex: 1,
      explanation: "The reserve covers taxes and about 3 months of runway, in liquid, conservative instruments. Untouchable except in an emergency.",
    },
    {
      question: "The cap table should be updated:",
      options: [
        "The week of the event, like a grant or a round",
        "Only before the next raise",
        "Once a year",
        "When the accountant remembers",
      ],
      correctIndex: 0,
      explanation: "Update the cap table the week of the event. By the next raise, the mistakes have compounded for a year.",
    },
    {
      question: "NRR below 100% means:",
      options: [
        "Existing customers grow you",
        "You are on a treadmill, outrunning churn with new customers",
        "Your product is free",
        "Churn is zero",
      ],
      correctIndex: 1,
      explanation: "NRR below 100% means churn outpaces expansion. You must keep acquiring new logos just to stand still. That is a treadmill.",
    },
  ],
};