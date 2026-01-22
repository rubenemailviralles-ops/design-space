import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const BrandDevelopment = lazy(() => import('./pages/BrandDevelopment'));
const ClientStories = lazy(() => import('./pages/ClientStories'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
import ScrollToTop from '@/components/layout/ScrollToTop';

function App() {
  const HOME_HERO_SRC = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxurious%20modern%20living%20room%20with%20beige%20and%20white%20tones%2C%20spacious%2C%20high%20ceilings%2C%20minimalist%2C%20elegant%2C%20soft%20lighting%2C%20high%20quality%2C%208k&image_size=landscape_16_9";
  const ABOUT_HERO_SRC = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Creative%20team%20meeting%20in%20modern%20minimalist%20office%2C%20collaborating%2C%20looking%20at%20blueprints%2C%20natural%20light%2C%20warm%20atmosphere%2C%208k&image_size=landscape_16_9";
  const CONTACT_HERO_SRC = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Warm%20inviting%20modern%20living%20room%20corner%20with%20armchair%2C%20reading%20lamp%2C%20plant%2C%20sunlight%2C%20cozy%2C%20high%20quality%2C%208k&image_size=landscape_4_3";
  const BRAND_DEV_HERO_SRC = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20brand%20mood%20board%20with%20neutral%20colors%2C%20typography%20samples%2C%20textures%2C%20high%20quality%2C%20artistic%20layout%2C%208k&image_size=landscape_16_9";
  return (
    <Router>
      <ScrollToTop />
      <img src={HOME_HERO_SRC} alt="" loading="eager" fetchPriority="high" className="w-0 h-0 opacity-0 absolute" />
      <img src={ABOUT_HERO_SRC} alt="" loading="eager" fetchPriority="high" className="w-0 h-0 opacity-0 absolute" />
      <img src={CONTACT_HERO_SRC} alt="" loading="eager" fetchPriority="high" className="w-0 h-0 opacity-0 absolute" />
      <img src={BRAND_DEV_HERO_SRC} alt="" loading="eager" fetchPriority="high" className="w-0 h-0 opacity-0 absolute" />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-ds-charcoal">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-development" element={<BrandDevelopment />} />
          <Route path="/client-stories" element={<ClientStories />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
