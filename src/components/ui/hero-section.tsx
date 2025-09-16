import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import techBg from '@/assets/tech-bg.jpg';
import profilePhoto from '@/assets/profile-photo-new.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${techBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced Overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      
      {/* Floating tech elements with enhanced glow */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-lg animate-float animate-pulse-glow" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-space">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block gradient-text">K.Ameer Malik</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2 mb-8">
                Final-Year CSE Student, AI & Data Science Specialization
              </span>
            </h1>
            
            {/* Delayed intro popup */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '2s' }}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Passionate technologist dedicated to crafting innovative AI-driven solutions that bridge the gap between complex data and meaningful insights. 
                Committed to excellence through continuous learning and strategic problem-solving in the evolving landscape of artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="glow" size="xl" className="animate-intense-glow">
                <Github className="mr-2 h-5 w-5 glow-icon" />
                View Projects
              </Button>
              <Button variant="outline" size="xl">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
          </div>
          
          {/* Enhanced Profile Image with tech glow */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow-intense border-4 border-primary/30 animate-intense-glow">
                <img
                  src={profilePhoto}
                  alt="K.Ameer Malik Bahad - AI & Data Science Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Enhanced decorative rings with glow */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-pulse-glow" />
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute -inset-8 rounded-full border border-accent/20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator with glow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="glow-outline"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary animate-pulse-glow"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 glow-icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;