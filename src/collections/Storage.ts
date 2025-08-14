import { s3Storage } from '@payloadcms/storage-s3';

// T3 env
import { env } from 'config/serverEnv';

const storage = s3Storage({
    collections: {
        media: {
            disableLocalStorage: true,
            prefix: 'media',
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
