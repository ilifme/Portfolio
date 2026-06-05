import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import type { Project } from '../types';

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projects"
        title="Project yang saya kerjakan."
        description="Bagian ini menampilkan project dengan fokus pada kebutuhan, peran, teknologi, dan hasilnya."
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
