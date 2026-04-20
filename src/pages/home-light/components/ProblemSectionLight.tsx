import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSectionLight() {
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
      img: "https://readdy.ai/api/search-image?query=classic%20Google%20search%20results%20page%202019%20desktop%20screenshot%20blue%20links%20organic%20results%20traditional%20SERP%20layout%20white%20background%20minimal%20clean%20search%20engine%20results&width=320&height=480&seq=prob-light-01&orientation=portrait",
    },
    {
      year: "2024",
      label: "AI Overview",
      title: "AI Overviews answer before the click",
      desc: "Google generates the answer directly. Users get what they need without visiting your site. CTR drops 30–60%.",
      icon: "ri-sparkling-line",
      img: "https://readdy.ai/api/search-image?query=Google%20AI%20Overview%20search%20results%202024%20AI%20generated%20answer%20box%20at%20top%20of%20SERP%20desktop%20screenshot%20modern%20search%20interface%20AI%20summary%20panel&width=320&height=480&seq=prob-light-02&orientation=portrait",
    },
    {
      year: "2026",
      label: "ChatGPT Era",
      title: "No brand mention. No traffic. No sale.",
      desc: "AI assistants become the decision point. If your brand isn't in the LLM's knowledge — you don't exist.",
      icon: "ri-robot-2-line",
      img: "https://readdy.ai/api/search-image?query=ChatGPT%20conversation%20interface%202026%20AI%20assistant%20product%20recommendation%20chat%20dark%20theme%20no%20brand%20mention%20AI%20answer%20without%20specific%20brand%20names%20generic%20response&width=320&height=480&seq=prob-light-03&orientation=portrait",
    },
  ];

  return (
    <section id="problem-light" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 text-xs font-semibold tracking-widest uppercase mb-4">The Shift</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Users don&apos;t search anymore.
            <br />
            They{" "}
            <span className="italic text-teal-500">
              ask.
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            The funnel you optimized for 10 years is being replaced. Here&apos;s what the transition looks like.
          </p>
        </div>

        {/* Three phases */}
        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, i) => (
            <div
              key={phase.year}
              className={`relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-teal-300 transition-all duration-500 ease-out ${
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${phase.icon} text-teal-500 text-xs`}></i>
                  </div>
                  <span className="text-teal-600 text-xs font-bold">{phase.year}</span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">{phase.label}</p>
                <h3 className="text-gray-900 text-base font-bold mb-3 leading-snug">{phase.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          ref={callout.ref}
          className={`rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 ease-out ${
            callout.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 flex-shrink-0">
            <i className="ri-focus-3-line text-teal-600 text-lg"></i>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">Traffic is getting cheaper. Conversion isn&apos;t.</p>
            <p className="text-gray-500 text-base leading-relaxed">
              Conversion, personalization, and presence in AI answers are the new core assets. The brands that win in
              2026 are building for LLMs today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
