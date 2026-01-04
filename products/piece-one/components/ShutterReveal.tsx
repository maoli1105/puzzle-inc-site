
import React, { useEffect, useRef, useState } from 'react';

interface ShutterRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  shutterColor?: string;
}

const ShutterReveal: React.FC<ShutterRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  shutterColor = "bg-white"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Content */}
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      {/* The Shutter (Curtain) */}
      <div
        className={`absolute inset-0 z-20 ${shutterColor} pointer-events-none origin-right`}
        style={{
          transform: isVisible ? 'scaleX(0)' : 'scaleX(1)',
          transition: `transform 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms`
        }}
      />
    </div>
  );
};

export default ShutterReveal;
