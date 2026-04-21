import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-[#171717] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-[14px] bg-[#fff8ef] text-[#171717] flex items-center justify-center font-black text-sm shadow-[4px_4px_0_rgba(89,170,255,0.2)]">
                AI
              </div>
              <div className="leading-none">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-semibold">AI GEO COMPANY</div>
                <div className="text-sm font-black text-white tracking-[-0.02em]">AI Growth System</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              AI Growth System for eCommerce and marketplaces. We manage demand, traffic, and conversion through AI.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: "ri-linkedin-box-line", href: "#" },
                { icon: "ri-twitter-x-line", href: "#" },
                { icon: "ri-telegram-line", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  rel="nofollow"
                  className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/8 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* System */}
          <div>
            <p className="text-white text-sm font-black tracking-[-0.02em] mb-4">System</p>
            <ul className="space-y-3">
              {["AI Data Layer", "AISO", "AI Content Engine", "AI CRO", "AI Lead Scoring"].map((item) => (
                <li key={item}>
                  <a href="#modules" className="text-white/45 text-sm hover:text-white transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white text-sm font-black tracking-[-0.02em] mb-4">Resources</p>
            <ul className="space-y-3">
              {[
                { label: "AI Growth Whitepaper", href: "#" },
                { label: "About Us", href: "/new4/about" },
                { label: "Contact", href: "/new4/contact" },
                { label: "AI Visibility Audit", href: "#strategy" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link to={item.href} className="text-white/45 text-sm hover:text-white transition-colors cursor-pointer">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} rel="nofollow" className="text-white/45 text-sm hover:text-white transition-colors cursor-pointer">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-black tracking-[-0.02em] mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/45 text-sm">
                <i className="ri-mail-line text-[#59aaff] text-sm flex-shrink-0"></i>
                <Link to="/new4/contact" className="hover:text-white transition-colors cursor-pointer">
                  hello@aigrowthsystem.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm">
                <i className="ri-linkedin-box-line text-[#59aaff] text-sm flex-shrink-0"></i>
                <a href="#" rel="nofollow" className="hover:text-white transition-colors cursor-pointer">
                  Team LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm">
                <i className="ri-calendar-line text-[#59aaff] text-sm flex-shrink-0"></i>
                <a href="#strategy" className="hover:text-white transition-colors cursor-pointer">
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 AI Growth System. All rights reserved.</p>
          <p className="text-white/25 text-xs italic">AI Growth System for eCommerce and marketplaces</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/new4/privacy" className="text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/new4/terms" className="text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/new4/cookies" className="text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
