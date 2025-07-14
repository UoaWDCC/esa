import EventCard from './EventCard'
import { getEvents } from '@/actions/getEvents'
import parseEvents from '@/types/parsers/parseEvents'
import { EventData } from '@/types/EventData'

export default async function Events() {
  const parsedEvents = parseEvents(await getEvents());

  const upcomingEvents: EventData[] = [];
  const pastEvents: EventData[] = []; // Stored as list incase we want to show more than one past event later


  // Sort by date ascending, then take the first 10
  const docs = parsedEvents
  .slice()
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 10);


  // Get today's date at midnight (UTC)
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  docs.forEach((doc) => {
    const dateObj = new Date(doc.date)

    if (dateObj >= today) { // Upcoming event
      upcomingEvents.push(doc)
    } else {
      pastEvents.push(doc) // Past event
    }
  })

  return (
    <section className="relative px-6 md:px-16 text-white h-[1043px]">

      {/* upcoming slots */}
      <div className="mt-[52px] space-y-[46px] flex flex-col relative z-10">
        {upcomingEvents.slice(0, 2).map((event, index) => (
          <EventCard
            key={event._id}
            event={event}
            even={index % 2 === 0}
          />
        ))}
      </div>

      {/* latest header */}
      <div className="flex flex-col items-center relative z-10">
        <div className="mt-[81px] mb-4 bg-[#871F1B] text-white text-2xl font-reservoir-grunge px-4.5 py-2 rounded-2xl inline-block">
          Latest&nbsp;Event:
        </div>
        {pastEvents[0] && (
          <EventCard
            event={pastEvents[0]}
          />
        )}
      </div>
    </section>
  )
}