import type { CollectionConfig } from 'payload';

const Events: CollectionConfig = {
  slug: "events",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "name",
      label: "Event Name",
      type: "text",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      required: true,
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'EEEE d MMMM yyyy'
        },
      },
      required: true
    },
    {
      name: "startTime",
      label: "Event Starting Time",
      type: "date",
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'hh:mm a'
        },
      },
      required: true,
    },
    {
      name: "endTime",
      label: "Event Ending Time",
      type: "date",
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'hh:mm a'
        },
      },
    },
    {
      name: "memberPrice",
      label: "Member Price",
      type: "number",
      admin: {
        step: 0.01,
      },
      required: true,
    },
    {
      name: "nonMemberPrice",
      label: "Non-Member Price",
      type: "number",
      admin: {
        step: 0.01,
      },
      required: true,
    },
    {
      name: "description",
      label: "Event Description",
      type: "textarea",
    }
  ]
}

export default Events;