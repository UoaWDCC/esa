import type { CollectionConfig } from 'payload';

export const Roles: CollectionConfig = {
    slug: 'roles',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'roleName',
    },
    fields: [
        {
            name: 'roleName',
            label: "Role Name",
            type: 'text',
            required: true,
        },
    ],
};