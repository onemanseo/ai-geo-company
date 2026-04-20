import { useState } from "react";

interface HeroSectionProps {
  onStrategyClick: () => void;
  onWhitepaperClick: () => void;
}

export default function HeroSection({ onStrategyClick, onWhitepaperClick }: HeroSectionProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] overflow-hidden flex items-center pt-20">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5CC]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0066FF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#00E5CC]/30 bg-[#00E5CC]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5CC] animate-pulse" />
              <span className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase">AI-First Growth</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              We turn eCommerce into an{" "}
              <span className="italic text-[#00E5CC]" style={{ textShadow: "0 0 40px rgba(0,229,204,0.4)" }}>
                AI-driven
              </span>{" "}
              growth system
            </h1>

            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10 max-w-xl">
              We don&apos;t push rankings. We manage demand, traffic, and conversion through AI. SEO becomes the
              foundation — growth comes from ChatGPT, Perplexity, Gemini, AI Overviews, and on-site personalization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStrategyClick}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#00E5CC] text-[#0A0A0B] text-base font-bold hover:bg-[#00F5DA] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get a strategy for your business
                <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={onWhitepaperClick}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer whitespace-nowrap"
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
                <div key={b.label} className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${b.icon} text-[#00E5CC]`}></i>
                  </div>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — split screen visual */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              style={{ minHeight: 420 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Background: static category page */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${hovered ? "opacity-20" : "opacity-40"}`}
                style={{
                  backgroundImage:
                    "url(https://readdy.ai/api/search-image?query=ecommerce%20category%20page%20with%20product%20grid%20filters%20sidebar%20grey%20minimal%20desktop%20UI%20screenshot%20flat%20design%20muted%20colors%20no%20personalization%20static%20layout%20traditional%20online%20store&width=600&height=420&seq=hero-bg-01&orientation=landscape)",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  filter: "grayscale(80%)",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B]/70 via-[#0A0A0B]/40 to-[#0A0A0B]/80" />

              {/* Left panel label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-white/50 text-xs font-medium tracking-wide">Traditional Category Page</span>
              </div>

              {/* Arrow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 rounded-full bg-[#0A0A0B]/80 border border-[#00E5CC]/40 backdrop-blur-sm">
                    <span className="text-[#00E5CC] text-xs font-bold tracking-wide">This is your next interface.</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-down-line text-[#00E5CC] text-xl animate-bounce"></i>
                  </div>
                </div>
              </div>

              {/* AI Interface card */}
              <div
                className={`absolute bottom-4 right-4 left-4 md:left-auto md:w-72 rounded-xl p-4 transition-all duration-500 ${
                  hovered ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
                }`}
                style={{
                  background: "rgba(10,10,11,0.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0,229,204,0.3)",
                  boxShadow: "0 0 40px rgba(0,229,204,0.15)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00E5CC]/20">
                    <i className="ri-robot-line text-[#00E5CC] text-xs"></i>
                  </div>
                  <span className="text-white text-xs font-semibold">AI Personalization Engine</span>
                  <span className="ml-auto text-[10px] text-[#00E5CC] font-bold bg-[#00E5CC]/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>

                {[
                  { name: "Premium Running Shoes", score: 97, tag: "High LTV" },
                  { name: "Trail Jacket Pro", score: 91, tag: "Repeat buyer" },
                  { name: "GPS Watch Ultra", score: 88, tag: "Upsell" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                    <div className="w-8 h-8 rounded-lg bg-[#00E5CC]/10 flex items-center justify-center flex-shrink-0">
                      <i className="ri-shopping-bag-line text-[#00E5CC] text-sm"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium truncate">{item.name}</p>
                      <p className="text-[#8A8A8A] text-[10px]">{item.tag}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-[#00E5CC] text-xs font-bold">{item.score}%</p>
                      <p className="text-[#8A8A8A] text-[10px]">match</p>
                    </div>
                  </div>
                ))}

                <div className="mt-3 flex gap-2">
                  <div className="flex-1 rounded-lg bg-[#00E5CC]/10 px-3 py-2 text-center">
                    <p className="text-[#00E5CC] text-sm font-bold">+127%</p>
                    <p className="text-[#8A8A8A] text-[10px]">Conv. Rate</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-center">
                    <p className="text-white text-sm font-bold">$284</p>
                    <p className="text-[#8A8A8A] text-[10px]">Avg AOV</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-center">
                    <p className="text-white text-sm font-bold">94</p>
                    <p className="text-[#8A8A8A] text-[10px]">AI Score</p>
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
