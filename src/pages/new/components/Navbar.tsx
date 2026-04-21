import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Shift", href: "#problem" },
    { label: "System", href: "#solution" },
    { label: "Modules", href: "#modules" },
    { label: "Method", href: "#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1020]/88 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      style={{ height: 78 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="/new" className="flex items-center gap-3 cursor-pointer text-white">
          <div className="w-10 h-10 rounded-2xl border border-[#7c8cff]/50 bg-[#151a30] flex items-center justify-center text-sm font-bold text-[#aab4ff]">AG</div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#7f89b5] font-semibold">FLOWVORI</span>
            <span className="text-lg font-semibold tracking-[0.02em]">AI Growth System</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[#9ba3c7] hover:text-white text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-200 whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#strategy"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7c8cff] text-[#0b1020] text-sm font-semibold hover:bg-[#94a0ff] transition-all duration-200 whitespace-nowrap"
        >
          Book Strategy Call
        </a>

        <button className="md:hidden w-9 h-9 flex items-center justify-center text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0b1020]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-[#9ba3c7] hover:text-white text-base font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#strategy" onClick={() => setMenuOpen(false)} className="mt-2 px-5 py-2.5 rounded-full bg-[#7c8cff] text-[#0b1020] text-sm font-semibold text-center whitespace-nowrap">
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
}
