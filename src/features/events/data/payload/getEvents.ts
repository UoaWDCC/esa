'use server';
import { getPayload } from '@/lib/payload';
import parseEvents from '@/features/events/data/payload/parseEvents';

export const getEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
        collection: 'events',
        pagination: false,
    });
    return parseEvents(events.docs);
};