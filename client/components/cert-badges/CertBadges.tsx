import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase = "w-auto object-contain transition-all duration-300";

  // Nur für das TÜV-Badge: sehr dezenter Hintergrund für Kontrast
  const tuvWrapper =
    "inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-2 py-1";

  return (
    <div className="flex items-center gap-4">
      {/* VDI – bleibt „nackt“, weil es selbst schon einen Kasten hat */}
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure – Mitglied"
        width={600}
        height={250}
        className={twMerge(imageBase, className)}
      />

      {/* TÜV – bekommt einen ganz leichten Rahmen für Kontrast */}
      <div className={tuvWrapper}>
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

