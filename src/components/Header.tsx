"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Sites Vitrines", href: "/services#sites-vitrines" },
  { name: "E-Commerce", href: "/services#e-commerce" },
  { name: "Plateformes Sur Mesure", href: "/services#plateformes" },
  { name: "VoIP & Téléphonie", href: "/services#voip" },
  { name: "Parc Informatique & Support", href: "/services#support" },
  { name: "Conseil & Stratégie Digitale", href: "/services#conseil" },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services", children: services },
  { name: "À propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center shadow-lg shadow-accent/25 group-hover:shadow-accent/40 transition-shadow">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-white">
              Digit<span className="gradient-text">edia</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-gray-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-72 mt-2 glass rounded-2xl py-2 animate-fade-in shadow-xl shadow-black/30">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-400 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
          >
            Devis gratuit
          </Link>

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
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-gray-500 hover:text-white text-sm transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
