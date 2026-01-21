import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Falls du Fonts nutzt
import "./globals.css";

// ... Fonts setup ...

export const metadata: Metadata = {
  title: {
    default: "Caralytics | Automotive Intelligence",
    template: "%s | Caralytics",
  },
  description: "The new standard in automotive data analysis. AI-driven precision for vehicle valuation and damage assessment. Coming 2026.",
  keywords: ["Automotive AI", "Vehicle Data", "Stealth Startup", "Car Analytics"],
  robots: {
    index: true,
    follow: true, // Wir erlauben Google, die Startseite zu sehen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body className="bg-[#020617] antialiased">
        {children}
      </body>
    </html>
  );
}
