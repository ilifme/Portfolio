import { ArrowDown, Download, MapPin, Sparkles } from 'lucide-react';
import type { Profile, Stat } from '../types';

type HeroProps = {
  profile: Profile;
  stats: Stat[];
};

export function Hero({ profile, stats }: HeroProps) {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">
          <Sparkles aria-hidden="true" size={16} /> Portfolio 2026
        </p>
        <h1 id="hero-title">
          {profile.name} builds polished React interfaces.
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Mulai diskusi <ArrowDown aria-hidden="true" size={18} />
          </a>
          <a className="secondary-button" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            <Download aria-hidden="true" size={18} /> Resume
          </a>
        </div>
        <div className="hero-meta" aria-label="Profile quick facts">
          <span>
            <MapPin aria-hidden="true" size={17} /> {profile.location}
          </span>
          <span>{profile.email}</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio capability snapshot">
        <div className="profile-orbit" aria-hidden="true">
          <span>{profile.initials}</span>
        </div>
        <div className="signal-panel">
          <div className="signal-header">
            <span>Current focus</span>
            <strong>React product UI</strong>
          </div>
          <div className="signal-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="workflow-list">
            <span>Discovery</span>
            <span>Component system</span>
            <span>Responsive QA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
