
import React from 'react';

const MobileCTA: React.FC = () => {
  const handleAddToCart = () => {
    window.open('https://www.amazon.co.jp/dp/B0H1DKX9GP', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden p-4 pb-6 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
            <span className="text-xs text-gray-500 block">Piece Flow</span>
            <span className="text-lg font-bold text-gray-900">¥1,680</span>
        </div>
        <div className="flex-1">
             <button 
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white font-bold tracking-[0.2em] uppercase text-xs py-4 px-6 rounded-full shadow-lg hover:bg-pink-400 transition-colors"
             >
                Add to Cart
             </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;
