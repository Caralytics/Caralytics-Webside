import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase =
    "w-auto object-contain transition-all duration-300";

  // Super-edle, aber leichtere Glass-Card
  const card =
    [
      "relative inline-flex items-center justify-center",
      "rounded-3xl",
      // etwas kleiner & transparenter im Normalzustand
      "px-4 py-2 md:px-5 md:py-3",
      "bg-white/35 backdrop-blur-xl",
      // feiner Verlauf
      "before:absolute before:inset-0 before:rounded-3xl",
      "before:bg-gradient-to-br before:from-white/50 before:to-white/5",
      "before:pointer-events-none",
      // zarter Rand + Shadow
      "border border-white/40",
      "shadow-[0_14px_40px_rgba(0,0,0,0.14)]",
      // Hover: größer + mehr Tiefe
      "transform scale-[0.96] hover:scale-105",
      "hover:shadow-[0_20px_55px_rgba(0,0,0,0.20)]",
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
