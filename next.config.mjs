import { withPayload } from '@payloadcms/next/withPayload';
import { createJiti } from 'jiti';
const jiti = createJiti(import.meta.url);

await jiti.import('./src/config/serverEnv.ts');
await jiti.import('./src/config/clientEnv.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here

    // Fly built with `next build --experimental-build-mode compile`, which skipped
    // lint and type checking. Vercel runs a full `next build`, so preserve that skip.
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },

    // Media is served from CloudFront (see src/collections/Storage.ts), so the
    // image optimiser needs that host allow-listed. Empty when unset, which
    // leaves media on the /api/media/file/* proxy.
    images: {
        remotePatterns: process.env.MEDIA_CDN_HOSTNAME
            ? [
                  {
                      protocol: 'https',
                      hostname: process.env.MEDIA_CDN_HOSTNAME,
                      pathname: '/media/**',
                  },
              ]
            : [],
    },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
