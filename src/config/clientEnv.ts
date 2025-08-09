import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// List all client-side environment variables here
export const env = createEnv({
    client: {
        NEXT_PUBLIC_WEB3FORMS_KEY: z.string().min(1),
    },
    // Pretty much just relist the client variables here to keep Next.js happy
    runtimeEnv: {
        NEXT_PUBLIC_WEB3FORMS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    },
});
