export default function Card({ children, className = '', hover = false }) {
  const baseClasses =
    'bg-white border border-surface-200 rounded-xl p-6 shadow-card transition-all duration-300';

  const hoverClasses = hover
    ? 'hover:scale-[1.02] hover:shadow-card-hover hover:border-primary/30'
    : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
