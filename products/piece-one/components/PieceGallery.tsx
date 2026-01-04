
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  speed: number; // Parallax speed factor
  className: string; // Tailwind classes for positioning/size
}

const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop", 
    alt: "Work Desk", 
    speed: 0.05, 
    className: "w-64 aspect-[3/4] top-0 left-0 md:left-12 z-10" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop", 
    alt: "Cafe Relax", 
    speed: 0.15, 
    className: "w-48 aspect-square top-24 right-4 md:right-12 z-0" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop", 
    alt: "Detail Shot", 
    speed: 0.08, 
    className: "w-56 aspect-video top-80 left-1/2 transform -translate-x-1/2 z-20" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", 
    alt: "Meeting", 
    speed: 0.12, 
    className: "w-64 aspect-[4/5] top-[500px] left-4 md:left-0 z-10" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1499750310159-5254f412c2de?q=80&w=800&auto=format&fit=crop", 
    alt: "On the Go", 
    speed: 0.03, 
    className: "w-56 aspect-square top-[450px] right-0 md:right-8 z-0" 
  }
];

const PieceGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to the section
      if (rect.top < windowHeight && rect.bottom > 0) {
        const distanceFromCenter = (windowHeight / 2) - (rect.top + rect.height / 2);
        setOffset(distanceFromCenter);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        <ScrollReveal className="text-center mb-20 relative z-30">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Gallery</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
             <TextReveal>Life in Depth</TextReveal>
           </h2>
           <p className="text-gray-500 font-medium">日常に、奥行きを。</p>
        </ScrollReveal>

        {/* Mosaic Container */}
        <div className="relative h-[800px] w-full max-w-4xl mx-auto">
            {galleryItems.map((item) => (
                <div
                    key={item.id}
                    className={`absolute shadow-2xl rounded-lg overflow-hidden transition-transform duration-100 ease-linear will-change-transform grayscale hover:grayscale-0 transition-all duration-700 ${item.className}`}
                    style={{
                        transform: `translateY(${offset * item.speed}px)`
                    }}
                >
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                </div>
            ))}
            
            {/* Context Text floating in background */}
            <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none"
                style={{ transform: `translate(-50%, calc(-50% + ${offset * 0.02}px))` }}
            >
                <span className="text-[120px] font-black text-gray-900 leading-none whitespace-nowrap">
                    SCENES
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PieceGallery;
