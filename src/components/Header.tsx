import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import hLogo from '@/assets/hdb-logo-latest.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden md:grid items-center h-20 gap-4" style={{gridTemplateColumns: "0.6fr auto 1.4fr"}}>
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={hLogo} 
              alt="Hernandez Design & Build Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation - Shifted Right */}
          <nav className="flex items-center justify-center space-x-8 ml-60">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-navy-deep hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center justify-end space-x-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:(929) 732-4979" className="hover:underline">(929) 732-4979</a>
            </div>
            <Button variant="hero" size="sm" asChild>
              <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
                Get Quote
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center h-20 w-full">
          <div className="flex items-center">
            <img 
              src={hLogo} 
              alt="Hernandez Design & Build Logo" 
              className="h-20 w-auto"
            />
          </div>
          <button
            className="ml-auto p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-navy-deep hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:(929) 732-4979" className="hover:underline">(929) 732-4979</a>
                </div>
                <Button variant="hero" size="sm" className="w-fit" asChild>
                  <a href="https://forms.gle/SqdUo792PQ7G2Qpu7" target="_blank" rel="noopener noreferrer">
                    Get Quote
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;