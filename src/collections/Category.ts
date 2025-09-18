import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'categoryName',
    },
    fields: [
        {
            name: 'categoryName',
            type: 'text',
            required: true,
        },
    ],
};