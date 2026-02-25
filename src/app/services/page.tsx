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
    color: "bg-blue-50",
    iconColor: "text-blue-600",
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
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "plateformes",
    icon: Layers,
    title: "Plateformes Sur Mesure",
    subtitle: "Des solutions métier personnalisées",
    description:
      "Nous développons des applications web et mobiles sur mesure pour digitaliser vos processus métier. De l'ERP au CRM en passant par les outils collaboratifs, nous créons la solution qui correspond exactement à vos besoins.",
    features: [
      "Analyse et conseil fonctionnel",
      "Architecture scalable et sécurisée",
      "Intégration API et systèmes existants",
      "Interface utilisateur intuitive",
      "Tests et assurance qualité",
      "Formation et documentation",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "voip",
    icon: Phone,
    title: "VoIP & Téléphonie",
    subtitle: "Communication d'entreprise nouvelle génération",
    description:
      "Modernisez votre téléphonie avec nos solutions VoIP. Réduisez vos coûts de communication tout en bénéficiant de fonctionnalités avancées : visioconférence, standard virtuel, messagerie unifiée et bien plus.",
    features: [
      "Standard téléphonique virtuel (IPBX)",
      "Visioconférence HD",
      "Messagerie unifiée",
      "Numéros virtuels nationaux et internationaux",
      "Intégration CRM",
      "Application mobile VoIP",
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "support",
    icon: Monitor,
    title: "Parc Informatique & Support",
    subtitle: "Votre IT entre de bonnes mains",
    description:
      "Nous prenons en charge la gestion complète de votre parc informatique : installation, maintenance, sécurité et support utilisateur. Concentrez-vous sur votre cœur de métier, nous gérons votre IT.",
    features: [
      "Audit et inventaire du parc",
      "Maintenance préventive et curative",
      "Support technique niveaux 1, 2 et 3",
      "Sécurité et sauvegarde des données",
      "Gestion des licences logicielles",
      "Supervision et monitoring 24/7",
    ],
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: "conseil",
    icon: Lightbulb,
    title: "Conseil & Stratégie Digitale",
    subtitle: "Pilotez votre transformation numérique",
    description:
      "Bénéficiez de notre expertise pour définir votre stratégie digitale. Nous analysons votre situation actuelle, identifions les opportunités et vous accompagnons dans la mise en œuvre de votre feuille de route numérique.",
    features: [
      "Audit digital complet",
      "Stratégie de transformation numérique",
      "Cahier des charges et spécifications",
      "Pilotage de projet (MOA/MOE)",
      "Formation des équipes",
      "Veille technologique",
    ],
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-3">Nos Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Des solutions digitales complètes pour votre entreprise
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Du site web à la gestion de parc informatique, en passant par la
              VoIP et le conseil stratégique, Digitedia couvre l&apos;ensemble de
              vos besoins numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 ${service.color} rounded-full mb-6`}
                    >
                      <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                      <span className={`font-medium text-sm ${service.iconColor}`}>
                        {service.subtitle}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-6 text-lg">
                        Ce qui est inclus
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
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
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit. Nous analyserons vos besoins
            et vous proposerons la solution la plus adaptée à votre situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg"
          >
            Parlons de votre projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
