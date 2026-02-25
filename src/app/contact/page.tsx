"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@digitedia.fr",
    description: "Nous répondons sous 24h",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "01 23 45 67 89",
    description: "Lun-Ven, 9h-18h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Paris, France",
    description: "Rendez-vous sur place ou en visio",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Ven : 9h-18h",
    description: "Support urgent le week-end",
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
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Une question, un projet, un besoin d&apos;accompagnement ?
              Contactez-nous et recevez une réponse personnalisée sous 24
              heures.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{info.title}</p>
                  <p className="text-gray-700 font-medium">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
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
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Message envoyé !
              </h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Merci pour votre message. Notre équipe vous recontactera dans
                les plus brefs délais, généralement sous 24 heures.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Demandez votre devis gratuit
                </h2>
                <p className="text-gray-500 text-lg">
                  Remplissez le formulaire ci-dessous et nous vous recontacterons
                  rapidement avec une proposition personnalisée.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="jean@entreprise.fr"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="<3000">Moins de 3 000 &euro;</option>
                    <option value="3000-10000">3 000 - 10 000 &euro;</option>
                    <option value="10000-30000">10 000 - 30 000 &euro;</option>
                    <option value="30000-50000">30 000 - 50 000 &euro;</option>
                    <option value=">50000">Plus de 50 000 &euro;</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-lg"
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
