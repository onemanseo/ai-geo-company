import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function SolutionSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const layers = useStaggerAnimation(4, { threshold: 0.1 });

  const layerData = [
    ['Entity Intelligence', 'Schema, product data, knowledge graph clarity', 'Give machines a clean commercial understanding of what you sell.'],
    ['Answer Visibility', 'AISO, citation strategy, mention surfaces', 'Increase the chance your brand is retrieved in AI-mediated discovery.'],
    ['Scenario Coverage', 'Comparison pages, use-case pages, decision-stage content', 'Cover the high-intent scenarios where users ask models what to buy.'],
    ['Adaptive Conversion', 'Segmentation, CRO, offer logic, signal loops', 'Convert mediated demand into measurable commercial outcomes.'],
  ];

  return (
    <section id="solution" className="bg-[#0b1020] text-white py-16 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">The system</p>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.96] max-w-2xl">
              Four layers that turn classic SEO into AI-native market presence.
            </h2>
            <p className="text-[#aab1cc] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              This is not an “AI package”. It is a structured operating model for how brands become easier to surface, easier to trust, and easier to choose in the next search environment.
            </p>
          </div>
        </div>

        <div ref={layers.ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {layerData.map(([title, details, outcome], i) => (
            <div key={title} className={`rounded-[30px] border border-white/10 bg-[#111833] p-7 transition-all duration-500 ease-out ${layers.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#7c8cff] text-4xl font-semibold tracking-[-0.04em]">0{i + 1}</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#7f89b5] font-semibold">System layer</span>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-[#aab1cc] leading-relaxed mb-4">{details}</p>
              <p className="text-[#dce1ff] font-medium leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[34px] bg-[#151a30] border border-[#7c8cff]/25 p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#98a4d6] font-semibold mb-3">Operating principle</p>
          <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.04em] max-w-4xl">
            The strongest brands in AI search will look less like content factories and more like structured intelligence systems.
          </p>
        </div>
      </div>
    </section>
  );
}
