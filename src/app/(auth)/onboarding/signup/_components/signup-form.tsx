"use client";

// Packages
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z
  .object({
    fullName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(128, { message: "Password must be at most 128 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[@$!%*?&]/, {
        message:
          "Password must contain at least one special character (@, $, !, %, *, ?, &).",
      }),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
    accountType: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = ctx as any;
    if (context?.role === "vendor" && !data.accountType) {
      ctx.addIssue({
        code: "custom",
        path: ["accountType"],
        message: "Account type is required for vendors.",
      });
    }
    if (context?.role === "customer" && !data.fullName) {
      ctx.addIssue({
        code: "custom",
        path: ["fullName"],
        message: "Full name is required for customers.",
      });
    }
  });

export default function SignUpForm() {
  const [loading, setLoading] = useState<true | false>(false);

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    context: { role },
  });

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setTimeout(() => {
      try {
        console.log(values);
        toast.success("Registration successfully", {
          position: "bottom-right",
          richColors: true,
        });

        router.push(`/onboarding/verify_email?role=${role}`);
      } catch (error) {
        setLoading(false);
        console.error("Form submission error", error);
        toast.error("Failed to submit the form. Please try again.", {
          position: "bottom-right",
          richColors: true,
        });
      } finally {
        form.reset();
      }
    }, 3000);
  }

  return (
    <div className="mt-[40px]">
      <SocialLogin />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-3xl space-y-[16px] pt-[24px]"
        >
          {role === "vendor" && (
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="merchant">Merchant</SelectItem>
                      <SelectItem value="organization">Organization</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {role === "customer" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-inter text-[14px] font-medium leading-[16.94px] text-[#111827]">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="h-[48px] rounded-[10px] border-[1px] border-[#F4F0EB] font-inter"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter text-[14px] font-medium leading-[16.94px] text-[#111827]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    className="h-[48px] rounded-[10px] border-[1px] border-[#F4F0EB] font-inter"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-inter text-[14px] font-medium leading-[16.94px] text-[#111827]">
                  Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter Password"
                    {...field}
                    className="h-[48px] rounded-[10px] border-[1px] border-[#F4F0EB] font-inter"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md pt-[24px]">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-inter text-[14px] font-normal leading-[20px] text-[#1F2937]">
                    I agree to receive notifications about platform updates and
                    opportunities.
                  </FormLabel>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="relative mt-[24px] h-[48px] w-full rounded-[10px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 disabled:opacity-60"
            disabled={loading}
          >
            Sign Up
            {loading && <Loader2 className="absolute right-5 animate-spin" />}
          </Button>
        </form>
      </Form>
      <p className="mt-[32px] text-center text-[14px] font-normal leading-[16.94px] text-[#9CA3AF]">
        Already have an account?{" "}
        <Link
          href={`/onboarding/login?role=${role}`}
          className="font-medium text-[#1D3557] hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}

const SocialLogin = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  if (role === "customer") {
    return (
      <div>
        <Button className="h-[48px] w-full rounded-[10px] border-[1px] border-[#F4F0EB] bg-white text-[#374151] shadow-none transition-colors duration-300 hover:bg-gray-50">
          <Image
            src="https://res.cloudinary.com/dgnustmny/image/upload/v1738667858/flat-color-icons_google_rdpzpr.png"
            alt="Google"
            height={24}
            width={24}
          />
          <span>Continue with Google</span>
        </Button>

        <div className="mt-[24px] flex items-center gap-[15px]">
          <div className="h-[1.17px] w-full bg-[#D1D5DB]" />
          <span className="text-[14px] font-normal leading-[16.41px] text-[#6B7280]">
            OR
          </span>
          <div className="h-[1.17px] w-full bg-[#D1D5DB]" />
          <div />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
