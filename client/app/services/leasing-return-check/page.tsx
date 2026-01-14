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
      description: "Wir unterscheiden glas klar: Was ist normale Abnutzung, was ist ein Schaden?",
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
                  <Link href={
