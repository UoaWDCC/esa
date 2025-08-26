'use server';

import { getPayload } from 'payload';
import config from '@payload-config';
import parseSponsors from './parseSponsors';

export const getSponsors = async () => {
    const payload = await getPayload({ config });
    const sponsors = await payload.find({
        collection: 'sponsor',
        depth: 1,
        pagination: false,
        sort: '_order',
    });

    return parseSponsors(sponsors.docs);
};
