import React from 'react';

interface GlobalBackgroundProps {
  activeSection: string;
}

/**
 * 全面背景。セクションごとに切り替わる。
 *
 * ★スクリーンショットへの差し替え方:
 *   各セクションの `img` に画像パスを入れるだけ（例: img: '../../assets/pw_map.png'）。
 *   public/assets/ に置いた画像は本番 base 付きでも相対参照 '../../assets/...' で解決されます。
 *   img を入れない間は下の grad（グラデーション）が背景になります。
 */
interface BgItem { img?: string; grad: string }

const AMBER = '#B46400';

const SECTION_BG: Record<string, BgItem> = {
  hero:     { /* img: '../../assets/pw_map.png',      */ grad: `radial-gradient(120% 90% at 50% 0%, #2A2118 0%, #14110D 55%, #0B0A08 100%)` },
  problem:  { /* img: '../../assets/pw_problem.png',  */ grad: `radial-gradient(110% 90% at 80% 10%, #241813 0%, #120E0A 60%, #0B0A08 100%)` },
  flow:     { /* img: '../../assets/pw_flow.png',     */ grad: `linear-gradient(120deg, #261E14 0%, #110F0A 58%, #0B0A08 100%)` },
  map:      { /* img: '../../assets/pw_loadmap.png',  */ grad: `linear-gradient(135deg, #1C1813 0%, #100E0A 60%, #0B0A08 100%)` },
  gantt:    { /* img: '../../assets/pw_gantt.png',    */ grad: `radial-gradient(110% 90% at 20% 30%, #221C14 0%, #120F0A 60%, #0B0A08 100%)` },
  grow:     { /* img: '../../assets/pw_grow.png',     */ grad: `radial-gradient(110% 90% at 80% 70%, #1E2014 0%, #110F0A 60%, #0B0A08 100%)` },
  decide:   { /* img: '../../assets/pw_ledger.png',   */ grad: `linear-gradient(160deg, #221A12 0%, #120F0A 60%, #0B0A08 100%)` },
  ai:       { /* img: '../../assets/pw_import.png',   */ grad: `radial-gradient(120% 100% at 50% 100%, #2A2014 0%, #130F0A 60%, #0B0A08 100%)` },
  faces:    { /* img: '../../assets/pw_two.png',      */ grad: `linear-gradient(120deg, #1E1913 0%, #100E0A 55%, #0B0A08 100%)` },
  start:    { /* img: '../../assets/pw_start.png',    */ grad: `radial-gradient(120% 110% at 50% 50%, #2C2114 0%, #130F0A 60%, #0B0A08 100%)` },
};

const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ activeSection }) => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-[#0B0A08] pointer-events-none">
      {Object.entries(SECTION_BG).map(([key, item]) => (
        <div
          key={key}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${activeSection === key ? 'opacity-100' : 'opacity-0'}`}
        >
          {item.img ? (
            <img src={item.img} alt="" className="w-full h-full object-cover opacity-40" />
          ) : (
            <div className="w-full h-full" style={{ background: item.grad }} />
          )}
        </div>
      ))}
      {/* 質感: 微かなアンバーの光と上下のビネット */}
      <div className="absolute inset-0" style={{ background: `radial-gradient(60% 50% at 50% 8%, ${AMBER}22, transparent 70%)` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
    </div>
  );
};

export default GlobalBackground;
