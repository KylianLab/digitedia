import { Mail, Linkedin, Facebook, Twitter } from "lucide-react";

const services = [
  "Sites Vitrines",
  "E-Commerce",
  "Plateformes Sur Mesure",
  "VoIP & Téléphonie",
  "Parc Informatique",
  "Conseil Digital",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Digit<span className="gradient-text">edia</span>
              </span>
            </a>
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
              {services.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-accent-light transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <a
              href="mailto:contact@updaty.be"
              className="flex items-start gap-3 group"
            >
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-gray-400 group-hover:text-accent-light transition-colors">
                contact@updaty.be
              </span>
            </a>
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
            <a href="#" className="hover:text-gray-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
