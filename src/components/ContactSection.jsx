import { useState } from 'react';
import { content } from '../data/content';
import SectionTitle from './SectionTitle';

function ContactSection() {
    const { contact } = content;
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        const subject = encodeURIComponent(values.subject || 'Portfolio message');
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
        );
        window.location.href = `mailto:${contact.form.recipient}?subject=${subject}&body=${body}`;
        setStatus('Opening your email app...');
        event.currentTarget.reset();
    };

    return (
        <section id="contact" className="section section-alt contact-section">
            <div className="container">
                <SectionTitle icon="fas fa-envelope" text={contact.title} />

                <div className="contact-layout">
                    <div className="contact-info">
                        <h3>{contact.heading}</h3>
                        <p>{contact.intro}</p>

                        <div className="contact-items">
                            {contact.items.map((item) => (
                                <div className="contact-item" key={item.label}>
                                    <div className="contact-item-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4>{item.label}</h4>
                                        {item.href ? (
                                            <a href={item.href}>{item.value}</a>
                                        ) : (
                                            <p>{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {contact.socials.length > 0 && (
                            <>
                                <h3 className="follow-heading">{contact.followMeHeading}</h3>
                                <div className="contact-socials">
                                    {contact.socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.label}
                                            aria-label={social.label}
                                            className="social-icon"
                                        >
                                            <i className={`${social.icon} fa-lg`} aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="contact-form-card">
                        <h3>{contact.form.title}</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {contact.form.fields.map((field) => (
                                <div className="form-field" key={field.name}>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            rows="4"
                                            placeholder={field.placeholder}
                                            required={field.required}
                                        />
                                    ) : (
                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}
                            <button type="submit" className="submit-btn">
                                <i className="fas fa-paper-plane" aria-hidden="true" />
                                {contact.form.submit}
                            </button>
                            {status && <p className="form-status">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;