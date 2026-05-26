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
        title="Case studies yang menunjukkan cara berpikir produk."
        description="Setiap proyek menampilkan konteks masalah, peran, stack, dan hasil yang ingin dicapai."
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
