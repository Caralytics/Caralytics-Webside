import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  // Gemeinsame Styles
  const baseClassName =
    "opacity-60 w-auto object-contain transition-all duration-300 hover:opacity-100 hover:scale-105";

  return (
    <>
      {/* VDI-Badge */}
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure - Mitglied"
        width={600}
        height={250}
        className={twMerge(baseClassName, className)}
      />

      {/* TÜV Rheinland Badge */}
      <Image
        src="/assets/cert-badge-2.png"
        alt="TÜV Rheinland Certified"
        width={2000}   // passend zu deinem neuen Web-Export
        height={1000}
        className={twMerge(baseClassName, className)}
      />
    </>
  );
}
