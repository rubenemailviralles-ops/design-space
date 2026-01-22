import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandDevelopment from './pages/BrandDevelopment';
import ClientStories from './pages/ClientStories';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-development" element={<BrandDevelopment />} />
        <Route path="/client-stories" element={<ClientStories />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
