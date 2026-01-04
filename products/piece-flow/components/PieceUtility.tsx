
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const PieceUtility: React.FC = () => {
  return (
    <section id="utility" className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-24 text-center">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Utility</span>
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
             <TextReveal>Smart & Cute</TextReveal>
           </h2>
           <p className="text-gray-500 font-medium">3つの便利なスタイル。</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Mode 1: The Coil */}
            <ScrollReveal className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-blue-50 rounded-full mb-8 relative flex items-center justify-center overflow-hidden border border-blue-100">
                    {/* Abstract Animation: Coiling */}
                    <div className="relative w-40 h-40">
                         <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#E0F2FE" strokeWidth="6" />
                            
                            {/* Animated Paths */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="251" strokeDashoffset="251" className="animate-coil-1" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#F472B6" strokeWidth="4" strokeDasharray="188" strokeDashoffset="188" className="animate-coil-2" />
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#FBBF24" strokeWidth="4" strokeDasharray="125" strokeDashoffset="125" className="animate-coil-3" />
                         </svg>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">The Coil</h3>
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">Store & Carry</span>
                <p className="text-sm text-gray-500 leading-loose max-w-xs">
                    使い終われば、クルッとまとめて。<br/>
                    バンドもポーチもいりません。<br/>
                    カバンの中も、可愛くスッキリ。
                </p>
            </ScrollReveal>

            {/* Mode 2: The Anchor */}
            <ScrollReveal delay={100} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-pink-50 rounded-full mb-8 relative flex items-center justify-center overflow-hidden border border-pink-100">
                     {/* Abstract Animation: Anchoring */}
                     <div className="relative w-40 h-40 flex items-center justify-center">
                         {/* Magnetic Field */}
                         <div className="absolute w-12 h-12 bg-pink-200 rounded-full animate-ping-slow opacity-50"></div>
                         
                         {/* Cable snapping in */}
                         <div className="absolute h-32 w-2 bg-pink-400 top-1/2 left-1/2 transform -translate-x-1/2 origin-top animate-pendulum rounded-full">
                             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-white border-2 border-pink-400 rounded-full"></div>
                         </div>
                     </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">The Anchor</h3>
                <span className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-4 block">Hold & Wait</span>
                <p className="text-sm text-gray-500 leading-loose max-w-xs">
                    デスクの脚にピタッ。<br/>
                    床に落ちるのを防いで、<br/>
                    いつでもあなたのそばで待機します。
                </p>
            </ScrollReveal>

            {/* Mode 3: The Adjust */}
            <ScrollReveal delay={200} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square bg-yellow-50 rounded-full mb-8 relative flex items-center justify-center overflow-hidden border border-yellow-100">
                     {/* Abstract Animation: Adjusting Length */}
                     <div className="relative w-64 h-20 flex items-center justify-center">
                         {/* Coiled Part */}
                         <div className="w-12 h-12 border-4 border-yellow-300 rounded-full mr-4 flex items-center justify-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                         </div>
                         {/* Line extending */}
                         <div className="h-1 bg-yellow-400 relative overflow-hidden animate-extend-line w-32 rounded-full"></div>
                         {/* Connector */}
                         <div className="w-6 h-4 bg-white border-2 border-yellow-400 rounded-sm ml-0 animate-slide-connector"></div>
                     </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">The Adjust</h3>
                <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-4 block">Just Fit</span>
                <p className="text-sm text-gray-500 leading-loose max-w-xs">
                    必要な長さだけ出して、<br/>
                    残りはまとめたまま。<br/>
                    デスクの上も広々使えます。
                </p>
            </ScrollReveal>

        </div>

        <style>{`
            .animate-coil-1 { animation: coil 3s ease-in-out infinite; }
            .animate-coil-2 { animation: coil 3s ease-in-out infinite 0.2s; }
            .animate-coil-3 { animation: coil 3s ease-in-out infinite 0.4s; }
            
            @keyframes coil {
                0% { stroke-dashoffset: 251; opacity: 0; }
                20% { opacity: 1; }
                50% { stroke-dashoffset: 0; }
                80% { stroke-dashoffset: 0; opacity: 1; }
                100% { stroke-dashoffset: -251; opacity: 0; }
            }

            @keyframes pendulum {
                0%, 100% { transform: translateX(-50%) rotate(5deg); }
                50% { transform: translateX(-50%) rotate(-5deg); }
            }
            .animate-pendulum { animation: pendulum 2s ease-in-out infinite; }

            @keyframes extendLine {
                0% { width: 10px; }
                50% { width: 100px; }
                100% { width: 10px; }
            }
            .animate-extend-line { animation: extendLine 4s ease-in-out infinite; }
            
            @keyframes slideConnector {
                0% { transform: translateX(0); }
                50% { transform: translateX(90px); }
                100% { transform: translateX(0); }
            }
            .animate-slide-connector { animation: slideConnector 4s ease-in-out infinite; }
        `}</style>
      </div>
    </section>
  );
};

export default PieceUtility;
