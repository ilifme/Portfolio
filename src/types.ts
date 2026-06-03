import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Profile = {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  resumeUrl: string;
  summary: string;
  intro: string;
  socials: SocialLink[];
};

export type Stat = {
  value: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  role: string;
  outcome: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  sourceUrl?: string;
  accent: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
