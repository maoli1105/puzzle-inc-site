
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import TextReveal from './TextReveal';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
       <div className="container mx-auto px-6">
         {/* Title */}
         <ScrollReveal className="mb-20 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Specs</span>
           <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-block">
             <TextReveal>Functional Beauty</TextReveal>
           </h3>
           <p className="text-gray-500 mt-4 font-medium">機能美という、もう一つのパズル。</p>
         </ScrollReveal>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto md:h-[500px]">

           {/* 1. 240W Power (Span 2) */}
           <div className="md:col-span-2 relative group h-80 md:h-auto">
              <TiltCard className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 flex flex-col justify-between border border-gray-100">
                 <div className="relative z-10">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Power Delivery</span>
                    <h4 className="text-5xl md:text-7xl font-black text-gray-900 mb-2 tracking-tighter">240W</h4>
                    <p className="text-gray-500 font-medium text-lg">Ultra High Speed Charging</p>
                 </div>
                 <div className="mt-8 relative w-full h-16 bg-gray-100 rounded-full overflow-hidden flex items-center px-2">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 w-[0%] animate-charge-bar rounded-full opacity-90"></div>
                    <div className="relative z-10 flex justify-between w-full px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <span>0%</span>
                        <span>100%</span>
                    </div>
                 </div>
              </TiltCard>
           </div>

           {/* 2. E-Marker (Span 1) */}
           <div className="md:col-span-1 relative group h-80 md:h-auto">
              <TiltCard className="w-full h-full bg-zinc-900 text-white rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col relative border border-gray-800 justify-between">
                 <div className="relative z-10">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Intelligence</span>
                    <h4 className="text-3xl font-bold mb-2">E-Marker</h4>
                    <p className="text-gray-400 text-sm">Smart Safety Chip</p>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    {/* Chip Graphic */}
                    <div className="w-32 h-32 border border-white/20 rounded-xl flex items-center justify-center relative">
                       <div className="absolute inset-0 bg-blue-500/10 blur-2xl animate-pulse"></div>
                       <div className="w-20 h-20 border border-white/40 rounded flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/10 rounded-sm grid grid-cols-2 gap-1 p-1">
                                <div className="bg-white/40 rounded-[1px]"></div>
                                <div className="bg-white/40 rounded-[1px]"></div>
                                <div className="bg-white/40 rounded-[1px]"></div>
                                <div className="bg-white/80 rounded-[1px] animate-pulse"></div>
                            </div>
                       </div>
                       {/* Circuit lines */}
                       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
                       <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/10"></div>
                    </div>
                 </div>
                 <div className="relative z-10 text-right">
                    <span className="text-[10px] text-gray-500 font-mono">IC: 9948-X2</span>
                 </div>
              </TiltCard>
           </div>

           {/* 3. Durability (Span 3 / Full Width) */}
           <div className="md:col-span-3 relative group h-80 md:h-auto">
              <TiltCard className="w-full h-full bg-gray-100 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-white">
                 <div className="z-10 mb-8 md:mb-0 md:pr-8 md:w-1/3">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Endurance</span>
                    <h4 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">30,000+ Bends</h4>
                    <p className="text-gray-500 text-lg">Built to last a lifetime.</p>
                 </div>
                 {/* Bending Animation Representation */}
                 <div className="flex-1 w-full flex items-center justify-center relative h-32 md:h-full">
                    <svg className="w-full h-full absolute inset-0 text-gray-300" viewBox="0 0 400 100" preserveAspectRatio="none">
                         <path d="M0,50 Q100,50 200,50 Q300,50 400,50" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg className="w-full max-w-lg h-32 stroke-gray-800 drop-shadow-lg" viewBox="0 0 300 100" fill="none" strokeWidth="8" strokeLinecap="round">
                       <path d="M 20 50 Q 150 50 280 50" className="animate-cable-bend" />
                    </svg>
                 </div>
              </TiltCard>
           </div>

         </div>
       </div>
       <style>{`
         @keyframes chargeBar {
           0% { width: 0%; }
           15% { width: 10%; }
           30% { width: 40%; }
           50% { width: 60%; }
           80% { width: 85%; }
           100% { width: 100%; }
         }
         .animate-charge-bar {
           animation: chargeBar 4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
         }
         @keyframes cableBend {
           0% { d: path("M 20 50 Q 150 50 280 50"); stroke: #333; }
           50% { d: path("M 20 50 Q 150 10 280 50"); stroke: #000; }
           100% { d: path("M 20 50 Q 150 50 280 50"); stroke: #333; }
         }
         .animate-cable-bend {
           animation: cableBend 3s ease-in-out infinite;
         }
       `}</style>
    </section>
  );
};

export default Features;
