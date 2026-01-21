"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronRight, Lock, Activity, Globe, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils"; // Assumes you have a utility for tailwind class merging

// --- Components ---

const TechBadge = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono text-brand-electric-purple/90 tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_-3px_rgba(120,0,255,0.15)]"
  >
    {children}
  </motion.div>
);

const GridBackground = () => (
  <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
    {/* Noise Texture for cinematic feel */}
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

export default function CaralyticsStealthPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Fake loading sequence for tech feel
  const [systemReady, setSystemReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setSystemReady(true), 800);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would connect to your API
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden selection:bg-brand-electric-purple selection:text-white">
      <GridBackground />

      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header / Status Bar */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 w-full flex justify-between items-center py-8 text-xs font-mono text-white/40 uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>System Operational</span>
          </div>
          <div className="hidden md:flex gap-6">
            <span>Lat: 50.9375</span>
            <span>Lng: 6.9603</span>
            <span>Köln_HQ</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center mt-12 md:mt-0">
          
          <div className="flex gap-3 mb-8">
            <TechBadge delay={0.2}><Cpu className="w-3 h-3" /> Core Engine v2.0</TechBadge>
            <TechBadge delay={0.4}><Lock className="w-3 h-3" /> Stealth Mode</TechBadge>
          </div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40"
          >
            Caralytics
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-10"
          >
            Fahrzeugbewertung verlässt das Zeitalter der Schätzung.<br/>
            <span className="text-white font-medium">Wir bauen die Wahrheit in Datenform.</span>
          </motion.p>

          {/* Email Capture / Access Request */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-md mb-16"
          >
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 px-6 py-4 rounded-xl border border-green-400/20">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-mono text-sm">Access Request logged. ID: #8291</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center bg-[#0a0a0a] rounded-lg border border-white/10 p-1">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/20 outline-none font-mono text-sm"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-black px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2"
                  >
                    Request Access <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-3 text-xs text-white/30 text-center font-mono">Limited Beta Batch Q1 2026</p>
              </form>
            )}
          </motion.div>

          {/* HUD / Video Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl"
          >
            {/* HUD Overlay Elements - Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-lg z-20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg z-20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg z-20" />
            
            {/* Scanning Line Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(120,0,255,0.1)_50%,transparent_100%)] h-[20%] w-full animate-scanline" />

            <video
              autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover opacity-60 grayscale-[40%] contrast-125"
  src="/assets/coming-soon.webm" 
/>
                
                {/* Data Overlay inside Video */}
                <div className="absolute bottom-8 left-8 flex flex-col gap-1 z-20 font-mono text-[10px] text-white/70">
                    <div className="flex items-center gap-2"><Activity className="w-3 h-3 text-purple-400" /> ANALYSIS_ENGINE_ACTIVE</div>
                    <div>FPS: 60 // PING: 12ms</div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 mb-6 flex flex-col md:flex-row gap-6 items-center justify-between w-full text-xs text-white/30 border-t border-white/5 pt-6 font-mono"
        >
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Impressum</span>
            <span className="hover:text-white transition-colors cursor-pointer">Datenschutz</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3" />
            <span>Designed in Cologne, Germany. © 2026</span>
          </div>
        </motion.footer>

      </div>
      
      {/* CSS Animations via Tailwind Config or inline styles */}
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
