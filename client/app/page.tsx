import CertBadges from "@/components/cert-badges/CertBadges";
import BackgroundCover from "@/components/home/BackgroundCover";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Button } from "@/components/ui/button";
import { ASSETS_SRC } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-deep-navy via-brand-deep-navy/90 to-brand-deep-navy/80" />
          <Image
            alt="Carlytics"
            height={54}
            width={54}
            src={`${ASSETS_SRC}/logo/svg/logo-plainwhite-emblem-with-text.svg`}
            className="absolute inset-0 h-10/12 w-[65%] lg:w-[45%] pointer-events-none animate-[fade-in_1.5s_ease-in-out_1_forwards] z-10 mx-auto -my-2"
            loading="eager"
          />
          <BackgroundCover />
          {/* Vignette overlay - soft circle fade effect */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-deep-navy/50 via-brand-cloud-gray/20 to-brand-deep-navy/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-2 mt-20">
            {/* H1 Title */}
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-light text-brand-white/60 leading-relaxed max-w-3xl animate-[fade-in_2.5s_ease-in-out_1_forwards]">
              Unfallgutachten in Köln Tüv zertifiziert vom Fahrzeugingenieur.
            </h1>

            {/* CTA Button */}
            <div className="mt-4 md:mt-6 animate-[fade-in_1.5s_ease-in-out_1_forwards]">
              <Button
                asChild
                size="lg"
                className="bg-brand-deep-navy hover:bg-brand-electric-purple text-white font-semibold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-md"
              >
                <Link href="#services">Termin anfragen</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none hidden sm:block">
          <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-10 lg:px-16">
            <div className="flex justify-end pb-8">
              <div className="pointer-events-auto flex items-center gap-6 animate-[fade-in_3s_ease-in-out_1_forwards]">
                <CertBadges className="w-[120px] h-[68px] drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}
