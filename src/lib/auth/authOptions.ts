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
                // Rate limit: check lastVerificationEmailSentAt, if within 5 minutes, do not send email
                const member = await payload.find({
                    collection: 'members',
                    where: { email: { equals: profile?.email } },
                    limit: 1,
                });
                
                const lastSent = member.docs[0].lastVerificationEmailSentAt;

                console.log('Last verification email sent at:', lastSent);

                if (lastSent) {
                    const lastSentDate = new Date(lastSent);
                    const now = new Date();
                    const diffMinutes = (now.getTime() - lastSentDate.getTime()) / (1000 * 60);
                    if (diffMinutes < 5) { // 5 minutes rate limit
                        return `/verify?email=${profile?.email}&token=notsent`;
                    }
                }

                const token = signVerificationToken({ googleId: googleId!, email: profile?.email! }, '10m');
                return `/verify?email=${profile?.email}&token=${token}`;
            }
        }
    }
}