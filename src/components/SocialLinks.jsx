import React from 'react';

const SocialLinks = () => {
    return (
        <div className="d-flex justify-content-center space-x-6 pt-5">
            <a href="https://www.linkedin.com/in/a-hemeda" target="_blank" aria-label="LinkedIn"
                className="text-white hover-text-primary transition duration-300">
                <i className="fab fa-linkedin fa-3x"></i> {/* استخدام fa-3x لمحاكاة text-3xl */}
            </a>
            <a href="https://github.com/a-hemeda" target="_blank" aria-label="GitHub"
                className="text-white hover-text-primary transition duration-300">
                <i className="fab fa-github fa-3x"></i>
            </a>
        </div>
    );
};

export default SocialLinks;