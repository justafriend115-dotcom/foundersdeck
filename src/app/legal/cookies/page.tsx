/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <article className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-semibold prose-a:text-primary prose-strong:text-foreground">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Legal</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective date: September 1, 2026 · Last updated: September 1, 2026</p>
      </div>

      <Section title="1. What Are Cookies">
        <p>Cookies are small text files placed on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time, so you don't have to re-enter information each time you visit.</p>
        <p>We also use similar technologies such as pixels, local storage, and session storage that serve similar functions. This policy covers all such technologies.</p>
      </Section>

      <Section title="2. Cookies We Use">
        <p><strong>Essential cookies (always active)</strong></p>
        <p>These cookies are strictly necessary for the Service to function and cannot be switched off. They are usually set in response to your actions, such as logging in or filling in a form.</p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>fd_session</code></td>
              <td>Authenticates your login session</td>
              <td>Session / 30 days</td>
            </tr>
            <tr>
              <td><code>fd_csrf</code></td>
              <td>Prevents cross-site request forgery attacks</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Analytics cookies (opt-in where required by law)</strong></p>
        <p>These cookies help us understand how visitors interact with the Service, which pages are popular, and how people navigate. The information is aggregated and anonymized.</p>
        <table>
          <thead>
            <tr>
              <th>Cookie / Tool</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>va_*</code></td>
              <td>Vercel Analytics</td>
              <td>Page views and performance metrics — no personal data shared</td>
              <td>Session</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Functional cookies (optional)</strong></p>
        <p>These cookies enable enhanced functionality and personalisation. If you do not allow these cookies, some features may not work correctly.</p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>fd_theme</code></td>
              <td>Remembers your display preferences</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td><code>fd_plan_modal</code></td>
              <td>Tracks whether you have dismissed upgrade prompts</td>
              <td>30 days</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="3. Third-Party Cookies">
        <p>Some of our service providers may also set cookies on your device. These include:</p>
        <ul>
          <li><strong>Stripe</strong> — payment processing. Stripe may set cookies during the checkout flow to prevent fraud. See <a href="https://stripe.com/cookies-policy/legal" target="_blank" rel="noopener noreferrer">Stripe's cookie policy</a>.</li>
        </ul>
        <p>We do not control third-party cookies and recommend reviewing the respective providers' cookie policies for more information.</p>
      </Section>

      <Section title="4. How to Control Cookies">
        <p>You can control cookies in several ways:</p>
        <ul>
          <li><strong>Browser settings:</strong> Most browsers allow you to refuse cookies, delete existing cookies, or be notified when cookies are set. Note that disabling essential cookies will affect the functionality of the Service — you may not be able to log in or use core features.</li>
          <li><strong>Opt-out tools:</strong> For analytics cookies, you can opt out by enabling "Do Not Track" in your browser or by using browser extensions that block analytics trackers.</li>
        </ul>
        <p>Cookie settings vary by browser. Links to instructions for common browsers:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
      </Section>

      <Section title="5. Changes to This Policy">
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or our practices. We will notify you of material changes by posting a notice on the Service.</p>
      </Section>

      <Section title="6. Contact Us">
        <p>For questions about our use of cookies: <a href="mailto:privacy@foundersdeck.co">privacy@foundersdeck.co</a></p>
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
