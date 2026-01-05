import Script from "next/script";
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
  icons: "/assets/logo/favicon-32x32-and-16x16/32x32.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">

       <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      
      <body
        className={`${manrope.variable} font-sans bg-brand-deep-navy flex flex-col w-screen overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
