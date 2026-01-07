import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase =
    "w-auto object-contain transition-all duration-300";

  // EXTREME PREMIUM GLASS CARD
  const card =
    [
      "relative inline-flex items-center justify-center",
      "rounded-3xl",
      "px-4 py-2 md:px-5 md:py-3",

      // viel transparenter, stärkerer Glaslook
      "bg-white/25",

      // Glassmorph Blur (Footer-Hintergrund wirkt wie „durch Frostglas“)
      "backdrop-blur-2xl",

      // zarter Verlauf, etwas heller oben
      "before:absolute before:inset-0 before:rounded-3xl",
      "before:bg-gradient-to-br before:from-white/40 before:to-white/0",
      "before:pointer-events-none",

      // feiner Hairline-Border (Apple-Style)
      "border border-white/50",

      // subtiler Glow
      "shadow-[0_18px_60px_rgba(0,0,0,0.22)]",

      // Start etwas kleiner + dezente Hover-Vergrößerung
      "transform scale-[0.94] hover:scale-105",

      // mehr Tiefe auf Hover
      "hover:shadow-[0_25px_75px_rgba(0,0,0,0.28)]",

      // für Footer: Badge IMMER über dem Hintergrund
      "z-10",

      "transition-all duration-500",
    ].join(" ");

  return (
    <div className="flex items-center gap-4">
      {/* VDI */}
      <div className={card}>
        <Image
          src="/assets/cert-badge-1.png"
          alt="Verband Deutscher Ingenieure – Mitglied"
          width={600}
          height={250}
          className={twMerge(imageBase, className)}
        />
      </div>

      {/* TÜV */}
      <div className={card}>
        <Image
          src="/assets/cert-badge-2.png"
          alt="TÜV Rheinland Certified – ID 0000085895"
          width={2000}
          height={1000}
          className={twMerge(imageBase, className)}
        />
      </div>
    </div>
  );
}
