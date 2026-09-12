import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function ExperienceSection() {
    return (
        <section id="experience" className="section section-gradient experience-section">
            <div className="container">
                <SectionTitle icon="fas fa-briefcase" text={content.experience.title} />

                <div className="timeline">
                    <div className="timeline-items">
                        {content.experience.items.map((item) => (
                            <div className="timeline-item animate-on-scroll" key={`${item.role}-${item.company}`}>
                                <div className="timeline-dot" aria-hidden="true" />
                                <div className="timeline-card">
                                    <div className="timeline-card-top">
                                        <h3 className="timeline-role">{item.role}</h3>
                                        <span className="timeline-period">{item.period}</span>
                                    </div>
                                    <div className="timeline-company">
                                        <i className="fas fa-building" aria-hidden="true" />
                                        <span>{item.company}</span>
                                    </div>
                                    {item.points.length > 0 && (
                                        <ul className="timeline-points">
                                            {item.points.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;