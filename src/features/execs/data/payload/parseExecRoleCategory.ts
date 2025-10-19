import { Exec } from '@/payload-types';
import { ExecData } from '@/types/ExecData';

export interface ExecRoleCategoryData {
  id?: string;
  execId?: string;
  execFirstName?: string;
  execLastName?: string;
  execImage?: string;
  execImageAlt?: string;
  execAbout?: string;
  execIsImportant?: boolean;
  roleId?: string;
  roleName?: string;
  categoryId?: string;
  categoryName?: string;
  categoryDescription?: string;
}

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

export function buildSortedCategories(parsed: ExecRoleCategoryData[], allExecs?: any[]): SortedCategory[] {
  const map = new Map<string, SortedCategory>();
  const assigned = new Set<string>();

  for (const p of parsed) {
    const catId = p.categoryId ?? 'uncategorised';
    const catKey = `${catId}::${p.categoryName ?? 'Uncategorised'}`;
    if (!map.has(catKey)) {
      map.set(catKey, {
        categoryId: p.categoryId,
        title: p.categoryName ?? 'Uncategorised',
        description: p.categoryDescription ?? '',
        execs: [],
      });
    }

    if (!p.execId) continue;
    assigned.add(String(p.execId));

    map.get(catKey)!.execs.push({
      id: String(p.execId),
      firstName: p.execFirstName ?? '',
      lastName: p.execLastName ?? '',
      role: p.roleName ?? '',
      about: p.execAbout ?? '',
      imageUrl: p.execImage ?? '',
      tilt: Math.random() < 0.5,
    });
  }

  if (Array.isArray(allExecs)) {
    const unassignedKey = `unassigned::Unassigned`;
    for (const e of allExecs) {
      const id = String(e._id ?? e.id ?? '');
      if (!id || assigned.has(id)) continue;

      if (!map.has(unassignedKey)) {
        map.set(unassignedKey, {
          categoryId: undefined,
          title: 'Unassigned',
          description: '',
          execs: [],
        });
      }

      map.get(unassignedKey)!.execs.push({
        id,
        firstName: e.firstName ?? (e.name ? String(e.name).split(' ')[0] : ''),
        lastName: e.lastName ?? (e.name ? String(e.name).split(' ').slice(1).join(' ') : ''),
        role: e.role ?? '',
        about: e.about ?? '',
        imageUrl:
          e.image && typeof e.image === 'object' ? e.image.url ?? e.image.src ?? '' : typeof e.image === 'string' ? e.image : '',
        tilt: Math.random() < 0.5,
      });
    }
  }

  // presidents/copresidents go to top, interns go to bottom, inbetween sorted alphabetical
  const isPresidentCategory = (title = '') => /\b(co[-\s]?president|presidents)\b/i.test(String(title));
  const isInternCategory = (title = '') => /\b(interns?|internship)\b/i.test(String(title));

  return Array.from(map.values()).sort((a, b) => {
    const aIsPres = isPresidentCategory(a.title);
    const bIsPres = isPresidentCategory(b.title);
    if (aIsPres && !bIsPres) return -1;
    if (bIsPres && !aIsPres) return 1;

    const aIsIntern = isInternCategory(a.title);
    const bIsIntern = isInternCategory(b.title);
    if (aIsIntern && !bIsIntern) return 1; // interns go to bottom
    if (bIsIntern && !aIsIntern) return -1;

    return a.title.localeCompare(b.title);
  });
}

export default function parseExecRoleCategory(items: any[]): ExecRoleCategoryData[] {
  if (!Array.isArray(items)) return [];

  return items.map((doc): ExecRoleCategoryData => {
    // normalize exec (may be populated object or an id string)
    const execObj = doc.exec && typeof doc.exec === 'object' ? doc.exec : null;
    const execId = execObj?.id ?? (typeof doc.exec === 'string' ? doc.exec : doc.exec?.toString?.());

    const execFirstName = execObj?.firstName ?? '';
    const execLastName = execObj?.lastName ?? '';
    const execAbout = execObj?.about ?? '';
    const execIsImportant = Boolean(execObj?.isImportant ?? doc.isImportant ?? false);

    const execImage =
      execObj?.image && typeof execObj.image === 'object' && 'url' in execObj.image && typeof execObj.image.url === 'string'
        ? execObj.image.url
        : typeof execObj?.image === 'string'
        ? execObj?.image
        : '/images/logo/esa_mascot.png';

    const execImageAlt =
      execObj?.image && typeof execObj.image === 'object' && 'alt' in execObj.image && typeof execObj.image.alt === 'string'
        ? execObj.image.alt
        : 'Executive Image';

    // normalize role (may be populated object or id/string)
    const roleObj = doc.role && typeof doc.role === 'object' ? doc.role : null;
    const roleId = roleObj?.id ?? (typeof doc.role === 'string' ? doc.role : undefined);
    const roleName = roleObj?.roleName ?? roleObj?.name ?? doc.roleName ?? '';

    // normalize category (may be populated object or id/string)
    const catObj = doc.category && typeof doc.category === 'object' ? doc.category : null;
    const categoryId = catObj?.id ?? (typeof doc.category === 'string' ? doc.category : undefined);
    const categoryName = catObj?.categoryName ?? catObj?.name ?? doc.categoryName ?? '';
    const categoryDescription = catObj?.categoryDescription ?? doc.categoryDescription ?? '';

    return {
      id: doc.id ?? doc._id,
      execId,
      execFirstName,
      execLastName,
      execImage,
      execImageAlt,
      execAbout,
      execIsImportant,
      roleId,
      roleName,
      categoryId,
      categoryName,
      categoryDescription,
    };
  });
}
