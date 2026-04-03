
import React, { useEffect, useRef, useState } from 'react';

const MouseStalker: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: -100, y: -100 });
  const stalkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickable = target.tagName === 'A' || 
                          target.tagName === 'BUTTON' || 
                          target.closest('a') !== null || 
                          target.closest('button') !== null ||
                          target.classList.contains('clickable');
        
        if (clickable) {
            setIsHovering(true);
        }
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setPosition((prev) => {
        const dx = cursorRef.current.x - prev.x;
        const dy = cursorRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={stalkerRef}
      className={`hidden lg:flex fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference transition-all duration-300 ease-out will-change-transform items-center justify-center`}
      style={{
        width: isHovering ? '80px' : '12px',
        height: isHovering ? '80px' : '12px',
        opacity: 1,
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />
  );
};

export default MouseStalker;
