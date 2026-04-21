import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "System", href: "#solution" },
    { label: "Modules", href: "#modules" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Who", href: "#who" },
    { label: "vs. SEO", href: "#comparison" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,248,239,0.88)] backdrop-blur-xl border-b border-[#171717]/8"
          : "bg-transparent"
      }`}
      style={{ height: 78 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-[18px] bg-[#171717] text-[#fff8ef] flex items-center justify-center font-black text-sm shadow-[6px_6px_0_rgba(89,170,255,0.22)]">
            AI
          </div>
          <div className="leading-none">
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#6b6b6b] font-semibold">FLOWVORI</div>
            <div className="text-lg font-black tracking-[-0.04em] text-[#171717]">AI Growth System</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#4f4f4f] hover:text-[#171717] text-sm font-bold tracking-[0.06em] uppercase transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#strategy"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-[#fff8ef] text-sm font-bold hover:translate-y-[-1px] transition-all duration-200 whitespace-nowrap shadow-[6px_6px_0_rgba(255,126,78,0.25)]"
        >
          Book Strategy Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-[#171717] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(255,248,239,0.98)] border-t border-[#171717]/8 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#4f4f4f] hover:text-[#171717] text-base font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#strategy"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full bg-[#171717] text-[#fff8ef] text-sm font-bold text-center whitespace-nowrap"
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
}
