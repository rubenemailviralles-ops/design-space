import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import { CheckCircle } from 'lucide-react';

const BrandDevelopment: React.FC = () => {
  const heroImage = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20brand%20mood%20board%20with%20neutral%20colors%2C%20typography%20samples%2C%20textures%2C%20high%20quality%2C%20artistic%20layout%2C%208k&image_size=landscape_16_9";

  const services = [
    {
      title: "Brand Strategy",
      description: "Defining your core purpose, values, and positioning to create a solid foundation for growth."
    },
    {
      title: "Visual Identity",
      description: "Crafting a cohesive look and feel that communicates your brand's personality and authority."
    },
    {
      title: "Growth Consulting",
      description: "Strategic guidance to scale your brand with integrity and consistent messaging."
    }
  ];

  const benefits = [
    "Establish industry authority",
    "Build trust through consistent design",
    "Attract your ideal clientele",
    "Communicate your values effectively"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:py-40 bg-ds-beige/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-ds-charcoal mb-6">
              Grow Your Brand with Purpose
            </h1>
            <p className="text-lg text-ds-grey mb-8 leading-relaxed">
              Beyond interior design, we help businesses build authoritative, meaningful brands. Our consulting services align your visual identity with your core values.
            </p>
            <Button href="/contact">Book a Consultation</Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-ds-white/50 z-0 rounded-lg transform rotate-2"></div>
            <img 
              src={heroImage} 
              alt="Brand Mood Board" 
              className="relative z-10 w-full rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Services Breakdown */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ds-charcoal mb-4">Our Approach</h2>
            <p className="text-ds-grey">Holistic brand development for modern businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-ds-beige hover:border-ds-taupe transition-colors duration-300">
                <h3 className="text-xl font-serif font-bold text-ds-charcoal mb-4">{service.title}</h3>
                <p className="text-ds-grey text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="grey">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20office%20desk%20flatlay%20with%20brand%20stationery%2C%20laptop%2C%20coffee%2C%20beige%20tones%2C%20professional%2C%208k&image_size=square_hd" 
              alt="Brand Strategy" 
              className="w-full h-auto shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-ds-charcoal mb-6">Why Brand Matters</h2>
            <p className="text-ds-grey mb-8">
              In a crowded marketplace, your brand is your promise. We help you keep that promise with visual consistency and strategic clarity.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3 text-ds-charcoal">
                  <CheckCircle className="text-ds-taupe w-5 h-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="text-center">
        <h2 className="text-3xl font-serif text-ds-charcoal mb-6">Ready to elevate your brand?</h2>
        <Button href="/contact" variant="outline">Get in Touch</Button>
      </Section>
    </PageLayout>
  );
};

export default BrandDevelopment;
