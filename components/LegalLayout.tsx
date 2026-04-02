import React, { useEffect, useRef, useState } from 'react';
import LegalHeader from './LegalHeader';
import Footer from './Footer';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    const timer = setTimeout(updateHeight, 500);
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <LegalHeader />
      
      {/* 
        Main Content Wrapper 
        Recreates the "Reveal" behavior by placing content on top of a fixed footer.
      */}
      <div 
        className="relative z-10 bg-white shadow-2xl"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <main className="pt-32 pb-40 px-6 min-h-screen">
          <div className="mx-auto max-w-4xl">
            <div className="mb-24 overflow-hidden border-b border-gray-100 pb-16">
              <h1 className="text-5xl font-bold tracking-tighter text-black">
                {title}
              </h1>
            </div>
            
            <div className="space-y-12 text-lg leading-relaxed text-gray-700">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* 
        Fixed Footer 
        Hidden behind the main content until revealed by scrolling.
      */}
      <div 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0"
      >
        <Footer />
      </div>
    </div>
  );
};

export default LegalLayout;
