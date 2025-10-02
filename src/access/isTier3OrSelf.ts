import { Access } from 'payload';

export const isTier3OrSelf: Access = ({ req: { user } }) => {
    if (user) {
        if (user.roles?.includes('tier3')) {
            return true;
        }

        return {
            id: {
                equals: user.id,
            },
        };
    }

    return false;
};
