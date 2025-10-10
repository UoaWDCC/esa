'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { getMemberByEmail } from '../payload/getMemberByEmail';

export function useAuthenticatedMember() {
  const { data: session, status } = useSession();
  const email = session?.user?.email;

  // Always call useQuery
  return useQuery({
    queryKey: ['members', email],
    queryFn: async () => {
      if (!email) return null;
      return await getMemberByEmail(email);
    },
    enabled: !!email && status === 'authenticated', 
    staleTime: 1000 * 60 * 10, // 10 minutes
  }).data;
}
