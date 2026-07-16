import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid, Target, Calendar } from 'lucide-react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

const teaserFeatures = [
  {
    icon: LayoutGrid,
    title: 'AI Strategy Builder',
    description: 'Generate full content strategies on a shared canvas — pillars, themes, and channel mix in minutes.',
    sticky: 'bg-sticky-teal',
    rotate: '-1deg',
  },
  {
    icon: Target,
    title: 'Competitor Intelligence',
    description: 'Spot content gaps and over-indexed themes. Pin opportunities as sticky notes your team can act on.',
    sticky: 'bg-sticky-coral',
    rotate: '1deg',
  },
  {
    icon: Calendar,
    title: 'Editorial Calendar',
    description: 'AI-mapped publishing themes and seasonal opportunities aligned to your audience patterns.',
    sticky: 'bg-sticky-lemon',
    rotate: '-0.5deg',
  },
];

export default function FeaturesTeaser() {
  return (
    <section className="py-20 canvas-grid border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Features"
            title="Your strategy workshop, always on"
            subtitle="From competitive analysis to full campaign boards — SynthMindz handles the heavy lifting so your team can execute."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {teaserFeatures.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 100}>
              <div
                className={`sticky-note ${feature.sticky} p-6 h-full hover:-translate-y-1 transition-transform duration-300`}
                style={{ transform: `rotate(${feature.rotate})` }}
              >
                <div className="w-11 h-11 rounded-md bg-white/70 flex items-center justify-center mb-4 border border-black/5">
                  <feature.icon className="w-5 h-5 text-primary-dark" />
                </div>
                <h3 className="text-lg font-semibold font-display text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <div className="text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all duration-300"
            >
              Explore All Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
