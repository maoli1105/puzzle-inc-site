import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro';
import MapGuide from './sections/MapGuide';
import PieceGuide from './sections/PieceGuide';
import ScheduleGuide from './sections/ScheduleGuide';
import MeetingGuide from './sections/MeetingGuide';
import TeamGuide from './sections/TeamGuide';
import AnalyticsGuide from './sections/AnalyticsGuide';
import OperationsGuide from './sections/OperationsGuide';

const AMBER = '#B46400';

const categories = [
  { id: 'intro', title: 'はじめに', icon: '01' },
  { id: 'map', title: 'マップとフォルダ', icon: '02' },
  { id: 'piece', title: 'ピースとフロー', icon: '03' },
  { id: 'schedule', title: 'スケジュール', icon: '04' },
  { id: 'meeting', title: '会議と判断', icon: '05' },
  { id: 'team', title: 'チームと成長', icon: '06' },
  { id: 'analytics', title: '分析と管理', icon: '07' },
  { id: 'operations', title: '運用と自動化', icon: '08' },
];

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 pb-2 border-b border-gray-200">{children}</h2>
);
export const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-base font-bold text-gray-800 mt-8 mb-3">{children}</h3>
);
export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[14px] leading-relaxed text-gray-600 mb-4">{children}</p>
);
export const Tip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 my-4 text-[13px] text-gray-700">{children}</div>
);
export const Step: React.FC<{ n: number; children: React.ReactNode }> = ({ n, children }) => (
  <div className="flex gap-3 mb-4">
    <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-[11px] font-bold flex items-center justify-center mt-0.5" style={{ background: AMBER }}>{n}</span>
    <div className="text-[14px] text-gray-600 leading-relaxed">{children}</div>
  </div>
);
export const Def: React.FC<{ term: string; children: React.ReactNode }> = ({ term, children }) => (
  <div className="mb-4 pl-4 border-l-2 border-gray-200">
    <dt className="text-[14px] font-bold text-gray-800">{term}</dt>
    <dd className="text-[13px] text-gray-600 mt-1">{children}</dd>
  </div>
);

const guideContent: Record<string, { title: string; component: React.FC }> = {
  intro: { title: 'はじめに', component: Intro },
  map: { title: 'マップとフォルダ', component: MapGuide },
  piece: { title: 'ピースとフロー', component: PieceGuide },
  schedule: { title: 'スケジュール', component: ScheduleGuide },
  meeting: { title: '会議と判断', component: MeetingGuide },
  team: { title: 'チームと成長', component: TeamGuide },
  analytics: { title: '分析と管理', component: AnalyticsGuide },
  operations: { title: '運用と自動化', component: OperationsGuide },
};

const App: React.FC = () => {
  const [active, setActive] = useState('intro');
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && guideContent[hash]) setActive(hash);
    const onHash = () => {
      const h = window.location.hash.slice(1);
      if (h && guideContent[h]) setActive(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (id: string) => {
    setActive(id);
    window.location.hash = id;
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const current = guideContent[active];
  const Content = current.component;
  const currentIdx = categories.findIndex(c => c.id === active);
  const prev = currentIdx > 0 ? categories[currentIdx - 1] : null;
  const next = currentIdx < categories.length - 1 ? categories[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 -ml-2" onClick={() => setMobileMenu(!mobileMenu)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <a href="../products/puzzlework/" className="flex items-center gap-2">
              <span className="text-[15px] font-bold tracking-tight">Puzzle Work</span>
              <span className="text-[11px] font-medium text-gray-400 tracking-wider">GUIDE</span>
            </a>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-[12px] font-bold px-4 py-2 rounded-full text-white shadow-sm hover:opacity-90 transition"
            style={{ background: AMBER }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5V1.5h7V5M3.5 10.5H2a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-1.5m-7 0v2.5h7v-2.5m-7 0h7" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
            PDF保存
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar */}
        <aside className={`no-print w-64 flex-shrink-0 ${mobileMenu ? 'fixed inset-0 z-40 bg-white pt-14' : 'hidden md:block'}`}>
          <nav className="sticky top-14 py-6 px-4 space-y-1 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(cat.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center gap-3 ${
                  active === cat.id
                    ? 'bg-amber-50 text-amber-800 font-bold'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                <span className={`text-[10px] font-bold w-5 text-center ${active === cat.id ? 'text-amber-600' : 'text-gray-400'}`}>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 py-10 px-6 md:px-12 guide-content">
          <div className="print-only hidden mb-8">
            <p className="text-[11px] text-gray-400 tracking-wider">Puzzle Work Guide</p>
          </div>

          <div className="mb-2">
            <span className="text-[11px] font-bold tracking-widest" style={{ color: AMBER }}>
              {categories.find(c => c.id === active)?.icon}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{current.title}</h1>
          <div className="max-w-2xl">
            <Content />
          </div>

          {/* Pagination */}
          <div className="no-print flex justify-between items-center mt-16 pt-8 border-t border-gray-200 max-w-2xl">
            {prev ? (
              <button onClick={() => navigate(prev.id)} className="text-[13px] text-gray-500 hover:text-gray-800 transition flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {prev.title}
              </button>
            ) : <span />}
            {next ? (
              <button onClick={() => navigate(next.id)} className="text-[13px] text-gray-500 hover:text-gray-800 transition flex items-center gap-2">
                {next.title}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            ) : <span />}
          </div>
        </main>
      </div>

      {mobileMenu && <div className="no-print fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setMobileMenu(false)} />}
    </div>
  );
};

export default App;
