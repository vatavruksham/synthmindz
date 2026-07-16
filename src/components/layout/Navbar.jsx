import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import HashLink from '../ui/HashLink';

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/#demo', label: 'Try AI Demo', hash: true },
  { to: '/#how-it-works', label: 'How It Works', hash: true },
  { to: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary-dark' : 'text-ink-soft hover:text-primary-dark'
    }`;

  const hashActive = (to) => location.pathname === '/' && location.hash === to.slice(to.indexOf('#'));

  return (
    <header className="sticky top-0 z-50 border-b border-surface-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            link.hash ? (
              <HashLink
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 ${
                  hashActive(link.to) ? 'text-primary-dark' : 'text-ink-soft hover:text-primary-dark'
                }`}
              >
                {link.label}
              </HashLink>
            ) : (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            )
          )}
          <NavLink
            to="/login"
            className="btn-glow rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
          >
            Login
          </NavLink>
        </div>

        <button
          className="p-2 text-ink-soft hover:text-primary md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 z-[100] flex w-72 flex-col border-l border-surface-200 bg-[#ffffff] p-6 shadow-2xl"
            style={{ backgroundColor: '#ffffff' }}
          >
            <button
              className="mb-6 self-end p-2 text-ink-soft hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.hash ? (
                  <HashLink
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium transition-colors ${
                      hashActive(link.to) ? 'text-primary-dark' : 'text-ink-soft hover:text-primary-dark'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </HashLink>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={linkClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/login"
                className="mt-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-4 py-2 text-center font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
