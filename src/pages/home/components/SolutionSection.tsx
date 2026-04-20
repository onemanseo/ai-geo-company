import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function SolutionSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const layers = useStaggerAnimation(4, { threshold: 0.1 });

  const layerData = [
    {
      name: 'Entity Layer',
      what: 'Schema, structured product knowledge, machine-readable brand context',
      outcome: 'AI can interpret what you sell and why you matter',
      desc: 'The foundation. Without clean entity signals, AI systems infer weakly, cite weakly, and rank your relevance below stronger competitors.',
    },
    {
      name: 'Demand Layer',
      what: 'AISO, answer-engine visibility, mention strategy, search surface control',
      outcome: 'Your brand appears before the click, not after it',
      desc: 'This layer shifts visibility from classic rankings into AI-mediated discovery environments where decisions increasingly begin.',
    },
    {
      name: 'Content Layer',
      what: 'Commercial scenarios, comparison logic, intent-specific coverage, category depth',
      outcome: 'AI and users both find better context for choosing you',
      desc: 'Coverage is no longer about publishing more. It is about structuring the right commercial and informational surfaces around demand.',
    },
    {
      name: 'Conversion Layer',
      what: 'Journey design, offer logic, CRO, decision architecture, high-intent personalization',
      outcome: 'Traffic quality compounds into stronger commercial outcomes',
      desc: 'The site becomes the place where machine-visible demand translates into revenue, not just another static catalog with generic paths.',
    },
  ];

  return (
    <section id="solution" className="bg-[#f5f1e8] py-16 lg:py-24 border-b border-[#d8d0c5]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="hairline-title text-[11px] font-semibold uppercase text-[#7a7369] mb-4">The system</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end">
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-[#161616] leading-[0.98] max-w-2xl">
              Four connected layers. One commercial system.
            </h2>
            <p className="text-[#5f5a52] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              This is not a bundle of disconnected services. It is a structured model where entity clarity, answer-engine presence,
              scenario coverage, and conversion design reinforce one another over time.
            </p>
          </div>
        </div>

        <div ref={layers.ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {layerData.map((layer, i) => (
            <div
              key={layer.name}
              className={`paper-panel rounded-[30px] p-7 transition-all duration-500 ease-out ${layers.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="display-serif text-4xl text-[#b86e3c]">0{i + 1}</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#7a7369] font-semibold">Connected layer</span>
              </div>
              <h3 className="text-[#161616] text-2xl font-semibold mb-3">{layer.name}</h3>
              <p className="text-[#5f5a52] leading-relaxed mb-4">{layer.what}</p>
              <p className="text-[#161616] font-semibold mb-3">{layer.outcome}</p>
              <p className="text-[#5f5a52] leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[34px] bg-[#161616] text-[#f5f1e8] p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#cfc7bc] font-semibold mb-3">Operating principle</p>
          <p className="display-serif text-3xl md:text-4xl leading-tight max-w-4xl">
            The system gets stronger when each layer shares the same commercial intelligence instead of operating as isolated tactics.
          </p>
        </div>
      </div>
    </section>
  );
}
