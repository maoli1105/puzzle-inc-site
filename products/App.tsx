
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import CategoryNav from './components/CategoryNav';
import ProductIndex from './components/ProductIndex';
import Footer from './components/Footer';
import Opening from './components/Opening';
import MouseStalker from './components/MouseStalker';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('resize', updateHeight);
    updateHeight();
    const timer = setTimeout(updateHeight, 500);

    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-gray-200 selection:text-gray-900 font-sans min-h-screen">
      <Opening onComplete={() => setLoading(false)} />
      
      <MouseStalker />
      <div className="noise-overlay" />
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        
        <div 
          className="relative z-10 bg-white shadow-2xl"
          style={{ marginBottom: `${footerHeight}px` }}
        >
          <Header />
          <main id="root">
            <ProductHero />
            <CategoryNav />
            <ProductIndex />
          </main>
          
          <div id="footer" className="h-px w-full bg-transparent" />
        </div>

        <div 
          ref={footerRef}
          className="fixed bottom-0 left-0 w-full z-0"
        >
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default App;
