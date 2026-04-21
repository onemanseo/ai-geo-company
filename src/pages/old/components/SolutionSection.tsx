import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function SolutionSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const layers = useStaggerAnimation(4, { threshold: 0.1 });
  const callout = useScrollAnimation({ threshold: 0.3 });

  const layerData = [
    {
      icon: "ri-database-2-line",
      name: "Data Layer",
      what: "Schema, knowledge graph, structured data",
      outcome: "AI understands your catalog",
      impact: "High",
      impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
      desc: "The foundation everything else is built on. Without structured data, AI systems can't read, index, or recommend your products.",
    },
    {
      icon: "ri-rocket-line",
      name: "AI Traffic",
      what: "GEO, AI content, LLM mentions",
      outcome: "New sources of demand",
      impact: "High",
      impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
      desc: "Get your brand cited in ChatGPT, Perplexity, and Gemini answers. Capture demand before it reaches Google.",
    },
    {
      icon: "ri-line-chart-line",
      name: "AI Conversion",
      what: "Personalization, dynamic offers, AI CRO",
      outcome: "Higher CR and AOV",
      impact: "High",
      impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
      desc: "Every visitor sees a different version of your site — optimized for their segment, intent, and purchase probability.",
    },
    {
      icon: "ri-bar-chart-box-line",
      name: "AI Intelligence",
      what: "Lead scoring, LTV prediction, analytics",
      outcome: "Lower CAC, higher ROI",
      impact: "High",
      impactColor: "bg-[#00E5CC]/15 text-[#00E5CC] border-[#00E5CC]/30",
      desc: "Predict who will buy, when, and how much. Reallocate budget in real time based on AI-scored intent signals.",
    },
  ];

  return (
    <section id="solution" className="bg-[#0D0D0F] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">The System</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            4 Connected Layers
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">
            A connected system, not a service. Each layer reinforces the next. Remove one — the whole system weakens.
          </p>
        </div>

        {/* Layers grid */}
        <div ref={layers.ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {layerData.map((layer, i) => (
            <div
              key={layer.name}
              className={`group relative rounded-2xl border border-white/8 bg-[#111113] p-6 hover:border-[#00E5CC]/30 transition-all duration-500 ease-out cursor-default ${
                layers.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#00E5CC]/10 border border-[#00E5CC]/20">
                    <i className={`${layer.icon} text-[#00E5CC] text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] text-xs font-semibold tracking-widest uppercase mb-0.5">
                      Layer {i + 1}
                    </p>
                    <h3 className="text-white text-lg font-bold">{layer.name}</h3>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${layer.impactColor} whitespace-nowrap`}
                >
                  {layer.impact} Impact
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-settings-3-line text-[#8A8A8A] text-sm"></i>
                  </div>
                  <p className="text-[#8A8A8A] text-sm">{layer.what}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-arrow-right-circle-line text-[#00E5CC] text-sm"></i>
                  </div>
                  <p className="text-white text-sm font-semibold">{layer.outcome}</p>
                </div>
                <p className="text-[#8A8A8A] text-sm leading-relaxed pl-8">{layer.desc}</p>
              </div>

              {/* Connector dot */}
              {i < layerData.length - 1 && (
                <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-[#00E5CC]/20 border border-[#00E5CC]/40 z-10">
                  <i className="ri-arrow-right-s-line text-[#00E5CC] text-xs"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          ref={callout.ref}
          className={`rounded-2xl border border-white/8 bg-[#111113] p-6 md:p-8 text-center transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#8A8A8A] text-sm uppercase tracking-widest font-semibold mb-3">The core principle</p>
          <p className="text-white text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
            Every layer shares a unified data structure. User behavior retrains the models.{" "}
            <span className="text-[#00E5CC]">The system gets smarter over time.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
