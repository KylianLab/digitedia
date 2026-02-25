import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Le blog Digitedia : actualités tech, conseils digitaux, guides pratiques et retours d'expérience pour votre transformation numérique.",
};

const featuredPost = {
  title: "Comment réussir la refonte de son site web en 2025",
  excerpt:
    "La refonte d'un site web est un projet stratégique. Découvrez notre méthodologie en 7 étapes pour transformer votre présence en ligne sans perdre votre référencement.",
  author: "Alexandre Dupont",
  date: "15 janvier 2025",
  readTime: "8 min de lecture",
  category: "Stratégie Digitale",
};

const posts = [
  {
    title: "VoIP en entreprise : 5 avantages concrets pour votre productivité",
    excerpt:
      "La téléphonie IP révolutionne la communication d'entreprise. Voici 5 bénéfices concrets que nos clients constatent après la migration.",
    author: "Thomas Martin",
    date: "8 janvier 2025",
    readTime: "5 min de lecture",
    category: "VoIP & Téléphonie",
  },
  {
    title: "E-commerce : les tendances à suivre cette année",
    excerpt:
      "IA générative, commerce composable, social commerce... Quelles tendances vont impacter votre boutique en ligne ?",
    author: "Marie Laurent",
    date: "2 janvier 2025",
    readTime: "6 min de lecture",
    category: "E-Commerce",
  },
  {
    title: "Sécurité informatique : les 10 réflexes essentiels pour les PME",
    excerpt:
      "Les PME sont de plus en plus ciblées par les cyberattaques. Découvrez les 10 mesures indispensables pour protéger votre entreprise.",
    author: "Thomas Martin",
    date: "20 décembre 2024",
    readTime: "7 min de lecture",
    category: "Sécurité IT",
  },
  {
    title: "UX Design : comment créer une expérience utilisateur mémorable",
    excerpt:
      "Un bon design ne se voit pas, il se ressent. Nos conseils pour concevoir des interfaces qui convertissent et fidélisent.",
    author: "Sophie Bernard",
    date: "12 décembre 2024",
    readTime: "6 min de lecture",
    category: "Design & UX",
  },
  {
    title:
      "Pourquoi migrer vers le cloud ? Guide complet pour les entreprises",
    excerpt:
      "Le cloud offre flexibilité, scalabilité et réduction des coûts. Mais comment réussir sa migration ? Notre guide étape par étape.",
    author: "Marie Laurent",
    date: "5 décembre 2024",
    readTime: "10 min de lecture",
    category: "Infrastructure",
  },
  {
    title: "SEO en 2025 : les stratégies qui fonctionnent vraiment",
    excerpt:
      "Avec l'évolution constante des algorithmes, quelles sont les stratégies SEO qui génèrent vraiment du trafic qualifié ?",
    author: "Alexandre Dupont",
    date: "28 novembre 2024",
    readTime: "8 min de lecture",
    category: "SEO & Marketing",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Actualités, conseils & expertise digitale
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Retrouvez nos articles, guides et retours d&apos;expérience pour
              vous accompagner dans votre transformation numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-accent p-12 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                    Article à la une
                  </span>
                  <div className="mt-6 w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-6xl font-bold text-white/30">D</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-secondary text-accent text-sm font-medium rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-accent font-medium cursor-pointer hover:gap-2 transition-all">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-100 p-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent/30">D</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-accent text-sm font-medium cursor-pointer group-hover:gap-2 transition-all">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Restez informé
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre
            boîte mail. Pas de spam, uniquement du contenu de qualité.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="flex-1 px-4 py-3 rounded-lg border-0 outline-none focus:ring-2 focus:ring-accent-light"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
