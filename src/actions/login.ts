"use server";

import { loginSchema } from "@/app/(auth)/onboarding/login/_components/login-form";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

export interface ServerResType {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export const loginWithEmailAndPassword = async (
  data: z.infer<typeof loginSchema>,
) => {
  try {
    // Attempt to sign in with credentials
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false, // Disable automatic redirect to handle it manually
    });

    console.log("LOGIN SUCCESS");

    // If successful, return a success message
    return { success: true, message: "Login successful." };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("SERVER_ACTION_ERROR:", error);

    // Handle specific NextAuth errors
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            message: "Something went wrong",
          };

        default:
          return {
            success: false,
            message:
              " The email or password you entered is incorrect. Please try again.",
          };
      }
    }

    // Handle CallbackRouteError
    if (error.message.includes("CallbackRouteError")) {
      return {
        success: false,
        message: "Login failed. Please check your credentials and try again.",
      };
    }

    throw Error(error);
  }
};
