import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './utils/useScrollReveal';

function App() {
    useScrollReveal();

    return (
        <div className="min-h-screen font-sans antialiased">
            <CustomCursor />
            <main id="main-content">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <CertificatesSection />
                <ContactSection />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;