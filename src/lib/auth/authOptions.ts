import { getPayload } from 'payload'
import config from '@payload-config'
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { env } from 'config/serverEnv';

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

            // If member doesn't exist, go to signup page (TODO: auto link account and auto fill details)
            if (member.totalDocs == 0) {
                return '/signup';
            // If member exists, and has googleId, allow sign in
            } else if (member.docs[0].googleId == googleId) {
                return true;
            // If member exists, but doesn't have googleId, store pendingGoogleId and send verification email
            } else {
                try{ 
                    await payload.update({
                        collection: 'members',
                        id: member.docs[0].id,
                        data: {
                            pendingGoogleId: googleId
                        }
                    });
                } catch (error) {
                    console.error('Error updating member with pendingGoogleId:', error);
                    return false;
                }

                return '/verify?email=' + profile?.email;
            }
        }
    }
}