import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow serving SVGs via the Next.js image optimizer in production.
    // Local dev can be lenient, but production (Vercel) blocks SVGs by default
    // when routed through /_next/image. Enabling this allows our in-repo SVGs
    // to be optimized and served correctly. If you prefer not to enable this
    // globally, consider adding `unoptimized` to individual <Image/> usages.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
