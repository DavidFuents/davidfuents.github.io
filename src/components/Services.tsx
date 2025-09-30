import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Wrench, TreePine, Hammer, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Improvement',
      description: 'Complete home renovations to enhance your living space.',
      features: ['Kitchen & Bathroom Renovations', 'Flooring Installation', 'Drywall Repair', 'Painting & Staining', 'Christmas Lighting', 'Clean-up Services'],
    },
    {
      icon: Wrench,
      title: 'Handyman Services',
      description: 'Professional handyman services for all your home repair and maintenance needs.',
      features: ['Furniture Assembly', 'Mounting & Installation', 'Caulking & Weatherproofing', 'Basic Carpentry', 'General Home Repairs'],
    },
    {
      icon: Hammer,
      title: 'Custom Carpentry',
      description: 'Handcrafted woodwork and custom carpentry solutions tailored to your specific needs.',
      features: ['Cabinet Installation', 'Built-in Storage', 'Trim Work', 'Furniture Repair'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-soft">{/* Soft blue background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-relaxed">
            <span className="text-primary">Our</span> 
            <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Services</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
              From concept to completion, we provide comprehensive construction and home improvement services with personal attention and care.
            </p>
            <p className="text-xl text-gold font-medium mt-4 animate-fade-in [animation-delay:400ms]">¡Hablamos Español!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg h-full flex flex-col animate-fade-in hover-scale" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                  <service.icon className="h-10 w-10 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
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