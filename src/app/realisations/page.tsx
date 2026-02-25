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
      "Refonte complète du site web d'un cabinet d'avocats parisien. Design sobre et professionnel avec prise de rendez-vous en ligne.",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Maison Rivière",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Boutique en ligne pour un artisan chocolatier. Système de commande personnalisée, click & collect et livraison nationale.",
    tags: ["Shopify", "API personnalisée", "Paiement Stripe"],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "LogiTrack Pro",
    category: "plateforme",
    categoryLabel: "Plateforme Sur Mesure",
    icon: Layers,
    description:
      "Plateforme de gestion logistique pour une PME de transport. Suivi en temps réel des livraisons, gestion de flotte et facturation automatisée.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Clinique Santé Plus",
    category: "vitrine",
    categoryLabel: "Site Vitrine",
    icon: Globe,
    description:
      "Site web pour une clinique médicale multi-spécialités. Présentation de l'équipe, prise de rendez-vous et blog santé.",
    tags: ["WordPress", "Design responsive", "SEO"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "TechComm Solutions",
    category: "it",
    categoryLabel: "VoIP & Infrastructure",
    icon: Phone,
    description:
      "Déploiement complet d'une solution VoIP pour une entreprise de 120 collaborateurs sur 3 sites. Migration depuis un PBX traditionnel.",
    tags: ["VoIP", "SIP", "IPBX", "Formation"],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "BioNature Shop",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    icon: ShoppingCart,
    description:
      "Marketplace bio avec système d'abonnement et livraison récurrente. Intégration multi-fournisseurs et programme de fidélité.",
    tags: ["WooCommerce", "API REST", "Paiement récurrent"],
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Groupe Immo-Conseil",
    category: "plateforme",
    categoryLabel: "Plateforme Sur Mesure",
    icon: Layers,
    description:
      "CRM immobilier sur mesure avec estimation automatique, matching acheteur/vendeur et signature électronique intégrée.",
    tags: ["Vue.js", "Python", "Machine Learning", "DocuSign"],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Réseau ProSanté",
    category: "it",
    categoryLabel: "Parc Informatique",
    icon: Monitor,
    description:
      "Gestion complète du parc informatique d'un réseau de 15 pharmacies. Déploiement, maintenance et supervision centralisée.",
    tags: ["Supervision", "Sécurité", "Support N1/N2/N3"],
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
];

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-3">
              Nos Réalisations
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Des projets concrets, des résultats mesurables
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Découvrez une sélection de projets qui illustrent notre
              savoir-faire et la diversité de nos compétences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  cat.value === "all"
                    ? "bg-accent text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Header Visual */}
                <div
                  className={`${project.color} p-8 flex items-center justify-center`}
                >
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <project.icon
                      className={`w-10 h-10 ${project.iconColor}`}
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 ${project.color} rounded-full text-xs font-medium ${project.iconColor}`}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all cursor-pointer">
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
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Votre projet sera le prochain ?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons du vôtre et créons ensemble une
            solution qui vous ressemble.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg"
          >
            Lancer votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
