import { getServerSession, NextAuthOptions, SessionStrategy } from "next-auth"
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
}

// To get current user's session (if logged in). null otherwise.
export const getAuth = () => getServerSession(authOptions)