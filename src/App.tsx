import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage';
import { VisionPage } from './pages/VisionPage';
import { BuyersGuidePage } from './pages/BuyersGuidePage';
import { BlogPage } from './pages/BlogPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SEO = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Sommerset at Greenpark | Luxury Land Development',
      '/map': 'Interactive Site Plan | Sommerset at Greenpark',
      '/vision': 'The Vision & Gallery | Sommerset at Greenpark',
      '/guide': 'Buyer\'s Guide | Sommerset at Greenpark',
      '/blog': 'Sommerset Journal | Real Estate Insights',
    };
    
    document.title = titles[pathname] || 'Sommerset at Greenpark';
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/guide" element={<BuyersGuidePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Structured Schema for RealEstateListing */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "RealEstateListing",
          "name": "Sommerset at Greenpark",
          "description": "Premium land development project in St. Ann, Jamaica.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "St. Ann",
            "addressCountry": "JM"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "110000",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
    </Router>
  );
}
