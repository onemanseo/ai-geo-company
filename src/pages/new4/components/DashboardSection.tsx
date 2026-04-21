import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(parseFloat(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration, decimals]);
  return value;
}

interface SparklineProps {
  data: number[];
  color: string;
  active: boolean;
}

function Sparkline({ data, color, active }: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const h = 36;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const polyline = pts.join(" ");
  const area = `0,${h} ${polyline} ${w},${h}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full"
      style={{ height: 36, opacity: active ? 1 : 0, transition: "opacity 0.6s ease" }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-warm-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#grad-warm-${color.replace("#", "")})`} />
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const kpis = [
  { label: "Conversion Rate", value: 8.4, unit: "%", change: "+127%", icon: "ri-percent-line", sparkData: [3.2, 3.8, 4.1, 4.6, 5.2, 5.9, 6.4, 7.1, 7.8, 8.4], color: "#59aaff", decimals: 1 },
  { label: "Avg Order Value", value: 284, unit: "", prefix: "$", change: "+43%", icon: "ri-money-dollar-circle-line", sparkData: [198, 205, 214, 221, 235, 248, 256, 268, 276, 284], color: "#ff7e4e", decimals: 0 },
  { label: "AI Traffic Share", value: 38, unit: "%", change: "+22pp", icon: "ri-robot-line", sparkData: [4, 7, 10, 14, 18, 22, 27, 31, 35, 38], color: "#66c9a0", decimals: 0 },
  { label: "Revenue from AI", value: 2.9, unit: "M", prefix: "$", change: "+290%", icon: "ri-funds-line", sparkData: [0.4, 0.6, 0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6, 2.9], color: "#ffd14f", decimals: 1 },
  { label: "Lead Quality Score", value: 91, unit: "/100", change: "+34pts", icon: "ri-focus-3-line", sparkData: [57, 61, 65, 68, 72, 76, 80, 84, 88, 91], color: "#59aaff", decimals: 0 },
  { label: "AI Brand Visibility", value: 74, unit: "%", change: "+61pp", icon: "ri-eye-line", sparkData: [13, 18, 24, 31, 39, 47, 55, 62, 68, 74], color: "#ff7e4e", decimals: 0 },
  { label: "Repeat Rate", value: 42, unit: "%", change: "+18pp", icon: "ri-refresh-line", sparkData: [24, 26, 28, 30, 32, 34, 36, 38, 40, 42], color: "#66c9a0", decimals: 0 },
  { label: "CAC Reduction", value: 47, unit: "%", change: "–47%", icon: "ri-arrow-down-line", sparkData: [0, 5, 11, 18, 24, 30, 35, 40, 44, 47], color: "#ffd14f", decimals: 0 },
];

interface KpiCardProps {
  kpi: typeof kpis[0];
  active: boolean;
  delay: number;
}

function KpiCard({ kpi, active, delay }: KpiCardProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const count = useCountUp(kpi.value, 1400, visible, kpi.decimals);
  const displayValue = kpi.decimals > 0 ? count.toFixed(kpi.decimals) : Math.round(count);

  return (
    <div
      className="rounded-[22px] border border-[#171717]/10 bg-white/80 p-5 flex flex-col gap-3 shadow-[0_8px_24px_rgba(23,23,23,0.04)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 flex items-center justify-center rounded-xl" style={{ backgroundColor: `${kpi.color}18` }}>
          <i className={`${kpi.icon} text-base`} style={{ color: kpi.color }}></i>
        </div>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
          {kpi.change}
        </span>
      </div>
      <div>
        <p className="text-[#171717] text-3xl font-black leading-none tracking-tight">
          {kpi.prefix}{displayValue}{kpi.unit}
        </p>
        <p className="text-[#6b6b6b] text-xs mt-1.5 font-medium">{kpi.label}</p>
      </div>
      <div className="mt-auto">
        <Sparkline data={kpi.sparkData} color={kpi.color} active={visible} />
      </div>
    </div>
  );
}

export default function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState<"30d" | "90d" | "12m">("90d");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" ref={sectionRef} className="py-16 lg:py-24 border-b border-[#171717]/8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6b6b] font-bold mb-4">AI Intelligence</p>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.94]">
            Real-Time Growth Dashboard
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <p className="text-[#4f4f4f] text-lg leading-relaxed max-w-md">
              Every client gets a live dashboard. All AI channels, all metrics, one view. Monthly business review with revenue breakdown by AI source.
            </p>
            {/* Tab switcher */}
            <div className="flex-shrink-0 flex items-center gap-1 p-1 rounded-full bg-[#171717]/8 self-start sm:self-auto">
              {(["30d", "90d", "12m"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeTab === t
                      ? "bg-[#171717] text-[#fff8ef] shadow-[2px_2px_0_rgba(89,170,255,0.2)]"
                      : "text-[#6b6b6b] hover:text-[#171717]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard frame */}
        <div className="rounded-[30px] border border-[#171717]/10 overflow-hidden shadow-[0_20px_60px_rgba(23,23,23,0.06)] bg-white/70">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[#171717]/8 bg-[#171717]/4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#171717]/15"></span>
              <span className="w-3 h-3 rounded-full bg-[#171717]/15"></span>
              <span className="w-3 h-3 rounded-full bg-[#171717]/15"></span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#171717]/6 border border-[#171717]/10 max-w-xs w-full">
                <i className="ri-lock-line text-[#6b6b6b] text-[10px]"></i>
                <span className="text-[#6b6b6b] text-xs">dashboard.aigrowthsystem.com</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-[#59aaff] animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6b6b6b] text-[10px] font-bold tracking-widest">LIVE</span>
              <span className="w-2 h-2 rounded-full bg-[#59aaff] animate-pulse"></span>
            </div>
          </div>

          {/* Dashboard inner */}
          <div className="p-5 md:p-6">
            {/* Summary bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-[#171717]/8">
              <div>
                <p className="text-[#171717] text-base font-black tracking-[-0.03em]">Acme Store — AI Growth Report</p>
                <p className="text-[#6b6b6b] text-xs mt-0.5">
                  {activeTab === "30d" && "Last 30 days · Updated 2 min ago"}
                  {activeTab === "90d" && "Last 90 days · Updated 2 min ago"}
                  {activeTab === "12m" && "Last 12 months · Updated 2 min ago"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <i className="ri-arrow-up-line text-emerald-600 text-[10px]"></i>
                  <span className="text-emerald-700 text-xs font-semibold whitespace-nowrap">All systems nominal</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717]/6 border border-[#171717]/10">
                  <i className="ri-download-line text-[#6b6b6b] text-[10px]"></i>
                  <span className="text-[#6b6b6b] text-xs whitespace-nowrap">Export PDF</span>
                </div>
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {kpis.map((kpi, i) => (
                <KpiCard key={kpi.label} kpi={kpi} active={active} delay={i * 80} />
              ))}
            </div>

            {/* Bottom breakdown */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AI channel breakdown */}
              <div className="rounded-[22px] border border-[#171717]/10 bg-[#fff8ef]/60 p-5">
                <p className="text-[#171717] text-sm font-black tracking-[-0.02em] mb-4">Revenue by AI Channel</p>
                <div className="space-y-3">
                  {[
                    { label: "ChatGPT / OpenAI", pct: 38, value: "$1.1M", color: "#59aaff" },
                    { label: "Google AI Overviews", pct: 29, value: "$841K", color: "#ff7e4e" },
                    { label: "Perplexity", pct: 18, value: "$522K", color: "#66c9a0" },
                    { label: "Gemini / Bard", pct: 15, value: "$435K", color: "#ffd14f" },
                  ].map((ch, i) => (
                    <div key={ch.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#4f4f4f] text-xs font-medium">{ch.label}</span>
                        <span className="text-[#171717] text-xs font-bold">{ch.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#171717]/8 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: active ? `${ch.pct}%` : "0%",
                            backgroundColor: ch.color,
                            transitionDelay: `${600 + i * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly review */}
              <div className="rounded-[22px] border border-[#171717]/10 bg-[#fff8ef]/60 p-5">
                <p className="text-[#171717] text-sm font-black tracking-[-0.02em] mb-4">Monthly Business Review</p>
                <div className="space-y-2.5">
                  {[
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-600", text: "AI traffic up 34% MoM — GEO content driving Perplexity citations" },
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-600", text: "CRO module A/B test concluded: +18% CR on product pages" },
                    { icon: "ri-error-warning-line", color: "text-amber-500", text: "Gemini visibility dipped 8% — schema update scheduled for next sprint" },
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-600", text: "Retention module: churn rate down to 4.2%, lowest on record" },
                    { icon: "ri-time-line", color: "text-[#6b6b6b]", text: "Next review: May 20 · AI Data Layer expansion in progress" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5"
                      style={{
                        opacity: active ? 1 : 0,
                        transform: active ? "translateX(0)" : "translateX(-8px)",
                        transition: `opacity 0.4s ease ${800 + i * 100}ms, transform 0.4s ease ${800 + i * 100}ms`,
                      }}
                    >
                      <i className={`${item.icon} ${item.color} text-sm mt-0.5 flex-shrink-0`}></i>
                      <p className="text-[#4f4f4f] text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b6b6b] text-sm">Every client gets access to this dashboard from day one. No black boxes.</p>
          <div className="flex items-center gap-4">
            {["ChatGPT", "Perplexity", "Gemini", "Google AI"].map((src) => (
              <span key={src} className="text-[#6b6b6b]/70 text-xs font-semibold whitespace-nowrap">{src}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
