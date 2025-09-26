import { isTier2OrHigher } from '@/access/isTier2OrHigher';
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: isTier2OrHigher,
        update: isTier2OrHigher,
        delete: isTier2OrHigher,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: true,
};
