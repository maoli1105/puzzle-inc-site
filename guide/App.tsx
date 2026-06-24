import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro';
import PieceGuide from './sections/PieceGuide';
import MapGuide from './sections/MapGuide';
import ScheduleGuide from './sections/ScheduleGuide';
import AnalyticsGuide from './sections/AnalyticsGuide';
import TeamGuide from './sections/TeamGuide';
import MeetingGuide from './sections/MeetingGuide';
import OperationsGuide from './sections/OperationsGuide';

const AMBER = '#B46400';

interface Phase {
  label: string;
  sub: string;
  items: { id: string; title: string }[];
}

const phases: Phase[] = [
  {
    label: 'Phase 1',
    sub: 'まず動かす',
    items: [
      { id: 'intro', title: 'はじめに' },
      { id: 'piece', title: 'ピースとフロー' },
      { id: 'map', title: 'マップとフォルダ' },
    ],
  },
  {
    label: 'Phase 2',
    sub: '見渡す',
    items: [
      { id: 'schedule', title: 'スケジュール' },
      { id: 'analytics', title: '分析と管理' },
      { id: 'team', title: 'チームと成長' },
    ],
  },
  {
    label: 'Phase 3',
    sub: '組織に根づかせる',
    items: [
      { id: 'meeting', title: '会議と判断' },
      { id: 'operations', title: '運用と自動化' },
    ],
  },
];

const allItems = phases.flatMap(p => p.items);

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
  piece: { title: 'ピースとフロー', component: PieceGuide },
  map: { title: 'マップとフォルダ', component: MapGuide },
  schedule: { title: 'スケジュール', component: ScheduleGuide },
  analytics: { title: '分析と管理', component: AnalyticsGuide },
  team: { title: 'チームと成長', component: TeamGuide },
  meeting: { title: '会議と判断', component: MeetingGuide },
  operations: { title: '運用と自動化', component: OperationsGuide },
};

const PHASE_COLORS = ['#B46400', '#0891B2', '#059669'];
const PHASE_BG = ['bg-amber-50', 'bg-cyan-50', 'bg-emerald-50'];
const PHASE_TEXT = ['text-amber-700', 'text-cyan-700', 'text-emerald-700'];
const PHASE_DOT = ['bg-amber-400', 'bg-cyan-400', 'bg-emerald-400'];

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
  const currentIdx = allItems.findIndex(c => c.id === active);
  const prev = currentIdx > 0 ? allItems[currentIdx - 1] : null;
  const next = currentIdx < allItems.length - 1 ? allItems[currentIdx + 1] : null;
  const currentPhaseIdx = phases.findIndex(p => p.items.some(i => i.id === active));

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
          <nav className="sticky top-14 py-6 px-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            {phases.map((phase, pi) => (
              <div key={phase.label} className={pi > 0 ? 'mt-5' : ''}>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1 ${PHASE_BG[pi]}`}>
                  <span className={`w-2 h-2 rounded-full ${PHASE_DOT[pi]}`} />
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${PHASE_TEXT[pi]}`}>{phase.label}</span>
                  <span className={`text-[11px] font-medium ${PHASE_TEXT[pi]}`}>{phase.sub}</span>
                </div>
                <div className="space-y-0.5 ml-1">
                  {phase.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-all flex items-center gap-2 ${
                        active === item.id
                          ? 'bg-gray-100 text-gray-900 font-bold'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${active === item.id ? PHASE_DOT[pi] : 'bg-gray-300'}`} />
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 py-10 px-6 md:px-12 guide-content">
          <div className="print-only hidden mb-8">
            <p className="text-[11px] text-gray-400 tracking-wider">Puzzle Work Guide</p>
          </div>

          {/* Phase badge */}
          <div className="mb-3 flex items-center gap-2">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
              style={{ background: `${PHASE_COLORS[currentPhaseIdx]}15`, color: PHASE_COLORS[currentPhaseIdx] }}
            >
              {phases[currentPhaseIdx].label}
            </span>
            <span className="text-[11px] text-gray-400">{phases[currentPhaseIdx].sub}</span>
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
