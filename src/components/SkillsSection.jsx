import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function SkillsSection() {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <SectionTitle icon="fas fa-code" text={content.skills.title} />

                <div className="skills-grid">
                    {content.skills.categories.map((category) => (
                        <div
                            key={category.title}
                            className={`skill-card animate-on-scroll${category.spanCenter ? ' span-center' : ''}`}
                        >
                            <div className="skill-head">
                                <div className="skill-icon-box">
                                    <i className={`${category.icon} skill-icon`} aria-hidden="true" />
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.items.map((item) => (
                                    <span className="skill-tag" key={item}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;