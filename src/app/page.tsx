import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Layers,
  Phone,
  Monitor,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Des sites web élégants et performants qui reflètent l'image de votre entreprise et convertissent vos visiteurs en clients.",
    href: "/services#sites-vitrines",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Des boutiques en ligne complètes et optimisées pour maximiser vos ventes et offrir une expérience d'achat fluide.",
    href: "/services#e-commerce",
  },
  {
    icon: Layers,
    title: "Plateformes Sur Mesure",
    description:
      "Des solutions logicielles personnalisées pour digitaliser et automatiser vos processus métier.",
    href: "/services#plateformes",
  },
  {
    icon: Phone,
    title: "VoIP & Téléphonie",
    description:
      "Des solutions de téléphonie d'entreprise modernes pour améliorer votre communication interne et externe.",
    href: "/services#voip",
  },
  {
    icon: Monitor,
    title: "Parc Informatique & Support",
    description:
      "Gestion complète de votre infrastructure IT avec un support réactif pour assurer la continuité de vos activités.",
    href: "/services#support",
  },
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie",
    description:
      "Un accompagnement stratégique pour définir et piloter votre transformation numérique avec succès.",
    href: "/services#conseil",
  },
];

const stats = [
  { value: "150+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "10+", label: "Années d'expérience" },
  { value: "24/7", label: "Support disponible" },
];

const reasons = [
  {
    icon: Users,
    title: "Équipe pluridisciplinaire",
    description:
      "Des experts en développement, design, infrastructure et stratégie digitale réunis sous un même toit.",
  },
  {
    icon: Award,
    title: "Qualité garantie",
    description:
      "Des standards élevés de qualité, des tests rigoureux et un suivi continu de chaque projet.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Des délais respectés et une équipe disponible pour répondre rapidement à vos besoins.",
  },
  {
    icon: Shield,
    title: "Accompagnement durable",
    description:
      "Un partenariat sur le long terme avec maintenance, évolutions et support technique continu.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-light rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-4 animate-fade-in-up">
              Agence Digitale Full-Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Votre partenaire pour une{" "}
              <span className="text-accent-light">transformation numérique</span>{" "}
              réussie
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
              De la création de sites web à la gestion de votre parc
              informatique, Digitedia vous accompagne à chaque étape de votre
              croissance digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-light text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border border-white/20"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Nos Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Des solutions complètes pour votre entreprise
            </h2>
            <p className="text-gray-500 text-lg">
              De la conception à la maintenance, nous couvrons l&apos;ensemble de
              vos besoins numériques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">
                Pourquoi Digitedia
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Un partenaire fiable pour vos projets numériques
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Depuis notre création, nous avons accompagné des dizaines
                d&apos;entreprises dans leur transformation digitale. Notre
                approche combine expertise technique, créativité et rigueur pour
                livrer des solutions qui font la différence.
              </p>
              <ul className="space-y-4">
                {[
                  "Audit gratuit de votre présence digitale",
                  "Solutions sur mesure adaptées à votre budget",
                  "Méthodologie agile et transparente",
                  "Support et maintenance inclus",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet.
            Notre équipe vous répondra sous 24 heures avec une proposition
            personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Contactez-nous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-white/40"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
