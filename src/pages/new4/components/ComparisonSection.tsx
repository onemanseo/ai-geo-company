import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function ComparisonSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const rows = useStaggerAnimation(5, { threshold: 0.1 });
  const callout = useScrollAnimation({ threshold: 0.2 });

  const tableRows = [
    {
      param: "Business Model",
      classic: "Hours / retainer / rankings",
      ai: "Growth Units (+X% AI visibility, +X% CR, +X% AI revenue)",
    },
    {
      param: "Channels",
      classic: "Google SERP only",
      ai: "Google + ChatGPT + Perplexity + Gemini + AI Overviews",
    },
    {
      param: "Product",
      classic: "Content and links",
      ai: "Content, models, UX, data infrastructure",
    },
    {
      param: "Primary Metric",
      classic: "Traffic volume",
      ai: "Revenue from AI channels",
    },
    {
      param: "Time Horizon",
      classic: "Quarter-by-quarter",
      ai: "12–24 months of systemic growth",
    },
  ];

  const realTalk = [
    {
      bold: "SEO isn't dead",
      text: "— it's the foundation the AI layer is built on. We don't replace SEO, we extend it.",
    },
    {
      bold: "AI traffic is still volatile",
      text: "— LLM algorithms shift, so a hybrid model is required. We build for resilience.",
    },
    {
      bold: "No magic button",
      text: "— first results in 2–3 months, systemic effect after 6+. This is a growth infrastructure investment.",
    },
  ];

  return (
    <section id="comparison" className="py-16 lg:py-24 border-b border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-10 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">The Difference</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94]">
              vs. Classic<br />SEO Agency
            </h2>
            <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              This isn&apos;t a better SEO agency. It&apos;s a different category entirely.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-[30px] border border-[#171717]/10 overflow-hidden shadow-[0_18px_50px_rgba(23,23,23,0.05)] mb-6">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-[#171717]">
            <div className="p-5 border-r border-white/10">
              <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase">Parameter</p>
            </div>
            <div className="p-5 border-r border-white/10">
              <div className="flex items-center gap-2">
                <i className="ri-close-circle-line text-white/40 text-base"></i>
                <p className="text-white/60 text-sm font-bold">Classic Vendor</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#59aaff] text-base"></i>
                <p className="text-[#59aaff] text-sm font-black">AI Growth System</p>
              </div>
            </div>
          </div>

          {/* Data rows */}
          <div ref={rows.ref}>
            {tableRows.map((row, i) => (
              <div
                key={row.param}
                className={`grid grid-cols-3 border-b border-[#171717]/8 last:border-0 transition-all duration-500 ease-out ${
                  i % 2 === 0 ? "bg-white/70" : "bg-white/40"
                } ${rows.visibleItems[i] ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-5 border-r border-[#171717]/8 flex items-center">
                  <p className="text-[#171717] text-sm font-black tracking-[-0.02em]">{row.param}</p>
                </div>
                <div className="p-5 border-r border-[#171717]/8 flex items-center">
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{row.classic}</p>
                </div>
                <div className="p-5 flex items-center">
                  <p className="text-[#171717] text-sm font-bold leading-relaxed">{row.ai}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Talk callout */}
        <div
          ref={callout.ref}
          className={`rounded-[28px] border border-[#171717]/10 bg-[#fff0db] p-6 md:p-8 transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-[12px] bg-[#ff7e4e] flex items-center justify-center shadow-[3px_3px_0_rgba(23,23,23,0.1)]">
              <i className="ri-information-line text-white text-sm"></i>
            </div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold">Real Talk</p>
          </div>
          <div className="space-y-4">
            {realTalk.map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <i className="ri-arrow-right-s-line text-[#ff7e4e] text-lg mt-0.5 flex-shrink-0"></i>
                <p className="text-[#4f4f4f] text-base leading-relaxed">
                  <strong className="text-[#171717]">{item.bold}</strong>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
