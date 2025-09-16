import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import AboutSection from '@/components/ui/about-section';
import SkillsSection from '@/components/ui/skills-section';
import ProjectsSection from '@/components/ui/projects-section';
import ExperienceSection from '@/components/ui/experience-section';
import ContactSection from '@/components/ui/contact-section';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
