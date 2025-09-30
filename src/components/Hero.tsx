import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Clock, MapPin } from 'lucide-react';
import hLogo from '@/assets/h-logo-white.png';
import HeroSlideshow from './HeroSlideshow';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Slideshow with Overlay */}
      <HeroSlideshow />

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl ml-0 lg:ml-64">
          {/* Main Heading */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-[1.1] tracking-tight">
              <span className="text-white block mb-2">Hernandez</span>
              <span className="text-gold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent block pb-1 md:pb-2 leading-[1.1]">Design & Build</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-12 max-w-4xl animate-fade-in" style={{animationDelay: "200ms"}}>
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              Transform your home into your 
              <span className="text-gold font-semibold"> dream space</span> with 
              <span className="text-white"> quality craftsmanship</span> and personal care. 
              We are a family-owned construction business serving our community and bringing your vision to life.
            </p>
            
          </div>

          {/* Call to Action */}
          <div className="mb-16 animate-fade-in" style={{animationDelay: "600ms"}}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-4" asChild>
                <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
                  Get Free Quote
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-xl text-gold font-semibold animate-fade-in" style={{animationDelay: "800ms"}}>
                ¡Hablamos Español!
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-white/20 pt-8 animate-fade-in" style={{animationDelay: "800ms"}}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
              <div className="flex items-center gap-4 group hover-scale">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Licensed</div>
                  <div className="text-gray-300">& Insured</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group hover-scale">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Clock className="h-8 w-8 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group hover-scale">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <MapPin className="h-8 w-8 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">NYC</div>
                  <div className="text-gray-300">Based</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Logo in bottom right */}
      <div className="absolute bottom-8 right-72 z-20">
        <img 
          src={hLogo} 
          alt="H Design & Build Logo" 
          className="h-20 w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;