import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Caralytics – Engineering | Technology Preview",
  description:
    "Caralytics Technology Preview – Die Zukunft der Fahrzeuganalyse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${manrope.variable} font-sans bg-brand-deep-navy flex flex-col w-screen overflow-x-hidden`}
      >
        <Analytics />

        {/* KEIN Navbar */}
        <main className="flex-1">{children}</main>

        {/* KEIN Footer */}
        <CookieBanner />
      </body>
    </html>
  );
}
