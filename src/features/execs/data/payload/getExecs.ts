'use server';
import { getPayload } from '@/lib/payload';
import parseExecs from './parseExecs';

export const getExecs = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: 'execs',
        pagination: false,
    });

    return parseExecs(events.docs);
};