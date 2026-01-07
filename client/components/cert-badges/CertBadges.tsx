import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase = "w-auto object-contain transition-all duration-300";

  // TÜV – schlanker, aber kontrastreicher Wrapper
  const tuvWrapper =
    "inline-flex items-center justify-center rounded-xl border border-white/80 bg-white/45 backdrop-blur-md px-2.5 py-1.5 shadow-lg";

  return (
    <div className="flex items-center gap-4">
      {/* VDI – hat eigenen hellen Kasten, bleibt unverändert */}
      <Image
        src="/assets/cert-badge-1.png"
        alt="Verband Deutscher Ingenieure – Mitglied"
        width={600}
        height={250}
        className={twMerge(imageBase, className)}
      />

      {/* TÜV – dezenter, kontrastreicher Hintergrund ohne klobigen Kasten */}
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

