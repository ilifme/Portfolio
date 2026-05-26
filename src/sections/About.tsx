import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { Profile } from '../types';

type AboutProps = {
  profile: Profile;
};

const principles = [
  'Komponen kecil, state eksplisit, dan data konten yang mudah diganti.',
  'Layout responsive yang dirancang dari layar kecil sebelum diperluas ke desktop.',
  'Aksesibilitas dasar: semantic HTML, focus state, label form, dan kontras warna.',
];

export function About({ profile }: AboutProps) {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Frontend yang terasa jelas sejak interaksi pertama."
        description="Saya menyukai interface yang padat informasi, tetapi tetap tenang saat digunakan berulang kali."
      />
      <div className="about-layout">
        <div className="about-copy">
          <p>{profile.intro}</p>
          <p>
            Pendekatan saya menggabungkan struktur teknis React dengan perhatian pada microcopy, ritme layout,
            dan state kosong atau error yang sering menentukan kualitas produk sehari-hari.
          </p>
        </div>
        <ul className="principle-list" aria-label="Working principles">
          {principles.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
