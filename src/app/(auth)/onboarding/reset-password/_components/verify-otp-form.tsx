"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers"),
  email: z.string().email("Please enter a valid email address"),
});

type OTPSchemaType = z.infer<typeof otpSchema>;

interface VerifyOTPFormProps {
  onVerified: () => void;
}

interface Response {
  status: boolean;
  message: string;
}

export function VerifyOTPForm({ onVerified }: VerifyOTPFormProps) {
  const [closeTimer, setCloseTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(false);
  const searchparams = useSearchParams();

  const email = searchparams.get("email");

  const form = useForm<OTPSchemaType>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
      email: email || "",
    },
  });

  const { mutate: resendOtp, isPending: isResending } = useMutation<
    Response,
    unknown,
    { email: string }
  >({
    mutationKey: ["forget-password"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/forgot-password`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.status) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      form.reset();
      toast.success(data.message, {
        position: "bottom-right",
        richColors: true,
      });
      startResendTimer();
    },
    onError: () => toast.error("Something went wrong"),
  });

  const { mutate, isPending } = useMutation<Response, unknown, OTPSchemaType>({
    mutationKey: ["OTP_Verify"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.status) {
        form.setError("otp", {
          type: "manual",
          message: data.message,
        });
        return;
      }
      // handle success
      onVerified();
    },
    onError: () => toast.error("Something went wrong!"),
  });

  const startResendTimer = () => {
    setCloseTimer(30);
    setResendDisabled(true);
    const timer = setInterval(() => {
      setCloseTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = (values: OTPSchemaType) => mutate(values);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] font-semibold text-[#1F2937]">
          Verify Email
        </h1>
        <p className="text-base text-[#444444]">
          Please enter the OTP we have sent to your Email.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="!mt-[36px] space-y-4"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center">
                <FormControl>
                  <InputOTP maxLength={6} {...field} className="w-full">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4 flex items-center justify-between">
            <span className="text-base text-[#444444]">
              Didn’t receive OTP?
            </span>
            <Button
              type="button"
              variant="link"
              className="text-gradient text-base"
              onClick={() => resendOtp({ email: email || "" })}
              disabled={resendDisabled || isResending}
            >
              {resendDisabled ? `Resend in ${closeTimer}s` : "Resend"}
            </Button>
          </div>
          <Button
            type="submit"
            className="h-[46px] w-full"
            disabled={isPending || isResending}
          >
            {isPending ? "Wait a second..." : "Verify"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}

export default VerifyOTPForm;
