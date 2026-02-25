"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-primary">
              Digit<span className="text-accent">edia</span>
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
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-accent font-medium transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
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
                  className="px-4 py-2 text-gray-700 hover:text-accent font-medium transition-colors rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-sm"
          >
            Devis gratuit
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-accent font-medium rounded-lg hover:bg-gray-50"
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
                        className="block px-4 py-2 text-gray-500 hover:text-accent text-sm"
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
                className="block text-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
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
