
import React, { useEffect, useState, useRef } from 'react';
import { PieceProduct } from '../types';
import { fetchProducts } from '../services/productService';
import ScrollReveal from './ScrollReveal';
import ParallaxImage from './ParallaxImage';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

const ImageSlider: React.FC<{ urls: string[], alt: string }> = ({ urls, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        setOffset((elementCenter - viewportCenter) * 0.1);
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
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-gray-50">
      {urls.map((url, index) => (
        <img
          key={url}
          src={url.trim()}
          alt={`${alt} - view ${index + 1}`}
          className={`absolute inset-0 w-full h-[120%] object-cover transition-all duration-1000 ease-in-out top-[-10%] ${
            index === currentIndex ? 'opacity-100 z-10 scale-105' : 'opacity-0 z-0 scale-100'
          }`}
          style={{
             transform: `translateY(${offset}px) ${index === currentIndex ? 'scale(1.05)' : 'scale(1.05)'}`
          }}
        />
      ))}
    </div>
  );
};

const ProductIndex: React.FC = () => {
  const [products, setProducts] = useState<PieceProduct[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const categories = [
      { id: "cables", label: "Cables", desc: "Power & Data Transfer" },
      { id: "organizers", label: "Organizers", desc: "Desk Management" }
  ];

  return (
    <section className="bg-white min-h-screen pb-40">
      
      {categories.map((cat) => {
        const categoryProducts = products.filter(p => p.Category === cat.label);
        const isComingSoon = cat.label === "Organizers";

        return (
            <div key={cat.id} id={cat.id} className="container mx-auto px-6 py-24 border-t border-gray-100 first:border-0">
                {/* Category Title */}
                <ScrollReveal className="mb-16 ml-2">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">{cat.desc}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        <TextReveal>{cat.label}</TextReveal>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {isComingSoon ? (
                        /* Coming Soon Placeholder */
                        <ScrollReveal className="w-full relative group">
                            <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                                <span className="text-4xl font-thin mb-4 opacity-30">Coming Soon</span>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase">New Category</span>
                            </div>
                            <div className="mt-8 px-2">
                                <h3 className="text-xl font-bold text-gray-300 mb-2">Next Products</h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed">
                                    現在、新しい「暮らしの最適解」を開発中です。<br/>
                                    デスク周りを美しく整える、新しい提案にご期待ください。
                                </p>
                            </div>
                        </ScrollReveal>
                    ) : (
                        categoryProducts.map((product) => {
                            const imageUrls = product.Piece_Image_URL.split(',').filter(url => url.trim() !== '');
                            return (
                                <ScrollReveal key={product.id} className="w-full relative group cursor-pointer">
                                    <a href={product.Piece_Detail_URL} className="block">
                                        <TiltCard className="w-full aspect-[4/3] rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden mb-8 bg-gray-50">
                                            {product.Tag && (
                                                <div className="absolute top-4 left-4 z-20 bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
                                                    {product.Tag}
                                                </div>
                                            )}
                                            {imageUrls.length > 1 ? (
                                                <ImageSlider urls={imageUrls} alt={product.Piece_Name} />
                                            ) : (
                                                <ParallaxImage 
                                                    src={imageUrls[0]} 
                                                    alt={product.Piece_Name}
                                                    className="w-full h-full"
                                                />
                                            )}
                                        </TiltCard>
                                        
                                        <div className="px-2">
                                            <div className="flex justify-between items-baseline mb-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                                                    {product.Piece_Name}
                                                </h3>
                                            </div>
                                            <p className="text-gray-800 font-medium mb-4 text-base md:text-lg tracking-wide">{product.Piece_Catchphrase}</p>
                                            <p className="text-gray-500 text-sm md:text-base leading-loose font-light line-clamp-3 mb-6">
                                                {product.Piece_Description}
                                            </p>
                                            <div className="inline-flex items-center text-xs font-bold tracking-[0.1em] uppercase text-gray-900 hover:text-gray-700 transition-colors">
                                                Learn More
                                                <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            </div>
                                        </div>
                                    </a>
                                </ScrollReveal>
                            );
                        })
                    )}
                </div>
            </div>
        );
      })}
    </section>
  );
};

export default ProductIndex;
