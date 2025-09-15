import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  ExternalLink, 
  Github, 
  Car, 
  Trash2, 
  ShoppingCart, 
  User,
  Calendar,
  Star
} from 'lucide-react';
import aiPattern from '@/assets/ai-pattern.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Advanced Traffic Management System',
      description: 'Built a dynamic traffic control solution with vehicle detection, congestion level analysis, and real-time map display for smarter traffic flow management.',
      icon: Car,
      status: 'Completed',
      featured: true,
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Real-time Processing', 'Data Visualization'],
      features: [
        'Vehicle detection and counting',
        'Traffic congestion analysis',
        'Real-time map integration',
        'Smart signal optimization',
        'Data analytics dashboard'
      ],
      github: '#',
      demo: '#',
      image: 'gradient-from-blue-500 to-purple-600'
    },
    {
      title: 'Advanced Traffic Management System using IoT with Real Time Monitoring Dashboard',
      description: 'Intelligent traffic control system utilizing IoT sensors and machine learning algorithms to optimize traffic flow, reduce congestion, and provide real-time monitoring through an interactive dashboard for urban traffic management.',
      icon: Trash2,
      status: 'In Active',
      featured: true,
      technologies: ['IoT', 'Arduino', 'Machine Learning', 'Real-time Analytics', 'Mobile App', 'Sensor Integration'],
      features: [
        'IoT-enabled waste bin monitoring',
        'Real-time analytics dashboard',
        'Automated waste classification',
        'Predictive collection scheduling',
        'Environmental impact analysis'
      ],
      github: '#',
      demo: '#',
      image: 'gradient-from-green-500 to-teal-600'
    },
    {
      title: 'E-commerce Website',
      description: 'Built a modern shopping platform with product display, dark mode, chatbot integration, and custom animations for a professional user experience.',
      icon: ShoppingCart,
      status: 'Completed',
      featured: false,
      technologies: ['React.js', 'Node.js', 'Socket.io', 'Payment Integration'],
      features: [
        'Responsive design',
        'Shopping cart functionality',
        'Payment integration',
        'Real-time chat support',
        'Admin dashboard'
      ],
      github: '#',
      demo: '#',
      image: 'gradient-from-orange-500 to-pink-600'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive, animated personal portfolio showcasing skills, projects, and certifications with interactive UI/UX features.',
      icon: User,
      status: 'Completed',
      featured: false,
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      features: [
        'Responsive design',
        'Interactive animations',
        'Dark/Light mode',
        'Contact form',
        'SEO optimized'
      ],
      github: '#',
      demo: '#',
      image: 'gradient-from-purple-500 to-blue-600'
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${aiPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Enhanced overlay for readability */}
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-button animate-pulse-glow">
            Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and applications I've built, 
            demonstrating my expertise in AI, web development, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 font-space flex items-center">
            <Star className="h-6 w-6 text-accent mr-2 glow-icon animate-icon-glow" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-primary/30 project-glow animate-slide-up group overflow-hidden"
              >
                {/* Project Header with Icon */}
                <div className={`h-32 bg-${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg glow-button animate-pulse-glow">
                      <project.icon className="h-8 w-8 text-white glow-icon" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="bg-white/20 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold font-space group-hover:gradient-text transition-all">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs glow-button animate-pulse-glow">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h5 className="font-semibold mb-2">Key Features</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button variant="glow" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2 glow-icon" />
                      Live Demo
                    </Button>
                    <Button variant="glow-outline" size="sm">
                      <Github className="h-4 w-4 glow-icon" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 font-space">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-primary/30 project-glow group animate-fade-in"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors glow-button">
                      <project.icon className="h-6 w-6 text-primary glow-icon" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold font-space">{project.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs glow-button animate-pulse-glow">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button variant="glow-outline" size="sm" className="text-xs">
                          <Github className="h-3 w-3 mr-1 glow-icon" />
                          Code
                        </Button>
                        <Button variant="glow-outline" size="sm" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1 glow-icon" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-white border-none inline-block project-glow animate-intense-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-space">Want to see more?</h3>
              <p className="mb-6 opacity-90">
                Check out my GitHub for additional projects and contributions to open source.
              </p>
              <Button variant="tech" size="xl">
                <Github className="h-5 w-5 mr-2 glow-icon" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
