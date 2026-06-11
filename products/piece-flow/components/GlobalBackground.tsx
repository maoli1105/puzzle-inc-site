
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
  
  // Mapping sections to media assets - Updated for "Piece Flow" Cute/Pop vibe
  const mediaMap: Record<string, MediaItem> = {
    hero: { type: 'image', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop' }, // Pastel/Light
    concept: { type: 'image', src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop' }, // People/Connection
    features: { type: 'image', src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' }, // Soft texture
    texture: { type: 'image', src: 'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=1600&auto=format&fit=crop' }, // Soft focus
    gallery: { type: 'image', src: 'https://images.unsplash.com/photo-1525909002094-6b8a31814804?q=80&w=1600&auto=format&fit=crop' }, // Lifestyle/Fashion
    colors: { type: 'image', src: 'https://images.unsplash.com/photo-1502005229766-939cb934d60b?q=80&w=1600&auto=format&fit=crop' }, // Colorful
    match: { type: 'image', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop' }, // Fashion/Shopping
    spec: { type: 'image', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1600&auto=format&fit=crop' }, // Minimal
    dialogue: { type: 'image', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop' } // Cafe/Talk
  };

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-white pointer-events-none">
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
              className="w-full h-full object-cover opacity-30"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={item.src} 
              alt="" 
              className="w-full h-full object-cover opacity-40 blur-[2px]"
            />
          )}
          {/* Light Overlay for Cute Vibe */}
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
          {/* Gentle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalBackground;
