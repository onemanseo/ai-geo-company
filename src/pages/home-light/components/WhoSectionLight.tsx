import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function WhoSectionLight() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const cards = useStaggerAnimation(3, { threshold: 0.1 });
  const callout = useScrollAnimation({ threshold: 0.3 });

  const segments = [
    {
      icon: "ri-store-2-line",
      label: "Classic eCommerce",
      title: "Large catalog, heavy competition",
      desc: "You have thousands of SKUs and fight for every SERP position. Traditional SEO is hitting diminishing returns.",
      wins: ["AI Content Engine", "AI CRO", "AI Retention"],
      metrics: [
        { label: "Avg catalog size", value: "10K+ SKUs" },
        { label: "Typical CR lift", value: "+80–140%" },
      ],
      img: "https://readdy.ai/api/search-image?query=modern%20ecommerce%20store%20large%20product%20catalog%20fashion%20electronics%20home%20goods%20clean%20minimal%20product%20grid%20white%20background%20professional%20online%20retail%20store%20desktop%20view&width=480&height=280&seq=who-light-01&orientation=landscape",
    },
    {
      icon: "ri-layout-grid-line",
      label: "Marketplace / Aggregator",
      title: "Many SKUs, long cycle, diverse segments",
      desc: "You aggregate supply and need to match intent across thousands of categories and buyer personas.",
      wins: ["AI Data Layer", "AI Personalization", "AI Lead Scoring"],
      metrics: [
        { label: "Segment coverage", value: "Full funnel" },
        { label: "CAC reduction", value: "–35–55%" },
      ],
      img: "https://readdy.ai/api/search-image?query=marketplace%20aggregator%20platform%20multiple%20product%20categories%20diverse%20listings%20comparison%20shopping%20website%20clean%20modern%20UI%20desktop%20interface%20professional%20tech%20platform&width=480&height=280&seq=who-light-02&orientation=landscape",
    },
    {
      icon: "ri-vip-diamond-line",
      label: "High-Consideration Purchase",
      title: "Auto, real estate, B2B, premium",
      desc: "Long decision cycles, high AOV, and uncertainty-driven drop-off. Buyers research extensively before committing.",
      wins: ["AISO", "AI Customer Journey", "AI Content Engine"],
      metrics: [
        { label: "Decision cycle", value: "1–12 weeks" },
        { label: "AOV threshold", value: "$100+" },
      ],
      img: "https://readdy.ai/api/search-image?query=luxury%20premium%20product%20high%20consideration%20purchase%20automotive%20real%20estate%20B2B%20professional%20service%20elegant%20minimal%20website%20design%20sophisticated%20brand%20identity&width=480&height=280&seq=who-light-03&orientation=landscape",
    },
  ];

  return (
    <section id="who-light" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 text-xs font-semibold tracking-widest uppercase mb-4">Ideal Fit</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who It&apos;s For</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            The system is designed for businesses where AI-driven growth creates compounding returns.
          </p>
        </div>

        {/* Cards */}
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {segments.map((seg, i) => (
            <div
              key={seg.label}
              className={`rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-teal-300 transition-all duration-500 ease-out group ${
                cards.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={seg.img}
                  alt={seg.label}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${seg.icon} text-teal-500 text-sm`}></i>
                  </div>
                  <span className="text-gray-700 text-xs font-semibold">{seg.label}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-gray-900 text-lg font-bold mb-2 leading-snug">{seg.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{seg.desc}</p>

                {/* Wins */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">Key Modules</p>
                  <div className="flex flex-wrap gap-2">
                    {seg.wins.map((w) => (
                      <span
                        key={w}
                        className="px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-medium whitespace-nowrap"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {seg.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                      <p className="text-gray-900 text-sm font-bold mb-0.5">{m.value}</p>
                      <p className="text-gray-400 text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          ref={callout.ref}
          className={`rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
            <i className="ri-lightbulb-flash-line text-amber-500 text-lg"></i>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">
              If AOV &gt; $100 and decision cycle &gt; 1 visit — the system pays off fastest.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              The higher the consideration, the more AI-driven guidance influences the final decision. That&apos;s where
              our system creates the biggest delta vs. traditional SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
