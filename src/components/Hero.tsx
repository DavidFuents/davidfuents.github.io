import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-family-construction.jpg';

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
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 to-black-deep/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Home Into Your 
            <span className="text-red"> Dream Space</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Family-owned construction business serving our community with pride. 
            Three generations of craftsmanship, bringing your vision to life with personal care and attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black-deep">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-red" />
              </div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-red" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-red" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;