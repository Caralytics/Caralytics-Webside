import { ASSETS_SRC } from "@/lib/routes";
import Image from "next/image";

export default function BackgroundCover() {
  return (
    <Image
      src={`${ASSETS_SRC}/hero-bg.svg`}
      alt="hero section background"
      fill
      className="absolute inset-0 w-full h-full object-cover pointer-events-none animate-[fade-in_1.5s_ease-in-out_1_forwards]"
    />
  );
}
