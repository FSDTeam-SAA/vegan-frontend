import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export type User = {
  _id: string;
  fullName: string;
  email: string;
  joinAs: "customer" | "admin" | "vendor"; // Assuming there are fixed possible roles
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials, req) {
        if (!credentials) return null;
        const body = await req.json();

        return body;
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
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
