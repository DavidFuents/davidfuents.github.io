import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      description: 'Mon-Fri 7AM-6PM, Sat 8AM-4PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@familiaconstruction.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Construction Way',
      description: 'Your City, State 12345',
    },
    {
      icon: Clock,
      title: 'Emergency Service',
      details: '24/7 Available',
      description: 'For urgent repairs',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation 
            and detailed estimate. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Request Your Free Quote
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" className="w-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@example.com" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed *
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select a service...</option>
                      <option>Home Improvement</option>
                      <option>Repair Services</option>
                      <option>Landscaping</option>
                      <option>Interior Design</option>
                      <option>Custom Carpentry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      placeholder="Please describe your project, timeline, and any specific requirements..."
                      className="w-full h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="flex-1">
                      Send Message
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Call Now: (555) 123-4567
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;