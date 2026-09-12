function SectionTitle({ icon, text }) {
    return (
        <h2 className="section-title animate-on-scroll">
            <span>
                <i className={`${icon} section-title-icon`} aria-hidden="true" />
                <span>{text}</span>
            </span>
        </h2>
    );
}

export default SectionTitle;