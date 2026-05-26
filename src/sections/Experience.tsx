import { SectionHeading } from '../components/SectionHeading';
import type { ExperienceItem, Testimonial } from '../types';

type ExperienceProps = {
  experience: ExperienceItem[];
  testimonials: Testimonial[];
};

export function Experience({ experience, testimonials }: ExperienceProps) {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Experience"
        title="Progress kerja yang mudah dilacak dari ide sampai deploy."
        description="Pengalaman saya bergerak di implementasi UI, prototipe produk, dokumentasi teknis, dan quality pass sebelum rilis."
      />
      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <p>{item.period}</p>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <span>{item.description}</span>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        {testimonials.map((testimonial) => (
          <aside className="quote-panel" key={testimonial.name}>
            <p>?{testimonial.quote}?</p>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </aside>
        ))}
      </div>
    </section>
  );
}
