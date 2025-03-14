"use client";

// Packages
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Local imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";

type ApiResponse = {
  status: boolean; // Indicates the success or failure of the request
  message: string; // A general message describing the result
  error?: string; // Optional field for error details
  user?: {
    joinAs: string; // Role or type of the user (e.g., "customer")
    fullName: string; // Full name of the user
    email: string; // Email address of the user
    password: string; // Hashed password
    verifyEmail: boolean; // Indicates if the email is verified
    _id: string; // Unique identifier for the user
    createdAt: string; // Timestamp when the user was created
    updatedAt: string; // Timestamp when the user was last updated
    __v: number; // Version key (used by MongoDB)
  };
};

const formSchema = z
  .object({
    fullName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(128, { message: "Password must be at most 128 characters long." }),
    agree: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
    accountType: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const context = ctx as any;
    /* if (context?.role === "vendor" && !data.accountType) {
      ctx.addIssue({
        code: "custom",
        path: ["accountType"],
        message: "Account type is required for vendors.",
      });
    } */
    if (context?.role === "customer" && !data.fullName) {
      ctx.addIssue({
        code: "custom",
        path: ["fullName"],
        message: "Full name is required for customers.",
      });
    }
  });

const accountTypeLists = [
  {
    id: 1,
    value: "merchant",
    label: "Merchant",
    for: "vendor",
  },
  {
    id: 3,
    value: "organization",
    label: "Organization",
    for: "vendor",
  },
  {
    id: 3,
    value: "professional",
    label: "Professional",
    for: "vendor",
  },
  {
    id: 4,
    value: "vegan",
    label: "Vegan",
    for: "customer",
  },
  {
    id: 5,
    value: "nonVegan",
    label: "Non-Vegan",
    for: "customer",
  },
];

export default function SignUpForm() {
  const [loading, setLoading] = useState<true | false>(false);
  const { mutate, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: (data: {
      role: string | null;
      email: string;
      password: string;
      fullName?: string;
      accountType?: string;
    }) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data: ApiResponse) => {
      setLoading(true);
      console.log("SIGNUP_RESPONSE:", data);
      if (data.status) {
        toast.success("Sign up successful! 🎉", {
          position: "top-right",
          richColors: true,
        });
        router.push(`/onboarding/verify_email?joinAs=${role}`);
      } else {
        toast.error(`${data.message} ❌`, {
          position: "top-right",
          richColors: true,
        });
        setLoading(false);
      }
    },
    onError: () => {
      toast.error(
        " Sign up failed. Please check your details and try again. ❌",
        {
          position: "top-right",
          richColors: true,
        },
      );
    },
  });

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const ref = searchParams.get("ref");
  const agree = searchParams.get("agree");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    context: { role },
    defaultValues: {
      agree: !!agree,
    },
  });

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { agree, ...proccedData } = {
      ...values,
      role: role === "customer" ? "user" : role,
      ref,
    };

    mutate(proccedData);
  }

  const accountTypeMessage = {
    merchant: "Sell 100% vegan products on a trusted platform.",
    organization:
      "Promote your nonprofit initiatives, raise funds, and connect with the vegan community.",
    professional:
      "Offer your services as a verified vegan professional to a global audience.",
    vegan:
      "Join as a Vegan to maximize your impact, explore all-vegan services and products, and enjoy full profit-sharing benefits.",
    nonVegan:
      "Join as someone interested in exploring veganism. Support ethical practices while enjoying shared profits from your purchases.",
  };

  const termsPage = ref
    ? `/terms?role=${role}&ref=${ref}`
    : `/terms?role=${role}`;

  return (
    <div>
      {/* <SocialLogin /> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-3xl space-y-[16px] pt-[24px]"
        >
          <p></p>

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
                    {accountTypeLists
                      .filter((item) => item.for === role)
                      .map(({ value, label, id }) => (
                        <SelectItem
                          value={value}
                          className="max-w-3xl"
                          key={id}
                        >
                          {label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  {
                    accountTypeMessage[
                      (form.watch(
                        "accountType",
                      ) as keyof typeof accountTypeMessage) ?? ""
                    ]
                  }
                </FormDescription>
              </FormItem>
            )}
          />

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

          {form.watch("accountType") && (
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
                    {form.watch("accountType") === "professional" && (
                      <FormLabel className="font-inter text-[12px] font-normal leading-[20px] text-[#1F2937]">
                        As a Professional on Vegan Collective, you are part of a
                        trusted platform for ethical services. By continuing,
                        you agree to uphold{" "}
                        <Link
                          href={termsPage}
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          these commitments
                        </Link>{" "}
                        to ensure trust, quality, and alignment with our
                        mission.
                      </FormLabel>
                    )}
                    {form.watch("accountType") === "merchant" && (
                      <FormLabel className="font-inter text-[12px] font-normal leading-[20px] text-[#1F2937]">
                        As a Merchant on Vegan Collective, you are joining a
                        trusted platform for vegan products. By continuing, you
                        agree to uphold{" "}
                        <Link
                          href={termsPage}
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          these commitments
                        </Link>{" "}
                        to ensure trust, quality, and alignment with our
                        mission.
                      </FormLabel>
                    )}
                    {form.watch("accountType") === "organization" && (
                      <FormLabel className="font-inter text-[12px] font-normal leading-[20px] text-[#1F2937]">
                        As an Organization on Vegan Collective, you are part of
                        a trusted platform for promoting ethical initiatives. By
                        continuing, you agree to uphold{" "}
                        <Link
                          href={termsPage}
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          these commitments
                        </Link>{" "}
                        to ensure alignment with our mission and the trust of
                        your supporters.
                      </FormLabel>
                    )}

                    {role === "customer" && (
                      <FormLabel className="font-inter text-[12px] font-normal leading-[20px] text-[#1F2937]">
                        I agree to receive notifications about platform updates
                        and opportunities (optional).
                      </FormLabel>
                    )}

                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          )}
          <Button
            type="submit"
            className="relative mt-[24px] h-[48px] w-full rounded-[10px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 disabled:opacity-60"
            disabled={loading || isPending}
          >
            {loading || isPending ? "Creating an account..." : "Sign Up"}
            {loading ||
              (isPending && (
                <Loader2 className="absolute right-5 animate-spin" />
              ))}
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

// const SocialLogin = () => {
//   const searchParams = useSearchParams();
//   const role = searchParams.get("role");

//   if (role === "customer") {
//     return (
//       <div>
//         <Button className="h-[48px] w-full rounded-[10px] border-[1px] border-[#F4F0EB] bg-white text-[#374151] shadow-none transition-colors duration-300 hover:bg-gray-50">
//           <Image
//             src="https://res.cloudinary.com/dgnustmny/image/upload/v1738667858/flat-color-icons_google_rdpzpr.png"
//             alt="Google"
//             height={24}
//             width={24}
//           />
//           <span>Continue with Google</span>
//         </Button>

//         <div className="mt-[24px] flex items-center gap-[15px]">
//           <div className="h-[1.17px] w-full bg-[#D1D5DB]" />
//           <span className="text-[14px] font-normal leading-[16.41px] text-[#6B7280]">
//             OR
//           </span>
//           <div className="h-[1.17px] w-full bg-[#D1D5DB]" />
//           <div />
//         </div>
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// };
