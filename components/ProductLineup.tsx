
import React, { useEffect, useState, useRef } from 'react';
import { PieceProduct } from '../types';
import { fetchProducts } from '../services/productService';
import ScrollReveal from './ScrollReveal';
import ParallaxImage from './ParallaxImage';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

const ImageSlider: React.FC<{ urls: string[], alt: string }> = ({ urls, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Parallax Logic duplicated for Slider
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        setOffset((elementCenter - viewportCenter) * 0.15);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (urls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % urls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [urls.length]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-gray-100 rounded-2xl">
      {urls.map((url, index) => (
        <img
          key={url}
          src={url.trim()}
          alt={`${alt} - view ${index + 1}`}
          className={`absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 ease-in-out top-[-10%] ${index === currentIndex ? 'opacity-100 z-10 scale-110' : 'opacity-0 z-0 scale-100'
            }`}
          style={{
            // Apply parallax transform only to the visible image to save resources
            transform: `translateY(${offset}px) ${index === currentIndex ? 'scale(1.1)' : 'scale(1.1)'}`
          }}
        />
      ))}
    </div>
  );
};

const ProductLineup: React.FC = () => {
  const [products, setProducts] = useState<PieceProduct[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <section id="lineup" className="py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Lineup</span>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight inline-block">
            <TextReveal>Piece Lineup</TextReveal>
          </div>
          <p className="text-gray-500 font-medium tracking-wide text-lg">あなたの暮らしに、ピッタリはまるピースを。</p>
        </ScrollReveal>

        <div className="space-y-40">
          {products.map((product, index) => {
            const imageUrls = product.Piece_Image_URL.split(',').filter(url => url.trim() !== '');
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                {/* Product Image / Slider */}
                <ScrollReveal
                  className="w-full md:w-1/2 relative group perspective-container"
                  direction={isEven ? 'left' : 'right'}
                >
                  <TiltCard className="w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                    <div className="aspect-[4/3] w-full">
                      {imageUrls.length > 1 ? (
                        <ImageSlider urls={imageUrls} alt={product.Piece_Name} />
                      ) : (
                        <ParallaxImage
                          src={imageUrls[0]}
                          alt={product.Piece_Name}
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  </TiltCard>
                </ScrollReveal>

                {/* Product Text */}
                <ScrollReveal
                  className="w-full md:w-1/2 text-center md:text-left"
                  direction={isEven ? 'right' : 'left'}
                  delay={200}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight inline-block">
                    <TextReveal delay={200}>{product.Piece_Name}</TextReveal>
                  </div>
                  <p className="text-xl text-gray-800 font-semibold mb-8">{product.Piece_Catchphrase}</p>
                  <p className="text-gray-600 leading-loose font-light mb-10 max-w-md mx-auto md:mx-0 text-lg">
                    {product.Piece_Description}
                  </p>
                  <a
                    href={product.Piece_Detail_URL}
                    className="inline-flex items-center text-sm tracking-widest uppercase font-bold text-blue-600 hover:text-blue-800 transition-colors group clickable"
                  >
                    このピースのこと、もうちょっと知る？
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </ScrollReveal>
              </div>
            );
          })}

          {/* Coming Soon Placeholder */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
            <ScrollReveal
              className="w-full md:w-1/2 relative border-2 border-dashed border-gray-300 rounded-2xl h-[400px] flex items-center justify-center bg-gray-100"
              direction="left"
            >
              <div className="text-center">
                <span className="text-6xl text-gray-300 font-thin mb-4 block">?</span>
                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Coming Soon</span>
              </div>
            </ScrollReveal>

            <ScrollReveal
              className="w-full md:w-1/2 text-center md:text-left"
              direction="right"
              delay={200}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-4 tracking-tight inline-block">
                Next Piece
              </div>
              <p className="text-lg text-gray-400 font-medium mb-6">新しいピースが、まもなく届きます。</p>
              <p className="text-gray-400 leading-loose font-light mb-8 max-w-md mx-auto md:mx-0">
                私たちは常に新しい「暮らしの最適解」を探求しています。
                次なるプロダクトにご期待ください。
              </p>
            </ScrollReveal>
          </div>

          {/* All Products Link */}
          <div className="flex justify-center mt-20 md:mt-32">
            <MagneticButton>
              <a
                href="products/"
                className="group relative inline-flex flex-col items-center justify-center px-16 py-6 overflow-hidden rounded-full bg-gray-900 text-white transition-all duration-300 hover:bg-gray-800 shadow-xl hover:shadow-2xl clickable min-w-[240px]"
              >
                <span className="text-xl font-bold tracking-[0.2em] uppercase mb-1">Products</span>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors tracking-widest">すべての製品</span>
              </a>
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductLineup;
