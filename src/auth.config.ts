import { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default {
    providers: [GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })]
} satisfies NextAuthConfig