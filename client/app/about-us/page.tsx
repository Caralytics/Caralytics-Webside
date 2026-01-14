"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { 
  Lightbulb, 
  Target, 
  Building2, 
  Cpu, 
  Microscope 
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const AboutUsPage = () => {
  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* --- HEADER --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <Building2 className="w-4 h-4" />
              <span>Über Caralytics Engineering</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Ingenieurkunst trifft <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                digitale Präzision.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Wir sind kein klassisches Sachverständigenbüro. Wir sind ein Technologie-getriebenes Ingenieurteam, das den Standard für Fahrzeugbewertungen neu definiert.
            </p>
          </div>
        </FadeIn>

        {/* --- WHO WE ARE (Der neue Text-Block) --- */}
        <FadeIn direction="up" delay={200}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-900/5 border border-slate-100 mb-24 relative overflow-hidden">
                {/* Deko-Hintergrund */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Ein neuer Ansatz für die Schadenregulierung</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                <strong>Caralytics</strong> versteht sich als technisch ambitioniertes Ingenieurbüro. 
                                In einer Branche, die oft noch analog arbeitet, setzen wir auf 
                                <span className="text-purple-700 font-semibold"> datengestützte Analysen</span> und 
                                modernste Messtechnik.
                            </p>
                            <p>
                                Unser Ziel ist es, die "Black Box" der Schadenregulierung zu öffnen. 
                                Durch ingenieurwissenschaftliche Methoden machen wir Schäden nicht nur sichtbar, 
                                sondern technisch und physikalisch beweisbar. Das sorgt für schnellere Abwicklungen 
                                bei Versicherungen und maximale Sicherheit für unsere Mandanten.
                            </p>
                        </div>
                    </div>
                    {/* Visualisierung der Technik */}
                    <div className="bg-brand-deep-navy rounded-2xl p-8 text-white flex flex-col justify-center h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-navy via-purple-900/20 to-brand-deep-navy"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-lg"><Cpu className="w-6 h-6 text-purple-300"/></div>
                                <div className="font-bold text-lg">Digital First</div>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-lg"><Microscope className="w-6 h-6 text-purple-300"/></div>
                                <div className="font-bold text-lg">Forensische Genauigkeit</div>
                            </div>
                            <p className="text-slate-300 italic border-l-2 border-purple-500 pl-4">
                                "Wir schätzen nicht einfach. Wir berechnen, messen und beweisen."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>

        {/* --- MISSION & VISION GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          
          {/* Mission Card */}
          <FadeIn direction="right" className="h-full">
            <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border-t-4 border-t-brand-deep-navy">
              <CardContent className="p-8 md:p-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-deep-navy mb-6 group-hover:bg-brand-deep-navy group-hover:text-white transition-colors duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-deep-navy mb-4">Unsere Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Wir gestalten den Gutachtenprozess **effizienter und transparenter**. 
                  Durch den gezielten Einsatz digitaler Analyse-Tools eliminieren wir subjektive Fehlerquellen 
                  und sorgen für konsistente, unangreifbare Ergebnisse. Eine Symbiose aus technischer Genauigkeit 
                  und kundenfreundlichem Prozess.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn direction="left" className="h-full">
            <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border-t-4 border-t-purple-600">
              <CardContent className="p-8 md:p-10">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-deep-navy mb-4">Unsere Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Eine Zukunft, in der Kfz-Bewertungsprozesse nahtlos in einem digitalen Ökosystem stattfinden. 
                  Wir streben danach, der **neue Industriestandard** für Vertrauen zu werden – weg vom "Bauchgefühl", 
                  hin zur ingenieurmäßigen Faktenlage.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* --- CERTIFICATIONS --- */}
        <div className="text-center mb-24">
            <FadeIn direction="up">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                    Geprüfte Ingenieur-Qualität
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
                    {/* Placeholder für deine Zertifikats-Bilder */}
                    <div className="group flex flex-col items-center gap-4">
                        <div className="relative h-20 w-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                             <Image 
                                src="/assets/cert-badge-1.png" 
                                alt="VDI Mitglied" 
                                fill 
                                className="object-contain"
                             />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-brand-deep-navy">VDI Mitglied</span>
                    </div>

                    <div className="group flex flex-col items-center gap-4">
                        <div className="relative h-20 w-40 grayscale group-hover:grayscale-0 transition-all duration-500">
                             <Image 
                                src="/assets/cert-badge-2.png" 
                                alt="TÜV Zertifiziert" 
                                fill 
                                className="object-contain"
                             />
                        </div>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-brand-deep-navy">TÜV Rheinland Zertifiziert</span>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* --- CLOSING STATEMENT --- */}
        <FadeIn direction="up" delay={300}>
            <div className="max-w-3xl mx-auto text-center border-t border-slate-200 pt-16">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-brand-deep-navy">
                Zertifizierte Ingenieurskunst. <br/>
                Intelligente Systeme. <br/>
                <span className="text-purple-600 mt-2 block">
                Ein nahtloses Erlebnis.
                </span>
            </p>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutUsPage;
