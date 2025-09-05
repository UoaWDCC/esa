import type { CollectionConfig } from 'payload';

export const Execs: CollectionConfig = {
    slug: 'execs',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            required: true,
            admin: {
                description: 'First name of the executive',
            },
        },
        {
            name: 'lastName',
            type: 'text',
            required: true,
            admin: {
                description: 'Last name of the executive',
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
            type: 'textarea',
            required: true,
            admin: {
                description: 'Short biography of the executive',
            },
            validate: (val: string | null | undefined) => {
                if (val && val.length > 200) {
                    return 'About text must not exceed 200 characters';
                }
                return true;
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
