import { SectionHeading } from '../components/SectionHeading';
import type { SkillGroup } from '../types';

type SkillsProps = {
  skillGroups: SkillGroup[];
};

function LaravelLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <path d="M42 12L24 3L6 12V36L24 45L42 36V12Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M24 3V45" stroke="currentColor" strokeWidth="2" />
      <path d="M42 12L24 21" stroke="currentColor" strokeWidth="2" />
      <path d="M6 12L24 21" stroke="currentColor" strokeWidth="2" />
      <path d="M24 21L42 30" stroke="currentColor" strokeWidth="2" />
      <path d="M24 21L6 30" stroke="currentColor" strokeWidth="2" />
      <path d="M42 30V36L24 45" stroke="currentColor" strokeWidth="2" />
      <path d="M6 30V36L24 45" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
    </svg>
  );
}

function FlutterLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <path d="M12 22L22 12H38L28 22L38 32H22L12 22Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M22 32V42L32 32" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function PHPLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <ellipse cx="24" cy="28" rx="20" ry="14" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <text x="24" y="34" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="800" fontFamily="monospace">PHP</text>
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <path d="M16 18V14C16 10.686 18.686 8 22 8H26C29.314 8 32 10.686 32 14V18" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M32 30V34C32 37.314 29.314 40 26 40H22C18.686 40 16 37.314 16 34V30" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M16 18H8V30H16" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M32 18H40V30H32" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="14" cy="18" r="2" fill="currentColor" />
      <circle cx="34" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <text x="24" y="34" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="800" fontFamily="monospace">JS</text>
    </svg>
  );
}

export function Skills({ skillGroups }: SkillsProps) {
  const featuredTechs = [
    { name: 'Laravel', icon: LaravelLogo },
    { name: 'React JS', icon: ReactLogo },
    { name: 'Flutter', icon: FlutterLogo },
    { name: 'PHP', icon: PHPLogo },
    { name: 'Python', icon: PythonLogo },
    { name: 'JavaScript', icon: JavaScriptLogo },
  ];

  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="Stack yang dikuasai: Laravel, React, Flutter, PHP, Python, JavaScript."
        description="Skill dikelompokkan berdasarkan kebutuhan yang sering muncul saat membangun aplikasi."
      />

      <div className="featured-techs">
        {featuredTechs.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <div className="tech-icon-glow" aria-hidden="true">
              <tech.icon />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

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
