"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

const TechnologiesPage = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-brand-deep-navy text-white overflow-hidden pt-24 pb-12 px-6">
      
      {/* --- BACKGROUND FX --- */}
      {/* Dunkler Hintergrund mit leichtem Schein für Atmosphäre */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-deep-navy via-[#050a1f] to-black -z-20"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-electric-purple/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* --- HEADER --- */}
        <FadeIn direction="up">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-electric-purple text-sm font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Die Zukunft der <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                Fahrzeuganalyse.
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Wir arbeiten an revolutionären Technologien für noch präzisere Gutachten. 
              Hier entsteht etwas Großes.
            </p>
          </div>
        </FadeIn>

        {/* --- VIDEO CONTAINER (Der "Monitor"-Look) --- */}
        <FadeIn direction="up" delay={200} className="w-full">
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-electric-purple/20 bg-black/40 backdrop-blur-sm group">
            
            {/* Tech-Overlay Elemente (Deko Ecken) */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full z-20"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full z-20"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full z-20"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full z-20"></div>
            
            {/* Das Video selbst */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              src="/assets/coming-soon.webm"
              controlsList="nodownload"
            />

            {/* Optional: Ein Overlay über dem Video, falls es zu hell ist */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-navy/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </FadeIn>

        {/* --- CTA BUTTON --- */}
        <FadeIn direction="up" delay={400}>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 hover:bg-slate-100 hover:scale-105 transition-all shadow-xl rounded-full"
            >
              <Link href={APP_ROUTES.CONTACT}>
                Benachrichtigung erhalten
              </Link>
            </Button>
            
            <Link href={APP_ROUTES.HOME.ROOT} className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
              Zurück zur Startseite <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default TechnologiesPage;
