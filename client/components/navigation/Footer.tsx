"use client";

import CertBadges from "@/components/cert-badges/CertBadges";
import { APP_ROUTES } from "@/lib/routes";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // Wir verzichten auf useInView im Footer, da dies oft zu Layout-Shifts führt,
  // wenn man schnell nach unten scrollt. Statisch ist hier stabiler und professioneller.

  return (
    <footer className="relative bg-brand-deep-navy text-brand-surface overflow-hidden border-t border-slate-800">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Ein subtiler Glow oben rechts und links unten für Tiefe */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-electric-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* 1. COMPANY INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Caralytics
              </h3>
              <p className="text-sm text-slate-400 font-medium tracking-wider uppercase">
                Engineering
              </p>
            </div>
            <p className="text-base text-slate-400 leading-relaxed max-w-xs">
              Unabhängige Kfz-Gutachten und Bewertungen mit Ingenieurpräzision. 
              Ihr Partner für Rechtssicherheit und Werterhalt.
            </p>
            
            {/* Modern Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <SocialButton href={APP_ROUTES.SOCIAL.TIKTOK} label="TikTok">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </SocialButton>
              <SocialButton href={APP_ROUTES.SOCIAL.TWITTER} label="Twitter">
                <Twitter className="w-5 h-5" />
              </SocialButton>
              <SocialButton href={APP_ROUTES.SOCIAL.LINKEDIN} label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </SocialButton>
              <SocialButton href={APP_ROUTES.SOCIAL.INSTAGRAM} label="Instagram">
                <Instagram className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">
              Schnellzugriff
            </h4>
            <nav className="flex flex-col gap-3">
              <FooterLink href={APP_ROUTES.ABOUT_US}>Über uns</FooterLink>
              <FooterLink href={APP_ROUTES.HOME.SERVICES}>Leistungen</FooterLink>
              <FooterLink href={APP_ROUTES.TECHNOLOGIES}>Technologien</FooterLink>
              <FooterLink href={APP_ROUTES.CONTACT}>Kontakt</FooterLink>
            </nav>
          </div>

          {/* 3. CONTACT INFO */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">
              Kontakt
            </h4>
            <div className="flex flex-col gap-4 text-base text-slate-400">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-electric-purple/20 group-hover:text-brand-electric-purple transition-colors">
                    <MapPin className="w-5 h-5 shrink-0" />
                </div>
                <span className="leading-relaxed mt-1">
                  Rudolfplatz 3<br />
                  50674 Köln
                </span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-electric-purple/20 group-hover:text-brand-electric-purple transition-colors">
                    <Phone className="w-5 h-5 shrink-0" />
                </div>
                <Link href="tel:+491703577305" className="hover:text-white transition-colors">
                  +49 170 3577305
                </Link>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-electric-purple/20 group-hover:text-brand-electric-purple transition-colors">
                    <Mail className="w-5 h-5 shrink-0" />
                </div>
                <Link href="mailto:info@caralytics.de" className="hover:text-white transition-colors">
                  info@caralytics.de
                </Link>
              </div>
            </div>
          </div>

          {/* 4. CERTIFICATIONS */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold tracking-tight text-white">
              Qualitätssiegel
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
               <CertBadges className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"/>
            </div>
            <p className="text-xs text-slate-500">
                Wir arbeiten strikt nach den Richtlinien des VDI und sind TÜV Rheinland zertifiziert.
            </p>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        {/* Schicke Gradienten-Linie statt grauer Border */}
        <div className="mt-16 pt-8 relative">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Caralytics. Engineering Trust.
            </p>
            <div className="flex items-center gap-8">
              <Link href={APP_ROUTES.LEGAL.PRIVACY_POLICY} className="hover:text-brand-electric-purple transition-colors">
                Datenschutz
              </Link>
              <Link href={APP_ROUTES.LEGAL.TERMS_OF_SERVICE} className="hover:text-brand-electric-purple transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- Hilfs-Komponenten für saubereren Code ---

function SocialButton({ href, label, children }: { href: string, label: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-brand-electric-purple hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
        >
            {children}
        </Link>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
        >
            <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-brand-electric-purple">
                <ArrowRight className="w-3 h-3" />
            </span>
            <span>{children}</span>
        </Link>
    )
}
