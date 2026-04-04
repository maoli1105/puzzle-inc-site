
import React from 'react';


const LeftSide: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-full h-screen sticky top-0 py-12 px-8 border-r border-gray-100/50 relative overflow-hidden z-40">

      {/* Content Layer */}
      <div className="relative z-10">
        <a
          href="../../"
          className="block w-24 opacity-90 hover:opacity-100 transition-opacity drop-shadow-md"
          aria-label="Back to Home"
        >
          <img src="/assets/logo.png" alt="Puzzle" className="w-full h-auto filter brightness-0 invert" />
        </a>
      </div>

      <div className="relative z-10 text-gray-900 drop-shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-1 h-16 bg-pink-300 shadow-sm mt-1 rounded-full"></div>
          <div>
            <h1 className="text-5xl font-bold tracking-widest uppercase leading-none mb-2">Piece Flow</h1>
            <p className="text-sm text-gray-500 font-medium tracking-wider">Silicon Bi-Color Cable</p>
          </div>
        </div>
      </div>

      {/* Clear overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
    </aside>
  );
};

export default LeftSide;
