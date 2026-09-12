import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function AboutSection() {
    const { about, brand } = content;
    const initials = about.photo.src ? '' : brand.name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2);

    return (
        <section id="about" className="section section-alt about-section">
            <div className="container">
                <SectionTitle icon="fas fa-user" text={about.title} />

                <div className="about-layout">
                    <div className="about-photo-wrap">
                        <div className="profile-photo">
                            {about.photo.src ? (
                                <img src={about.photo.src} alt={about.photo.alt} />
                            ) : (
                                <div className="photo-initials" aria-label={about.photo.alt}>
                                    {initials}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="about-body">
                        <h3>{about.heading}</h3>
                        {about.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}

                        <div className="about-details">
                            {about.details.map((detail) => (
                                <div className="about-detail" key={detail.label}>
                                    <i className={detail.icon} aria-hidden="true" />
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            {...(detail.external
                                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                                : {})}
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span>{detail.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;