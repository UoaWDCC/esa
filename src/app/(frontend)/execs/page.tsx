'use client';

import ExecCategory from './_components/ExecCategory';
import { useExecs } from '@/features/execs/data/tanstack/useExecs';
import { useExecRoleCategory } from '@/features/execs/data/tanstack/useExecRoleCategory';
import { useMemo } from 'react';

type Exec = {
  id: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  about?: string;
  imageUrl?: string;
  tilt?: boolean;
};

type SortedCategory = {
  categoryId?: string;
  title: string;
  description?: string;
  execs: Exec[];
};

export default function Execs() {
  const { data: execsData, isLoading: execsLoading, error: execsError } = useExecs();
  const { data: ercData, isLoading: ercLoading, error: ercError } = useExecRoleCategory();

  const loading = execsLoading || ercLoading;
  const error = execsError || ercError;

  const sortedCategories = useMemo<SortedCategory[]>(() => {
    const map = new Map<string, SortedCategory>();

    // normalise entries from execRoleCategories
    (ercData ?? []).forEach((item: any) => {
      const cat = typeof item.category === 'object' ? item.category : { id: item.categoryId ?? item.category };
      const catId = cat?.id ?? String(item.categoryId ?? item.category ?? 'uncategorized');
      const catName = cat?.categoryName ?? item.categoryName ?? item.category ?? 'Uncategorized';
      const catDesc = cat?.categoryDescription ?? item.categoryDescription ?? '';

      const roleObj = typeof item.role === 'object' ? item.role : null;
      const roleName = roleObj?.roleName ?? roleObj?.name ?? item.roleName ?? item.role ?? '';

      const execObj = typeof item.exec === 'object' ? item.exec : null;
      const execId = execObj?.id ?? item.execId ?? item.exec ?? item.exec?._id;
      if (!execId) return;

      const execFirstName = execObj?.firstName ?? item.execFirstName ?? execObj?.name?.split?.(' ')?.[0] ?? '';
      const execLastName = execObj?.lastName ?? item.execLastName ?? execObj?.name?.split?.(' ')?.slice(1).join(' ') ?? '';
      const execAbout = execObj?.about ?? item.execAbout ?? '';
      const execImage =
        (execObj?.image && typeof execObj.image === 'object' && (execObj.image.url ?? execObj.image.src)) ??
        item.execImage ??
        (typeof execObj?.image === 'string' ? execObj.image : undefined) ??
        '';

      const exec: Exec = {
        id: String(execId),
        firstName: execFirstName,
        lastName: execLastName,
        role: roleName,
        about: execAbout,
        imageUrl: execImage,
        tilt: Math.random() < 0.5,
      };

      const key = `${catId}::${catName}`;
      if (!map.has(key)) {
        map.set(key, { categoryId: catId, title: catName, description: catDesc, execs: [] });
      }
      map.get(key)!.execs.push(exec);
    });

    // include execs that weren't present in execRoleCategories
    const assigned = new Set<string>();
    for (const c of map.values()) for (const e of c.execs) assigned.add(String(e.id));

    (execsData ?? []).forEach((e: any) => {
      const id = e._id ?? e.id;
      if (!id) return;
      if (assigned.has(String(id))) return;

      const exec: Exec = {
        id: String(id),
        firstName: e.firstName ?? e.name?.split?.(' ')?.[0] ?? '',
        lastName: e.lastName ?? (e.name ? e.name.split(' ').slice(1).join(' ') : ''),
        role: e.role ?? '', 
        about: e.about ?? '',
        imageUrl:
          (e.image && typeof e.image === 'object' && (e.image.url ?? e.image.src)) ??
          (typeof e.image === 'string' ? e.image : '') ??
          '',
        tilt: Math.random() < 0.5,
      };

      const unassignedKey = `unassigned::Unassigned`;
      if (!map.has(unassignedKey)) {
        map.set(unassignedKey, { title: 'Unassigned', description: '', execs: [] });
      }
      map.get(unassignedKey)!.execs.push(exec);
    });

    // convert to sorted array
    return Array.from(map.values())
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((c) => ({ ...c, execs: c.execs }));
  }, [ercData, execsData]);

  return (
    <section className="flex flex-col items-center lg:px-[13%] md:px-[10%] px-[6%] py-28">
      <div className="flex flex-col items-center">
        <h2 className="text-primary-red">Our Execs</h2>
        <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
          <p className="text-primary-white mb-2">View our next and previous events here!</p>
        </div>
        <hr className="mx-auto mb-15 mt-4 w-[1200px] h-px border-0 bg-white/50" />
      </div>

      {loading && <p>Loading execs…</p>}
      {error && <p>Error loading execs.</p>}

      {!loading &&
        !error &&
        sortedCategories.map((category) => (
          <ExecCategory
            key={category.categoryId ?? category.title}
            title={category.title}
            blurb={category.description}
            execs={category.execs}
          />
        ))}
    </section>
  );
}
