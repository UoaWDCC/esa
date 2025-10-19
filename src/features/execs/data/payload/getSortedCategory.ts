'use server';
import { getPayload } from '@/lib/payload';
import parseExecRoleCategory, { buildSortedCategories } from './parseExecRoleCategory';

export type SortedExec = {
  id: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  about?: string;
  imageUrl?: string;
  tilt?: boolean;
};

export type SortedCategory = {
  categoryId?: string;
  title: string;
  description?: string;
  execs: SortedExec[];
};

export const getSortedCategory = async (): Promise<SortedCategory[]> => {
  const payload = await getPayload();

  const ercResp = await payload.find({
    collection: 'execRoleCategory',
    pagination: false,
    depth: 2,
  });

  const execsResp = await payload.find({
    collection: 'execs',
    pagination: false,
  });

  const parsed = parseExecRoleCategory((ercResp as any).docs ?? []);
  const allExecs = ((execsResp as any).docs ?? []) as any[];

  // use builder from parse file to produce SortedCategory[]
  return buildSortedCategories(parsed, allExecs);
};