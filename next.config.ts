import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ...other config options
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
      fs: false,
      path: false,
      os: false,
    };
    config.externals = config.externals || [];
    config.externals.push({ canvas: "commonjs canvas" });
    return config;
  },
};

export default nextConfig;
