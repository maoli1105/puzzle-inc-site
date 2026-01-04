
import React from 'react';
import TextReveal from './TextReveal';
import ShutterReveal from './ShutterReveal';

const PieceHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Copy */}
        <div className="mb-12">
             <h2 className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase mb-4 fade-in-up-delay">
                The Pleasure of Order
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight fade-in-up">
                <span className="block mb-2">整う、という</span>
                <span className="block">快感。</span>
            </h1>
        </div>

        {/* Product Visual */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white rounded-full opacity-50 filter blur-xl animate-pulse"></div>
            <ShutterReveal className="w-full h-full" delay={200}>
                <img 
                    src="assets/piece_one_01.png" 
                    alt="Piece One"
                    className="relative w-full h-full object-contain drop-shadow-2xl animate-float"
                />
            </ShutterReveal>
        </div>
        
        <div className="flex flex-col items-center opacity-40">
            <span className="text-[10px] tracking-widest font-bold mb-2">SCROLL</span>
            <div className="w-[1px] h-12 bg-gray-400"></div>
        </div>

      </div>
    </section>
  );
};

export default PieceHero;
