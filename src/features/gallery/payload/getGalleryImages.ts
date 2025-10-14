'use server'

import { getPayload } from 'payload';
import config from '@payload-config';
import parseGalleryImages from './parseGalleryImages';

export const getGalleryImages = async () => {
    const payload = await getPayload({ config });
    const galleryItems = await payload.find({
        collection: 'galleryImages',
        pagination: false,
        sort: '-eventDate' // Sort by eventDate in descending order (most recent first)
    });

    return parseGalleryImages(galleryItems.docs);

}
