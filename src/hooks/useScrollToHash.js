import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to a hash target (#demo, #how-it-works). Retries until the element
 * exists (lazy routes / page transitions).
 */
export function scrollToHash(hash, { behavior = 'smooth', attempts = 40, interval = 50 } = {}) {
  if (!hash) return () => {};

  const selector = hash.startsWith('#') ? hash : `#${hash}`;
  let cancelled = false;
  let tries = 0;

  const run = () => {
    if (cancelled) return;
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' });
      return;
    }
    if (tries < attempts) {
      tries += 1;
      setTimeout(run, interval);
    }
  };

  const id = requestAnimationFrame(() => setTimeout(run, 50));
  return () => {
    cancelled = true;
    cancelAnimationFrame(id);
  };
}

/**
 * When already on the same path+hash, React Router won't re-navigate.
 * Call this from Link onClick so "Try Demo" always scrolls.
 */
export function handleHashLinkClick(event, to, location) {
  const hashIndex = to.indexOf('#');
  if (hashIndex === -1) return;

  const path = to.slice(0, hashIndex) || '/';
  const hash = to.slice(hashIndex);
  const samePath = location.pathname === path;

  if (samePath && location.hash === hash) {
    event.preventDefault();
    scrollToHash(hash);
  }
}

/**
 * Scroll to in-page hash targets after React Router navigation.
 */
export default function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;
    return scrollToHash(location.hash);
  }, [location.pathname, location.hash, location.key]);
}
