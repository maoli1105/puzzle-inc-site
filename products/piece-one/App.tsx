
import React, { useState, useEffect } from 'react';
import LeftSide from './components/LeftSide';
import Sidebar from './components/Sidebar';
import MobileCTA from './components/MobileCTA';
import MouseStalker from './components/MouseStalker';
import Opening from './components/Opening';
import GlobalBackground from './components/GlobalBackground';

import PieceHero from './components/PieceHero';
import PieceConcept from './components/PieceConcept';
import PieceFeatures from './components/PieceFeatures';
import PieceStructure from './components/PieceStructure';
import PieceTexture from './components/PieceTexture';
import PieceGallery from './components/PieceGallery';
import PieceColors from './components/PieceColors';
import PieceUtility from './components/PieceUtility';
import PieceMatch from './components/PieceMatch';
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

    const sections = ['hero', 'concept', 'features', 'structure', 'texture', 'gallery', 'colors', 'utility', 'match', 'reviews', 'spec', 'dialogue'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased font-sans bg-black text-gray-900 min-h-screen">
      <Opening onComplete={() => setLoading(false)} />
      <MouseStalker />

      {/* Global Background (Full Screen) */}
      <GlobalBackground activeSection={activeSection} />

      {/* Background Elements */}
      <div className="noise-overlay" />
      {/* FloatingPieces removed for performance */}

      <div className={`transition-opacity duration-1000 relative z-10 ${loading ? 'opacity-0' : 'opacity-100'}`}>

        {/* Main 3-Column Grid Layout */}
        <div className="lg:grid lg:grid-cols-4 min-h-screen">

          {/* Left Column (Fixed) 25% - Transparent to show GlobalBackground */}
          <div className="lg:col-span-1">
            <LeftSide activeSection={activeSection} />
          </div>

          {/* Center Column (Scrolls) 50% - Semi-transparent white background */}
          <main className="lg:col-span-2 w-full relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl min-h-screen">
            {/* Mobile Header */}
            <header className="lg:hidden p-6 absolute top-0 left-0 z-30 w-full flex justify-between items-center">
              <a href="../../" className="block">
                <img src="/assets/logo.png" alt="Puzzle" className="w-20 opacity-80" />
              </a>
            </header>

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
              <PieceReviews />
              <PieceSpec />
              <Dialogue />
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
