import { useState, useEffect } from "react";

export default function NavbarLight() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "System", href: "#solution-light" },
    { label: "Modules", href: "#modules-light" },
    { label: "How It Works", href: "#how-it-works-light" },
    { label: "For Who", href: "#who-light" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm"
          : "bg-transparent"
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/light" className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://public.readdy.ai/ai/img_res/00432940-05c9-4ddf-906b-9f72ed0c7467.png"
            alt="Flowvory Logo"
            className="h-9 w-auto object-contain"
            style={{ filter: "invert(1) brightness(0)" }}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#strategy-light"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500/70 text-teal-600 text-sm font-semibold hover:bg-teal-50 transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          Book Strategy Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-gray-700 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#strategy-light"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full border border-teal-500/70 text-teal-600 text-sm font-semibold text-center cursor-pointer whitespace-nowrap"
          >
            Book Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
}
