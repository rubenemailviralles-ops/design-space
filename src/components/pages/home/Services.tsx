import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Layout } from 'lucide-react';
import Section from '@/components/common/Section';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-ds-taupe" />,
      title: "Interior Design",
      description: "We craft immersive, luxurious environments that blend functionality with breathtaking aesthetics. From residential sanctuaries to commercial statements, we design spaces that inspire."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-ds-taupe" />,
      title: "Brand Development",
      description: "Our strategic approach to brand growth combines visual identity with market positioning. We help you build an authoritative presence that resonates with your audience through purposeful design."
    },
    {
      icon: <Palette className="w-10 h-10 text-ds-taupe" />,
      title: "Design Consultation",
      description: "Personalized guidance to refine your vision. whether you're refreshing a single room or reimagining your entire brand strategy, our experts provide the clarity and direction you need."
    }
  ];

  return (
    <Section background="beige">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-ds-charcoal mb-6">Our Expertise</h2>
        <p className="text-ds-charcoal/80 text-lg leading-relaxed">
          At Design Space, we believe in the power of environment and identity. We bring a caring, holistic approach to every project, ensuring your space and brand tell your unique story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-ds-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 text-center border-t-4 border-ds-taupe"
          >
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-ds-charcoal mb-4">{service.title}</h3>
            <p className="text-ds-grey leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
