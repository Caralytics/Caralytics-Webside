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
      description:
        "Kurze Ersteinschätzung und Terminvereinbarung – telefonisch oder digital.",
      detail:
        "Sie schildern kurz den Unfallhergang. Auf Wunsch senden Sie erste Fotos, damit wir einschätzen können, ob ein Gutachten sinnvoll und erstattungsfähig ist.",
    },
    {
      icon: Car,
      title: "Besichtigung",
      description:
        "Begutachtung des Fahrzeugs vor Ort, in der Werkstatt oder nach Absprache.",
      detail:
        "Wir dokumentieren alle Schäden strukturiert mit Fotos, Messungen und – falls notwendig – weiterführender Diagnostik.",
    },
    {
      icon: FileText,
      title: "Gutachtenerstellung",
      description:
        "Strukturiertes Gutachten mit klarer technischer Herleitung.",
      detail:
        "Reparaturweg, Reparaturkosten, Wiederbeschaffungswert, Restwert, Wertminderung und Nutzungsausfall – alles transparent nachvollziehbar aufbereitet.",
    },
    {
      icon: Send,
      title: "Übergabe & Unterstützung",
      description:
        "Sie erhalten das Gutachten digital, auf Wunsch auch in Druckform.",
      detail:
        "Wir unterstützen bei der Weiterleitung an Versicherung oder Anwalt und stehen für Rückfragen zur Verfügung.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-brand-cloud-gray/30 via-white to-brand-cloud-gray/30 text-brand-deep-navy pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-cloud-gray px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-electric-purple" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-graphite">
                Leistung · Unfall-Schadengutachten
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-4 md:mb-6">
              Unfall-Schadengutachten
            </h1>

            <p className="text-base md:text-xl text-brand-graphite font-medium max-w-2xl mx-auto leading-relaxed">
              Unabhängige Beweissicherung und technische Bewertung – erstellt
              vom Fahrzeugingenieur, damit Ihr Schaden vollständig und korrekt
              reguliert werden kann.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-brand-cloud-gray/70 text-brand-graphite">
                0 € Kosten bei unverschuldetem Unfall – in der Regel trägt die
                gegnerische Versicherung die Gutachterkosten.
              </div>
              <div className="px-4 py-2 rounded-full bg-white/70 border border-brand-cloud-gray/60 text-brand-graphite">
                Schnell verfügbare Termine im Raum Köln & Umgebung.
              </div>
            </div>
          </div>
        </FadeIn>

        {/* What is a Damage Report? */}
        <FadeIn direction="up" delay={150}>
          <Card className="bg-white border-none shadow-lg mb-20 md:mb-24 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="relative md:col-span-2 bg-brand-deep-navy p-8 md:p-10 flex items-center justify-center text-white min-h-[220px]">
                <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 opacity-15" />
                <div className="relative z-10 space-y-3 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Was ist ein Unfall-Schadengutachten?
                  </h2>
                  <p className="text-sm md:text-base text-brand-cloud-gray">
                    Mehr als ein Kostenvoranschlag: technische Analyse, Werte
                    und rechtssichere Beweissicherung.
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-10 lg:p-12 flex items-center">
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-brand-graphite leading-relaxed">
                    Ein Unfall-Schadengutachten dokumentiert den Zustand Ihres
                    Fahrzeugs nach einem Unfall fachgerecht und nachvollziehbar.
                    Es enthält alle relevanten technischen und wirtschaftlichen
                    Positionen, die für die Schadenregulierung erforderlich sind
                    – deutlich umfangreicher als ein einfacher Kostenvoranschlag.
                  </p>

                  <ul className="space-y-1.5 text-sm md:text-base text-brand-graphite">
                    <li>• Detaillierte Schadensdokumentation und Reparaturweg</li>
                    <li>• Kalkulation der Reparaturkosten</li>
                    <li>• Ermittlung von Wiederbeschaffungswert & Restwert</li>
                    <li>• Ggf. Wertminderung und Nutzungsausfall</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Ablauf */}
        <div className="mb-20 md:mb-24">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-brand-deep-navy mb-4 md:mb-6">
                So läuft der Ablauf ab
              </h2>
              <p className="text-base md:text-lg text-brand-graphite leading-relaxed">
                Trägt die Gegenseite die Schuld, zahlt ihre Versicherung.
                Wir begleiten Sie in jedem Schritt – von der ersten Einschätzung
                bis zur Übergabe des Gutachtens.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand-electric-purple via-brand-electric-purple/30 to-transparent hidden md:block -translate-x-1/2" />

            <div className="space-y-10 md:space-y-0">
              {steps.map((step, index) => (
                <FadeIn
                  key={index}
                  direction="up"
                  delay={index * 120}
                  className="relative"
                >
                  <div
                    className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 w-full">
                      <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                        <CardHeader className="pb-1 md:pb-2">
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <CardTitle className="text-lg md:text-xl font-bold text-brand-deep-navy flex items-center gap-3">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-electric-purple text-white text-sm md:hidden">
                                {index + 1}
                              </span>
                              {step.title}
                            </CardTitle>

                            <span className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-brand-electric-purple text-white text-sm font-semibold">
                              {index + 1}
                            </span>
                          </div>

                          <p className="text-sm md:text-base text-brand-graphite">
                            {step.description}
                          </p>
                        </CardHeader>

                        <CardContent className="pt-2 md:pt-3">
                          <p className="text-sm md:text-base text-brand-graphite/90 leading-relaxed">
                            {step.detail}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative z-10 shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-brand-cloud-gray shadow-lg text-brand-electric-purple">
                      <step.icon className="w-8 h-8" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FadeIn direction="up" delay={100}>
            <Card className="h-full border-none shadow-lg bg-brand-deep-navy text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-electric-purple rounded-full opacity-20 blur-3xl" />

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Umfassende Schadensregulierung
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-brand-cloud-gray leading-relaxed">
                  Auch bei selbstverschuldeten Schäden, Diebstahl oder
                  Sturmschäden unterstützen wir Sie mit einer sauberen
                  Dokumentation für Ihre Versicherungspolice.
                </p>

                <ul className="space-y-1.5 text-sm text-brand-cloud-gray">
                  <li>• Technische und visuelle Dokumentation der Schäden</li>
                  <li>• Berichte oder Kostenvoranschläge nach Vorgabe der Police</li>
                  <li>• Strukturierte Unterlagen für eine reibungslose Abwicklung</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <Card className="h-full border-brand-electric-purple/15 shadow-lg bg-linear-to-br from-white to-brand-cloud-gray/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-electric-purple">
                  Unsere Garantie
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-brand-deep-navy leading-relaxed font-medium">
                  Wenn Sie unverschuldet in den Unfall verwickelt sind, übernimmt
                  die gegnerische Versicherung unsere Kosten in der Regel zu 100 %.
                </p>

                <p className="text-brand-deep-navy leading-relaxed">
                  Für Sie ist unser Service damit faktisch{" "}
                  <span className="text-brand-electric-purple font-bold text-lg">
                    kostenlos
                  </span>
                  – Sie erhalten ein unabhängiges Gutachten ohne finanzielle
                  Vorleistung.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-brand-deep-navy text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-electric-purple rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-brand-electric-purple rounded-full opacity-10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 lg:p-16 gap-8">
              <div className="text-center md:text-left max-w-2xl space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Benötigen Sie ein professionelles{" "}
                  <span className="text-brand-electric-purple">
                    Schadensgutachten?
                  </span>
                </h2>

                <p className="text-base md:text-lg text-brand-cloud-gray/85">
                  Melden Sie sich möglichst zeitnah nach dem Unfall. Je früher
                  der Schaden dokumentiert wird, desto besser lassen sich Ihre
                  Ansprüche später durchsetzen.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto flex flex-col items-center md:items-end gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 md:px-10 hover:bg-brand-cloud-gray hover:scale-105 transition-all shadow-lg rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>Jetzt kontaktieren</Link>
                </Button>

                <p className="text-xs md:text-sm text-brand-cloud-gray">
                  Alternativ telefonisch unter{" "}
                  <span className="font-medium">
                    +49&nbsp;170&nbsp;3577305
                  </span>{" "}
                  oder über das Kontaktformular.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AccidentDamageReportsPage;
