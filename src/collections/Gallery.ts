import { CollectionConfig } from "payload";
import { PIN_COLOUR_OPTIONS, VARIATION_OPTIONS } from "../types/GalleryData";

export const Gallery: CollectionConfig = {
    slug: "gallery",
    access: {
        read: () => true // Not sure about what tier of access to put, so leaving it open for now
    },
    fields: [
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            displayPreview: true,
            label: "Gallery Image"
        },
        {
            name: "eventName",
            type: "text",
            required: true,
            label: "Event Name"
        },
        {
            name: "eventDate",
            type: "date",
            required: true,
            label: "Event Date",
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'dd/MM/yyyy'
                }
            }
        },
        // To change options for pinColour and variation, edit src/types/GalleryData.ts
        {
            name: "pinColour",
            type: "select",
            required: true,
            label: "Pin Colour",
            options: PIN_COLOUR_OPTIONS
        },
        {
            name: "variation",
            type: "select",
            required: true,
            label: "Polaroid Size",
            defaultValue: 'small',
            options: VARIATION_OPTIONS
        }
    ]
}


        
        
