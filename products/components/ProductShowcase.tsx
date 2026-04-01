
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const showcaseData = [
  {
    id: 1,
    title: "Silhouette",
    subtitle: "削ぎ落とされた、輪郭。",
    description: "ノイズを極限まで排除したミニマルなフォルム。コネクタとケーブルの継ぎ目を滑らかにし、視覚的な引っ掛かりをなくしました。ただそこにあるだけで美しい、オブジェのような佇まい。",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Texture",
    subtitle: "指先が記憶する、質感。",
    description: "硬質な亜鉛合金の冷たさと、リキッドシリコンの温かみのある柔らかさ。相反する二つの素材が、一本のケーブルの中で完璧に融合しています。触れるたびに、確かな品質を感じられます。",
    image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Harmony",
    subtitle: "空間に溶け込む、調和。",
    description: "主張しすぎず、埋没もしない。デスク、リビング、ベッドルーム。あらゆる空間のトーンと調和するように計算されたカラーと質感。あなたの愛用品たちと、静かに共鳴します。",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
  }
];

const ProductShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const windowHeight = window.innerHeight;
      
      // Only run this sticky logic for desktop if needed, but keeping track of activeStep works for both.
      // On mobile, activeStep might not be needed for visuals as images are inline, but good to keep logic consistent.

      // Check which step is currently centered in the viewport
      let currentStep = 0;
      let minDistance = Infinity;

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentStep = index;
        }
      });

      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-white py-20 md:py-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column: Sticky Image (Desktop Only) */}
          <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center overflow-hidden">
            <div className="w-full h-[80vh] relative rounded-2xl overflow-hidden shadow-2xl">
              {showcaseData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Image Label Overlay */}
                  <div className="absolute bottom-8 left-8 text-white z-10">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 block mb-2">0{index + 1}</span>
                    <span className="text-3xl font-serif italic">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scrolling Text (and Inline Images for Mobile) */}
          <div className="w-full md:w-1/2 md:pl-24 pt-0">
            {showcaseData.map((item, index) => (
              <div 
                key={item.id}
                ref={el => stepsRef.current[index] = el}
                className="min-h-auto md:min-h-screen flex flex-col justify-center py-12 md:py-20"
              >
                {/* Mobile Image (Visible only on mobile) */}
                <div className="md:hidden w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden shadow-lg relative">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute bottom-4 left-4 text-white z-10">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-80 block mb-1">0{index + 1}</span>
                        <span className="text-2xl font-serif italic">{item.title}</span>
                    </div>
                </div>

                <ScrollReveal>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase block mb-6">
                        Feature 0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        <TextReveal>{item.subtitle}</TextReveal>
                    </h3>
                    <p className="text-lg text-gray-500 leading-loose font-light">
                        {item.description}
                    </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
