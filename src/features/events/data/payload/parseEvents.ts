import { Event } from '@/payload-types'
import { EventData } from '@/types/EventData'


export default function parseEvents(events: Event[]): EventData[] {
  return events.map((doc): EventData => {
    const isLocked = doc.isLocked || false

    // Safe check for image url and alt text
    const imageUrl =
      doc.photo && typeof doc.photo === 'object' && 'url' in doc.photo && typeof doc.photo.url === 'string'
        ? doc.photo.url
        : '/images/home/latest_strip.png'

    const imageAlt =
    doc.photo && typeof doc.photo === 'object' && 'alt' in doc.photo && typeof doc.photo.alt === 'string'
      ? doc.photo.alt
      : 'Event Image'
  

    return {
      _id: doc.id,
      title: doc.name,
      date: doc.date,
      image: imageUrl,
      imageAlt: imageAlt,
      locked: isLocked,
      disabled: isLocked,
      description: doc.description || "",
      signUpForm: doc.signUpForm
    }
  })
}
