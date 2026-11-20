import type { NextConfig } from "next";

// NOTE: the Stability API key is read server-side from .env.local
// (process.env.STABILITY_API_KEY). Do NOT expose it via the `env` option here,
// that would inline the key into the bundle.
const nextConfig: NextConfig = {};

export default nextConfig;
