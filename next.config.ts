import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Enable file system polling
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300,
      ignored: /node_modules/
    };
    // Keep existing experimental configuration
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

export default nextConfig;