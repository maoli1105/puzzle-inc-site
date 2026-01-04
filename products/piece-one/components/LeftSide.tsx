
import React from 'react';

interface LeftSideProps {
  activeSection: string;
}

const LeftSide: React.FC<LeftSideProps> = ({ activeSection }) => {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-full h-screen sticky top-0 py-12 px-8 border-r border-white/20 relative overflow-hidden z-40">
      
      {/* Content Layer */}
      <div className="relative z-10">
        <a 
          href="/" 
          className="block w-24 opacity-90 hover:opacity-100 transition-opacity drop-shadow-md"
          aria-label="Back to Home"
        >
          <img src="assets/logo.png" alt="Puzzle" className="w-full h-auto filter brightness-0 invert" />
        </a>
      </div>

      <div className="relative z-10 text-white drop-shadow-md">
        <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-white shadow-sm mt-1"></div>
            <div>
                <h1 className="text-5xl font-bold tracking-widest uppercase leading-none mb-2">Piece One</h1>
                <p className="text-sm text-gray-200 font-medium tracking-wider">Mag.Link Braided Cable</p>
            </div>
        </div>
      </div>
      
      {/* Subtle overlay for legibility if needed, but keeping it minimal to show background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
    </aside>
  );
};

export default LeftSide;
