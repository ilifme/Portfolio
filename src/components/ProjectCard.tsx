import { ArrowUpRight, Code2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const preview = <img src={project.imageUrl} alt={`${project.title} interface preview`} loading="lazy" />;

  return (
    <article className="project-card">
      {project.demoUrl ? (
        <a className="project-media" href={project.demoUrl} target="_blank" rel="noreferrer">
          {preview}
        </a>
      ) : (
        <div className="project-media" aria-label={`${project.title} interface preview`}>
          {preview}
        </div>
      )}
      <div className="project-body">
        <div className="project-kicker" style={{ '--project-accent': project.accent } as CSSProperties}>
          <span aria-hidden="true" />
          {project.category}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <dl className="project-details">
          <div>
            <dt>Kebutuhan</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Peran</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Hasil</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.demoUrl || project.sourceUrl ? (
          <div className="project-actions">
            {project.demoUrl ? (
              <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a className="text-link muted-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                <Code2 aria-hidden="true" size={16} /> Source
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
