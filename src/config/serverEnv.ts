import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// List all server-side environment variables here
export const env = createEnv({
    server: {
        DATABASE_URI: z.string().min(1),
        PAYLOAD_SECRET: z.string().min(1),
        S3_BUCKET: z.string().min(1),
        S3_ACCESS_KEY_ID: z.string().min(1),
        S3_SECRET_ACCESS_KEY: z.string().min(1),
        S3_REGION: z.string().min(1),
        STRIPE_SECRET_KEY: z.string().min(1),
        STRIPE_WEBHOOK_SECRET: z.string().min(1),
        BASE_URL: z.string().url().default('https://esa.wdcc.co.nz'),
    },
    experimental__runtimeEnv: process.env,
    skipValidation: process.env.SKIP_ENV_VALIDATION === 'true'
});
