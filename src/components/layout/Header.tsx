import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { preloadPage } from '@/utils/imagePrefetch';

const MotionBurger: React.FC<{ open: boolean; barClass: string }> = ({ open, barClass }) => {
  return (
    <div className="relative w-7 h-7">
      <motion.span
        className={cn("absolute left-0 right-0 h-[2px]", barClass)}
        style={{ top: '7px' }}
        animate={open ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
      <motion.span
        className={cn("absolute left-0 right-0 h-[2px]", barClass)}
        style={{ top: '13px' }}
        animate={open ? { opacity: 0, scaleX: 0.6 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.span
        className={cn("absolute left-0 right-0 h-[2px]", barClass)}
        style={{ top: '19px' }}
        animate={open ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHeroRoute = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Brand Development', path: '/brand-development' },
    { name: 'Client Stories', path: '/client-stories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-ds-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between md:gap-12 lg:gap-16">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-ds-charcoal tracking-wide">
          Design Space
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12 md:ml-12 lg:ml-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-widest uppercase transition-colors hover:text-ds-taupe px-1',
                location.pathname === link.path ? 'text-ds-charcoal border-b-2 border-ds-taupe' : 'text-ds-grey'
              )}
              onMouseEnter={() => preloadPage(link.path)}
              onFocus={() => preloadPage(link.path)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ds-charcoal focus:outline-none relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <MotionBurger 
            open={isOpen} 
            barClass={cn(isHeroRoute && !scrolled ? 'bg-ds-white' : 'bg-ds-charcoal')}
          />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: '100vh' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={cn(
              'md:hidden fixed inset-0 top-0 z-40 overflow-hidden',
              'bg-ds-charcoal/90 backdrop-blur-xl'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xl font-serif font-medium text-ds-white transition-colors hover:text-ds-taupe"
                  onMouseEnter={() => preloadPage(link.path)}
                  onFocus={() => preloadPage(link.path)}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
