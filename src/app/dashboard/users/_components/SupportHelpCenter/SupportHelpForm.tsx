"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface Props {
  userId: string;
}

export default function SupportHelpForm({ userId }: Props) {
  const { isPending, mutate: createSupport } = useMutation({
    mutationKey: ["support-tickets-users"],
    mutationFn: (data: FormValues) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/usertickets`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userID: userId,
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
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  function onSubmit(data: FormValues) {
    createSupport(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full border-none bg-[#F8F5F2] shadow-none lg:p-[40px]">
        <CardHeader className="mb-[48px]">
          <CardTitle className="text-2xl">Need Help?</CardTitle>
          <CardDescription>
            Our professional support team is here to assist you with any issues
            you may have.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[18px] font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[16px] py-[13px]"
                        placeholder="Enter your full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[18px] font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[16px] py-[13px]"
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[18px] font-medium">
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-[48px] bg-white px-[16px] py-[13px]"
                        placeholder="Briefly describe your issue"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[18px] font-medium">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Explain the issue or request in detail "
                        className="min-h-[165px] resize-none bg-white px-[16px] py-[13px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="h-[40px] bg-[#1f2937]"
                  disabled={isPending}
                >
                  Submit{" "}
                  {isPending && <Loader2 className="ml-2 animate-spin" />}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
