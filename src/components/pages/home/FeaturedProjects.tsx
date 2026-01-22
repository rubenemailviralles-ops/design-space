import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/common/LazyImage';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Serene Lakeside Villa",
      category: "Residential",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20lakeside%20villa%20interior%2C%20large%20windows%2C%20nature%20view%2C%20beige%20and%20wood%2C%20serene%2C%20luxury%2C%20photorealistic%2C%208k&image_size=landscape_4_3"
    },
    {
      id: 2,
      title: "Urban Chic Penthouse",
      category: "Residential",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Urban%20penthouse%20living%20room%2C%20city%20skyline%20view%2C%20modern%20furniture%2C%20grey%20and%20white%2C%20sophisticated%2C%20interior%20design%2C%208k&image_size=portrait_4_3"
    },
    {
      id: 3,
      title: "Aura Brand Headquarters",
      category: "Commercial",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20office%20lobby%2C%20minimalist%20brand%20headquarters%2C%20spacious%2C%20professional%2C%20white%20and%20glass%2C%20interior%20design%2C%208k&image_size=landscape_4_3"
    }
  ];

  return (
    <Section background="white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-ds-charcoal mb-4">Featured Projects</h2>
          <p className="text-ds-grey text-lg max-w-lg">
            A glimpse into how we transform spaces into experiences.
          </p>
        </div>
        <div className="hidden md:block">
          <Button href="/client-stories" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-4 h-80 md:h-96">
              <div className="absolute inset-0 bg-ds-charcoal/20 group-hover:bg-ds-charcoal/0 transition-all duration-500 z-10" />
              <LazyImage 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-serif font-bold text-ds-charcoal group-hover:text-ds-taupe transition-colors">
              {project.title}
            </h3>
            <p className="text-ds-grey text-sm uppercase tracking-wider mt-1">
              {project.category}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 md:hidden text-center">
        <Button href="/client-stories" variant="outline">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
