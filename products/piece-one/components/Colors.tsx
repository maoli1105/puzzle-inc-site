
import React from 'react';
import TextReveal from './TextReveal';

const Colors: React.FC = () => {
  return (
    <section id="colors" className="relative w-full">
      
      {/* 01: White (Pure) */}
      <div className="sticky top-0 h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden z-10 border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <span className="absolute -top-[10%] -left-[5%] text-[40vh] font-black text-gray-50 opacity-50 select-none">01</span>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase block mb-6">Pure</span>
                <h3 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter">
                    <TextReveal stagger={0.1}>White</TextReveal>
                </h3>
                <p className="text-gray-500 font-medium text-lg leading-loose max-w-md">
                    白は、始まりの色。<br/>
                    ノイズのない静寂。<br/>
                    思考をリセットし、素の自分に戻るための<br/>
                    もっともミニマルな選択。
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* Visual Representation */}
                <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-50 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-80"></div>
                    <div className="w-40 h-40 bg-white rounded-full shadow-inner"></div>
                </div>
            </div>
        </div>
      </div>

      {/* 02: Black (Focus) */}
      <div className="sticky top-0 h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <span className="absolute -bottom-[10%] -right-[5%] text-[40vh] font-black text-white opacity-5 select-none">02</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0 text-left md:text-right">
                <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase block mb-6">Focus</span>
                <h3 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                    <TextReveal stagger={0.1}>Black</TextReveal>
                </h3>
                <div className="flex justify-end">
                    <p className="text-gray-400 font-medium text-lg leading-loose max-w-md">
                        黒は、没入の色。<br/>
                        すべてを包み込む深淵。<br/>
                        余計な情報を遮断し、深い集中へと誘う<br/>
                        プロフェッショナルのための道具。
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                {/* Visual Representation */}
                 <div className="w-64 h-64 md:w-96 md:h-96 bg-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-90"></div>
                    <div className="w-40 h-40 bg-black rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-white/5"></div>
                </div>
            </div>
        </div>
      </div>

      {/* 03: Color (Play) */}
      <div className="sticky top-0 h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden z-30">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[50vh] font-black text-white opacity-10 select-none mix-blend-overlay">03</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-xs font-bold tracking-[0.3em] text-gray-100 uppercase block mb-6">Play</span>
            <h3 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">
                <TextReveal stagger={0.1}>Color</TextReveal>
            </h3>
            <p className="text-blue-100 font-medium text-xl leading-loose max-w-2xl mx-auto mb-12">
                色は、感情の色。<br/>
                退屈な日々に、鮮やかなアクセントを。<br/>
                機能性だけでは満たされない心を遊ばせる、<br/>
                あなたのためのプレイフルな選択。
            </p>
            
            <div className="flex justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-400 shadow-lg animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-16 h-16 rounded-full bg-gray-900 shadow-lg animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-16 h-16 rounded-full bg-cyan-400 shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Colors;
