
import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import ShutterReveal from './ShutterReveal';

const colors = [
  { id: 'black', name: 'Black', label: 'ブラック', hex: '#222222', img: '../../assets/piceone_01_bk.jpg' },
  { id: 'mint-blue', name: 'Mint Blue', label: 'ミントブルー', hex: '#BAE6FD', img: '../../assets/piceone_01_mb.jpg' },
  { id: 'pink', name: 'Shell Pink', label: 'ピンク', hex: '#FBCFE8', img: '../../assets/piceone_01_pk.jpg' },
];

const PieceColors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const active = colors[currentIndex];

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % colors.length);
      }, 4000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handleColorClick = (index: number) => {
    setCurrentIndex(index);
    // Pause auto-play on interaction
    setIsAutoPlaying(false);
    
    // Clear existing timer
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  return (
    <section id="colors" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Colors</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">彩りを選ぶ</h2>
        </ScrollReveal>

        <div className="flex flex-col items-center">
            {/* Main Visual */}
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] mb-10 flex items-center justify-center">
                <div 
                    className="absolute inset-0 rounded-full filter blur-[60px] opacity-30 transition-colors duration-700"
                    style={{ backgroundColor: active.hex }}
                ></div>
                
                <ShutterReveal key={active.id} className="w-full h-full">
                    <img 
                        src={active.img} 
                        alt={active.name}
                        className="relative w-full h-full object-contain transform transition-all duration-500 drop-shadow-xl hover:scale-105"
                    />
                </ShutterReveal>
            </div>

            {/* Controls */}
            <div className="flex items-start space-x-8">
                {colors.map((c, index) => (
                    <button
                        key={c.id}
                        onClick={() => handleColorClick(index)}
                        className={`group flex flex-col items-center transition-all duration-300 ${active.id === c.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                        <span 
                            className={`w-8 h-8 rounded-full shadow-sm border border-gray-100 mb-3 block transition-transform duration-300 ${active.id === c.id ? 'scale-110 ring-2 ring-offset-2 ring-gray-200' : ''}`}
                            style={{ backgroundColor: c.hex }}
                        ></span>
                        <span className="text-xs font-bold text-gray-900">{c.label}</span>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PieceColors;
