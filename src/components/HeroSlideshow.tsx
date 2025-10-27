
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-hernandez-construction.jpg';
import bathroomFamily from '@/assets/bathroom-family.jpg';
import bathroomModern from '@/assets/bathroom-modern.jpg';
import kitchenFamily from '@/assets/kitchen-family.jpg';
import kitchenModern from '@/assets/kitchen-modern.jpg';
import roofRenovation from '@/assets/roof-renovation.jpg';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    { image: heroImage, alt: "Professional construction and home improvement" },
    { image: bathroomFamily, alt: "Beautiful bathroom renovation" },
    { image: bathroomModern, alt: "Modern stylish bathroom remodel" },
    { image: kitchenFamily, alt: "Family-friendly kitchen renovation" },
    { image: kitchenModern, alt: "Contemporary kitchen design" },
    { image: roofRenovation, alt: "Professional roof renovation" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      setNextSlide(next);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide(next);
        setIsTransitioning(false);
      }, 4000); // 4 second crossfade
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="absolute inset-0">
      {/* Current slide */}
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover object-center scale-x-[-1]"
        />
      </div>
      
      {/* Next slide with crossfade effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={slides[nextSlide].image} 
          alt={slides[nextSlide].alt}
          className="w-full h-full object-cover object-center scale-x-[-1]"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy-deep/70"></div>
    </div>
  );
};

export default HeroSlideshow;
