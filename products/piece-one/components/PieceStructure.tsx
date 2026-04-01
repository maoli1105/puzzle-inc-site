
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

const PieceStructure: React.FC = () => {
  return (
    <section id="structure" className="py-32 bg-gray-50 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Anatomy</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
             <TextReveal>Soft, yet Strong</TextReveal>
           </h2>
           <p className="text-gray-500 font-medium">やわらかさの中に、強さを秘める。</p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
            <TiltCard 
                className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" 
                     style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Layer 1: Core */}
                    <div className="absolute transition-transform duration-700 group-hover:translate-x-[-120px] group-hover:scale-90 opacity-60">
                        <div className="w-48 h-12 bg-yellow-400/80 rounded-full blur-sm flex items-center justify-center">
                            <span className="text-xs font-mono text-yellow-800">Copper Core</span>
                        </div>
                    </div>

                    {/* Layer 2: Graphene */}
                    <div className="absolute transition-transform duration-700 group-hover:translate-x-[-40px] group-hover:scale-95 z-10">
                        <div className="w-56 h-14 bg-gray-200/50 backdrop-blur-sm rounded-full border border-gray-300 flex items-center justify-center shadow-md">
                            <span className="text-xs font-mono text-gray-500">Graphene Shield</span>
                        </div>
                    </div>

                    {/* Layer 3: Silicon Jacket */}
                    <div className="absolute transition-transform duration-700 group-hover:translate-x-[40px] z-20">
                        <div className="w-64 h-16 rounded-full flex items-center justify-center shadow-lg border border-white"
                             style={{ background: 'linear-gradient(90deg, #F9A8D4, #FBCFE8)' }}>
                             <span className="text-xs font-mono text-gray-600">Liquid Silicon</span>
                        </div>
                    </div>

                    {/* Layer 4: Connector (Zinc) */}
                    <div className="absolute transition-transform duration-700 group-hover:translate-x-[140px] z-30">
                        <div className="w-20 h-24 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-2xl shadow-xl flex items-center justify-center border border-white relative">
                             <div className="w-12 h-16 border border-white/50 rounded-lg"></div>
                        </div>
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center w-32">
                             <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Color Zinc</span>
                             <div className="w-px h-8 bg-gray-300 mx-auto mb-1"></div>
                        </div>
                    </div>

                </div>

                {/* Interaction Hint */}
                <div className="absolute bottom-4 right-6 text-xs text-gray-400 font-mono opacity-50 group-hover:opacity-0 transition-opacity">
                    Hover to View Layers
                </div>
            </TiltCard>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <ScrollReveal delay={100} className="space-y-2">
                    <h4 className="text-gray-800 font-bold text-sm uppercase tracking-wide">Skin-friendly</h4>
                    <p className="text-gray-500 text-xs leading-loose">
                        食品グレードのリキッドシリコンを使用。安全性と、いつまでも触れていたくなる手触りを両立しました。
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={200} className="space-y-2">
                    <h4 className="text-gray-800 font-bold text-sm uppercase tracking-wide">Tangle Free</h4>
                    <p className="text-gray-500 text-xs leading-loose">
                        シリコン特有の復元力で、カバンの中でも絡まりません。取り出した瞬間、スッと真っ直ぐに。
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={300} className="space-y-2">
                    <h4 className="text-gray-800 font-bold text-sm uppercase tracking-wide">Zinc Alloy</h4>
                    <p className="text-gray-500 text-xs leading-loose">
                        コネクタには亜鉛合金を採用。パステルカラーの塗装仕上げで、強度とデザイン性を高めました。
                    </p>
                </ScrollReveal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PieceStructure;
