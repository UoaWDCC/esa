import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**', // Allow any path from media.licdn.com
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
