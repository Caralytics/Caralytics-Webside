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
  title: "Carlytics - Precision Meets Intelligence",
  description: "AI-powered vehicle valuation for the modern era",
  icons: "/assets/logo/favicon-32x32-and-16x16/32x32.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
