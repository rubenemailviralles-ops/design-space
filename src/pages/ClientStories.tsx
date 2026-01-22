import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/common/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

const ClientStories: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Brand Growth'];

  const projects = [
    {
      id: 1,
      title: "Serene Lakeside Villa",
      category: "Residential",
      description: "A complete interior overhaul emphasizing natural light and organic textures.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20lakeside%20villa%20interior%2C%20large%20windows%2C%20nature%20view%2C%20beige%20and%20wood%2C%20serene%2C%20luxury%2C%20photorealistic%2C%208k&image_size=landscape_4_3"
    },
    {
      id: 2,
      title: "Urban Chic Penthouse",
      category: "Residential",
      description: "Sophisticated city living with custom furniture and bold accents.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Urban%20penthouse%20living%20room%2C%20city%20skyline%20view%2C%20modern%20furniture%2C%20grey%20and%20white%2C%20sophisticated%2C%20interior%20design%2C%208k&image_size=portrait_4_3"
    },
    {
      id: 3,
      title: "Aura Brand Headquarters",
      category: "Commercial",
      description: "A workspace designed to foster collaboration and reflect brand values.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20office%20lobby%2C%20minimalist%20brand%20headquarters%2C%20spacious%2C%20professional%2C%20white%20and%20glass%2C%20interior%20design%2C%208k&image_size=landscape_4_3"
    },
    {
      id: 4,
      title: "The minimalist Cafe",
      category: "Commercial",
      description: "Creating a warm, inviting atmosphere with a clean aesthetic.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20cafe%20interior%2C%20wood%20accents%2C%20warm%20lighting%2C%20coffee%20bar%2C%20plants%2C%20cozy%2C%208k&image_size=square_hd"
    },
    {
      id: 5,
      title: "Lumina Visual Identity",
      category: "Brand Growth",
      description: "A complete rebrand for a luxury lighting company.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury%20brand%20identity%20design%2C%20stationery%20mockup%2C%20business%20cards%2C%20elegant%20typography%2C%20minimalist%2C%208k&image_size=landscape_16_9"
    },
    {
      id: 6,
      title: "Echo Tech Office",
      category: "Commercial",
      description: "Futuristic yet human-centric office design for a tech startup.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Futuristic%20office%20interior%2C%20white%20and%20silver%2C%20tech%20startup%2C%20sleek%2C%20modern%20lighting%2C%208k&image_size=landscape_4_3"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <PageLayout>
      {/* Header */}
      <div className="pt-32 pb-16 text-center bg-ds-white">
        <h1 className="text-4xl md:text-6xl font-serif text-ds-charcoal mb-6">Our Transformations</h1>
        <p className="text-lg text-ds-grey max-w-2xl mx-auto px-6">
          Explore a curated selection of our interior design and brand development projects.
        </p>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 border-b-2",
                filter === f 
                  ? "border-ds-charcoal text-ds-charcoal font-medium" 
                  : "border-transparent text-ds-grey hover:text-ds-charcoal"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <Section background="white" className="pt-0">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                  <div className="absolute inset-0 bg-ds-charcoal/0 group-hover:bg-ds-charcoal/10 transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-ds-taupe block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif text-ds-charcoal mb-2">{project.title}</h3>
                  <p className="text-sm text-ds-grey line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default ClientStories;
