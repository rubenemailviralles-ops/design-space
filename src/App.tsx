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
  return (
    <Router>
      <ScrollToTop />
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
