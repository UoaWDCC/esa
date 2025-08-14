import { Media, Sponsor } from '@/payload-types'
import {SponsorData} from "@/types/SponsorData";

export default function parseSponsors(data: Sponsor[]): SponsorData[] | undefined {
  if (!data) {
    return undefined
  }

  const sponsors: SponsorData[] = (data ?? [])
    .filter(
      (sponsor): sponsor is Sponsor & { logo: Media } =>
        typeof sponsor === 'object' &&
        sponsor !== null &&
        typeof sponsor.logo == 'object' &&
        sponsor.logo !== null,
    )
    .map((sponsor) => ({
      id: sponsor.id,
      name: sponsor.name,
      logo: {
        alt: sponsor.logo.alt,
        url: sponsor.logo.url ?? '',
      },
      deal: sponsor.deal ?? '',
      importance: sponsor.importance,
    }))

  return sponsors
}
