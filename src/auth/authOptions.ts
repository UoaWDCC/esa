import { getServerSession, NextAuthOptions, SessionStrategy, Session, DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// Extend the default session to include googleId
declare module "next-auth" {
  interface Session {
    user: {
      googleId?: string
    } & DefaultSession["user"]
  }
}

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
        // Callback to add the googleId to the session object
        async session({ session, token }) {
            session.user.googleId = token.sub;
            return session;
        }
    },
}

// To get current user's session on server side (if logged in). null otherwise.
export const getAuth = () => getServerSession(authOptions)