// next.config.ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // 1. Hide "X-Powered-By: Next.js" header for security
  poweredByHeader: false,

  // 2. Catch React 19 bugs early in development
  reactStrictMode: true,

  // 3. Optimize images for faster mobile load & better SEO (Core Web Vitals)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add your own domain/CDN here later when you switch to real images:
      // { protocol: "https", hostname: "cdn.yourdomain.com" },
    ],
  },

  // 4. Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // 5. Optional 301 SEO redirects (useful if old .html links were ever indexed)
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:slug(two-wheeler-insurance|three-wheeler-insurance|four-wheeler-insurance|commercial-vehicle-insurance|lmv-insurance|lgv-insurance|lpv-insurance|hgv-insurance|new-vehicle-insurance|vehicle-insurance-renewal).html",
        destination: "/insurance/:slug",
        permanent: true,
      },
      {
        source: "/:page(about|blog|contact|get-a-quote|privacy-policy|terms|disclaimer).html",
        destination: "/:page",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;