
import React from 'react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  
  const navItems = [
    { id: 'hero', label: 'Top' },
    { id: 'concept', label: 'Concept' },
    { id: 'features', label: 'Features' },
    { id: 'texture', label: 'Tactile' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'colors', label: 'Colors' },
    { id: 'match', label: 'Match' },
    { id: 'spec', label: 'Spec' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    window.open('https://www.amazon.co.jp/dp/B0H1DKX9GP', '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between w-full h-screen sticky top-0 py-12 px-8 border-l border-gray-100/50 relative overflow-hidden z-40 text-gray-800">
      
      {/* Top: Nav */}
      <div className="relative z-10 flex flex-col items-end drop-shadow-sm">
        <nav className="flex flex-col space-y-4 text-right">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 group flex items-center justify-end ${
                activeSection === item.id ? 'text-pink-500 font-bold' : 'text-gray-500 hover:text-pink-400'
              }`}
            >
              {item.label}
              <span className={`w-1.5 h-1.5 rounded-full ml-3 transition-all duration-300 shadow-sm ${
                activeSection === item.id ? 'bg-pink-500 scale-100' : 'bg-gray-300 scale-50 group-hover:scale-75'
              }`} />
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom: CTA & Info */}
      <div className="relative z-10 drop-shadow-sm">
        <div className="mb-6 text-right">
            <p className="text-xs text-gray-500 font-medium tracking-wide">Free Shipping on Orders over ¥5,000</p>
            <p className="text-xl font-bold mt-1 tracking-tight text-gray-900">¥1,680</p>
        </div>
        
        {/* Add to Cart Button */}
        <div className="w-full flex justify-end">
             <button 
                onClick={handleAddToCart}
                className={`w-full bg-gray-900 text-white font-bold tracking-[0.2em] uppercase text-xs py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-pink-400 transition-all duration-300 transform hover:-translate-y-1 ${activeSection === 'spec' ? 'animate-pulse ring-4 ring-pink-200' : ''}`}
             >
                Add to Cart
             </button>
        </div>
      </div>

      {/* Clear overlay */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
    </aside>
  );
};

export default Sidebar;
