import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled due to source map errors in dev

  // Enable standalone output for Docker
  output: 'standalone',

  // Disable image optimization for generated assets
  images: {
    unoptimized: true,
  },

  async headers() {
    const securityHeaders = [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];
    return [{ source: '/:path*', headers: securityHeaders }];
  },

  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://example.com/api/:path*', // TODO: Replace with your actual target URL
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
      // Redirect any path that doesn't start with a locale to /en/path
      // Note: This is a basic catch-all. For more complex i18n, consider using a library or the built-in i18n config if not using App Router manual handling.
      // However, since we removed middleware, we rely on the user landing on /en or /sk.
      // If they visit /some-page, we want to redirect to /en/some-page.
      // But we must exclude /api, /_next, etc.
      // Regex lookaheads are not fully supported in simple string sources, but we can try:
      {
        source: '/:path((?!en|sk|de|api|_next|favicon.ico|robots.txt|.*\\..*).*)',
        destination: '/en/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
