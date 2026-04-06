
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import ShutterReveal from './ShutterReveal';

const PieceFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-16 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Features</span>
           <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">Playful & Powerful</h2>
        </ScrollReveal>

        <div className="space-y-20">
            
            {/* Point 1: Bi-color */}
            <div className="group">
                <div className="w-full aspect-square mb-4 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="../../assets/pieceflow_x1.jpg" 
                                alt="Bi-color Design"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4 text-center">
                    <div className="inline-flex flex-col items-center mb-3">
                        <span className="text-xl font-bold text-cyan-400 mb-1">01</span>
                        <h3 className="text-lg font-bold text-gray-900">Bi-color Design</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        ケーブルとコネクタで色が異なるバイカラーデザイン。<br/>
                        ブルー×ピンク、ブラック×ブラックなど、自由な組み合わせがデスクを彩ります。
                    </p>
                </ScrollReveal>
            </div>

            {/* Point 2: Silicon */}
            <div className="group">
                <div className="w-full aspect-square mb-4 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="../../assets/pieceflow_x2.jpg" 
                                alt="Liquid Silicon"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4 text-center">
                    <div className="inline-flex flex-col items-center mb-3">
                        <span className="text-xl font-bold text-pink-400 mb-1">02</span>
                        <h3 className="text-lg font-bold text-gray-900">Liquid Silicon</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        まるでマシュマロのような、驚くほどやわらかな手触り。<br/>
                        絡まりにくく、癖がつかないリキッドシリコン素材を採用しました。
                    </p>
                </ScrollReveal>
            </div>

            {/* Point 3: 240W */}
            <div className="group">
                <div className="w-full aspect-square mb-4 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" 
                                alt="240W Power"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4 text-center">
                    <div className="inline-flex flex-col items-center mb-3">
                        <span className="text-xl font-bold text-yellow-400 mb-1">03</span>
                        <h3 className="text-lg font-bold text-gray-900">240W Power</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        可愛らしい見た目に、プロ仕様のスペックを。<br/>
                        最大240W出力で、最新のノートPCも急速充電が可能。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceFeatures;
