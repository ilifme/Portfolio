import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import type { NavItem, Profile } from '../types';

type HeaderProps = {
  navItems: NavItem[];
  profile: Profile;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Header({ navItems, profile, theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <a className="brand-mark" href="#top" aria-label={`${profile.name} home`} onClick={closeMenu}>
          <span className="brand-initials" aria-hidden="true">
            {profile.initials}
          </span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="icon-link resume-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <Download aria-hidden="true" size={17} />
            <span>Resume</span>
          </a>
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={isOpen ? 'mobile-nav is-open' : 'mobile-nav'}
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Resume
        </a>
      </nav>
    </header>
  );
}
