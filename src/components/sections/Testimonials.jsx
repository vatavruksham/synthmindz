import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '../../data/testimonials';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-surface-50 to-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by Marketing Teams Worldwide"
            subtitle="See why marketers, agencies, and content teams choose SynthMindz for their content strategy."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl mx-auto relative">
            {/* Main testimonial card */}
            <div className="glass rounded-2xl p-8 lg:p-10 text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-lg lg:text-xl text-ink leading-relaxed mb-8 font-medium">
                "{current.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full border-2 border-primary/20"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-semibold text-ink">{current.name}</p>
                  <p className="text-sm text-ink-soft">
                    {current.role}, {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-surface-200 flex items-center justify-center text-ink-soft hover:text-primary-dark hover:border-primary/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-surface-300 hover:bg-primary/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-surface-200 flex items-center justify-center text-ink-soft hover:text-primary-dark hover:border-primary/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
