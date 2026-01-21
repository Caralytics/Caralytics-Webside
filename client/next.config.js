/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // WICHTIG: Ich habe 'sitemap.xml' hier aus der Liste entfernt!
        // Das bedeutet: Der Aufruf der Sitemap wird jetzt auf '/' umgeleitet.
        // Google wird das als "Ungültige Sitemap" werten und sie verwerfen.
        source: '/((?!_next|assets|favicon.ico|robots.txt|logo.png).+)',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
