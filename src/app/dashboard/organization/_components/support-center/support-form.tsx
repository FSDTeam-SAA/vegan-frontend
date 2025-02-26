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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  emailAddress: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Description must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  userId: string;
}

export default function SupportForm({ userId }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { isPending, mutate: createSupportTicket } = useMutation({
    mutationKey: ["create-organization-support"],
    mutationFn: (body: FormValues) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationsupport`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...body,
            organizationID: userId,
          }),
        },
      ).then((res) => res.json()),
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
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  function onSubmit(data: FormValues) {
    createSupportTicket(data);
  }

  return (
    <div className="rounded-lg bg-[#F8F5F2] p-6">
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold">Support</h1>
        <h2 className="text-lg">Need Help?</h2>
        <p className="text-muted-foreground">
          Our professional support team is here to assist you with any issues
          you may have.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="h-[40px] bg-[#FFFFFF]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                    className="h-[40px] bg-[#FFFFFF]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Briefly describe your issue"
                    {...field}
                    className="h-[40px] bg-[#FFFFFF]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explain the issue or request in detail"
                    className="min-h-[150px] bg-[#FFFFFF]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="h-[40px] bg-[#1f2937]"
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
