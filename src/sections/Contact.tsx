import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SectionHeading } from '../components/SectionHeading';
import type { Profile } from '../types';

type ContactProps = {
  profile: Profile;
};

export function Contact({ profile }: ContactProps) {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact"
        title="Punya project yang ingin dibuat?"
        description="Kirim konteks singkat tentang kebutuhan website, fitur utama, timeline, dan target pengguna."
      />
      <div className="contact-layout">
        <div className="contact-panel">
          <div>
            <Mail aria-hidden="true" size={22} />
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <MapPin aria-hidden="true" size={22} />
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div className="social-list" aria-label="Social links">
            {profile.socials.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon aria-hidden="true" size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
        <ContactForm recipientEmail={profile.email} />
      </div>
    </section>
  );
}
