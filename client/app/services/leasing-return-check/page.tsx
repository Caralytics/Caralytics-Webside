"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  Check, 
  Euro, 
  Search, 
  ShieldCheck, 
  FileCheck, 
  Wrench,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";
import Link from "next/link";

const LeasingReturnCheckPage = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Unabhängige Prüfung",
      description: "Vor der Rückgabe checken wir den Wagen gründlich – ohne Interessenkonflikt.",
      highlight: "Status-Quo"
    },
    {
      icon: FileCheck,
      title: "2. Schadensanalyse",
      description: "Wir unterscheiden glasklar: Was ist normale Abnutzung, was ist ein Schaden?",
      highlight: "Fairness"
    },
    {
      icon: Wrench,
      title: "3. Smart-Repair Empfehlung",
      description: "Wir zeigen Ihnen, welche Kratzer Sie günstig selbst beheben lassen sollten.",
      highlight: "Sparpotenzial"
    },
    {
      icon: Euro,
      title: "4. Sorglose Rückgabe",
      description: "Mit unserem Protokoll geben Sie das Fahrzeug zurück – ohne Angst vor der Endabrechnung.",
      highlight: "Sicherheit"
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* --- HERO SECTION --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <Search className="w-4 h-4" />
              <span>Der Vorab-Check für Leasingnehmer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-deep-navy mb-8">
              Leasing-Rückgabe
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-3xl md:text-5xl mt-2 font-bold">
                Ohne Nachzahlungs-Schock.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Autohäuser berechnen oft jeden Kratzer teuer ab. Wir prüfen Ihr Fahrzeug vorher 
              unabhängig und schützen Sie vor ungerechtfertigten Kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-deep-navy text-white hover:bg-purple-700 transition-all shadow-xl shadow-brand-deep-navy/20 h-14 px-8 text-lg rounded-full">
                  <Link href={APP_ROUTES.CONTACT}>
                    Rückgabe-Check buchen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
            </div>
          </div>
        </FadeIn>

        {/* --- PROBLEM / SOLUTION SECTION --- */}
        <FadeIn direction="up" delay={200}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="space-y-6">
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 text-purple-600 border border-purple-100">
                  <ShieldCheck className="w-8 h-8" />
               </div>
               <h2 className="text-3xl font-bold text-brand-deep-navy">
                  Warum ein Vorab-Check?
               </h2>
               <p className="text-lg text-slate-600 leading-loose">
                  Das Ende eines Leasingvertrags ist oft mit Unsicherheit verbunden. 
                  Viele Leasinggeber nutzen die Rückgabe, um kleine Gebrauchsspuren als teure 
                  Schäden abzurechnen.
               </p>
               <p className="text-lg text-slate-600 leading-loose">
                  Ein <strong className="text-brand-deep-navy">Carlytics-Protokoll</strong> schafft Waffengleichheit. 
                  Wir dokumentieren den Zustand objektiv, damit Sie genau wissen, was auf Sie zukommt – 
                  und was nicht.
               </p>
            </div>
            
            {/* Visual Checklist Box */}
            <div className="relative h-full min-h-[300px] bg-brand-deep-navy rounded-2xl overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/30 via-brand-deep-navy to-brand-deep-navy"></div>
                <div className="relative z-10 text-white space-y-4 w-full max-w-md">
                    <div className="text-sm font-semibold text-purple-200 uppercase tracking-widest mb-2">Wir prüfen für Sie:</div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                        <span className="font-medium">Lackschichtdicke & Nachlackierungen</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                        <span className="font-medium">Innenraumzustand & Gerüche</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                        <span className="font-medium">Felgen & Reifenprofil</span>
                    </div>
                     <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                        <span className="font-medium">Vorschäden & Technik</span>
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
                So läuft der Check ab
              </h2>
              <p className="text-lg text-slate-600">
                In 4 Schritten zur sicheren Fahrzeugrückgabe.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            {/* Fading Line: Transparent -> Purple -> Transparent */}
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

                    {/* Mauve Icons */}
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

        {/* --- GRID: FAIRNESS VS SAVINGS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Left: Dark Card */}
          <FadeIn direction="up" delay={100}>
            <Card className="h-full border-none shadow-2xl bg-brand-deep-navy text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/30 transition-colors duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <ShieldCheck className="text-purple-400" />
                  Faire Bewertung
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Der entscheidende Unterschied liegt im Detail:
                </p>
                <div className="space-y-4 mt-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-purple-300 font-bold mb-1">Normale Gebrauchsspur</div>
                        <p className="text-sm text-slate-400">Leichte Kratzer in Griffmulden, Steinschläge im üblichen Rahmen. <br/> <span className="text-green-400">Kein Abzug.</span></p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-red-300 font-bold mb-1">Echter Minderwert</div>
                        <p className="text-sm text-slate-400">Tiefe Dellen, Risse im Polster, beschädigte Felgen. <br/> <span className="text-red-400">Muss bewertet werden.</span></p>
                    </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Right: Light/Mauve Card */}
          <FadeIn direction="up" delay={200}>
            <Card className="h-full border border-purple-200 shadow-xl bg-gradient-to-br from-white to-purple-50/50 relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-deep-navy flex items-center gap-3">
                  <Euro className="text-purple-600" />
                  Kosteneinsparung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-brand-deep-navy/80 font-medium leading-relaxed">
                  Wir helfen Ihnen, bares Geld zu sparen, bevor das Auto zurückgeht.
                </p>
                
                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                        <span className="text-slate-600">Identifikation von <strong>Smart-Repair</strong> Möglichkeiten (oft 80% günstiger als Leasing-Rückbelastung).</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                        <span className="text-slate-600">Vermeidung von Pauschalpreisen für Kleinteile.</span>
                    </li>
                    <li className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                        <span className="text-slate-600">Argumentationshilfe gegenüber dem Leasinggeber.</span>
                    </li>
                </ul>
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
                  Rückgabe steht an? <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                    Sparen Sie bares Geld.
                  </span>
                </h2>
                <p className="text-lg text-slate-300 mb-0">
                  Kontaktieren Sie uns jetzt für den Vorab-Check. Ein paar Hundert Euro Investition sparen oft Tausende bei der Rückgabe.
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-10 py-8 hover:bg-slate-100 hover:scale-105 transition-all shadow-xl rounded-full w-full sm:w-auto"
                >
                  <Link href={APP_ROUTES.CONTACT}>Check anfragen</Link>
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

export default LeasingReturnCheckPage;
