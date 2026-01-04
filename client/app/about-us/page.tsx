import { Lightbulb, Target } from "lucide-react";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <section className="bg-linear-to-b from-brand-deep-navy to-brand-arsenic-gray min-h-screen text-brand-surface overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Über Carlytics
          </h1>
          <p className="text-lg md:text-xl text-brand-surface/70">
            Ingenieurvertrauen im digitalen Zeitalter der Fahrzeugbewertung.
          </p>
        </div>

        {/* Content Rows */}
        <div className="space-y-20 md:space-y-32 mb-24">
          {/* Mission - Icon Left */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-[fade-in_1.5s_ease-in-out_1_forwards]">
            <div className="shrink-0 relative group">
              {/* Structural rings - Tech/Geometric aesthetic */}
              <div className="absolute inset-0 border border-brand-surface/10 rounded-2xl rotate-3 transition-transform duration-700 group-hover:rotate-6 group-hover:border-brand-surface/20" />
              <div className="absolute inset-0 border border-brand-surface/5 rounded-2xl -rotate-3 transition-transform duration-700 group-hover:-rotate-6" />

              {/* Main container */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-brand-deep-navy to-brand-arsenic rounded-2xl border border-brand-surface/10 flex items-center justify-center relative z-10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Target
                  strokeWidth={1.5}
                  size={40}
                  className="md:w-12 md:h-12 text-brand-surface/90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-surface">
                Unsere Mission
              </h2>
              <div className="h-px w-16 bg-linear-to-r from-brand-surface/50 to-transparent mx-auto md:mx-0 mb-6" />
              <p className="text-brand-surface/80 leading-relaxed text-lg md:text-xl">
                Unsere Mission ist es, den Gutachten- und Bewertungsprozess
                präziser, effizienter und angenehmer zu gestalten. Durch den
                gezielten Einsatz digitaler Analyse-Tools strukturieren wir
                Abläufe und sorgen für konsistente Ergebnisse – eine Symbiose
                aus technischer Genauigkeit und kundenfreundlichem Prozess.
              </p>
            </div>
          </div>

          {/* Vision - Icon Right (Desktop) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 animate-[fade-in_1.5s_ease-in-out_1_forwards]">
            <div className="shrink-0 relative group">
              {/* Structural rings - Tech/Geometric aesthetic */}
              <div className="absolute inset-0 border border-brand-surface/10 rounded-2xl rotate-3 transition-transform duration-700 group-hover:rotate-6 group-hover:border-brand-surface/20" />
              <div className="absolute inset-0 border border-brand-surface/5 rounded-2xl -rotate-3 transition-transform duration-700 group-hover:-rotate-6" />

              {/* Main container */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-tr from-brand-deep-navy to-brand-arsenic rounded-2xl border border-brand-surface/10 flex items-center justify-center relative z-10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Lightbulb
                  strokeWidth={1.5}
                  size={40}
                  className="md:w-12 md:h-12 text-brand-surface/90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-surface">
                Unsere Vision
              </h2>
              <div className="h-px w-16 bg-linear-to-r from-brand-surface/50 to-transparent mx-auto md:mx-0 mb-6" />
              <p className="text-brand-surface/80 leading-relaxed text-lg md:text-xl">
                Wir formen eine Zukunft, in der Kfz-Bewertungsprozesse nahtlos
                in einem digitalen Ökosystem stattfinden. Mit intelligenten
                Workflow-Tools und einer datengesteuerten Plattform streben wir
                danach, der neue Industriestandard für Effizienz, Genauigkeit
                und Vertrauen zu werden.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-24 animate-[fade-in_2s_ease-in-out_1_forwards]">
          <p className="text-sm font-semibold text-brand-electric-purple uppercase tracking-wider mb-8">
            Zertifizierte Qualität
          </p>
          <div className="flex justify-center gap-8 md:gap-16 items-center flex-wrap">
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/assets/cert-badge-1.png"
                alt="Verband Deutscher Ingenieure - MITGLIED"
                width={140}
                height={80}
                className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 relative z-10"
              />
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/assets/cert-badge-2.png"
                alt="Zertifizierter Gutachter"
                width={140}
                height={80}
                className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto border-t border-brand-surface/10 pt-16 text-center animate-[fade-in_2.5s_ease-in-out_1_forwards]">
          <p className="text-2xl md:text-3xl font-semibold leading-normal">
            Zertifizierte Ingenieurskunst. Intelligente Systeme.{" "}
            <br className="hidden md:block" />
            <span className="text-brand-electric-purple block mt-2">
              Ein nahtloses Erlebnis.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
