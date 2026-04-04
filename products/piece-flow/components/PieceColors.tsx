
import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import ShutterReveal from './ShutterReveal';

// Cable Color x Connector Color
const colors = [
  { id: 'blue-pink', name: 'Blue x Pink', label: 'ブルー×ピンク', bgClass: 'bg-gradient-to-br from-cyan-300 to-pink-300', img: '../../assets/pieceflow_02_bp.jpg', mood: 'bg-cyan-50' },
  { id: 'white-pink', name: 'White x Pink', label: 'ホワイト×ピンク', bgClass: 'bg-gradient-to-br from-white to-pink-300 border border-gray-100', img: '../../assets/pieceflow_02_wp.jpg', mood: 'bg-pink-50' },
  { id: 'white-yellow', name: 'White x Yellow', label: 'ホワイト×イエロー', bgClass: 'bg-gradient-to-br from-white to-yellow-300 border border-gray-100', img: '../../assets/pieceflow_02_wy.jpg', mood: 'bg-yellow-50' },
  { id: 'black-yellow', name: 'Black x Yellow', label: 'ブラック×イエロー', bgClass: 'bg-gradient-to-br from-gray-400 to-yellow-400', img: '../../assets/pieceflow_02_by.jpg', mood: 'bg-gray-100' },
  { id: 'black-black', name: 'Black x Black', label: 'ブラック×ブラック', bgClass: 'bg-gradient-to-br from-gray-900 to-black', img: '../../assets/pieceflow_02_bb.jpg', mood: 'bg-gray-200' },
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
    <section id="colors" className={`py-24 transition-colors duration-700 ${active.mood}`}>
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Pop Colors</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">自由なバイカラー</h2>
        </ScrollReveal>

        <div className="flex flex-col items-center">
            {/* Main Visual */}
            <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] mb-12 flex items-center justify-center">
                <div 
                    className={`absolute inset-0 rounded-full filter blur-[80px] opacity-40 transition-all duration-700 ${active.bgClass}`}
                ></div>
                
                <ShutterReveal key={active.id} className="w-full h-full">
                    <img 
                        src={active.img} 
                        alt={active.name}
                        className="relative w-full h-full object-contain transform transition-all duration-500 drop-shadow-2xl hover:scale-105"
                    />
                </ShutterReveal>
            </div>

            {/* Label Display */}
            <div className="mb-8 text-center h-16">
                 <h3 className="text-2xl font-bold text-gray-800 tracking-tight animate-fade-in">{active.label}</h3>
                 <p className="text-xs text-gray-500 font-mono mt-2 uppercase tracking-widest">{active.name}</p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap justify-center gap-6">
                {colors.map((c, index) => (
                    <button
                        key={c.id}
                        onClick={() => handleColorClick(index)}
                        className={`group flex flex-col items-center transition-all duration-300 ${active.id === c.id ? 'transform scale-110' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <span 
                            className={`w-12 h-12 rounded-full shadow-lg mb-2 block transition-transform duration-300 ${c.bgClass} ${active.id === c.id ? 'ring-4 ring-offset-2 ring-white' : ''}`}
                        ></span>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PieceColors;
