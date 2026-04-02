
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';
import ParallaxImage from './ParallaxImage';

const PieceTexture: React.FC = () => {
  return (
    <section id="performance" className="py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-24 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase block mb-4">Specs</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
             <TextReveal>Power & Speed</TextReveal>
           </h2>
           <p className="text-gray-400 font-medium text-sm md:text-base leading-loose max-w-2xl mx-auto">
             見た目の美しさだけではない。最新の規格に対応した、<br className="hidden md:block"/>妥協のないプロフェッショナル・スペック。
           </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            {/* Spec 1: Power */}
            <div className="group">
                <ScrollReveal className="relative aspect-[4/3] rounded-lg overflow-hidden mb-10 bg-black/40 border border-white/5">
                     <ParallaxImage 
                        src="assets/piceone_x1.jpg" 
                        alt="Macro Power Connection"
                        className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                        speed={0.03}
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <div className="text-7xl md:text-9xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-700 tracking-tighter">240W</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/30 rounded-full animate-ping opacity-20"></div>
                     </div>
                     <div className="absolute bottom-10 left-10 z-20">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                            <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">Input / Output Status</span>
                        </div>
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={100} className="px-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="w-8 h-px bg-blue-500 mr-4"></span>
                        Power Delivery 3.1
                    </h3>
                    <p className="text-gray-500 text-sm leading-loose">
                        最大240W（48V/5A）の超急速充電に対応。
                        ノートPCからハイエンドな周辺機器まで、あらゆるデバイスに「最速」を供給します。
                        E-Markerチップ搭載により、安全かつ最適な電力制御を実現。
                    </p>
                </ScrollReveal>
            </div>

            {/* Spec 2: Data */}
            <div className="group">
                <ScrollReveal className="relative aspect-[4/3] rounded-lg overflow-hidden mb-10 bg-black/40 border border-white/5">
                     <ParallaxImage 
                        src="assets/piceone_x3.jpg" 
                        alt="Macro Data Flow"
                        className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                        speed={0.03}
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <div className="text-6xl md:text-8xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-700 tracking-tighter">480Mbps</div>
                     </div>
                     <div className="absolute top-10 right-10 z-20">
                        <div className="bg-white/5 backdrop-blur px-4 py-2 rounded border border-white/10">
                            <span className="text-[10px] font-mono text-gray-400">SYNC RATE: OPTIMIZED</span>
                        </div>
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={100} className="px-2">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                        <span className="w-8 h-px bg-white/30 mr-4"></span>
                        High-Speed Data Sync
                    </h3>
                    <p className="text-gray-500 text-sm leading-loose">
                        USB 2.0規格の限界に近い、安定した480Mbpsの高速データ転送。
                        大容量ファイルの送受信もノイズの影響を最小限に抑え、確実なシンクを約束。
                        日常的なバックアップや、スムーズな作業フローを支えます。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceTexture;
