import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/pages/home/Hero';
import Services from '@/components/pages/home/Services';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import Testimonials from '@/components/pages/home/Testimonials';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';

const Home: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      
      {/* Final CTA Section */}
      <Section background="charcoal" className="text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-ds-white mb-6">Ready to Transform Your Space?</h2>
        <p className="text-ds-white/70 text-lg max-w-2xl mx-auto mb-10">
          Whether you're looking for a complete interior overhaul or a brand strategy refresh, we're here to guide you.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Start Your Project
        </Button>
      </Section>
    </PageLayout>
  );
};

export default Home;
