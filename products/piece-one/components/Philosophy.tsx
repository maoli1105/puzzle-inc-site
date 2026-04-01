
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-40 bg-white relative overflow-hidden">
      {/* Breathing Background Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <ScrollReveal className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">Brand Story</span>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight inline-block">
            <TextReveal>ブランドストーリー</TextReveal>
          </div>
        </ScrollReveal>

        <div className="space-y-12 text-center leading-loose font-medium text-gray-800 text-lg md:text-xl md:leading-relaxed tracking-wide">
          
          <ScrollReveal delay={100}>
            <p className="mb-4">
              一人ひとりの創造が、世界の風景を変えていく。<br />
              私たち株式会社パズルの想いは、そんな信念から始まっています。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-4">
              私たちが大切にしているのは、暮らしに寄り添う「思想」と<br className="hidden md:inline"/>
              ものづくりに通じる「美意識」、そして他者と共に在る「在り方」です。<br />
              単なる製品ではなく、思いのこもった“かけら”を届けたい。<br className="hidden md:inline"/>
              それが、私たちのものづくりの出発点です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mb-4">
              暮らしとは、無数のパズルピースでできています。<br />
              家族との時間、仕事に向き合う日々、ふとしたリラックスの瞬間。<br />
              そのどれもが、ひとり一人の「形」によって違った意味を持つ。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mb-4">
              私たちは、あなたの暮らしの一片にそっと寄り添い、<br />
              心地よく、美しく、そして少し楽しくなるような<br />
              プロダクトを届けたいと考えています。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="mb-4">
              パズルのように、一つひとつのピースがつながったとき、<br />
              まだ誰も見たことのない、あたたかな風景が広がっていく。<br />
              私たちが目指すのは、そんな「暮らしの完成図」です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600} className="pt-20">
            {/* Adjusted: Single line, smaller text size */}
            <div className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight inline-block whitespace-nowrap">
               <TextReveal delay={200} stagger={0.05}>暮らしをもっと、パズルする。</TextReveal>
            </div>
            <p className="text-sm text-gray-500 mt-6 tracking-widest uppercase font-bold">
              それが、私たちのブランドストーリーです。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
