import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ynxodegjtxshhgjyhofc.supabase.co",
      },
    ],
  },
};

export default nextConfig;