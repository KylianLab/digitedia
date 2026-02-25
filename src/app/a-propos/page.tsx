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
      "Nous visons l'excellence dans chaque projet, avec des standards de qualité élevés et une attention méticuleuse aux détails.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description:
      "Nous nous engageons pleinement auprès de nos clients, avec une disponibilité et une réactivité qui font la différence.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Nous restons à la pointe des technologies pour offrir à nos clients des solutions modernes et performantes.",
  },
  {
    icon: Handshake,
    title: "Transparence",
    description:
      "Communication claire, tarification transparente et suivi régulier : nous construisons des relations de confiance durables.",
  },
];

const team = [
  {
    name: "Alexandre Dupont",
    role: "Directeur Général & Fondateur",
    description:
      "15 ans d'expérience dans le digital. Passionné par l'entrepreneuriat et la transformation numérique des entreprises.",
  },
  {
    name: "Marie Laurent",
    role: "Directrice Technique",
    description:
      "Experte en architecture logicielle et en développement web full-stack. Elle pilote l'ensemble des projets techniques.",
  },
  {
    name: "Thomas Martin",
    role: "Responsable Infrastructure & VoIP",
    description:
      "Spécialiste réseau et téléphonie d'entreprise, il gère la partie infrastructure et les solutions VoIP.",
  },
  {
    name: "Sophie Bernard",
    role: "Directrice Artistique",
    description:
      "Créative et passionnée, elle conçoit des interfaces élégantes et des expériences utilisateur mémorables.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Création de Digitedia",
    description:
      "Lancement de l'agence avec une vision claire : accompagner les PME dans leur transformation digitale.",
  },
  {
    year: "2016",
    title: "Expansion des services",
    description:
      "Ajout des services VoIP et gestion de parc informatique pour offrir une solution complète.",
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
      "Création d'une équipe dédiée au conseil et à la stratégie digitale pour un accompagnement 360°.",
  },
  {
    year: "2024",
    title: "150+ projets réalisés",
    description:
      "Digitedia continue de grandir avec toujours la même passion et le même engagement envers ses clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-3">À propos</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Une agence digitale à taille humaine, au service de votre ambition
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Depuis notre création, nous mettons notre expertise et notre
              passion au service des entreprises qui souhaitent tirer le meilleur
              du numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Notre Histoire</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                De la passion du digital à l&apos;excellence du service
              </h2>
              <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
                <p>
                  Digitedia est née de la conviction qu&apos;une entreprise, quelle
                  que soit sa taille, mérite un accompagnement digital de
                  qualité. Trop souvent, les PME et TPE se retrouvent face à des
                  solutions inadaptées ou des prestataires qui ne comprennent pas
                  leurs enjeux.
                </p>
                <p>
                  C&apos;est pourquoi nous avons créé une agence à taille humaine,
                  capable de proposer des solutions complètes — du site web à
                  l&apos;infrastructure réseau — avec un interlocuteur unique et une
                  approche personnalisée.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe pluridisciplinaire accompagne des
                  entreprises de tous secteurs dans leur transformation
                  numérique, avec toujours la même exigence de qualité et la
                  même proximité.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <Award className="w-10 h-10 mb-3" />
                <p className="text-3xl font-bold mb-1">150+</p>
                <p className="text-blue-100 text-sm">Projets livrés</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <Users className="w-10 h-10 text-accent mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">80+</p>
                <p className="text-gray-500 text-sm">Clients actifs</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <TrendingUp className="w-10 h-10 text-accent mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">10+</p>
                <p className="text-gray-500 text-sm">Années d&apos;expérience</p>
              </div>
              <div className="bg-primary text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <Heart className="w-10 h-10 mb-3" />
                <p className="text-3xl font-bold mb-1">98%</p>
                <p className="text-gray-300 text-sm">Taux de satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Nos Valeurs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les principes qui nous guident
            </h2>
            <p className="text-gray-500 text-lg">
              Nos valeurs sont le fondement de chaque interaction, chaque projet
              et chaque décision que nous prenons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Notre Parcours</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les étapes clés de Digitedia
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-12">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex gap-8">
                    <div className="shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
      <section className="bg-gray-50 py-20 lg:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Notre Équipe</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Les talents derrière Digitedia
            </h2>
            <p className="text-gray-500 text-lg">
              Une équipe passionnée et complémentaire, unie par l&apos;envie de
              créer des solutions numériques exceptionnelles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-4">
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
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons ensemble comment Digitedia
            peut vous aider à atteindre vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Prendre contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
