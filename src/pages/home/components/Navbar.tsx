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
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Who", href: "#who" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://public.readdy.ai/ai/img_res/00432940-05c9-4ddf-906b-9f72ed0c7467.png"
            alt="AI Growth System Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#B8B8B8] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#strategy"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00E5CC]/60 text-[#00E5CC] text-sm font-semibold hover:bg-[#00E5CC]/10 transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          Book Strategy Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0B]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#B8B8B8] hover:text-white text-base font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#strategy"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full border border-[#00E5CC]/60 text-[#00E5CC] text-sm font-semibold text-center cursor-pointer whitespace-nowrap"
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
}
