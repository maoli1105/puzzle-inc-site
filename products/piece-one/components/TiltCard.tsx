
import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // 最大回転角度
  scale?: number; // ホバー時のスケール
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  maxRotation = 10,
  scale = 1.05
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 中心からの距離 (-1 から 1)
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);

    setRotation({
      x: -normalizedY * maxRotation, // マウスが上に行くと上に傾く（X軸回転は負）
      y: normalizedX * maxRotation   // マウスが右に行くと右に傾く（Y軸回転は正）
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `
          perspective(1000px) 
          rotateX(${rotation.x}deg) 
          rotateY(${rotation.y}deg) 
          scale(${isHovering ? scale : 1})
        `,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Glare Effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-opacity duration-200"
        style={{
          background: `linear-gradient(${rotation.x + rotation.y + 135}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)`,
          opacity: isHovering ? 0.3 : 0
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
