"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  Car, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  ScanLine, 
  BarChart3 
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      title: "Unfall-Schadengutachten",
      description: "Unabhängige Beweissicherung und faire Regulierung. Wir setzen Ihre Ansprüche gegenüber der Versicherung durch.",
      icon: ShieldCheck,
      link: APP_ROUTES.SERVICES.ACCIDENT_DAMAGE_REPORTS,
      highlight: "Kostenlos bei Haftpflicht"
    },
    {
      title: "Fahrzeugbewertung",
      description: "Marktgerechte Wertermittlung mit Ingenieur-Methodik. Ideal für Kauf, Verkauf, Erbe oder Vermögensfragen.",
      icon: Car,
      link: APP_ROUTES.SERVICES.VEHICLE_VALUATION,
      highlight: "Zertifiziert"
    },
    {
      title: "Leasing-Rückgabecheck",
      description: "Vorab-Check mit sauberer Dokumentation. Risiken erkennen und teure Nachzahlungen im Autohaus vermeiden.",
      icon: FileCheck,
      link: APP_ROUTES.SERVICES.LEASING_RETURN_CHECK,
      highlight: "Spart bares Geld"
    },
  ];

  const techFeatures = [
    { name: "Caralytics Core Engine™ AI", icon: Cpu },
    { name: "PaintView™ Pro Analysis", icon: ScanLine },
    { name: "MarketView™ Realtime Data", icon: BarChart3 },
  ];

  return (
    <section className="relative py-24 bg-brand-deep-navy text-white overflow-hidden" id="services">
      
      {/* --- BACKGROUND FX --- */}
      {/* Ein subtiler lila Nebel für Tiefe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-electric-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* --- HEADER --- */}
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Ingenieur-Leistungen <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                mit Präzision & High-Tech.
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Wir kombinieren klassische Ingenieurskunst mit modernster Analysetechnik.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {techFeatures.map((tech, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-purple-200 backdrop-blur-md">
                  <tech.icon className="w-4 h-4" />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={index * 150} className="h-full">
              <Link href={service.link} className="block h-full group">
                <Card className="h-full bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-brand-electric-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-electric-purple/10 relative overflow-hidden">
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-electric-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 flex flex-col h-full relative z-10">
                    
                    {/* Badge */}
                    <div className="self-start mb-6 px-3 py-1 rounded bg-brand-electric-purple/20 text-brand-electric-purple text-xs font-bold uppercase tracking-wider border border-brand-electric-purple/20">
                      {service.highlight}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-white group-hover:bg-brand-electric-purple group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <service.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* Link Arrow */}
                    <div className="flex items-center gap-2 text-sm font-bold text-white mt-auto group-hover:gap-4 transition-all duration-300">
                      Mehr erfahren <ArrowRight className="w-4 h-4 text-brand-electric-purple" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
