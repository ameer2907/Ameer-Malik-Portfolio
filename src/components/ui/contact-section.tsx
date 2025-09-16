import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Download,
  MessageCircle,
  Calendar,
  Clock
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ameermalikbahad07@gmail.com',
      href: 'mailto:ameermalikbahad07@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9087223978',
      href: 'tel:+919087223978',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'West Tambaram, Chennai-600045',
      href: '#',
      color: 'text-red-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ameer2907',
      href: 'https://github.com/ameer2907',
      color: 'text-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/ameer-malik-bahad07',
      href: 'https://www.linkedin.com/in/ameer-malik-bahad07',
      color: 'text-blue-600'
    }
  ];

  const quickActions = [
    {
      icon: Download,
      label: 'Download Resume',
      description: 'Get my latest resume',
      action: () => {
        toast({
          title: "Resume Download",
          description: "Resume will be downloaded shortly.",
        });
      }
    },
    {
      icon: Calendar,
      label: 'Schedule a Call',
      description: 'Book a meeting with me',
      action: () => {
        toast({
          title: "Calendar Integration",
          description: "Redirecting to calendar booking...",
        });
      }
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Chat',
      description: 'Start a conversation',
      action: () => {
        window.open('https://wa.me/919087223978', '_blank');
      }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or just having a conversation about technology and AI. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-primary/20 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-space">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all focus:shadow-soft"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all focus:shadow-soft"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="transition-all focus:shadow-soft"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      required
                      className="transition-all focus:shadow-soft resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-glow hover:shadow-large transition-all"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-gradient-card border-primary/20 shadow-medium">
              <CardHeader>
                <CardTitle className="font-space">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className={`p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors ${info.color}`}>
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-primary/20 shadow-medium">
              <CardHeader>
                <CardTitle className="font-space">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 hover:shadow-soft transition-all"
                    onClick={action.action}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">{action.label}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-hero text-white border-none">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <h3 className="font-semibold mb-2">Current Availability</h3>
                <p className="text-sm opacity-90 mb-4">
                  Open for internship opportunities and exciting projects
                </p>
                <Badge variant="secondary" className="text-xs">
                  Available Now
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-4 bg-gradient-card rounded-xl border border-primary/20">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
            <span className="text-sm text-muted-foreground">
              Usually responds within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;