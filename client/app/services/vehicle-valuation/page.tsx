"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { BarChart2, Camera, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

const VehicleValuationPage = () => {
  const valuationReasons = [
    { text: "Kauf oder Verkauf eines Fahrzeugs" },
    { text: "Erbschaft oder Schenkung" },
    { text: "Ende eines Leasingvertrags" },
    { text: "Versicherungseinstufung" },
    { text: "Streitigkeiten oder Rechtsangelegenheiten" },
    { text: "Private Vermögensverwaltung" },
  ];

  const deliverables = [
    {
      icon: <FileText className="w-10 h-10 text-brand-electric-purple" />,
      title: "Zertifizierter Wertgutachten",
      description:
        "Ein rechtsgültiges Dokument, das den Wert Ihres Fahrzeugs detailliert darlegt.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-brand-electric-purple" />,
      title: "Verkehrswert",
      description:
        "Eine präzise, ​​datenbasierte Bewertung auf Grundlage aktueller Markttrends.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-brand-electric-purple" />,
      title: "Technischer Zustand",
      description:
        "Eine umfassende Beurteilung des technischen und optischen Zustands des Fahrzeugs.",
    },
    {
      icon: <Camera className="w-10 h-10 text-brand-electric-purple" />,
      title: "Fotodokumentation",
      description:
        "Umfassende Bildaufnahmen, die den Zustand des Fahrzeugs dokumentieren.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-brand-cloud-gray/30 via-white to-brand-cloud-gray/30 text-brand-deep-navy pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Fahrzeugbewertung
            </h1>
            <p className="text-lg md:text-xl text-brand-deep-navy font-medium max-w-2xl mx-auto leading-relaxed">
              Erfahren Sie den wahren Wert Ihres Fahrzeugs mit einer
              zertifizierten, unabhängigen Bewertung von Carlytics.
            </p>
          </div>
        </FadeIn>

        {/* Main Content Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <FadeIn direction="right" className="flex items-center">
            <Card className="bg-brand-deep-navy text-white border-none shadow-xl p-6 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">
                Warum eine unabhängige Fahrzeugbewertung?
              </h2>
              <p className="text-lg text-brand-cloud-gray leading-relaxed mb-8">
                Ob Kauf, Verkauf oder die Beilegung eines Rechtsstreits – eine
                unabhängige Fahrzeugbewertung liefert Ihnen eine wichtige,
                unvoreingenommene Einschätzung des tatsächlichen Marktwerts
                Ihres Fahrzeugs.
                <br />
                <br />
                Unsere TÜV-zertifizierten Experten erstellen Gutachten, die
                Ihnen Klarheit, Sicherheit und eine starke Verhandlungsposition
                verschaffen.
              </p>
              <Button
                asChild
                variant="outline"
                className="self-start border-brand-electric-purple text-brand-electric-purple hover:bg-brand-electric-purple hover:text-white"
              >
                <Link href={APP_ROUTES.CONTACT}>Angebot anfordern</Link>
              </Button>
            </Card>
          </FadeIn>

          <FadeIn direction="left" className="space-y-6">
            <Card className="border-none shadow-md bg-white p-6 md:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-brand-deep-navy">
                  Wann immer Sie es brauchen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-4">
                  {valuationReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-brand-cloud-gray/30 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-electric-purple shrink-0" />
                      <span className="text-base text-brand-graphite font-medium">
                        {reason.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Deliverables Grid */}
        <div className="mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center text-brand-deep-navy mb-12">
              Was Sie erhalten
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <Card className="h-full border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 bg-white group">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 rounded-full bg-brand-cloud-gray/30 group-hover:bg-brand-electric-purple/10 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-deep-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-graphite leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA */}
        <FadeIn direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-brand-deep-navy text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-electric-purple rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-brand-electric-purple rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Sie möchten den wahren{" "}
                  <span className="text-brand-electric-purple">
                    Wert erfahren?
                  </span>
                </h2>
                <p className="text-lg text-brand-cloud-gray/80 mb-0">
                  Lassen Sie sich eine zertifizierte, unabhängige Bewertung
                  erstellen, die Ihnen die nötige Klarheit und
                  Entscheidungsmacht verschafft.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 md:px-10 hover:bg-brand-cloud-gray hover:scale-105 transition-all shadow-lg rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>
                    Jetzt Bewertung anfordern
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default VehicleValuationPage;
