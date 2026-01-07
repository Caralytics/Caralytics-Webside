import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase =
    "w-auto object-contain transition-all duration-300";

  // PREMIUM CARD STYLE
  const card =
    "relative rounded-3xl px-5 py-3 flex items-center justify-center " +
    // glassmorphism
    "bg-white/70 backdrop-blur-xl " +
    // soft gradient overlay
    "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/60 before:to-white/10 before:pointer-events-none " +
    // inner subtle stroke
    "border border-white/60 " +
    // outer subtle shadow glow
    "shadow-[0_20px_60px_rgba(0,0,0,0.12)] " +
    // hover motion + glow
    "hover:-translate-y-[3px] hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] transition-all duration-500";

  return (
    <div className="flex items-center gap-5">
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
