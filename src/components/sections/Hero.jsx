import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const stickyNotes = [
  { label: 'Pillars', text: 'Thought leadership\nProduct education\nCustomer stories', bg: 'bg-sticky-teal', rotate: '-2deg', delay: '0ms', pos: 'top-[12%] left-[8%] lg:left-[12%]' },
  { label: 'Audience', text: 'CMOs & demand gen\nAgency strategists\nFounder-led brands', bg: 'bg-sticky-coral', rotate: '1.5deg', delay: '120ms', pos: 'top-[18%] right-[6%] lg:right-[14%]' },
  { label: 'Channels', text: 'Blog · LinkedIn\nNewsletter · SEO\nWebinars', bg: 'bg-sticky-sky', rotate: '-1deg', delay: '240ms', pos: 'bottom-[28%] left-[10%] lg:left-[18%]' },
  { label: 'Calendar', text: 'W1 Theme launch\nW2 Deep dives\nW3 Social proof', bg: 'bg-sticky-lemon', rotate: '2deg', delay: '360ms', pos: 'bottom-[22%] right-[8%] lg:right-[16%]' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden canvas-grid min-h-[min(92vh,820px)] flex items-center py-16 lg:py-24">
      {/* Soft atmospheric washes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Full-bleed strategy board sticky notes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {stickyNotes.map((note) => (
          <div
            key={note.label}
            className={`absolute hidden sm:block w-36 lg:w-44 sticky-note ${note.bg} p-3 lg:p-4 opacity-0 animate-sticky-in ${note.pos}`}
            style={{
              '--sticky-rotate': note.rotate,
              animationDelay: note.delay,
              transform: `rotate(${note.rotate})`,
            }}
          >
            <p className="text-[10px] lg:text-xs font-display font-bold uppercase tracking-wider text-ink/60 mb-1.5">
              {note.label}
            </p>
            <p className="text-xs lg:text-sm text-ink-soft leading-snug whitespace-pre-line font-medium">
              {note.text}
            </p>
          </div>
        ))}
        {/* Connecting lines suggestion */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <line x1="22%" y1="28%" x2="78%" y2="32%" stroke="#0f172a" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="25%" y1="68%" x2="75%" y2="72%" stroke="#0f172a" strokeWidth="1" strokeDasharray="6 8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll animation="fadeUp">
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-5">
              SynthMindz
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={80}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-ink leading-tight mb-5">
              Turn every content plan into a growth strategy with AI
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={160}>
            <p className="text-base lg:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto mb-9">
              Build pillars, calendars, competitor gaps, and SEO briefs in one
              strategy board — the workshop wall your team actually ships from.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={240}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/#demo" size="lg" variant="primary">
                AI Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                View Pricing
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
