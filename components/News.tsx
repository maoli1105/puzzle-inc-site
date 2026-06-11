
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '2026.05.15',
    category: 'Product',
    title: '新商品「Piece One」登場。',
    image: 'assets/piceone_01_bk.jpg'
  },
  {
    id: 2,
    date: '2026.05.15',
    category: 'Product',
    title: '新商品「Piece Flow」登場。',
    image: 'assets/pieceflow_02_bp.jpg'
  }
];

const News: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // セクション内での相対座標ではなく、画面上の固定位置として画像を追従させるため
    // clientX/Yを使用し、画像コンポーネント側でfixed配置する
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="news" 
      className="py-32 bg-gray-50 relative cursor-default"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <ScrollReveal className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8">
            <div>
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Journal</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                    <TextReveal>Latest News</TextReveal>
                </h3>
            </div>
            <a href="#" className="hidden md:inline-block text-sm font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
                View All Archives &rarr;
            </a>
        </ScrollReveal>

        <div className="space-y-0">
            {newsData.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 100} className="w-full">
                    <div 
                        className="group relative border-b border-gray-200 py-12 flex flex-col md:flex-row md:items-baseline transition-colors duration-300 hover:bg-white px-4 -mx-4 cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="md:w-1/4 mb-2 md:mb-0">
                            <span className="text-sm font-mono text-gray-400 block mb-1">{item.date}</span>
                            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 border border-blue-100 px-2 py-1 rounded inline-block bg-blue-50">
                                {item.category}
                            </span>
                        </div>
                        <div className="md:w-3/4 relative z-10">
                            <h4 className="text-xl md:text-2xl font-medium text-gray-800 group-hover:text-black transition-colors group-hover:translate-x-4 transform duration-300">
                                {item.title}
                            </h4>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
             <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
                View All Archives &rarr;
            </a>
        </div>
      </div>

      {/* Floating Image Reveal */}
      {/* 
        This element follows the cursor.
        Using fixed positioning to follow clientX/Y easily without calculating offsets.
        Pointer events none ensures it doesn't interfere with hovering.
      */}
      <div 
        className="fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-30 hidden md:block rounded-lg overflow-hidden shadow-2xl transition-opacity duration-300 ease-out"
        style={{
            transform: `translate(${cursorPos.x + 20}px, ${cursorPos.y - 100}px)`,
            opacity: hoveredIndex !== null ? 1 : 0,
        }}
      >
        {newsData.map((item, index) => (
            <img
                key={item.id}
                src={item.image}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
        ))}
      </div>
    </section>
  );
};

export default News;
