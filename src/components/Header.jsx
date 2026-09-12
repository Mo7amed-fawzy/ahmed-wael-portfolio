import { useEffect, useState } from 'react';
import { content } from '../data/content';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header" role="banner">
            <nav className="site-nav" aria-label="Main navigation">
                <a href="#home" className="nav-brand">{content.brand.name}</a>

                <div className="nav-links">
                    {content.navigation.map((item) => (
                        <a key={item.href} href={item.href} className="nav-link">
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <a href="#contact" className="nav-contact-btn" aria-label="Contact section">
                        {content.contact.shortLabel}
                    </a>
                    <button
                        type="button"
                        className="icon-btn"
                        onClick={() => setDark((d) => !d)}
                        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        {dark ? <i className="fas fa-sun text-yellow-500" aria-hidden="true" /> : <i className="fas fa-moon" aria-hidden="true" />}
                    </button>
                    <button
                        type="button"
                        className="icon-btn mobile-menu-button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {content.navigation.map((item) => (
                    <a key={item.href} href={item.href} className="nav-link" onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
                <a href="#contact" className="nav-contact-btn nav-contact-btn-mobile" onClick={closeMenu}>
                    {content.contact.shortLabel}
                </a>
            </div>
        </header>
    );
}

export default Header;