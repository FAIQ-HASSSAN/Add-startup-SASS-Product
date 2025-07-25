import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

export const authConfig : NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
   secret:process.env.NEXTAUTH_SECRET,
   pages : {signIn: '/signin'},
   callbacks:{}
}