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
      async authorize(credentials) {
        if (!credentials) return null;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/login`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(credentials),
          },
        );

        const data = await response.json();

        if (!response.ok || !data.status) {
          throw new Error(data.message || "Login failed");
        }

        return data.user as User;
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
