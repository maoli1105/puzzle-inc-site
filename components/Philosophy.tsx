
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-40 bg-white relative overflow-hidden">
      {/* Breathing Background Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <ScrollReveal className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">Brand Story</span>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight inline-block">
            <TextReveal>ブランドストーリー</TextReveal>
          </div>
        </ScrollReveal>

        <div className="space-y-16 text-center leading-loose font-medium text-gray-800 text-lg md:text-xl md:leading-relaxed tracking-wide">
          
          <ScrollReveal delay={100}>
            <p className="mb-4">
              一人ひとりの選択が、世界の風景を少しずつ変えていく。<br />
              私たちは、その変化の中にいます。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-4">
              正解はない。最善も、常に更新され続ける。<br />
              それでも暮らしは、止まらない。未完成のまま、続いていく。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mb-4">
              足りないもの。うまくはまらない時間。<br />
              その一つひとつを整え、前に進めること。<br />
              それが、私たちの役割です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mb-4">
              私たちが届けるのは、完成された答えではありません。<br />
              日々の中に自然に溶け込み、次の一歩を支える“ピース”です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="mb-4">
              積み重ねが、かたちになる。<br />
              まだ見えない未来をつくっていく。
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={700} className="pt-20 pb-20">
            <div className="font-bold text-gray-900 tracking-tight leading-relaxed space-y-6">
              {/* English: Smaller on mobile to prevent mid-word breaking */}
              <div className="text-lg md:text-3xl opacity-90">
                <div className="block md:inline">
                  <TextReveal delay={100} stagger={0.03}>Never knowing what’s best.</TextReveal>
                </div>
                <div className="block md:inline md:ml-2">
                  <TextReveal delay={800} stagger={0.03}>Still moving.</TextReveal>
                </div>
              </div>
              
              <div className="text-lg md:text-3xl opacity-90">
                <TextReveal delay={1500} stagger={0.04}>An endless puzzle.</TextReveal>
              </div>

              {/* Japanese: Balanced size for mobile */}
              <div className="pt-6 text-2xl md:text-4xl leading-tight">
                <div className="block md:inline">
                  <TextReveal delay={2200} stagger={0.08}>暮らしをもっと、</TextReveal>
                </div>
                <div className="block md:inline">
                  <TextReveal delay={3000} stagger={0.08}>パズルする。</TextReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
