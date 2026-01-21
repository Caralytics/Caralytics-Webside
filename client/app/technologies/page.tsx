"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, ChevronRight, Lock, Activity, Globe, ShieldCheck } from "lucide-react";

// --- Components ---

const TechBadge = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-xs font-mono text-brand-electric-purple/90 tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_-3px_rgba(120,0,255,0.15)]"
  >
    {children}
  </motion.div>
);

const GridBackground = () => (
  <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    
    {/* Radial Fade */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_10%,_#020617_90%)]" />

    {/* Moving Grid */}
    <div 
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}
    />
  </div>
);

export default function TechnologiesPage() {
  const [submitted, setSubmitted] = useState(false);

  // Fake loading sequence
  useEffect(() => {
    // Optional logic
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // 'min-h-[100dvh]' fixt das Problem mit der mobilen Browser-Bar (Safari/Chrome)
    <main className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between md:justify-center bg-[#020617] text-white overflow-hidden selection:bg-purple-500 selection:text-white py-6 md:py-0">
      <GridBackground />

      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-900/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center h-full justify-center">
        
        {/* Header / Status Bar - Mobil kompakter */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 right-0 px-4 md:px-6 py-4 md:py-8 flex justify-between items-center w-full text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest z-30"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Sys_Op</span>
          </div>
          <div className="hidden md:flex gap-6">
            <span>Lat: 50.9375</span>
            <span>Lng: 6.9603</span>
            <span>Köln_HQ</span>
          </div>
          {/* Mobil nur kurz HQ anzeigen */}
          <div className="md:hidden">
            <span>Köln_HQ</span>
          </div>
        </motion.header>

        {/* Main Content - Vertikal zentriert */}
        <div className="flex flex-col items-center text-center w-full mt-10 md:mt-0">
          
          <div className="flex gap-2 md:gap-3 mb-6 md:mb-8">
            <TechBadge delay={0.2}><Cpu className="w-3 h-3" /> Core Engine</TechBadge>
            <TechBadge delay={0.4}><Lock className="w-3 h-3" /> Stealth</TechBadge>
          </div>

          {/* LOGO SECTION - Responsiv angepasst */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="mb-6 md:mb-10 relative flex justify-center w-full"
          >
             <img 
               src="/assets/logo/svg/logo-purple-white-emblem-with-text.svg" 
               alt="Caralytics Logo" 
               // Mobile: h-12 (48px), Desktop: h-20 (80px) -> Perfekte Balance
               className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
             />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-2xl text-slate-400 max-w-sm md:max-w-2xl mx-auto leading-relaxed font-light mb-8 md:mb-10 px-2"
          >
            Fahrzeugbewertung verlässt das Zeitalter der Schätzung.<br className="hidden md:block"/>
            <span className="text-white font-medium block md:inline mt-1 md:mt-0">Wir bauen die Wahrheit in Datenform.</span>
          </motion.p>

          {/* Email Capture - Mobil optimiert */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-sm md:max-w-md mb-10 md:mb-16"
          >
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 px-6 py-4 rounded-xl border border-green-400/20">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-mono text-sm">Access Request logged.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center bg-[#0a0a0a] rounded-lg border border-white/10 p-1">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    // text-base verhindert Zoom auf iOS
                    className="flex-1 bg-transparent px-3 md:px-4 py-2.5 md:py-3 text-white placeholder:text-white/20 outline-none font-mono text-base md:text-sm min-w-0"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-md font-semibold text-xs md:text-sm hover:bg-slate-200 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    Request <span className="hidden sm:inline">Access</span> <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                <p className="mt-3 text-[10px] md:text-xs text-white/30 text-center font-mono">Limited Beta Batch Q1 2026</p>
              </form>
            )}
          </motion.div>

          {/* HUD / Video Container - Responsiv */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-purple-500/20 bg-black shadow-[0_0_30px_-10px_rgba(120,0,255,0.2)]"
          >
            {/* HUD Overlay Elements - Corners - Kleiner auf Mobile */}
            <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-lg z-20" />
            <div className="absolute top-0 right-0 w-4 h-4 md:w-8 md:h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 md:w-8 md:h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg z-20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg z-20" />
            
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(120,0,255,0.1)_50%,transparent_100%)] h-[20%] w-full animate-scanline" />

            {/* Video Placeholder */}
            <div className="relative w-full h-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-100"
                  src="/assets/coming-soon.webm" 
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#020617_90%)] opacity-60 z-10" />

                {/* Data Overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex flex-col gap-1 z-20 font-mono text-[9px] md:text-[10px] text-purple-100/90 drop-shadow-md">
                    <div className="flex items-center gap-2">
                        <Activity className="w-3 h-3 text-purple-400" /> 
                        <span>ENGINE_ACTIVE</span>
                    </div>
                    <div>PING: 12ms</div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 md:mt-20 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between w-full text-[10px] md:text-xs text-white/30 border-t border-white/5 pt-6 pb-2 font-mono"
        >
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Impressum</span>
            <span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3" />
            <span>Designed in Cologne. © 2026</span>
          </div>
        </motion.footer>

      </div>
      
      <style jsx global>{`
        @keyframes scanline {
          0% { top: -20%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </main>
  );
}
