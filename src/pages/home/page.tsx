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
    <div className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <main>
        <HeroSection
          onStrategyClick={() => setStrategyOpen(true)}
          onWhitepaperClick={() => setWhitepaperOpen(true)}
        />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <HowItWorksSection />
        <DashboardSection />
        <WhoSection />
        <ComparisonSection />

        {/* CTA Section */}
        <section id="strategy" className="bg-[#0A0A0B] py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">Ready to Start</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build your AI growth system today
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              First results in 2–3 months. Systemic compounding growth after 6+. The brands that start now will own AI
              visibility in their category.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setStrategyOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00E5CC] text-[#0A0A0B] text-base font-bold hover:bg-[#00F5DA] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get a strategy for your business
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={() => setWhitepaperOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
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
