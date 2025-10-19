import {useQuery} from "@tanstack/react-query";
import { getExecRoleCategory } from "../payload/getExecRoleCategory";

export function useExecRoleCategory() {
    return useQuery({
        queryKey: ["execRoleCategory"],
        queryFn: getExecRoleCategory,
        staleTime: 1000 * 60 * 60 // 1 hour (exec role category data is not expected to change frequently)
    });
}