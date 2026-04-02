
import React, { useState, useEffect } from 'react';

const LegalHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Top', path: '/' },
    { label: 'Products', path: '/products/' },
    { label: 'Contact', path: '/contact/' }
  ];

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href={baseUrl} className="z-50 relative group">
          <img 
            src={`${baseUrl}assets/logo.png`}
            alt="PUZZLE" 
            className="h-8 w-auto opacity-100"
          />
        </a>

        <nav className="flex space-x-6 md:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`${baseUrl}${item.path.startsWith('/') ? item.path.substring(1) : item.path}`}
              className="text-sm font-medium uppercase tracking-wider text-gray-800 hover:text-gray-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default LegalHeader;
