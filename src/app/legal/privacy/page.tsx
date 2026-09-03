/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary prose-strong:text-foreground">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Legal</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: September 1, 2026 · Last updated: September 1, 2026</p>
      </div>

      <Section title="1. Who We Are">
        <p>FoundersDeck ("we," "us," or "our") operates the FoundersDeck platform (the "Service") at <a href="https://foundersdeck.co">foundersdeck.co</a>. We are the data controller of personal information collected through the Service.</p>
        <p>Questions about this Privacy Policy? Contact our privacy team at <a href="mailto:privacy@foundersdeck.co">privacy@foundersdeck.co</a>.</p>
      </Section>

      <Section title="2. Information We Collect">
        <p><strong>Information you provide directly:</strong></p>
        <ul>
          <li><strong>Account information:</strong> name, email address, password (hashed), company name, and any other information you provide during registration.</li>
          <li><strong>Profile and content:</strong> pitch deck content, business plan drafts, financial projections, investor notes, legal document data, and other content you create using the Service.</li>
          <li><strong>Payment information:</strong> billing address and payment method details. Payment card numbers are processed directly by our payment processor (Stripe) and are not stored on our servers.</li>
          <li><strong>Communications:</strong> messages you send us via email or support channels.</li>
        </ul>
        <p><strong>Information collected automatically:</strong></p>
        <ul>
          <li><strong>Usage data:</strong> pages visited, features used, actions taken, session duration, and interaction patterns within the Service.</li>
          <li><strong>Device and log data:</strong> IP address, browser type and version, operating system, referring URLs, and timestamps.</li>
          <li><strong>Cookies and similar technologies:</strong> session identifiers, authentication tokens, and analytics cookies as described in our <a href="/legal/cookies">Cookie Policy</a>.</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use your information to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Service;</li>
          <li>Process payments and manage your subscription;</li>
          <li>Authenticate your identity and maintain account security;</li>
          <li>Respond to your requests, inquiries, and support issues;</li>
          <li>Send transactional emails (account confirmation, password reset, billing receipts);</li>
          <li>Send product updates, feature announcements, and promotional communications — you may opt out at any time via the unsubscribe link in any such email;</li>
          <li>Analyse usage patterns to improve the Service, develop new features, and understand user needs;</li>
          <li>Detect and prevent fraud, abuse, and security incidents;</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p><strong>We do not use your pitch deck content, business plan data, or investor information to train AI models, sell to third parties, or disclose to investors or competitors.</strong></p>
      </Section>

      <Section title="4. Legal Bases for Processing (GDPR)">
        <p>If you are located in the European Economic Area (EEA) or the United Kingdom, we process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Contract performance:</strong> to provide the Service you have subscribed to;</li>
          <li><strong>Legitimate interests:</strong> for fraud prevention, security, analytics, and product improvement;</li>
          <li><strong>Legal obligation:</strong> to comply with applicable laws;</li>
          <li><strong>Consent:</strong> for marketing communications and non-essential cookies.</li>
        </ul>
      </Section>

      <Section title="5. Information Sharing">
        <p>We do not sell your personal information. We share your information only in the following circumstances:</p>
        <ul>
          <li><strong>Service providers:</strong> trusted third-party vendors who assist us in operating the Service (e.g., Stripe for payments, Vercel for hosting and analytics, Anthropic or similar for AI model inference, Resend for transactional email). These vendors are contractually obligated to process your data only on our instructions and in accordance with applicable data protection law.</li>
          <li><strong>Business transfers:</strong> in connection with a merger, acquisition, financing, or sale of assets, your information may be transferred to a successor entity, subject to the same protections.</li>
          <li><strong>Legal requirements:</strong> we may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect rights, property, or safety.</li>
          <li><strong>With your consent:</strong> in other circumstances where you have given explicit consent.</li>
        </ul>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain your personal information for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymize your personal data within 90 days, except where we are required to retain it for legal, tax, or accounting purposes.</p>
        <p>Content you create using the Service (pitch decks, business plans, etc.) is retained for 30 days after account deletion before permanent removal.</p>
      </Section>

      <Section title="7. International Data Transfers">
        <p>Your information may be processed and stored outside of Canada, including in the United States. When we transfer personal data from the EEA or UK, we rely on appropriate safeguards such as Standard Contractual Clauses approved by the European Commission.</p>
      </Section>

      <Section title="8. Your Rights">
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> request a copy of the personal data we hold about you;</li>
          <li><strong>Correction:</strong> request correction of inaccurate or incomplete data;</li>
          <li><strong>Deletion:</strong> request deletion of your personal data ("right to be forgotten");</li>
          <li><strong>Portability:</strong> request your data in a structured, machine-readable format;</li>
          <li><strong>Restriction:</strong> request that we restrict processing of your data in certain circumstances;</li>
          <li><strong>Objection:</strong> object to processing based on legitimate interests;</li>
          <li><strong>Withdrawal of consent:</strong> where processing is based on consent, withdraw it at any time.</li>
        </ul>
        <p><strong>California residents (CCPA):</strong> You have the right to know what personal information is collected, the right to delete, the right to opt out of sale (we do not sell data), and the right to non-discrimination for exercising these rights.</p>
        <p>To exercise any of these rights, contact us at <a href="mailto:privacy@foundersdeck.co">privacy@foundersdeck.co</a>. We will respond within 30 days. You may also lodge a complaint with your local data protection authority.</p>
      </Section>

      <Section title="9. Security">
        <p>We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (TLS), encrypted storage of sensitive data, and access controls limited to personnel who need the information.</p>
        <p>No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security. If you believe your account has been compromised, contact us immediately at <a href="mailto:security@foundersdeck.co">security@foundersdeck.co</a>.</p>
      </Section>

      <Section title="10. Children's Privacy">
        <p>The Service is not directed to children under 18 years of age, and we do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly. If you believe we have collected information from a child under 18, contact us at <a href="mailto:privacy@foundersdeck.co">privacy@foundersdeck.co</a>.</p>
      </Section>

      <Section title="11. Cookies">
        <p>We use cookies and similar tracking technologies. See our <a href="/legal/cookies">Cookie Policy</a> for full details, including how to control or opt out of cookies.</p>
      </Section>

      <Section title="12. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Privacy Policy.</p>
      </Section>

      <Section title="13. Contact Us">
        <p>For questions, concerns, or to exercise your privacy rights:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@foundersdeck.co">privacy@foundersdeck.co</a></li>
          <li>Mail: FoundersDeck Privacy Team, Toronto, Ontario, Canada</li>
        </ul>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
