import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  // Basis-Style für alle Badges
  const defaultClassName =
    "opacity-60 h-14 md:h-16 w-auto object-contain hover:opacity-100 transition-all duration-300 hover:scale-105";

  return (
    <>
      {/* VDI-Badge */}
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure - MITGLIED"
        width={573}
        height={202}
        className={twMerge(defaultClassName, className)}
      />

      {/* TÜV-Badge – leicht größer, damit es nicht „zu klein“ wirkt */}
      <Image
        src="/assets/cert-badge-2.png"
        alt="TÜV Rheinland Certified – ID 0000085895"
        width={710}
        height={201}
        className={twMerge(
          defaultClassName,
          "h-16 md:h-18", // TÜV etwas höher als VDI
          className
        )}
      />
    </>
  );
}
