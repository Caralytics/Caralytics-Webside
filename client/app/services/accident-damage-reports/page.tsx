"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  Car, 
  FileText, 
  Phone, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Info
} from "lucide-react";
import Link from "next/link";

const AccidentDamageReportsPage = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Kontaktaufnahme",
      description: "Kurze Ersteinschätzung und sofortige Terminvereinbarung.",
      highlight: "Kostenlos & Unverbindlich"
    },
    {
      icon: Car,
      title: "2. Besichtigung",
      description: "Begutachtung des Fahrzeugs vor Ort, in Ihrer Werkstatt oder bei uns.",
      highlight: "Flexibler Ort"
    },
    {
      icon: FileText,
      title: "3. Gutachtenerstellung",
      description: "Ingenieur-genaue Kalkulation und technische Beweissicherung.",
      highlight: "TÜV-Standard"
    },
    {
      icon: Send,
      title: "4. Regulierung",
      description: "Digitaler Versand an Anwalt/Versicherung zur schnellen Auszahlung.",
      highlight: "Full-Service"
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* --- HERO SECTION --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Offizielle Beweissicherung nach Verkehrsunfall</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-deep-navy mb-8">
              Unfall-Schadengutachten
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-3xl md:text-5xl mt-2 font-bold">
                Mit Ingenieurpräzision zur Entschädigung.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Wir erstellen unabhängige Gutachten zur Durchsetzung Ihrer Ansprüche. 
              Schnell, rechtssicher und vom zertifizierten Fahrzeugingenieur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-deep-navy text-white hover:bg-purple-700 transition-all shadow-xl shadow-brand-deep-navy/20 h-14 px-8 text-lg rounded-full">
                  <Link href={APP_ROUTES.CONTACT}>
                    Kostenlose Erstberatung
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
            </div>
          </div>
        </FadeIn>

        {/* --- DEFINITION SECTION --- */}
        <FadeIn direction="up" delay={200}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 text-purple-600 border border-purple-100">
                  <Info className="w-8 h-8" />
               </div>
               <h2 className="text-3xl font-bold text-brand-deep-navy">
                  Was ist ein Schadengutachten?
               </h2>
               <p className="text-lg text-slate-600 leading-loose">
                  Ein Unfall-Schadengutachten ist mehr als nur eine Kostenschätzung. Es ist ein 
                  <strong className="text-brand-deep-navy"> rechtssicheres Dokument</strong>, das den Zustand Ihres Fahrzeugs 
                  nach einem Unfall beweissicher festhält.
               </p>
               <p className="text-lg text-slate-600 leading-loose">
                  Es beziffert nicht nur die Reparaturkosten, sondern auch die 
                  <span className="text-purple-600 font-medium"> Wertminderung</span> und 
                  den <span className="text-purple-600 font-medium"> Nutzungsausfall</span> – 
                  Geld, das Ihnen zusteht.
               </p>
            </div>
            <div className="relative h-full min-h-[300px] bg-brand-deep-navy rounded-2xl overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/40 via-brand-deep-navy to-brand-deep-navy"></div>
                <div className="relative z-10 text-white space-y-4">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-purple-300 w-6 h-6 shrink-0" />
                        <span className="font-medium">Reparaturkosten-Kalkulation</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-purple-300 w-6 h-6 shrink-0" />
                        <span className="font-medium">Merkantile Wertminderung</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-purple-300 w-6 h-6 shrink-0" />
                        <span className="font-medium">Restwertermittlung</span>
                    </div>
                </div>
            </div>
          </div>
        </FadeIn>

        {/* --- PROCESS TIMELINE (IMPROVED) --- */}
        <div className="mb-32">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-navy mb-6">
                Ihr Weg zur Entschädigung
              </h2>
              <p className="text-lg text-slate-600">
                Wir nehmen Ihnen den bürokratischen Aufwand ab. 
                So einfach funktioniert der Prozess.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* VERBESSERTE LINIE: 
               1. top-8 / bottom-8: Startet/Endet genau in der Mitte der ersten/letzten Icons (Icon ist h-16 -> Mitte bei h-8)
               2. bg-gradient-to-b: Nutzt einen Verlauf von Transparent -> Mauve -> Transparent
            */}
            <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-1 hidden md:block -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-purple-300 to-transparent"></div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <FadeIn
                  key={index}
                  direction="up"
                  delay={index * 100}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    
                    {/* Content Card */}
                    <div className="flex-1 w-full group">
                      <Card className="border-0 shadow-lg shadow-purple-900/5 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="h-1 w-full bg-gradient-to-r from-brand-deep-navy to-purple-500"></div>
                        <CardHeader>
                          <div className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2">
                             {step.highlight}
                          </div>
                          <CardTitle className="text-xl font-bold text-brand-deep-navy">
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* NEUE MAUVE ICONS:
                       - bg-purple-50 (Helles Mauve innen)
                       - border-purple-200 (Dunklerer Mauve Rand)
                       - text-purple-700 (Dunkles Lila für das Icon selbst)
                    */}
                    <div className="relative z-10 shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 border-4 border-purple-200 shadow-xl text-purple-700 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                      <step.icon className="w-7 h-7" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID: SERVICE VS GUARANTEE --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Left: Dark Card */}
          <FadeIn direction="up" delay={100}>
            <Card className="h-full border-none shadow-2xl bg-brand-deep-navy text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/30 transition-colors duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <FileText className="text-purple-400" />
                  Umfassende Regulierung
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Wir kümmern uns nicht nur um Blechschäden. Unser Gutachten umfasst:
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Nutzungsausfallentschädigung</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Wertminderung (Merkantiler Minderwert)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Kalkulation der Reparaturdauer</span>
                    </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Right: Light/Mauve Card */}
          <FadeIn direction="up" delay={200}>
            <Card className="h-full border border-purple-200 shadow-xl bg-gradient-to-br from-white to-purple-50/50 relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-deep-navy flex items-center gap-3">
                  <ShieldCheck className="text-purple-600" />
                  Unsere Kostengarantie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-brand-deep-navy/80 font-medium leading-relaxed">
                  Bei einem unverschuldeten Unfall (Haftpflichtschaden) ist unser Service für Sie 
                  gesetzlich geregelt:
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="text-4xl font-extrabold text-purple-600">0€</div>
                        <div className="text-sm font-semibold text-brand-deep-navy uppercase tracking-wider">Kosten für Sie</div>
                    </div>
                    <p className="text-sm text-slate-500">
                        Die gegnerische Versicherung übernimmt 100% unserer Honorarkosten. 
                        Wir rechnen direkt mit der Versicherung ab.
                    </p>
                </div>
                <div className="text-xs text-center text-slate-400">
                    *Gilt für unverschuldete Haftpflichtschäden.
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* --- FINAL CTA --- */}
        <FadeIn direction="up">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-deep-navy shadow-2xl isolate">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-600 rounded-full opacity-30 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-[80px]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-20 gap-10">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Unfall gehabt? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    Kein Geld verschenken.
                  </span>
                </h2>
                <p className="text-lg text-slate-300 mb-0">
                  Kontaktieren Sie uns jetzt für eine kostenlose Ersteinschätzung direkt vom Ingenieur.
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-10 py-8 hover:bg-slate-100 hover:scale-105 transition-all shadow-xl rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>Gutachten anfragen</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 text-white font-semibold text-lg px-10 py-8 hover:bg-white/10 transition-all rounded-full w-full sm:w-auto"
                >
                  <Link href="tel:+491703577305">
                     <Phone className="mr-2 w-5 h-5"/> Anrufen
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

export default AccidentDamageReportsPage;
