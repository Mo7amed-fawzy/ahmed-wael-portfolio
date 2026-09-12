import { content } from '../data/content';

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer-inner">
                    <a href="#home" className="footer-brand">
                        {content.brand.name}
                    </a>
                    <p>
                        &copy; {new Date().getFullYear()} {content.brand.fullName}. {content.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;