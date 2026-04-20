import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const cards = useStaggerAnimation(3, { threshold: 0.1 });

  const phases = [
    {
      year: "2019",
      label: "Search funnel",
      title: "Google owned discovery, traffic, and intent capture.",
      desc: "A strong category page and a clean product detail page could reliably turn rankings into sessions and sessions into sales.",
    },
    {
      year: "2024",
      label: "Answer layer",
      title: "AI Overviews started compressing the click path.",
      desc: "Search platforms increasingly answer first, summarize first, and route fewer users into the old ranking funnel.",
    },
    {
      year: "2026",
      label: "Interface shift",
      title: "LLMs now shape recommendation, trust, and brand recall.",
      desc: "If your brand is not machine-readable, cited, or contextually reinforced, the answer layer chooses for the user before your site ever loads.",
    },
  ];

  return (
    <section id="problem" className="bg-[#fbf8f3] py-16 lg:py-24 border-b border-[#d8d0c5]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="hairline-title text-[11px] font-semibold uppercase text-[#7a7369] mb-4">The shift</p>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-end">
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl text-[#161616] leading-[0.98] max-w-2xl">
              Search no longer behaves like a ranking game. It behaves like a mediated answer system.
            </h2>
            <p className="text-[#5f5a52] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              The old SEO promise was visibility through positions. The new reality is visibility through structure, machine comprehension,
              answer-engine presence, and conversion logic that survives outside the old funnel.
            </p>
          </div>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <div
              key={phase.year}
              className={`paper-panel rounded-[30px] p-7 transition-all duration-500 ease-out ${cards.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a7369] font-semibold">{phase.label}</p>
                <span className="display-serif text-3xl text-[#b86e3c]">{phase.year}</span>
              </div>
              <h3 className="text-[#161616] text-2xl font-semibold leading-snug mb-4">{phase.title}</h3>
              <p className="text-[#5f5a52] leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
