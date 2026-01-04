"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { Check, Euro, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";

const LeasingReturnCheckPage = () => {
  const timelineSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Schritt 1: Unabhängige Prüfung",
      description:
        "Vor der Fahrzeugrückgabe führen unsere Experten eine gründliche und unvoreingenommene Prüfung durch.",
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Schritt 2: Schadensidentifizierung",
      description:
        "Wir identifizieren und dokumentieren alle Gebrauchsspuren und unterscheiden zwischen normalem Verschleiß und tatsächlichen Schäden.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Schritt 3: Kostengünstige Reparaturen",
      description:
        "Wir empfehlen Ihnen intelligente und kostengünstige Reparaturen für alle festgestellten Schäden und sparen Ihnen so Geld.",
    },
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Schritt 4: Sorglos zurückgeben",
      description:
        "Geben Sie Ihr Fahrzeug mit einem zertifizierten Gutachten zurück. So vermeiden Sie überteuerte Reparaturen in Vertragswerkstätten und profitieren von einem fairen Ablauf.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-brand-cloud-gray/30 via-white to-brand-cloud-gray/30 text-brand-deep-navy pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Fahrzeugrückgabe-Check
            </h1>
            <p className="text-lg md:text-xl text-brand-deep-navy font-medium max-w-2xl mx-auto leading-relaxed">
              Vermeiden Sie unerwartete Kosten und sichern Sie sich eine faire
              Leasingrückgabe mit unserem unabhängigen Vorab-Check.
            </p>
          </div>
        </FadeIn>

        {/* Intro Block */}
        <FadeIn direction="up" delay={100} className="mb-20">
          <Card className="bg-white border-none shadow-lg p-6 md:p-12 max-w-5xl mx-auto text-center">
            <p className="text-xl text-brand-deep-navy leading-relaxed font-medium">
              Das Ende eines Leasingvertrags kann oft mit unvorhergesehenen
              Kosten verbunden sein. Autohäuser berechnen mitunter hohe Preise
              für geringfügige Gebrauchsspuren.
            </p>
            <p className="mt-6 text-lg text-brand-graphite leading-relaxed">
              Ein Carlytics-Vorab-Check bietet Ihnen eine unabhängige,
              zertifizierte Bewertung des Fahrzeugzustands. So behalten Sie die
              Kontrolle und sparen Geld.
            </p>
          </Card>
        </FadeIn>

        {/* Why it matters */}
        <div className="mb-24">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center text-brand-deep-navy mb-8">
              Die Vorteile eines Vorab-Checks
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-brand-deep-navy text-white border-none shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                  <ShieldCheck className="w-16 h-16 text-brand-electric-purple mb-6" />
                  <h3 className="text-xl font-bold mb-4">Faire Bewertung</h3>
                  <p className="text-brand-cloud-gray">
                    Wir unterscheiden zwischen akzeptablen Gebrauchsspuren und
                    tatsächlichen Schäden und schaffen damit eine transparente
                    Grundlage für den Rückgabeprozess.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-brand-electric-purple text-white border-none shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                  <Euro className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-xl font-bold mb-4">Kosteneinsparungen</h3>
                  <p className="text-white/90">
                    Verhindern überhöhte Reparaturrechnungen der
                    Leasinggesellschaft und stellen sicher, dass Ihre
                    Endabrechnung korrekt und nachvollziehbar ist.
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center text-brand-deep-navy mb-16">
              So funktioniert es
            </h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <FadeIn key={index} direction="up" delay={index * 150}>
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-white group overflow-hidden">
                    <div className="h-2 bg-brand-electric-purple w-0 group-hover:w-full transition-all duration-500"></div>
                    <CardContent className="p-5 md:p-6 text-center flex flex-col items-center h-full">
                      <div className="mb-6 p-4 rounded-full bg-brand-cloud-gray/30 text-brand-deep-navy group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-deep-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-graphite leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Checklist/Report Mockup */}
        <FadeIn direction="up" className="mb-24">
          <div className="max-w-4xl mx-auto bg-brand-surface border border-brand-border shadow-xl p-6 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 transition-all duration-200 hover:shadow-2xl">
            <div className="shrink-0 p-6 bg-brand-electric-purple/10 rounded-full">
              <ShieldCheck size={64} className="text-brand-electric-purple" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-deep-navy">
                Ihr zertifizierter Rückgabebericht
              </h3>
              <p className="mt-4 text-lg text-brand-graphite leading-relaxed">
                Sie erhalten einen detaillierten, TÜV-zertifizierten Bericht,
                der den Zustand Ihres Fahrzeugs mit Fotos und klaren
                Beurteilungen dokumentiert. Dieser Bericht ist Ihre Grundlage
                für eine faire und transparente Rückgabe.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-brand-deep-navy text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-electric-purple rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-brand-electric-purple rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Zahlen Sie nicht mehr als{" "}
                  <span className="text-brand-electric-purple">nötig.</span>
                </h2>
                <p className="text-lg text-brand-cloud-gray/80">
                  Buchen Sie noch heute Ihren Rückgabecheck und geben Sie Ihr
                  Leasingfahrzeug sorgenfrei zurück.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 md:px-10 hover:bg-brand-cloud-gray hover:scale-105 transition-all shadow-lg rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>Rückgabecheck buchen</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LeasingReturnCheckPage;
