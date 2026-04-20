import { useState } from "react";
import Navbar from "../new2/components/Navbar";
import HeroSection from "../new2/components/HeroSection";
import StrategyModal from "./components/StrategyModal";
import WhitepaperModal from "./components/WhitepaperModal";

export default function Home() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  const phases = [
    ["2019", "Google Era", "Google → Category → Product → Cart", "SEO owned the entire funnel. Rank on page 1, get traffic. Simple, predictable, scalable."],
    ["2024", "AI Overview", "AI Overviews answer before the click", "Google generates the answer directly. Users get what they need without visiting your site. CTR drops 30–60%."],
    ["2026", "ChatGPT Era", "No brand mention. No traffic. No sale.", "AI assistants become the decision point. If your brand isn't in the LLM's knowledge, you don't exist."],
  ];

  const layers = [
    ["Data Layer", "Schema, knowledge graph, structured data", "AI understands your catalog", "The foundation everything else is built on. Without structured data, AI systems can't read, index, or recommend your products."],
    ["AI Traffic", "AISO, AI content, LLM mentions", "New sources of demand", "Get your brand cited in ChatGPT, Perplexity, and Gemini answers. Capture demand before it reaches Google."],
    ["AI Conversion", "Personalization, dynamic offers, AI CRO", "Higher CR and AOV", "Every visitor sees a different version of your site, optimized for their segment, intent, and purchase probability."],
    ["AI Intelligence", "Lead scoring, LTV prediction, analytics", "Lower CAC, higher ROI", "Predict who will buy, when, and how much. Reallocate budget in real time based on AI-scored intent signals."],
  ];

  const modules = [
    ["AI Data Layer", "Foundation", "AI can't read your catalog, you're invisible to LLMs"],
    ["AISO", "AI Search Optimization", "Your brand doesn't appear in ChatGPT or Perplexity answers"],
    ["AI Content Engine", "Scalable Content", "Manual content can't scale to cover all user scenarios"],
    ["AI CRO", "Conversion Optimization", "One-size-fits-all pages kill conversion for high-intent segments"],
    ["AI Lead & Traffic Scoring", "Predictive Intelligence", "Budget wasted on low-intent traffic with no purchase signal"],
    ["AI Customer Journey", "Decision Architecture", "Fragmented touchpoints lose customers between SERP and checkout"],
    ["AI Retention", "Lifecycle Automation", "High churn rate and low repeat purchase frequency"],
    ["AI Link Building 2.0", "LLM Citation Strategy", "Traditional backlinks don't influence LLM training data"],
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
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">The funnel you optimized for 10 years is being replaced. Here&apos;s what the transition looks like.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {phases.map(([year, label, title, text], idx) => (
                <div key={year} className={`rounded-[30px] border border-[#171717]/10 p-6 shadow-[0_18px_50px_rgba(23,23,23,0.05)] ${idx===0?'bg-white/70':idx===1?'bg-[#dff3ff]': 'bg-[#171717] text-white rotate-[-1.5deg]'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <p className={`text-xs uppercase tracking-[0.2em] font-bold ${idx===2?'text-[#ffd14f]':'text-[#6b6b6b]'}`}>{label}</p>
                    <span className={`text-sm font-black ${idx===2?'text-[#59aaff]':'text-[#171717]'}`}>{year}</span>
                  </div>
                  <h3 className={`text-2xl font-black tracking-[-0.04em] leading-snug mb-3 ${idx===2?'text-white':'text-[#171717]'}`}>{title}</h3>
                  <p className={`text-base leading-relaxed ${idx===2?'text-white/85':'text-[#4f4f4f]'}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The System</p>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-2xl">4 Connected Layers</h2>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">A connected system, not a service. Each layer reinforces the next. Remove one and the whole system weakens.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {layers.map(([title, detail, outcome, text], idx) => (
                <div key={title} className={`rounded-[30px] border border-[#171717]/10 p-6 ${idx===1?'bg-[#171717] text-white': idx===2?'bg-[#e8fff7]': idx===3?'bg-[#fff0db]':'bg-white/70'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <p className={`text-2xl font-black tracking-[-0.05em] ${idx===1?'text-white':'text-[#171717]'}`}>{title}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${idx===1?'bg-[#59aaff] text-[#171717]':'bg-[#171717] text-[#fff8ef]'}`}>0{idx+1}</span>
                  </div>
                  <p className={`${idx===1?'text-white/80':'text-[#4f4f4f]'} mb-2`}>{detail}</p>
                  <p className={`font-bold mb-3 ${idx===1?'text-[#ffd14f]':'text-[#171717]'}`}>{outcome}</p>
                  <p className={`${idx===1?'text-white/75':'text-[#4f4f4f]'} leading-relaxed`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The Modules</p>
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-2xl">8 AI Modules</h2>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">Each module solves a specific growth problem. Together they form a compounding system.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map(([title, subtitle, pain], idx) => (
                <div key={title} className={`rounded-[28px] border border-[#171717]/10 p-5 ${idx%4===0?'bg-white/75':idx%4===1?'bg-[#dff3ff] rotate-[-1deg]':idx%4===2?'bg-[#fff0db] rotate-[1deg]':'bg-[#e8fff7]'}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] font-bold mb-2">{subtitle}</p>
                  <h3 className="text-xl font-black tracking-[-0.04em] leading-snug mb-3">{title}</h3>
                  <p className="text-[#4f4f4f] leading-relaxed text-sm">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 lg:py-24 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[38px] bg-[#171717] text-white p-8 lg:p-10 shadow-[0_30px_80px_rgba(23,23,23,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#ffd14f] font-bold mb-4">Ready to Start</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-4xl mb-6">Build your AI growth system today</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">First results in 2–3 months. Systemic compounding growth after 6+. The brands that start now will own AI visibility in their category.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setStrategyOpen(true)} className="px-8 py-4 rounded-full bg-[#59aaff] text-[#171717] text-base font-black whitespace-nowrap">Get a strategy for your business</button>
                <button onClick={() => setWhitepaperOpen(true)} className="px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white text-base font-bold whitespace-nowrap">Download Whitepaper</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 py-10 px-6 text-center text-[#6b6b6b] text-sm">AI GEO COMPANY, new3 with new2 visual shell.</footer>
      <StrategyModal isOpen={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
