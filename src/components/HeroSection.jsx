// import React, { useEffect } from 'react';
import Header from './Header';
import SocialLinks from './SocialLinks';
import { loadParticles } from '../utils/particlesConfig';

const HeroSection = () => {
    // Run Particles.js after loading the component
    useEffect(() => {
        loadParticles();
    }, []);

    return (
        <section id="hero" className="position-relative min-vh-100 d-flex flex-column pt-4 pt-sm-0">
            {/* Background and Particles */}
            <div id="particles-js"></div>

            {/* Navigation Bar */}
            <Header />

            {/* Hero Content */}
            <div className="hero-content d-flex flex-column align-items-center justify-content-center flex-grow-1 py-5 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-weight-bolder leading-tight">
                        Hi, I'm <span className="text-primary">Ahmed Hemeda</span>
                    </h1>

                    <h2 className="text-white text-xl md:text-3xl font-weight-medium tracking-wide">
                        Software Engineer | .NET Developer | Full Stack
                    </h2>

                    <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Passionate developer with expertise in building scalable .NET applications, implementing modern architectural
                        patterns, and delivering high-quality solutions through research-driven problem-solving and continuous
                        learning.
                    </p>

                    {/* Action buttons - using Bootstrap classes */}
                    <div className="d-flex flex-column flex-sm-row justify-content-center pt-4" style={{ gap: '1rem' }}>
                        <a href="#"
                            className="btn btn-primary text-white font-weight-semibold rounded-md shadow-lg shadow-primary/50"
                            style={{ padding: '0.75rem 2rem' }}>
                            View My CV
                        </a>
                        <a href="#contact"
                            className="btn btn-outline-primary text-primary font-weight-semibold rounded-md hover-bg-primary-light"
                            style={{ padding: '0.75rem 2rem' }}>
                            Contact Me
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;