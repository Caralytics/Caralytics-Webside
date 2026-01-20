"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Cpu, Sparkles } from "lucide-react";

export default function TechnologiesPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-deep-navy text-white flex items-center justify-center px-6 pt-20 pb-12 select-none">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-deep-navy via-[#050a1f] to-black" />

      <div className="absolute inset-0 -z-20 pointer-events-none opacity-30">
        <div className="scanline absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="absolute inset-0 -z-20 pointer-events-none opacity-[0.18]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="absolute -z-10 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full bg-brand-electric-purple/20 blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[-160px] w-[620px] h-[620px] rounded-full bg-white/10 blur-[160px]" />
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none opacity-70">
        <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-white/20 rounded-tl-2xl" />
        <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/20 rounded-tr-2xl" />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-white/20 rounded-bl-2xl" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-white/20 rounded-br-2xl" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <FadeIn direction="up">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-electric-purple text-sm font-semibold mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Die Zukunft der <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                Fahrzeuganalyse.
              </span>
            </h1>

            <p className="text-slate-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Wir entwickeln Technologien für präzisere Gutachten – schneller, objektiver und
              messbar nachvollziehbar.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm text-white/60">
              <Cpu className="w-4 h-4" />
              <span className="tracking-wide">
                System status: <span className="text-white/80">R&amp;D build • preview</span>
              </span>
              <span className="mx-2 h-3 w-px bg-white/15" />
              <span className="text-white/70">Caralytics – Engineering</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={180} className="w-full">
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-electric-purple/20 bg-black/40 backdrop-blur-sm">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full z-20" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full z-20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full z-20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full z-20" />

            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-brand-deep-navy/70" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover opacity-95"
              src="/assets/coming-soon.webm"
              controls={false}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
            />
          </div>

          <div className="mt-6 text-sm text-white/55">
            Präzision trifft Innovation — bald verfügbar.
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        .scanline {
          animation: scan 6.5s linear infinite;
        }
        @keyframes scan {
          0% {
            transform: translateY(-40vh);
            opacity: 0;
          }
          10% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.25;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(120vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
