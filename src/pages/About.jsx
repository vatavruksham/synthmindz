import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle(
    'About',
    "Learn about SynthMindz's mission to bring AI-powered content strategy boards to every marketing team."
  );

  return (
    <div className="py-16 lg:py-24 canvas-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="About SynthMindz"
            title="Content strategy that lives on a board"
            subtitle="We believe every marketing team deserves a clear strategy canvas — pillars, calendars, and briefs — without weeks of workshop overhead."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="glass rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-bold font-display text-ink mb-4">
                Our Story
              </h3>
              <p className="text-ink-soft leading-relaxed mb-4">
                SynthMindz was founded in Austin and San Francisco in 2024 by content
                strategists, marketers, and AI engineers who were tired of strategy
                living in slide decks no one reopened.
              </p>
              <p className="text-ink-soft leading-relaxed mb-4">
                We watched teams spend days facilitating workshops, then lose the
                thread when sticky notes became forgotten photos. Competitor intel
                sat in spreadsheets. Editorial calendars drifted. Briefs were
                reinvented from scratch every sprint.
              </p>
              <p className="text-ink-soft leading-relaxed">
                So we built SynthMindz — an AI content strategy platform that puts
                pillars, calendars, competitor gaps, and SEO briefs on one
                collaborative canvas. Inspired by the energy of a strategy workshop
                wall, designed for teams who ship.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind SynthMindz"
            subtitle="Strategists and builders across Austin and San Francisco, united by a love of clear content systems."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimateOnScroll key={member.id} delay={index * 100}>
              <div className="sticky-note bg-white p-6 text-center h-full hover:-translate-y-1 transition-transform duration-300 border border-surface-200">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary/20"
                  loading="lazy"
                />
                <h4 className="font-semibold font-display text-ink text-lg">
                  {member.name}
                </h4>
                <p className="text-sm text-primary-dark font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
