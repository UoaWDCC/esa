'use server';
import { getPayload } from '@/lib/payload';
import parseExecs from './parseExecs';

export const getExecs = async () => {
    const payload = await getPayload();
    const execs = await payload.find({
        collection: 'execs',
        pagination: false,
    });

    console.log('Fetched execs:', execs.docs);

    return parseExecs(execs.docs);
};