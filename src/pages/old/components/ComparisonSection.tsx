export default function ComparisonSection() {
  const rows = [
    {
      param: "Business Model",
      classic: "Hours / retainer / rankings",
      ai: "Growth Units (+X% AI visibility, +X% CR, +X% AI revenue)",
      aiHighlight: true,
    },
    {
      param: "Channels",
      classic: "Google SERP only",
      ai: "Google + ChatGPT + Perplexity + Gemini + AI Overviews",
      aiHighlight: true,
    },
    {
      param: "Product",
      classic: "Content and links",
      ai: "Content, models, UX, data infrastructure",
      aiHighlight: true,
    },
    {
      param: "Primary Metric",
      classic: "Traffic volume",
      ai: "Revenue from AI channels",
      aiHighlight: true,
    },
    {
      param: "Time Horizon",
      classic: "Quarter-by-quarter",
      ai: "12–24 months of systemic growth",
      aiHighlight: true,
    },
  ];

  return (
    <section id="comparison" className="bg-[#0D0D0F] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">The Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            vs. Classic SEO Agency
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">
            This isn&apos;t a better SEO agency. It&apos;s a different category entirely.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-white/8 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-[#111113] border-b border-white/8">
            <div className="p-5 border-r border-white/8">
              <p className="text-[#8A8A8A] text-xs font-semibold tracking-widest uppercase">Parameter</p>
            </div>
            <div className="p-5 border-r border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-close-circle-line text-[#8A8A8A] text-base"></i>
                </div>
                <p className="text-[#8A8A8A] text-sm font-semibold">Classic Vendor</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-[#00E5CC] text-base"></i>
                </div>
                <p className="text-[#00E5CC] text-sm font-semibold">Flowvory</p>
              </div>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.param}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 transition-colors hover:bg-white/2 ${
                i % 2 === 0 ? "bg-transparent" : "bg-[#0A0A0B]/40"
              }`}
            >
              <div className="p-5 border-r border-white/5 flex items-center">
                <p className="text-white text-sm font-semibold">{row.param}</p>
              </div>
              <div className="p-5 border-r border-white/5 flex items-center">
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{row.classic}</p>
              </div>
              <div className="p-5 flex items-center">
                <p className={`text-sm leading-relaxed font-medium ${row.aiHighlight ? "text-white" : "text-[#8A8A8A]"}`}>
                  {row.ai}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="mt-12 rounded-2xl border-l-4 border-amber-400 bg-[#111113] p-6 md:p-8">
          <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">Real Talk</p>
          <div className="space-y-4">
            {[
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
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-information-line text-amber-400 text-sm"></i>
                </div>
                <p className="text-[#8A8A8A] text-base leading-relaxed">
                  <strong className="text-white">{item.bold}</strong>
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
