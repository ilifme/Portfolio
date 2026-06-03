import { ArrowUp } from 'lucide-react';
import type { Profile } from '../types';

type FooterProps = {
  profile: Profile;
};

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>2026 {profile.name}. Built with React, TypeScript, and Vite.</p>
      <a className="text-link" href="#top">
        Back to top <ArrowUp aria-hidden="true" size={16} />
      </a>
    </footer>
  );
}
