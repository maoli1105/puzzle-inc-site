
import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsOfService: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service">
      <div className="space-y-16">
        <section className="pt-12 border-t border-gray-100 first:border-t-0 first:pt-0">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">01 / 規約の同意</h2>
          <p className="text-gray-600 leading-relaxed">
            本利用規約（以下、「本規約」）は、株式会社パズル（以下、「当社」）が提供する本Webサイトおよび各種サービス（以下、「本サービス」）の利用条件を定めるものです。利用者の皆様（以下、「ユーザー」）は、本サービスを利用することにより、本規約の全ての条項に同意したものとみなされます。
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">02 / 知的財産権の帰属</h2>
          <p className="text-gray-600 leading-relaxed">
            本サービスを通じて提供される全てのコンテンツ（テキスト、画像、動画、ロゴ、デザイン、プログラム等）に関する著作権、商標権、その他の知的財産権は、当社または当該権利を有する第三者に帰属します。ユーザーは、当社の事前の書面による承諾なく、これらを複製、転載、改変、または転用することはできません。
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">03 / 禁止事項</h2>
          <p className="text-gray-600 mb-4">ユーザーは、本サービスの利用にあたり、以下の行為を行ってはならないものとします：</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>当社または第三者の知的財産権、プライバシー、名誉、その他の権利を侵害する行為</li>
            <li>本サービスの運営を妨害し、または当社の信用を毀損する行為</li>
            <li>不正アクセス、逆アセンブル、逆コンパイル、リバースエンジニアリング等の解析行為</li>
            <li>法令または公序良俗に反する行為、またはそれらを助長する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">04 / サービスの変更・中断・終了</h2>
          <p className="text-gray-600 leading-relaxed">
            当社は、ユーザーに事前に通知することなく、本サービスの内容を変更し、またはその提供を中断・終了することができるものとします。当社は、これによりユーザーに生じた損害について、一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-black tracking-tight">5. 免責事項</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            当社は、本サービスに掲載される情報の正確性、完全性、最新性について万全を期しておりますが、これらを保証するものではありません。
          </p>
          <p className="text-gray-600 leading-relaxed">
            ユーザーによる本サービスの利用に関連して生じた直接的、または間接的な損害（データ消失、業務中断、コンピュータ故障等）について、当社は責任を負わないものとします。ただし、当社の故意または重大な過失による場合はこの限りではありません。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-black tracking-tight">6. 準拠法および管轄裁判所</h2>
          <p className="text-gray-600 leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className="pt-20 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400 font-mono tracking-widest uppercase">
          <span>Establishment: April 2, 2026</span>
          <span>Puzzle Inc. Legal Affairs Department</span>
        </div>
      </div>
    </LegalLayout>
  );
};

export default TermsOfService;
