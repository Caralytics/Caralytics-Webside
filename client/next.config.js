const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "dist",
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname, ".."),
    resolveAlias: {
      "@/*": "./*",
      "@/components/*": "./components/*",
    },
  },
  devIndicators: false,
};

module.exports = nextConfig;
