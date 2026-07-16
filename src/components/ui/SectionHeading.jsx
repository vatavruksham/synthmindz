export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-ink-soft text-lg leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
