"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
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
import { useMutation } from "@tanstack/react-query";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

interface Response {
  status: boolean;
  message: string;
}

export function ForgotPasswordForm() {
  const [loadiing, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation<
    Response,
    unknown,
    ForgotPasswordSchemaType
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

      router.push(`/reset-password?email=${form.getValues("email")}`);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleSubmit = (values: ForgotPasswordSchemaType) => {
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-[36px] space-y-6"
        >
          <div className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Write your email address"
                      className="h-[50px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loadiing || isPending}
          >
            {isPending
              ? "Generating a 6 Digit OTP"
              : loadiing
                ? "Wait a few second..."
                : " Send OTP"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
