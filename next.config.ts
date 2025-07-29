import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ...other config options
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;
