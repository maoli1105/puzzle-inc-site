import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Opening from '../components/Opening';
import MouseStalker from '../components/MouseStalker';

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
  link?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: '2026.05.15',
    category: 'Product',
    title: '新商品「Piece One」登場。',
    image: '../assets/piceone_01_bk.jpg',
    link: '../products/piece-one/'
  },
  {
    id: 2,
    date: '2026.05.15',
    category: 'Product',
    title: '新商品「Piece Flow」登場。',
    image: '../assets/pieceflow_02_bp.jpg',
    link: '../products/piece-flow/'
  }
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', updateHeight);
    updateHeight();
    const timer = setTimeout(updateHeight, 500);
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, [loading]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleItemClick = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="antialiased text-gray-900 bg-white selection:bg-gray-200 selection:text-gray-900 font-sans min-h-screen">
      <Opening onComplete={() => setLoading(false)} />
      <MouseStalker />
      <div className="noise-overlay" />

      <div 
        className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onMouseMove={handleMouseMove}
      >
        <div 
          className="relative z-10 bg-white shadow-2xl pb-40"
          style={{ marginBottom: `${footerHeight}px` }}
        >
          <Header />
          
          <main className="pt-32 px-6 max-w-5xl mx-auto min-h-screen">
            <div className="mb-20 border-b border-gray-200 pb-8">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Journal</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                All Archives
              </h1>
            </div>

            <div className="space-y-0">
              {newsData.map((item, index) => (
                <div 
                  key={item.id}
                  className="group relative border-b border-gray-200 py-12 flex flex-col md:flex-row md:items-baseline transition-colors duration-300 hover:bg-gray-50 px-4 -mx-4 cursor-pointer clickable"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleItemClick(item.link)}
                >
                  <div className="md:w-1/4 mb-2 md:mb-0">
                    <span className="text-sm font-mono text-gray-400 block mb-1">{item.date}</span>
                    <span className="text-xs font-bold tracking-wider uppercase text-blue-600 border border-blue-100 px-2 py-1 rounded inline-block bg-blue-50">
                      {item.category}
                    </span>
                  </div>
                  <div className="md:w-3/4 relative z-10">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-800 group-hover:text-black transition-colors group-hover:translate-x-4 transform duration-300">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* Floating Image Reveal */}
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

        <div 
          ref={footerRef}
          className="fixed bottom-0 left-0 w-full z-0"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
