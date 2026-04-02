
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
            <p className="text-gray-500 font-medium">あらゆるデバイスに、最高の相棒を。</p>
        </ScrollReveal>

        <div className="space-y-32">
            
            {/* Scene 1: Computing */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="assets/match_computing.png" 
                                alt="Professional Workstation"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">for Your Main Device</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light">
                        OSを問わず、プロフェッショナルの要求に応える。
                        MacBook Proから最新のWindowsワークステーションまで、240Wの超高速給電がクリエイティビティを加速させます。
                        デスクに潜む「充電不足」というノイズを、Piece Oneが取り除きます。
                    </p>
                </ScrollReveal>
            </div>

            {/* Scene 2: Smartphone */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="assets/match_smartphone.png" 
                                alt="Universal Smartphone Standard"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-right">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">The New Standard</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light ml-auto max-w-lg">
                        USB-Cが接続の基準となった今、もはやデバイス選びに縛りはありません。
                        iPhone 15シリーズから最新のAndroidスマートフォンまで。
                        安定したデータ転送と急速充電を、これ一本で。あなたの手元に、統一された美しさを。
                    </p>
                </ScrollReveal>
            </div>

            {/* Scene 3: Daily Tools */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                 <div className="w-full md:w-1/2">
                    <TiltCard className="w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="assets/match_versatile.png" 
                                alt="Versatile Tools"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="w-full md:w-1/2 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Versatile Connections</h3>
                    <p className="text-gray-500 leading-loose text-sm font-light">
                        タブレット、ワイヤレスイヤホン、ポータブルゲーム機。
                        身の回りに溢れるデジタルデバイスを、一つの哲学で繋ぐ。
                        Piece Oneは、単なる充電道具ではなく、あなたの暮らしのリズムを整えるための
                        「最後のひとピース」です。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceMatch;
