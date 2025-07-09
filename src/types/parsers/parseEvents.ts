import { Event } from '@/payload-types'
import { EventData } from '@/types/EventData'

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function parseEvents(events: Event[]): EventData[] {
  return events.map((doc): EventData => {
    const dateObj = new Date(doc.date)
    const isLocked = doc.isLocked || false

    // Safe check for optional chaining + null fallback
    const imageUrl =
      doc.photo && typeof doc.photo === 'object' && 'url' in doc.photo && typeof doc.photo.url === 'string'
        ? doc.photo.url
        : '/images/home/latest_strip.png'

    return {
      _id: doc.id,
      title: doc.name,
      day: dateObj.getDate().toString().padStart(2, '0'),
      month: MONTHS[dateObj.getMonth()],
      date: doc.date,
      image: imageUrl,
      locked: isLocked,
      disabled: isLocked,
    }
  })
}
