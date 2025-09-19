import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Wrench, TreePine, Hammer, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Improvement',
      description: 'Complete home renovations and structural improvements to enhance your living space.',
      features: ['Kitchen & Bathroom Renovations', 'Flooring Installation', 'Drywall Repair', 'Painting & Staining', 'Clean-up Services'],
    },
    {
      icon: TreePine,
      title: 'Landscaping',
      description: 'Transform your outdoor space with professional landscaping and hardscaping services.',
      features: ['Garden Design', 'Hardscaping', 'Lawn Care', 'Outdoor Lighting'],
    },
    {
      icon: Hammer,
      title: 'Custom Carpentry',
      description: 'Handcrafted woodwork and custom carpentry solutions tailored to your specific needs.',
      features: ['Custom Cabinets', 'Built-in Storage', 'Trim Work', 'Furniture Repair'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, our family provides comprehensive construction and home improvement services
            with personal attention and care that only a family business can offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
              Request a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;