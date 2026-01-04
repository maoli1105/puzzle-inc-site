
import React, { useEffect, useState } from 'react';

const CategoryNav: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is roughly 400px (pt-40 pb-20 + content)
      const heroHeight = 300; 
      setIsSticky(window.scrollY > heroHeight);

      // Simple spy logic
      const cables = document.getElementById('cables');
      const organizers = document.getElementById('organizers');
      if (cables && organizers) {
        const scrollPos = window.scrollY + 200;
        if (scrollPos >= organizers.offsetTop) {
          setActiveCategory('organizers');
        } else if (scrollPos >= cables.offsetTop) {
          setActiveCategory('cables');
        } else {
            setActiveCategory('all');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div 
        className={`w-full z-30 transition-all duration-300 border-b border-gray-100 ${isSticky ? 'fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm' : 'relative bg-white'}`}
        style={isSticky ? { paddingTop: '1rem', paddingBottom: '1rem' } : { paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-start space-x-8">
        <button 
            onClick={() => scrollTo('root')}
            className={`text-sm font-bold tracking-widest uppercase transition-colors ${activeCategory === 'all' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
            All
        </button>
        <button 
            onClick={() => scrollTo('cables')}
            className={`text-sm font-bold tracking-widest uppercase transition-colors ${activeCategory === 'cables' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
            Cables
        </button>
        <button 
            onClick={() => scrollTo('organizers')}
            className={`text-sm font-bold tracking-widest uppercase transition-colors ${activeCategory === 'organizers' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
            Organizers
        </button>
      </div>
    </div>
  );
};

export default CategoryNav;
