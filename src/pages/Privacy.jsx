import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function Privacy() {
  useDocumentTitle(
    'Privacy Policy',
    'SynthMindz privacy policy — how we collect, use, and protect your data.'
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="Last updated: January 2026"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="prose prose-neutral max-w-none space-y-6">
            <div className="glass rounded-xl p-8 space-y-6">
              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">1. Information We Collect</h3>
                <p className="text-ink-soft leading-relaxed">
                  We collect information you provide directly, including your name, email address,
                  and payment information when you create an account or subscribe to our services.
                  We also collect usage data about how you interact with SynthMindz, including
                  strategies generated, boards edited, features used, and session duration.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">2. How We Use Your Information</h3>
                <p className="text-ink-soft leading-relaxed">
                  We use your information to provide and improve our AI content strategy services,
                  process payments, send service communications, and enhance our models. We do
                  not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">3. Data Security</h3>
                <p className="text-ink-soft leading-relaxed">
                  We implement industry-standard security measures including encryption in transit
                  and at rest, regular security audits, and strict access controls to protect your
                  data and generated strategy content.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">4. Your Rights</h3>
                <p className="text-ink-soft leading-relaxed">
                  You have the right to access, correct, or delete your personal data at any time.
                  You may also request a copy of all data we hold about you. Contact us at
                  support@synthmindz.com to exercise these rights.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">5. Cookies</h3>
                <p className="text-ink-soft leading-relaxed">
                  We use essential cookies to maintain your session and preferences. Analytics
                  cookies help us understand how visitors use our site. You can manage cookie
                  preferences through your browser settings.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold font-display text-ink mb-3">6. Contact</h3>
                <p className="text-ink-soft leading-relaxed">
                  For privacy-related questions, contact us at support@synthmindz.com.
                </p>
              </section>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
