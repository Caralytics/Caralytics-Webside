"use client";
import CertBadges from "@/components/cert-badges/CertBadges";
import { useInView } from "@/hooks/use-in-view";
import { APP_ROUTES } from "@/lib/routes";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { ref, hasTriggered } = useInView({ threshold: 0.1 });
  const animation = `transition-all duration-700 ${hasTriggered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`;
  return (
    <footer className="bg-brand-deep text-brand-surface">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 ${animation}`}
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-brand-surface">
              Caralytics Engineering
            </h3>
            <p className="text-sm md:text-base text-brand-muted-surface leading-relaxed max-w-xs">
              Unabhängige Kfz-Gutachten und Bewertungen mit Ingenieurpräzision.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href={APP_ROUTES.SOCIAL.TIKTOK}
                aria-label="TikTok"
                className="text-brand-muted-surface hover:text-brand-accent transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </Link>
              <Link
                href={APP_ROUTES.SOCIAL.TWITTER}
                aria-label="Twitter"
                className="text-brand-muted-surface hover:text-brand-accent transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href={APP_ROUTES.SOCIAL.LINKEDIN}
                aria-label="LinkedIn"
                className="text-brand-muted-surface hover:text-brand-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={APP_ROUTES.SOCIAL.INSTAGRAM}
                aria-label="Instagram"
                className="text-brand-muted-surface hover:text-brand-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold tracking-tight text-brand-surface">
              Schnellzugriff
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href={APP_ROUTES.ABOUT_US}
                className="text-sm md:text-base text-brand-muted-surface hover:text-brand-accent transition-colors duration-300 w-fit"
              >
                Über uns
              </Link>
              <Link
                href={APP_ROUTES.HOME.SERVICES}
                className="text-sm md:text-base text-brand-muted-surface hover:text-brand-accent transition-colors duration-300 w-fit"
              >
                Leistungen
              </Link>
              <Link
                href={APP_ROUTES.TECHNOLOGIES}
                className="text-sm md:text-base text-brand-muted-surface hover:text-brand-accent transition-colors duration-300 w-fit"
              >
                Technologien
              </Link>
              <Link
                href={APP_ROUTES.CONTACT}
                className="text-sm md:text-base text-brand-muted-surface hover:text-brand-accent transition-colors duration-300 w-fit"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold tracking-tight text-brand-surface">
              Kontakt
            </h4>
            <div className="flex flex-col gap-3 text-sm md:text-base text-brand-muted-surface">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-accent" />
                <span className="leading-relaxed">
                  Rudolfplatz 3
                  <br />
                  50674 Köln
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-accent" />
                <Link
                  href="tel:+491703577305"
                  className="hover:text-brand-accent transition-colors duration-300"
                >
                  +49 170 3577305
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-brand-accent" />
                <Link
                  href="mailto:info@caralytics.de"
                  className="hover:text-brand-accent transition-colors duration-300"
                >
                  info@caralytics.de
                </Link>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold tracking-tight text-brand-surface">
              Zertifikationen und Mitgliedschaften
            </h4>
            <div className="flex gap-4">
              <CertBadges />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-brand-muted-surface/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted-surface">
            <p>
              &copy; {new Date().getFullYear()} Caralytics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={APP_ROUTES.LEGAL.PRIVACY_POLICY}
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Datenschutz
              </Link>
              <Link
                href={APP_ROUTES.LEGAL.TERMS_OF_SERVICE}
                className="hover:text-brand-accent transition-colors duration-300"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
