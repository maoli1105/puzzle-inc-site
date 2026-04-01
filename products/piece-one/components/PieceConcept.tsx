
import React from 'react';
import ScrollReveal from './ScrollReveal';

const PieceConcept: React.FC = () => {
  return (
    <section id="concept" className="py-24 relative bg-white/50">
      <div className="container mx-auto px-8 relative z-10">
        
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-gray-800 leading-relaxed">
                整理、という快感。<br/>
                美しきMag.Linkシステム。
            </h2>
        </ScrollReveal>

        <div className="space-y-12 max-w-lg mx-auto text-center">
            <ScrollReveal delay={100}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    ケーブル同士が意志を持つかのように引き寄せ合い、<br/>
                    単体でも、複数でも、完璧な秩序を保ちます。<br/>
                    Piece Oneは、単なるケーブルではありません。<br/>
                    それは、混迷を極めたデスクの上を鮮やかに整える、<br/>
                    美しき最後の一片（ピース）。
                </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    ブラック、ミントブルー、ピンク。<br/>
                    しなやかで力強い高密度ナイロンと、<br/>
                    亜鉛合金がもたらす静かな重厚。<br/>
                    指先に伝わるその確かな質感は、上質な道具の証です。
                </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                <p className="text-sm md:text-base leading-loose text-gray-600 font-medium">
                    急速充電で、スマートに満たされる。<br/>
                    絡まりというストレスから解き放たれた、<br/>
                    完璧なまでの「整う体験」をあなたに。
                </p>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PieceConcept;
