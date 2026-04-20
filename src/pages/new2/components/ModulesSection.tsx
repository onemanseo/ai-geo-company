import { useState } from "react";
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const modules = [
  {
    name: "AI Data Layer",
    subtitle: "Foundation",
    pain: "AI can't read your catalog — you're invisible to LLMs",
    solution: "Schema markup, knowledge graph, structured product data that AI systems can parse and cite.",
    impact: "High",
    impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
    icon: "ri-database-2-line",
  },
  {
    name: "AISO",
    subtitle: "AI Search Optimization",
    pain: "Your brand doesn't appear in ChatGPT or Perplexity answers",
    solution: "Content & mention strategy that lands your brand in LLM responses across all major AI platforms.",
    impact: "High",
    impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
    icon: "ri-search-eye-line",
  },
  {
    name: "AI Content Engine",
    subtitle: "Scalable Content",
    pain: "Manual content can't scale to cover all user scenarios",
    solution: "AI-generated pages for comparisons, guides, FAQs — built for real user intent at scale.",
    impact: "High",
    impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
    icon: "ri-article-line",
  },
  {
    name: "AI CRO",
    subtitle: "Conversion Optimization",
    pain: "One-size-fits-all pages kill conversion for high-intent segments",
    solution: "Dynamic copy, offers, and prices per segment with automated A/B testing powered by AI.",
    impact: "High",
    impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
    icon: "ri-line-chart-line",
  },
  {
    name: "AI Lead & Traffic Scoring",
    subtitle: "Predictive Intelligence",
    pain: "Budget wasted on low-intent traffic with no purchase signal",
    solution: "Purchase probability + LTV per user; real-time budget reallocation to highest-value segments.",
    impact: "High",
    impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
    icon: "ri-focus-3-line",
  },
  {
    name: "AI Customer Journey",
    subtitle: "Decision Architecture",
    pain: "Fragmented touchpoints lose customers between SERP and checkout",
    solution: "Unified decision architecture across SERP, AI platforms, site, and email — no gaps.",
    impact: "Medium-High",
    impactColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    icon: "ri-route-line",
  },
  {
    name: "AI Retention",
    subtitle: "Lifecycle Automation",
    pain: "High churn rate and low repeat purchase frequency",
    solution: "Personalized emails, behavioral triggers, and churn prediction models that act before users leave.",
    impact: "Medium",
    impactColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    icon: "ri-refresh-line",
  },
  {
    name: "AI Link Building 2.0",
    subtitle: "LLM Citation Strategy",
    pain: "Traditional backlinks don't influence LLM training data",
    solution: "Managed mentions in sources LLMs actually cite — Wikipedia, Reddit, industry publications, forums.",
    impact: "Medium",
    impactColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    icon: "ri-links-line",
  },
];

export default function ModulesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const header = useScrollAnimation({ threshold: 0.2 });
  const row1 = useStaggerAnimation(4, { threshold: 0.1 });
  const row2 = useStaggerAnimation(4, { threshold: 0.1 });

  return (
    <section id="modules" className="bg-[#0A0A0B] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">The Modules</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">8 AI Modules</h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">
            Each module solves a specific growth problem. Together they form a compounding system.{" "}
            <span className="text-white">Click any card to see the solution.</span>
          </p>
        </div>

        {/* Grid 4x2 — split into two rows for stagger */}
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div ref={row1.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.slice(0, 4).map((mod, i) => (
              <div
                key={mod.name}
                className={`relative rounded-2xl border bg-[#111113] p-5 cursor-pointer flex flex-col transition-all duration-500 ease-out ${
                  expanded === i
                    ? "border-[#00E5CC]/40 bg-[#00E5CC]/5"
                    : "border-white/8 hover:border-white/20"
                } ${row1.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <span
                  className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold border ${mod.impactColor} whitespace-nowrap`}
                >
                  {mod.impact}
                </span>
                <div className="mb-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1A1A1C] border border-white/8">
                    <i className={`${mod.icon} text-[#00E5CC] text-xl`}></i>
                  </div>
                </div>
                <p className="text-[#8A8A8A] text-[10px] font-semibold tracking-widest uppercase mb-1">{mod.subtitle}</p>
                <h3 className="text-white text-base font-bold mb-3 leading-snug">{mod.name}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed flex-1">
                  <span className="text-red-400/80 font-medium">Pain: </span>
                  {mod.pain}
                </p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-3 border-t border-white/8">
                    <p className="text-sm leading-relaxed">
                      <span className="text-[#00E5CC] font-medium">Solution: </span>
                      <span className="text-white/80">{mod.solution}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[#00E5CC] text-xs font-semibold">
                  <span>{expanded === i ? "Close" : "See solution"}</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${expanded === i ? "ri-arrow-up-s-line" : "ri-arrow-right-s-line"} text-sm`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div ref={row2.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.slice(4).map((mod, i) => {
              const globalIdx = i + 4;
              return (
                <div
                  key={mod.name}
                  className={`relative rounded-2xl border bg-[#111113] p-5 cursor-pointer flex flex-col transition-all duration-500 ease-out ${
                    expanded === globalIdx
                      ? "border-[#00E5CC]/40 bg-[#00E5CC]/5"
                      : "border-white/8 hover:border-white/20"
                  } ${row2.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setExpanded(expanded === globalIdx ? null : globalIdx)}
                >
                  <span
                    className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold border ${mod.impactColor} whitespace-nowrap`}
                  >
                    {mod.impact}
                  </span>
                  <div className="mb-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1A1A1C] border border-white/8">
                      <i className={`${mod.icon} text-[#00E5CC] text-xl`}></i>
                    </div>
                  </div>
                  <p className="text-[#8A8A8A] text-[10px] font-semibold tracking-widest uppercase mb-1">{mod.subtitle}</p>
                  <h3 className="text-white text-base font-bold mb-3 leading-snug">{mod.name}</h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed flex-1">
                    <span className="text-red-400/80 font-medium">Pain: </span>
                    {mod.pain}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded === globalIdx ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-3 border-t border-white/8">
                      <p className="text-sm leading-relaxed">
                        <span className="text-[#00E5CC] font-medium">Solution: </span>
                        <span className="text-white/80">{mod.solution}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[#00E5CC] text-xs font-semibold">
                    <span>{expanded === globalIdx ? "Close" : "See solution"}</span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={`${expanded === globalIdx ? "ri-arrow-up-s-line" : "ri-arrow-right-s-line"} text-sm`}></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
