"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  stripeAccountId: z
    .string()
    .regex(/^acct_/, "Account ID must start with 'acct_'"),
});

interface Props {
  userId: string;
}

interface BodyResponse {
  userID: string;
  stripeAccountId: string;
}

const AccountSetup = ({ userId }: Props) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { stripeAccountId: "" },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["stripe-account-setup", userId],
    mutationFn: (body: BodyResponse) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/stripe/account-id`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.status) {
        toast.error(data.message ?? "Failed to connect your stripe account", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      toast.success(data.message ?? "Stripe Account Connected 🎉", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate({ userID: userId, stripeAccountId: values.stripeAccountId });
  };

  const isConnectDisable = !form.watch("stripeAccountId") || isPending;

  return (
    <div className="pb-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <div className="flex flex-col items-start justify-start gap-[24px] md:flex-row md:items-center md:justify-between">
          <div>
            <h5 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
              Account Setup
            </h5>
            <p className="opacity-70">
              Connect your Stripe account to receive payments
            </p>
          </div>
        </div>

        <div className="my-4 rounded-[10px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormLabel>Account ID</FormLabel>
              <div className="flex items-center gap-x-3">
                <FormField
                  control={form.control}
                  name="stripeAccountId"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Enter your account ID"
                          {...field}
                          className="h-[40px] flex-1"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isConnectDisable}
                  className="h-[40px]"
                >
                  {isPending ? "Connecting..." : "Connect"}
                </Button>
              </div>
              {form.formState.errors.stripeAccountId && (
                <p className="mt-3 text-[12px] text-red-500">
                  {form.formState.errors.stripeAccountId.message}
                </p>
              )}
            </form>
          </Form>
          <p className="mt-4 text-sm text-muted-foreground">
            Enter your account ID to connect and start receiving payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
