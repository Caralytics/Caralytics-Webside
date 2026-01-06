import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const defaultClassName =
    "opacity-60 h-16 md:h-20 w-auto object-contain hover:opacity-100 transition-all duration-300 hover:scale-105";

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

      {/* TÜV-Badge */}
      <Image
        src="/assets/cert-badge-2.png"
        alt="TÜV Rheinland Certified – ID 0000085895"
        width={400}  // 16:7 Verhältnis: 400 / 175 ≈ 2,285
        height={175}
        className={twMerge(defaultClassName, className)}
      />
    </>
  );
}
