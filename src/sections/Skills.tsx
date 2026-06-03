import { SectionHeading } from '../components/SectionHeading';
import type { SkillGroup } from '../types';

type SkillsProps = {
  skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="Stack yang fokus pada Laravel, React, dan delivery web."
        description="Skill dikelompokkan berdasarkan kebutuhan yang sering muncul saat membangun website."
      />
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
