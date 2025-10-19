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
