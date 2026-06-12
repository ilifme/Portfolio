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
  name: 'Alif Fahmi Syaifuddin',
  initials: 'AF',
  role: 'Mahasiswa IT | Universitas Duta Bangsa Surakarta',
  location: 'Surakarta, Indonesia',
  email: 'aliffahmi1500@gmail.com',
  resumeUrl: '/resume.html',
  photoUrl: '/alif.png',
  summary:
    'Mahasiswa IT dengan minat di Pemrograman & Jaringan. Aktif membangun aplikasi web menggunakan Laravel, React, dan Flutter.',
  intro:
    'Mahasiswa Informatika di Universitas Duta Bangsa Surakarta dengan ketertarikan kuat pada Pemrograman Web dan Jaringan. Berpengalaman membangun aplikasi menggunakan Laravel untuk backend, React untuk frontend interaktif, dan Flutter untuk pengembangan mobile. Selalu antusias mengeksplorasi teknologi baru dan menyelesaikan tantangan teknis.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: Code2 },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: BriefcaseBusiness },
    { label: 'Email', href: 'mailto:aliffahmi1500@gmail.com', icon: Mail },
    { label: 'Send brief', href: '#contact', icon: Send },
  ],
};

export const stats: Stat[] = [
  { value: '3+', label: 'Framework dikuasai' },
  { value: '5+', label: 'Project selesai' },
  { value: '2', label: 'Tahun belajar aktif' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Membangun UI modern dengan React, TypeScript, dan Flutter.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Flutter', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & Framework',
    description: 'Membangun aplikasi web berbasis Laravel dengan database terstruktur.',
    skills: ['Laravel', 'PHP', 'Python', 'Database', 'Eloquent'],
  },
  {
    title: 'Jaringan & Tools',
    description: 'Memahami konfigurasi jaringan, routing, dan administrasi perangkat Mikrotik.',
    skills: ['Git', 'Networking', 'Linux', 'Mikrotik'],
  },
];

export const projects: Project[] = [
  {
    title: 'Website Universitas',
    category: 'Website',
    description:
      'Laravel Project.',
    problem:
      'Membutuhkan website untuk menampilkan informasi akademik, berita, dan layanan mahasiswa dengan manajemen konten yang mudah.',
    role: 'Frontend, Backend, dashboard UI',
    outcome: 'Website berbasis Framework Laravel dengan dashboard untuk manajemen konten dan data mahasiswa yang dapat ditambah lewat dashboard admin.',
    techStack: ['Laravel'],
    imageUrl: '/website-univ.png',
    demoUrl: 'https://laravel-production-a4c1.up.railway.app/',
    sourceUrl: 'https://github.com/',
    accent: '#a855f7',
  },
  {
    title: 'Ourecycle',
    category: 'Bank Sampah',
    description:
      'Aplikasi mobile untuk pengelolaan sampah yang efisien dan ramah lingkungan dan mendapatkan point yang dapat dikonversi.',
    problem:
      'Pengelolaan sampah yang efisien dan ramah lingkungan.',
    role: 'Component system, responsive layout, checkout flow',
    outcome: 'Membuat aplikasi mobile yang memudahkan pengelolaan sampah dan memberikan pengalaman pengguna yang baik.',
    techStack: ['Flutter'],
    imageUrl: '/Ourecycle.png',
    demoUrl: '',
    sourceUrl: 'https://github.com/',
    accent: '#7c3aed',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Independent Projects',
    period: '2024 - Present',
    description:
      'Membangun UI React untuk dashboard, landing product, dan workflow tools dengan pendekatan komponen reusable.',
    highlights: [],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '.',
    name: 'Product Collaborator',
    role: 'Internal Review',
  },
];









