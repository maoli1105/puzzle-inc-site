
import React, { useEffect, useState } from 'react';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setOffset(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Parallax Background Video */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6981411/abstract-background-abstract-lines-background-black-and-white-abstract-background-6981411.jpg"
          className="w-full h-full object-cover opacity-60 scale-110"
        >
           <source src="https://videos.pexels.com/video-files/6981411/6981411-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Copy */}
        {/* Main Japanese Copy - Responsive Line Break */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-12 flex flex-col md:flex-row items-center justify-center">
          <TextReveal delay={500} stagger={0.08}>暮らしをもっと、</TextReveal>
          <TextReveal delay={1300} stagger={0.08}>パズルする。</TextReveal>
        </h2>

        {/* English Subtitles - Reverted to Original Size */}
        <div className="flex flex-col items-center mb-12 space-y-2 uppercase opacity-80 font-light tracking-[0.3em]">
          <div className="text-sm md:text-lg">
             <TextReveal delay={1500} stagger={0.03}>Never knowing best. Still moving.</TextReveal>
          </div>
          <div className="text-sm md:text-lg">
             <TextReveal delay={2200} stagger={0.03}>An endless puzzle.</TextReveal>
          </div>
        </div>
        
        {/* Buttons */}
        <div 
            className="flex flex-col sm:flex-row gap-8 fade-in-up-delay-4 items-center"
        >
          <MagneticButton>
            <button 
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-xs md:text-sm hover:bg-gray-200 transition-colors min-w-[160px] tracking-widest"
            >
              ブランドを知る
            </button>
          </MagneticButton>
          
          <MagneticButton>
            <button 
              onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full border border-white text-white font-medium text-xs md:text-sm hover:bg-white/10 transition-colors min-w-[160px] tracking-widest"
            >
              製品を見る
            </button>
          </MagneticButton>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center pb-12 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] font-light mb-4 text-white/80 animate-pulse">SCROLL</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>
      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scrollLine 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
