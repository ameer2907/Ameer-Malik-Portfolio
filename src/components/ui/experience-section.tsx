import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Target
} from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: 'Machine Learning Intern',
    company: 'Thirumoolar IT Solutions',
    duration: 'Summer 2024',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Applied machine learning algorithms to real-world datasets, performed data preprocessing, and created Power BI dashboards to visualize insights. Gained basic fundamentals of prompt engineering.',
    achievements: [
      'Developed and implemented ML models for data analysis',
      'Created interactive Power BI dashboards for data visualization',
      'Performed comprehensive data preprocessing and cleaning',
      'Learned fundamentals of prompt engineering for AI applications',
      'Worked with real-world datasets to derive actionable insights',
      'Collaborated with team members on various ML projects'
    ],
    skills: ['Machine Learning', 'Python', 'Power BI', 'Data Preprocessing', 'Data Visualization', 'Prompt Engineering'],
    icon: Building2
  };

  const achievements = [
    {
      title: 'Hackathon Participation',
      description: 'Participated in college hackathon event, developing innovative solutions under time constraints',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'IoT Workshop',
      description: 'Completed hands-on IoT workshop, learning about connected devices and sensor integration',
      icon: Target,
      color: 'text-green-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Leading multiple project initiatives and mentoring fellow students in AI/ML concepts',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Consistently upgrading skills through online courses and practical project implementation',
      icon: TrendingUp,
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience in machine learning, 
            data science, and innovative project development.
          </p>
        </div>

        {/* Main Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 font-space flex items-center">
            <Briefcase className="h-6 w-6 text-primary mr-2" />
            Professional Experience
          </h3>
          
          <Card className="bg-gradient-card border-primary/20 hover:shadow-large transition-all duration-300 animate-slide-up">
            <CardHeader className="pb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <experience.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <CardTitle className="text-2xl font-space">{experience.title}</CardTitle>
                    <Badge variant="secondary">{experience.type}</Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{experience.company}</h4>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
              
              {/* Key Achievements */}
              <div>
                <h5 className="font-semibold mb-4">Key Achievements & Responsibilities</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Skills Developed */}
              <div>
                <h5 className="font-semibold mb-3">Skills Developed</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 font-space">Additional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-primary/20 hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero text-white border-none inline-block max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-space">Looking Forward</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                I'm actively seeking internship opportunities where I can apply my AI and data science 
                skills to solve real-world problems and contribute to innovative projects. 
                Ready to bring fresh perspectives and technical expertise to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Available for Internships
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Open to Remote Work
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  Quick Learner
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;