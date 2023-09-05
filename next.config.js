const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif", "image/png", "image/jpeg"],
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "/_next/image/:path*",
      },
    ];
  },
};
