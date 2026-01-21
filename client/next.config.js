import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... deine anderen configs falls vorhanden

  async redirects() {
    return [
      {
        // REGEX: Fängt ALLES ab, was NICHT die Startseite, Assets oder System-Dateien sind.
        // Das ist der "Staubsauger". Egal was der User eingibt -> Ab zur Startseite.
        source: '/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml).+)',
        destination: '/',
        permanent: true, // 301 Redirect: Sagt Google "Die alte Seite ist FÜR IMMER weg"
      },
    ];
  },
};

export default nextConfig;
