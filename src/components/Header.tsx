"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#a-propos" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center shadow-lg shadow-accent/25 group-hover:shadow-accent/40 transition-shadow">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Digit<span className="gradient-text">edia</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
          >
            Nous contacter
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-white/10 animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                className="block text-center px-6 py-3 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
