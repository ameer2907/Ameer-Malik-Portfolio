import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <Badge variant="secondary" className="mb-6 animate-scale-in">
              🚀 Available for Internship Opportunities
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-space">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text">K.Ameer Malik</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2">
                AI & Data Science Engineer
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
              A forward-thinking innovator who transforms ideas into powerful, real-world solutions. 
              I blend creativity with precision to deliver impactful AI and machine learning projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="shadow-glow animate-glow">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Python', 'Machine Learning', 'AI', 'Java', 'React', 'Data Analysis'].map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-large border-4 border-primary/20">
                <img
                  src={profilePhoto}
                  alt="K.Ameer Malik Bahad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;