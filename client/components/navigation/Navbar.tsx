"use client";
import Drawer from "@/components/navigation/Drawer";
import { APP_ROUTES } from "@/lib/routes";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Use solid (scrolled) style if user has scrolled OR if we are not on the home page.
  // This ensures contrast on light pages by using the dark navbar.
  const isSolid = scrolled || !isHomePage;
  const bgStyle = isHomePage
    ? scrolled
      ? "bg-brand-arsenic-gray border-b border-brand-graphite-gray/50 backdrop-blur-sm"
      : "bg-transparent"
    : "bg-brand-arsenic-gray border-b border-brand-graphite-gray/50 backdrop-blur-sm";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`overflow-x-hidden w-screen fixed top-0 left-0 right-0 z-50 transition-all border-none duration-500 ${bgStyle}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16 py-4 sm:px-10 sm:py-0 md:py-6 2xl:py-8">
          <div className="flex items-center justify-between text-center max-w-full h-fit sm:h-20 md:h-fit">
            {/* Left: Menu */}
            <div className="hover:scale-105 transition-transform duration-300">
              <Drawer
                isSolid={!isHomePage}
                buttonStyle="flex items-center gap-2 uppercase tracking-wider text-sm md:text-base font-medium hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto text-brand-surface"
              />
            </div>

            {/* Center: Logo */}
            <Link
              href={APP_ROUTES.HOME.ROOT}
              className={`relative sm:ml-11 md:ml-10 flex hover:scale-105 transition-transform duration-300 ${
                isSolid
                  ? "mr-6 sm:mr-0 w-36 h-4 sm:w-44 lg:w-48 sm:h-5 "
                  : "mr-4 sm:mr-0 w-36 sm:w-48 sm:h-5 h-4"
              }`}
            >
              <Image
                src="/assets/logo/pngs-svgs/3x/asset-1-at-3x-8.png"
                alt="Carlytics"
                fill
                sizes="(max-width: 640px) 150px, 200px"
                className={`object-contain ${
                  isSolid ? "animate-fade-in" : "hidden"
                }`}
                priority
              />
              <Image
                src="/assets/logo/emblem/3x/asset-5-at-3x-8.png"
                alt="Carlytics"
                fill
                sizes="(max-width: 640px) 150px, 200px"
                className={`object-contain ${
                  isSolid ? "hidden" : "animate-fade-in"
                }`}
                priority
              />
            </Link>

            {/* Right: Contact Button */}
            <Link
              className="flex items-center gap-2 uppercase tracking-wider text-sm md:text-base font-medium hover:opacity-70 transition-all cursor-pointer pointer-events-auto text-brand-surface hover:scale-105 duration-300"
              href={APP_ROUTES.CONTACT}
            >
              <Phone className="hidden sm:inline" size={20} strokeWidth={1.5} />
              <span className="hidden sm:inline">Kontakt</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
