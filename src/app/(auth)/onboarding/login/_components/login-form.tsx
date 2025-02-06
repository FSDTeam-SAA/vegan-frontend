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

import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string(),
});

export default function LoginForm() {
  const [loading, setLoading] = useState<true | false>(false);

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

          <div className="flex justify-end">
            <Link
              href="/"
              className="font-inter text-[14px] font-medium leading-[16.94px] text-[#1D3557] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

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
        Don&apos;t have an account?{" "}
        <Link
          href={`/onboarding/signup?role=${role}`}
          className="font-medium text-[#1D3557] hover:underline"
        >
          Sign Up
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
