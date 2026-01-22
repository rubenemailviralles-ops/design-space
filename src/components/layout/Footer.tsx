import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { preloadPage } from '@/utils/imagePrefetch';

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M16.5 5.2c.7.7 1.7 1.2 2.7 1.3v2.1c-1.6-.1-3.1-.6-4.4-1.6v6.3c0 3-2.4 5.4-5.4 5.4S4 16.3 4 13.4s2.4-5.4 5.4-5.4c.5 0 1 .1 1.5.2v2.3c-.5-.3-1-.4-1.6-.4-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.1-1.4 3.1-3.1V3.5h2.1c.2.7.6 1.3 1.1 1.7z" />
  </svg>
);

const PinterestIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-3.6 19.4c-.1-.8-.2-2.1 0-3l1.4-6.1s-.4-.8-.4-2c0-1.9 1.1-3.3 2.4-3.3 1.1 0 1.6.8 1.6 1.7 0 1-.6 2.6-.9 4l-.5 2c.9 1.8 3.4 1.5 4.5.3 1-1.1 1.4-2.9 1.4-4.5 0-3.2-2.3-5.5-5.7-5.5-3.9 0-6.2 2.9-6.2 6 0 1.2.5 2.5 1.2 3.3.1.1.1.2.1.3-.1.3-.4 1.1-.4 1.3 0 .2-.1.2-.2.1-1.2-.6-1.9-2.4-1.9-3.9 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6.1 0 3.6-1.9 6.5-4.9 6.5-1 0-1.9-.5-2.2-1.1l-.6 2.1c-.2.7-.8 1.9-1.2 2.6A10 10 0 1 0 12 2z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-ds-charcoal text-ds-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link 
              to="/" 
              className="text-2xl font-serif font-bold tracking-wide mb-6 block"
              onMouseEnter={() => preloadPage('/')}
              onFocus={() => preloadPage('/')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Design Space
            </Link>
            <p className="text-ds-white/70 text-sm leading-relaxed mb-6">
              Elevating spaces and growing brands with purposeful design and integrity.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-ds-white/70 hover:text-ds-beige transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ds-white/70 hover:text-ds-beige transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ds-white/70 hover:text-ds-beige transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="TikTok" className="text-ds-white/70 hover:text-ds-beige transition-colors">
                <TikTokIcon size={20} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ds-white/70 hover:text-ds-beige transition-colors">
                <PinterestIcon size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-ds-beige">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-ds-white/70 hover:text-ds-white transition-colors" onMouseEnter={() => preloadPage('/')} onFocus={() => preloadPage('/')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li><Link to="/brand-development" className="text-ds-white/70 hover:text-ds-white transition-colors" onMouseEnter={() => preloadPage('/brand-development')} onFocus={() => preloadPage('/brand-development')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Brand Development</Link></li>
              <li><Link to="/client-stories" className="text-ds-white/70 hover:text-ds-white transition-colors" onMouseEnter={() => preloadPage('/client-stories')} onFocus={() => preloadPage('/client-stories')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Client Stories</Link></li>
              <li><Link to="/about" className="text-ds-white/70 hover:text-ds-white transition-colors" onMouseEnter={() => preloadPage('/about')} onFocus={() => preloadPage('/about')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-ds-beige">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-ds-white/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center space-x-3 text-ds-white/70">
                <Phone size={18} />
                <span>+27 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-ds-white/70">
                <Mail size={18} />
                <span>hello@designspace.co.za</span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-ds-beige">Let's Create Your Space</h4>
            <p className="text-ds-white/70 text-sm mb-6">
              Ready to transform your environment or grow your brand? Let's start the conversation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-6 py-3 border border-ds-beige text-ds-beige hover:bg-ds-beige hover:text-ds-charcoal transition-all duration-300 font-medium tracking-wide text-sm uppercase"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-ds-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-ds-white/50">
          <p>&copy; {new Date().getFullYear()} Design Space. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-ds-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ds-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
