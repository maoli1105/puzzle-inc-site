
import React, { useEffect, useState } from 'react';

interface OpeningProps {
  onComplete?: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence:
    // 0ms: Render (White screen, Black Logo appears)
    // 800ms: Logo starts subtle pulse/zoom
    // 2200ms: Start fading out the white screen
    // 3200ms: Remove from DOM / trigger complete
    
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2200);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#FAFAFA] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative overflow-hidden p-8">
        {/* Logo: Display as is (Black) */}
        <img 
          src="assets/Smile.png" 
          alt="PUZZLE" 
          className="w-32 md:w-48 h-auto object-contain animate-logo-reveal"
        />
        {/* Shine effect (Subtle on white) */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
      </div>
    </div>
  );
};

export default Opening;
