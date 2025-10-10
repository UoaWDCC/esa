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
    callbacks: {
        async signIn({ profile }) {
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

            // If member doesn't exist, go to signup page
            if (member.totalDocs == 0) {
                const token = signVerificationToken({ googleId: googleId!, email: profile?.email! }, '30m');
                return `/signup?email=${profile?.email}&token=${token}`;
            // If member exists, and has googleId, allow sign in
            } else if (member.docs[0].googleId == googleId) {
                return true;
            // If member exists, but doesn't have googleId, send a verification email with the verification token
            } else {
                const token = signVerificationToken({ googleId: googleId!, email: profile?.email! }, '10m');
                return `/verify?email=${profile?.email}&token=${token}`;
            }
        }
    }
}