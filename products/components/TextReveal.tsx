
import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number; // 全体の開始遅延
  stagger?: number; // 文字ごとの遅延
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.03
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
        threshold: 0.1,
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

  // テキストを一文字ずつ分割
  const chars = children.split('');

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="inline-block">
        {chars.map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-1000 ease-out will-change-transform ${char === ' ' ? 'mr-2' : ''}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(100%) rotate(5deg)',
              transitionDelay: `${delay + index * stagger * 1000}ms`
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextReveal;
