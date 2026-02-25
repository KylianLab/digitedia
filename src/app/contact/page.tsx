"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@digitedia.fr",
    description: "Nous répondons sous 24h",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "01 23 45 67 89",
    description: "Lun-Ven, 9h-18h",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Paris, France",
    description: "Sur place ou en visio",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Ven : 9h-18h",
    description: "Support urgent le week-end",
    gradient: "from-orange-500 to-amber-400",
  },
];

const serviceOptions = [
  "Site Vitrine",
  "E-Commerce",
  "Plateforme Sur Mesure",
  "VoIP & Téléphonie",
  "Parc Informatique & Support",
  "Conseil & Stratégie Digitale",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-6">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Parlons de votre{" "}
              <span className="gradient-text">projet</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Une question, un projet, un besoin d&apos;accompagnement ?
              Contactez-nous et recevez une réponse personnalisée sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-6 bg-primary-light/50 rounded-2xl border border-white/5 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">{info.title}</p>
                  <p className="text-gray-300 font-medium text-sm">{info.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Message envoyé !
              </h2>
              <p className="text-gray-400 text-lg max-w-md mx-auto">
                Merci pour votre message. Notre équipe vous recontactera dans
                les plus brefs délais, généralement sous 24 heures.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Sparkles className="w-4 h-4 text-accent-light" />
                  <span className="text-accent-light text-sm font-medium">
                    Devis gratuit et sans engagement
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Demandez votre <span className="gradient-text">devis gratuit</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Remplissez le formulaire et nous vous recontacterons
                  rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-primary-light/30 rounded-3xl p-8 sm:p-12 border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                      placeholder="jean@entreprise.fr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                    >
                      <option value="" className="bg-primary">Sélectionnez un service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-primary">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all"
                    >
                      <option value="" className="bg-primary">Sélectionnez une fourchette</option>
                      <option value="<3000" className="bg-primary">Moins de 3 000 &euro;</option>
                      <option value="3000-10000" className="bg-primary">3 000 - 10 000 &euro;</option>
                      <option value="10000-30000" className="bg-primary">10 000 - 30 000 &euro;</option>
                      <option value="30000-50000" className="bg-primary">30 000 - 50 000 &euro;</option>
                      <option value=">50000" className="bg-primary">Plus de 50 000 &euro;</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 outline-none transition-all resize-none"
                    placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent/25"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma demande
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
