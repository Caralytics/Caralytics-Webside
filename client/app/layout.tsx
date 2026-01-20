import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/navigation/Navbar";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Caralytics Engineering",
  description: "Technology Preview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${manrope.variable} font-sans bg-brand-deep-navy min-h-screen w-full overflow-x-hidden`}
      >
        <Analytics />

        {/* Navbar sichtbar */}
        <Navbar />

        {/* Content */}
        <main className="pt-24">{children}</main>

        <CookieBanner />
      </body>
    </html>
  );
}
