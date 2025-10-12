'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { getMemberByEmail } from '../payload/getMemberByEmail';

export function useAuthenticatedMember() {
  const { data: session } = useSession();
  const email = session?.user?.email;

  return useQuery({
    queryKey: ['members', email],
    queryFn: async () => {
      if (!email) return null;
      return await getMemberByEmail(email);
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  }).data;
}
