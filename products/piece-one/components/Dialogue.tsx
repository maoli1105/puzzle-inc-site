
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    question: "iPhone 15シリーズに対応していますか？",
    answer: "はい、Piece OneおよびPiece Flowは、iPhone 15シリーズを含むすべてのUSB-C搭載デバイスに完全対応しています。最大240Wの出力に対応しており、Proモデルの高速充電も最大限に活用できます。"
  },
  {
    question: "マグネットクリップは取り外し可能ですか？",
    answer: "はい、可能です。ですが、私たちは装着したままでの使用を推奨しています。デスクの脚やラックの支柱など、磁性のある場所ならどこにでもケーブルを「待機」させておくことができるからです。"
  },
  {
    question: "製品の保証期間について教えてください。",
    answer: "すべてのパズル製品には、ご購入日から2年間の「ロングライフ保証」が付帯します。私たちの耐久性への自信の証です。通常使用での破損や不具合は、何度でも無償で交換いたします。"
  },
  {
    question: "ギフトラッピングは対応していますか？",
    answer: "パズルのパッケージは、それ自体がギフトボックスとして機能するようにデザインされています。プラスチックを使わず、手触りの良い紙素材を使用しています。そのまま大切な方へお渡しいただけます。"
  }
];

const AccordionItem: React.FC<{ item: QAItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
          {item.question}
        </span>
        <span className="relative ml-8 flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {/* Vertical Line */}
          <span className={`absolute bg-gray-400 w-px h-full transition-transform duration-300 ease-out ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
          {/* Horizontal Line */}
          <span className={`absolute bg-gray-400 h-px w-full transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-loose font-light pr-12">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Dialogue: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="dialogue" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Dialogue</span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            <TextReveal>Questions & Answers</TextReveal>
          </h3>
          <p className="text-gray-500 font-medium">
            対話もまた、パズルを完成させる重要なピースです。
          </p>
        </ScrollReveal>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100">
          {qaData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <AccordionItem 
                item={item} 
                isOpen={openIndex === index} 
                onClick={() => toggleIndex(index)} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dialogue;
