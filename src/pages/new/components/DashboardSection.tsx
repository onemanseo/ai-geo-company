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
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#grad-${color.replace("#", "")})`} />
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const kpis = [
  {
    label: "Conversion Rate",
    value: 8.4,
    unit: "%",
    change: "+127%",
    positive: true,
    icon: "ri-percent-line",
    sparkData: [3.2, 3.8, 4.1, 4.6, 5.2, 5.9, 6.4, 7.1, 7.8, 8.4],
    color: "#00E5CC",
    decimals: 1,
  },
  {
    label: "Avg Order Value",
    value: 284,
    unit: "$",
    prefix: "$",
    change: "+43%",
    positive: true,
    icon: "ri-money-dollar-circle-line",
    sparkData: [198, 205, 214, 221, 235, 248, 256, 268, 276, 284],
    color: "#00E5CC",
    decimals: 0,
  },
  {
    label: "AI Traffic Share",
    value: 38,
    unit: "%",
    change: "+22pp",
    positive: true,
    icon: "ri-robot-line",
    sparkData: [4, 7, 10, 14, 18, 22, 27, 31, 35, 38],
    color: "#00E5CC",
    decimals: 0,
  },
  {
    label: "Revenue from AI",
    value: 2.9,
    unit: "M",
    prefix: "$",
    change: "+290%",
    positive: true,
    icon: "ri-funds-line",
    sparkData: [0.4, 0.6, 0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6, 2.9],
    color: "#00E5CC",
    decimals: 1,
  },
  {
    label: "Lead Quality Score",
    value: 91,
    unit: "/100",
    change: "+34pts",
    positive: true,
    icon: "ri-focus-3-line",
    sparkData: [57, 61, 65, 68, 72, 76, 80, 84, 88, 91],
    color: "#00E5CC",
    decimals: 0,
  },
  {
    label: "AI Brand Visibility",
    value: 74,
    unit: "%",
    change: "+61pp",
    positive: true,
    icon: "ri-eye-line",
    sparkData: [13, 18, 24, 31, 39, 47, 55, 62, 68, 74],
    color: "#00E5CC",
    decimals: 0,
  },
  {
    label: "Repeat Rate",
    value: 42,
    unit: "%",
    change: "+18pp",
    positive: true,
    icon: "ri-refresh-line",
    sparkData: [24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
    color: "#00E5CC",
    decimals: 0,
  },
  {
    label: "CAC Reduction",
    value: 47,
    unit: "%",
    change: "–47%",
    positive: true,
    icon: "ri-arrow-down-line",
    sparkData: [0, 5, 11, 18, 24, 30, 35, 40, 44, 47],
    color: "#00E5CC",
    decimals: 0,
  },
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
      className="rounded-2xl border border-white/8 bg-[#111113] p-5 flex flex-col gap-3 transition-all duration-500 hover:border-[#00E5CC]/30 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.3s`,
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#00E5CC]/10 border border-[#00E5CC]/20">
          <i className={`${kpi.icon} text-[#00E5CC] text-base`}></i>
        </div>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
            kpi.positive
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-red-500/10 text-red-400 border border-red-500/20"
          } whitespace-nowrap`}
        >
          {kpi.change}
        </span>
      </div>

      {/* Value */}
      <div>
        <p className="text-white text-3xl font-bold leading-none tracking-tight">
          {kpi.prefix}{displayValue}{kpi.unit}
        </p>
        <p className="text-[#8A8A8A] text-xs mt-1.5">{kpi.label}</p>
      </div>

      {/* Sparkline */}
      <div className="mt-auto">
        <Sparkline data={kpi.sparkData} color={kpi.color} active={visible} />
      </div>
    </div>
  );
}

export default function DashboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [activeTab, setActiveTab] = useState<"30d" | "90d" | "12m">("90d");

  return (
    <section id="dashboard" ref={sectionRef} className="bg-[#0D0D0F] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-[#00E5CC] text-xs font-semibold tracking-widest uppercase mb-4">AI Intelligence</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-Time Growth Dashboard
            </h2>
            <p className="text-[#8A8A8A] text-lg max-w-xl leading-relaxed">
              Every client gets a live dashboard. All AI channels, all metrics, one view.
              Monthly business review with revenue breakdown by AI source.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex-shrink-0 flex items-center gap-1 p-1 rounded-full bg-[#1A1A1C] border border-white/8 self-start md:self-auto">
            {(["30d", "90d", "12m"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === t
                    ? "bg-[#00E5CC] text-[#0A0A0B]"
                    : "text-[#8A8A8A] hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard frame */}
        <div
          className="rounded-2xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(10,10,11,0.6)", backdropFilter: "blur(20px)" }}
        >
          {/* Browser chrome bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/8 bg-[#0A0A0B]/60">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/10"></span>
              <span className="w-3 h-3 rounded-full bg-white/10"></span>
              <span className="w-3 h-3 rounded-full bg-white/10"></span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/8 max-w-xs w-full">
                <div className="w-3 h-3 flex items-center justify-center">
                  <i className="ri-lock-line text-[#8A8A8A] text-[10px]"></i>
                </div>
                <span className="text-[#8A8A8A] text-xs">dashboard.flowvory.com</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-[#00E5CC] animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#8A8A8A] text-[10px] font-medium">LIVE</span>
              <span className="w-2 h-2 rounded-full bg-[#00E5CC] animate-pulse"></span>
            </div>
          </div>

          {/* Dashboard inner */}
          <div className="p-5 md:p-6">
            {/* Top summary bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/5">
              <div>
                <p className="text-white text-base font-bold">Acme Store — AI Growth Report</p>
                <p className="text-[#8A8A8A] text-xs mt-0.5">
                  {activeTab === "30d" && "Last 30 days · Updated 2 min ago"}
                  {activeTab === "90d" && "Last 90 days · Updated 2 min ago"}
                  {activeTab === "12m" && "Last 12 months · Updated 2 min ago"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-arrow-up-line text-emerald-400 text-[10px]"></i>
                  </div>
                  <span className="text-emerald-400 text-xs font-semibold whitespace-nowrap">All systems nominal</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1C] border border-white/8">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-download-line text-[#8A8A8A] text-[10px]"></i>
                  </div>
                  <span className="text-[#8A8A8A] text-xs whitespace-nowrap">Export PDF</span>
                </div>
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {kpis.map((kpi, i) => (
                <KpiCard key={kpi.label} kpi={kpi} active={active} delay={i * 80} />
              ))}
            </div>

            {/* Bottom AI source breakdown */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* AI channel breakdown */}
              <div className="rounded-xl border border-white/8 bg-[#0A0A0B]/60 p-5">
                <p className="text-white text-sm font-bold mb-4">Revenue by AI Channel</p>
                <div className="space-y-3">
                  {[
                    { label: "ChatGPT / OpenAI", pct: 38, value: "$1.1M", color: "bg-[#00E5CC]" },
                    { label: "Google AI Overviews", pct: 29, value: "$841K", color: "bg-[#00E5CC]/70" },
                    { label: "Perplexity", pct: 18, value: "$522K", color: "bg-[#00E5CC]/50" },
                    { label: "Gemini / Bard", pct: 15, value: "$435K", color: "bg-[#00E5CC]/30" },
                  ].map((ch, i) => (
                    <div key={ch.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#8A8A8A] text-xs">{ch.label}</span>
                        <span className="text-white text-xs font-semibold">{ch.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${ch.color} transition-all duration-1000`}
                          style={{
                            width: active ? `${ch.pct}%` : "0%",
                            transitionDelay: `${600 + i * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly review summary */}
              <div className="rounded-xl border border-white/8 bg-[#0A0A0B]/60 p-5">
                <p className="text-white text-sm font-bold mb-4">Monthly Business Review</p>
                <div className="space-y-2.5">
                  {[
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-400", text: "AI traffic up 34% MoM — GEO content driving Perplexity citations" },
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-400", text: "CRO module A/B test concluded: +18% CR on product pages" },
                    { icon: "ri-error-warning-line", color: "text-amber-400", text: "Gemini visibility dipped 8% — schema update scheduled for next sprint" },
                    { icon: "ri-checkbox-circle-line", color: "text-emerald-400", text: "Retention module: churn rate down to 4.2%, lowest on record" },
                    { icon: "ri-time-line", color: "text-[#8A8A8A]", text: "Next review: May 20 · AI Data Layer expansion in progress" },
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
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${item.icon} ${item.color} text-sm`}></i>
                      </div>
                      <p className="text-[#8A8A8A] text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8A8A] text-sm">
            Every client gets access to this dashboard from day one. No black boxes.
          </p>
          <div className="flex items-center gap-4">
            {["ChatGPT", "Perplexity", "Gemini", "Google AI"].map((src) => (
              <span key={src} className="text-[#8A8A8A]/60 text-xs font-medium whitespace-nowrap">{src}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
