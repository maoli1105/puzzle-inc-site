
import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <LegalLayout title="Thank You">
        <div className="py-20 text-center">
          <p className="text-2xl mb-8">お問い合わせを承りました。内容を確認の上、担当者よりご連絡差し上げます。</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest text-xs"
          >
            Back to Form
          </button>
        </div>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Contact Us">
      <p className="mb-12">
        製品に関するお問い合わせ、取材のご依頼、パートナーシップについてのご相談など、以下のフォームよりお気軽にご連絡ください。通常3営業日以内に返信いたします。
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative group">
            <input 
              type="text" 
              id="name" 
              required
              className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Name"
            />
            <label htmlFor="name" className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
              NAME
            </label>
          </div>
          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              required
              className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Email"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
              EMAIL
            </label>
          </div>
        </div>

        <div className="relative group">
          <select 
            id="subject"
            className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors peer"
            required
          >
            <option value="">お問い合わせ種別を選択してください</option>
            <option value="product">製品（Piece One）について</option>
            <option value="business">ビジネス・提携について</option>
            <option value="press">取材・プレスについて</option>
            <option value="other">その他</option>
          </select>
          <label htmlFor="subject" className="absolute left-0 -top-6 text-xs text-black">
            SUBJECT
          </label>
        </div>

        <div className="relative group">
          <textarea 
            id="message" 
            rows={5} 
            required
            className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black transition-colors peer placeholder-transparent resize-none"
            placeholder="Message"
          ></textarea>
          <label htmlFor="message" className="absolute left-0 top-4 text-gray-400 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
             MESSAGE
          </label>
        </div>

        <div className="pt-10">
          <button 
            type="submit"
            className="w-full md:w-auto px-12 py-5 bg-black text-white hover:bg-gray-800 transition-all rounded-sm uppercase tracking-widest text-xs font-bold"
          >
            Send Message
          </button>
        </div>
      </form>
    </LegalLayout>
  );
};

export default Contact;
