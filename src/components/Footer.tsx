import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info - takes up 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">Hernandez</span>{' '}
              <span className="text-gold">Design & Build</span>
            </h3>
            <p className="text-white mb-4 leading-relaxed">
              Transform your home into your 
              <span className="text-gold font-semibold"> dream space</span> with 
              <span className="text-white"> quality craftsmanship</span> and personal care. 
              We are a family-owned construction business serving our community and bringing your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Home Improvement</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Handyman Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Custom Carpentry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Kitchen & Bathroom</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="-ml-8">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gold" />
                <a href="tel:(929) 732-4979" className="text-gray-300 hover:text-gold transition-colors">
                  (929) 732-4979
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gold" />
                <a href="mailto:mauricio.hdb@gmail.com" className="text-gray-300 hover:text-gold transition-colors">
                  mauricio.hdb@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} Hernandez Design & Build. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Terms of Service</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">Licensed & Insured</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;