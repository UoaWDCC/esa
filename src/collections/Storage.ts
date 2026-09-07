import { s3Storage } from '@payloadcms/storage-s3';

// T3 env
import { env } from 'config/serverEnv';

const cdnHostname = env.MEDIA_CDN_HOSTNAME;

// Serve media straight from the CDN instead of proxying it through
// /api/media/file/*. That route runs a Mongo lookup and buffers the whole file
// through the function on every request, which is slow enough on a cold start
// that the image optimiser gives up and caches a 404.
//
// Only applied when MEDIA_CDN_HOSTNAME is set, so local dev and any environment
// without a distribution keep the default proxy behaviour.
const generateFileURL = cdnHostname
    ? ({ filename, prefix }: { filename: string; prefix?: string }) => {
          // Filenames contain spaces, apostrophes, '+' and non-ASCII characters,
          // so each path segment has to be encoded individually.
          const segments = [prefix, filename].filter(Boolean) as string[];
          return `https://${cdnHostname}/${segments.map(encodeURIComponent).join('/')}`;
      }
    : undefined;

const storage = s3Storage({
    collections: {
        media: {
            disableLocalStorage: true,
            prefix: 'media',
            ...(generateFileURL ? { generateFileURL } : {}),
        },
    },
    bucket: env.S3_BUCKET || '',
    config: {
        credentials: {
            accessKeyId: env.S3_ACCESS_KEY_ID || '',
            secretAccessKey: env.S3_SECRET_ACCESS_KEY || '',
        },
        region: env.S3_REGION || '',
    },
});

export default storage;
