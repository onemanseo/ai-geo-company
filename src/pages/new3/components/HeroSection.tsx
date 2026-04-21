interface HeroSectionProps {
  onStrategyClick: () => void;
  onWhitepaperClick: () => void;
}

export default function HeroSection({ onStrategyClick, onWhitepaperClick }: HeroSectionProps) {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 border-b border-[#171717]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/70 border border-[#171717]/10 shadow-[0_10px_30px_rgba(23,23,23,0.05)]">
              <span className="w-2 h-2 rounded-full bg-[#ff7e4e]" />
              <span className="text-[#171717] text-xs font-bold tracking-[0.18em] uppercase">AI-first growth</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-[#171717] leading-[0.92] tracking-[-0.06em] max-w-4xl">
              We turn eCommerce into an <span className="text-[#59aaff]">AI-driven</span> growth system.
            </h1>

            <p className="mt-8 text-[#4f4f4f] text-lg lg:text-xl leading-relaxed max-w-2xl">
              We don&apos;t just push rankings. We manage demand, traffic, and conversion through AI, using SEO, GEO, AI CRO,
              LLM mentions, and on-site personalization to help brands win in the answer era.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button onClick={onStrategyClick} className="px-7 py-4 rounded-full bg-[#171717] text-[#fff8ef] text-base font-bold hover:translate-y-[-1px] transition-all duration-200 whitespace-nowrap shadow-[8px_8px_0_rgba(89,170,255,0.24)]">
                Get a strategy for your business
              </button>
              <button onClick={onWhitepaperClick} className="px-7 py-4 rounded-full bg-white/70 border border-[#171717]/10 text-[#171717] text-base font-bold hover:bg-white transition-all duration-200 whitespace-nowrap shadow-[8px_8px_0_rgba(255,126,78,0.14)]">
                Download AI Growth Whitepaper
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              {[
                "+340% avg AI traffic",
                "LLM-ready architecture",
                "Results in 2–3 months",
              ].map((item, idx) => (
                <div key={item} className={`px-4 py-2 rounded-full text-sm font-semibold border border-[#171717]/10 bg-white/65 ${idx === 1 ? 'rotate-[-2deg]' : idx === 2 ? 'rotate-[2deg]' : ''}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-[36px] bg-white/70 border border-[#171717]/10 p-6 lg:p-8 shadow-[0_30px_100px_rgba(23,23,23,0.08)] overflow-hidden">
              <div className="absolute -top-14 -right-10 w-40 h-40 rounded-full bg-[#59aaff]/25 blur-3xl" />
              <div className="absolute -bottom-14 -left-8 w-36 h-36 rounded-full bg-[#ff7e4e]/22 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#6b6b6b] font-bold mb-2">This is your next interface</p>
                    <h2 className="text-3xl font-black tracking-[-0.05em] text-[#171717]">Search is turning into a living recommendation engine.</h2>
                  </div>
                  <div className="w-14 h-14 rounded-[20px] bg-[#171717] text-[#fff8ef] flex items-center justify-center shadow-[6px_6px_0_rgba(255,205,82,0.32)]">
                    <i className="ri-robot-2-line text-2xl"></i>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Traditional Category Page", "Static filters, fixed rankings, generic sessions", "#59aaff"],
                    ["AI Personalization Engine", "Adaptive offers, segment-aware surfaces, dynamic intent routing", "#ff7e4e"],
                    ["Commercial Signal Layer", "LTV prediction, match scoring, recommendation logic", "#ffd14f"],
                  ].map(([title, text, color], idx) => (
                    <div key={title} className={`rounded-[26px] p-5 border border-[#171717]/10 ${idx === 1 ? 'bg-[#171717] text-white rotate-[-1.5deg]' : 'bg-white/75 text-[#171717]'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color as string }} />
                        <p className="font-bold uppercase tracking-[0.16em] text-xs">{title}</p>
                      </div>
                      <p className={`${idx === 1 ? 'text-white/80' : 'text-[#4f4f4f]'} leading-relaxed`}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
