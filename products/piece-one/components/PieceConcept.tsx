
import React from 'react';
import ScrollReveal from './ScrollReveal';

const PieceConcept: React.FC = () => {
  return (
    <section id="concept" className="py-24 relative bg-white/50">
      <div className="container mx-auto px-8 relative z-10">
        
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-800 leading-relaxed">
                色と手ざわりで、<br/>
                あなたらしさを映し出す。
            </h2>
        </ScrollReveal>

        <div className="space-y-12 max-w-lg mx-auto text-center">
            <ScrollReveal delay={100}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    ブルー×ピンク、ブラック×イエロー。<br/>
                    Piece Flowは、単なるケーブルではありません。<br/>
                    それは、あなたの気分を変える小さなアクセント。
                </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    赤ちゃんの肌のような、やわらかなシリコン素材。<br/>
                    触れるたびに感じる、心地よい優しさ。<br/>
                    そして、しっかり支える亜鉛合金の強さ。
                </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    240Wのパワーで、思いを届ける。<br/>
                    日常のノイズを忘れさせる、<br/>
                    スムーズなフロー体験をあなたに。
                </p>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PieceConcept;
