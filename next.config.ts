import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // If you already have this, just add "media.licdn.com" to the array
    //domains: ["media.licdn.com"],
    // or with remotePatterns (either is fine)
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "media.licdn.com",
    //   },
    // ],
  },
};

export default nextConfig;
