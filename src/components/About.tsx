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
      description: 'Award-winning work with attention to detail and commitment to excellence in every project.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with decades of combined expertise in construction and design.',
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Us</span>?
            </h2>
            
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            With over 15 years of experience as a family-owned construction business, we've built our reputation
            on personal service, honest work, and treating every project like it's our own home. From grandfather 
            to grandchildren, construction and care for our community runs in our family.
          </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
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
                      <CheckCircle className="h-5 w-5 text-red mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Our Promise</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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