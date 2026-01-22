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
  return (
    <Router>
      <ScrollToTop />
      <img src={HOME_HERO_SRC} alt="" loading="eager" fetchPriority="high" className="w-0 h-0 opacity-0 absolute" />
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
