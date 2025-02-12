"use server";

import { loginSchema } from "@/app/(auth)/onboarding/login/_components/login-form";
import { signIn } from "@/auth";
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/login`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const resData = await response.json();

    if (!response.ok || !resData.status) {
      throw new Error(resData.message || "Login failed");
    }

    // // Attempt to sign in with credentials
    await signIn("credentials", {
      data: JSON.stringify({
        token: resData["data"]["token"],
        userId: resData["data"]["user"]["_id"],
        role: resData["data"]["user"]["role"],
        accountType: resData["data"]["user"]["accountType"] ?? "",
      }),
      redirect: false, // Disable automatic redirect to handle it manually
      email: data.email,
      password: data.password,
    });

    // If successful, return a success message
    return { success: true, message: "Login successful." } as ServerResType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("SERVER_ACTION_ERROR:", error);

    return {
      success: false,
      message: error.message,
    } as ServerResType;
  }
};
