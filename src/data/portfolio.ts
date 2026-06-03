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
  name: 'Alif',
  initials: 'AF',
  role: 'Laravel & React Developer',
  location: 'Indonesia, UTC+7',
  email: 'hello@alif.dev',
  resumeUrl: '/resume.html',
  summary:
    'Saya membuat website dengan Laravel dan React, mulai dari tampilan, fitur, sampai pengelolaan data.',
  intro:
    'Saya adalah web developer yang suka membangun website yang jelas, mudah digunakan, dan sesuai kebutuhan. Saat ini saya fokus mengerjakan project berbasis Laravel untuk backend serta React untuk frontend, dengan perhatian pada struktur kode, tampilan responsive, dan alur pengguna yang sederhana.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: Code2 },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
    { label: 'Email', href: 'mailto:hello@alif.dev', icon: Mail },
    { label: 'Send brief', href: '#contact', icon: Send },
  ],
};

export const stats: Stat[] = [
  { value: '2', label: 'Featured projects' },
  { value: 'Laravel', label: 'Backend focus' },
  { value: 'React', label: 'Frontend focus' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Laravel',
    description: 'Membangun fitur backend, routing, autentikasi, dan pengelolaan data untuk aplikasi web.',
    skills: ['Laravel', 'PHP', 'Blade', 'MySQL', 'REST API', 'Authentication'],
  },
  {
    title: 'React',
    description: 'Membuat antarmuka yang responsive, reusable, dan nyaman digunakan di berbagai perangkat.',
    skills: ['React', 'TypeScript', 'Vite', 'Component UI', 'State Handling', 'Responsive CSS'],
  },
  {
    title: 'Workflow',
    description: 'Menjaga project tetap rapi dari development lokal sampai proses deploy.',
    skills: ['Git', 'NPM', 'ESLint', 'Build Check', 'Vercel', 'Documentation'],
  },
];

export const projects: Project[] = [
  {
    title: 'Website Univ',
    category: 'Laravel Website',
    description:
      'Website kampus berbasis Laravel untuk menampilkan informasi universitas, halaman profil, berita, dan konten akademik secara lebih tertata.',
    problem:
      'Informasi kampus perlu disusun dalam halaman yang mudah dibaca, mudah diperbarui, dan nyaman diakses oleh calon mahasiswa maupun pengunjung umum.',
    role: 'Membangun struktur halaman, layout responsive, dan integrasi konten menggunakan Laravel.',
    outcome: 'Website menjadi lebih rapi sebagai pusat informasi kampus dengan navigasi yang sederhana dan tampilan yang konsisten.',
    techStack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'HTML', 'CSS'],
    imageUrl: '/website-univ.png',
    accent: '#0d705c',
  },
  {
    title: 'Ourecycle',
    category: 'Laravel & React App',
    description:
      'Aplikasi web bertema daur ulang yang membantu pengguna melihat informasi program, aktivitas, dan pengelolaan data recycle dalam satu platform.',
    problem:
      'Data dan informasi kegiatan recycle perlu ditampilkan dengan alur yang mudah dipahami, sekaligus tetap bisa dikelola melalui sistem web.',
    role: 'Mengerjakan tampilan React, struktur fitur, dan integrasi dengan backend Laravel.',
    outcome: 'Platform lebih mudah digunakan untuk memperkenalkan program recycle dan mengelola informasi yang dibutuhkan pengguna.',
    techStack: ['Laravel', 'React', 'PHP', 'TypeScript', 'MySQL', 'Responsive UI'],
    imageUrl: '/ourecycle.svg',
    accent: '#b8563a',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Laravel & React Developer',
    company: 'Independent Projects',
    period: '2024 - Present',
    description:
      'Mengerjakan project website dengan Laravel dan React, mulai dari struktur halaman, fitur utama, sampai tampilan responsive.',
    highlights: [
      'Membuat halaman dan fitur yang mudah dipahami oleh pengguna.',
      'Menjaga struktur kode dan tampilan agar tetap rapi saat project berkembang.',
    ],
  },
  {
    role: 'Web Project Builder',
    company: 'Product Experiments',
    period: '2023 - 2024',
    description:
      'Membuat prototipe dan halaman web untuk kebutuhan project kecil, latihan, dan pengembangan fitur.',
    highlights: [
      'Mengerjakan layout, form, navigasi, dan tampilan konten.',
      'Membiasakan proses cek ulang sebelum build atau deploy.',
    ],
  },
  {
    role: 'Web Development Learner',
    company: 'Personal Lab',
    period: '2022 - 2023',
    description:
      'Mendalami dasar pengembangan web melalui project kecil, dokumentasi, dan eksperimen Laravel serta React.',
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
