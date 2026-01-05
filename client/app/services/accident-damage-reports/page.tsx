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
        </Fad
