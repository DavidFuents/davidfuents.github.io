import { Button } from '@/components/ui/button';
import { ArrowRight, Hammer, Award, Users, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-hernandez-construction.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional construction and home improvement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-deep/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Home Into Your 
            <span className="text-gold"> Dream Space</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Family-owned construction business serving our community with pride. 
            Generations of craftsmanship, bringing your vision to life with personal care and attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Hammer className="h-6 w-6 text-gold" />
              </div>
              <div className="text-2xl font-bold text-white">Quality</div>
              <div className="text-gray-300 text-sm">Craftsmanship</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-gold" />
              </div>
              <div className="text-2xl font-bold text-white">NYC</div>
              <div className="text-gray-300 text-sm">Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;