import { getPayload } from 'payload';
import config from '@payload-config';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from 'config/serverEnv';
import { signVerificationToken } from '../jwt/verificationToken';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  // prefer runtime process.env to avoid TS errors from serverEnv typing
  secret: process.env.NEXTAUTH_SECRET ?? (env as any).NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }) {
      try {
        const googleId = profile?.sub;
        const email = profile?.email;
        if (!email) return false; // must have email

        const payload = await getPayload({ config });

        const memberRes = await payload.find({
          collection: 'members',
          where: {
            or: [{ googleId: { equals: googleId } }, { email: { equals: email } }],
          },
          depth: 0,
          pagination: false,
          limit: 1,
        });

        // 1) User does not exist -> redirect to signup (prefill email, token)
        if (!memberRes || memberRes.totalDocs === 0) {
          const token = signVerificationToken({ googleId: googleId ?? '', email }, '30m');
          return `/signup?email=${encodeURIComponent(email)}&token=${token}`;
        }

        const member = memberRes.docs?.[0];

        // 2) User exists and already linked to Google -> allow login
        if (member?.googleId && member.googleId === googleId) {
          return true;
        }

        // 3) User exists but not linked -> rate-limited verification flow
        const lastSent = member?.lastVerificationEmailSentAt;
        if (lastSent) {
          const lastSentDate = new Date(lastSent);
          const diffMinutes = (Date.now() - lastSentDate.getTime()) / (1000 * 60);
          if (diffMinutes < 5) {
            return `/verify?email=${encodeURIComponent(email)}&token=notsent`;
          }
        }

        const token = signVerificationToken({ googleId: googleId ?? '', email }, '10m');
        return `/verify?email=${encodeURIComponent(email)}&token=${token}`;
      } catch (err) {
        console.error('NextAuth signIn error:', err);
        // avoid throwing 500 — deny sign-in
        return false;
      }
    },
  },
};

export default authOptions;