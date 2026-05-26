# React Portfolio

Portfolio web berbasis React, TypeScript, dan Vite. Proyek ini mengikuti PRD di [PRD.md](./PRD.md) dan menyertakan section utama untuk hero, about, skills, projects, experience, dan contact.

## Tech Stack

- React
- TypeScript
- Vite
- CSS modules via plain CSS imports
- Lucide React icons

## Scripts

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

Preview build production:

```bash
npm run preview
```

## Struktur Konten

Konten utama berada di:

```text
src/data/portfolio.ts
```

File tersebut mengatur:

- profil utama
- link sosial
- statistik hero
- grup skill
- proyek unggulan
- pengalaman
- testimoni singkat

Visual proyek berada di folder:

```text
public/
```

Ganti SVG preview dengan screenshot final proyek saat aset nyata sudah tersedia.

## Deployment

Build output berada di folder `dist/`, sehingga proyek bisa dideploy ke Vercel, Netlify, Cloudflare Pages, atau static hosting lain.

Untuk Vercel:

1. Import repository.
2. Gunakan build command `npm run build`.
3. Gunakan output directory `dist`.

## Catatan Personalisasi

- Ganti `hello@godul.dev` dengan email aktif.
- Ganti link GitHub dan LinkedIn di `src/data/portfolio.ts`.
- Ganti `public/resume.html` dengan file CV final.
- Ganti link demo dan source code proyek dari `https://example.com/...` ke URL nyata.
