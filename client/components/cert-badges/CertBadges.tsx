import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface CertBadgesProps {
  className?: ImageProps["className"];
}

export default function CertBadges({ className }: CertBadgesProps) {
  const imageBase = "w-auto object-contain m-0";

  // Gemeinsamer Wrapper für beide Badges (einheitlicher Look)
  const wrapper =
    "inline-flex items-center justify-center bg-white border border-black/10 rounded-xl px-2 py-1.5 shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl";

  return (
    <div className="flex items-center gap-4">
      {/* VDI Badge */}
      <div className={wrapper}>
        <Image
          src="/assets/cert-badge-1.png"
          alt="VDI Mitglied"
          width={800}
          height={400}
          className={twMerge("h-10 sm:h-12 md:h-14 lg:h-16", imageBase, className)}
        />
      </div>

      {/* TÜV Badge */}
      <div className={wrapper}>
        <Image
          src="/assets/cert-badge-2.png"
          alt="TÜV Rheinland Certified – ID 0000085895"
          width={2000}
          height={1000}
          className={twMerge("h-10 sm:h-12 md:h-14 lg:h-16", imageBase, className)}
        />
      </div>
    </div>
  );
}
