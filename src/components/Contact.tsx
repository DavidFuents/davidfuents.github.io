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
      details: '(929) 732-4979',
      description: 'Ready to help with your project',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'mauricio.hdbnyc@gmail.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Emergency Service',
      details: '24/7 Available',
      description: 'For urgent repairs',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-light">{/* Very light blue background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-relaxed">
            <span className="text-primary">Get In</span> 
            <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
              Ready to start your next project? Contact us today for a free consultation 
              and detailed estimate. We're here to help bring your vision to life.
            </p>
            <p className="text-xl text-gold font-medium mt-4 animate-fade-in [animation-delay:400ms]">¡Hablamos Español!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Contact Info */}
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white group animate-fade-in hover-scale" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-full mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                  <info.icon className="h-10 w-10 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{info.title}</h3>
                <p className="text-base font-medium text-gold mb-2 break-all text-center leading-tight">
                  {info.title === 'Email Us' ? (
                    <a href={`mailto:${info.details}`} className="hover:underline">
                      {info.details}
                    </a>
                  ) : info.title === 'Call Us' ? (
                    <a href={`tel:${info.details}`} className="hover:underline">
                      {info.details}
                    </a>
                  ) : (
                    info.details
                  )}
                </p>
                <p className="text-sm text-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;