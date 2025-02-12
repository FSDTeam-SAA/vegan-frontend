import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { AdapterUser } from "@auth/core/adapters";

export type User = AdapterUser & {
  token: string;
  userId: string;
  role: string;
  accountType: string; // Assuming there are fixed possible roles
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials) return null;
        const user =
          typeof credentials.data === "string"
            ? JSON.parse(credentials.data)
            : credentials.data;

        if (!user) return null;

        return {
          id: user.userId, // Use userId as the id
          token: user.token,
          userId: user.userId,
          role: user.role,
          accountType: user.accountType,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...session.user,
          ...token.user,
        };
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      console.log("USERID: ", token.sub);

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
