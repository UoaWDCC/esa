import { EventData } from '@/types/EventData';

interface EventDoc extends EventData {}


export function setupEvents(parsedEvents : EventData[], upcomingEvents : EventData[], pastEvents : EventData[]) {
    // Sort by date ascending, then take the first 10 events from all events in payload
    const docs: EventDoc[] = parsedEvents
        .sort((a: EventDoc, b: EventDoc) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 10);
    
    
    // Get today's date at midnight (UTC)
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    
    // For every event, split events into upcoming and past based on today's date
    docs.forEach((doc) => {
        const dateObj = new Date(doc.date)
    
        // Check if the event is upcoming or past
        if (dateObj >= today) { // Upcoming event
            upcomingEvents.push(doc)
        } else {
            pastEvents.push(doc) // Past event
        }
    })
    
    pastEvents.reverse(); // Newest past event is at index 0
}