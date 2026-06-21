import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileCTA from './components/MobileCTA';
import GlobalBackground from './components/GlobalBackground';
import LeftSide from './components/LeftSide';
import Sidebar from './components/Sidebar';
import Opening from '../piece-one/components/Opening';
import MouseStalker from '../piece-one/components/MouseStalker';
import ScrollReveal from '../piece-one/components/ScrollReveal';

// PuzzleWork ブランドアクセント
const AMBER = '#B46400';
const CYAN = '#0891B2';
const GREEN = '#059669';
const DANGER = '#E60012';

/* ── AI診断プロンプト（顧客が普段使うAIに貼り付けて、比較前提・辛口で評価させる） ── */
const DIAGNOSIS_PROMPT = `あなたは辛口の業務改善コンサルタントです。営業トークは禁止。経営判断として、まず「導入しない理由」を探し、その上で明確に価値があるときだけ導入を勧めてください。

# まず確認：以下に当てはまるなら、導入しない方が良い可能性が高い
- 5人以下で全員が同じ仕事を見ている
- 仕事が個人完結型で、引き継ぎが少ない
- Slackや口頭だけで十分回っている
- 業務フロー（仕事の依存関係）を整理する時間が取れない
- 管理者に、仕事の流れを設計する意思がない
→ まず当てはまるか判定し、当てはまるなら正直にそう述べてください。

# 評価軸（価値の中心）
Puzzle Work の価値の中心は、会議でもAI要約でもありません。中心は「仕事が人から人へ自動で流れること」（完了→次が動く→止まった場所が勝手に見える）。この一点だけで導入価値があるかを評価してください。会議・決断台帳・AI要約・スキル育成は"加点要素"にすぎません。

# 当社の状況（記入してください）
- 利用中のツール：（例：Slack / Google Meet / スプレッドシート / Notion など）
- 組織規模：（例：15人・Web制作。正社員/業務委託の内訳も）
- いまの課題：（例：案件の引き継ぎで止まる、誰が何で詰まっているか見えない）

★重要：上の3つが空欄、または「（例：…）」のまま未記入の場合は、評価を始めないでください。勝手に典型例を仮定して評価してはいけません。まず「利用中のツール・組織規模（正社員/業務委託の内訳）・いまの課題」の3点を相手に質問し、回答を得てから初めて下記の評価を行ってください。

# 評価してほしいこと（Puzzle Work単体ではなく、今の運用との比較で）
1. 当社との相性（100点満点・理由つき）
2. 今の運用（記入したツール）と比較した優位／劣位（★乗り換えコストも含めて）
3. Notion・Asana・ClickUp・Monday・Slack運用 と比べた優位／劣位
4. 解決される課題／解決されない課題
5. 導入した場合の3ヶ月後の運用イメージ
6. ROI（費用対効果）の予測
7. 導入しない場合、3ヶ月後に発生しそうな問題（損失）
8. ★このツールの価値を一言で。あなたが経営者へ30秒で説明するなら、どう説明しますか？（自分の言葉で）
辛口で、忖度なしでお願いします。

# 評価対象：Puzzle Work とは（以下は記入不要。これを読んで評価してください）

## 一言で
「タスク管理ツール」ではなく「組織の流れ管理（運営OS）」。中核は、仕事が人から人へ自動で流れること。中間管理職が毎日やっている『今どこで止まってる？』の確認作業をなくす。

## 中核の仕組み：自動ハンドオフ
- すべての仕事を「ピース」という単位に統一し、依存関係（順番）でつなぐ。つなぐと組織全体が1枚のマップ（地形）になる。
- 例：撮影→説明文→公開→広告 とつなぐと、「撮影」が完了した瞬間、「説明文」が自動で"着手可"に変わり、その担当者へ即通知が飛ぶ。「終わったよ」の連絡も、誰かに振り直す手間も不要。
- Asana等は誰かが手で更新しないと進捗が腐るが、Puzzle Workは「完了が次を動かす」ため、進捗・地図が常に最新に保たれる。

## 見える化
- 負荷マップ：誰に仕事が偏っているかが、報告を待たず色と形で見える。
- ボトルネックビュー：どこで流れが止まっているか（誰の待ちか）が一目。
- ガント：締切と前後関係を時系列で。スマホ横向きで全体俯瞰。

## 自動エスカレーション（責任者が見なくても止まらない）
- 停滞・期限超過・担当不在のピースをシステムが自動検出。時間経過で段階的に引き上げる：
  約48時間動かない→担当者へ催促通知／さらに約72時間→管理者へ／さらに約72時間→「決めどき」として会議候補に昇格。
- ピースが動けば自動で沈静化。＝「部長が3日見なくても組織が止まらない」。

## 会議・意思決定（補助機能）
- 会議は議題を一つずつ歩き、必ず成果（決定／ピース化／メモ／保留）を残す。話して終わりにしない。
- 会議のAI要約（Google Meet等）を貼ると、議題・決定・宿題に自動分解。宿題は担当付きの実ピースになり、上記の流れに乗る（議事録の書き写しゼロ）。
- 決定は「決断台帳」に積もり、見直し期限が来ると赤く浮かんで会議に戻る（"なぜそう決めたか誰も知らない"をなくす）。

## 2つの画面
- 管理者（導く人）：全体マップ・負荷・ボトルネック・ガント・会議・決断台帳・自動共有。
- メンバー（動く人）：自分のピースと今日の一歩／手を挙げて取れるピース／作業記録／スキルの樹／歩んだ実績（ポートフォリオ）。やらされる管理でなく成長が見える。
- アカウントは個人単位（共有ログインなし＝監査・権限管理が適切）。ワーカーは一生使う個人メールで登録し、転職しても実績が会社をまたいで残る。

## セキュリティ
- パスワードはハッシュ化（bcrypt）、通信前提はHTTPS、会社ごとにデータは分離、ログインに回数制限。秘密情報はコードに含めない設計。

## 提供形態・価格（暫定）
- 提供：Web（PC＝マップ中心、スマホ＝会議・進行も可）。
- 価格：会社単位の月額（規模で段階。目安は月額数万円規模）。現在クローズドベータで、初期パートナーは無料〜固定の優待。
- 想定ROI観点：制作会社なら案件1本の利益は数十万円規模。引き継ぎ遅延を月1件防げれば十分に元が取れる、という水準を狙う。

## 競合との位置づけ
- Asana/ClickUp/Monday＝タスク管理（会議は外、進捗は手更新）。Notion＝情報管理（中心はページ）。Slack＝会話管理（聞かないと分からない）。Puzzle Work＝流れ管理（完了が次を動かし、止まりが勝手に見える）。

# 正直な適合条件（ここも必ず評価に反映してください）
- 向いている：部署・担当をまたぐ引き継ぎが多い／納期遅延が利益に直結する（制作会社・広告代理店・受託開発・多部署の中小。目安10〜50人）。
- 向いていない：5人以下で全部Slackで足りる／仕事が個人で完結し引き継ぎが少ない／管理者が業務の流れ（ピースの依存）を設計する初期コストを払えない組織。

# 出力
上記の「当社の状況」と、この製品詳細・適合条件を突き合わせ、評価項目1〜8に辛口で回答してください。
最後に必ず、次の2つを明記：
(A) あなたが当社の経営者なら「導入する／導入しない」のどちらを選ぶか、理由とともに一つに絞って（曖昧な結論は禁止）。
(B) 導入優先度を A：今すぐ検討 ／ B：半年以内に検討 ／ C：まだ不要 から1つ選ぶ。`;

/* ── 共通パーツ ───────────────────────────────────────── */
const CopyBlock: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* noop */ }
  };
  return (
    <div className="relative max-w-xl mx-auto mt-10 text-left">
      <button
        onClick={copy}
        className="absolute -top-3 right-3 text-[12px] font-bold px-4 py-2 rounded-full text-white shadow clickable z-10"
        style={{ background: copied ? '#059669' : '#B46400' }}
      >
        {copied ? 'コピーしました' : 'プロンプトをコピー'}
      </button>
      <pre className="bg-gray-900 text-gray-100 rounded-xl p-5 pt-7 text-[11.5px] leading-relaxed overflow-auto max-h-[320px] whitespace-pre-wrap font-mono">{text}</pre>
    </div>
  );
};
const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xs font-bold tracking-[0.35em] uppercase mb-5" style={{ color: AMBER }}>{children}</h2>
);
const H = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl md:text-[32px] font-bold tracking-tight text-gray-900 leading-snug">{children}</h3>
);
const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-loose text-gray-600 font-medium mt-6">{children}</p>
);
const Shot: React.FC<{ children: React.ReactNode; caption?: string }> = ({ children, caption }) => (
  <div className="max-w-md mx-auto mt-12">
    <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 text-left">{children}</div>
    {caption && <p className="text-[11px] text-gray-400 text-center mt-3 tracking-wider">{caption}</p>}
  </div>
);
const ScreenShot: React.FC<{ src: string; alt: string; caption?: string }> = ({ src, alt, caption }) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = React.useState(false);
  const origin = React.useRef({ x: 50, y: 50 });
  const base = import.meta.env.BASE_URL;
  const resolved = src.startsWith('/') ? base + src.slice(1) : src;
  const applyOrigin = () => { if (imgRef.current) imgRef.current.style.transformOrigin = `${origin.current.x}% ${origin.current.y}%`; };
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    origin.current = { x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 };
    applyOrigin();
  };
  const onLeave = () => { origin.current = { x: 50, y: 50 }; applyOrigin(); };
  const onTap = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const t = e.touches[0];
    origin.current = { x: ((t.clientX - rect.left) / rect.width) * 100, y: ((t.clientY - rect.top) / rect.height) * 100 };
    applyOrigin();
    setZoomed(z => !z);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!zoomed || e.touches.length > 1) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const t = e.touches[0];
    origin.current = { x: ((t.clientX - rect.left) / rect.width) * 100, y: ((t.clientY - rect.top) / rect.height) * 100 };
    applyOrigin();
  };
  return (
    <div className="max-w-md mx-auto mt-12">
      <div ref={wrapRef} className="rounded-lg shadow-xl border border-white/10 overflow-hidden cursor-zoom-in" onMouseMove={onMove} onMouseLeave={onLeave} onTouchStart={onTap} onTouchMove={onTouchMove}>
        <img ref={imgRef} src={resolved} alt={alt} className={`w-full h-auto block transition-transform duration-300 ease-out hover:scale-[2.2] ${zoomed ? 'scale-[2.2]' : ''}`} style={{ transformOrigin: '50% 50%' }} />
      </div>
      {caption && <p className="text-[11px] text-gray-400 text-center mt-3 tracking-wider">{caption}</p>}
    </div>
  );
};
const PieceCard: React.FC<{ accent: string; title: React.ReactNode; meta?: string; bar?: number; dim?: boolean }> = ({ accent, title, meta, bar, dim }) => (
  <div className="relative bg-white border border-gray-200 rounded-lg p-3 overflow-hidden" style={{ opacity: dim ? 0.55 : 1 }}>
    <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: accent }} />
    <div className="text-[13px] font-bold text-gray-900 flex items-center gap-2 flex-wrap">{title}</div>
    {typeof bar === 'number' && (
      <div className="h-[5px] bg-gray-100 rounded-full mt-2 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${bar}%`, background: AMBER }} /></div>
    )}
    {meta && <div className="text-[11px] text-gray-400 mt-1.5">{meta}</div>}
  </div>
);
const Tag: React.FC<{ bg: string; children: React.ReactNode }> = ({ bg, children }) => (
  <span className="text-[9px] font-extrabold text-white rounded-md px-1.5 py-0.5 whitespace-nowrap" style={{ background: bg }}>{children}</span>
);
const Section: React.FC<{ id: string; children: React.ReactNode; tint?: boolean }> = ({ id, children, tint }) => (
  <section id={id} className={`py-24 relative ${tint ? 'bg-white/50' : ''}`}>
    <div className="container mx-auto px-8 relative z-10 max-w-2xl text-center">{children}</div>
  </section>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -40% 0px' }
    );
    ['hero', 'problem', 'flow', 'map', 'gantt', 'grow', 'decide', 'ai', 'faces', 'screens', 'diagnose', 'start'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased font-sans bg-black text-gray-900 min-h-screen">
      <Opening onComplete={() => setLoading(false)} />
      <MouseStalker />
      <GlobalBackground activeSection={activeSection} />
      <div className="noise-overlay" />

      <div className="lg:hidden"><Header /></div>

      <div className={`transition-opacity duration-1000 relative z-10 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="lg:grid lg:grid-cols-4 min-h-screen">
          <div className="lg:col-span-1"><LeftSide activeSection={activeSection} /></div>

          <main className="lg:col-span-2 w-full relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl min-h-screen">
            <div className="pb-24 lg:pb-0">

              {/* HERO ─ 価値を一行で */}
              <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
                <div className="container mx-auto px-8 text-center">
                  <h2 className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: AMBER }}>Work that flows by itself</h2>
                  <h1 className="text-[34px] md:text-[52px] font-bold tracking-tight text-gray-900 leading-[1.18]">
                    仕事が、人から人へ<br />ひとりでに流れる。
                  </h1>
                  <p className="mt-9 text-[15px] md:text-base leading-loose text-gray-600 font-medium max-w-xl mx-auto">
                    ピースをつなぐだけ。ひとつ終われば、次が自動で「着手できる」状態になり、<br className="hidden md:block" />
                    次の担当者にすぐ届く。手で振らなくても、止まらないチームへ。
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-10">
                    <a href="#diagnose" className="inline-flex items-center gap-2 font-bold text-[14px] px-7 py-3.5 rounded-full text-white transition-transform hover:scale-[1.03] clickable" style={{ background: AMBER, boxShadow: `0 14px 34px -12px ${AMBER}` }}>AIで診断する</a>
                    <a href="../../contact/" className="inline-flex items-center gap-2 font-bold text-[14px] px-7 py-3.5 rounded-full bg-white text-gray-900 border border-gray-200 clickable" style={{ borderColor: AMBER, color: AMBER }}>資料・デモを依頼</a>
                    <a href="#flow" className="inline-flex items-center gap-2 font-bold text-[14px] px-7 py-3.5 rounded-full bg-white text-gray-900 border border-gray-200 clickable">何ができる？</a>
                  </div>
                  <div className="flex flex-col items-center opacity-40 mt-14">
                    <span className="text-[10px] tracking-widest font-bold mb-2">SCROLL</span>
                    <div className="w-px h-12 bg-gray-400" />
                  </div>
                </div>
              </section>

              {/* PROBLEM ─ 痛み */}
              <Section id="problem" tint>
                <ScrollReveal><Eyebrow>その詰まり、心当たりは</Eyebrow><H>仕事は、人の<span style={{ color: AMBER }}>"あいだ"</span>で止まる。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>タスク管理を入れても、止まるのはいつも引き継ぎの瞬間。<br />Puzzle Work は、この"あいだ"を自動でつなぎます。</Body></ScrollReveal>
                <div className="grid sm:grid-cols-2 gap-3 mt-12 text-left">
                  {[
                    '終わったのに、次の人が気づいていない',
                    '誰が・何で詰まっているか、見えない',
                    '負荷が偏って、特定の人だけ溢れる',
                    '決めたことが、いつのまにか消えている',
                  ].map((t, i) => (
                    <ScrollReveal key={t} delay={i * 70}>
                      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                        <span className="text-[15px] font-bold shrink-0" style={{ color: DANGER }}>!</span>
                        <span className="text-[13.5px] text-gray-700 font-medium leading-relaxed">{t}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </Section>

              {/* FLOW ─ 主役: 完了が次をほどく */}
              <Section id="flow">
                <ScrollReveal><Eyebrow>The Conveyor — 自動ハンドオフ</Eyebrow><H>完了が、<br />次をほどく。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>
                  ピース同士を「順番」でつなぐと、ひとつが完了した瞬間、次のピースが自動で
                  <b style={{ color: AMBER }}>「着手できる」</b>に変わり、その担当者へ<b style={{ color: AMBER }}>すぐ通知</b>が飛びます。
                  誰かに振り直す手間も、「終わったよ」の連絡もいらない。仕事が、リレーのように流れていきます。
                </Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <ScreenShot src="/assets/puzzlework/02_map_folder_open.png" alt="マップ - フォルダ展開" caption="フォルダを開くと、ピースが接続線でつながっている" />
                </ScrollReveal>
                <div className="grid sm:grid-cols-3 gap-3 mt-10 text-left">
                  {[
                    { h: '自動で昇格', p: '前の工程が終わると、次が自動で着手可に。' },
                    { h: '次の人へ即通知', p: '担当者の画面にリアルタイムで届く。' },
                    { h: 'ボールが落ちない', p: '引き継ぎの"あいだ"が消える。' },
                  ].map(f => (
                    <ScrollReveal key={f.h}><div className="bg-white border border-gray-200 rounded-xl p-5 h-full"><h4 className="text-[14px] font-bold">{f.h}</h4><p className="text-[12.5px] text-gray-500 mt-1.5 leading-relaxed">{f.p}</p></div></ScrollReveal>
                  ))}
                </div>
              </Section>

              {/* MAP ─ 負荷とボトルネック */}
              <Section id="map" tint>
                <ScrollReveal><Eyebrow>Map — 負荷とボトルネック</Eyebrow><H>滞りは、<br />起きる前に見える。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>つながったピースは、そのまま組織の地形になります。<br />誰に仕事が偏っているか、どこで流れが止まっているか。報告を待たず、かたちで掴めます。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <ScreenShot src="/assets/puzzlework/01_map_overview.png" alt="マップ全体" caption="マップ — フォルダごとに仕事の全体像が見える" />
                </ScrollReveal>
              </Section>

              {/* GANTT ─ 時間軸 */}
              <Section id="gantt">
                <ScrollReveal><Eyebrow>Timeline — ガント</Eyebrow><H>時間軸でも、<br />追える。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>同じピースを、ガントで時系列に。締切と前後関係がひと目でわかります。<br />スマホは横にすれば、全体を見渡せます。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <ScreenShot src="/assets/puzzlework/03_gantt.png" alt="ガントチャート" caption="ガント — 締切と前後関係がひと目でわかる" />
                </ScrollReveal>
              </Section>

              {/* GROW ─ 動く人が育つ */}
              <Section id="grow" tint>
                <ScrollReveal><Eyebrow>For Members — 動く人</Eyebrow><H>やらされる管理じゃない。<br />自分が、育っていく。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>メンバーは、自分のピースと今日の一歩が見える画面を持ちます。<br />手を挙げて取れるピース、伸びていくスキルの樹、歩んだ実績。<br />管理されるためでなく、成長を実感するための場所です。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-12">
                    <ScreenShot src="/assets/puzzlework/06_skill_tree.png" alt="スキルツリー" caption="スキルツリー — 完成ピースで証明されたスキル" />
                    <ScreenShot src="/assets/puzzlework/07_portfolio.png" alt="ポートフォリオ" caption="ポートフォリオ — 歩んだ実績の一覧" />
                  </div>
                </ScrollReveal>
              </Section>

              {/* DECIDE ─ 判断（会議は支えに） */}
              <Section id="decide">
                <ScrollReveal><Eyebrow>Judgment — 判断を未来へ</Eyebrow><H>決めたことは、<br />消えない。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>終わらない運用も「判断」として残せます。会議は議事録ではなく働くセッションになり、<br />決断は台帳に積もり、見直す日が来たら赤く浮かんで、もう一度戻ってくる。<br />「なぜそう決めたか、誰も知らない」を、なくします。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <ScreenShot src="/assets/puzzlework/08_meetings.png" alt="会議" caption="会議室 — 議題ごとに合意を残し、判断を積み上げる" />
                </ScrollReveal>
              </Section>

              {/* AI ─ 二重入力ゼロ */}
              <Section id="ai" tint>
                <ScrollReveal><Eyebrow>Zero double-entry</Eyebrow><H>会議メモは、<br />貼るだけ。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>Google MeetやGPT・Claudeの要約をそのまま貼ると、議題・決定・宿題に自動で分かれます。<br />宿題は担当者まで結びついて、そのまま"流れる仕事"に乗ります。議事録の書き写しは、ゼロに。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="max-w-lg mx-auto mt-12">
                    {/* 貼り付けエリア */}
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-5 text-left">
                      <p className="text-[11px] font-bold text-gray-400 tracking-wider mb-3">PASTE</p>
                      <p className="text-[13px] text-gray-500 leading-relaxed">
                        夏コレクション定例 2024/06/20<br />
                        参加者: 毛利、佐藤、田中、山本<br /><br />
                        1. 新商品の撮影スケジュール → 6/28までに完了（担当: 佐藤）<br />
                        2. LP公開日を7/5に決定<br />
                        3. 広告予算は前回比120%で承認<br />
                        4. インフルエンサー候補リスト → 来週月曜までに提出（担当: 田中）
                      </p>
                    </div>
                    {/* 矢印 */}
                    <div className="flex justify-center my-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: AMBER }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M3 8l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                    {/* 自動分解結果 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5 text-left space-y-4">
                      <div>
                        <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: AMBER }}>DECISIONS</p>
                        <div className="space-y-1.5">
                          <div className="flex items-start gap-2 text-[13px]"><span className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-[9px] text-white font-bold" style={{ background: AMBER }}>D</span><span className="text-gray-700">LP公開日を<strong>7/5</strong>に決定</span></div>
                          <div className="flex items-start gap-2 text-[13px]"><span className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-[9px] text-white font-bold" style={{ background: AMBER }}>D</span><span className="text-gray-700">広告予算は前回比<strong>120%</strong>で承認</span></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: DANGER }}>PIECES</p>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-[13px]"><span className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-[9px] text-white font-bold" style={{ background: DANGER }}>P</span><span className="text-gray-700">新商品の撮影スケジュール完了</span><span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold ml-auto">佐藤</span><span className="text-[10px] text-gray-400">6/28</span></div>
                          <div className="flex items-center gap-2 text-[13px]"><span className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center text-[9px] text-white font-bold" style={{ background: DANGER }}>P</span><span className="text-gray-700">インフルエンサー候補リスト提出</span><span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-bold ml-auto">田中</span><span className="text-[10px] text-gray-400">月曜</span></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-4 tracking-wider">貼るだけで、決定と宿題に自動分解</p>
                  </div>
                </ScrollReveal>
              </Section>

              {/* FACES ─ 二つの眼 */}
              <Section id="faces">
                <ScrollReveal><Eyebrow>Two Eyes</Eyebrow><H>導く人と、動く人。<br />ひとつの仕事を二つの眼で。</H></ScrollReveal>
                <div className="grid md:grid-cols-2 gap-5 mt-12 text-left">
                  <ScrollReveal delay={120}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
                      <div className="w-10 h-1 rounded-full mb-4" style={{ background: AMBER }} />
                      <h3 className="text-[17px] font-bold">導く人の眼<span className="text-[11px] font-medium text-gray-400 ml-2">マネジメント</span></h3>
                      <p className="text-[12.5px] text-gray-500 mt-2 leading-relaxed">全体を俯瞰し、流れをつくり、判断を残す人へ。</p>
                      <ul className="mt-4 space-y-2">
                        {['全体マップ・負荷・ボトルネック', 'ガントで締切と前後関係', '会議室と、決めるべき議題', '決断台帳と、自動共有'].map(t => (
                          <li key={t} className="flex gap-2.5 items-start text-[12.5px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: AMBER }} />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={220}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
                      <div className="w-10 h-1 rounded-full mb-4" style={{ background: CYAN }} />
                      <h3 className="text-[17px] font-bold">動く人の手<span className="text-[11px] font-medium text-gray-400 ml-2">メンバー</span></h3>
                      <p className="text-[12.5px] text-gray-500 mt-2 leading-relaxed">一片を担い、手を動かし、自分の歩みを残す人へ。</p>
                      <ul className="mt-4 space-y-2">
                        {['自分のピースと、今日の一歩', '手を挙げて取れるピース', '作業時間と、進みの記録', 'スキルの樹と、歩んだ実績'].map(t => (
                          <li key={t} className="flex gap-2.5 items-start text-[12.5px] text-gray-600"><span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: CYAN }} />{t}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-10">
                  <ScrollReveal delay={300}><ScreenShot src="/assets/puzzlework/04_cockpit.png" alt="経営サマリー" caption="導く人 — 経営サマリー" /></ScrollReveal>
                  <ScrollReveal delay={350}><ScreenShot src="/assets/puzzlework/05_worker_dashboard.png" alt="ワーカー画面" caption="動く人 — ワーカー画面" /></ScrollReveal>
                </div>
              </Section>

              {/* MORE SCREENS ─ スプリント・分析・マーケット・保管庫 */}
              <Section id="screens" tint>
                <ScrollReveal><Eyebrow>And more</Eyebrow><H>まだまだ、ある。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>スプリント管理、プロジェクト横断の分析、外部ワーカーへの出品、完了した仕事の保管庫。<br />組織を動かすために必要な機能が、ひとつの場所に揃っています。</Body></ScrollReveal>
                <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-12">
                  <ScrollReveal delay={150}><ScreenShot src="/assets/puzzlework/10_sprint.png" alt="スプリント" caption="スプリント管理" /></ScrollReveal>
                  <ScrollReveal delay={200}><ScreenShot src="/assets/puzzlework/12_analytics.png" alt="分析" caption="プロジェクト分析" /></ScrollReveal>
                  <ScrollReveal delay={250}><ScreenShot src="/assets/puzzlework/09_marketplace.png" alt="マーケットプレイス" caption="マーケットプレイス" /></ScrollReveal>
                  <ScrollReveal delay={300}><ScreenShot src="/assets/puzzlework/11_archive.png" alt="保管庫" caption="保管庫" /></ScrollReveal>
                </div>
              </Section>

              {/* DIAGNOSE ─ AI診断（顧客のAIに一次審査させる） */}
              <Section id="diagnose">
                <ScrollReveal><Eyebrow>AI Diagnosis</Eyebrow><H>私たちより、<br />あなたのAIに聞いてください。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>
                  Puzzle Work が御社に合うかは、営業より、普段お使いのAIの方が客観的です。<br />
                  下のプロンプトを ChatGPT・Claude・Gemini に貼り付けて、<b>今のツールを前提に「乗り換える価値があるか」</b>を辛口で診断させてください。<br />
                  向いていない条件まで正直に書いてあります。合わないなら「合わない」と出るはずです。
                </Body></ScrollReveal>
                <ScrollReveal delay={200}><CopyBlock text={DIAGNOSIS_PROMPT} /></ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-[13px] text-gray-500 mt-7 leading-relaxed">AIが「導入する／優先度A・B」と判断したら、デモにお進みください。<br />「合わない」と出たなら、それも正しい判断です。私たちは、向いている会社にだけ向き合います。</p>
                </ScrollReveal>
              </Section>

              {/* START ─ 導入 */}
              <Section id="start" tint>
                <ScrollReveal><Eyebrow>Get Started</Eyebrow><H>明日から、<br />流れを変える。</H></ScrollReveal>
                <ScrollReveal delay={100}><Body>多部署をまたぐ引き継ぎ、終わらない運用、属人化した判断。<br />そのどれかに心当たりがあるチームなら、Puzzle Work は効きます。</Body></ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="flex flex-wrap gap-3 justify-center mt-10">
                    <a href="../../contact/" className="inline-flex items-center gap-2 font-bold text-[15px] px-8 py-4 rounded-full text-white transition-transform hover:scale-[1.03] clickable" style={{ background: AMBER, boxShadow: `0 16px 38px -12px ${AMBER}` }}>資料・デモを依頼する</a>
                  </div>
                  <p className="text-[12px] text-gray-400 mt-6 tracking-wider">株式会社パズルが、自社の現場で鍛えながら育てています。現在クローズドベータ。</p>
                </ScrollReveal>
              </Section>

            </div>
          </main>

          <div className="lg:col-span-1"><Sidebar activeSection={activeSection} /></div>
        </div>

        {/* Mobile fixed CTA */}
        <MobileCTA />
      </div>
    </div>
  );
};

export default App;
