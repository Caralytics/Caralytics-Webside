import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}
export default function CertBadges({ className }: CertBadgesProps) {
  const defaultClassName =
    "opacity-60 w-[100px] h-14 object-contain hover:opacity-100 transition-all duration-300 hover:scale-105";
  return (
    <>
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure - MITGLIED"
        width={573}
        height={202}
        className={twMerge(defaultClassName, className)}
      />
      <Image
        src="/assets/cert-badge-2.png"
        alt="Zertifizierter Gutachter"
        width={574}
        height={201}
        className={twMerge(defaultClassName, className)}
      />
    </>
  );
}
