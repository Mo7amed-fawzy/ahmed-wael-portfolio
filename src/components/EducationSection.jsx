import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function EducationSection() {
    const { education } = content;

    return (
        <section id="education" className="section section-alt education-section">
            <div className="container">
                <SectionTitle icon="fas fa-graduation-cap" text={education.title} />

                <div className="education-card animate-on-scroll">
                    <div className="education-head">
                        <div className="education-icon">
                            <i className="fas fa-graduation-cap" aria-hidden="true" />
                        </div>
                        <div>
                            <h3>{education.degree}</h3>
                            <p className="education-university">{education.university}</p>
                        </div>
                    </div>

                    <div className="education-period">
                        <i className="far fa-calendar-alt" aria-hidden="true" />
                        <span>{education.period}</span>
                    </div>

                    <div className="education-highlights">
                        <h4>{education.highlightsHeading}</h4>
                        <ul>
                            {education.highlights.map((highlight) => (
                                <li key={highlight}>
                                    <i className="fas fa-certificate" aria-hidden="true" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;