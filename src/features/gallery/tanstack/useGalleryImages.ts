'use client'

import { useQuery } from '@tanstack/react-query';
import { getGalleryImages } from '../payload/getGalleryImages';

export function useGalleryImages() {
    return useQuery({
        queryKey: ['galleryImages'],
        queryFn: getGalleryImages,
        staleTime: 1000 * 60 * 5 // 5 minutes 
    });
}