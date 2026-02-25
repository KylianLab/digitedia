import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

const services = [
  { name: "Sites Vitrines", href: "/services#sites-vitrines" },
  { name: "E-Commerce", href: "/services#e-commerce" },
  { name: "Plateformes Sur Mesure", href: "/services#plateformes" },
  { name: "VoIP & Téléphonie", href: "/services#voip" },
  { name: "Parc Informatique", href: "/services#support" },
  { name: "Conseil Digital", href: "/services#conseil" },
];

const company = [
  { name: "À propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Digit<span className="gradient-text">edia</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6">
              Votre partenaire digital de confiance. Nous accompagnons les
              entreprises dans leur transformation numérique.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-accent-light transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">L&apos;entreprise</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-accent-light transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400">contact@digitedia.fr</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Digitedia. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
