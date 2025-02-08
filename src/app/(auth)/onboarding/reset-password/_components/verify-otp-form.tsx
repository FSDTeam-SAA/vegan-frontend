"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Local imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
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
  const [loading, setLoading] = useState(false);
  const [closeTimer, setCloseTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(false);
  const searchparams = useSearchParams();
  const router = useRouter();

  const email = searchparams.get("email");

  const { mutate: resendOtp, isPending: isResending } = useMutation<
    Response,
    unknown,
    { email: string }
  >({
    mutationKey: ["forget-password"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forget-password`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      setLoading(true);
      if (!data.status) {
        form.setError("email", {
          type: "manual",
          message: data.message,
        });

        setLoading(false);
        return;
      }
      // handle success
      toast.success(data.message, {
        position: "bottom-right",
        richColors: true,
      });

      setLoading(false);

      startResendTimer(); // Start the cooldown timer
    },
    onError: () => {
      toast.error("Something went wrong");
    },
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

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    if (!email) {
      setLoading(true);
      router.push("/forget-password");
    }
  }, [email, router]);

  const form = useForm<OTPSchemaType>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
      email: email || "",
    },
  });

  const { mutate, isPending } = useMutation<Response, unknown, OTPSchemaType>({
    mutationKey: ["OTP_Verify"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/checkotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    onError: (err: any) => {
      toast.error("Something went wrong!", err);
    },
  });

  const handleSubmit = (values: OTPSchemaType) => {
    mutate(values);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-full"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-[36px] font-semibold leading-[43.2px] text-[#1F2937]">
          Verify Email
        </h1>
        {form.formState.errors.otp ? (
          <p className="text-base font-normal leading-[19.2px] text-[#E10E0E]">
            {form.formState.errors.otp.message}
          </p>
        ) : (
          <p className="text-base font-normal leading-[19.2px] text-[#444444]">
            Please enter the OTP we have sent you in your Email Address.
          </p>
        )}
      </div>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="!mt-[36px] space-y-4"
      >
        <div className="flex justify-between">
          {[...Array(6)].map((_, i) => (
            <Input
              key={i}
              id={`otp-input-${i}`}
              type="text"
              maxLength={1}
              value={form.watch("otp")[i] || ""}
              onChange={(e) => {
                form.clearErrors("otp");
                const value = e.target.value;
                if (!/^[0-9]*$/.test(value)) return;

                const currentOtp = form.getValues("otp");
                const updatedOtp =
                  currentOtp.substring(0, i) +
                  value.slice(-1) +
                  currentOtp.substring(i + 1);

                form.setValue("otp", updatedOtp);

                // Move focus to the next input
                if (value && i < 5) {
                  const nextInput = document.getElementById(
                    `otp-input-${i + 1}`,
                  );
                  if (nextInput) (nextInput as HTMLInputElement).focus();
                }
              }}
              onKeyDown={(e) => {
                // Handle Backspace key to focus on the previous input
                if (e.key === "Backspace" && !form.watch("otp")[i] && i > 0) {
                  const prevInput = document.getElementById(
                    `otp-input-${i - 1}`,
                  );
                  if (prevInput) {
                    (prevInput as HTMLInputElement).focus();
                    const currentOtp = form.getValues("otp");
                    const updatedOtp =
                      currentOtp.substring(0, i - 1) +
                      " " + // Clear the previous input value if needed
                      currentOtp.substring(i);
                    form.setValue("otp", updatedOtp.trim());
                  }
                }
              }}
              className={`h-[70px] w-[43.83px] rounded-[12px] border-[1px] text-center !text-[30px] text-xl !font-medium !leading-[45px] text-[#4E4E4E] focus:outline-none focus:ring-2 focus:ring-[#121D42] lg:h-[90px] lg:w-[70px] lg:rounded-[20px] ${
                form.formState.errors.otp
                  ? "border-red-500/50 bg-red-200/50"
                  : form.watch("otp")[i]
                    ? "border-[#121D42] bg-[#E6EEF6]"
                    : "border-[#C5C5C5] bg-white"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-normal leading-[19.2px] text-[#444444]">
            Didn’t receive OTP?
          </span>
          <Button
            type="button"
            variant="link"
            className="text-gradient text-base font-normal leading-[19.2px] disabled:text-gray-500 disabled:opacity-80"
            onClick={() => {
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
              resendOtp({ email: email });
            }}
            disabled={resendDisabled || isResending}
          >
            {resendDisabled ? `Resend in ${closeTimer}s` : "Resend"}
          </Button>
        </div>
        <Button
          type="submit"
          className="h-[46px] w-full"
          disabled={loading || isPending || isResending}
        >
          {loading ? "Wait a second..." : "Verify"}
        </Button>
      </form>
    </motion.div>
  );
}

export default VerifyOTPForm;
