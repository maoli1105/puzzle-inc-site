
import React, { useState, useEffect } from 'react';

const PuzzleJoin: React.FC = () => {
  const [joined, setJoined] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const handleClick = () => {
    if (!joined) {
      setJoined(true);
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 800); // Flash duration
    }
  };

  return (
    <div className="w-full py-32 flex flex-col items-center justify-center relative overflow-visible">
      
      {/* Container Area */}
      <div 
        className="relative w-80 h-40 flex items-center justify-center cursor-pointer group perspective-1000"
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Glow Effect behind */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full blur-[80px] transition-opacity duration-1000 ${joined ? 'opacity-40' : 'opacity-0'}`} />

        {/* Left Piece (Matte Black - Technology) */}
        <div 
          className={`absolute z-10 w-24 h-24 transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) flex items-center justify-center ${
            joined 
              ? 'translate-x-[20%] rotate-0' 
              : (isHovering ? '-translate-x-8 rotate-[-12deg]' : '-translate-x-16 rotate-[-6deg]')
          }`}
        >
          <div className="w-full h-full bg-zinc-900 rounded-lg shadow-2xl border border-zinc-700/50 flex items-center justify-center relative overflow-hidden">
             {/* Inner texture */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
             {/* Joint Shape (Out) */}
             <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-900 rounded-full shadow-inner border-r border-zinc-700/50"></div>
          </div>
        </div>

        {/* Right Piece (Frosted Glass - Life) */}
        <div 
          className={`absolute z-20 w-24 h-24 transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) flex items-center justify-center ${
            joined 
              ? '-translate-x-[20%] rotate-0'
              : (isHovering ? 'translate-x-8 rotate-[12deg]' : 'translate-x-16 rotate-[6deg]')
          }`}
        >
          <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 flex items-center justify-center relative">
             {/* Joint Shape (In) */}
             <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-transparent rounded-full shadow-[inset_-2px_0_5px_rgba(0,0,0,0.1)]"></div>
             
             {/* Shine */}
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Connection Flash (Light Burst) */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-white blur-md transition-all duration-300 ${showFlash ? 'opacity-100 scale-x-[50] scale-y-150' : 'opacity-0 scale-x-0'}`} style={{ mixBlendMode: 'overlay' }} />
        
        {/* Horizontal Line Flash */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1 w-full bg-blue-400 blur-sm transition-all duration-500 delay-100 ${showFlash ? 'opacity-100 scale-x-150' : 'opacity-0 scale-x-0'}`} />

        {/* Click hint */}
        {!joined && (
            <div className={`absolute -bottom-12 text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase transition-all duration-500 ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                Click to Union
            </div>
        )}

      </div>

      {/* Completion Message */}
      <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${joined ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}>
        <p className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase mb-3">
            Perfect Match
        </p>
        <h4 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight">
            Complete the Scenery.
        </h4>
      </div>
    </div>
  );
};

export default PuzzleJoin;
