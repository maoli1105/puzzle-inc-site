
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, where 1 is fixed (max parallax), 0 is normal scrolling
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "",
  speed = 0.15 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // If element is in viewport (with some buffer)
      if (rect.top < windowHeight && rect.bottom > 0) {
        const distanceFromCenter = elementCenter - viewportCenter;
        setOffset(distanceFromCenter * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-75 ease-linear will-change-transform top-[-10%]"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`
        }}
      />
    </div>
  );
};

export default ParallaxImage;
