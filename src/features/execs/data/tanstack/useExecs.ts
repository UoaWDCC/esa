import {useQuery} from "@tanstack/react-query";
import { getExecs } from "../payload/getExecs";

export function useEvents() {
    return useQuery({
        queryKey: ["execs"],
        queryFn: getExecs,
        staleTime: 1000 * 60 * 60 // 1 hour (execs data is not expected to change frequently)
    });
}