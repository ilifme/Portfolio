# Product Requirements Document: React Portfolio Website

## 1. Ringkasan Produk

Web portofolio ini adalah situs personal untuk menampilkan profil profesional, proyek, pengalaman, keahlian, dan jalur kontak dalam satu pengalaman yang cepat, responsif, dan mudah diperbarui. Situs dibangun menggunakan React agar komponen UI dapat dikelola secara modular dan siap dikembangkan menjadi aplikasi yang lebih interaktif.

## 2. Tujuan

- Membantu pengunjung memahami identitas profesional pemilik portofolio dalam 10 detik pertama.
- Menampilkan proyek terbaik dengan konteks, peran, teknologi, hasil, dan tautan demo atau repository.
- Mempermudah recruiter, klien, atau kolaborator menghubungi pemilik portofolio.
- Membangun fondasi frontend React yang rapi, reusable, responsive, accessible, dan mudah di-maintain.

## 3. Non-Tujuan

- Tidak membangun CMS kompleks pada versi awal.
- Tidak membuat fitur login atau dashboard admin pada versi awal.
- Tidak membuat marketplace jasa atau sistem pembayaran.
- Tidak membuat blog penuh kecuali dipilih sebagai fase lanjutan.

## 4. Target Pengguna

- Recruiter yang ingin menilai profil, pengalaman, dan kecocokan kandidat secara cepat.
- Hiring manager atau technical lead yang ingin melihat kualitas proyek dan kemampuan teknis.
- Klien potensial yang mencari bukti kemampuan, gaya kerja, dan kanal kontak.
- Rekan komunitas atau kolaborator yang ingin mengenal keahlian dan minat pemilik portofolio.

## 5. Persona Utama

### Recruiter

- Kebutuhan: membaca ringkasan profil, melihat pengalaman, mengunduh CV, dan menghubungi kandidat.
- Ekspektasi: navigasi jelas, konten ringkas, link sosial aktif, tampilan profesional.

### Technical Reviewer

- Kebutuhan: melihat proyek nyata, stack teknologi, repository, demo, dan penjelasan kontribusi.
- Ekspektasi: detail proyek tidak generik, ada bukti hasil, performa situs baik.

### Klien Potensial

- Kebutuhan: memahami layanan, gaya kerja, kualitas output, dan cara menghubungi.
- Ekspektasi: tampilan meyakinkan, portofolio mudah dipindai, call-to-action jelas.

## 6. Proposisi Nilai

Situs ini harus menjawab tiga pertanyaan utama pengunjung:

1. Siapa pemilik portofolio ini dan apa spesialisasinya?
2. Bukti pekerjaan atau proyek apa yang menunjukkan kemampuannya?
3. Bagaimana cara menghubunginya dengan cepat?

## 7. Ruang Lingkup MVP

MVP mencakup halaman portofolio satu halaman atau multi-section dengan navigasi anchor. Konten utama meliputi hero, tentang, keahlian, proyek, pengalaman, testimoni opsional, dan kontak.

## 8. Struktur Halaman

### 8.1 Header dan Navigasi

- Logo atau nama personal.
- Menu navigasi ke bagian About, Skills, Projects, Experience, dan Contact.
- Tombol utama untuk Contact atau Download CV.
- Mobile menu yang mudah digunakan pada layar kecil.

### 8.2 Hero

- Nama lengkap atau brand personal sebagai headline utama.
- Kalimat singkat tentang peran, spesialisasi, dan nilai unik.
- CTA utama: Contact Me atau Hire Me.
- CTA sekunder: View Projects atau Download CV.
- Link sosial: GitHub, LinkedIn, email, dan platform lain yang relevan.

### 8.3 About

- Ringkasan profesional 2 sampai 4 paragraf pendek.
- Fokus ke keahlian, cara kerja, domain minat, dan pencapaian utama.
- Foto profil opsional dengan alt text yang deskriptif.

### 8.4 Skills

- Daftar skill dikelompokkan berdasarkan kategori, misalnya Frontend, Backend, Tools, Design, atau Soft Skills.
- Setiap skill dapat berupa badge, compact list, atau icon plus label.
- Hindari level persentase kecuali ada alasan jelas dan data yang valid.

### 8.5 Projects

- Minimal 3 proyek unggulan.
- Setiap proyek menampilkan nama, deskripsi singkat, problem yang diselesaikan, peran, teknologi, hasil, gambar preview, link demo, dan link source code jika tersedia.
- Proyek dapat difilter berdasarkan kategori atau stack pada fase lanjutan.

### 8.6 Experience

- Timeline pengalaman kerja, freelance, organisasi, atau kontribusi open source.
- Setiap item berisi role, organisasi, periode, ringkasan tanggung jawab, dan pencapaian terukur jika ada.

### 8.7 Testimonials atau Highlights Opsional

- Testimoni dari klien, mentor, atau rekan kerja.
- Alternatif jika belum ada testimoni: highlight pencapaian, sertifikasi, atau statistik singkat.

### 8.8 Contact

- Form kontak dengan field nama, email, subjek opsional, dan pesan.
- Link email langsung sebagai fallback.
- Link sosial profesional.
- Pesan sukses dan error yang jelas setelah submit.

### 8.9 Footer

- Copyright.
- Link sosial.
- Link kembali ke atas.
- Informasi stack atau pesan singkat opsional.

## 9. User Stories

- Sebagai recruiter, saya ingin melihat ringkasan profil dengan cepat agar bisa menilai kecocokan awal.
- Sebagai technical reviewer, saya ingin membuka detail proyek agar bisa memahami kontribusi dan kualitas implementasi.
- Sebagai klien potensial, saya ingin melihat hasil pekerjaan agar yakin sebelum menghubungi.
- Sebagai pengunjung mobile, saya ingin navigasi tetap mudah agar tidak kesulitan menjelajah situs.
- Sebagai pemilik portofolio, saya ingin data proyek mudah diperbarui agar konten bisa berkembang tanpa mengubah banyak komponen.

## 10. Kebutuhan Fungsional

| ID | Prioritas | Kebutuhan | Kriteria Penerimaan |
| --- | --- | --- | --- |
| FR-01 | Must | Situs menampilkan hero dengan nama, role, ringkasan, dan CTA | Pengunjung dapat langsung melihat identitas dan aksi utama pada viewport pertama |
| FR-02 | Must | Navigasi mengarah ke section utama | Klik menu membawa pengguna ke section yang sesuai tanpa reload penuh |
| FR-03 | Must | Section proyek menampilkan minimal 3 proyek | Setiap proyek memiliki deskripsi, stack, dan minimal satu link relevan |
| FR-04 | Must | Situs responsif untuk mobile, tablet, dan desktop | Layout tidak overlap dan tetap nyaman pada lebar 360px sampai desktop besar |
| FR-05 | Must | Form kontak atau link kontak tersedia | Pengunjung dapat mengirim pesan atau membuka email client |
| FR-06 | Must | CV dapat diakses atau diunduh | Tombol Download CV membuka file CV yang benar |
| FR-07 | Should | Project data dikelola dari file data terpisah | Menambah proyek tidak perlu mengubah markup utama section |
| FR-08 | Should | Animasi mikro tersedia untuk transisi ringan | Animasi tidak mengganggu aksesibilitas dan menghormati prefers-reduced-motion |
| FR-09 | Should | Dark mode atau theme toggle tersedia | Preferensi tema tersimpan dan tidak menyebabkan flicker besar |
| FR-10 | Could | Filter proyek berdasarkan kategori | Pengunjung dapat menyaring proyek tanpa reload halaman |
| FR-11 | Could | Blog atau notes sederhana | Pengunjung dapat membaca tulisan singkat jika fitur diaktifkan |

## 11. Kebutuhan Non-Fungsional

### Performance

- Lighthouse Performance target minimal 90 pada desktop dan mobile setelah build production.
- Largest Contentful Paint target di bawah 2.5 detik pada koneksi standar.
- Hindari dependency berat untuk fitur sederhana.
- Gunakan lazy loading untuk gambar proyek dan aset non-kritis.

### Accessibility

- Semua gambar informatif memiliki alt text.
- Semua tombol dan link dapat diakses via keyboard.
- Kontras warna memenuhi WCAG AA.
- Struktur heading berurutan dari h1 ke h2 dan seterusnya.
- Form memiliki label, pesan error, dan state focus yang jelas.

### SEO dan Shareability

- Title dan meta description jelas.
- Open Graph image tersedia untuk preview saat dibagikan.
- Struktur semantic HTML digunakan pada section utama.
- Sitemap dan robots.txt disediakan jika deploy sebagai situs publik.

### Maintainability

- Komponen React dipisah berdasarkan section dan elemen reusable.
- Data konten diletakkan di file konfigurasi atau data, misalnya `src/data/projects.ts`.
- Styling konsisten melalui design tokens atau utility classes.
- Hindari duplikasi markup untuk card, badge, dan tombol.

## 12. Rekomendasi Teknologi

### Baseline MVP

- React dengan TypeScript.
- Vite sebagai build tool.
- React Router opsional jika membutuhkan halaman terpisah.
- Tailwind CSS atau CSS Modules untuk styling terstruktur.
- Formspree, EmailJS, Resend, atau endpoint serverless untuk form kontak.
- Vercel atau Netlify untuk deployment statis.

### Alternatif Jika SEO Sangat Penting

- Next.js dengan App Router untuk static generation dan metadata yang lebih kuat.
- Cocok jika portofolio akan memiliki blog, case study detail, atau kebutuhan SEO lanjutan.

## 13. Arsitektur Frontend

Struktur direktori yang direkomendasikan:

```text
src/
  assets/
  components/
    Button.tsx
    Section.tsx
    ProjectCard.tsx
    SkillBadge.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
    experience.ts
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
  styles/
  App.tsx
  main.tsx
```

## 14. Model Konten

### Profile

- `name`
- `role`
- `summary`
- `location`
- `email`
- `resumeUrl`
- `socialLinks`

### Project

- `title`
- `slug`
- `description`
- `problem`
- `role`
- `techStack`
- `outcome`
- `imageUrl`
- `demoUrl`
- `sourceUrl`
- `featured`

### Experience

- `role`
- `company`
- `startDate`
- `endDate`
- `description`
- `highlights`

## 15. Prinsip Desain

- Tampilan profesional, bersih, dan mudah dipindai.
- Prioritaskan konten proyek dan CTA, bukan dekorasi berlebihan.
- Gunakan spacing konsisten dan tipografi yang nyaman dibaca.
- Gunakan visual proyek yang nyata: screenshot aplikasi, mockup produk, atau preview hasil kerja.
- Card proyek harus ringkas tetapi cukup informatif.
- UI mobile harus terasa sebagai pengalaman utama, bukan versi yang dipadatkan paksa.

## 16. State dan Interaksi

- Mobile menu terbuka dan tertutup dengan kontrol yang jelas.
- CTA navigasi melakukan smooth scroll ke section terkait.
- Form kontak memiliki state idle, loading, success, dan error.
- Project card memiliki hover atau focus state yang membantu, tetapi tetap usable tanpa hover.
- Theme toggle menyimpan preferensi di localStorage jika fitur dark mode dibuat.

## 17. Analytics

Event yang disarankan:

- Klik Download CV.
- Klik link GitHub atau LinkedIn.
- Klik View Project.
- Submit form kontak berhasil.
- Error submit form kontak.

Tools opsional:

- Vercel Analytics.
- Plausible.
- Google Analytics jika dibutuhkan.

## 18. Kriteria Sukses

- Pengunjung dapat memahami profil dan spesialisasi dalam 10 detik.
- Minimal 3 proyek unggulan tampil jelas dengan link valid.
- Situs dapat dibuka nyaman di mobile dan desktop.
- Form atau link kontak dapat digunakan tanpa hambatan.
- Lighthouse minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO pada build production.
- Struktur kode memungkinkan penambahan proyek baru dalam waktu kurang dari 5 menit.

## 19. Milestone

### Milestone 1: Foundation

- Setup React, TypeScript, Vite, dan styling.
- Buat layout dasar, design tokens, dan komponen umum.
- Siapkan data profile, projects, skills, dan experience.

### Milestone 2: Core Sections

- Implementasi Hero, About, Skills, Projects, Experience, Contact, dan Footer.
- Tambahkan responsive behavior dan mobile navigation.

### Milestone 3: Polish

- Tambahkan animasi ringan, state interaksi, validasi form, dan dark mode jika dipilih.
- Optimasi gambar, meta tags, favicon, dan Open Graph.

### Milestone 4: QA dan Deploy

- Test responsive layout.
- Test keyboard navigation dan screen reader basics.
- Jalankan build production.
- Deploy ke Vercel atau Netlify.

## 20. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Konten proyek terlalu umum | Pengunjung sulit menilai kemampuan | Gunakan format problem, role, tech, outcome |
