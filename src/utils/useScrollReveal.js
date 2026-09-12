import { useEffect } from 'react';

export function useScrollReveal(selector = '.animate-on-scroll') {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return undefined;

        if (!('IntersectionObserver' in window)) {
            elements.forEach((el) => el.classList.add('visible'));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector]);
}