
import React, { useState, useEffect } from 'react';

const LegalHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: baseUrl },
    { label: 'Products', path: `${baseUrl}products/` },
    { label: 'Contact', path: `${baseUrl}contact/` },
    { label: 'Privacy Policy', path: `${baseUrl}privacy/` },
    { label: 'Terms of Service', path: `${baseUrl}terms/` }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <a href={baseUrl} className="z-50 relative group">
            <img 
              src={`${baseUrl}assets/logo.png`}
              alt="PUZZLE" 
              className={`h-10 w-auto transition-all duration-300 ${isMenuOpen ? 'filter invert' : 'opacity-100'}`}
            />
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isMenuOpen ? 'bg-white text-black' : 'bg-gray-100 text-black'}`}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out origin-center ${isMenuOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[7px]'}`} />
              <span className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`} />
              <span className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out origin-center ${isMenuOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[5px]'}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-zinc-900 text-white transition-all duration-700 cubic-bezier(0.77, 0, 0.175, 1) ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="h-full w-full container mx-auto px-6 relative z-10 flex flex-col pt-32 pb-12">
          <nav className="w-full h-full flex flex-col justify-center space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.path}
                className="text-4xl md:text-6xl font-bold tracking-tight hover:italic hover:text-gray-400 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-end text-xs text-gray-500 uppercase tracking-widest">
            <span>Puzzle Inc.</span>
            <span>&copy; 2025</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalHeader;
