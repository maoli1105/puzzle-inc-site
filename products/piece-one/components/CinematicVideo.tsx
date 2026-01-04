
import React, { useRef, useEffect, useState } from 'react';

const CinematicVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility progress
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Scale from 1.2 to 1.0 as we scroll down
        const newScale = 1.2 - (progress * 0.2);
        setScale(Math.max(1.0, Math.min(1.2, newScale)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="atmosphere" className="relative w-full h-screen overflow-hidden bg-black z-10">
      <div 
        ref={containerRef}
        className="w-full h-full relative"
      >
        <div 
            className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `scale(${scale})` }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/videos/6981411/abstract-background-abstract-lines-background-black-and-white-abstract-background-6981411.jpg"
                className="w-full h-full object-cover opacity-60"
            >
                {/* 
                  Abstract flowing fabric/lines in black and white. 
                  More stable URL for demonstration.
                */}
                <source src="https://videos.pexels.com/video-files/6981411/6981411-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
        
        {/* Minimal Text Overlay */}
        <div className="absolute bottom-12 left-6 md:left-12 z-20 mix-blend-difference text-white/50">
             <span className="text-[10px] tracking-[0.4em] uppercase font-light">Atmosphere</span>
        </div>
      </div>
    </section>
  );
};

export default CinematicVideo;
