import useScrollAnimation from '../../hooks/useScrollAnimation';

const animations = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-5',
    visible: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  slideLeft: {
    hidden: 'opacity-0 -translate-x-5',
    visible: 'opacity-100 translate-x-0',
  },
  slideRight: {
    hidden: 'opacity-0 translate-x-5',
    visible: 'opacity-100 translate-x-0',
  },
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
}) {
  const { ref, isVisible } = useScrollAnimation();
  const anim = animations[animation] || animations.fadeUp;

  // Respect prefers-reduced-motion: render children immediately, no animation
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? anim.visible : anim.hidden
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
