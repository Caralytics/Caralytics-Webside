/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hier aktivieren wir den "Scorched Earth" Redirect
  async redirects() {
    return [
      {
        // Diese REGEX sorgt dafür, dass JEDE Unterseite (außer System-Dateien)
        // hart auf die Startseite "/" zurückgeworfen wird.
        source: '/((?!_next|assets|favicon.ico|robots.txt|sitemap.xml|logo.png).+)',
        destination: '/',
        permanent: true, // 301 Redirect für Google (WICHTIG!)
      },
    ];
  },
};

export default nextConfig;
