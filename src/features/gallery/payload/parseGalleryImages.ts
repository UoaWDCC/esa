import { GalleryImage } from '@/payload-types'
import { GalleryImageData } from "@/types/GalleryImageData";

export default function parseGalleryImages(galleryImages: GalleryImage[]): GalleryImageData[] {
    return galleryImages.map((doc): GalleryImageData => {
        // Safe check for image url
        const imageUrl =
            doc.image &&
            typeof doc.image === 'object' &&
            'url' in doc.image &&
            typeof doc.image.url === 'string'
                ? doc.image.url
                : '/images/logo/esa_mascot.png';
        return {
            image: imageUrl,
            eventName: doc.eventName || 'Event Name',
            eventDate: doc.eventDate || '2023-01-01',
            pinColour: doc.pinColour || 'red',
            variation: doc.variation || 'large'
        };
    });
}
