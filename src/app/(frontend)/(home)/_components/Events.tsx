import Image from 'next/image'
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
      {/* page title */}
      <div className="relative w-fit mx-auto mt-14">
        <Image
          src="/images/home/events_title.png"
          alt="Events"
          width={456}
          height={116}
          className="object-contain object-top"
        />
        <Image
          src="/images/home/frame.png"
          alt="top left frame"
          width={60}
          height={60}
          className="absolute -top-5 -left-14 scale-x-[-1] scale-y-[-1] w-[20%] md:w-[15%] -rotate-18"
        />
        <Image
          src="/images/home/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -bottom-4 -right-10 w-[20%] md:w-[15%]"
        />
      </div>

      {/* upcoming slots */}
      <div className="mt-[52px] space-y-[46px] flex flex-col items-center relative z-10">
        {upcomingEvents.slice(0, 2).map(event => (
          <EventCard
            key={event._id}
            bgSrc={event.image}
            bgAlt={event.imageAlt}
            title={event.title}
            month={event.month}
            day={event.day}
            locked={event.locked}
            disabled={event.disabled}
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
            bgSrc={pastEvents[0].image}
            bgAlt={pastEvents[0].imageAlt}
            title={pastEvents[0].title}
            month={pastEvents[0].month}
            day={pastEvents[0].day}
            locked={pastEvents[0].locked}
            disabled={pastEvents[0].disabled}
          />
        )}
      </div>

      <Image
        src="/images/home/events_star.png"
        alt="Background Star"
        width={409}
        height={800}
        className="absolute left-0 top-20 z-0"
      />
    </section>
  )
}