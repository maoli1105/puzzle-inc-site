
import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-16">
        <section className="pt-12 border-t border-gray-100 first:border-t-0 first:pt-0">
          <h2 className="text-[10px] font-bold mb-10 text-gray-400 tracking-[0.3em] uppercase">01 / 個人情報の収集について</h2>
          <p className="text-gray-600 leading-relaxed">
            株式会社パズル（以下、「当社」）は、本Webサイトの運営において、お客様の氏名、メールアドレス、住所、電話番号、およびサービスの利用履歴などの個人情報を、適法かつ公正な手段によって取得します。具体的には、お問い合わせフォームの入力や、サービスへの登録時に情報を収集することがあります。
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-bold mb-10 text-gray-400 tracking-[0.3em] uppercase">02 / 個人情報の利用目的</h2>
          <p className="text-gray-600 mb-4">取得した個人情報は、以下の目的のために利用いたします：</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>お客様からのお問い合わせに対する回答、および製品・サービスの案内</li>
            <li>ご注文いただいた製品の発送、およびアフターサービスの提供</li>
            <li>サービスの改善、新製品の開発、およびマーケティング分析</li>
            <li>規約違反行為の調査、および不正利用の防止</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-bold mb-10 text-gray-400 tracking-[0.3em] uppercase">03 / 個人情報の第三者提供</h2>
          <p className="text-gray-600 mb-4">
            当社は、法令に基づく場合、または以下のいずれかに該当する場合を除き、あらかじめお客様の同意を得ることなく個人情報を第三者に提供することはありません。
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、本人の同意を得ることが困難な場合</li>
            <li>業務委託先に対し、利用目的の達成に必要な範囲内で個人情報の取り扱いを委託する場合</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">04 / 個人情報の管理と保護</h2>
          <p className="text-gray-600 leading-relaxed">
            当社は、個人情報の漏洩、滅失、または毀損を防止するため、適切なセキュリティ対策を講じ、厳重に管理いたします。また、個人情報を取り扱う従業員や委託先に対して適切に監督を行います。
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-[10px] font-black mb-10 text-gray-400 tracking-[0.3em] uppercase">05 / 情報の開示・訂正・削除</h2>
          <p className="text-gray-600 leading-relaxed">
            お客様ご本人より、個人情報の開示、訂正、または削除の請求があった場合は、ご本人であることを確認した上で、速やかに対応いたします。ご希望の場合は、お問い合わせページよりご連絡ください。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-black tracking-tight">6. Cookie（クッキー）の利用</h2>
          <p className="text-gray-600 leading-relaxed">
            当サイトでは、利用者の利便性向上や利用状況の把握のため、Cookieを使用することがあります。ブラウザの設定によりCookieの受け取りを拒否することも可能ですが、その際、一部の機能が正常に動作しない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-black tracking-tight">7. プライバシーポリシーの改定</h2>
          <p className="text-gray-600 leading-relaxed">
            当社は、社会情勢の変化や法令の改正に伴い、本プライバシーポリシーを適宜見直し、改定することがあります。改定後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <div className="pt-20 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400 font-mono tracking-widest uppercase">
          <span>Final Update: April 2, 2026</span>
          <span>Puzzle Inc. Personal Information Protection Officer</span>
        </div>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
