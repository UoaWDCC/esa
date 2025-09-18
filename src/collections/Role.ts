import type { CollectionConfig } from 'payload';

export const Roles: CollectionConfig = {
    slug: 'roles',
    admin: {
        useAsTitle: 'roleName',
    },
    fields: [
        {
            name: 'roleName',
            type: 'text',
            required: true,
        },
    ],
};