import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Layers,
  Phone,
  Monitor,
  Lightbulb,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez l'ensemble des services Digitedia : création de sites web, e-commerce, développement de plateformes, VoIP, gestion de parc informatique et conseil digital.",
};

const services = [
  {
    id: "sites-vitrines",
    icon: Globe,
    title: "Sites Vitrines",
    subtitle: "Votre vitrine digitale professionnelle",
    description:
      "Nous concevons des sites web modernes, rapides et optimisés pour le référencement qui reflètent parfaitement l'identité de votre entreprise. Chaque site est pensé pour convertir vos visiteurs en clients.",
    features: [
      "Design responsive et moderne",
      "Optimisation SEO avancée",
      "Temps de chargement optimisé",
      "Interface d'administration intuitive",
      "Certificat SSL inclus",
      "Hébergement et maintenance",
    ],
    gradient: "from-blue-500 to-cyan",
    glowColor: "shadow-blue-500/20",
  },
  {
    id: "e-commerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Vendez en ligne efficacement",
    description:
      "Des boutiques en ligne complètes intégrant paiement sécurisé, gestion de stock, logistique et outils marketing. Nous créons des expériences d'achat fluides qui maximisent votre taux de conversion.",
    features: [
      "Paiement sécurisé multi-devises",
      "Gestion de catalogue avancée",
      "Intégration logistique",
      "Tableau de bord analytique",
      "Outils marketing intégrés",
      "Application mobile responsive",
    ],
    gradient: "from-emerald-500 to-teal-400",
    glowColor: "shadow-emerald-500/20",
  },
  {
    id: "plateformes",
    icon: Layers,
    title: "Plateformes Sur Mesure",
    subtitle: "Des solutions métier personnalisées",
    description:
      "Nous développons des applications web et mobiles sur mesure pour digitaliser vos processus métier. De l'ERP au CRM, nous créons la solution qui correspond exactement à vos besoins.",
    features: [
      "Analyse et conseil fonctionnel",
      "Architecture scalable et sécurisée",
      "Intégration API et systèmes existants",
      "Interface utilisateur intuitive",
      "Tests et assurance qualité",
      "Formation et documentation",
    ],
    gradient: "from-accent to-purple-500",
    glowColor: "shadow-accent/20",
  },
  {
    id: "voip",
    icon: Phone,
    title: "VoIP & Téléphonie",
    subtitle: "Communication nouvelle génération",
    description:
      "Modernisez votre téléphonie avec nos solutions VoIP. Réduisez vos coûts tout en bénéficiant de fonctionnalités avancées : visioconférence, standard virtuel, messagerie unifiée.",
    features: [
      "Standard téléphonique virtuel (IPBX)",
      "Visioconférence HD",
      "Messagerie unifiée",
      "Numéros virtuels internationaux",
      "Intégration CRM",
      "Application mobile VoIP",
    ],
    gradient: "from-orange-500 to-amber-400",
    glowColor: "shadow-orange-500/20",
  },
  {
    id: "support",
    icon: Monitor,
    title: "Parc Informatique & Support",
    subtitle: "Votre IT entre de bonnes mains",
    description:
      "Nous prenons en charge la gestion complète de votre parc informatique : installation, maintenance, sécurité et support utilisateur.",
    features: [
      "Audit et inventaire du parc",
      "Maintenance préventive et curative",
      "Support technique niveaux 1, 2 et 3",
      "Sécurité et sauvegarde des données",
      "Gestion des licences logicielles",
      "Supervision et monitoring 24/7",
    ],
    gradient: "from-rose-500 to-pink-400",
    glowColor: "shadow-rose-500/20",
  },
  {
    id: "conseil",
    icon: Lightbulb,
    title: "Conseil & Stratégie Digitale",
    subtitle: "Pilotez votre transformation numérique",
    description:
      "Bénéficiez de notre expertise pour définir votre stratégie digitale. Nous analysons votre situation, identifions les opportunités et vous accompagnons dans la mise en œuvre.",
    features: [
      "Audit digital complet",
      "Stratégie de transformation numérique",
      "Cahier des charges et spécifications",
      "Pilotage de projet (MOA/MOE)",
      "Formation des équipes",
      "Veille technologique",
    ],
    gradient: "from-cyan to-blue-500",
    glowColor: "shadow-cyan/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan/10 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Nos Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Des solutions digitales{" "}
              <span className="gradient-text">complètes</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Du site web à la gestion de parc informatique, en passant par la
              VoIP et le conseil stratégique, Digitedia couvre l&apos;ensemble de
              vos besoins numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} items-center justify-center mb-8 shadow-xl ${service.glowColor}`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-accent-light text-sm font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/20"
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="bg-primary-light/50 rounded-2xl p-8 border border-white/5">
                      <h3 className="font-semibold text-white mb-6 text-lg">
                        Ce qui est inclus
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-accent-light" />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit. Nous analyserons vos besoins
            et vous proposerons la solution la plus adaptée.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25"
          >
            Parlons de votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
