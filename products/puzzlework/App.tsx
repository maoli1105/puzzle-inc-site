import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from '../../components/Footer';
import ScrollReveal from '../piece-one/components/ScrollReveal';
import MouseStalker from '../piece-one/components/MouseStalker';
import Opening from '../piece-one/components/Opening';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState('bg-zinc-900');
  const [textColor, setTextColor] = useState('text-zinc-100');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Smooth background color shift based on scroll position
      if (scrollY > windowHeight * 0.4) {
        setBgColor('bg-zinc-50');
        setTextColor('text-zinc-900');
      } else {
        setBgColor('bg-zinc-900');
        setTextColor('text-zinc-100');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased font-sans">
      <Opening onComplete={() => setLoading(false)} />
      <MouseStalker />
      
      <div className={`transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'} ${bgColor} ${textColor} min-h-screen selection:bg-zinc-200 selection:text-black overflow-hidden relative`}>
        <div className="noise-overlay" />
        
        {/* Absolute Teaser Label */}
        <div className="absolute top-8 left-8 z-50 text-[10px] tracking-[0.3em] font-bold uppercase opacity-40">
          Closed Beta Edition
        </div>

        <Header />

        <main className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Section 1: Hero */}
          <section id="hero" className="min-h-screen flex flex-col justify-center py-20">
            <ScrollReveal delay={200} className="space-y-12">
              <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight font-sans">
                人の歩みを、<br className="md:hidden" />未来へ渡す。
              </h1>
              <p className="text-xl md:text-2xl font-extralight tracking-widest text-zinc-400">
                Puzzle Work
              </p>
            </ScrollReveal>
          </section>

          {/* Section 2: Connection */}
          <section id="concept" className="min-h-screen flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-16">
              <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">Connection</h2>
              <div className="space-y-10">
                <h3 className="text-3xl md:text-5xl font-light tracking-wide leading-relaxed">
                  失われていた接続を、もう一度。
                </h3>
                <p className="text-lg md:text-xl font-light leading-loose text-zinc-500 max-w-2xl">
                  物理的な接続を取り戻すために、Piece One を作りました。<br />
                  人の歩みを未来へ繋ぐために、Puzzle Work を作ります。
                </p>
                <div className="pt-8 space-y-4 font-mono text-sm tracking-widest text-zinc-400 border-t border-zinc-800/10">
                  <p>Piece One は、今を繋ぐ。</p>
                  <p>Puzzle Work は、人の歩みを、未来へ渡す。</p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 3: Individual (Selfishness) */}
          <section id="features" className="min-h-screen flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-12">
              <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">Selfishness</h2>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                  自分のために、残す。
                </h3>
                <p className="text-base md:text-lg font-light leading-loose text-zinc-500 max-w-xl">
                  誰かに管理されるための記録ではなく、<br />
                  自分が歩んだ軌跡を、自分のための資産として手元に残す。<br /><br />
                  その純粋な利己の動機から、すべての接続は始まります。
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 4: Why Piece (Interaction) */}
          <section id="colors" className="min-h-screen flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-12">
              <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">The Piece</h2>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                  一つの仕事だけでは、価値にならない。
                </h3>
                <p className="text-base md:text-lg font-light leading-loose text-zinc-500 max-w-xl">
                  誰かの歩みと繋がった瞬間、仕事は初めて意味を持ちます。<br /><br />
                  他者と、そして未来と噛み合うための接合点。<br />
                  それが、私たちが「ピース」と呼ぶ理由です。
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 5: Beautiful Byproduct (利他) */}
          <section id="spec" className="min-h-screen flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-12">
              <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">Byproduct</h2>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                  組織の記憶は、ただの副産物です。
                </h3>
                <p className="text-base md:text-lg font-light leading-loose text-zinc-500 max-w-xl">
                  あなたが残した迷いは、未来の誰かを救うかもしれない。<br /><br />
                  一人ひとりが自分のために残したピースが、結果として、組織の美しい記憶の地層になる。<br /><br />
                  誰かが歩んだ道を、なかったことにしたくないから。
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 6: Partnership */}
          <section className="min-h-[80vh] flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-12">
              <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">Partnership</h2>
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-zinc-400">
                  Puzzle Work β
                </h3>
                <p className="text-base md:text-lg font-light leading-loose text-zinc-500 max-w-xl">
                  現在、限られたパートナーとともに、Puzzle Workを大切に育てています。<br /><br />
                  私たちが探しているのは、顧客ではありません。<br />
                  未来の働き方というパズルを、共に完成させる仲間です。
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Section 7: Epilogue */}
          <section className="min-h-screen flex flex-col justify-center py-20 border-t border-zinc-800/20">
            <ScrollReveal className="space-y-12 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-light tracking-wide leading-relaxed">
                人の歩みを、未来へ渡す。
              </h3>
              <p className="text-lg md:text-xl font-light leading-loose text-zinc-400">
                私たちは、その接続を取り戻したい。
              </p>
              <div className="pt-12 text-2xl font-bold tracking-widest uppercase text-zinc-500">
                Puzzle Work
              </div>
            </ScrollReveal>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
