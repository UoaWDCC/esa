import { isTier3, isTier3FieldLevel } from '@/access/isTier3';
import { isTier3OrSelf } from '@/access/isTier3OrSelf';
import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: true,
    access: {
        create: isTier3,
        read: isTier3OrSelf,
        update: isTier3OrSelf,
        delete: isTier3,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: 'roles',
            saveToJWT: true,
            type: 'select',
            hasMany: false,
            defaultValue: 'tier1',
            access: {
                create: isTier3FieldLevel,
                update: isTier3FieldLevel,
            },
            options: [
                {
                    label: 'Tier 1',
                    value: 'tier1',
                },
                {
                    label: 'Tier 2',
                    value: 'tier2',
                },
                {
                    label: 'Tier 3',
                    value: 'tier3',
                },
            ],
        },
    ],
};
