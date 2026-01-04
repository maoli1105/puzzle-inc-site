
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProductLineup from './components/ProductLineup';
import NoiseToSilence from './components/NoiseToSilence';
import Craftsmanship from './components/Craftsmanship';
import Recruit from './components/Recruit';
import Company from './components/Company';
import Footer from './components/Footer';
import Opening from './components/Opening';
import MouseStalker from './components/MouseStalker';
import FloatingPieces from './components/FloatingPieces';
import News from './components/News';
import LifestyleScroll from './components/LifestyleScroll';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  // Reveal Footerのための高さ計算
  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('resize', updateHeight);
    
    // 初期ロード時と少し遅延させて高さを取得（レンダリング完了待ち）
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
      
      {/* Global Mouse Stalker */}
      <MouseStalker />
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Floating Atmosphere (Background) */}
      <FloatingPieces />
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* 
          Main Content Wrapper 
          - z-index: 10 (フッターより上)
          - bg-white (フッターを隠すため必須)
          - marginBottom (フッターが見えるようにスペースを空ける)
        */}
        <div 
          className="relative z-10 bg-white shadow-2xl"
          style={{ marginBottom: `${footerHeight}px` }}
        >
          <Header />
          <main>
            <Hero />
            <Philosophy />
            <ProductLineup />
            <NoiseToSilence />
            <Craftsmanship />
            <LifestyleScroll />
            <News />
            <Recruit />
            <Company />
          </main>
          
          {/* Scroll Anchor for "Contact" link */}
          <div id="footer" className="h-px w-full bg-transparent" />
        </div>

        {/* 
          Reveal Footer
          - fixed (画面下部に固定)
          - z-index: 0 (メインコンテンツの下)
        */}
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