
import React from 'react';
import TextReveal from './TextReveal';

const ProductHero: React.FC = () => {
  return (
    <section className="relative w-full pt-40 pb-20 bg-white text-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
          <TextReveal>Products</TextReveal>
        </h1>
        <p className="text-gray-600 font-medium text-lg md:text-xl tracking-widest max-w-2xl mx-auto leading-relaxed">
          Designed for Clarity. Engineered for Life.<br/>
          <span className="text-sm md:text-base mt-4 block text-gray-400">暮らしを整える、パズルのピース。</span>
        </p>
      </div>
      
      {/* Background decoration - Subtle and Clean */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10"></div>
    </section>
  );
};

export default ProductHero;
