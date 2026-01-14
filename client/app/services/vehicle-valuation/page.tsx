"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  BarChart2, 
  Camera, 
  CheckCircle, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Scale,
  Car
} from "lucide-react";
import Link from "next/link";

const VehicleValuationPage = () => {
  const valuationReasons = [
    { text: "Kauf & Verkauf", icon: TrendingUp },
    { text: "Erbschaft & Schenkung", icon: FileText },
    { text: "Leasing-Ende", icon: Car },
    { text: "Versicherungseinstufung", icon: ShieldCheckIcon },
    { text: "Rechtsstreitigkeiten", icon: Scale },
    { text: "Vermögensverwaltung", icon: BarChart2 },
  ];

  const deliverables = [
    {
      icon: FileText,
      title: "Zertifiziertes Wertgutachten",
      description: "Ein rechtsgültiges Dokument, das auch vor Gericht oder Finanzamt Bestand hat.",
    },
    {
      icon: BarChart2,
      title: "Marktwert-Analyse",
      description: "Präzise Datenbasis statt grober Schätzung – basierend auf echten Markttrends.",
    },
    {
      icon: CheckCircle,
      title: "Technischer Check",
      description: "Umfassende Prüfung der Substanz: Wir schauen auch unter das Blech.",
    },
    {
      icon: Camera,
      title: "Fotodokumentation",
      description: "Lückenlose Beweissicherung des Zustands in hochauflösender Qualität.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* --- HERO SECTION --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <BarChart2 className="w-4 h-4" />
              <span>Präzise Wertermittlung vom Ingenieur</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-deep-navy mb-8">
              Fahrzeugbewertung
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-3xl md:text-5xl mt-2 font-bold">
                Klarheit schafft Wert.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Ob Oldtimer, Sportwagen oder Fuhrpark: Erfahren Sie den wahren Marktwert 
              mit einer zertifizierten, unabhängigen Bewertung von Caralytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-deep-navy text-white hover:bg-purple-700 transition-all shadow-xl shadow-brand-deep-navy/20 h-14 px-8 text-lg rounded-full">
                  <Link href={APP_ROUTES.CONTACT}>
                    Bewertung anfordern
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
            </div>
          </div>
        </FadeIn>

        {/* --- WHY & WHEN SECTION (Modern Grid) --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32 items-stretch">
          
          {/* Left: The "Why" (Dark Card) */}
          <FadeIn direction="right" className="h-full">
            <Card className="bg-brand-deep-navy text-white border-none shadow-2xl p-8 md:p-12 h-full flex flex-col relative overflow-hidden group">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Warum eine unabhängige Bewertung?
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Online-Rechner geben nur grobe Schätzwerte. Ein echtes Gutachten berücksichtigt 
                  die <span className="text-white font-semibold">Individualität</span> Ihres Fahrzeugs: 
                  Zustand, Historie, Sonderausstattung und lokale Marktlage.
                </p>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-purple-400 w-5 h-5"/>
                        <span className="text-slate-200">Starke Verhandlungsposition beim Verkauf</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-purple-400 w-5 h-5"/>
                        <span className="text-slate-200">Rechtssicherheit bei Erbstreitigkeiten</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-purple-400 w-5 h-5"/>
                        <span className="text-slate-200">Korrekte Versicherungssummen</span>
                    </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Right: The "When" (Grid of Use Cases) */}
          <FadeIn direction="left" className="h-full">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-deep-navy mb-8">
                Einsatzbereiche
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {valuationReasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-110 transition-transform">
                        <reason.icon className="w-4 h-4" />
                    </div>
                    <span className="text-brand-deep-navy font-medium text-sm">
                      {reason.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* --- DELIVERABLES (What you get) --- */}
        <div className="mb-24">
          <FadeIn direction="up">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-brand-deep-navy">Das erhalten Sie von uns</h2>
               <p className="text-slate-600 mt-4">Mehr als nur eine Zahl. Ein vollständiges Dossier.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <Card className="h-full border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    {/* Icon with Mauve Halo */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-deep-navy group-hover:text-purple-600 group-hover:border-purple-200 transition-colors">
                            <item.icon className="w-7 h-7" />
                        </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-deep-navy mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <FadeIn direction="up">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-deep-navy shadow-2xl isolate">
            {/* Background Art */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full opacity-30 blur-[120px] -mt-20 -mr-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-20 gap-10">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Wissen, was es <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    wirklich wert ist.
                  </span>
                </h2>
                <p className="text-lg text-slate-300 mb-0">
                  Lassen Sie sich eine zertifizierte Bewertung erstellen, die Ihnen Klarheit und Sicherheit gibt.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-10 py-8 hover:bg-slate-100 hover:scale-105 transition-all shadow-xl rounded-full w-full sm:w-auto"
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

// Helper Icon Component for simplicity in the array above
function ShieldCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}

export default VehicleValuationPage;
