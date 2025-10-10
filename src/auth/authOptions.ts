import { getPayload } from 'payload'
import config from '@payload-config'
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
                pagination: false
            });

            // If member doesn't exist, go to signup page
            if (member.totalDocs == 0) {
                return '/signup';
            // If member exists, and has googleId, allow sign in
            } else if (member.docs[0].googleId == googleId) {
                return true;
            // If member exists, but doesn't have googleId, send verification email (TODO LATER)
            } else {
                return '/';
            }
        }
    }
}