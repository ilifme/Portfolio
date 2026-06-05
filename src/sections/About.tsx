import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { Profile } from '../types';

type AboutProps = {
  profile: Profile;
};

const principles = [
  'Membuat fitur web dengan struktur yang mudah dipahami dan dikembangkan lagi.',
  'Menggabungkan Laravel untuk backend dan React untuk tampilan yang interaktif.',
  'Menjaga halaman tetap responsive, rapi, dan nyaman dipakai di perangkat berbeda.',
];

export function About({ profile }: AboutProps) {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About"
        title="Saya membuat website yang rapi dan mudah digunakan."
        description="Fokus saya adalah membangun project web sesuai kebutuhan pengguna."
      />
      <div className="about-layout">
        <div className="about-copy">
          <p>{profile.intro}</p>
          <p>
            Dalam mengerjakan project, saya biasanya mulai dari memahami kebutuhan, menyusun struktur halaman,
            membuat fitur utama, lalu memastikan tampilan tetap enak digunakan di desktop maupun mobile.
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
