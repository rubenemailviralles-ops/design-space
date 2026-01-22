import React from 'react';
import Section from '@/components/common/Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Design Space completely transformed our home into a sanctuary. Their attention to detail and ability to capture our personality was incredible.",
      author: "Sarah & James Mitchell",
      role: "Residential Clients"
    },
    {
      quote: "The branding strategy was a game changer for our business. We finally have a visual identity that matches the quality of our services.",
      author: "Michael Ross",
      role: "CEO, Ross Ventures"
    }
  ];

  return (
    <Section background="grey">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-ds-charcoal mb-4">Client Stories</h2>
        <p className="text-ds-charcoal/70 text-lg">Trusted by homeowners and businesses alike.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-ds-white p-10 relative">
            <Quote className="absolute top-8 left-8 text-ds-beige w-12 h-12 -z-0 opacity-50" />
            <p className="text-ds-charcoal text-lg md:text-xl italic font-serif leading-relaxed mb-8 relative z-10">
              "{item.quote}"
            </p>
            <div>
              <p className="font-bold text-ds-charcoal uppercase tracking-wide text-sm">{item.author}</p>
              <p className="text-ds-grey text-xs mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
