import { BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react';
import type { ExperienceItem, NavItem, Profile, Project, SkillGroup, Stat, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const profile: Profile = {
  name: 'Godul',
  initials: 'GD',
  role: 'React Frontend Developer',
  location: 'Indonesia, UTC+7',
  email: 'hello@godul.dev',
  resumeUrl: '/resume.html',
  summary:
    'Saya membangun antarmuka web yang cepat, rapi, dan mudah dipakai untuk produk digital modern.',
  intro:
    'Fokus saya ada di React, desain sistem ringan, aksesibilitas, dan pengalaman pengguna yang terasa stabil di perangkat mobile maupun desktop. Saya senang merapikan kebutuhan produk menjadi komponen yang konsisten, mudah diuji, dan nyaman dikembangkan lagi.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: Code2 },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
    { label: 'Email', href: 'mailto:hello@godul.dev', icon: Mail },
    { label: 'Send brief', href: '#contact', icon: Send },
  ],
};

export const stats: Stat[] = [
  { value: '12+', label: 'UI modules shipped' },
  { value: '90+', label: 'Lighthouse target' },
  { value: '3', label: 'Featured case studies' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Membangun UI modular dengan state yang jelas dan performa yang terukur.',
    skills: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Product UI',
    description: 'Merapikan alur kerja pengguna dari wireframe sampai interaksi final.',
    skills: ['Design Systems', 'Accessibility', 'UX Writing', 'Prototyping', 'Microinteractions'],
  },
  {
    title: 'Delivery',
    description: 'Menjaga proyek tetap siap deploy, mudah dicek, dan gampang dikembangkan.',
    skills: ['Git', 'ESLint', 'Performance QA', 'Vercel', 'Documentation'],
  },
];

export const projects: Project[] = [
  {
    title: 'TalentFlow Dashboard',
    category: 'SaaS Operations',
    description:
      'Dashboard rekrutmen untuk membantu tim melihat pipeline kandidat, SLA review, dan prioritas interview.',
    problem:
      'Tim perlu memantau kandidat aktif tanpa berpindah antar spreadsheet, chat, dan kalender.',
    role: 'Frontend architecture, dashboard UI, data-state modeling',
    outcome: 'Mengurangi waktu scan pipeline dan membuat status kandidat lebih mudah dibandingkan.',
    techStack: ['React', 'TypeScript', 'CSS Grid', 'Charts'],
    imageUrl: '/project-talentflow.svg',
    demoUrl: 'https://example.com/talentflow',
    sourceUrl: 'https://github.com/',
    accent: '#0d705c',
  },
  {
    title: 'Atlas Commerce UI',
    category: 'E-commerce',
    description:
      'Interface katalog dan checkout untuk storefront kecil dengan fokus pada kecepatan pilih produk.',
    problem:
      'Pembeli mobile butuh alur produk, varian, dan ringkasan order yang tetap jelas di layar kecil.',
    role: 'Component system, responsive layout, checkout flow',
    outcome: 'Membuat katalog lebih mudah dipindai dan ringkasan checkout tetap terlihat tanpa mengganggu fokus.',
    techStack: ['React', 'Vite', 'Local State', 'Responsive CSS'],
    imageUrl: '/project-commerce.svg',
    demoUrl: 'https://example.com/atlas-commerce',
    sourceUrl: 'https://github.com/',
    accent: '#b8563a',
  },
  {
    title: 'Pulse Analytics Studio',
    category: 'Data Product',
    description:
      'Workspace analitik untuk merangkum metrik kampanye, tren mingguan, dan insight prioritas.',
    problem:
      'Stakeholder perlu membaca metrik penting tanpa membuka banyak laporan terpisah.',
    role: 'Information design, card patterns, interaction states',
    outcome: 'Menyatukan metrik, tren, dan catatan keputusan dalam satu layar kerja yang padat.',
    techStack: ['React', 'TypeScript', 'Data Viz', 'A11y'],
    imageUrl: '/project-pulse.svg',
    demoUrl: 'https://example.com/pulse-analytics',
    sourceUrl: 'https://github.com/',
    accent: '#2b5f93',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Independent Projects',
    period: '2024 - Present',
    description:
      'Membangun UI React untuk dashboard, landing product, dan workflow tools dengan pendekatan komponen reusable.',
    highlights: [
      'Menyusun struktur data konten agar portfolio dan product pages mudah diperbarui.',
      'Mengoptimasi layout responsive untuk mobile-first review dan desktop productivity.',
    ],
  },
  {
    role: 'UI Implementation Lead',
    company: 'Product Experiments',
    period: '2023 - 2024',
    description:
      'Menerjemahkan kebutuhan produk menjadi prototipe frontend yang bisa diuji cepat oleh pengguna internal.',
    highlights: [
      'Membuat komponen navigasi, card, form, dan feedback state yang konsisten.',
      'Menyiapkan checklist aksesibilitas dasar untuk form, focus state, dan semantic sections.',
    ],
  },
  {
    role: 'Web Development Learner',
    company: 'Personal Lab',
    period: '2022 - 2023',
    description:
      'Mendalami fondasi web modern melalui proyek kecil, dokumentasi teknis, dan eksperimen UI.',
    highlights: [
      'Membiasakan penggunaan Git, TypeScript, linting, dan build verification.',
      'Membangun kebiasaan dokumentasi agar keputusan teknis mudah dilacak.',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ia punya cara kerja yang tenang dan detail. UI yang dikirim terasa siap dipakai, bukan sekadar tampilan cantik.',
    name: 'Product Collaborator',
    role: 'Internal Review',
  },
];
