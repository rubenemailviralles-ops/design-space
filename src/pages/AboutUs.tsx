import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/common/Section';
import { Heart, Shield, Award, Clock } from 'lucide-react';
import LazyImage from '@/components/common/LazyImage';

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Elena Richardson",
      role: "Founder & Lead Designer",
      bio: "With over 15 years of experience, Elena brings a warmth and sophistication to every project. She believes that good design is about how a space feels, not just how it looks.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20female%20interior%20designer%2C%20warm%20smile%2C%20elegant%2C%20modern%20office%20background%2C%208k&image_size=square_hd"
    },
    {
      name: "David Chen",
      role: "Brand Strategist",
      bio: "David specializes in translating business goals into visual languages. His strategic approach ensures that every brand element serves a purpose.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20male%20creative%20director%2C%20glasses%2C%20smart%20casual%2C%20creative%20studio%20background%2C%208k&image_size=square_hd"
    },
    {
      name: "Sarah Johnson",
      role: "Senior Architect",
      bio: "Sarah's architectural background allows us to tackle complex structural changes with ease, ensuring safety and style go hand in hand.",
      image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20portrait%20of%20female%20architect%2C%20confident%2C%20minimalist%20style%2C%20bright%20studio%2C%208k&image_size=square_hd"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-ds-taupe" />,
      title: "Caring Approach",
      description: "We listen deeply to your needs and treat every project as if it were our own home."
    },
    {
      icon: <Shield className="w-8 h-8 text-ds-taupe" />,
      title: "Integrity",
      description: "Honesty and transparency are at the core of our business. No hidden fees, just clear communication."
    },
    {
      icon: <Award className="w-8 h-8 text-ds-taupe" />,
      title: "Excellence",
      description: "We strive for perfection in every detail, from the broad architectural strokes to the smallest fabric stitch."
    }
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative pt-32 pb-20 bg-ds-beige/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-ds-charcoal mb-6">Who We Are</h1>
          <p className="text-lg text-ds-grey max-w-2xl mx-auto mb-12">
            A team of passionate designers and strategists dedicated to elevating the way you live and work.
          </p>
          <LazyImage 
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Creative%20team%20meeting%20in%20modern%20minimalist%20office%2C%20collaborating%2C%20looking%20at%20blueprints%2C%20natural%20light%2C%20warm%20atmosphere%2C%208k&image_size=landscape_16_9" 
            alt="Design Space Team" 
            className="w-full max-w-5xl mx-auto rounded-sm shadow-lg aspect-[16/9]"
            eager
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Story */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-ds-charcoal mb-6">Our Story</h2>
          <p className="text-ds-grey leading-relaxed text-lg mb-8">
            Founded in 2015, Design Space began with a simple mission: to make luxury design accessible and personal. We noticed that many high-end design firms lacked the personal touch—the "heart" that makes a house a home or a business a brand.
          </p>
          <p className="text-ds-grey leading-relaxed text-lg">
            Over the years, we've grown from a small residential studio into a comprehensive design agency, but our core philosophy remains the same: we design with love, integrity, and an unwavering commitment to your vision.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section background="grey">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-ds-charcoal mb-4">Our Values</h2>
          <p className="text-ds-grey">The principles that guide every decision we make.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-ds-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-serif font-bold text-ds-charcoal mb-3">{value.title}</h3>
              <p className="text-ds-grey text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-ds-charcoal mb-4">Meet the Team</h2>
          <p className="text-ds-grey">The creative minds behind your next project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-ds-beige/20 rounded-full transform translate-x-2 translate-y-2"></div>
                <LazyImage 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full relative z-10 border-4 border-ds-white shadow-md"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ds-charcoal mb-1">{member.name}</h3>
              <p className="text-ds-taupe uppercase tracking-widest text-xs font-bold mb-4">{member.role}</p>
              <p className="text-ds-grey text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="beige" className="border-t border-ds-white/50">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-serif text-ds-charcoal mb-12 text-center">Our Journey</h2>
           <div className="space-y-8">
             {[
               { year: "2015", title: "Founded", desc: "Design Space opens its doors in Johannesburg." },
               { year: "2018", title: "Expansion", desc: "Launched our commercial design division." },
               { year: "2020", title: "Brand Consulting", desc: "Introduced strategic brand development services." },
               { year: "2023", title: "Award Winning", desc: "Recognized as Top Design Agency of the Year." }
             ].map((item, index) => (
               <div key={index} className="flex flex-col md:flex-row md:items-center gap-4">
                 <div className="w-24 flex-shrink-0 text-2xl font-serif font-bold text-ds-taupe">{item.year}</div>
                 <div className="hidden md:block w-px h-12 bg-ds-charcoal/20 mx-4"></div>
                 <div>
                   <h4 className="text-xl font-bold text-ds-charcoal">{item.title}</h4>
                   <p className="text-ds-grey">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default AboutUs;
