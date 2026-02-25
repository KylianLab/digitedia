import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digitedia | Agence Digitale - Sites Web, E-Commerce, VoIP & IT",
    template: "%s | Digitedia",
  },
  description:
    "Digitedia, votre agence digitale experte en création de sites web, e-commerce, développement de plateformes, VoIP et gestion de parc informatique. Accompagnement sur mesure pour votre transformation numérique.",
  keywords: [
    "agence digitale",
    "création site web",
    "e-commerce",
    "développement plateforme",
    "VoIP",
    "parc informatique",
    "support IT",
    "transformation numérique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
