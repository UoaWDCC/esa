import { getServerSession, SessionStrategy } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        })
  ],
    session: {
        strategy: 'jwt' as SessionStrategy
    },
}

export const getAuth = () => getServerSession(authOptions)