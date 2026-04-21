export default function FooterSection() {
  return (
    <footer className="bg-[#111113] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://public.readdy.ai/ai/img_res/00432940-05c9-4ddf-906b-9f72ed0c7467.png"
              alt="Flowvory"
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-5">
              Flowvory for eCommerce and marketplaces. We manage demand, traffic, and conversion through AI.
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
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-[#8A8A8A] hover:text-[#00E5CC] hover:border-[#00E5CC]/30 transition-all duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* System */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">System</p>
            <ul className="space-y-3">
              {["AI Data Layer", "GEO", "AI Content Engine", "AI CRO", "AI Lead Scoring"].map((item) => (
                <li key={item}>
                  <a href="#modules" className="text-[#8A8A8A] text-sm hover:text-white transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Resources</p>
            <ul className="space-y-3">
              {[
                { label: "AI Growth Whitepaper", href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Blog", href: "#" },
                { label: "AI Visibility Audit", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} rel="nofollow" className="text-[#8A8A8A] text-sm hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-[#00E5CC] text-sm"></i>
                </div>
                <a href="mailto:hello@flowvory.com" className="hover:text-white transition-colors cursor-pointer">
                  hello@flowvory.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-linkedin-box-line text-[#00E5CC] text-sm"></i>
                </div>
                <a href="#" rel="nofollow" className="hover:text-white transition-colors cursor-pointer">
                  Team LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#8A8A8A] text-sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-calendar-line text-[#00E5CC] text-sm"></i>
                </div>
                <a href="#strategy" className="hover:text-white transition-colors cursor-pointer">
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8A8A] text-xs">
            © 2026 Flowvory. All rights reserved.
          </p>
          <p className="text-[#8A8A8A] text-xs italic">
            Flowvory for eCommerce and marketplaces
          </p>
          <div className="flex items-center gap-4">
            <a href="#" rel="nofollow" className="text-[#8A8A8A] text-xs hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" rel="nofollow" className="text-[#8A8A8A] text-xs hover:text-white transition-colors cursor-pointer">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
