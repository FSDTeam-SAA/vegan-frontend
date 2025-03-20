"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Define the Zod schema for the form validation
const subscribeSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const SubscribeForm = () => {
  const form = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });
  const isError = form.formState.errors["email"]?.message;

  const { mutate, isPending } = useMutation({
    mutationKey: ["subscribe"],
    mutationFn: (body: SubscribeFormData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/subscribe`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success("You have successfully subscribed to our newsletter!", {
        position: "top-right",
        richColors: true,
      });

      form.setValue("email", "");
    },
  });

  // Handle form submission
  const onSubmit = (data: SubscribeFormData) => {
    mutate(data);
  };

  return (
    <div className="md:pt-[40px]">
      <h3 className="pb-4 font-medium text-[#1B365D]">Stay Up To Date</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-x-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter email"
                    className={`h-[48px] w-full rounded-[8px] border-0 bg-white p-[10px] md:w-[274px] lg:h-[40px] ${
                      isError ? "border-red-500" : ""
                    }`}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-[48px] w-full rounded-[8px] bg-[#1D3557] p-[10px] px-6 text-[14px] font-medium text-white hover:bg-[#1B365D]/90 md:w-[112px] lg:h-[40px]"
            disabled={isPending}
          >
            Subscribe {isPending && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SubscribeForm;
