import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

const Hero: React.FC = () => {
  const imageSrc = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxurious%20modern%20living%20room%20with%20beige%20and%20white%20tones%2C%20spacious%2C%20high%20ceilings%2C%20minimalist%2C%20elegant%2C%20soft%20lighting%2C%20high%20quality%2C%208k&image_size=landscape_16_9";
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Preload the background image with high priority */}
      <img 
        src={imageSrc} 
        alt="" 
        loading="eager" 
        fetchPriority="high" 
        className="w-0 h-0 opacity-0 absolute" 
        onLoad={() => setBgLoaded(true)}
      />
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
      </div>



      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ds-white font-bold mb-6 leading-tight drop-shadow-lg"
          >
            Elevate Your Space with Design Space
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl font-heading text-ds-white mb-10 tracking-wide drop-shadow-md"
          >
            Expert Interior Design & Brand Growth Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-ds-white"
      >
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
