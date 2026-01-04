
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import ShutterReveal from './ShutterReveal';

const PieceGift: React.FC = () => {
  return (
    <section id="gift" className="py-32 bg-pink-50 relative overflow-hidden">
      {/* Decorative ribbons/shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-pink-400 uppercase block mb-4">Gift</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                <TextReveal>Share the Flow</TextReveal>
            </h2>
            <p className="text-gray-600 font-medium">ちいさな彩りを、贈ろう。</p>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2">
                <TiltCard className="w-full aspect-[4/3] bg-white rounded-3xl shadow-xl overflow-hidden p-4">
                    <div className="w-full h-full border border-pink-100 rounded-2xl relative overflow-hidden">
                        <ShutterReveal className="w-full h-full" shutterColor="bg-pink-100">
                            <img 
                                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop" 
                                alt="Gift Box"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </ShutterReveal>
                        <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-pink-500 tracking-widest shadow-sm">
                            FOR YOU
                        </div>
                    </div>
                </TiltCard>
            </div>
            
            <ScrollReveal className="w-full md:w-1/2" delay={100}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">大切な人への、<br/>ちょっとしたサプライズ。</h3>
                <p className="text-gray-600 leading-loose mb-8">
                    Piece Flowのパッケージは、プラスチックを使わない紙製ボックス。<br/>
                    そのままリボンをかけるだけで、素敵なギフトになります。<br/>
                    <br/>
                    毎日使うものだからこそ、<br/>
                    心地よいものを使ってほしい。<br/>
                    そんな想いを込めて、大切な人へ贈りませんか？
                </p>
                
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-sm text-gray-500">
                        <span className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center mr-3 text-white">✓</span>
                        誕生日プレゼントに
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                        <span className="w-6 h-6 rounded-full bg-cyan-200 flex items-center justify-center mr-3 text-white">✓</span>
                        お世話になったお礼に
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                        <span className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center mr-3 text-white">✓</span>
                        自分へのご褒美に
                    </li>
                </ul>

                <button className="px-8 py-3 bg-pink-400 text-white rounded-full font-bold tracking-widest uppercase hover:bg-pink-500 transition-colors shadow-md">
                    Gift Wrapping Info
                </button>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PieceGift;
