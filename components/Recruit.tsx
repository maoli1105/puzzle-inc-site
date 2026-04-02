
import React from 'react';
import ScrollReveal from './ScrollReveal';
import Marquee from './Marquee';
import TextReveal from './TextReveal';

const Recruit: React.FC = () => {
  return (
    <section id="recruit" className="relative py-40 bg-gray-900 text-white overflow-hidden">
        {/* Abstract shape background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-slow">
                <path fill="#FFFFFF" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,19.1C51.6,30.2,41.8,40.4,30.3,48.8C18.8,57.1,5.6,63.6,-6.4,62.7C-18.4,61.8,-29.2,53.5,-40.4,45.2C-51.6,36.9,-63.2,28.6,-68.8,16.7C-74.4,4.8,-74,-10.7,-66.2,-23.1C-58.5,-35.5,-43.3,-44.8,-29.8,-53.2C-16.3,-61.6,-4.5,-69.2,6.4,-68.1C17.3,-67,34.5,-73,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        {/* Marquee Background */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 -rotate-3 opacity-5 pointer-events-none select-none">
             <Marquee text="JOIN THE PUZZLE  CREATE THE FUTURE " className="text-[10rem] font-black" duration={40} />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <ScrollReveal className="mb-12 md:mb-0 md:w-1/2">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Recruit</span>
                <div className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                    <TextReveal stagger={0.1}>あなたの“カタチ”は、</TextReveal>
                    <br />
                    <TextReveal stagger={0.1} delay={500}>決まっていますか？</TextReveal>
                </div>
                <div className="space-y-6 text-gray-300 leading-loose text-lg font-light">
                    <p>
                        私たちは、まだ見ぬ形、まだ出会っていないピースを探しています。
                        決まった枠にはまる必要はありません。
                        あなたの個性が、私たちの新しい強みになります。
                    </p>
                    <p>
                        パズルには、必ず居場所があるから。
                    </p>
                    <p className="text-white text-xl mt-8 font-medium">
                        一緒に、“まだ誰も見たことのない絵”を完成させませんか？
                    </p>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                    href="mailto:info@puzzle-os.com?subject=Recruit:%20Entry%20Query&body=ご使命、または経歴などを添えてお気軽にご連絡ください。" 
                    className="clickable group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold text-gray-900 transition duration-300 ease-out border-2 border-white rounded-full shadow-lg hover:scale-105"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white/20 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Contact to Entry</span>
                    <span className="relative invisible">Contact to Entry</span>
                </a>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Recruit;
