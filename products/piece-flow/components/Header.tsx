
import React, { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  // LP用のナビゲーション項目
  const navItems = [
    { label: 'Top', id: 'hero' },
    { label: 'Concept', id: 'concept' },
    { label: 'Features', id: 'features' },
    { label: 'Colors', id: 'colors' },
    { label: 'Spec', id: 'spec' },
  ];

  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`.replace('//', '/');

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'} pt-4 pb-4`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <div className="cursor-pointer z-50 relative clickable" onClick={() => window.location.href = '../../'}>
            <img 
              src={logoSrc} 
              alt="PUZZLE" 
              className={`h-10 w-auto transition-all duration-300 ${isMenuOpen ? 'filter invert' : 'opacity-100'}`}
            />
          </div>

          <div className="flex items-center space-x-8">
            {/* Desktop Inline Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Hamburger / Menu Button */}
            <div className="z-50 relative">
              <MagneticButton>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 clickable ${isMenuOpen ? 'bg-white text-black' : (scrolled ? 'bg-gray-100 text-black' : 'bg-white/20 backdrop-blur text-white md:text-black md:bg-transparent')}`}
                  aria-label="Menu"
                >
                  <div className="relative w-6 h-6">
                    {/* Top Line */}
                    <span 
                      className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out origin-center ${
                        isMenuOpen ? '-translate-y-1/2 rotate-45' : '-translate-y-[7px]'
                      }`} 
                    />
                    
                    {/* Middle Line */}
                    <span 
                      className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                        isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
                      }`} 
                    />
                    
                    {/* Bottom Line */}
                    <span 
                      className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out origin-center ${
                        isMenuOpen ? '-translate-y-1/2 -rotate-45' : 'translate-y-[5px]'
                      }`} 
                    />
                  </div>
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <div className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-75 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ width: `${progress * 100}%` }} />
      </header>

      {/* Full Screen Menu Overlay (Editorial Style) */}
      <div 
        className={`fixed inset-0 z-40 bg-zinc-900 text-white transition-all duration-700 cubic-bezier(0.77, 0, 0.175, 1) ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        {/* Background Text Depth */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
            <span className="text-[40vw] font-black leading-none select-none tracking-tighter">PIECE</span>
        </div>

        <div className="h-full w-full container mx-auto px-6 relative z-10 flex flex-col pt-32 pb-12">
            
            <div className="flex flex-col md:flex-row h-full">
                
                {/* Left Column: Navigation */}
                <nav className="w-full md:w-2/3 flex flex-col justify-center space-y-2 md:space-y-4">
                    {navItems.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`group relative text-left transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'}`}
                    >
                        <div className={`flex items-baseline transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <span className="text-sm font-mono text-gray-500 mr-8 w-8 block">0{index + 1}</span>
                            <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight group-hover:italic transition-all duration-300">
                                {item.label}
                            </span>
                            {/* Hover Arrow */}
                            <span className="ml-6 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-3xl md:text-5xl text-blue-500">
                                &rarr;
                            </span>
                        </div>
                    </button>
                    ))}
                </nav>

                {/* Right Column: Information */}
                <div className={`w-full md:w-1/3 flex flex-col justify-center md:pl-12 mt-12 md:mt-0 transition-all duration-700 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="space-y-8">
                         <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Product</h4>
                            <p className="text-lg leading-relaxed font-light text-gray-300">
                                Piece Flow<br/>
                                Durable Nylon Cable
                            </p>
                        </div>
                        <div className="pt-8 border-t border-white/5 space-y-4">
                            <a href="../../contact/" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                            <a href="../../privacy/" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="../../terms/" className="block text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mt-auto pt-8 border-t border-white/10 flex justify-between items-end text-xs text-gray-500 uppercase tracking-widest transition-opacity duration-500 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <span>Puzzle Inc.</span>
                <span>Piece Flow Special Edition</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
