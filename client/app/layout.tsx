import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import Footer from "@/components/navigation/Footer";
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
  title:
    "Kfz-Gutachter Köln – Unfallgutachten & Schadengutachten | Caralytics Engineering",
  description:
    "Unfall in Köln passiert? Unfallgutachten durch Fahrzeugingenieur und TÜV-geschulten Kfz-Sachverständigen in Köln – wir sichern Beweise, ermitteln die Schadenhöhe und unterstützen bei der Regulierung mit der Versicherung.",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
