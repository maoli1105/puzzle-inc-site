import React from 'react';
import ScrollReveal from './ScrollReveal';

const Company: React.FC = () => {
  return (
    <section id="company" className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Company</span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">会社概要</h3>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Company Details */}
          <ScrollReveal className="w-full lg:w-1/2">
            <dl className="divide-y divide-gray-100">
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">会社名</dt>
                <dd className="text-sm text-gray-900 col-span-2 font-medium">株式会社パズル</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">設立</dt>
                <dd className="text-sm text-gray-900 col-span-2 font-medium">2017年 2月</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">代表者</dt>
                <dd className="text-sm text-gray-900 col-span-2 font-medium">毛利　哲也</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">所在地</dt>
                <dd className="text-sm text-gray-900 col-span-2 font-medium">広島県尾道市瀬戸田町名荷1251-7</dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">事業内容</dt>
                <dd className="text-sm text-gray-900 col-span-2 leading-relaxed font-medium">
                  スマートフォンアクセサリーの企画・製造・販売<br />
                  デジタルライフを豊かにする製品・サービスの開発
                </dd>
              </div>
              <div className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-gray-500">連絡先</dt>
                <dd className="text-sm text-gray-900 col-span-2 leading-relaxed font-medium">
                  電話：050-1725-7979<br />
                  メール：maoli1105@mail.com
                </dd>
              </div>
            </dl>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={200} className="w-full lg:w-1/2 h-80 lg:h-auto min-h-[400px] bg-gray-100 relative grayscale filter rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.078864821633!2d133.08416627572767!3d34.37424459040938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355057b5c8c6c97f%3A0x1234567890abcdef!2z5bqD5bO255yM5bC-6YGT5biC54Cs5oi455Sw55S65ZCN6I23MTI1MS03!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Company;