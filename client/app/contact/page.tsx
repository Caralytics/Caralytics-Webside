"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { APP_ROUTES } from "@/lib/routes";
import { 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Clock 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Fotos vom Schaden senden",
    value: "Chat starten",
    href: "https://wa.me/491703577305",
    primary: true, // Hervorgehoben
  },
  {
    icon: Phone,
    label: "Telefon",
    description: "Sofortige Ersteinschätzung",
    value: "+49 170 3577305",
    href: "tel:+491703577305",
    primary: false,
  },
  {
    icon: Mail,
    label: "E-Mail",
    description: "Für Dokumente & Anfragen",
    value: "info@caralytics.de",
    href: "mailto:info@caralytics.de",
    primary: false,
  },
  {
    icon: MapPin,
    label: "Büro Köln",
    description: "Besichtigung vor Ort",
    value: "Rudolfplatz 3, 50674 Köln",
    href: "https://maps.google.com/maps?q=Rudolfplatz+3,+50674+Köln",
    primary: false,
  },
];

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-slate-50/50 text-brand-deep-navy pt-24 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* --- HEADER --- */}
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <MessageCircle className="w-4 h-4" />
              <span>Wir sind für Sie da</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-deep-navy mb-6">
              Nehmen Sie Kontakt auf
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Unfall oder Frage zur Bewertung? Wir helfen Ihnen schnell und unkompliziert. 
              Nutzen Sie WhatsApp für die schnellste Antwort.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT: CONTACT CARDS --- */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <FadeIn key={index} direction="right" delay={index * 100}>
                <Link 
                  href={method.href} 
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  className="block group"
                >
                  <Card className={`
                    border transition-all duration-300 hover:shadow-lg relative overflow-hidden
                    ${method.primary 
                      ? "bg-brand-deep-navy border-brand-deep-navy text-white hover:bg-brand-deep-navy/95" 
                      : "bg-white border-slate-100 hover:border-purple-200"
                    }
                  `}>
                    <CardContent className="p-6 flex items-center gap-6">
                      {/* Icon Box */}
                      <div className={`
                        shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110
                        ${method.primary 
                          ? "bg-white/10 text-white" 
                          : "bg-purple-50 text-purple-600"
                        }
                      `}>
                        <method.icon className="w-7 h-7" />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className={`text-sm font-medium mb-1 ${method.primary ? "text-purple-200" : "text-slate-500"}`}>
                          {method.label}
                        </p>
                        <h3 className={`text-xl font-bold ${method.primary ? "text-white" : "text-brand-deep-navy"}`}>
                          {method.value}
                        </h3>
                        <p className={`text-sm mt-1 ${method.primary ? "text-slate-300" : "text-slate-400"}`}>
                          {method.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className={`
                        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                        ${method.primary ? "text-white" : "text-purple-600"}
                      `}>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}

            {/* FAQ Hint */}
            <FadeIn direction="up" delay={400}>
                <div className="mt-8 text-center lg:text-left p-6 bg-slate-100 rounded-2xl border border-slate-200">
                    <p className="text-slate-600">
                        Haben Sie allgemeine Fragen zum Ablauf? <br/>
                        <Link href={APP_ROUTES.FAQ} className="text-purple-600 font-bold hover:underline inline-flex items-center gap-1">
                            Zu den häufigen Fragen (FAQ) <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </p>
                </div>
            </FadeIn>
          </div>

          {/* --- RIGHT: MAP & INFO --- */}
          <div className="space-y-8">
            <FadeIn direction="left">
                {/* Office Image Card */}
                <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                    alt="Caralytics Office Köln"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-navy/90 via-brand-deep-navy/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-200">Öffnungszeiten</span>
                    </div>
                    {/* HIER GEÄNDERT: Neue Öffnungszeiten */}
                    <p className="font-semibold">Mo - Sa: 09:00 - 19:00 Uhr</p>
                    <p className="text-sm text-slate-300">Termine nach Vereinbarung</p>
                  </div>
                </div>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
                {/* Google Map Container */}
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
                  {/* HIER GEÄNDERT: Google Maps Embed */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?q=Rudolfplatz+3,+50674+Köln&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="rounded-2xl w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Google Maps Caralytics Standort"
                  ></iframe>
                  
                  {/* Overlay Button */}
                  <div className="absolute bottom-6 right-6">
                      <Button asChild size="sm" className="bg-brand-deep-navy text-white hover:bg-purple-700 shadow-lg">
                          <Link href="https://maps.google.com/maps?q=Rudolfplatz+3,+50674+Köln" target="_blank">
                              Route planen
                          </Link>
                      </Button>
                  </div>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
