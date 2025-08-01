'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

// Idk if this is done right. Owen's ref github project uses findGlobal?

export const getSponsors = async () => {
  const payload = await getPayload({ config })
  const sponsors = await payload.find({
    collection: 'sponsor',
    depth: 1,
    pagination: false,
    sort: '_order',
  })

  return sponsors.docs
}
