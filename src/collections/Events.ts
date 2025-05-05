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
      required: true
    },
    {
      name: "start-time",
      label: "Event Starting Time",
      type: "text",
      required: true,
    },
    {
      name: "end-time",
      label: "Event Ending Time",
      type: "text",
    },
    {
      name: "member-price",
      label: "Member Price",
      type: "number",
      required: true,
    },
    {
      name: "non-member-price",
      label: "Non-Member Price",
      type: "number",
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