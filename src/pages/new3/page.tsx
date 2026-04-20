import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ModulesSection from "./components/ModulesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhoSection from "./components/WhoSection";
import ComparisonSection from "./components/ComparisonSection";
import DashboardSection from "./components/DashboardSection";
import FooterSection from "./components/FooterSection";
import StrategyModal from "./components/StrategyModal";
import WhitepaperModal from "./components/WhitepaperModal";

export default function Home() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  return (
    <div className="new3-theme min-h-screen bg-[#fff8ef] text-[#171717] relative overflow-hidden">
      <style>{`
        .new3-theme { font-family: Inter, sans-serif; }
        .new3-theme * { border-radius: 0 !important; }
        .new3-theme h1, .new3-theme h2, .new3-theme h3, .new3-theme h4 { font-family: Inter, sans-serif !important; letter-spacing: -0.04em; }
        .new3-theme .bg-\[\#0A0A0B\], .new3-theme .bg-\[\#0D0D0F\], .new3-theme .bg-\[\#111113\], .new3-theme .bg-\[\#1A1A1C\] { background-color: #fffdf8 !important; }
        .new3-theme .text-white { color: #171717 !important; }
        .new3-theme .text-\[\#8A8A8A\], .new3-theme .text-\[\#B8B8B8\] { color: #505050 !important; }
        .new3-theme .text-\[\#00E5CC\] { color: #59aaff !important; }
        .new3-theme .bg-\[\#00E5CC\], .new3-theme .bg-\[\#00E5CC\]\/10, .new3-theme .bg-\[\#00E5CC\]\/15, .new3-theme .bg-\[\#00E5CC\]\/20 { background-color: #59aaff !important; }
        .new3-theme .border-white\/8, .new3-theme .border-white\/10, .new3-theme .border-white\/20, .new3-theme .border-\[\#00E5CC\]\/20, .new3-theme .border-\[\#00E5CC\]\/30, .new3-theme .border-\[\#00E5CC\]\/40, .new3-theme .border-\[\#00E5CC\]\/60 { border-color: rgba(23,23,23,0.12) !important; }
        .new3-theme .shadow-\[0_0_30px_rgba\(239\,68\,68\,0\.2\)\], .new3-theme .shadow-\[0_0_40px_rgba\(0\,229\,204\,0\.15\)\] { box-shadow: none !important; }
        .new3-theme img { filter: saturate(0.92) contrast(0.96); }
        .new3-theme section { position: relative; }
        .new3-theme section::before { content: ""; position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 10% 20%, rgba(255,126,78,0.10), transparent 18%), radial-gradient(circle at 88% 16%, rgba(89,170,255,0.10), transparent 18%); }
      `}</style>
      <div className="fixed inset-0 pointer-events-none opacity-70" style={{ background: "radial-gradient(circle at 12% 18%, rgba(255,126,78,0.18), transparent 18%), radial-gradient(circle at 82% 14%, rgba(89,170,255,0.16), transparent 20%), radial-gradient(circle at 74% 68%, rgba(255,205,82,0.14), transparent 18%)" }} />
      <Navbar />
      <main>
        <HeroSection onStrategyClick={() => setStrategyOpen(true)} onWhitepaperClick={() => setWhitepaperOpen(true)} />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <HowItWorksSection />
        <DashboardSection />
        <WhoSection />
        <ComparisonSection />

        <section id="strategy" className="bg-[#fff8ef] py-24 lg:py-32 border-t border-[#171717]/8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#59aaff] text-xs font-semibold tracking-widest uppercase mb-4">Ready to Start</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 leading-tight">
              Build your AI growth system today
            </h2>
            <p className="text-[#505050] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              First results in 2–3 months. Systemic compounding growth after 6+. The brands that start now will own AI visibility in their category.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setStrategyOpen(true)} className="flex items-center justify-center gap-2 px-8 py-4 bg-[#171717] text-[#fff8ef] text-base font-bold whitespace-nowrap shadow-[8px_8px_0_rgba(89,170,255,0.18)]">
                Get a strategy for your business
                <i className="ri-arrow-right-line"></i>
              </button>
              <button onClick={() => setWhitepaperOpen(true)} className="flex items-center justify-center gap-2 px-8 py-4 border border-[#171717]/12 bg-white/70 text-[#171717] text-base font-semibold whitespace-nowrap shadow-[8px_8px_0_rgba(255,126,78,0.14)]">
                <i className="ri-download-line"></i>
                Download Whitepaper
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      <StrategyModal isOpen={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
