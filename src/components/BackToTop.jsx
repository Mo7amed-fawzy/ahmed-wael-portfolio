import { useEffect, useRef } from 'react';

function BackToTop() {
    const buttonRef = useRef(null);
    const hiddenRef = useRef(true);

    useEffect(() => {
        const button = buttonRef.current;

        const onScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
            button.style.setProperty('--scroll-progress-angle', `${progress * 360}deg`);

            const show = scrollTop > window.innerHeight * 0.5;
            if (show === hiddenRef.current) {
                hiddenRef.current = !show;
                button.style.transition = 'opacity 0.3s, visibility 0.3s';
                button.style.opacity = show ? '1' : '0';
                button.style.visibility = show ? 'visible' : 'hidden';
                button.style.pointerEvents = show ? 'auto' : 'none';
            }
        };

        const onClick = () => {
            button.classList.add('is-launching');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.setTimeout(() => button.classList.remove('is-launching'), 1100);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        button.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            button.removeEventListener('click', onClick);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            type="button"
            className="back-to-top"
            title="Back to top"
            aria-label="Back to top"
            style={{ opacity: 0, visibility: 'hidden' }}
        >
            <span className="back-to-top-content">
                <span className="rocket-wrap" aria-hidden="true">
                    <i className="fas fa-rocket rocket-icon" />
                    <span className="rocket-flame" />
                </span>
            </span>
        </button>
    );
}

export default BackToTop;