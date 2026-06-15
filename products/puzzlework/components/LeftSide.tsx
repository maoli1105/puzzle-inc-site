import React from 'react';

interface LeftSideProps {
  activeSection: string;
}

const LeftSide: React.FC<LeftSideProps> = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-full h-screen sticky top-0 py-12 px-8 border-r border-white/15 relative overflow-hidden z-40">
      {/* Logo */}
      <div className="relative z-10">
        <a href="../../" className="block w-32 opacity-90 hover:opacity-100 transition-opacity drop-shadow-md" aria-label="Back to Home">
          <img src="../../assets/logo.png" alt="Puzzle" className="w-full h-auto filter invert" />
        </a>
      </div>

      {/* Product name */}
      <div className="relative z-10 text-white drop-shadow-md">
        <div className="flex items-start gap-4">
          <div className="w-1 h-16 shadow-sm mt-1" style={{ background: '#B46400' }} />
          <div>
            <h1 className="text-5xl font-bold tracking-widest uppercase leading-none mb-2">Puzzle Work</h1>
            <p className="text-sm text-gray-300 font-medium tracking-wider">仕事を、ひとつの流れに。</p>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 mt-6 tracking-wider">組織運営 OS ・ Closed Beta</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
    </aside>
  );
};

export default LeftSide;
