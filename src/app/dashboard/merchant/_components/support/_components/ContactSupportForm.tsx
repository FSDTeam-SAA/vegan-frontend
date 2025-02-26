"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSupportProps {
  setIsOpen: (open: boolean) => void;
  userId: string;
}

export default function ContactSupportForm({
  setIsOpen,
  userId,
}: ContactSupportProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: "", message: "" },
  });

  const { isPending, mutate: createSupportTicket } = useMutation({
    mutationKey: ["create-merchant-support"],
    mutationFn: (body: FormValues) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchentsupport`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          merchantID: userId,
        }),
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
      form.reset();
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });

      setIsOpen(false);
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    createSupportTicket(data);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-h-[553px] max-w-[700px] space-y-4 rounded-lg bg-white px-[32px] py-[40px] shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium leading-[24px] text-[#1F2937]">
              Contact Support
            </h4>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leadng-[26px] pb-[16px] text-lg font-medium text-[#1F2937]">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] w-full border border-[#F3F4F6] bg-[#F9FAFB] md:w-[636px]"
                    placeholder="Enter subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leadng-[26px] pb-[16px] text-lg font-medium text-[#1F2937]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[165px] w-full border border-[#F3F4F6] bg-[#F9FAFB] md:w-[636px]"
                    placeholder="Enter your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-[32px]">
            <Button
              size="xl"
              type="submit"
              className="px-[23px] py-[14px] text-base font-semibold leading-[19px] text-white md:px-[47px]"
              disabled={isPending}
            >
              Submit {isPending && <Loader2 className="ml-2 animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
