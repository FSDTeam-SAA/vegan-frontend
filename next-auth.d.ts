import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  token: string;
  userId: string;
  role: string;
  accountType: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
