'use client';
import { useQuery } from '@tanstack/react-query';
import { getSortedCategory, SortedCategory } from '@/features/execs/data/payload/getSortedCategory';

export function useSortedCategory() {
  return useQuery<SortedCategory[]>({
    queryKey: ['sortedCategories'],
    queryFn: getSortedCategory,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}