import { Search, LayoutGrid, FileText, LineChart } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description: 'Map audience, competitors, and search demand onto your shared strategy board.',
    sticky: 'bg-sticky-sky',
  },
  {
    icon: LayoutGrid,
    step: '02',
    title: 'Strategize',
    description: 'AI proposes pillars, channel mix, and themes — rearrange sticky notes as a team.',
    sticky: 'bg-sticky-teal',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Brief',
    description: 'Turn approved themes into SEO-ready briefs your writers can ship from.',
    sticky: 'bg-sticky-coral',
  },
  {
    icon: LineChart,
    step: '04',
    title: 'Measure',
    description: 'Track performance and feed learnings back into the next board cycle.',
    sticky: 'bg-sticky-lemon',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="How It Works"
            title="Four columns on one board"
            subtitle="Discover → Strategize → Brief → Measure. SynthMindz mirrors the workshop wall your content team already uses — powered by AI."
          />
        </AnimateOnScroll>

        <div className="relative">
          {/* Connector line between columns */}
          <div
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-surface-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={index * 100}>
                <div
                  className={`relative sticky-note ${step.sticky} p-5 h-full opacity-0 animate-sticky-in`}
                  style={{
                    '--sticky-rotate': index % 2 === 0 ? '-0.8deg' : '0.8deg',
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-ink text-white text-xs font-display font-bold">
                      {step.step}
                    </span>
                    <step.icon className="w-5 h-5 text-ink/70" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
