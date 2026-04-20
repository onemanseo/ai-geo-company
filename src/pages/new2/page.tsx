import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StrategyModal from "./components/StrategyModal";
import WhitepaperModal from "./components/WhitepaperModal";

export default function Home() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  const phases = [
    ["Google Era", "SEO owned the funnel. Rank well, get traffic, convert demand."],
    ["AI Overview Era", "Platforms answer before the click, and the classic CTR model starts to break."],
    ["ChatGPT Era", "If your brand is not in the model's decision context, you lose before the visit happens."],
  ];

  const layers = [
    ["Data Layer", "Schema, knowledge graph, structured data", "AI understands your catalog"],
    ["AI Traffic", "AISO, content, mentions, answer surfaces", "New sources of demand"],
    ["AI Conversion", "Personalization, offers, AI CRO", "Higher CR and AOV"],
    ["AI Intelligence", "Scoring, analytics, LTV prediction", "Lower CAC, higher ROI"],
  ];

  const modules = [
    "AI Data Layer",
    "AISO",
    "AI Content Engine",
    "AI CRO",
    "AI Lead & Traffic Scoring",
    "AI Customer Journey",
    "AI Retention",
    "AI Link Building 2.0",
  ];

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#171717] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-70" style={{ background: "radial-gradient(circle at 12% 18%, rgba(255,126,78,0.26), transparent 18%), radial-gradient(circle at 82% 14%, rgba(89,170,255,0.24), transparent 20%), radial-gradient(circle at 74% 68%, rgba(255,205,82,0.22), transparent 18%), radial-gradient(circle at 18% 74%, rgba(102,238,201,0.18), transparent 16%)" }} />
      <Navbar />
      <main className="relative z-10">
        <HeroSection onStrategyClick={() => setStrategyOpen(true)} onWhitepaperClick={() => setWhitepaperOpen(true)} />

        <section id="problem" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The Shift</p>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-2xl">Users don&apos;t search anymore. They ask.</h2>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">The funnel you optimized for 10 years is being replaced by AI interfaces that interpret, summarize, recommend, and decide what gets seen.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {phases.map(([title, text], idx) => (
                <div key={title} className={`rounded-[30px] border border-[#171717]/10 p-6 shadow-[0_18px_50px_rgba(23,23,23,0.05)] ${idx===0?'bg-white/70':idx===1?'bg-[#dff3ff]': 'bg-[#171717] text-white rotate-[-1.5deg]'}`}>
                  <p className={`text-xs uppercase tracking-[0.2em] font-bold mb-3 ${idx===2?'text-[#ffd14f]':'text-[#6b6b6b]'}`}>{title}</p>
                  <p className={`text-lg leading-relaxed ${idx===2?'text-white/85':'text-[#171717]'}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The System</p>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-2xl">4 connected layers.</h2>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">A connected system, not a stack of random services. Each layer makes the next one more effective.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {layers.map(([title, detail, outcome], idx) => (
                <div key={title} className={`rounded-[30px] border border-[#171717]/10 p-6 ${idx===1?'bg-[#171717] text-white': idx===2?'bg-[#e8fff7]': idx===3?'bg-[#fff0db]':'bg-white/70'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <p className={`text-2xl font-black tracking-[-0.05em] ${idx===1?'text-white':'text-[#171717]'}`}>{title}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${idx===1?'bg-[#59aaff] text-[#171717]':'bg-[#171717] text-[#fff8ef]'}`}>0{idx+1}</span>
                  </div>
                  <p className={`${idx===1?'text-white/80':'text-[#4f4f4f]'} mb-3`}>{detail}</p>
                  <p className={`font-bold ${idx===1?'text-[#ffd14f]':'text-[#171717]'}`}>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The Modules</p>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-2xl">8 AI modules.</h2>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">Same content backbone as the original version, but reframed in a much lighter, weirder, more energetic visual language.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((item, idx) => (
                <div key={item} className={`rounded-[28px] border border-[#171717]/10 p-5 ${idx%4===0?'bg-white/75':idx%4===1?'bg-[#dff3ff] rotate-[-1deg]':idx%4===2?'bg-[#fff0db] rotate-[1deg]':'bg-[#e8fff7]'}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] font-bold mb-3">Module 0{idx+1}</p>
                  <h3 className="text-xl font-black tracking-[-0.04em] leading-snug">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[38px] bg-[#171717] text-white p-8 lg:p-10 shadow-[0_30px_80px_rgba(23,23,23,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#ffd14f] font-bold mb-4">How it works</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-4xl mb-6">The brands that start now will own AI visibility in their category.</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">First results in 2–3 months. Systemic compounding growth after 6+. The promise remains the same, only the visual shell changes.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setStrategyOpen(true)} className="px-8 py-4 rounded-full bg-[#59aaff] text-[#171717] text-base font-black whitespace-nowrap">Get a strategy for your business</button>
                <button onClick={() => setWhitepaperOpen(true)} className="px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white text-base font-bold whitespace-nowrap">Download Whitepaper</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 py-10 px-6 text-center text-[#6b6b6b] text-sm">AI GEO COMPANY, bright abstract new2 concept.</footer>
      <StrategyModal isOpen={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
