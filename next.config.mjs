import { withPayload } from '@payloadcms/next/withPayload';
import { createJiti } from 'jiti';
const jiti = createJiti(import.meta.url);

await jiti.import('./src/config/serverEnv.ts');
await jiti.import('./src/config/clientEnv.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
