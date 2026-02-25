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
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Des sites web élégants et performants qui convertissent vos visiteurs en clients.",
    href: "/services#sites-vitrines",
    gradient: "from-blue-500 to-cyan",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Des boutiques en ligne optimisées pour maximiser vos ventes.",
    href: "/services#e-commerce",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Layers,
    title: "Plateformes Sur Mesure",
    description:
      "Des solutions logicielles personnalisées pour vos processus métier.",
    href: "/services#plateformes",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: Phone,
    title: "VoIP & Téléphonie",
    description:
      "Des solutions de téléphonie modernes pour votre communication.",
    href: "/services#voip",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Monitor,
    title: "Parc IT & Support",
    description:
      "Gestion complète de votre infrastructure avec un support réactif.",
    href: "/services#support",
    gradient: "from-rose-500 to-magenta",
  },
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie",
    description:
      "Un accompagnement stratégique pour votre transformation numérique.",
    href: "/services#conseil",
    gradient: "from-cyan to-blue-500",
  },
];

const stats = [
  { value: "150+", label: "Projets réalisés", icon: Sparkles },
  { value: "98%", label: "Clients satisfaits", icon: Award },
  { value: "10+", label: "Années d'expérience", icon: Clock },
  { value: "24/7", label: "Support disponible", icon: Shield },
];

const reasons = [
  {
    icon: Users,
    title: "Équipe pluridisciplinaire",
    description:
      "Développement, design, infrastructure et stratégie digitale sous un même toit.",
  },
  {
    icon: Award,
    title: "Qualité garantie",
    description:
      "Des standards élevés, des tests rigoureux et un suivi continu.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Des délais respectés et une équipe toujours disponible.",
  },
  {
    icon: Shield,
    title: "Accompagnement durable",
    description:
      "Maintenance, évolutions et support technique sur le long terme.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />

        {/* Floating decorative elements */}
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-magenta/60 rounded-full animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-accent-light" />
              <span className="text-accent-light text-sm font-medium">
                Agence Digitale Full-Service
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-in-up animation-delay-200">
              Votre partenaire pour une{" "}
              <span className="gradient-text">transformation numérique</span>{" "}
              réussie
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              De la création de sites web à la gestion de votre parc
              informatique, Digitedia vous accompagne à chaque étape de votre
              croissance digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-cyan/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:border-accent/40 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent-light" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Nos Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Des solutions <span className="gradient-text">complètes</span> pour
              votre entreprise
            </h2>
            <p className="text-gray-400 text-lg">
              De la conception à la maintenance, nous couvrons l&apos;ensemble de
              vos besoins numériques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-primary-light/50 rounded-2xl p-8 border border-white/5 card-hover overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-accent-light font-medium text-sm group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
                Pourquoi Digitedia
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Un partenaire <span className="gradient-text">fiable</span> pour
                vos projets numériques
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Notre approche combine expertise technique, créativité et rigueur
                pour livrer des solutions qui font la différence.
              </p>
              <ul className="space-y-4">
                {[
                  "Audit gratuit de votre présence digitale",
                  "Solutions sur mesure adaptées à votre budget",
                  "Méthodologie agile et transparente",
                  "Support et maintenance inclus",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`relative bg-primary-light/50 rounded-2xl p-6 border border-white/5 card-hover ${
                    i === 0 ? "sm:translate-y-4" : i === 3 ? "sm:-translate-y-4" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan/10 to-magenta/10 animate-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Prêt à donner vie à <span className="gradient-text">votre projet</span> ?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet.
            Notre équipe vous répondra sous 24 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25"
            >
              Contactez-nous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
