/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Data Processing Agreement" };

export default function DpaPage() {
  return (
    <article className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary prose-strong:text-foreground">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Legal</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Data Processing Agreement
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: September 1, 2026 · Last updated: September 1, 2026</p>
        <div className="mt-4 rounded-xl border border-border bg-secondary p-4 text-sm">
          <strong className="text-foreground">Who this applies to:</strong> This Data Processing Agreement ("DPA") is entered into between FoundersDeck ("Processor") and the organization subscribing to the Accelerator plan ("Controller"). For individual Pro or Free users who are not acting in a business capacity subject to GDPR, this DPA does not apply — our <a href="/legal/privacy">Privacy Policy</a> governs that relationship instead. To execute a signed DPA, contact <a href="mailto:legal@foundersdeck.co">legal@foundersdeck.co</a>.
        </div>
      </div>

      <Section title="1. Definitions">
        <p>In this DPA, the following terms have the meanings given below:</p>
        <ul>
          <li><strong>"Controller"</strong> means the entity that determines the purposes and means of processing Personal Data.</li>
          <li><strong>"Processor"</strong> means FoundersDeck, which processes Personal Data on behalf of the Controller.</li>
          <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person uploaded by the Controller or its Authorized Users to the Service.</li>
          <li><strong>"Processing"</strong> has the meaning given in the GDPR.</li>
          <li><strong>"GDPR"</strong> means the General Data Protection Regulation (EU) 2016/679 and, where applicable, the UK GDPR.</li>
          <li><strong>"Services"</strong> means the FoundersDeck platform and related services as described in the Terms of Service.</li>
          <li><strong>"Sub-processor"</strong> means any third party engaged by FoundersDeck to process Personal Data.</li>
        </ul>
      </Section>

      <Section title="2. Scope and Nature of Processing">
        <p>FoundersDeck processes Personal Data only to the extent necessary to provide the Services under the Terms of Service and only on documented instructions from the Controller. The subject matter, nature, purpose, and duration of processing are:</p>
        <ul>
          <li><strong>Subject matter:</strong> Personal Data of the Controller's employees, contractors, and cohort participants uploaded to or generated within the Service.</li>
          <li><strong>Nature:</strong> storage, retrieval, display, and deletion of Personal Data in connection with the provision of the Service.</li>
          <li><strong>Purpose:</strong> enabling the Controller and its Authorized Users to use the Service features (pitch deck generation, business plan creation, investor CRM, etc.).</li>
          <li><strong>Duration:</strong> for the term of the subscription, plus any retention period required by applicable law or the Controller's instructions.</li>
          <li><strong>Categories of data subjects:</strong> the Controller's employees, contractors, and end users of the Service.</li>
          <li><strong>Types of Personal Data:</strong> names, email addresses, professional information, and any other data the Controller chooses to input into the Service.</li>
        </ul>
      </Section>

      <Section title="3. Controller Obligations">
        <p>The Controller represents and warrants that:</p>
        <ul>
          <li>It has a lawful basis for providing Personal Data to FoundersDeck for processing;</li>
          <li>It has provided all required notices to, and obtained all required consents from, data subjects;</li>
          <li>Its instructions to FoundersDeck regarding processing comply with applicable data protection law;</li>
          <li>It will not instruct FoundersDeck to process Personal Data in a manner that violates applicable law.</li>
        </ul>
      </Section>

      <Section title="4. Processor Obligations">
        <p>FoundersDeck agrees to:</p>
        <ul>
          <li>Process Personal Data only on the Controller's documented instructions and not for any other purpose;</li>
          <li>Ensure that personnel authorized to process Personal Data are subject to confidentiality obligations;</li>
          <li>Implement appropriate technical and organizational security measures pursuant to Article 32 of the GDPR, including encryption in transit (TLS 1.2+), encryption at rest, access controls, and regular security assessments;</li>
          <li>Assist the Controller in fulfilling its obligations to respond to data subject requests (access, rectification, erasure, restriction, portability, and objection) within commercially reasonable timeframes;</li>
          <li>Notify the Controller without undue delay (and in any case within 72 hours) after becoming aware of a Personal Data breach affecting the Controller's data;</li>
          <li>Assist the Controller, upon request, with Data Protection Impact Assessments (DPIAs) where required by GDPR Article 35;</li>
          <li>Delete or return Personal Data upon termination of the Services, at the Controller's choice, within 90 days, except where retention is required by applicable law;</li>
          <li>Make available to the Controller information reasonably necessary to demonstrate compliance with this DPA, and allow for and contribute to audits and inspections by the Controller or its designated auditor (subject to reasonable notice and confidentiality obligations).</li>
        </ul>
      </Section>

      <Section title="5. Sub-processors">
        <p>The Controller authorizes FoundersDeck to engage the following sub-processors:</p>
        <table>
          <thead>
            <tr>
              <th>Sub-processor</th>
              <th>Purpose</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vercel Inc.</td>
              <td>Hosting and infrastructure</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Stripe Inc.</td>
              <td>Payment processing</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Anthropic PBC</td>
              <td>AI model inference</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Resend Inc.</td>
              <td>Transactional email delivery</td>
              <td>United States</td>
            </tr>
          </tbody>
        </table>
        <p>FoundersDeck will: (a) impose data protection obligations on each sub-processor equivalent to those in this DPA; and (b) notify the Controller of any intended additions or replacements of sub-processors, giving the Controller reasonable opportunity to object. The Controller's continued use of the Service after receiving such notice constitutes acceptance of the new sub-processor.</p>
      </Section>

      <Section title="6. International Data Transfers">
        <p>Where Personal Data is transferred outside of the EEA or UK, FoundersDeck relies on:</p>
        <ul>
          <li>Standard Contractual Clauses (SCCs) adopted by the European Commission (Controller-to-Processor module), incorporated herein by reference; or</li>
          <li>Another approved transfer mechanism under Chapter V of the GDPR.</li>
        </ul>
        <p>Copies of the applicable SCCs are available upon request at <a href="mailto:legal@foundersdeck.co">legal@foundersdeck.co</a>.</p>
      </Section>

      <Section title="7. Liability">
        <p>Each party's liability under this DPA is subject to the liability limitations set out in the Terms of Service. Nothing in this DPA limits a party's liability for breaches of data protection law where such limitation is not permitted.</p>
      </Section>

      <Section title="8. Governing Law">
        <p>This DPA is governed by the laws of the Province of Ontario and the federal laws of Canada, unless the parties have agreed otherwise in a separately executed agreement.</p>
      </Section>

      <Section title="9. Order of Precedence">
        <p>In the event of a conflict between this DPA and the Terms of Service regarding the processing of Personal Data, this DPA prevails to the extent of such conflict.</p>
      </Section>

      <Section title="10. Contact">
        <p>To execute a signed DPA or for questions: <a href="mailto:legal@foundersdeck.co">legal@foundersdeck.co</a></p>
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
