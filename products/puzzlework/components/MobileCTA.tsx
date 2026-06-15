import React from 'react';

const MobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden p-4 pb-6 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <span className="text-xs text-gray-500 block">Puzzle Work</span>
          <span className="text-sm font-bold text-gray-900">組織運営 OS</span>
        </div>
        <div className="flex-1">
          <a
            href="../../contact/"
            className="block text-center text-white font-bold tracking-[0.2em] uppercase text-xs py-4 px-6 rounded-full shadow-lg transition-colors"
            style={{ background: '#B46400' }}
          >
            資料・デモ
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;
