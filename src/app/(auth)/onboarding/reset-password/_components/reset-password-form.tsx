"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Local imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Response interface for API results
interface Response {
  status: boolean;
  message: string;
}

// Validation schema with zod
const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export function ResetPasswordForm() {
  const [loading, setLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false); // Show/hide password state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // Mutation for API call
  const { mutate, isPending } = useMutation<
    Response,
    unknown,
    { email: string; newPassword: string }
  >({
    mutationKey: ["reset-password"],
    mutationFn: async (data) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/reset-password`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          },
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result: Response = await response.json();
        return result;
      } catch (error) {
        toast.error("Unexpected error occurred");
        throw error;
      }
    },
    onSuccess: (data) => {
      setLoading(true); // Show loading when updating
      if (!data.status) {
        toast.error(data.message, {
          position: "bottom-right",
          richColors: true,
        });
        setLoading(false);
        return;
      }

      // Show success toast and redirect
      toast.success(data.message, {
        position: "bottom-right",
        richColors: true,
      });
      router.push("/onboarding/login?role=customer");
    },
    onError: () => {
      toast.error("Failed to update your password!");
    },
  });

  useEffect(() => {
    // Cleanup function to reset loading state
    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    // Redirect if email parameter is missing
    if (!email) {
      setLoading(true);
      router.push("/forget-password");
    }
  }, [email, router]);

  // Form configuration
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Form submit handler
  const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    if (!email) {
      toast.warning(
        "Unable to retrieve your email from the provided parameters. Please verify and try again.",
        {
          position: "bottom-right",
          richColors: true,
        },
      );
      return;
    }
    mutate({
      email: email,
      newPassword: values.password,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      className="w-full"
    >
      {/* Page heading */}
      <div className="space-y-2 text-center">
        <h1 className="text-[28px] font-medium leading-[33.89px] text-[#1F2937]">
          Reset Password
        </h1>
        <p className="text-[14px] font-normal text-[#6B7280]">
          Create your new password
        </p>
      </div>

      {/* Form component */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-[16px]">
            {/* New Password field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        className="h-[40px] w-full md:min-w-[350px]"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm New Password field */}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your new password"
                        className="h-[40px] md:min-w-[350px]"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOffIcon className="h-4 w-4" />
                        ) : (
                          <EyeIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="mt-[24px] h-[40px] w-full"
            disabled={loading || isPending}
          >
            {isPending
              ? "Updating new password..."
              : loading
                ? "Redirecting to login..."
                : "Update Password"}
          </Button>
        </form>
      </Form>

      {/* Loading message */}
      {loading && (
        <p className="mt-2 text-center text-[14px] text-gray-500">
          You will be redirected within 10 seconds
        </p>
      )}
    </motion.div>
  );
}

export default ResetPasswordForm;
