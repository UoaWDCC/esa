import { getPayload } from 'payload'
import config from '@payload-config'
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { env } from 'config/serverEnv';
import { signVerificationToken } from '../jwt/verificationToken';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID!,
            clientSecret: env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        strategy: 'jwt'
    },
    // prefer runtime process.env to avoid TS errors from your serverEnv type
    secret: process.env.NEXTAUTH_SECRET ?? (env as any).NEXTAUTH_SECRET,
    // optional: enable detailed logs in production temporarily
    // debug: process.env.NEXTAUTH_DEBUG === 'true',
    callbacks: {
        async signIn({ profile }) {
            try {
                const googleId = profile?.sub;
                const payload = await getPayload({ config });

                const member = await payload.find({
                    collection: 'members',
                    where: {
                        or: [
                            { googleId: { equals: googleId } },
                            { email: { equals: profile?.email } }
                        ]
                    },
                    depth: 0,
                    pagination: false,
                    limit: 1
                });

                if (!member || member.totalDocs === 0) {
                    const token = signVerificationToken({ googleId: googleId!, email: profile?.email! }, '30m');
                    return `/signup?email=${profile?.email}&token=${token}`;
                } else if (member.docs[0].googleId === googleId) {
                    return true;
                } else {
                    // rate-limit logic preserved
                    const memberByEmail = await payload.find({
                        collection: 'members',
                        where: { email: { equals: profile?.email } },
                        limit: 1,
                    });
                    const lastSent = memberByEmail.docs?.[0]?.lastVerificationEmailSentAt;
                    if (lastSent) {
                        const lastSentDate = new Date(lastSent);
                        const diffMinutes = (Date.now() - lastSentDate.getTime()) / (1000 * 60);
                        if (diffMinutes < 5) {
                            return `/verify?email=${profile?.email}&token=notsent`;
                        }
                    }
                    const token = signVerificationToken({ googleId: googleId!, email: profile?.email! }, '10m');
                    return `/verify?email=${profile?.email}&token=${token}`;
                }
            } catch (err) {
                console.error('NextAuth signIn error:', err);
                // avoid throwing 500; deny sign-in or return a safe redirect
                return false;
            }
        }
    }
}