import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ModulesSection from "./components/ModulesSection";
import StrategyModal from "./components/StrategyModal";
import WhitepaperModal from "./components/WhitepaperModal";

export default function Home() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <main>
        <HeroSection
          onStrategyClick={() => setStrategyOpen(true)}
          onWhitepaperClick={() => setWhitepaperOpen(true)}
        />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />

        <section id="how-it-works" className="bg-[#0d1326] py-16 lg:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">Method</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.96] max-w-2xl">
                  A sharper, more product-like service narrative.
                </h2>
              </div>
              <p className="text-[#aab1cc] text-lg leading-relaxed max-w-2xl lg:ml-auto">
                Instead of generic AI startup sections, this version frames the company as an intelligence partner with a clear operating model, a stronger hierarchy, and a more technical visual language.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                ["01", "Audit the search surface", "We map entity clarity, answer-engine presence, content gaps, and conversion friction across the full demand path."],
                ["02", "Build the visibility system", "We improve structured data, mention surfaces, commercial pages, and machine-readable relevance where the real leverage sits."],
                ["03", "Refine what compounds", "We measure signal quality, commercial lift, and answer-surface movement so the system gets more efficient over time."],
              ].map(([n, title, text]) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-[#111833] p-6">
                  <div className="w-10 h-10 rounded-full bg-[#7c8cff] text-[#0b1020] flex items-center justify-center text-sm font-bold mb-5">{n}</div>
                  <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-[#aab1cc] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="who" className="bg-[#0b1020] py-16 lg:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="rounded-[32px] border border-white/10 bg-[#111833] p-8 lg:p-10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">Best fit</p>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] leading-[0.96] mb-6">Built for brands that know search is changing fast.</h2>
                <p className="text-[#aab1cc] text-lg leading-relaxed">
                  This version is aimed at eCommerce and marketplace teams that want a higher-trust, more strategic design language, not a generic AI startup aesthetic.
                </p>
              </div>
              <div className="grid gap-5">
                {[
                  "Teams investing in SEO but seeing the answer layer reshape discovery.",
                  "Brands that need a clearer GEO / AISO / entity strategy story.",
                  "Operators who want the site to feel more like a premium intelligence company than a quick AI wrapper.",
                ].map((line) => (
                  <div key={line} className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-[#dce1ff] leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="bg-[#0d1326] py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">Ready to start</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.96] text-white mb-6">
              Build a search system that survives the AI interface shift.
            </h2>
            <p className="text-[#aab1cc] text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              This concept keeps the original business offer, but gives it a different visual frame, more technical, more product-adjacent, and more credible for an SEO + AI company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setStrategyOpen(true)} className="px-8 py-4 rounded-full bg-[#7c8cff] text-[#0b1020] text-base font-bold hover:bg-[#94a0ff] transition-all duration-200 whitespace-nowrap">
                Get a strategy for your business
              </button>
              <button onClick={() => setWhitepaperOpen(true)} className="px-8 py-4 rounded-full border border-white/20 text-white text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap">
                Download Whitepaper
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1020] border-t border-white/10 py-10 px-6 text-center text-[#7f89b5] text-sm">
        AI GEO COMPANY, new concept route for comparison.
      </footer>

      <StrategyModal isOpen={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
