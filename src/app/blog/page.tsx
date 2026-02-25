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
      "La téléphonie IP révolutionne la communication d'entreprise. Voici 5 bénéfices concrets après la migration.",
    author: "Thomas Martin",
    date: "8 janvier 2025",
    readTime: "5 min",
    category: "VoIP & Téléphonie",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "E-commerce : les tendances à suivre cette année",
    excerpt:
      "IA générative, commerce composable, social commerce... Quelles tendances vont impacter votre boutique ?",
    author: "Marie Laurent",
    date: "2 janvier 2025",
    readTime: "6 min",
    category: "E-Commerce",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Sécurité informatique : les 10 réflexes essentiels pour les PME",
    excerpt:
      "Les PME sont ciblées par les cyberattaques. Les 10 mesures indispensables pour protéger votre entreprise.",
    author: "Thomas Martin",
    date: "20 décembre 2024",
    readTime: "7 min",
    category: "Sécurité IT",
    gradient: "from-rose-500 to-magenta",
  },
  {
    title: "UX Design : créer une expérience utilisateur mémorable",
    excerpt:
      "Un bon design ne se voit pas, il se ressent. Nos conseils pour des interfaces qui convertissent.",
    author: "Sophie Bernard",
    date: "12 décembre 2024",
    readTime: "6 min",
    category: "Design & UX",
    gradient: "from-accent to-purple-500",
  },
  {
    title:
      "Pourquoi migrer vers le cloud ? Guide complet",
    excerpt:
      "Le cloud offre flexibilité et réduction des coûts. Comment réussir sa migration ? Notre guide étape par étape.",
    author: "Marie Laurent",
    date: "5 décembre 2024",
    readTime: "10 min",
    category: "Infrastructure",
    gradient: "from-cyan to-blue-500",
  },
  {
    title: "SEO en 2025 : les stratégies qui fonctionnent",
    excerpt:
      "Quelles sont les stratégies SEO qui génèrent vraiment du trafic qualifié avec les nouveaux algorithmes ?",
    author: "Alexandre Dupont",
    date: "28 novembre 2024",
    readTime: "8 min",
    category: "SEO & Marketing",
    gradient: "from-blue-500 to-cyan",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Actualités, conseils &{" "}
              <span className="gradient-text">expertise digitale</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Retrouvez nos articles et guides pour vous accompagner dans votre
              transformation numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/50 rounded-3xl border border-white/5 overflow-hidden card-hover">
            <div className="grid lg:grid-cols-2">
              <div className="relative bg-gradient-to-br from-accent to-cyan p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative text-center">
                  <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
                    Article à la une
                  </span>
                  <div className="mt-6 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto border border-white/20">
                    <span className="text-6xl font-bold text-white/40">D</span>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium rounded-lg mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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
                <span className="inline-flex items-center text-accent-light font-medium cursor-pointer hover:gap-2 transition-all">
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
          <h2 className="text-2xl font-bold text-white mb-10">
            Derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-primary-light/50 rounded-2xl border border-white/5 overflow-hidden card-hover"
              >
                <div className={`bg-gradient-to-br ${post.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <span className="text-2xl font-bold text-white/50">D</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium rounded-lg mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-accent-light text-sm font-medium cursor-pointer group-hover:gap-2 transition-all">
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
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan/10 to-magenta/5 animate-gradient" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Restez <span className="gradient-text">informé</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre
            boîte mail. Pas de spam, uniquement du contenu de qualité.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/20"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
