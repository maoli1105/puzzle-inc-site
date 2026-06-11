import React, { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';
import ParallaxImage from './ParallaxImage';

const ScrollColorImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [grayscale, setGrayscale] = useState(100);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) {
        setGrayscale(100);
        return;
      }

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

      const maxDistance = windowHeight * 0.45;
      const ratio = Math.min(distanceFromCenter / maxDistance, 1);
      
      setGrayscale(ratio * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full transition-all duration-300 ease-out" 
      style={{ filter: `grayscale(${isHovered ? 0 : grayscale}%)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ParallaxImage src={src} alt={alt} className={className} />
    </div>
  );
};

const Craftsmanship: React.FC = () => {
  return (
    <section id="craft" className="py-40 bg-zinc-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="mb-32 md:w-2/3">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">Craftsmanship</span>
          <div className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            <TextReveal>The Art of Detail</TextReveal>
          </div>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
            神は細部に宿る。<br />
            私たちが追求したのは、スペックシートには表れない<br />
            「感性」という名の品質です。
          </p>
        </ScrollReveal>

        <div className="space-y-32">
          {/* Item 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="text-6xl md:text-8xl font-thin text-white/10 block mb-4">01</span>
                <h3 className="text-2xl font-bold mb-4">Material</h3>
                <h4 className="text-lg text-gray-300 font-medium mb-6">冷たく、重い。亜鉛合金の真実。</h4>
                <p className="text-gray-500 leading-loose font-light">
                  手に取った瞬間、伝わる重厚感。
                  プラスチックでは決して味わえない、亜鉛合金（Zinc Alloy）の冷ややかな手触り。
                  それは、長く使う道具としての「信頼」の重さでもあります。
                  傷に強く、鈍く光るその質感は、時間の経過とともに愛着へと変わります。
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-7 h-[400px] relative">
              <ScrollReveal direction='right' className="w-full h-full">
                <ScrollColorImage 
                    src="./assets/piceone_x3.jpg" 
                    alt="Zinc Alloy Texture"
                    className="w-full h-full rounded-sm opacity-80"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Item 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
            <div className="md:col-span-7 h-[400px] relative order-2 md:order-1">
               <ScrollReveal direction='left' className="w-full h-full">
                <ScrollColorImage 
                    src="./assets/pieceflow_x2.jpg" 
                    alt="Silicon Texture"
                    className="w-full h-full rounded-sm opacity-80"
                />
              </ScrollReveal>
            </div>
            <div className="md:col-span-1 order-1 md:order-2"></div>
            <div className="md:col-span-4 order-1 md:order-3">
              <ScrollReveal>
                <span className="text-6xl md:text-8xl font-thin text-white/10 block mb-4">02</span>
                <h3 className="text-2xl font-bold mb-4">Touch</h3>
                <h4 className="text-lg text-gray-300 font-medium mb-6">指先が知っている、柔らかさ。</h4>
                <p className="text-gray-500 leading-loose font-light">
                  毎日触れるものだからこそ、ストレスのない感触を。
                  独自の配合によるリキッドシリコンは、まるで赤ちゃんの肌のような、しっとりとした柔らかさを実現しました。
                  絡まりにくく、癖がつかない。
                  触れるたびに、指先が少し喜ぶような感覚を目指しました。
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Item 03 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="text-6xl md:text-8xl font-thin text-white/10 block mb-4">03</span>
                <h3 className="text-2xl font-bold mb-4">Smart</h3>
                <h4 className="text-lg text-gray-300 font-medium mb-6">ピタッ。一瞬で整う、新しい快感。</h4>
                <p className="text-gray-500 leading-loose font-light">
                  ケーブルを束ねる煩わしさを、過去のものに。
                  計算された磁力により、ケーブル同士が自然に吸い付き「ピタッ」とまとまるマグネットケーブル。
                  絡まることなく、流れるように美しい円を描いて収まるその感覚は、
                  あなたの空間を常に美しく、スマートに保ちます。
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-7 h-[400px] relative">
               <ScrollReveal direction='right' className="w-full h-full">
                <ScrollColorImage 
                    src="./assets/piceone_x2-2.jpg" 
                    alt="Magnetic Connection"
                    className="w-full h-full rounded-sm opacity-80"
                />
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
