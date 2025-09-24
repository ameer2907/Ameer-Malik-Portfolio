import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import techBg from '@/assets/tech-bg.jpg';
import profilePhoto from '@/assets/profile-photo-new.jpg';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [visibleHighlights, setVisibleHighlights] = useState<number[]>([]);
  
  const highlights = [
    "Crafting AI solutions with impact",
    "Transforming data into intelligence", 
    "Turning ideas into user-centered solutions",
    "Building tech for a sustainable future",
    "Blending technical skill with creative design",
    "Learning, adapting, and innovating"
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight(prev => {
        const next = (prev + 1) % highlights.length;
        if (next === 0) {
          // Reset when starting over
          setVisibleHighlights([]);
        }
        
        setVisibleHighlights(current => {
          if (!current.includes(next)) {
            return [...current, next];
          }
          return current;
        });
        
        return next;
      });
    }, 2000); // 2 second intervals
    
    return () => clearInterval(timer);
  }, [highlights.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/K_Ameer_Malik_Resume.pdf'; // You'll need to add this file to public folder
    link.download = 'K_Ameer_Malik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Tech circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-background/90 to-black/80" />
      
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
            
            {/* Animated highlight points */}
            <div className="text-center">
              <div className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto min-h-[8rem] flex flex-col justify-center space-y-3">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className={`
                      transition-all duration-1000 ease-out transform
                      ${visibleHighlights.includes(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                      }
                      ${currentHighlight === index 
                        ? 'text-foreground shadow-glow-text animate-pulse-glow scale-105' 
                        : visibleHighlights.includes(index)
                          ? 'text-muted-foreground/70 scale-95'
                          : ''
                      }
                      font-medium tracking-wide
                    `}
                    style={{
                      textShadow: currentHighlight === index 
                        ? '0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.4)' 
                        : 'none'
                    }}
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="glow" size="xl" className="animate-intense-glow" onClick={scrollToProjects}>
                <Github className="mr-2 h-5 w-5 glow-icon" />
                View Projects
              </Button>
              <Button variant="outline" size="xl" onClick={downloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent animate-glow"
              >
                <Mail className="mr-2 h-5 w-5 glow-icon" />
                Get in Touch
              </Button>
            </div>
            
          </div>
          
          {/* Enhanced Profile Image with tech glow */}
          <div className="flex justify-center lg:justify-end animate-fade-in relative">
            {/* Enhanced background patterns */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute w-80 h-80 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-72 h-72 border border-accent/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
            
            <div className="relative z-10">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow-intense border-4 border-primary/30 animate-intense-glow relative">
                <img
                  src={profilePhoto}
                  alt="K.Ameer Malik Bahad - AI & Data Science Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 rounded-full" />
              </div>
              {/* Enhanced decorative rings with glow */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-pulse-glow" />
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse-glow" style={{ animationDelay: '1s' }} />
              <div className="absolute -inset-8 rounded-full border border-accent/20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
              <div className="absolute -inset-12 rounded-full border border-primary/10 animate-pulse-glow" style={{ animationDelay: '3s' }} />
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