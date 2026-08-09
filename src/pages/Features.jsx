import useDocumentTitle from '../hooks/useDocumentTitle';
import features from '../data/features';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Features() {
  useDocumentTitle('Features',
    "Explore SynthMindz's AI content strategy features — strategy builder, competitor intelligence, editorial calendars, content briefs, SEO optimization, and performance analytics."
  );

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Features"
            title="Everything for AI content strategy"
            subtitle="Strategy boards, competitor intel, editorial calendars, and SEO briefs — the full toolkit for teams who plan before they publish."
          />
        </AnimateOnScroll>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.id} delay={100}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-board group border border-surface-200">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 border border-surface-200">
                    <feature.icon className="w-7 h-7 text-primary-dark" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-display text-ink mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-ink-soft text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mt-20 text-center sticky-note bg-sticky-teal/80 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-ink mb-4">
              Ready to see it on the board?
            </h3>
            <p className="text-ink-soft mb-6 max-w-xl mx-auto">
              Try the Strategy Canvas demo — pick an industry and goal, no signup required.
            </p>
            <Button href="/#demo" size="lg" variant="primary">
              Try Strategy Canvas
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
