interface HeroSectionProps {
  onStrategyClick: () => void;
  onWhitepaperClick: () => void;
}

export default function HeroSection({ onStrategyClick, onWhitepaperClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white border-b border-white/10 pt-28 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,140,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(0,229,204,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#98a4d6] mb-6">SEO + AI operating system</p>
            <h1 className="text-5xl md:text-6xl lg:text-[5.4rem] font-semibold leading-[0.94] max-w-4xl tracking-[-0.04em]">
              Build an AI-native search presence your competitors cannot fake.
            </h1>
            <p className="mt-8 text-[#aab1cc] text-lg lg:text-xl leading-relaxed max-w-2xl">
              We help eCommerce brands move beyond rankings into structured visibility, answer-engine mentions, machine-readable product intelligence,
              and conversion systems designed for how discovery now actually works.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button onClick={onStrategyClick} className="px-7 py-4 rounded-full bg-[#7c8cff] text-[#0b1020] text-base font-semibold hover:bg-[#94a0ff] transition-all duration-200 whitespace-nowrap">
                Book Strategy Call
              </button>
              <button onClick={onWhitepaperClick} className="px-7 py-4 rounded-full border border-white/20 text-white text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap">
                Download Whitepaper
              </button>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                ["Entity SEO", "Schema, graph alignment, product structure."],
                ["LLM Visibility", "Mentions, answers, retrieval surfaces."],
                ["AI Conversion", "Journey logic, intent scoring, offer control."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#98a4d6] font-semibold mb-2">{title}</p>
                  <p className="text-sm leading-relaxed text-[#c4cae3]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border border-white/10 bg-[rgba(16,22,42,0.88)] backdrop-blur-xl p-6 lg:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-2">Visibility stack</p>
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.03em]">From ranking signals to answer-engine dominance</h2>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#7c8cff]/15 border border-[#7c8cff]/30 flex items-center justify-center text-[#aab4ff]">
                  <i className="ri-radar-line text-2xl"></i>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Structured entities", "Machine-readable product and brand understanding"],
                  ["Citation surfaces", "LLM mention opportunities and answer-engine retrieval"],
                  ["Commercial pages", "Comparison, scenario, and decision-stage content"],
                  ["Adaptive conversion", "Segmentation, offer logic, and on-site intelligence"],
                ].map(([title, text], idx) => (
                  <div key={title} className="rounded-2xl border border-white/8 bg-white/5 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#7c8cff] text-[#0b1020] flex items-center justify-center text-xs font-bold">0{idx + 1}</div>
                      <p className="text-white text-lg font-semibold">{title}</p>
                    </div>
                    <p className="text-[#aab1cc] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#7c8cff] text-[#0b1020] p-5">
                <p className="text-xs uppercase tracking-[0.24em] font-semibold mb-2">Core claim</p>
                <p className="text-2xl lg:text-[1.9rem] font-semibold leading-tight tracking-[-0.03em]">
                  The next SEO winners will not just rank better. They will be easier for machines to trust, retrieve, and recommend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
