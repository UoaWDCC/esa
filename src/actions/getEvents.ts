"use server"
import { getPayload } from '@/lib/payload'
import { Event } from '@/payload-types'

export const getEvents = async () => {
    const payload = await getPayload();
    const events = await payload.find({
      collection: "events",
      pagination: false,
    });
    console.log("Events fetched:", events.docs);
    return events.docs as Event[];
  };