"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  Minus, 
  Plus, 
  HelpCircle, 
  Phone, 
  MessageCircle,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Stelle sicher, dass du cn in utils hast, sonst nutze template strings

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Was kostet mich ein Unfallgutachten?",
      answer: "Bei einem unverschuldeten Unfall (Haftpflichtschaden) ist das Gutachten für Sie komplett kostenlos. Die Kosten muss gesetzlich die gegnerische Versicherung zu 100% übernehmen. Wir rechnen direkt mit der Versicherung ab, sodass Sie nicht in Vorleistung treten müssen."
    },
    {
      question: "Warum sollte ich keinen Gutachter der Versicherung akzeptieren?",
      answer: "Der Gutachter der gegnerischen Versicherung arbeitet im Interesse der Versicherung – sein Ziel ist es oft, die Kosten niedrig zu halten. Als unabhängige Ingenieure arbeiten wir in Ihrem Interesse und ermitteln den tatsächlichen Schaden inklusive Wertminderung und Nutzungsausfall, damit Ihnen kein Geld entgeht."
    },
    {
      question: "Wie schnell erhalte ich mein Gutachten?",
      answer: "Geschwindigkeit ist entscheidend. In der Regel besichtigen wir Ihr Fahrzeug innerhalb von 24 Stunden. Das fertige Gutachten liegt Ihnen und der Versicherung meist innerhalb von 1 bis 2 Werktagen nach Besichtigung vor."
    },
    {
      question: "Muss ich mit dem kaputten Auto zu euch kommen?",
      answer: "Nein, das ist nicht nötig. Wir kommen flexibel zu Ihnen – egal ob nach Hause, an Ihren Arbeitsplatz oder direkt in die Werkstatt, in der Ihr Wagen steht. Dieser Vor-Ort-Service ist in unserem Angebot enthalten."
    },
    {
      question: "Was bringt mir ein Vorab-Check bei der Leasingrückgabe?",
      answer: "Er schützt Sie vor überhöhten Nachzahlungen. Leasinggeber berechnen oft kleine Kratzer als teure Neuteil-Lackierung. Wir dokumentieren den Zustand vorab und unterscheiden klar zwischen normaler Abnutzung (kostenfrei) und echtem Schaden. Mit unserem Protokoll haben Sie eine starke Verhandlungsposition."
    },
    {
      question: "Was passiert, wenn die Versicherung kürzt?",
      answer: "Sollte die gegnerische Versicherung versuchen, Positionen im Gutachten zu kürzen (ein gängiges Vorgehen), unterstützen wir Sie mit einer fachlichen Stellungnahme. Zudem empfehlen wir bei Bedarf spezialisierte Verkehrsrechtsanwälte, deren Kosten ebenfalls die Gegenseite tragen muss."
    }
  ];

  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        
        {/* --- HEADER --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <HelpCircle className="w-4 h-4" />
              <span>Häufige Fragen & Antworten</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Wir schaffen Klarheit.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Unfallgutachten, 
              Kostenübernahme und Ablauf.
            </p>
          </div>
        </FadeIn>

        {/* --- ACCORDION SECTION --- */}
        <div className="max-w-3xl mx-auto space-y-4 mb-24">
          {faqs.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <div 
                className={cn(
                  "group rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer",
                  openIndex === index 
                    ? "bg-white border-purple-200 shadow-xl shadow-purple-900/5 ring-1 ring-purple-100" 
                    : "bg-white border-slate-200 shadow-sm hover:border-purple-200 hover:shadow-md"
                )}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Question Header */}
                <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                  <h3 className={cn(
                    "text-lg md:text-xl font-bold transition-colors text-left",
                    openIndex === index ? "text-purple-700" : "text-brand-deep-navy group-hover:text-purple-700"
                  )}>
                    {faq.question}
                  </h3>
                  <div className={cn(
                    "shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    openIndex === index 
                      ? "bg-purple-600 text-white rotate-180" 
                      : "bg-slate-100 text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-600"
                  )}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                {/* Answer Content */}
                <div 
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0">
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg border-t border-slate-100 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- CLOSING CTA --- */}
        <FadeIn direction="up">
          <div className="bg-brand-deep-navy rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background FX */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ihre Frage war nicht dabei?
              </h2>
              <p className="text-slate-300 text-lg mb-10">
                Kein Problem. Rufen Sie uns einfach an oder schreiben Sie uns per WhatsApp. 
                Ingenieur-Erstberatung ist immer kostenlos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep-navy font-bold text-lg px-8 py-7 hover:bg-slate-100 hover:scale-105 transition-all shadow-lg rounded-full"
                >
                  <Link href={APP_ROUTES.CONTACT}>
                    Kontakt aufnehmen
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white/20 text-white font-bold text-lg px-8 py-7 hover:bg-white/10 transition-all rounded-full"
                >
                  <Link href="tel:+491703577305">
                    <Phone className="mr-2 w-5 h-5" /> 
                    Jetzt anrufen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
