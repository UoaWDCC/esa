import type { CollectionConfig } from 'payload'

export const Sponsors: CollectionConfig = {
  slug: 'sponsor',
  orderable: true,
  fields: [
    {
      name: 'name',
      label: 'Sponsor Name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      label: 'Sponsor Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      displayPreview: true,
    },
    {
      name: 'deal',
      label: 'Sponsor Deal/Benefit',
      type: 'text',
    },
    {
      name: 'importance',
      label: 'Weight of Importance',
      type: 'number',
      min: 1,
      defaultValue: 1,
      required: true,
      validate: (value: number | null | undefined) => {
        if (value !== undefined && value !== null && (value * 10) % 1 !== 0) {
          return 'Value must be to 1 decimal place.'
        }
        return true
      },
    },
  ],
}
