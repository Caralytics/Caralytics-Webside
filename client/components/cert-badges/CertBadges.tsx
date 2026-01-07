import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase =
    "w-auto object-contain transition-all duration-300";

  // TÜV – schlank, kontrastreich, Zoom + leichter Sheen
  const tuvWrapper =
    [
      "relative inline-flex items-center justify-center",
      "rounded-xl",
      "px-2.5 py-1.5",

      // leichter weißer Hintergrundfilm für Kontrast
      "bg-white/40",

      // bisschen Durchscheinen/Weichzeichnen
      "backdrop-blur-md",

      // dünner, klarer Rand
      "border border-white/80",

      // dezenter Glow statt großer Fläche
      "shadow-lg",

      // ⭐ Zoom-Effekt zurück
      "transform transition-all duration-500",
      "hover:scale-110",

      // etwas mehr Tiefe beim Hover
      "hover:shadow-xl",
    ].join(" ");

  return (
    <div className="flex items-center gap-4">
      {/* VDI – unverändert */}
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure – Mitglied"
        width={600}
        height={250}
        className={twMerge(imageBase, className)}
      />

      {/* TÜV – mit Kontrast + Zoom */}
      <div className={tuvWrapper}>
        {/* kleiner Licht-Schein hinter dem Badge */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/30" />

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
