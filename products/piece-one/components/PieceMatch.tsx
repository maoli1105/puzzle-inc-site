
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';
import ShutterReveal from './ShutterReveal';

const PieceMatch: React.FC = () => {
  return (
    <section id="match" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Harmony</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                <TextReveal>The Perfect Match</TextReveal>
            </h2>
            <p className="text-gray-500 font-medium">愛機との調和。</p>
        </ScrollReveal>

        <div className="space-y-32">
            
            {/* Scene 1: MacBook Pro */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" 
                                alt="MacBook Pro Setup"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">for MacBook</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light">
                        スペースグレイのアルミニウムボディに、マットブラックのPiece Oneが静かに寄り添う。
                        240Wの高出力は、MacBook Pro 16インチの急速充電にも完全対応。
                        クリエイティブな作業を止めることなく、エネルギーを供給し続けます。
                    </p>
                </ScrollReveal>
            </div>

            {/* Scene 2: iPad Pro */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200&auto=format&fit=crop" 
                                alt="iPad Pro Setup"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-right">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">for iPad</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light ml-auto max-w-lg">
                        ミニマルなデスクセットアップに、ミントグリーンのアクセントを。
                        iPad AirやiPad miniとの組み合わせは、機能性だけでなく、
                        ワークスペースに遊び心と軽やかさをプラスします。
                    </p>
                </ScrollReveal>
            </div>

            {/* Scene 3: iPhone 15 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                 <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1200&auto=format&fit=crop" 
                                alt="iPhone 15 Setup"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">for iPhone 15</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light">
                        USB-Cポートを搭載したiPhone 15シリーズに最適。
                        シェルピンクの柔らかい色合いは、あなたのデバイスをよりパーソナルな存在へと変えます。
                        高速データ転送により、写真や動画のバックアップも一瞬で。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceMatch;
