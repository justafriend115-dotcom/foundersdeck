export interface LegalDocument {
  id: string;
  label: string;
  icon: string;
  description: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: "nda",
    label: "NDA Template",
    icon: "shield",
    description: "Mutual non-disclosure agreement for sharing your idea safely.",
    title: "Mutual Non-Disclosure Agreement",
    intro:
      'This Mutual Non-Disclosure Agreement (the "Agreement") is entered into by the parties below to protect confidential information shared during business discussions.',
    sections: [
      {
        heading: "1. Purpose",
        body: [
          'The parties wish to evaluate a potential business relationship (the "Purpose"). In connection with this Purpose, each party may disclose Confidential Information to the other.',
        ],
      },
      {
        heading: "2. Confidential Information",
        body: [
          "Confidential Information means any non-public information disclosed by either party, including business plans, financials, customer lists, product designs, source code and trade secrets.",
          "Information will be marked as confidential, or if disclosed orally, summarised in writing within 30 days.",
        ],
      },
      {
        heading: "3. Obligations",
        body: [
          "Each party agrees to use Confidential Information solely for the Purpose, to protect it with at least reasonable care, and not to disclose it to third parties except its own advisors bound by equivalent confidentiality.",
        ],
      },
      {
        heading: "4. Exclusions",
        body: [
          "Obligations do not apply to information that is publicly known, already known to the recipient without restriction, independently developed, or lawfully received from a third party.",
        ],
      },
      {
        heading: "5. Term & Return",
        body: [
          "This Agreement lasts 2 years from the Effective Date. Upon request, each party will return or destroy the other's Confidential Information and certify destruction in writing.",
        ],
      },
    ],
  },
  {
    id: "equity",
    label: "Founder Equity Agreement",
    icon: "scale",
    description: "Founder vesting and equity split essentials.",
    title: "Founder Equity & Vesting Agreement",
    intro:
      "This agreement sets out the ownership split and vesting schedule between co-founders to align incentives and protect the company.",
    sections: [
      {
        heading: "1. Equity Split",
        body: [
          "The founders agree to an ownership split reflecting contribution and role. For a standard two-founder company, a 50/50 or role-weighted split (e.g., 60/40) is common.",
        ],
      },
      {
        heading: "2. Vesting Schedule",
        body: [
          "All founder shares vest over 4 years with a 1-year cliff. If a founder leaves within the first year, they retain no shares; after the cliff, shares vest monthly.",
        ],
      },
      {
        heading: "3. Repurchase Right",
        body: [
          "The company holds the right to repurchase unvested shares at nominal value upon a founder's departure for any reason.",
        ],
      },
      {
        heading: "4. IP Assignment",
        body: [
          "Each founder assigns all intellectual property created for the company. Any prior IP is listed in a schedule and licensed to the company royalty-free.",
        ],
      },
      {
        heading: "5. Good Leaver / Bad Leaver",
        body: [
          "Departures without cause retain vested shares. Departures with cause or breach of fiduciary duty result in forfeiture of unvested shares and, at the company's option, repurchase of vested shares at fair value.",
        ],
      },
    ],
  },
  {
    id: "incorporation",
    label: "Incorporation Checklist",
    icon: "clipboard",
    description: "The step-by-step path from idea to legal entity.",
    title: "Incorporation Checklist",
    intro:
      "A practical checklist to incorporate cleanly and avoid expensive fixes later. Order matters — complete it top to bottom.",
    sections: [
      {
        heading: "1. Foundation",
        body: [
          "Choose the jurisdiction and entity type (e.g., Delaware C-Corp for venture-backed startups).",
          "Reserve the company name and check domain/social handle availability.",
          "Decide the initial equity split BEFORE incorporating — amendments are expensive.",
        ],
      },
      {
        heading: "2. Paperwork",
        body: [
          "File the certificate of incorporation and pay the filing fee.",
          "Draft and approve the Bylaws (or Operating Agreement).",
          "Issue founder shares and execute restricted stock purchase agreements with 83(b) elections in the US.",
          "Appoint directors and officers; hold the first board meeting and record minutes.",
        ],
      },
      {
        heading: "3. Operations",
        body: [
          "Open a business bank account and, if accepting equity money, a dedicated cap-table tool.",
          "Register for tax IDs and any sales tax / VAT obligations.",
          "Set up payroll (or contractor onboarding) before the first hire.",
          "Put standard agreements in place: NDA, IP assignment, terms of service, privacy policy.",
        ],
      },
      {
        heading: "4. Raising Capital",
        body: [
          "Prepare a SAFE or priced round documents with a lawyer — never copy from a friend's round.",
          "Run a background check on all new investors (signatures, adverse filings, reputation).",
          "Set up data room: deck, financials, cap table, contracts, IP filings.",
        ],
      },
    ],
  },
  {
    id: "ip",
    label: "IP Protection Guide",
    icon: "lightbulb",
    description: "Protecting your trademarks, patents and trade secrets.",
    title: "IP Protection Guide",
    intro:
      "Intellectual property is often a startup's most valuable asset. This guide covers the four pillars of protection.",
    sections: [
      {
        heading: "1. Trade Secrets",
        body: [
          "Protect source code, algorithms and customer data with NDAs, restricted access, and clear policies.",
          "Document confidential information and limit it on a need-to-know basis.",
          "Trade secrets never expire, but only if you actively guard them.",
        ],
      },
      {
        heading: "2. Trademarks",
        body: [
          "Search existing marks before spending on branding — a conflict is far cheaper to fix early.",
          "File for the name and logo in the classes you operate in.",
          "Use the mark consistently and monitor for infringement.",
        ],
      },
      {
        heading: "3. Patents",
        body: [
          "File provisional patent applications early to lock in a filing date.",
          "Keep detailed invention records (date, who, what).",
          "In most jurisdictions, public disclosure can destroy patent rights — publish nothing before filing.",
        ],
      },
      {
        heading: "4. Copyright & Assignment",
        body: [
          "All founders, employees and contractors must sign IP assignment agreements.",
          "Register key copyrights for the website, branding and marketing material.",
          "Audit third-party code and assets for licensing compliance before shipping.",
        ],
      },
    ],
  },
];
