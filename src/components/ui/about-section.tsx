import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Award, Users, Code } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '4+', icon: Code },
    { label: 'Certifications', value: '8+', icon: Award },
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Technologies', value: '10+', icon: Users },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Native' },
    { name: 'French', level: 'Conversational' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a final-year Computer Science student specializing in Data Science and AI, 
            driven by a passion for creating intelligent solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story & Description */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 font-space">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a forward-thinking innovator, I transform ideas into powerful, real-world solutions 
                that blend creativity with precision. My journey in technology began with a curiosity 
                about artificial intelligence and evolved into a passion for machine learning and data science.
              </p>
              <p>
                I thrive on tackling challenges with an intuitive, results-driven approach, 
                delivering outcomes that leave a lasting impact. Whether it's developing traffic 
                management systems or creating intelligent waste segregation solutions, 
                I'm fueled by a relentless drive for excellence.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science Engineering with a specialization 
                in Data Science & AI, I'm always eager to push boundaries and turn ambitious 
                visions into reality.
              </p>
            </div>

            {/* Education */}
            <Card className="mt-8 bg-gradient-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">B.Tech CSE (Data Science & AI)</h4>
                    <p className="text-muted-foreground mb-2">Dr.M.G.R Educational and Research Institute</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        2022 - Present
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Chennai, India
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Languages */}
          <div className="space-y-8 animate-fade-in">

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-space">Languages</h3>
              <Card className="bg-gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{language.name}</span>
                        <Badge variant="secondary">{language.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-6 gradient-text font-space">Connect With Me</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-xs text-muted-foreground">West Tambaram, Chennai-600045</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors">
                    <div className="p-2 bg-accent/10 rounded-lg mr-3">
                      <Badge variant="outline" className="text-xs border-0 bg-transparent p-0">📧</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs text-muted-foreground">ameermalikbahad07@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                    <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                      <Badge variant="outline" className="text-xs border-0 bg-transparent p-0">📱</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-xs text-muted-foreground">+91 9087223978</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors">
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                      <Badge variant="outline" className="text-xs border-0 bg-transparent p-0">💼</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">www.linkedin.com/in/ameer-malik-bahad07</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;