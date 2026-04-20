import { useState } from "react";
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

const modules = [
  {
    name: "Entity Readiness",
    subtitle: "Foundation",
    pain: "Weak machine-readable signals leave your products under-interpreted.",
    solution: "We structure product, brand, and commercial data so search engines and LLMs can actually understand what you sell.",
  },
  {
    name: "Answer Visibility",
    subtitle: "Discovery",
    pain: "Your brand is absent from answer-engine responses and AI summaries.",
    solution: "We improve the content, references, and surface-level signals that increase mention probability across LLM environments.",
  },
  {
    name: "Commercial Content Systems",
    subtitle: "Coverage",
    pain: "Your site does not cover enough buying scenarios with enough clarity.",
    solution: "We build scenario-led pages, comparison logic, and commercial support content that expands relevance without diluting focus.",
  },
  {
    name: "Journey Design",
    subtitle: "Conversion",
    pain: "High-intent users land on generic experiences that treat every session the same.",
    solution: "We reshape key flows, messaging, and offer logic so more of the right users move from interest to purchase.",
  },
  {
    name: "Decision Signals",
    subtitle: "Intelligence",
    pain: "You cannot see which demand types are most valuable or commercially likely to convert.",
    solution: "We connect visibility work to smarter measurement, commercial scoring, and prioritization logic.",
  },
  {
    name: "Lifecycle Reinforcement",
    subtitle: "Retention",
    pain: "Acquisition improves, but retention and repeat purchase stay structurally weak.",
    solution: "We connect post-click behavior, segmentation, and return-path automation into the broader growth model.",
  },
];

export default function ModulesSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const header = useScrollAnimation({ threshold: 0.2 });
  const grid = useStaggerAnimation(modules.length, { threshold: 0.1 });

  return (
    <section id="modules" className="bg-[#fbf8f3] py-16 lg:py-24 border-b border-[#d8d0c5]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="hairline-title text-[11px] font-semibold uppercase text-[#7a7369] mb-4">Capabilities</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end">
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-[#161616] leading-[0.98] max-w-2xl">
              The system is built from a small number of high-leverage modules.
            </h2>
            <p className="text-[#5f5a52] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              Instead of presenting eight shiny AI features, we define the few structural capabilities that actually change visibility,
              commercial clarity, and decision-making quality.
            </p>
          </div>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod, i) => (
            <div
              key={mod.name}
              className={`paper-panel rounded-[30px] p-6 cursor-pointer transition-all duration-500 ease-out ${grid.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a7369] font-semibold mb-2">{mod.subtitle}</p>
                  <h3 className="text-[#161616] text-2xl font-semibold leading-snug">{mod.name}</h3>
                </div>
                <span className="display-serif text-3xl text-[#b86e3c]">0{i + 1}</span>
              </div>

              <p className="text-[#5f5a52] leading-relaxed mb-4">
                <span className="text-[#161616] font-semibold">Constraint: </span>
                {mod.pain}
              </p>

              <div className={`overflow-hidden transition-all duration-300 ${expanded === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 border-t border-[#d8d0c5]">
                  <p className="text-[#5f5a52] leading-relaxed">
                    <span className="text-[#b86e3c] font-semibold">What we build: </span>
                    {mod.solution}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-[#161616] text-sm font-semibold">
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
