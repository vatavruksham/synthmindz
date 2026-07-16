import { Link, useLocation } from 'react-router-dom';
import { handleHashLinkClick } from '../../hooks/useScrollToHash';

/**
 * Link that always scrolls to hash targets — even when already on that URL.
 */
export default function HashLink({ to, children, className = '', onClick, ...props }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={className}
      onClick={(e) => {
        handleHashLinkClick(e, to, location);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
