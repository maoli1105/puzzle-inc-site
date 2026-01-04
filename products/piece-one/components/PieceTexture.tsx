
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';
import ParallaxImage from './ParallaxImage';

const PieceTexture: React.FC = () => {
  return (
    <section id="texture" className="py-32 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-20 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">Tactile</span>
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
             <TextReveal>Micro-Texture</TextReveal>
           </h2>
           <p className="text-gray-400 font-medium text-sm md:text-base leading-loose">
             1mm以下の世界に宿る、<br/>執念のクラフトマンシップ。
           </p>
        </ScrollReveal>

        <div className="space-y-24">
            
            {/* Texture 1: Braid */}
            <div className="relative">
                <ScrollReveal className="w-full aspect-square md:aspect-[16/9] rounded-sm overflow-hidden mb-6 relative group">
                     <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
                     <ParallaxImage 
                        src="https://images.unsplash.com/photo-1543854589-49870b28448f?q=80&w=1600&auto=format&fit=crop" 
                        alt="Macro Braid"
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        speed={0.05}
                     />
                     {/* Magnifier Effect Overlay */}
                     <div className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur px-4 py-2 rounded text-[10px] font-mono text-gray-400 border border-white/10">
                        MAGNIFICATION: x100
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={100} className="md:w-2/3 mx-auto text-center">
                    <h3 className="text-xl font-bold mb-3">High-Density Weave</h3>
                    <p className="text-gray-500 text-xs leading-loose">
                        一本一本の繊維が緻密に絡み合い、光の当たり方で表情を変える高密度ナイロン。
                        爪で弾くと「カツン」と硬質な音がするほどの密度が、圧倒的な耐久性を生み出します。
                    </p>
                </ScrollReveal>
            </div>

            {/* Texture 2: Metal */}
            <div className="relative">
                <ScrollReveal className="w-full aspect-square md:aspect-[16/9] rounded-sm overflow-hidden mb-6 relative group">
                     <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
                     <ParallaxImage 
                        src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1600&auto=format&fit=crop" 
                        alt="Macro Metal"
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        speed={0.05}
                     />
                     <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur px-4 py-2 rounded text-[10px] font-mono text-gray-400 border border-white/10">
                        SURFACE: Matte Finish
                     </div>
                </ScrollReveal>
                <ScrollReveal delay={100} className="md:w-2/3 mx-auto text-center">
                    <h3 className="text-xl font-bold mb-3">Zinc Alloy Casting</h3>
                    <p className="text-gray-500 text-xs leading-loose">
                        金型から鋳造された亜鉛合金を、手作業でサンドブラスト加工。
                        指紋がつきにくく、吸い付くようなマットな手触りは、
                        毎日触れる道具としての最適解です。
                    </p>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PieceTexture;
