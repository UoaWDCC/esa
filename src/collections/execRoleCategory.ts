import type { CollectionConfig } from 'payload';

// many-to-many relationship between execs, roles, and categories
export const execRoleCategory: CollectionConfig = {
    slug: 'execRoleCategory',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'exec',
            type: 'relationship',
            relationTo: 'execs',
            required: true,
        },
        {
            name: 'role',
            type: 'relationship',
            relationTo: 'roles',
            required: true,
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            required: true,
        },
    ],
};

// add this alias so imports that expect `execRoleCategories` succeed
export const execRoleCategories = execRoleCategory;

export default execRoleCategory;
