import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function Terms() {
  useDocumentTitle('Terms of Service',
    'SynthMindz terms of service — usage guidelines and service agreement.'
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Service"
            subtitle="Last updated: January 2026"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="glass rounded-xl p-8 space-y-6">
            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">1. Acceptance of Terms</h3>
              <p className="text-ink-soft leading-relaxed">
                By accessing or using SynthMindz, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">2. Service Description</h3>
              <p className="text-ink-soft leading-relaxed">
                SynthMindz provides AI-powered content strategy tools including strategy boards,
                editorial calendars, competitor intelligence, and content briefs. We reserve the
                right to modify, suspend, or discontinue any aspect of the service at any time
                with reasonable notice.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">3. User Accounts</h3>
              <p className="text-ink-soft leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities under your account. You must provide accurate information
                during registration.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">4. Content Ownership</h3>
              <p className="text-ink-soft leading-relaxed">
                All strategies, calendars, and briefs generated through SynthMindz are your
                property. You retain full commercial rights to use, modify, and distribute
                generated content. We do not claim ownership of your generated strategies.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">5. Acceptable Use</h3>
              <p className="text-ink-soft leading-relaxed">
                You agree not to use SynthMindz to generate content that is illegal, harmful,
                defamatory, or infringes on intellectual property rights. We reserve the right
                to suspend accounts that violate these guidelines.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">6. Payment & Refunds</h3>
              <p className="text-ink-soft leading-relaxed">
                Subscriptions are billed monthly. You may cancel at any time and retain access
                through the end of your billing period. Refund requests within 14 days of
                purchase are honored per our satisfaction guarantee.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">7. Limitation of Liability</h3>
              <p className="text-ink-soft leading-relaxed">
                SynthMindz is provided &quot;as is&quot; without warranties of any kind. We are not liable
                for any indirect, incidental, or consequential damages arising from your use of
                the service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold font-display text-ink mb-3">8. Contact</h3>
              <p className="text-ink-soft leading-relaxed">
                For questions about these terms, contact us at support@synthmindz.com.
              </p>
            </section>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
