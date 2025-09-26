import { FieldAccess } from 'payload';

export const isTier2OrHigher: FieldAccess = ({ req: { user } }) => {
    return Boolean(user?.roles?.includes('tier3') || user?.roles?.includes('tier2'));
};
