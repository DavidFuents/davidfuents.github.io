import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Elite Construction</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional home improvement, repair, and landscaping services. 
              Transforming your vision into reality with expert craftsmanship.
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
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Kitchen Renovations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Bathroom Remodels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Home Repairs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Landscaping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Custom Carpentry</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gold" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gold" />
                <span className="text-gray-300">info@eliteconstruction.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gold mt-1" />
                <span className="text-gray-300">123 Construction Way<br />Your City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Elite Construction. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-gold text-sm transition-colors">Licensed & Insured</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;