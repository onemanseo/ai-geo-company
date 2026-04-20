import { useState } from "react";
import NavbarLight from "./components/NavbarLight";
import HeroSectionLight from "./components/HeroSectionLight";
import ProblemSectionLight from "./components/ProblemSectionLight";
import SolutionSectionLight from "./components/SolutionSectionLight";
import ModulesSectionLight from "./components/ModulesSectionLight";
import HowItWorksSectionLight from "./components/HowItWorksSectionLight";
import DashboardSectionLight from "./components/DashboardSectionLight";
import WhoSectionLight from "./components/WhoSectionLight";
import ComparisonSectionLight from "./components/ComparisonSectionLight";
import FooterSectionLight from "./components/FooterSectionLight";
import StrategyModal from "@/pages/home/components/StrategyModal";
import WhitepaperModal from "@/pages/home/components/WhitepaperModal";

export default function HomeLight() {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <NavbarLight />
      <main>
        <HeroSectionLight
          onStrategyClick={() => setStrategyOpen(true)}
          onWhitepaperClick={() => setWhitepaperOpen(true)}
        />
        <ProblemSectionLight />
        <SolutionSectionLight />
        <ModulesSectionLight />
        <HowItWorksSectionLight />
        <DashboardSectionLight />
        <WhoSectionLight />
        <ComparisonSectionLight />

        {/* CTA Section */}
        <section id="strategy-light" className="bg-gradient-to-br from-teal-500 to-teal-600 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-teal-100 text-xs font-semibold tracking-widest uppercase mb-4">Ready to Start</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build your AI growth system today
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              First results in 2–3 months. Systemic compounding growth after 6+. The brands that start now will own AI
              visibility in their category.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setStrategyOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-teal-600 text-base font-bold hover:bg-teal-50 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get a strategy for your business
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={() => setWhitepaperOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white text-base font-semibold hover:border-white/70 hover:bg-white/10 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line"></i>
                Download Whitepaper
              </button>
            </div>
          </div>
        </section>
      </main>

      <FooterSectionLight />

      <StrategyModal isOpen={strategyOpen} onClose={() => setStrategyOpen(false)} />
      <WhitepaperModal isOpen={whitepaperOpen} onClose={() => setWhitepaperOpen(false)} />
    </div>
  );
}
