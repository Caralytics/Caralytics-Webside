"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/routes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/technology" || pathname === "/";

  const isSolid = scrolled || !isHomePage;

  const bgStyle = isSolid
    ? "bg-brand-arsenic-gray border-b border-brand-graphite-gray/50 backdrop-blur-sm"
    : "bg-transparent";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`overflow-x-hidden w-screen fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgStyle}`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-4 sm:px-10 sm:py-0 md:py-6 2xl:py-8">
        <div className="flex items-center justify-center text-center max-w-full h-fit sm:h-20 md:h-fit">

          {/* Center Logo */}
          <Link
            href={APP_ROUTES.HOME.ROOT}
            className={`relative flex hover:scale-105 transition-transform duration-300 ${
              isSolid
                ? "w-36 h-4 sm:w-44 lg:w-48 sm:h-5"
                : "w-36 sm:w-48 sm:h-5 h-4"
            }`}
          >
            {/* Voll-Logo */}
            <Image
              src="/assets/logo/pngs-svgs/3x/asset-1-at-3x-8.png"
              alt="Caralytics – Engineering"
              fill
              sizes="(max-width: 640px) 150px, 200px"
              className={`object-contain ${
                isSolid ? "animate-fade-in" : "hidden"
              }`}
              priority
            />

            {/* Emblem */}
            <Image
              src="/assets/logo/emblem/3x/asset-5-at-3x-8.png"
              alt="Caralytics Emblem"
              fill
              sizes="(max-width: 640px) 150px, 200px"
              className={`object-contain ${
                isSolid ? "hidden" : "animate-fade-in"
              }`}
              priority
            />
          </Link>

        </div>
      </div>
    </nav>
  );
}
