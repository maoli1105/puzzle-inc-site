
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    question: "強力な磁気は、スマートフォンやPCに影響しませんか？",
    answer: "ご安心ください。Piece Oneに使用されている磁石は、現代の精密電子機器に影響を与えないよう計算された配置と強度で設計されています。フラッシュメモリやバッテリー、画面への悪影響はありません。"
  },
  {
    question: "Mag.Linkシステムはどのように活用するのがおすすめですか？",
    answer: "ケーブル自体が美しくまとまるため、持ち運びの際にカバンの中で絡まることがありません。また、デスクの金属製の脚やラックにコネクタを近づけるだけで「待機状態」として固定でき、床にケーブルが落ちるストレスから解放されます。"
  },
  {
    question: "高密度ナイロン編組の耐久性はどの程度ですか？",
    answer: "一般的なプラスチック製ケーブルを遥かに凌ぐ強度を誇る、独自の高密度編組を採用しています。過酷な屈曲テストを幾度もクリアしており、断線を気にせず、愛用のデニムのように長く使い続けることができます。"
  },
  {
    question: "急速充電の性能について教えてください。",
    answer: "最新のPD規格に対応しており、大出力の超高速充電が可能です。MacBook ProからiPad、Androidスマートフォンまで、あらゆるUSB-Cデバイスの充電性能を最大限に引き出します。"
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
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-loose font-light pr-6 md:pr-12">
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
