
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

        {/* Product Visual - Editorial Frame Style */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mb-12 group perspective-1000">
            {/* Soft Glow Background */}
            <div className="absolute inset-x-0 bottom-[-10%] h-1/4 bg-gray-900/5 blur-2xl rounded-full scale-x-150"></div>
            
            <ShutterReveal className="w-full h-full relative z-10" delay={400}>
                <div className="w-full h-full p-2 bg-white shadow-xl rounded-sm overflow-hidden transform-all duration-1000 ease-out group-hover:scale-[1.02]">
                    <img 
                        src="../../assets/piceone_01_bk.jpg" 
                        alt="Piece One"
                        className="w-full h-full object-cover animate-ken-burns"
                    />
                    {/* Glass Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
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
