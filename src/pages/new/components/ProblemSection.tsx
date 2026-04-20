import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';

export default function ProblemSection() {
  const header = useScrollAnimation({ threshold: 0.2 });
  const cards = useStaggerAnimation(3, { threshold: 0.1 });

  const phases = [
    {
      label: 'Old SEO',
      title: 'Rankings once controlled most of the journey.',
      desc: 'Discovery started on Google, evaluation happened on the site, and performance largely followed the quality of your rankings and pages.',
    },
    {
      label: 'Transition',
      title: 'AI Overviews compressed the classic click path.',
      desc: 'Users increasingly receive synthesized answers before they reach your category or product pages, which changes where brands win and lose.',
    },
    {
      label: 'Now',
      title: 'LLMs shape recommendations before traffic even exists.',
      desc: 'If your brand is not structured, cited, and easy for models to retrieve, the commercial decision can happen without you in the frame.',
    },
  ];

  return (
    <section id="problem" className="bg-[#0d1326] text-white py-16 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className={`mb-12 transition-all duration-700 ease-out ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#98a4d6] font-semibold mb-4">The shift</p>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.96] max-w-2xl">
              Search is becoming a recommendation layer, not just a ranking layer.
            </h2>
            <p className="text-[#aab1cc] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              That means the operating model has to change. You are no longer optimizing only for pages and positions. You are optimizing for interpretation,
              retrieval, mention probability, and conversion after mediated discovery.
            </p>
          </div>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <div key={phase.label} className={`rounded-[28px] border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-out ${cards.visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#7c8cff] font-semibold mb-4">{phase.label}</p>
              <h3 className="text-white text-2xl font-semibold leading-snug mb-4">{phase.title}</h3>
              <p className="text-[#aab1cc] leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
