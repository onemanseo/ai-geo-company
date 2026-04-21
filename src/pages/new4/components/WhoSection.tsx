import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function WhoSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const cards = useStaggerAnimation(3, { threshold: 0.1 });
  const callout = useScrollAnimation({ threshold: 0.3 });

  const segments = [
    {
      icon: "ri-store-2-line",
      iconBg: "bg-[#dff3ff]",
      iconColor: "#59aaff",
      cardBg: "bg-white/75",
      rotate: "",
      label: "Classic eCommerce",
      title: "Large catalog, heavy competition",
      desc: "You have thousands of SKUs and fight for every SERP position. Traditional SEO is hitting diminishing returns.",
      wins: ["AI Content Engine", "AI CRO", "AI Retention"],
      winBg: "bg-[#171717]",
      winText: "text-[#fff8ef]",
      metrics: [
        { label: "Avg catalog size", value: "10K+ SKUs" },
        { label: "Typical CR lift", value: "+80–140%" },
      ],
    },
    {
      icon: "ri-layout-grid-line",
      iconBg: "bg-[#171717]",
      iconColor: "#fff8ef",
      cardBg: "bg-[#dff3ff]",
      rotate: "rotate-[-1deg]",
      label: "Marketplace / Aggregator",
      title: "Many SKUs, long cycle, diverse segments",
      desc: "You aggregate supply and need to match intent across thousands of categories and buyer personas.",
      wins: ["AI Data Layer", "AI Personalization", "AI Lead Scoring"],
      winBg: "bg-white/70",
      winText: "text-[#171717]",
      metrics: [
        { label: "Segment coverage", value: "Full funnel" },
        { label: "CAC reduction", value: "–35–55%" },
      ],
    },
    {
      icon: "ri-vip-diamond-line",
      iconBg: "bg-[#fff0db]",
      iconColor: "#ff7e4e",
      cardBg: "bg-[#fff0db]",
      rotate: "rotate-[1deg]",
      label: "High-Consideration Purchase",
      title: "Auto, real estate, B2B, premium",
      desc: "Long decision cycles, high AOV, and uncertainty-driven drop-off. Buyers research extensively before committing.",
      wins: ["AISO", "AI Customer Journey", "AI Content Engine"],
      winBg: "bg-[#171717]",
      winText: "text-[#fff8ef]",
      metrics: [
        { label: "Decision cycle", value: "1–12 weeks" },
        { label: "AOV threshold", value: "$100+" },
      ],
    },
  ];

  return (
    <section id="who" className="py-16 lg:py-24 border-b border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-10 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">Ideal Fit</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94]">
              Who It&apos;s For
            </h2>
            <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              The system is designed for businesses where AI-driven growth creates compounding returns.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {segments.map((seg, i) => (
            <div
              key={seg.label}
              className={`rounded-[30px] border border-[#171717]/10 p-6 ${seg.cardBg} ${seg.rotate} shadow-[0_18px_50px_rgba(23,23,23,0.05)] transition-all duration-500 ease-out ${
                cards.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-[18px] ${seg.iconBg} flex items-center justify-center mb-5 shadow-[4px_4px_0_rgba(23,23,23,0.08)]`}>
                <i className={`${seg.icon} text-2xl`} style={{ color: seg.iconColor }}></i>
              </div>

              {/* Label + Title */}
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b] font-bold mb-2">{seg.label}</p>
              <h3 className="text-xl font-black tracking-[-0.04em] leading-snug mb-3 text-[#171717]">{seg.title}</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed mb-5">{seg.desc}</p>

              {/* Modules */}
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6b6b] font-bold mb-2">Key Modules</p>
                <div className="flex flex-wrap gap-2">
                  {seg.wins.map((w) => (
                    <span
                      key={w}
                      className={`px-3 py-1 rounded-full text-xs font-bold ${seg.winBg} ${seg.winText} whitespace-nowrap`}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {seg.metrics.map((m) => (
                  <div key={m.label} className="rounded-[16px] bg-white/60 border border-[#171717]/10 p-3">
                    <p className="text-[#171717] text-sm font-black tracking-[-0.02em] mb-0.5">{m.value}</p>
                    <p className="text-[#6b6b6b] text-[11px] leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          ref={callout.ref}
          className={`rounded-[28px] bg-[#171717] text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-[0_20px_60px_rgba(23,23,23,0.15)] transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-[16px] bg-[#ffd14f] flex-shrink-0 shadow-[4px_4px_0_rgba(255,126,78,0.25)]">
            <i className="ri-lightbulb-flash-line text-[#171717] text-xl"></i>
          </div>
          <div>
            <p className="font-black text-lg tracking-[-0.03em] mb-1">
              If AOV &gt; $100 and decision cycle &gt; 1 visit — the system pays off fastest.
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              The higher the consideration, the more AI-driven guidance influences the final decision.
              That&apos;s where our system creates the biggest delta vs. traditional SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
