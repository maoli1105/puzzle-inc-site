
import React from 'react';
import ScrollReveal from './ScrollReveal';

const PieceSpec: React.FC = () => {
  return (
    <section id="spec" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">Spec</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">製品仕様</h2>
        </ScrollReveal>

        <ScrollReveal>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-sm text-gray-600 max-w-2xl mx-auto">
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">製品名</dt>
                    <dd className="col-span-2 font-bold text-gray-900">Piece Flow</dd>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">タイプ</dt>
                    <dd className="col-span-2 font-medium">Type-C to Type-C シリコン バイカラーケーブル</dd>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">長さ</dt>
                    <dd className="col-span-2 font-medium">50cm / 1.0m / 1.5m</dd>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">カラー</dt>
                    <dd className="col-span-2 font-medium leading-relaxed">
                        ブルー×ピンク / ホワイト×ピンク / ホワイト×イエロー / <br/>
                        ブラック×イエロー / ブラック×ブラック
                    </dd>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">素材</dt>
                    <dd className="col-span-2 font-medium">リキッドシリコン、亜鉛合金</dd>
                </div>
                <div className="grid grid-cols-3 py-5 border-b border-gray-100">
                    <dt className="text-gray-400 font-bold">出力</dt>
                    <dd className="col-span-2 font-medium">最大240W / 480Mbpsデータ転送</dd>
                </div>
                <div className="grid grid-cols-3 py-5">
                    <dt className="text-gray-400 font-bold">価格</dt>
                    <dd className="col-span-2 font-bold text-lg text-gray-900">¥1,680 <span className="text-xs font-normal text-gray-500">(税込)</span></dd>
                </div>
            </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default PieceSpec;
