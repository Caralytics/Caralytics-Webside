/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/technology",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
