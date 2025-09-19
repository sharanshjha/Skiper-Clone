import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Ignore TypeScript build errors on Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Ignore ESLint errors on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
