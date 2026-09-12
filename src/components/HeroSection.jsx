import { useEffect } from 'react';
import Header from './Header';
import { loadParticles } from '../utils/particlesConfig';
import { content } from '../data/content';

function HeroSection() {
    useEffect(() => {
        loadParticles();
    }, []);

    return (
        <section id="home" className="hero" aria-label="Hero Section">
            <div id="particles-js" aria-hidden="true" />
            <Header />

            <div className="container">
                <div className="hero-inner">
                    <h1 className="hero-title">
                        {content.hero.greeting}{' '}
                        <span className="neon-name">{content.hero.name}</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        {content.hero.roles.join(content.hero.separator)}
                    </h2>

                    <p className="hero-description">{content.hero.description}</p>

                    <div className="hero-buttons">
                        {content.hero.buttons.cv && (
                            <a href={content.hero.buttons.cv.href} className="btn-primary hero-button">
                                {content.hero.buttons.cv.label}
                            </a>
                        )}
                        {content.hero.buttons.contact && (
                            <a href={content.hero.buttons.contact.href} className="btn-outline hero-button">
                                {content.hero.buttons.contact.label}
                            </a>
                        )}
                    </div>

                    {content.hero.socials.length > 0 && (
                        <div className="hero-social">
                            {content.hero.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label={`${social.label} Profile`}
                                >
                                    <i className={`${social.icon} fa-lg`} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;