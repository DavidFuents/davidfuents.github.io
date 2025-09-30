
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Quality work with attention to detail and commitment to perfection in every project.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with years of combined expertise in construction and design.',
    },
  ];

  const values = [
    'Free detailed consultations and estimates',
    'Transparent pricing with no hidden fees',
    'Timely project completion',
    'Premium materials and finishes',
    'Comprehensive warranty coverage',
    '24/7 customer support',
  ];

  return (
    <section id="about" className="py-20 bg-background">{/* Clean white background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="animate-fade-in mb-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-relaxed">
                <span className="text-primary">Why Choose</span> 
                <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Us?</span>
              </h2>
            </div>
            
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
            We've built our reputation on personal service, honest work, and treating every project like it's our own home.
          </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover-scale animate-fade-in" style={{animationDelay: `${(index + 1) * 200}ms`}}>
                  <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-xl mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <feature.icon className="h-10 w-10 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>

          {/* Values Card */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  What You Can Expect
                </h3>
                
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Our Promise</h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    We stand behind every project with our satisfaction guarantee. Your project isn't 
                    complete until you're completely satisfied with the results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
