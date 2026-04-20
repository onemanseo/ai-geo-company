import { useState } from "react";

interface HeroSectionLightProps {
  onStrategyClick: () => void;
  onWhitepaperClick: () => void;
}

export default function HeroSectionLight({ onStrategyClick, onWhitepaperClick }: HeroSectionLightProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/40 overflow-hidden flex items-center pt-20">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-teal-400/40 bg-teal-50">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-600 text-xs font-semibold tracking-widest uppercase">AI-First Growth</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              We turn eCommerce into an{" "}
              <span className="italic text-teal-500" style={{ textShadow: "0 0 40px rgba(20,184,166,0.25)" }}>
                AI-driven
              </span>{" "}
              growth system
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              We don&apos;t push rankings. We manage demand, traffic, and conversion through AI. SEO becomes the
              foundation — growth comes from ChatGPT, Perplexity, Gemini, AI Overviews, and on-site personalization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStrategyClick}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-teal-500 text-white text-base font-bold hover:bg-teal-600 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get a strategy for your business
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={onWhitepaperClick}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-gray-300 text-gray-700 text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line"></i>
                Download AI Growth Whitepaper
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { icon: "ri-bar-chart-2-line", label: "+340% avg AI traffic" },
                { icon: "ri-shield-check-line", label: "LLM-ready architecture" },
                { icon: "ri-time-line", label: "Results in 2–3 months" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${b.icon} text-teal-500`}></i>
                  </div>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — split screen visual */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden border border-gray-200 cursor-pointer"
              style={{ minHeight: 420 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Background: static category page */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${hovered ? "opacity-15" : "opacity-30"}`}
                style={{
                  backgroundImage:
                    "url(https://readdy.ai/api/search-image?query=ecommerce%20category%20page%20with%20product%20grid%20filters%20sidebar%20grey%20minimal%20desktop%20UI%20screenshot%20flat%20design%20muted%20colors%20no%20personalization%20static%20layout%20traditional%20online%20store&width=600&height=420&seq=hero-bg-light-01&orientation=landscape)",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  filter: "grayscale(60%)",
                }}
              />

              {/* Light overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/70" />

              {/* Left panel label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200">
                <span className="text-gray-400 text-xs font-medium tracking-wide">Traditional Category Page</span>
              </div>

              {/* Arrow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-full bg-white/90 border border-teal-400/40 backdrop-blur-sm">
                    <span className="text-teal-600 text-xs font-bold tracking-wide">This is your next interface.</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-down-line text-teal-500 text-xl animate-bounce"></i>
                  </div>
                </div>
              </div>

              {/* AI Interface card */}
              <div
                className={`absolute bottom-4 right-4 left-4 md:left-auto md:w-72 rounded-xl p-4 transition-all duration-500 ${
                  hovered ? "opacity-100 translate-y-0" : "opacity-95 translate-y-1"
                }`}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(20,184,166,0.3)",
                  boxShadow: "0 8px 40px rgba(20,184,166,0.12), 0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-100">
                    <i className="ri-robot-line text-teal-600 text-xs"></i>
                  </div>
                  <span className="text-gray-800 text-xs font-semibold">AI Personalization Engine</span>
                  <span className="ml-auto text-[10px] text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">LIVE</span>
                </div>

                {[
                  { name: "Premium Running Shoes", score: 97, tag: "High LTV" },
                  { name: "Trail Jacket Pro", score: 91, tag: "Repeat buyer" },
                  { name: "GPS Watch Ultra", score: 88, tag: "Upsell" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <i className="ri-shopping-bag-line text-teal-500 text-sm"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-800 text-xs font-medium truncate">{item.name}</p>
                      <p className="text-gray-400 text-[10px]">{item.tag}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-teal-600 text-xs font-bold">{item.score}%</p>
                      <p className="text-gray-400 text-[10px]">match</p>
                    </div>
                  </div>
                ))}

                <div className="mt-3 flex gap-2">
                  <div className="flex-1 rounded-lg bg-teal-50 px-3 py-2 text-center">
                    <p className="text-teal-600 text-sm font-bold">+127%</p>
                    <p className="text-gray-400 text-[10px]">Conv. Rate</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-50 px-3 py-2 text-center">
                    <p className="text-gray-800 text-sm font-bold">$284</p>
                    <p className="text-gray-400 text-[10px]">Avg AOV</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-50 px-3 py-2 text-center">
                    <p className="text-gray-800 text-sm font-bold">94</p>
                    <p className="text-gray-400 text-[10px]">AI Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
