
import React, { useRef, useEffect, useState } from 'react';

const LifestyleScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Start scrolling when section hits top of viewport
      // End scrolling when section bottom hits bottom of viewport (minus window height)
      // Actually simpler: map how much of the section has been scrolled through
      
      const scrollDistance = sectionHeight - windowHeight;
      let progress = -sectionTop / scrollDistance;

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const images = [
    { src: "/assets/piceone_xxxx1.jpg", text: "Work" },
    { src: "/assets/piceone_xxxx2.jpg", text: "Relax" },
    { src: "/assets/piceone_xxxx3.jpg", text: "Connect" },
    { src: "/assets/piceone_xxxx4.jpg", text: "Create" },
    { src: "/assets/piceone_xxxx5.jpg", text: "Life" },
  ];

  return (
    // Height 300vh ensures we have enough scroll space to move the horizontal content
    <section id="moments" ref={sectionRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-gray-50">
        
        {/* Title Overlay */}
        <div className="absolute top-12 left-6 md:left-24 z-20">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Moments</span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Life in Pieces</h3>
        </div>

        {/* Horizontal Container */}
        <div 
            ref={containerRef}
            className="flex gap-12 md:gap-24 px-[50vw] will-change-transform"
            style={{ transform: `translateX(calc(-${scrollProgress * 100}%))` }}
        >
            {images.map((img, i) => (
                <div key={i} className="relative w-[300px] md:w-[500px] aspect-[4/5] flex-shrink-0 group overflow-hidden rounded-md shadow-xl">
                    <img 
                        src={img.src} 
                        alt={img.text} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            ))}
            
            {/* Ending Text */}
            <div className="w-[400px] flex-shrink-0 flex items-center justify-center">
                <p className="text-2xl font-light text-gray-400 leading-relaxed text-center">
                    Every piece makes<br/>
                    your story complete.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleScroll;
