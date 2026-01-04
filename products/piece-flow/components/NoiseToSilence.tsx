
import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const NoiseToSilence: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // Mouse move now triggers update regardless of drag state (for desktop convenience)
  const onMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };
  
  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'ew-resize';
      window.addEventListener('mouseup', onMouseUp);
    } else {
      document.body.style.cursor = 'default';
      window.removeEventListener('mouseup', onMouseUp);
    }
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, [isDragging]);

  return (
    <section id="noise" className="py-32 bg-white overflow-hidden select-none border-t border-gray-100">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Solution</span>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                <TextReveal>Noise to Silence</TextReveal>
            </h3>
            <p className="text-gray-500 font-medium leading-loose text-lg">
                ノイズから、静寂へ。<br />
                視覚的な乱れは、思考の乱れ。<br />
                デスクの上から「線」のストレスを消し去ります。
            </p>
        </ScrollReveal>

        <ScrollReveal>
            <div 
                ref={containerRef}
                className="relative w-full max-w-6xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize group border border-gray-100"
                onMouseMove={onMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchMove={onTouchMove}
                onMouseDown={onMouseDown}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                {/* Image 2 (After / Clean) - Base Layer */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                        alt="Clean Desk" 
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-8 right-8 text-white font-bold tracking-widest uppercase text-sm drop-shadow-md bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        Silence (After)
                    </div>
                </div>

                {/* Image 1 (Before / Messy) - Overlay Layer clipped */}
                <div 
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1510511233900-1982d92bd6e4?q=80&w=1600&auto=format&fit=crop" 
                        alt="Messy Desk" 
                        className="w-full h-full object-cover filter brightness-[0.8] contrast-125"
                    />
                    <div className="absolute top-8 left-8 text-white font-bold tracking-widest uppercase text-sm drop-shadow-md bg-red-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        Noise (Before)
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                    </div>
                </div>

                {/* Interaction Hint Overlay (fades out on interaction) */}
                {!isDragging && !isHovering && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-xs tracking-[0.2em] font-bold uppercase animate-pulse pointer-events-none drop-shadow-md">
                        Hover or Drag to Compare
                    </div>
                )}
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NoiseToSilence;
