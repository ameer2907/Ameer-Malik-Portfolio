import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Brain, 
  Palette, 
  BarChart3, 
  Globe, 
  Cpu,
  Monitor
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 75 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-purple-500',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Artificial Intelligence', level: 80 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Deep Learning', level: 75 },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'text-green-500',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.js', level: 70 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Monitor,
      color: 'text-orange-500',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Docker', level: 65 },
        { name: 'Azure', level: 70 },
      ],
    },
  ];

  const certifications = [
    'Python for Data Analysis',
    'Java Fundamentals',
    'NPTEL Elite – User-Centric Computing for HCI',
    'Microsoft Azure - Technical Skills',
    'Cybersecurity – NASSCOM Certified',
    'Hackathon Event – Certified Participation',
    'IoT Workshop – College Event',
    'Power BI Online Workshop – Certified',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning artificial intelligence, web development, 
            and modern technologies, built through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/20 hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 bg-primary/10 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <span className="font-space">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center font-space">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/20 hover:shadow-soft transition-all duration-300 group"
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-accent/10 rounded group-hover:bg-accent/20 transition-colors">
                      <BarChart3 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold mb-6">Additional Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter',
              'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'GCP',
              'Figma', 'Adobe XD', 'Bootstrap', 'Tailwind CSS', 'Material-UI'
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;