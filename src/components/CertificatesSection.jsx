import { content } from '../data/content';
import SectionTitle from './SectionTitle';

const CERT_ICONS = ['fas fa-trophy', 'fas fa-database', 'fas fa-shield-alt', 'fas fa-laptop-code'];

function CertificatesSection() {
    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <SectionTitle icon="fas fa-certificate" text={content.certificates.title} />

                <div className="cert-list">
                    {content.certificates.items.map((cert, i) => (
                        <article className="cert-item" key={cert.title}>
                            <div className="cert-icon-box">
                                <i className={CERT_ICONS[i % CERT_ICONS.length]} aria-hidden="true" />
                            </div>
                            <div className="cert-main">
                                <div className="cert-top">
                                    <div className="cert-content">
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-meta">{cert.meta}</p>
                                    </div>
                                    {cert.link ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-link"
                                            title={`View ${cert.title} certificate`}
                                            aria-label={`View ${cert.title} certificate`}
                                        >
                                            <i className="fas fa-external-link-alt" aria-hidden="true" />
                                        </a>
                                    ) : null}
                                </div>
                                <p className="cert-description">{cert.description}</p>
                                {cert.skills.length > 0 && (
                                    <div className="cert-skills">
                                        {cert.skills.map((skill) => (
                                            <span className="cert-skill" key={skill}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CertificatesSection;