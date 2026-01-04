
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const PieceUtility: React.FC = () => {
  return (
    <section id="utility" className="py-32 bg-zinc-900 text-white overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-24 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">Utility</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
             <TextReveal>Modes of Use</TextReveal>
           </h2>
           <p className="text-gray-400 font-medium">変幻自在な、3つの佇まい。</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Mode 1: The Coil */}
            <ScrollReveal className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-black rounded-2xl border border-white/10 mb-8 relative flex items-center justify-center overflow-hidden">
                    {/* Abstract Animation: Coiling */}
                    <div className="relative w-40 h-40">
                         <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="2" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#333" strokeWidth="2" />
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#333" strokeWidth="2" />
                            
                            {/* Animated Paths */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="251" strokeDashoffset="251" className="animate-coil-1" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2" strokeDasharray="188" strokeDashoffset="188" className="animate-coil-2" />
                            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="2" strokeDasharray="125" strokeDashoffset="125" className="animate-coil-3" />
                         </svg>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">The Coil</h3>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Store & Carry</span>
                <p className="text-sm text-gray-400 leading-loose max-w-xs">
                    使い終われば、瞬時に美しい円形へ。<br/>
                    バンドもポーチもいらない。<br/>
                    そのままカバンへ放り込むだけ。
                </p>
            </ScrollReveal>

            {/* Mode 2: The Anchor */}
            <ScrollReveal delay={100} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-black rounded-2xl border border-white/10 mb-8 relative flex items-center justify-center overflow-hidden">
                     {/* Abstract Animation: Anchoring */}
                     <div className="relative w-40 h-40 flex items-center justify-center">
                         {/* Base Point */}
                         <div className="absolute w-4 h-4 bg-gray-700 rounded-full"></div>
                         {/* Magnetic Field */}
                         <div className="absolute w-12 h-12 border border-white/20 rounded-full animate-ping-slow"></div>
                         
                         {/* Cable snapping in */}
                         <div className="absolute h-32 w-1 bg-white/50 top-1/2 left-1/2 transform -translate-x-1/2 origin-top animate-pendulum">
                             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-white rounded-full"></div>
                         </div>
                     </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">The Anchor</h3>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Hold & Wait</span>
                <p className="text-sm text-gray-400 leading-loose max-w-xs">
                    デスクの脚やラックに吸着。<br/>
                    床への落下を防ぎ、<br/>
                    いつでも手の届く場所で待機します。
                </p>
            </ScrollReveal>

            {/* Mode 3: The Adjust */}
            <ScrollReveal delay={200} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-black rounded-2xl border border-white/10 mb-8 relative flex items-center justify-center overflow-hidden">
                     {/* Abstract Animation: Adjusting Length */}
                     <div className="relative w-64 h-20 flex items-center justify-center">
                         {/* Coiled Part */}
                         <div className="w-12 h-12 border-2 border-white rounded-full mr-4 animate-pulse-border flex items-center justify-center">
                            <div className="w-8 h-8 border border-white/50 rounded-full"></div>
                         </div>
                         {/* Line extending */}
                         <div className="h-0.5 bg-white relative overflow-hidden animate-extend-line w-32"></div>
                         {/* Connector */}
                         <div className="w-6 h-4 bg-white rounded-sm ml-0 animate-slide-connector"></div>
                     </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">The Adjust</h3>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">Just Fit</span>
                <p className="text-sm text-gray-400 leading-loose max-w-xs">
                    必要な長さだけを引き出し、<br/>
                    余りはまとめたまま。<br/>
                    デスク上のノイズを最小限に抑えます。
                </p>
            </ScrollReveal>

        </div>

        <style>{`
            .animate-coil-1 { animation: coil 3s ease-in-out infinite; }
            .animate-coil-2 { animation: coil 3s ease-in-out infinite 0.2s; }
            .animate-coil-3 { animation: coil 3s ease-in-out infinite 0.4s; }
            
            @keyframes coil {
                0% { stroke-dashoffset: 251; opacity: 0; }
                20% { opacity: 1; }
                50% { stroke-dashoffset: 0; }
                80% { stroke-dashoffset: 0; opacity: 1; }
                100% { stroke-dashoffset: -251; opacity: 0; }
            }

            @keyframes pendulum {
                0%, 100% { transform: translateX(-50%) rotate(5deg); }
                50% { transform: translateX(-50%) rotate(-5deg); }
            }
            .animate-pendulum { animation: pendulum 2s ease-in-out infinite; }

            @keyframes extendLine {
                0% { width: 10px; }
                50% { width: 100px; }
                100% { width: 10px; }
            }
            .animate-extend-line { animation: extendLine 4s ease-in-out infinite; }
            
            @keyframes slideConnector {
                0% { transform: translateX(0); }
                50% { transform: translateX(90px); }
                100% { transform: translateX(0); }
            }
            .animate-slide-connector { animation: slideConnector 4s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  );
};

export default PieceUtility;
