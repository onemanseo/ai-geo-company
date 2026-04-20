import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const cards = useStaggerAnimation(3, { threshold: 0.1 });
  const callout = useScrollAnimation({ threshold: 0.3 });

  const phases = [
    {
      year: "2019",
      label: "Google Era",
      title: "Google → Category → Product → Cart",
      desc: "SEO owned the entire funnel. Rank on page 1, get traffic. Simple, predictable, scalable.",
      icon: "ri-google-line",
      opacity: "opacity-100",
      glow: "",
      img: "https://readdy.ai/api/search-image?query=classic%20Google%20search%20results%20page%202019%20desktop%20screenshot%20blue%20links%20organic%20results%20traditional%20SERP%20layout%20white%20background%20minimal%20clean%20search%20engine%20results&width=320&height=480&seq=prob-01&orientation=portrait",
    },
    {
      year: "2024",
      label: "AI Overview",
      title: "AI Overviews answer before the click",
      desc: "Google generates the answer directly. Users get what they need without visiting your site. CTR drops 30–60%.",
      icon: "ri-sparkling-line",
      opacity: "opacity-85",
      glow: "",
      img: "https://readdy.ai/api/search-image?query=Google%20AI%20Overview%20search%20results%202024%20AI%20generated%20answer%20box%20at%20top%20of%20SERP%20desktop%20screenshot%20modern%20search%20interface%20AI%20summary%20panel&width=320&height=480&seq=prob-02&orientation=portrait",
    },
    {
      year: "2026",
      label: "ChatGPT Era",
      title: "No brand mention. No traffic. No sale.",
      desc: "AI assistants become the decision point. If your brand isn't in the LLM's knowledge — you don't exist.",
      icon: "ri-robot-2-line",
      opacity: "opacity-70",
      glow: "shadow-[0_0_30px_rgba(239,68,68,0.2)]",
      img: "https://readdy.ai/api/search-image?query=ChatGPT%20conversation%20interface%202026%20AI%20assistant%20product%20recommendation%20chat%20dark%20theme%20no%20brand%20mention%20AI%20answer%20without%20specific%20brand%20names%20generic%20response&width=320&height=480&seq=prob-03&orientation=portrait",
    },
  ];

  return (
    <section id="problem" className="bg-[#0A0A0B] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">The Shift</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Users don&apos;t search anymore.
            <br />
            They{" "}
            <span className="italic text-[#00E5CC]" style={{ textShadow: "0 0 30px rgba(0,229,204,0.4)" }}>
              ask.
            </span>
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl mx-auto leading-relaxed">
            The funnel you optimized for 10 years is being replaced. Here&apos;s what the transition looks like.
          </p>
        </div>

        {/* Three phases */}
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, i) => (
            <div
              key={phase.year}
              className={`relative rounded-2xl overflow-hidden border border-white/8 bg-[#111113] ${phase.opacity} ${phase.glow} transition-all duration-500 ease-out hover:opacity-100 ${
                cards.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Phone mockup */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={phase.img}
                  alt={phase.label}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111113]" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0B]/80 backdrop-blur-sm border border-white/10">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${phase.icon} text-[#00E5CC] text-xs`}></i>
                  </div>
                  <span className="text-[#00E5CC] text-xs font-bold">{phase.year}</span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-[#8A8A8A] text-xs font-semibold tracking-widest uppercase mb-2">{phase.label}</p>
                <h3 className="text-white text-base font-bold mb-3 leading-snug">{phase.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          ref={callout.ref}
          className={`rounded-2xl border border-[#00E5CC]/20 bg-[#00E5CC]/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00E5CC]/15 flex-shrink-0">
            <i className="ri-focus-3-line text-[#00E5CC] text-lg"></i>
          </div>
          <div>
            <p className="text-white font-bold text-lg mb-1">Traffic is getting cheaper. Conversion isn&apos;t.</p>
            <p className="text-[#8A8A8A] text-base leading-relaxed">
              Conversion, personalization, and presence in AI answers are the new core assets. The brands that win in
              2026 are building for LLMs today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
