import { Resend } from 'resend'

import { env } from 'config/serverEnv';

export const getResend = () => {
    if (!env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not defined');
    }
    return new Resend(env.RESEND_API_KEY);
}