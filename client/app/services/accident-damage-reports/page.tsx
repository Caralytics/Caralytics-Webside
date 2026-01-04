"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { Car, FileText, Phone, Send, ShieldCheck } from "lucide-react";
import Link from "next/link";

const AccidentDamageReportsPage = () => {
  const steps = [
    {
      icon: Phone,
      title: "Kontaktaufnahme",
      description: "Kurze Ersteinschätzung und Terminvereinbarung.",
    },
    {
      icon: Car,
      title: "Besichtigung",
      description:
        "Begutachtung des Fahrzeugs vor Ort, in der Werkstatt oder nach Absprache.",
    },
    {
      icon: FileText,
      title: "Gutachtenerstellung",
      description:
        "Strukturiertes, nachvollziehbares Gutachten mit klarer technischer Herleitung.",
    },
    {
      icon: Send,
      title: "Übergabe & Unterstützung",
      description:
        "Sie erhalten das Gutachten digital. Auf Wunsch unterstützen wir bei der Weiterleitung an Versicherung oder Anwalt.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-brand-cloud-gray/30 via-white to-brand-cloud-gray/30 text-brand-deep-navy pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Unfall-Schadengutachten
            </h1>
            <p className="text-lg md:text-xl text-brand-deep-navy font-medium max-w-2xl mx-auto leading-relaxed">
              Unabhängige Beweissicherung und technische Bewertung – erstellt
              vom Fahrzeugingenieur.
            </p>
          </div>
        </FadeIn>

        {/* What is a Damage Report? */}
        <FadeIn direction="up" delay={200}>
          <Card className="bg-white border-none shadow-lg mb-24 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="relative md:col-span-2 bg-brand-deep-navy p-6 md:p-10 flex items-center justify-center text-white min-h-[200px]">
                <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20" />
                <h2 className="relative z-10 text-3xl font-bold text-white text-center wrap-break-word w-full">
                  Was ist ein Unfall-Schadengutachten?
                </h2>
              </div>
              <div className="md:col-span-3 p-6 md:p-12 flex items-center">
                <p className="text-lg text-brand-graphite leading-loose">
                  Ein Unfall-Schadengutachten dokumentiert den Zustand Ihres
                  Fahrzeugs nach einem Unfall fachgerecht und nachvollziehbar.
                  Es enthält alle relevanten technischen und wirtschaftlichen
                  Positionen, die für die Schadenregulierung erforderlich sind.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Liability Damage (Haftpflichtschaden) */}
        <div className="mb-24">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-navy mb-6">
                So läuft der Ablauf ab
              </h2>
              <p className="text-lg text-brand-graphite leading-relaxed">
                If another party is at fault, their insurance pays. We guide you
                through every step.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line (Desktop) - purely visual guide */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-electric-purple via-brand-electric-purple/30 to-transparent hidden md:block -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <FadeIn
                  key={index}
                  direction="up"
                  delay={index * 100}
                  className="relative"
                >
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Content */}
                    <div className="flex-1 w-full">
                      <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl font-bold text-brand-deep-navy flex items-center gap-3">
                            <span className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-brand-electric-purple text-white text-sm">
                              {index + 1}
                            </span>
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-brand-graphite">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-brand-cloud-gray shadow-lg text-brand-electric-purple">
                      <step.icon className="w-8 h-8" />
                    </div>

                    {/* Spacer for alternate side */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Comprehensive Damage & Guarantee Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FadeIn direction="up" delay={100}>
            <Card className="h-full border-none shadow-lg bg-brand-deep-navy text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-electric-purple rounded-full opacity-20 blur-3xl"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Umfassende Schadensregulierung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-cloud-gray leading-relaxed">
                  Bei selbstverschuldeten Schäden, Diebstahl oder Sturmschäden
                  erstellen wir detaillierte Kostenvoranschläge oder
                  vollständige Berichte gemäß Ihrer Versicherungspolice. Wir
                  stellen sicher, dass alle Schäden korrekt dokumentiert werden,
                  um eine reibungslose Schadensabwicklung mit Ihrem Versicherer
                  zu gewährleisten.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <Card className="h-full border-brand-electric-purple/20 shadow-lg bg-linear-to-br from-white to-brand-cloud-gray/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-electric-purple">
                  Unsere Garantie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-deep-navy leading-relaxed font-medium">
                  Wenn Sie unverschuldet in den Unfall verwickelt sind,
                  übernimmt die gegnerische Versicherung unsere Kosten zu 100 %.
                  <br />
                  <br />
                  Für Sie ist unser Service komplett{" "}
                  <span className="text-brand-electric-purple font-bold text-lg">
                    kostenlos
                  </span>
                  .
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* CTA - Added this section */}
        <FadeIn direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-brand-deep-navy text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-electric-purple rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-brand-electric-purple rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Benötigen Sie ein professionelles{" "}
                  <span className="text-brand-electric-purple">
                    Schadensgutachten?
                  </span>
                </h2>
                <p className="text-lg text-brand-cloud-gray/80">
                  Kontaktieren Sie uns umgehend für eine fachkundige
                  Begutachtung und sichern Sie sich die Ihnen zustehende
                  Entschädigung.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto flex justify-center md:block">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 md:px-10 hover:bg-brand-cloud-gray hover:scale-105 transition-all shadow-lg rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>Jetzt kontaktieren</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AccidentDamageReportsPage;
