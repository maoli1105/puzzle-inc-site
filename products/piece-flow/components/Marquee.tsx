import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  repeat?: number;
  duration?: number; // seconds
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  className = "", 
  repeat = 4,
  duration = 20
}) => {
  return (
    <div className={`relative flex overflow-hidden select-none ${className}`}>
      {/* 
        Flexbox approach for seamless looping:
        Two identical containers translate left by 100%.
        Since they are flexed side-by-side, the second one replaces the first one perfectly.
      */}
      <div 
        className="flex shrink-0 animate-marquee items-center min-w-full"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </div>
      <div 
        className="flex shrink-0 animate-marquee items-center min-w-full"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={`clone-${i}`} className="mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;