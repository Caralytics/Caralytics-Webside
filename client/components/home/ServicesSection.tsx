"use client";

import ServiceCard from "@/components/home/ServiceCard";
import { useInView } from "@/hooks/use-in-view";
import { APP_ROUTES } from "@/lib/routes";
import { Car, FileCheck, ShieldCheck } from "lucide-react";

export function ServicesSection() {
  const { ref, hasTriggered } = useInView({ threshold: 0.1 });
  const services = [
    {
      title: "Unfall-Schadengutachten",
      description:
        "Unabhängiges Gutachten zur Beweissicherung und fairen Regulierung – klar dokumentiert und verständlich erklärt.",
      icon: ShieldCheck,
      link: APP_ROUTES.SERVICES.ACCIDENT_DAMAGE_REPORTS,
    },
    {
      title: "Fahrzeugbewertung",
      description:
        "Marktgerechte Wertermittlung mit nachvollziehbarer Methodik – ideal für Kauf, Verkauf, Versicherung oder Streitfälle.",
      icon: Car,
      link: APP_ROUTES.SERVICES.VEHICLE_VALUATION,
    },
    {
      title: "Leasing-Rückgabecheck",
      description:
        "Vorab-Check mit sauberer Dokumentation – damit Sie Risiken erkennen und unnötige Nachzahlungen vermeiden.",
      icon: FileCheck,
      link: APP_ROUTES.SERVICES.LEASING_RETURN_CHECK,
    },
  ];

  return (
    <section
      className="py-20 bg-linear-to-b from-brand-deep-navy to-brand-arsenic-gray text-brand-surface"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-brand-surface/70 max-w-2xl mx-auto mb-2">
            Umfassende Fahrzeugbewertungsdienste, individuell auf Ihre
            Bedürfnisse zugeschnitten.
          </p>
          <p className="text-brand-electric-purple font-medium text-sm uppercase tracking-wider">
            Powered by Caralytics Core Engine™ AI · Caralytics PaintView™ Pro ·
            Caralytics MarketView™ Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
