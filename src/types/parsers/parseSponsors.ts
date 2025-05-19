import { Media, Sponsor } from '@/payload-types'

export type SponsorParsed = {
  id: string
  name: string
  logo: {
    alt: string
    url: string
  }
  deal: string
  importance: number
}

export default function parseSponsors(data: Sponsor[]): SponsorParsed[] | undefined {
  if (!data) {
    return undefined
  }

  const sponsors: SponsorParsed[] = (data ?? [])
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
