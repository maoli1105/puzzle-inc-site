
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

interface Review {
  quote: string;
  author: string;
  title: string;
}

const reviews: Review[] = [
  {
    quote: "デスク周りもファッションの一部。その日の気分でネイルを変えるように、ケーブルの色も選びたい。ブルー×ピンクの組み合わせは、見るたびに気分が上がります。",
    author: "E. Fujita",
    title: "Fashion Editor"
  },
  {
    quote: "マシュマロみたいな手触りに驚きました。カバンの中にポンと入れても全く絡まないのが本当に助かる。カフェでの作業中も、周りから『それどこの？』って聞かれます。",
    author: "S. Mori",
    title: "Lifestyle Vlogger"
  },
  {
    quote: "無機質なガジェットが多い中で、この柔らかいパステルカラーは癒しです。可愛いだけじゃなくて、充電がすごく速いのも頼もしい。制作のモチベーションが変わります。",
    author: "A. Yamamoto",
    title: "Illustrator"
  }
];

const PieceReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Voices</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                <TextReveal>Creators' View</TextReveal>
            </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12">
            {reviews.map((review, index) => (
                <ScrollReveal key={index} delay={index * 100} className="relative group cursor-default">
                    <div className="relative p-8 md:p-12 bg-pink-50/50 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-white border border-transparent hover:border-pink-100">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 text-6xl text-pink-200 font-serif opacity-50 group-hover:text-pink-300 transition-colors">“</div>
                        
                        <blockquote className="relative z-10 text-center">
                            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8 font-serif italic">
                                {review.quote}
                            </p>
                            <footer className="flex flex-col items-center">
                                <div className="w-8 h-px bg-pink-300 mb-4 group-hover:w-16 transition-all duration-500"></div>
                                <cite className="not-italic">
                                    <span className="block text-sm font-bold text-gray-900 uppercase tracking-widest">{review.author}</span>
                                    <span className="block text-xs text-gray-400 mt-1">{review.title}</span>
                                </cite>
                            </footer>
                        </blockquote>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PieceReviews;
