
import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Top' },
  { id: 'philosophy', label: 'Brand Story' },
  { id: 'lineup', label: 'Lineup' },
  { id: 'noise', label: 'Solution' },
  { id: 'craft', label: 'Craftsmanship' },
  { id: 'moments', label: 'Moments' },
  { id: 'news', label: 'News' },
  { id: 'recruit', label: 'Recruit' },
  { id: 'company', label: 'Company' },
];

const ChapterNav: React.FC = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-4 mix-blend-difference text-white">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group flex items-center space-x-4 relative"
        >
            {/* Label (Reveal on hover) */}
            <span 
                className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 absolute right-8 ${
                    activeId === section.id 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
            >
                <span className="text-white/50 mr-2 font-mono">0{index}</span>
                {section.label}
            </span>

            {/* Indicator Line */}
            <div 
                className={`h-[1px] bg-white transition-all duration-300 ${
                    activeId === section.id ? 'w-8 opacity-100' : 'w-3 opacity-40 group-hover:w-6 group-hover:opacity-80'
                }`} 
            />
        </button>
      ))}
    </nav>
  );
};

export default ChapterNav;