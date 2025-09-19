import type { CollectionConfig } from 'payload';

export const Execs: CollectionConfig = {
    slug: 'execs',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
                description: 'Full name of the executive',
            },
        },
        {
            name: 'ethnicity',
            type: 'text',
            required: true,
            admin: {
                description: 'Ethinicity of the executive',
            },
        },
        {
            name: 'role',
            type: 'text',
            required: true,
            admin: {
                description: 'Role held by the executive',
            },
        },
        {
            name: 'degree',
            type: 'text',
            required: true,
            admin: {
                description: 'Degree of the executive',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Image of the executive',
            },
        },
        {
            name: 'about',
            type: 'text',
            required: true,
            admin: {
                description: 'Short biography of the executive',
            },
        },
        {
            name: 'isImportant',
            label: 'Is this Executive important?',
            type: 'checkbox',
            required: true,
            admin: {
                description: 'Controls whether this exec will be displayed on the about us page',
            },
        },
    ],
};
