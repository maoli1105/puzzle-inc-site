
import React from 'react';

interface GlobalBackgroundProps {
  activeSection: string;
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  poster?: string; // For video
}

const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ activeSection }) => {
  
  // Mapping sections to media assets
  const mediaMap: Record<string, MediaItem> = {
    hero: { 
      type: 'video', 
      src: 'https://videos.pexels.com/video-files/6981411/6981411-hd_1920_1080_25fps.mp4',
      poster: 'https://images.pexels.com/videos/6981411/abstract-background-abstract-lines-background-black-and-white-abstract-background-6981411.jpg'
    },
    concept: { type: 'image', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop' },
    features: { type: 'image', src: 'https://images.unsplash.com/photo-1616440347437-b1c73416ef12?q=80&w=1600&auto=format&fit=crop' },
    structure: { type: 'image', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop' },
    texture: { type: 'image', src: 'https://images.unsplash.com/photo-1543854589-49870b28448f?q=80&w=1600&auto=format&fit=crop' },
    gallery: { type: 'image', src: 'https://images.unsplash.com/photo-1499750310159-5254f412c2de?q=80&w=1600&auto=format&fit=crop' },
    colors: { type: 'image', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop' },
    utility: { type: 'image', src: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?q=80&w=1600&auto=format&fit=crop' },
    match: { type: 'image', src: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d94?q=80&w=1600&auto=format&fit=crop' },
    reviews: { type: 'image', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop' },
    spec: { type: 'image', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop' },
    dialogue: { type: 'image', src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' }
  };

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black pointer-events-none">
      {Object.entries(mediaMap).map(([key, item]) => (
        <div
          key={key}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            activeSection === key ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={item.poster}
              className="w-full h-full object-cover opacity-60"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={item.src} 
              alt="" 
              className="w-full h-full object-cover opacity-70"
            />
          )}
          {/* Global Gradient Overlay to ensure text readability on sidebars */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 mix-blend-multiply"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalBackground;
