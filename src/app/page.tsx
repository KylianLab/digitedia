import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />

      {/* Floating particles */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-magenta/60 rounded-full animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-10 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-accent-light" />
          <span className="text-accent-light text-sm font-medium">
            Agence Digitale
          </span>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center shadow-lg shadow-accent/30">
            <span className="text-white font-bold text-3xl">D</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Digit<span className="gradient-text">edia</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-400 mb-4 leading-relaxed animate-fade-in-up animation-delay-400">
          Votre partenaire pour une{" "}
          <span className="text-white font-medium">transformation numérique</span>{" "}
          réussie.
        </p>
        <p className="text-gray-500 mb-12 animate-fade-in-up animation-delay-400">
          Sites web &middot; E-Commerce &middot; Plateformes sur mesure &middot; VoIP &middot; IT
        </p>

        {/* CTA - Email */}
        <div className="animate-fade-in-up animation-delay-600">
          <a
            href="mailto:contact@updaty.be"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 text-lg"
          >
            <Mail className="w-5 h-5" />
            contact@updaty.be
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
