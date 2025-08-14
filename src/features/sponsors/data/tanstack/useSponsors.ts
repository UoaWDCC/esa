import { useQuery } from '@tanstack/react-query';
import { getSponsors } from '@/features/sponsors/data/payload/getSponsors';

export function useSponsors() {
    return useQuery({
        queryKey: ['sponsors'],
        queryFn: getSponsors,
        staleTime: 1000 * 60 * 60,
    });
}
