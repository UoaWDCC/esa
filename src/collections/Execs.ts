import { isTier3 } from '@/access/isTier3';
import type { CollectionConfig } from 'payload';

export const Execs: CollectionConfig = {
    slug: 'execs',
    access: {
        read: () => true,
        create: isTier3,
        update: isTier3,
        delete: isTier3,
    },
    admin: {
        useAsTitle: "firstName"
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
                description: 'Short biography of the executive (max 200 characters)',
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
