import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/caralytics-logo.svg"   // dein Logo
            alt="Caralytics Engineering"
            width={140}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
