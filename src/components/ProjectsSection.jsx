import { useState } from 'react';
import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-thumb">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="project-thumb-placeholder" aria-hidden="true">
                        {project.title}
                    </div>
                )}
            </div>
            <div className="project-body">
                <h3>{project.title}</h3>
                <div className="project-arc">
                    <div className="project-stage">
                        <p className="stage-label stage-challenge">
                            <i className="fas fa-exclamation-circle" aria-hidden="true" />
                            <span>Challenge</span>
                        </p>
                        <p className="stage-text">{project.challenge}</p>
                    </div>
                    <div className="project-stage">
                        <p className="stage-label stage-action">
                            <i className="fas fa-screwdriver-wrench" aria-hidden="true" />
                            <span>Action</span>
                        </p>
                        <p className="stage-text">{project.action}</p>
                    </div>
                    <div className="project-stage">
                        <p className="stage-label stage-result">
                            <i className="fas fa-circle-check" aria-hidden="true" />
                            <span>Result</span>
                        </p>
                        <p className="stage-text">{project.result}</p>
                    </div>
                </div>

                {project.tech.length > 0 && (
                    <div className="project-tech">
                        {project.tech.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                )}

                {project.links.length > 0 && (
                    <div className="project-links">
                        {project.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                {...(link.external
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {})}
                            >
                                <i className={`fas ${link.icon}`} aria-hidden="true" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function ProjectsSection() {
    const [index, setIndex] = useState(0);
    const { items } = content.projects;

    const go = (direction) => {
        setIndex((current) => (current + direction + items.length) % items.length);
    };

    return (
        <section id="projects" className="section section-gradient projects projects-section">
            <div className="container">
                <SectionTitle icon="fas fa-diagram-project" text={content.projects.title} />

                <div className="project-carousel">
                    <button
                        type="button"
                        className="carousel-nav carousel-prev"
                        onClick={() => go(-1)}
                        title="Previous project"
                        aria-label="Previous project"
                    >
                        <i className="fas fa-chevron-left" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="carousel-nav carousel-next"
                        onClick={() => go(1)}
                        title="Next project"
                        aria-label="Next project"
                    >
                        <i className="fas fa-chevron-right" aria-hidden="true" />
                    </button>

                    <div className="projects-viewport">
                        <div className="projects-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                            {items.map((project) => (
                                <div className="project-slide" key={project.title}>
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="project-indicators">
                        {items.map((project, i) => (
                            <button
                                type="button"
                                key={project.title}
                                className={`project-indicator${i === index ? ' active' : ''}`}
                                onClick={() => setIndex(i)}
                                title={`Go to project ${i + 1}`}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;