import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
    slug: 'categories',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'categoryName',
    },
    fields: [
        {
            name: 'categoryName',
            label: "Exec Team Category",
            type: 'text',
            required: true,
        },
        {
            name: 'categoryDescription',
            label: "Exec Team Category Description",
            type: 'textarea',
            required: true,
        },
    ],
};