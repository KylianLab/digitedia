import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  ShoppingCart,
  Layers,
  Phone,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez nos réalisations : sites web, boutiques e-commerce, plateformes sur mesure et solutions IT déployées pour nos clients.",
};

const categories = [
  { name: "Tous", value: "all" },
  { name: "Sites Vitrines", value: "vitrine" },
  { name: "E-Commerce", value: "ecommerce" },
  { name: "Plateformes", value: "plateforme" },
  { name: "VoIP & IT", value: "it" },
];

const projects = [
  {
    title: "Cabinet Montaigne Avocats",
    category: "vitrine",
    categoryLabel: "Site Vitrine",
    icon: Globe,
    description:
      "Refonte complète du site d'un cabinet d'avocats parisien. Design sobre et professionnel avec prise de rendez-vous en ligne.",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
    gradient: "from-blue-500 to-cyan",
  },
  {
    title: "Maison Rivière",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Boutique en ligne pour un artisan chocolatier. Commande personnalisée, click & collect et livraison nationale.",
    tags: ["Shopify", "API", "Stripe"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "LogiTrack Pro",
    category: "plateforme",
    categoryLabel: "Plateforme Sur Mesure",
    icon: Layers,
    description:
      "Plateforme logistique pour une PME de transport. Suivi en temps réel, gestion de flotte et facturation automatisée.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    gradient: "from-accent to-purple-500",
  },
  {
    title: "Clinique Santé Plus",
    category: "vitrine",
    categoryLabel: "Site Vitrine",
    icon: Globe,
    description:
      "Site web pour une clinique multi-spécialités. Présentation de l'équipe, prise de rendez-vous et blog santé.",
    tags: ["WordPress", "Design", "SEO"],
    gradient: "from-blue-500 to-cyan",
  },
  {
    title: "TechComm Solutions",
    category: "it",
    categoryLabel: "VoIP & Infrastructure",
    icon: Phone,
    description:
      "Déploiement VoIP pour 120 collaborateurs sur 3 sites. Migration depuis un PBX traditionnel.",
    tags: ["VoIP", "SIP", "IPBX", "Formation"],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "BioNature Shop",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Marketplace bio avec abonnement et livraison récurrente. Multi-fournisseurs et programme de fidélité.",
    tags: ["WooCommerce", "API REST", "Paiement récurrent"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Groupe Immo-Conseil",
    category: "plateforme",
    categoryLabel: "Plateforme Sur Mesure",
    icon: Layers,
    description:
      "CRM immobilier avec estimation automatique, matching acheteur/vendeur et signature électronique.",
    tags: ["Vue.js", "Python", "ML", "DocuSign"],
    gradient: "from-accent to-purple-500",
  },
  {
    title: "Réseau ProSanté",
    category: "it",
    categoryLabel: "Parc Informatique",
    icon: Monitor,
    description:
      "Gestion du parc de 15 pharmacies. Déploiement, maintenance et supervision centralisée.",
    tags: ["Supervision", "Sécurité", "Support N1/N2/N3"],
    gradient: "from-rose-500 to-magenta",
  },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Nos Réalisations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Des projets concrets, des résultats{" "}
              <span className="gradient-text">mesurables</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Découvrez une sélection de projets qui illustrent notre
              savoir-faire et la diversité de nos compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="sticky top-20 z-40 glass border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap cursor-pointer transition-all ${
                  cat.value === "all"
                    ? "bg-gradient-to-r from-accent to-cyan text-white shadow-lg shadow-accent/20"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-primary-light/50 rounded-2xl border border-white/5 overflow-hidden card-hover"
              >
                {/* Project Header Visual */}
                <div className={`relative p-10 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-xs font-medium text-accent-light mb-4">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-accent-light font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Voir le projet
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan/10 to-magenta/5 animate-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Votre projet sera le <span className="gradient-text">prochain</span> ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons du vôtre et créons ensemble une
            solution qui vous ressemble.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25"
          >
            Lancer votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
