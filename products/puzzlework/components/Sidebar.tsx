import React from 'react';

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'Top' },
  { id: 'flow', label: 'Flow' },
  { id: 'map', label: 'Map' },
  { id: 'gantt', label: 'Timeline' },
  { id: 'grow', label: 'Members' },
  { id: 'decide', label: 'Judgment' },
  { id: 'faces', label: 'Two Eyes' },
  { id: 'screens', label: 'More' },
  { id: 'diagnose', label: 'AI診断' },
  { id: 'start', label: 'Start' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between w-full h-screen sticky top-0 py-12 px-8 border-l border-white/15 relative overflow-hidden z-40">
      {/* Section nav */}
      <div className="relative z-10 flex flex-col items-end">
        <nav className="flex flex-col space-y-4 text-right">
          {navItems.map((item) => {
            const on = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group flex items-center justify-end drop-shadow"
                style={{ color: on ? '#fff' : 'rgba(255,255,255,0.45)', fontWeight: on ? 700 : 400 }}
              >
                {item.label}
                <span className="rounded-full ml-3 transition-all duration-300" style={{ width: 6, height: 6, background: on ? '#B46400' : 'rgba(255,255,255,0.4)', transform: on ? 'scale(1)' : 'scale(0.6)' }} />
              </button>
            );
          })}
        </nav>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-full flex justify-end">
        <a
          href="../../contact/"
          className="w-full text-center text-white font-bold tracking-[0.2em] uppercase text-[11px] py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: '#B46400' }}
        >
          資料・デモを依頼
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
