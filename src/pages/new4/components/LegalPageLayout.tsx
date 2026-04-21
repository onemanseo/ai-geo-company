import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

interface SectionItem {
  title: string;
  body: string[];
}

interface LegalPageLayoutProps {
  kicker: string;
  title: string;
  intro: string;
  sections: SectionItem[];
  accent?: "blue" | "mint" | "peach";
}

const accentMap = {
  blue: "bg-[#dff3ff]",
  mint: "bg-[#e8fff7]",
  peach: "bg-[#fff0db]",
};

export default function LegalPageLayout({ kicker, title, intro, sections, accent = "blue" }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#171717] overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,126,78,0.26), transparent 18%), radial-gradient(circle at 82% 14%, rgba(89,170,255,0.24), transparent 20%), radial-gradient(circle at 74% 68%, rgba(255,205,82,0.22), transparent 18%), radial-gradient(circle at 18% 74%, rgba(102,238,201,0.18), transparent 16%)",
        }}
      />

      <Navbar />

      <main className="relative z-10 pt-[110px] pb-16 lg:pb-24">
        <section className="pb-10 lg:pb-14 border-b border-[#171717]/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`rounded-[34px] border border-[#171717]/10 ${accentMap[accent]} p-8 lg:p-12 shadow-[0_18px_50px_rgba(23,23,23,0.05)]`}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">{kicker}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94] max-w-4xl mb-5">{title}</h1>
              <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-3xl">{intro}</p>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-6 grid gap-5">
            {sections.map((section, idx) => (
              <article
                key={section.title}
                className={`rounded-[30px] border border-[#171717]/10 p-6 lg:p-8 shadow-[0_18px_50px_rgba(23,23,23,0.05)] ${
                  idx % 3 === 0 ? "bg-white/75" : idx % 3 === 1 ? "bg-[#dff3ff]" : "bg-[#fff0db]"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-black tracking-[-0.04em] leading-snug mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-[#4f4f4f] text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
