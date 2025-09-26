import { Access, FieldAccess } from 'payload';

export const isTier3: Access = ({ req: { user } }) => {
    return Boolean(user?.roles?.includes('tier3'));
};

export const isTier3FieldLevel: FieldAccess = ({ req: { user } }) => {
    return Boolean(user?.roles?.includes('tier3'));
};
