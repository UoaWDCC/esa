import {useQuery} from "@tanstack/react-query";
import {getEvents} from "@/features/events/data/payload/getEvents";

export function useEvents() {
    return useQuery({
        queryKey: ["events"],
        queryFn: getEvents,
        staleTime: 1000 * 60
    });
}