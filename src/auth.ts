import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { AdapterUser } from "@auth/core/adapters";
import { getUser, UserData } from "./actions/login";

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
          accountType: token.user.accountType,
          userId: token.user._id,
          email: token.user.email,
          role: token.user.role,
          token: token.user.token,
          paymentAdded: token.user.paymentAdded,
        };
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const data: UserData = await getUser(token?.sub);

      token.user = { ...data.data };

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
