import Pin from "./Pin";

const PIN_COLOURS = {
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

export type PinColour = keyof typeof PIN_COLOURS;

export interface PolaroidProps {
    image: string;
    eventDate: string;
    eventName: string;
    pinColour: PinColour;
    variation: 'small' | 'large';
}

export default function Polaroid({ image, eventDate, eventName, pinColour = 'red', variation }: PolaroidProps) {
    return (     
        <div className="bg-white rounded-md w-[700px] h-[350px] lg:w-[40s0px] drop-shadow-lg">
            <Pin 
                className="absolute left-[45%] top-[-5%]" 
                hexPinColour={PIN_COLOURS[pinColour]} 
            />
        </div>
    );
}