import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function HowItWorksSectionLight() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const steps = useStaggerAnimation(5, { threshold: 0.1 });
  const foundation = useScrollAnimation({ threshold: 0.2 });
  const kpis = useStaggerAnimation(4, { threshold: 0.2 });

  const stepData = [
    {
      id: "01",
      title: "AI Content + AISO",
      desc: "Brand appears in LLM answers and AI Overviews. New demand is captured before it reaches Google.",
      icon: "ri-article-line",
    },
    {
      id: "02",
      title: "AI Traffic",
      desc: "Qualified visitors arrive from ChatGPT, Perplexity, Gemini, and traditional search — all tracked.",
      icon: "ri-flow-chart",
    },
    {
      id: "03",
      title: "AI Personalization",
      desc: "Each visitor sees a version of the site optimized for their segment, intent, and predicted LTV.",
      icon: "ri-user-settings-line",
    },
    {
      id: "04",
      title: "Conversion",
      desc: "Dynamic offers, AI-optimized copy, and real-time A/B testing maximize CR and AOV.",
      icon: "ri-shopping-cart-2-line",
    },
    {
      id: "05",
      title: "AI Retention",
      desc: "Behavioral triggers, churn prediction, and personalized lifecycle emails bring customers back.",
      icon: "ri-refresh-line",
    },
  ];

  const kpiData = [
    { label: "Conversion Rate", icon: "ri-bar-chart-2-line", value: "+127%" },
    { label: "AOV", icon: "ri-money-dollar-circle-line", value: "+43%" },
    { label: "AI Traffic Share", icon: "ri-robot-line", value: "38%" },
    { label: "Revenue from AI", icon: "ri-funds-line", value: "+290%" },
  ];

  return (
    <section id="how-it-works-light" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 text-xs font-semibold tracking-widest uppercase mb-4">The Flow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every stage feeds the next. The Data Layer is the foundation — all modules share a unified data structure.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="relative">
          {/* Desktop flow */}
          <div ref={steps.ref} className="hidden lg:flex items-stretch gap-0 mb-12">
            {stepData.map((step, i) => (
              <div
                key={step.id}
                className={`flex items-center flex-1 transition-all duration-500 ease-out ${
                  steps.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 hover:border-teal-300 transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-teal-50 border border-teal-200">
                      <i className={`${step.icon} text-teal-500 text-base`}></i>
                    </div>
                    <span className="text-gray-400 text-xs font-bold tracking-widest">{step.id}</span>
                  </div>
                  <h3 className="text-gray-900 text-sm font-bold mb-2 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
                {i < stepData.length - 1 && (
                  <div className="flex-shrink-0 w-8 flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-teal-400 text-lg"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden flex flex-col gap-4 mb-12">
            {stepData.map((step, i) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-teal-50 border border-teal-200 flex-shrink-0">
                    <i className={`${step.icon} text-teal-500 text-base`}></i>
                  </div>
                  {i < stepData.length - 1 && (
                    <div className="w-px h-8 bg-teal-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-gray-400 text-xs font-bold tracking-widest mb-1">{step.id}</p>
                  <h3 className="text-gray-900 text-base font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Data Layer foundation */}
          <div
            ref={foundation.ref}
            className={`rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8 transition-all duration-700 ease-out ${
              foundation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-100 border border-teal-300">
                  <i className="ri-database-2-line text-teal-600 text-2xl"></i>
                </div>
                <div>
                  <p className="text-teal-500 text-xs font-semibold tracking-widest uppercase mb-1">Foundation</p>
                  <h3 className="text-gray-900 text-xl font-bold">AI Data Layer</h3>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-base leading-relaxed">
                  The Data Layer sits beneath every module. Schema markup, knowledge graphs, and structured data ensure
                  all AI systems — from Google to ChatGPT — can read, understand, and cite your catalog.{" "}
                  <strong className="text-gray-900">User behavior continuously retrains the models.</strong>
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-2">
                {["AI Content", "AI Traffic", "AI CRO", "AI Retention"].map((m) => (
                  <div key={m} className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-up-line text-teal-500 text-xs"></i>
                    </div>
                    <span className="text-gray-500 text-xs whitespace-nowrap">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* KPIs strip */}
        <div ref={kpis.ref} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpiData.map((kpi, i) => (
            <div
              key={kpi.label}
              className={`rounded-xl border border-gray-200 bg-white p-4 text-center transition-all duration-500 ease-out ${
                kpis.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                <i className={`${kpi.icon} text-teal-500 text-lg`}></i>
              </div>
              <p className="text-gray-900 text-2xl font-bold mb-1">{kpi.value}</p>
              <p className="text-gray-400 text-xs">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
