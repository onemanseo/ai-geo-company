export default function ComparisonSectionLight() {
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
    <section id="comparison-light" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-500 text-xs font-semibold tracking-widest uppercase mb-4">The Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            vs. Classic SEO Agency
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            This isn&apos;t a better SEO agency. It&apos;s a different category entirely.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-5 border-r border-gray-200">
              <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Parameter</p>
            </div>
            <div className="p-5 border-r border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-close-circle-line text-gray-400 text-base"></i>
                </div>
                <p className="text-gray-500 text-sm font-semibold">Classic Vendor</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-teal-500 text-base"></i>
                </div>
                <p className="text-teal-600 text-sm font-semibold">AI Growth System</p>
              </div>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.param}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-0 transition-colors hover:bg-teal-50/30 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="p-5 border-r border-gray-100 flex items-center">
                <p className="text-gray-800 text-sm font-semibold">{row.param}</p>
              </div>
              <div className="p-5 border-r border-gray-100 flex items-center">
                <p className="text-gray-400 text-sm leading-relaxed">{row.classic}</p>
              </div>
              <div className="p-5 flex items-center">
                <p className={`text-sm leading-relaxed font-medium ${row.aiHighlight ? "text-gray-800" : "text-gray-400"}`}>
                  {row.ai}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="mt-12 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6 md:p-8">
          <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-5">Real Talk</p>
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
                  <i className="ri-information-line text-amber-500 text-sm"></i>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  <strong className="text-gray-900">{item.bold}</strong>
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
