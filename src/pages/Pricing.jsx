import { useState } from 'react';
import { Check, ChevronDown, Shield } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import pricing, { faqs, comparisonFeatures } from '../data/pricing';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-surface-200 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface-50 transition-colors"
      >
        <span className="font-semibold text-ink pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-ink-soft shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-ink-soft leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  useDocumentTitle('Pricing',
    'SynthMindz pricing plans — Starter, Growth, and Agency tiers for AI content strategy teams.'
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing for strategy teams"
            subtitle="Choose the plan that fits your content strategy workflow. No hidden fees, cancel anytime."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pricing.map((plan, index) => (
            <AnimateOnScroll key={plan.id} delay={index * 100}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-primary/5 to-accent/5 border-2 border-primary shadow-card-hover'
                    : 'glass'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold font-display text-ink mb-2">
                  {plan.name}
                </h3>
                <p className="text-ink-soft text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold font-display text-ink">
                    ${plan.price}
                  </span>
                  <span className="text-ink-soft">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-soft">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/login"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  BUY NOW
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto mb-20">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold font-display text-ink mb-3">
              14-Day Satisfaction Guarantee
            </h3>
            <p className="text-ink-soft leading-relaxed">
              Not happy with SynthMindz? Get a full refund within 14 days — no
              questions asked. All plans include full commercial usage rights for
              every strategy, calendar, and brief you generate.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mb-20">
            <h3 className="text-2xl font-bold font-display text-ink text-center mb-8">
              Feature Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-ink">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-ink">
                      Starter
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-primary-dark">
                      Growth
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-ink">
                      Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-surface-200 ${
                        i % 2 === 0 ? 'bg-surface-50/50' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-sm text-ink">
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 text-sm text-ink-soft text-center">
                        {row.starter}
                      </td>
                      <td className="py-3 px-4 text-sm text-ink text-center font-medium">
                        {row.growth}
                      </td>
                      <td className="py-3 px-4 text-sm text-ink-soft text-center">
                        {row.agency}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-ink text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
