import { ArrowUpRight, Code2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a className="project-media" href={project.demoUrl} target="_blank" rel="noreferrer">
        <img src={project.imageUrl} alt={`${project.title} interface preview`} loading="lazy" />
      </a>
      <div className="project-body">
        <div className="project-kicker" style={{ '--project-accent': project.accent } as CSSProperties}>
          <span aria-hidden="true" />
          {project.category}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <dl className="project-details">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>
        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <a className="text-link muted-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
            <Code2 aria-hidden="true" size={16} /> Source
          </a>
        </div>
      </div>
    </article>
  );
}
