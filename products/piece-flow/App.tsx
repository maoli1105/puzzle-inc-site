
import React, { useState, useEffect } from 'react';
import LeftSide from './components/LeftSide';
import Sidebar from './components/Sidebar';
import MobileCTA from './components/MobileCTA';
import MouseStalker from './components/MouseStalker';
import Opening from './components/Opening';
import GlobalBackground from './components/GlobalBackground';

import PieceHero from './components/PieceHero';
import Header from './components/Header';
import PieceConcept from './components/PieceConcept';
import PieceFeatures from './components/PieceFeatures';
import PieceStructure from './components/PieceStructure';
import PieceTexture from './components/PieceTexture';
import PieceGallery from './components/PieceGallery';
import PieceColors from './components/PieceColors';
import PieceUtility from './components/PieceUtility';
import PieceMatch from './components/PieceMatch';
import PieceGift from './components/PieceGift';
import PieceReviews from './components/PieceReviews';
import PieceSpec from './components/PieceSpec';
import Dialogue from './components/Dialogue';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = ['hero', 'concept', 'features', 'structure', 'texture', 'gallery', 'colors', 'utility', 'match', 'gift', 'reviews', 'dialogue', 'spec'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`.replace('//', '/');

  return (
    <div className="antialiased font-sans bg-black text-gray-900 min-h-screen">
      <Opening onComplete={() => setLoading(false)} />
      <MouseStalker />

      {/* Global Background (Full Screen) */}
      <GlobalBackground activeSection={activeSection} />

      {/* Background Elements */}
      <div className="noise-overlay" />

      <div className="lg:hidden">
        <Header />
      </div>

      <div className={`transition-opacity duration-1000 relative z-10 ${loading ? 'opacity-0' : 'opacity-100'}`}>

        {/* Main 3-Column Grid Layout */}
        <div className="lg:grid lg:grid-cols-4 min-h-screen">

          {/* Left Column (Fixed) 25% - Transparent to show GlobalBackground */}
          <div className="lg:col-span-1">
            <LeftSide />
          </div>

          {/* Center Column (Scrolls) 50% - Semi-transparent white background */}
          <main className="lg:col-span-2 w-full relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl min-h-screen">
            <div className="pb-24 lg:pb-0">
              <PieceHero />
              <PieceConcept />
              <PieceFeatures />
              <PieceStructure />
              <PieceTexture />
              <PieceGallery />
              <PieceColors />
              <PieceUtility />
              <PieceMatch />
              <PieceGift />
              <PieceReviews />
              <Dialogue />
              <PieceSpec />
            </div>
          </main>

          {/* Right Column (Fixed) 25% - Transparent to show GlobalBackground */}
          <div className="lg:col-span-1">
            <Sidebar activeSection={activeSection} />
          </div>

        </div>

        {/* Mobile Fixed CTA */}
        <MobileCTA />

      </div>
    </div>
  );
};

export default App;
