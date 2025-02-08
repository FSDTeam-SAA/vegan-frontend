import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

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

        return data.user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
