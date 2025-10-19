'use server';
import { getPayload } from '@/lib/payload';
import parseExecRoleCategory from './parseExecRoleCategory';

export const getExecRoleCategory = async () => {
    const payload = await getPayload();
    const execRoleCategory = await payload.find({
        collection: 'execRoleCategory',
        pagination: false,
    });

    console.log('Fetched exec role category:', execRoleCategory.docs);

    return parseExecRoleCategory(execRoleCategory.docs);
};