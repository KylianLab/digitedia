import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Heart,
  Zap,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Digitedia, votre agence digitale de confiance. Notre équipe d'experts vous accompagne dans votre transformation numérique.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque projet, avec des standards élevés et une attention méticuleuse aux détails.",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: Heart,
    title: "Engagement",
    description:
      "Nous nous engageons pleinement auprès de nos clients, avec disponibilité et réactivité.",
    gradient: "from-rose-500 to-magenta",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Nous restons à la pointe des technologies pour offrir des solutions modernes et performantes.",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Handshake,
    title: "Transparence",
    description:
      "Communication claire, tarification transparente et suivi régulier pour des relations de confiance.",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const team = [
  {
    name: "Alexandre Dupont",
    role: "Directeur Général & Fondateur",
    description:
      "15 ans d'expérience dans le digital. Passionné par l'entrepreneuriat et la transformation numérique.",
    gradient: "from-accent to-cyan",
  },
  {
    name: "Marie Laurent",
    role: "Directrice Technique",
    description:
      "Experte en architecture logicielle et développement full-stack. Pilote l'ensemble des projets techniques.",
    gradient: "from-cyan to-blue-500",
  },
  {
    name: "Thomas Martin",
    role: "Responsable Infrastructure & VoIP",
    description:
      "Spécialiste réseau et téléphonie d'entreprise, il gère l'infrastructure et les solutions VoIP.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    name: "Sophie Bernard",
    role: "Directrice Artistique",
    description:
      "Créative et passionnée, elle conçoit des interfaces élégantes et des expériences mémorables.",
    gradient: "from-magenta to-rose-500",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Création de Digitedia",
    description:
      "Lancement de l'agence avec une vision : accompagner les PME dans leur transformation digitale.",
  },
  {
    year: "2016",
    title: "Expansion des services",
    description:
      "Ajout des services VoIP et gestion de parc informatique pour une solution complète.",
  },
  {
    year: "2019",
    title: "50ème client accompagné",
    description:
      "Un cap symbolique qui confirme la confiance de nos clients et la qualité de nos services.",
  },
  {
    year: "2022",
    title: "Lancement du pôle conseil",
    description:
      "Création d'une équipe dédiée au conseil et à la stratégie digitale.",
  },
  {
    year: "2024",
    title: "150+ projets réalisés",
    description:
      "Digitedia continue de grandir avec la même passion et le même engagement.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-magenta/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              À propos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Une agence à taille humaine, au service de{" "}
              <span className="gradient-text">votre ambition</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Depuis notre création, nous mettons notre expertise et notre
              passion au service des entreprises qui veulent tirer le meilleur
              du numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story + Stats */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
                Notre Histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                De la passion du digital à l&apos;excellence
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Digitedia est née de la conviction qu&apos;une entreprise, quelle
                  que soit sa taille, mérite un accompagnement digital de
                  qualité.
                </p>
                <p>
                  C&apos;est pourquoi nous avons créé une agence à taille humaine,
                  capable de proposer des solutions complètes — du site web à
                  l&apos;infrastructure réseau — avec une approche personnalisée.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe pluridisciplinaire accompagne des
                  entreprises de tous secteurs avec la même exigence de qualité.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, value: "150+", label: "Projets livrés", gradient: "from-accent to-cyan" },
                { icon: Users, value: "80+", label: "Clients actifs", gradient: "from-cyan to-blue-500" },
                { icon: TrendingUp, value: "10+", label: "Années d'expérience", gradient: "from-emerald-500 to-teal-400" },
                { icon: Heart, value: "98%", label: "Taux de satisfaction", gradient: "from-magenta to-rose-500" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative bg-primary-light/50 rounded-2xl p-8 border border-white/5 text-center card-hover ${
                    i === 0 ? "translate-y-4" : i === 3 ? "-translate-y-4" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 dot-pattern opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Nos Valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Les principes qui <span className="gradient-text">nous guident</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-primary-light/50 rounded-2xl p-8 border border-white/5 text-center card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Notre Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Les étapes clés de Digitedia
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-cyan to-magenta" />

              <div className="space-y-12">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex gap-8">
                    <div className="shrink-0 w-16 h-16 bg-primary-light border border-white/10 rounded-2xl flex items-center justify-center font-bold text-accent-light text-sm z-10 shadow-lg shadow-accent/10">
                      {milestone.year}
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Notre Équipe
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Les talents derrière <span className="gradient-text">Digitedia</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-primary-light/50 rounded-2xl p-8 border border-white/5 text-center card-hover"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-light font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.description}
                </p>
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
            Envie de travailler <span className="gradient-text">avec nous</span> ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons ensemble comment Digitedia
            peut vous aider à atteindre vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25"
          >
            Prendre contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
