import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  token: string;
  userId: string;
  role: string;
  accountType: "merchant" | "professional" | "organization" | null;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: {
      _id: string;
      role: string;
      email: string;
      accountType: "merchant" | "professional" | "organization" | null;
    };
  }
}
