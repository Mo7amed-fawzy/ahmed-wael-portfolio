import { useEffect, useRef } from 'react';
import { content } from '../data/content';

function CustomCursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;
        if (!dot || !outline) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (prefersReducedMotion || isCoarsePointer || window.innerWidth <= 768) return;

        document.documentElement.style.setProperty('--cursor-initial', `"${content.brand.name.charAt(0)}"`);
        document.body.classList.add('custom-cursor-active');

        let mouseX = -100;
        let mouseY = -100;
        let outlineX = -100;
        let outlineY = -100;
        let visible = false;
        let raf = null;

        const moveOutline = () => {
            outlineX += (mouseX - outlineX) * 0.16;
            outlineY += (mouseY - outlineY) * 0.16;
            outline.style.left = `${outlineX}px`;
            outline.style.top = `${outlineY}px`;
            if (Math.abs(mouseX - outlineX) > 0.5 || Math.abs(mouseY - outlineY) > 0.5) {
                raf = requestAnimationFrame(moveOutline);
            }
        };

        const onMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
            if (!visible) {
                visible = true;
                dot.style.opacity = '1';
                outline.style.opacity = '1';
            }
            if (!raf) {
                raf = requestAnimationFrame(moveOutline);
            }
        };

        const onOver = (event) => {
            const interactive = event.target.closest('a, button, input, textarea, [role="button"]');
            document.body.classList.toggle('cursor-hover-enabled', Boolean(interactive));
        };

        const onLeave = () => {
            visible = false;
            dot.style.opacity = '0';
            outline.style.opacity = '0';
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseover', onOver, { passive: true });
        document.documentElement.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            document.documentElement.removeEventListener('mouseleave', onLeave);
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={outlineRef} className="cursor-dot-outline" aria-hidden="true" />
        </>
    );
}

export default CustomCursor;