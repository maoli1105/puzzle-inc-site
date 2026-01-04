
import React from 'react';
import TextReveal from './TextReveal';
import ShutterReveal from './ShutterReveal';

const PieceHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Copy */}
        <div className="mb-12">
             <h2 className="text-xs font-bold tracking-[0.4em] text-pink-400 uppercase mb-4 fade-in-up-delay">
                Flow without interruption
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight fade-in-up">
                <span className="block mb-2">流れを止めない、</span>
                <span className="block">美しさ。</span>
            </h1>
            <p className="mt-6 text-gray-500 text-sm font-medium tracking-wider fade-in-up delay-200">
                色を選ぶ。気分が変わる。<br/>
                暮らしにそっと差し込む、パズルのかけら。
            </p>
        </div>

        {/* Product Visual */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-pink-200 rounded-full opacity-60 filter blur-3xl animate-pulse"></div>
            <ShutterReveal className="w-full h-full" delay={200}>
                {/* Visual for Bi-color cable */}
                <img 
                    src="assets/piece_flow_02.png" 
                    alt="Piece Flow"
                    className="relative w-full h-full object-contain drop-shadow-2xl animate-float"
                />
            </ShutterReveal>
        </div>
        
        <div className="flex flex-col items-center opacity-40 text-gray-400">
            <span className="text-[10px] tracking-widest font-bold mb-2">SCROLL</span>
            <div className="w-[1px] h-12 bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default PieceHero;
