import { useState } from "react";
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const modules = [
  ["Entity SEO", "Schema, brand structure, catalog intelligence", "Make products and brand relationships readable for search systems and LLMs."],
  ["LLM Mentions", "Answer surfaces, citations, recommendation environments", "Increase retrieval and mention probability in ChatGPT, Perplexity, Gemini, and AI Overviews."],
  ["Programmatic Coverage", "Comparison, alternative, and scenario pages", "Expand commercial relevance across high-intent decision contexts."],
  ["AI CRO", "Segmentation, message adaptation, offer control", "Turn mediated discovery into more qualified conversion paths."],
  ["Signal Scoring", "Intent, value, and commercial feedback loops", "Decide which visibility wins actually drive revenue."],
  ["Retention Logic", "Lifecycle triggers, repeat purchase paths, behavioral automation", "Extend the system beyond acquisition into lasting commercial lift."],
];

export default function ModulesSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const header = useScrollAnimation({ threshold: 0.2 });
  const grid = useStaggerAnimation(modules.length, { threshold: 0.1 });

  return (
    <section id="modules" className="bg-[#0d1326] text-white py-16 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">Capabilities</p>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.96] max-w-2xl">
              A more technical, AI-native visual direction for the same business model.
            </h2>
            <p className="text-[#aab1cc] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              This version keeps the site modern and software-adjacent, but replaces generic AI startup styling with a cleaner search intelligence language.
            </p>
          </div>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map(([title, details, outcome], i) => (
            <div key={title} className={`rounded-[28px] border border-white/10 bg-[#111833] p-6 cursor-pointer transition-all duration-500 ease-out ${grid.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 90}ms` }} onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#98a4d6] font-semibold mb-2">Module 0{i + 1}</p>
                  <h3 className="text-white text-2xl font-semibold leading-snug">{title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#7c8cff]/40 bg-[#7c8cff]/10 flex items-center justify-center text-[#aab4ff]">
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </div>

              <p className="text-[#aab1cc] leading-relaxed mb-4">{details}</p>

              <div className={`overflow-hidden transition-all duration-300 ${expanded === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[#dce1ff] leading-relaxed">{outcome}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[#7c8cff] text-sm font-semibold">
                <span>{expanded === i ? 'Hide detail' : 'See detail'}</span>
                <i className={`${expanded === i ? 'ri-arrow-up-line' : 'ri-arrow-right-line'}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
