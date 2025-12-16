import React from 'react';

const Header = () => {
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="w-100 position-relative z-20 py-4 px-6 md:px-12 bg-transparent">
            <div className="container mx-auto d-flex justify-content-between align-items-center">
                <a href="#hero" className="text-white text-2xl font-weight-bold animate-fade-in text-decoration-none">
                    Ahmed Hemeda
                </a>

                {/* Nav links */}
                <nav className="d-none d-lg-flex space-x-6 text-white text-sm font-weight-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-decoration-none text-white hover-text-primary transition duration-300 py-1 px-2 border-b-2 border-transparent hover-border-primary"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* TODO: Implement theme toggle */}
                <button className="text-white hover-text-primary transition duration-300 focus:outline-none border-0 bg-transparent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10.325 4.317c.426-1.747 2.083-3.004 3.791-3.004h.084c.732 0 1.458.17 2.113.513l1.986 1.096a.7.7 0 01.312.981l-1.42 2.458c-.372.645-.043 1.487.602 1.859l1.986 1.156c1.62.943 1.888 3.12 1.888 3.12a.7.7 0 01-1.096.312l-1.986-1.096a.7.7 0 00-.981.312l-1.458 2.52c-.372.645-1.214.645-1.586 0l-1.458-2.52a.7.7 0 00-.981-.312l-1.986 1.096a.7.7 0 01-1.096-.312s-.268-2.177 1.352-3.12l1.986-1.156c.645-.372.974-1.214.602-1.859l-1.42-2.458a.7.7 0 01.312-.981l1.986-1.096z">
                        </path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;