// Shared constants and types for Gallery collection and Polaroid component

export const PIN_COLOURS = {
    red: '#A92622',
    blue: '#0000FF',
    green: '#55A077',
    yellow: '#FFC857',
    purple: '#800080',
    orange: '#FFA500',
    pink: '#FFC0CB',
    teal: '#008080',
    brown: '#A52A2A',
    gray: '#808080'
} as const;

export const VARIATIONS = {
    small: {
        dimensions: 'w-[42vw] aspect-[290/260] md:w-[27vw] lg:w-[17vw]',
        imageSize: '260px'
    },
    large: {
        dimensions: 'w-[45vw] aspect-[370/320] md:w-[30vw] lg:w-[20vw]',
        imageSize: '370px'
    }
} as const;

export type PinColour = keyof typeof PIN_COLOURS;
export type Variation = keyof typeof VARIATIONS;

// Type for the gallery item in the collection
export interface GalleryImageData {
    image: string;
    eventName: string;
    eventDate: string;
    pinColour: PinColour;
    variation: Variation;
}

// Convert pin colors to Payload select options
export const PIN_COLOUR_OPTIONS = Object.keys(PIN_COLOURS).map(color => ({
    label: color.charAt(0).toUpperCase() + color.slice(1),
    value: color
}));

// Convert variations to Payload select options
export const VARIATION_OPTIONS = Object.keys(VARIATIONS).map(variation => ({
    label: variation.charAt(0).toUpperCase() + variation.slice(1),
    value: variation
}));