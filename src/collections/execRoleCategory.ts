import type { CollectionConfig } from 'payload';

{
    /* many-to-many relationship between execs, roles, and categories */
}
export const execRoleCategories: CollectionConfig = {
    slug: 'execRoleCategories',
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
