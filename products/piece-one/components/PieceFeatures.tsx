
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import ShutterReveal from './ShutterReveal';

const PieceFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-16 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Features</span>
           <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">こだわりの機能美</h2>
        </ScrollReveal>

        <div className="space-y-20">
            
            {/* Point 1 */}
            <div className="group">
                <div className="w-full aspect-video mb-6 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" 
                                alt="Braided Cable"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4">
                    <div className="flex items-baseline mb-3">
                        <span className="text-xl font-bold text-gray-300 mr-4">01</span>
                        <h3 className="text-lg font-bold text-gray-900">高密度ナイロン編組</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        プラスチックの冷たさではなく、布地のような温かみを。高密度に編み込まれたナイロンは、しなやかで絡まりにくく、指先に心地よいテクスチャを伝えます。
                    </p>
                </ScrollReveal>
            </div>

            {/* Point 2 */}
            <div className="group">
                <div className="w-full aspect-video mb-6 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1616440347437-b1c73416ef12?q=80&w=800&auto=format&fit=crop" 
                                alt="Magnet"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4">
                    <div className="flex items-baseline mb-3">
                        <span className="text-xl font-bold text-gray-300 mr-4">02</span>
                        <h3 className="text-lg font-bold text-gray-900">Mag.Linkシステム</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        バンドはもう不要です。計算された磁力により、ケーブル自体がくるっとまとまります。デスクの脚など磁性のある場所ならどこでも「待機」できます。
                    </p>
                </ScrollReveal>
            </div>

            {/* Point 3 */}
            <div className="group">
                <div className="w-full aspect-video mb-6 relative">
                    <TiltCard className="w-full h-full overflow-hidden rounded-sm shadow-md">
                        <ShutterReveal className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop" 
                                alt="Zinc Alloy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </ShutterReveal>
                    </TiltCard>
                </div>
                <ScrollReveal delay={100} className="px-4">
                    <div className="flex items-baseline mb-3">
                        <span className="text-xl font-bold text-gray-300 mr-4">03</span>
                        <h3 className="text-lg font-bold text-gray-900">亜鉛合金の重厚感</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-loose">
                        コネクタ部分には、マットな質感の亜鉛合金を採用。ひんやりとした金属の触感と適度な重みが、上質な道具を使っている満足感を与えます。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceFeatures;
