
import React, { useState } from 'react';

interface AddToCartButtonProps {
  className?: string;
  variant?: 'light' | 'dark'; // light = white button (sidebar), dark = black button (mobile)
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  className = "",
  variant = 'light'
}) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = () => {
    if (status !== 'idle') return;

    setStatus('loading');

    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      
      // Reset after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Styles based on variant
  const baseClasses = "relative overflow-visible transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] font-bold tracking-[0.2em] uppercase text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  // Idle State Styles
  const idleClasses = variant === 'light' 
    ? "bg-white text-black hover:bg-gray-100" 
    : "bg-black text-white hover:bg-gray-800";
    
  // Success State Styles
  const successClasses = "bg-blue-600 text-white border-blue-600";

  // Width/Shape transition
  const shapeClass = status === 'idle' ? "w-full rounded-sm py-4 px-8" : "w-14 h-14 rounded-full p-0 flex items-center justify-center";

  return (
    <div className={`relative ${className}`}>
       <button
        onClick={handleClick}
        disabled={status !== 'idle'}
        className={`${baseClasses} ${status === 'success' ? successClasses : idleClasses} ${shapeClass} mx-auto block`}
      >
        {/* Content Container */}
        <div className="relative flex items-center justify-center w-full h-full">
            
            {/* Idle Text */}
            <span 
                className={`absolute transition-all duration-300 ${status === 'idle' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
                Add to Cart
            </span>

            {/* Loading Spinner */}
            <span 
                className={`absolute transition-all duration-300 ${status === 'loading' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </span>

            {/* Success Icon */}
            <span 
                className={`absolute transition-all duration-300 ${status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </span>
        </div>
      </button>

      {/* Confetti Particles (Only visible on success) */}
      {status === 'success' && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none">
           {[...Array(12)].map((_, i) => (
             <div 
                key={i} 
                className={`absolute w-1.5 h-1.5 rounded-full animate-confetti`}
                style={{
                    backgroundColor: ['#60A5FA', '#34D399', '#F472B6', '#FBBF24'][i % 4],
                    '--angle': `${i * 30}deg`,
                    '--distance': `${30 + Math.random() * 40}px`,
                    '--delay': `${Math.random() * 0.2}s`
                } as React.CSSProperties}
             ></div>
           ))}
        </div>
      )}

      {/* Success Text Feedback (Floating below/above) */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 mt-4 text-xs font-bold uppercase tracking-widest text-blue-500 transition-all duration-500 ${status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
      >
        Added
      </div>

      <style>{`
        @keyframes confetti {
            0% {
                transform: rotate(var(--angle)) translateX(0) scale(0);
                opacity: 1;
            }
            70% {
                opacity: 1;
            }
            100% {
                transform: rotate(var(--angle)) translateX(var(--distance)) scale(1);
                opacity: 0;
            }
        }
        .animate-confetti {
            animation: confetti 0.6s ease-out forwards;
            animation-delay: var(--delay);
        }
      `}</style>
    </div>
  );
};

export default AddToCartButton;
