import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        port: '',
        pathname:
          '/jtv_user_pictures/c5a9df33-4e9e-4df6-8dba-c3746041b95e-profile_image-300x300.png',
        search: '',
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
