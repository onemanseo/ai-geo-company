interface HeroSectionProps {
  onStrategyClick: () => void;
  onWhitepaperClick: () => void;
}

export default function HeroSection({ onStrategyClick, onWhitepaperClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden editorial-shell border-b border-[#d8d0c5] pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="hairline-title text-[11px] font-semibold uppercase text-[#7a7369] mb-6">AI visibility systems for modern commerce</p>

            <h1 className="display-serif text-[#161616] text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.94] font-semibold max-w-4xl">
              Search is becoming an answer interface. Your brand needs a more intelligent presence.
            </h1>

            <p className="mt-8 text-[#5f5a52] text-lg lg:text-xl leading-relaxed max-w-2xl">
              We help eCommerce brands adapt to the shift from ranking pages to machine-readable visibility, answer-engine mentions,
              and conversion systems that perform across Google, ChatGPT, Perplexity, and on-site experiences.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStrategyClick}
                className="px-7 py-4 rounded-full bg-[#161616] text-[#f5f1e8] text-base font-semibold hover:bg-[#2a2a2a] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Book Strategy Call
              </button>
              <button
                onClick={onWhitepaperClick}
                className="px-7 py-4 rounded-full border border-[#161616] text-[#161616] text-base font-semibold hover:bg-[#161616] hover:text-[#f5f1e8] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Download Whitepaper
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                ["Visibility", "Entity-ready architecture, structured signals, and answer-engine discoverability."],
                ["Conversion", "More precise journeys for segments, intent states, and high-value sessions."],
                ["Intelligence", "A system view of search, mentions, content, and commercial feedback loops."],
              ].map(([title, text]) => (
                <div key={title} className="paper-panel rounded-[28px] p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a7369] font-semibold mb-2">{title}</p>
                  <p className="text-sm leading-relaxed text-[#5f5a52]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="paper-panel rounded-[36px] p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-[#d8d0c5] pb-4 mb-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a7369] font-semibold">System map</p>
                  <p className="display-serif text-2xl text-[#161616]">How the model compounds</p>
                </div>
                <div className="w-14 h-14 rounded-full border border-[#161616] flex items-center justify-center text-[#b86e3c]">
                  <i className="ri-focus-2-line text-2xl"></i>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  ["01", "Entity Layer", "Structured data, brand clarity, knowledge graph alignment"],
                  ["02", "Demand Layer", "GEO, AI answers, citation surfaces, search presence"],
                  ["03", "Content Layer", "Scenario coverage, commercial pages, comparison logic"],
                  ["04", "Conversion Layer", "Personalized messaging, CRO, merchandising decisions"],
                ].map(([n, title, text], idx, arr) => (
                  <div key={title} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#161616] text-[#f5f1e8] flex items-center justify-center text-xs font-bold">
                      {n}
                    </div>
                    <p className="text-[#161616] font-semibold text-lg">{title}</p>
                    <p className="text-[#5f5a52] leading-relaxed mt-1">{text}</p>
                    {idx < arr.length - 1 && <div className="absolute left-5 top-11 w-px h-8 bg-[#d8d0c5]" />}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] bg-[#161616] text-[#f5f1e8] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#cfc7bc] font-semibold mb-2">Core thesis</p>
                <p className="display-serif text-3xl leading-tight">
                  The brands that win next are not louder. They are better structured for machines and clearer for humans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
