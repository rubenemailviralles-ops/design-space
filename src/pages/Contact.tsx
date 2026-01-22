import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/common/Section';
import Button from '@/components/common/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '@/components/common/LazyImage';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative pt-32 pb-20 bg-ds-beige/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-ds-charcoal mb-6">Let's Connect</h1>
            <p className="text-lg text-ds-grey mb-8 leading-relaxed">
              We'd love to hear about your vision. Whether you have a specific project in mind or just want to explore possibilities, get in touch.
            </p>
          </div>
          <div>
            <LazyImage 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Warm%20inviting%20modern%20living%20room%20corner%20with%20armchair%2C%20reading%20lamp%2C%20plant%2C%20sunlight%2C%20cozy%2C%20high%20quality%2C%208k&image_size=landscape_4_3" 
              alt="Contact Us" 
              className="w-full rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-ds-charcoal mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-ds-beige/30 p-3 rounded-full">
                  <MapPin className="text-ds-charcoal w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-ds-charcoal text-lg mb-1">Visit Us</h3>
                  <p className="text-ds-grey">
                    123 Design Avenue, Rosebank<br />
                    Johannesburg, 2196<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ds-beige/30 p-3 rounded-full">
                  <Phone className="text-ds-charcoal w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-ds-charcoal text-lg mb-1">Call Us</h3>
                  <p className="text-ds-grey">+27 11 123 4567</p>
                  <p className="text-ds-grey text-sm mt-1">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ds-beige/30 p-3 rounded-full">
                  <Mail className="text-ds-charcoal w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-ds-charcoal text-lg mb-1">Email Us</h3>
                  <p className="text-ds-grey">hello@designspace.co.za</p>
                  <p className="text-ds-grey text-sm mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="w-full h-64 rounded-sm overflow-hidden border border-ds-beige">
                <iframe
                  src="https://www.google.com/maps?q=-25.7658464,28.2987076&hl=en&z=16&output=embed"
                  title="Lynnridge Walk Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 text-center">
                <a
                  href="https://www.google.com/maps/place/Lynnridge+Walk/@-25.7658516,28.2980414,18.5z/data=!4m6!3m5!1s0x1ebfda09aa7a437d:0x54f7abbd005c98f9!8m2!3d-25.7658464!4d28.2987076!16s%2Fg%2F11b7ywm7hb?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 border border-ds-taupe text-ds-taupe hover:bg-ds-taupe hover:text-ds-white transition-all duration-300 font-medium tracking-wide text-sm uppercase"
                  aria-label="Open location on Google Maps"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-ds-white border border-ds-beige p-8 md:p-12 shadow-sm relative overflow-hidden">
             <AnimatePresence mode="wait">
               {formState === 'success' ? (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center h-full text-center py-20"
                 >
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle size={32} />
                   </div>
                   <h3 className="text-2xl font-serif text-ds-charcoal mb-4">Message Sent!</h3>
                   <p className="text-ds-grey mb-8">
                     Thank you for reaching out. We've received your message and will get back to you shortly.
                   </p>
                   <Button variant="outline" onClick={() => setFormState('idle')}>Send Another Message</Button>
                 </motion.div>
               ) : (
                 <motion.form 
                   key="form"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   onSubmit={handleSubmit} 
                   className="space-y-6"
                 >
                   <div>
                     <label htmlFor="name" className="block text-sm font-bold text-ds-charcoal uppercase tracking-wider mb-2">Name</label>
                     <input 
                       type="text" 
                       id="name" 
                       name="name" 
                       required
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-ds-beige/10 border border-ds-beige focus:border-ds-taupe focus:ring-1 focus:ring-ds-taupe outline-none transition-colors"
                       placeholder="Your Name"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-bold text-ds-charcoal uppercase tracking-wider mb-2">Email</label>
                     <input 
                       type="email" 
                       id="email" 
                       name="email" 
                       required
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-ds-beige/10 border border-ds-beige focus:border-ds-taupe focus:ring-1 focus:ring-ds-taupe outline-none transition-colors"
                       placeholder="your@email.com"
                     />
                   </div>
                   <div>
                     <label htmlFor="message" className="block text-sm font-bold text-ds-charcoal uppercase tracking-wider mb-2">Message</label>
                     <textarea 
                       id="message" 
                       name="message" 
                       rows={5}
                       required
                       value={formData.message}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-ds-beige/10 border border-ds-beige focus:border-ds-taupe focus:ring-1 focus:ring-ds-taupe outline-none transition-colors resize-none"
                       placeholder="How can we help you?"
                     />
                   </div>
                   <Button 
                     type="submit" 
                     className="w-full" 
                     disabled={formState === 'submitting'}
                   >
                     {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                   </Button>
                 </motion.form>
               )}
             </AnimatePresence>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
